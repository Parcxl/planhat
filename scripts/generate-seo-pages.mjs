import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const distRoot = join(projectRoot, "dist")
const sourceHtml = await readFile(join(distRoot, "index.html"), "utf8")

const siteUrl = "https://www.sendwise.nl"
const routePath = "/kennisbank/retourportaal-herroepingsrecht"
const canonicalUrl = `${siteUrl}${routePath}`
const title = "Retourportaal & herroepingsrecht voor webshops | Sendwise"
const description =
  "Ontdek wat het herroepingsrecht betekent voor webshops en hoe een aanpasbaar Sendwise-retourportaal retouren eenvoudiger en schaalbaar maakt."
const socialImage = `${siteUrl}/retour-afbeelding-2.png`
const socialImageAlt = "Voorbeeld van het aanpasbare retourportaal van Sendwise"

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")

const replaceMeta = (html, attribute, key, value) => {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[\\s\\S]*?\\/?>`, "i")
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `  ${tag}\n</head>`)
}

const articleStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      headline: "Waarom makkelijk retourneren geen luxe meer is",
      description,
      image: [socialImage],
      datePublished: "2026-07-03",
      dateModified: "2026-07-17",
      inLanguage: "nl-NL",
      author: {
        "@type": "Organization",
        name: "Sendwise Team",
        url: `${siteUrl}/over-ons`,
      },
      publisher: { "@id": `${siteUrl}/#organization` },
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: ["Retourportaal", "Herroepingsrecht", "Webshops", "Retouren"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Kennisbank", item: `${siteUrl}/kennisbank` },
        { "@type": "ListItem", position: 3, name: "Retourportaal en herroepingsrecht", item: canonicalUrl },
      ],
    },
  ],
}

const staticArticle = `
  <main style="font-family:Inter,system-ui,sans-serif;color:#0d1321;background:#fff;padding:48px 20px 80px">
    <article style="max-width:920px;margin:0 auto;line-height:1.75">
      <a href="/kennisbank" style="color:#1a5ee5;font-weight:600;text-decoration:none">← Terug naar kennisbank</a>
      <p style="margin:32px 0 12px;color:#6f7694;font-weight:600">Retouren &amp; herroepingsrecht</p>
      <h1 style="max-width:850px;margin:0;color:#07115a;font-size:clamp(42px,7vw,72px);line-height:1.02;font-weight:600">Waarom makkelijk retourneren geen luxe meer is</h1>
      <p style="max-width:760px;margin:28px 0 10px;color:#526078;font-size:18px">Retouren zijn niet alleen een operationeel proces. Ze raken je klantbeleving, je conversie en je verplichtingen als webshop. Met een goed retourportaal maak je retourneren duidelijker, sneller en beter schaalbaar.</p>
      <p style="color:#5e6a80">Door Sendwise Team · 3 juli 2026 · ongeveer 5 minuten lezen</p>
      <figure style="margin:40px 0">
        <img src="/profile-joep.webp" alt="Joep van Sendwise bij de blauwe Sendwise-bus" width="1254" height="1254" style="display:block;width:100%;max-width:560px;border-radius:28px" />
        <figcaption style="max-width:560px;margin-top:12px;color:#334155;font-weight:600">“Met het retourportaal maken klanten zelf eenvoudig een retour aan, terwijl jij overzicht houdt op iedere status.” — Joep van Sendwise</figcaption>
      </figure>
      <section>
        <p>Retouren zijn voor veel webshops nog steeds een noodzakelijk kwaad. Ze kosten tijd, geld en aandacht. Toch wordt een soepel retourproces steeds belangrijker. Niet alleen omdat consumenten het verwachten, maar ook omdat wet- en regelgeving rondom online aankopen duidelijke eisen stelt aan het herroepingsrecht.</p>
        <p>In Nederland en de rest van Europa geldt bij online aankopen in veel gevallen een wettelijke bedenktijd van 14 dagen. Binnen die periode mag een consument de koop herroepen, zonder daarvoor een reden te hoeven geven.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Herroepingsrecht: wat betekent het voor webshops?</h2>
        <p>Het herroepingsrecht geeft consumenten bij online aankopen het recht om binnen 14 dagen af te zien van de aankoop. Voor producten geldt deze periode vanaf het moment van levering. Voor diensten geldt de termijn vanaf het moment dat de overeenkomst is gesloten.</p>
        <p>Klanten moeten vooraf duidelijk geïnformeerd worden over retourvoorwaarden en eventuele retourkosten. Retouren zijn daarmee onderdeel van je wettelijke informatieplicht, je klantbeleving en je operationele proces.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Waarom makkelijker retourneren steeds belangrijker wordt</h2>
        <p>Een duidelijk retourproces, automatische retourlabels, transparante kosten, statusupdates en minder handmatig werk helpen om vertrouwen op te bouwen.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Retourneren in Nederland en Europa</h2>
        <p>Internationaal retourneren wordt complexer door verschillende vervoerders, tarieven en klantverwachtingen. Toch verwacht de consument overal hetzelfde: snel, duidelijk en zonder gedoe retourneren.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Een volledig aanpasbaar retourportaal</h2>
        <img src="/retour-afbeelding-2.png" alt="Voorbeeld van een volledig aanpasbaar retourportaal in Sendwise" width="1190" height="650" style="display:block;width:100%;margin:24px 0;border-radius:24px" />
        <p>Met het retourportaal van Sendwise melden klanten zelf hun retour aan. Jij bepaalt welke retourredenen en verzendmethodes beschikbaar zijn en houdt overzicht op iedere status.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Waarom kiezen voor Sendwise?</h2>
        <p>Je krijgt een professioneel, volledig aanpasbaar retourportaal en scherpe verzendprijzen. Zo wordt retourneren een beheersbaar onderdeel van je logistieke proces.</p>
        <p style="margin-top:36px"><a href="/start-met-sendwise" style="display:inline-block;border-radius:12px;background:#1a5ee5;color:#fff;padding:12px 20px;font-weight:600;text-decoration:none">Direct registreren</a></p>
        <p style="margin-top:44px;color:#5e6a80;font-size:14px">Bron: <a href="https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_en.htm">Europese Commissie / Your Europe</a>.</p>
      </section>
    </article>
  </main>`

let articleHtml = sourceHtml
  .replace(/<html\s+lang="[^"]*"/i, '<html lang="nl"')
  .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
  .replace(/<link\s+rel="canonical"[\s\S]*?\/?\s*>/i, `<link rel="canonical" href="${canonicalUrl}" />`)

articleHtml = replaceMeta(articleHtml, "name", "description", description)
articleHtml = replaceMeta(articleHtml, "name", "robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1")
articleHtml = replaceMeta(articleHtml, "property", "og:locale", "nl_NL")
articleHtml = replaceMeta(articleHtml, "property", "og:type", "article")
articleHtml = replaceMeta(articleHtml, "property", "og:site_name", "Sendwise")
articleHtml = replaceMeta(articleHtml, "property", "og:title", title)
articleHtml = replaceMeta(articleHtml, "property", "og:description", description)
articleHtml = replaceMeta(articleHtml, "property", "og:url", canonicalUrl)
articleHtml = replaceMeta(articleHtml, "property", "og:image", socialImage)
articleHtml = replaceMeta(articleHtml, "property", "og:image:alt", socialImageAlt)
articleHtml = replaceMeta(articleHtml, "name", "twitter:card", "summary_large_image")
articleHtml = replaceMeta(articleHtml, "name", "twitter:title", title)
articleHtml = replaceMeta(articleHtml, "name", "twitter:description", description)
articleHtml = replaceMeta(articleHtml, "name", "twitter:image", socialImage)
articleHtml = replaceMeta(articleHtml, "name", "twitter:image:alt", socialImageAlt)

articleHtml = articleHtml
  .replace(
    /<script\s+id="route-structured-data"[\s\S]*?<\/script>/i,
    `<script id="route-structured-data" type="application/ld+json">${JSON.stringify(articleStructuredData).replaceAll("<", "\\u003c")}</script>`,
  )
  .replace(
    "</head>",
    `  <meta property="article:published_time" content="2026-07-03" />\n  <meta property="article:modified_time" content="2026-07-17" />\n  <meta property="article:author" content="Sendwise Team" />\n</head>`,
  )
  .replace('<div id="root"></div>', `<div id="root">${staticArticle}</div>`)

const outputPath = join(distRoot, routePath.slice(1), "index.html")
await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, articleHtml)

console.log(`Generated SEO page: ${routePath}`)
