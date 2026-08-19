import { mkdir, readFile, writeFile } from "node:fs/promises"
import { basename, extname, join } from "node:path"

const [, , outputFile, publicDirectory, ...inputFiles] = process.argv
if (!outputFile || !publicDirectory || inputFiles.length === 0) {
  throw new Error("Gebruik: node scripts/import-html-guides.mjs <output> <public-dir> <html...>")
}

const PUBLISHED_TIME = "2026-08-19"

const configurations = {
  "Sendwise bol.com retailer koppelen handleiding.html": {
    path: "/kennisbank/bol-com-koppelen", slug: "bol-com-koppelen", category: "Integraties",
    image: "/bol-logo.png", imageAlt: "bol.com koppelen aan Sendwise", imageClassName: "object-contain p-16", imageBackground: "bg-[#ffffff]",
  },
  "Sendwise CCV Shop koppelen handleiding.html": {
    path: "/kennisbank/ccv-shop-koppelen", slug: "ccv-shop-koppelen", category: "Integraties",
    image: "/ccv-icon.svg", imageAlt: "CCV Shop koppelen aan Sendwise", imageClassName: "object-contain p-16", imageBackground: "bg-[#eef5ff]",
  },
  "Sendwise Lightspeed koppelen handleiding.html": {
    path: "/kennisbank/lightspeed-koppelen", slug: "lightspeed-koppelen", category: "Integraties",
    image: "/lightspeed.webp", imageAlt: "Lightspeed koppelen aan Sendwise", imageClassName: "object-contain p-16", imageBackground: "bg-[#ffffff]",
  },
  "Sendwise Magento 2 koppelen handleiding.html": {
    path: "/kennisbank/magento-2-koppelen", slug: "magento-2-koppelen", category: "Integraties",
    image: "/magento.jpg", imageAlt: "Magento 2 koppelen aan Sendwise", imageClassName: "object-contain p-16", imageBackground: "bg-[#ffffff]",
  },
  "Sendwise Mijnwebwinkel koppelen handleiding.html": {
    path: "/kennisbank/mijnwebwinkel-koppelen", slug: "mijnwebwinkel-koppelen", category: "Integraties",
    image: "/mijnwebwinkel.webp", imageAlt: "Mijnwebwinkel koppelen aan Sendwise", imageClassName: "object-contain p-16", imageBackground: "bg-[#ffffff]",
  },
  "Sendwise PrestaShop koppelen handleiding.html": {
    path: "/kennisbank/prestashop-koppelen", slug: "prestashop-koppelen", category: "Integraties",
    image: "/prestashop.webp", imageAlt: "PrestaShop koppelen aan Sendwise", imageClassName: "object-contain p-16", imageBackground: "bg-[#ffffff]",
  },
  "Sendwise retourportaal instellen handleiding.html": {
    path: "/kennisbank/retourportaal-instellen", slug: "retourportaal-instellen", category: "Retouren",
    image: "/retour-afbeelding-2.png", imageAlt: "Retourportaal instellen in Sendwise", imageClassName: "object-contain p-5", imageBackground: "bg-[#edf4ff]",
  },
  "Sendwise Shopify OAuth koppelen handleiding.html": {
    path: "/kennisbank/shopify-koppelen", slug: "shopify-koppelen", category: "Integraties",
    image: "/shopify-logo.webp", imageAlt: "Shopify via OAuth koppelen aan Sendwise", imageClassName: "object-contain p-16", imageBackground: "bg-[#ffffff]",
  },
  "Sendwise blog retourportaal herroepingsrecht.html": {
    path: "/kennisbank/retourregels-herroepingsrecht", slug: "retourregels-herroepingsrecht", category: "Retouren", type: "Blog",
    image: "/kennisbank-retourproces.jpg", imageAlt: "Een duidelijk retourproces voor webshops",
  },
}

const decodeHtml = (value) => value
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))

const text = (html = "") => decodeHtml(html)
  .replace(/<br\s*\/?\s*>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim()

const clip = (value, limit) => {
  const clean = text(value)
  if (clean.length <= limit) return clean
  return `${clean.slice(0, limit - 1).replace(/\s+\S*$/, "").replace(/[,:;\s]+$/, "")}…`
}

const slugify = (value) => text(value)
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")

const attr = (tag, name) => tag.match(new RegExp(`${name}=["']([^"']*)["']`, "i"))?.[1] || ""
const elements = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi"))]

const parseFigures = (html) => elements(html, "figure").map((match) => {
  const imageTag = match[1].match(/<img\b[^>]*>/i)?.[0] || ""
  return {
    image: attr(imageTag, "src"),
    imageAlt: attr(imageTag, "alt") || text(match[1].match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i)?.[1] || "Sendwise handleiding"),
    caption: text(match[1].match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i)?.[1] || ""),
  }
}).filter((figure) => figure.image)

const parseList = (html, tag) => elements(html, tag).flatMap((list) => elements(list[1], "li").map((item) => ({
  text: text(item[1].replace(/<figure\b[\s\S]*?<\/figure>/gi, "")),
  figure: parseFigures(item[1])[0],
}))).filter((item) => item.text)

const parseParagraphs = (html) => elements(html, "p").map((paragraph) => ({
  text: text(paragraph[1]),
  kind: /class=["'][^"']*(note|warning|tip|success)[^"']*["']/i.exec(paragraph[0])?.[1]?.toLowerCase() || "paragraph",
})).filter((paragraph) => paragraph.text)

const parseSection = (sectionHtml) => {
  const heading = text(sectionHtml.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/i)?.[1] || "")
  const sectionClass = attr(sectionHtml.match(/<section\b[^>]*>/i)?.[0] || "", "class")
  const subsectionMatches = [...sectionHtml.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3\b|$)/gi)]
  const subsections = subsectionMatches.map((match) => ({
    title: text(match[1]),
    paragraphs: parseParagraphs(match[2]).map((paragraph) => paragraph.text),
  })).filter((subsection) => subsection.title)
  const withoutSubsections = sectionHtml.replace(/<h3\b[^>]*>[\s\S]*$/i, "")
  const withoutLists = withoutSubsections.replace(/<(ol|ul)\b[\s\S]*?<\/\1>/gi, "")
  const withoutFigures = withoutLists.replace(/<figure\b[\s\S]*?<\/figure>/gi, "")
  const paragraphs = parseParagraphs(withoutFigures)
  const guideSteps = parseList(sectionHtml, "ol")
  const bulletItems = parseList(sectionHtml, "ul").map((item) => item.text)
  const benefitItems = [...sectionHtml.matchAll(/<div\b[^>]*class=["'][^"']*benefit[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi)].map((item) => text(item[1])).filter(Boolean)
  const figuresOutsideLists = parseFigures(sectionHtml.replace(/<(ol|ul)\b[\s\S]*?<\/\1>/gi, ""))

  return {
    heading,
    sectionClass,
    paragraphs: paragraphs.filter((paragraph) => paragraph.kind === "paragraph").map((paragraph) => paragraph.text),
    notes: paragraphs.filter((paragraph) => paragraph.kind !== "paragraph"),
    guideSteps,
    items: [...bulletItems, ...benefitItems],
    subsections,
    figures: figuresOutsideLists,
  }
}

await mkdir(publicDirectory, { recursive: true })
const records = {}

for (const inputFile of inputFiles) {
  const fileName = basename(inputFile)
  const config = configurations[fileName]
  if (!config) throw new Error(`Geen importconfiguratie voor ${fileName}`)

  let html = await readFile(inputFile, "utf8")
  html = html.replace(/<style\b[\s\S]*?<\/style>/gi, "").replace(/<script\b[\s\S]*?<\/script>/gi, "")

  let imageIndex = 0
  for (const imageTag of [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0])) {
    const source = attr(imageTag, "src")
    const data = source.match(/^data:image\/(png|jpeg|jpg|webp);base64,([\s\S]+)$/i)
    if (!data) continue
    imageIndex += 1
    const extension = data[1].toLowerCase().replace("jpeg", "jpg")
    const file = `${config.slug}-stap-${imageIndex}.${extension}`
    await writeFile(join(publicDirectory, file), Buffer.from(data[2], "base64"))
    html = html.replace(imageTag, imageTag.replace(source, `/kennisbank-handleidingen/${file}`))
  }

  const title = text(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "")
  const intro = text(html.match(/<p\b[^>]*class=["'][^"']*intro[^"']*["'][^>]*>([\s\S]*?)<\/p>/i)?.[1] || "")
  const metaDescription = attr(html.match(/<meta\b[^>]*name=["']description["'][^>]*>/i)?.[0] || "", "content")
  const sectionMatches = [...html.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/gi)]
  const parsedSections = sectionMatches.map((match) => parseSection(match[0]))
  const summarySection = parsedSections.find((section) => /footer/.test(section.sectionClass) || /^klaar$/i.test(section.heading))
  const sourceSection = parsedSections.find((section) => /sources/.test(section.sectionClass))
  const ctaSection = parsedSections.find((section) => /cta/.test(section.sectionClass))
  const initialParagraphs = parsedSections
    .filter((section) => !section.heading && section !== summarySection && section !== sourceSection && section !== ctaSection)
    .flatMap((section) => section.paragraphs)
  const contentSections = parsedSections.filter((section) => section.heading && section !== summarySection && section !== sourceSection && section !== ctaSection)
    .map((section) => ({
      id: slugify(section.heading),
      eyebrow: section.guideSteps.length ? "Stap voor stap" : "Uitleg",
      title: section.heading,
      ...(section.paragraphs.length ? { paragraphs: section.paragraphs } : {}),
      ...(section.notes.length ? { notes: section.notes } : {}),
      ...(section.guideSteps.length ? { guideSteps: section.guideSteps } : {}),
      ...(section.items.length ? { items: section.items.map((item) => ({ title: item, text: "" })) } : {}),
      ...(section.subsections.length ? { subsections: section.subsections } : {}),
      ...(section.figures.length ? { figures: section.figures } : {}),
    }))

  const summary = summarySection?.paragraphs.join(" ") || ctaSection?.paragraphs.join(" ") || intro
  const sourceHtml = sourceSection
    ? sectionMatches.find((match) => /class=["'][^"']*sources/.test(match[0]))?.[0] || ""
    : ""
  const htmlSourceLinks = [...sourceHtml.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
    .map((match) => ({ label: text(match[2]) || "Officiële bron", href: match[1] }))

  const allText = text(html)
  const isBlog = config.type === "Blog"
  records[config.path] = {
    title,
    seoTitle: `${clip(title.replace(/:\s*waarom[\s\S]*$/i, ""), 46)} | Sendwise`,
    description: clip(metaDescription || summary || intro, 155),
    excerpt: clip(intro, 190),
    type: config.type || "Handleiding",
    category: config.category,
    readTime: `± ${Math.max(4, Math.ceil(allText.split(/\s+/).length / 180))} min`,
    publishedTime: PUBLISHED_TIME,
    image: config.image,
    imageAlt: config.imageAlt,
    ...(config.imageClassName ? { imageClassName: config.imageClassName } : {}),
    ...(config.imageBackground ? { imageBackground: config.imageBackground } : {}),
    quickAnswer: isBlog ? intro : "Volg de stappen in deze handleiding in de aangegeven volgorde. Controleer daarna de verbinding en sla de koppeling of instellingen op voordat je met echte orders of retouren werkt.",
    introTitle: isBlog ? "Retouren horen bij de volledige klantreis" : "Dit heb je nodig voordat je begint",
    introEyebrow: config.category,
    intro: [intro, ...initialParagraphs].filter(Boolean),
    sections: contentSections,
    sendwise: ctaSection?.paragraphs.join(" ") || `Na het instellen beheer je deze koppeling rechtstreeks vanuit Sendwise. Controleer de eerste geïmporteerde order of retour en neem contact op met Sendwise wanneer de verbinding niet werkt zoals verwacht.`,
    summary,
    faqs: isBlog ? [
      { question: "Waar moet een duidelijk retourproces aan voldoen?", answer: "Zorg voor heldere voorwaarden, een eenvoudig aanmeldproces, transparante kosten en actuele communicatie over de status van de retour en terugbetaling." },
      { question: "Hoe helpt een retourportaal bij het herroepingsrecht?", answer: "Een retourportaal maakt het voor klanten eenvoudiger om een retour binnen de wettelijke termijn aan te melden en helpt de webshop om aanvragen centraal en aantoonbaar te verwerken." },
    ] : [
      { question: `Hoe weet ik of de koppeling voor ${title.split(" koppelen")[0].toLowerCase()} is gelukt?`, answer: "Controleer of de integratie of instelling als actief wordt weergegeven en voer daarna een test uit met een recente order of retouraanmelding." },
      { question: "Wat moet ik doen als de verbinding niet werkt?", answer: "Controleer het domein, de ingevoerde sleutel of autorisatie en de toegekende rechten. Sla opnieuw op en neem contact op met Sendwise als de fout blijft bestaan." },
    ],
    sources: htmlSourceLinks.length ? htmlSourceLinks : [{ label: "Sendwise: integraties en verzendoplossingen", href: "https://www.sendwise.nl/integraties" }],
    about: isBlog ? ["Herroepingsrecht", "Retourportaal", "Retouren", "Webshop"] : [title.split(" koppelen")[0], "Integratie", "Handleiding", "Sendwise"],
    breadcrumb: clip(title, 64),
  }
}

await writeFile(outputFile, `// Geïmporteerd uit de aangeleverde HTML-handleidingen; alleen inhoud en screenshots zijn overgenomen.\nexport const GUIDE_ARTICLES = ${JSON.stringify(records, null, 2)}\n`)
console.log(`Imported ${Object.keys(records).length} HTML guides into ${outputFile}`)
