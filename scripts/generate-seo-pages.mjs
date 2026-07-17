import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const distRoot = join(projectRoot, "dist")
const sourceHtml = await readFile(join(distRoot, "index.html"), "utf8")

const siteUrl = "https://www.sendwise.nl"
const routePath = "/kennisbank/retourportaal-herroepingsrecht"
const canonicalUrl = `${siteUrl}${routePath}`
const title = "Herroepingsknop voor webshops verplicht | Sendwise"
const description =
  "Lees wat de verplichte herroepingsknop betekent voor webshops en hoe Sendwise het herroepingsproces compliant en automatisch inricht."
const socialImage = `${siteUrl}/retour-afbeelding-2.png`
const socialImageAlt = "Voorbeeld van het herroepingsproces in Sendwise"

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
      headline: "De nieuwe herroepingsknop voor webshops",
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
      about: ["Herroepingsknop", "Herroepingsrecht", "Webshops", "ACM"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Kennisbank", item: `${siteUrl}/kennisbank` },
        { "@type": "ListItem", position: 3, name: "Herroepingsknop voor webshops", item: canonicalUrl },
      ],
    },
  ],
}

const staticArticle = `
  <main style="font-family:Inter,system-ui,sans-serif;color:#0d1321;background:#fff;padding:48px 20px 80px">
    <article style="max-width:920px;margin:0 auto;line-height:1.75">
      <a href="/kennisbank" style="color:#1a5ee5;font-weight:600;text-decoration:none">← Terug naar kennisbank</a>
      <p style="margin:32px 0 12px;color:#6f7694;font-weight:600">Retouren &amp; herroepingsrecht</p>
      <h1 style="max-width:850px;margin:0;color:#07115a;font-size:clamp(42px,7vw,72px);line-height:1.02;font-weight:600">De nieuwe herroepingsknop voor webshops</h1>
      <p style="max-width:760px;margin:28px 0 10px;color:#526078;font-size:18px">Sinds juni 2026 moeten webshops en apps een duidelijke herroepingsknop aanbieden. Lees wat deze verplichting betekent en hoe Sendwise het herroepingsproces automatiseert.</p>
      <p style="color:#5e6a80">Door Sendwise Team · 3 juli 2026 · ongeveer 5 minuten lezen</p>
      <figure style="margin:40px 0">
        <img src="/profile-joep.webp" alt="Joep van Sendwise bij de blauwe Sendwise-bus" width="1254" height="1254" style="display:block;width:100%;max-width:560px;border-radius:28px" />
        <figcaption style="max-width:560px;margin-top:12px;color:#334155;font-weight:600">“Met een duidelijke herroepingsknop maak je annuleren net zo laagdrempelig als bestellen, zonder extra werk voor je klantenservice.” — Joep van Sendwise</figcaption>
      </figure>
      <section>
        <p>Retouren en annuleringen zijn voor veel webshops nog altijd een noodzakelijk kwaad. Toch verandert er iets fundamenteels. Online retailers moeten in hun online omgeving, zoals webshops en apps, een duidelijke en toegankelijke ontbindingsfunctie aanbieden.</p>
        <p>Deze functie wordt vaak de herroepingsknop genoemd. Wie online verkoopt aan consumenten, moet het voor klanten makkelijk maken om een online aankoop binnen de wettelijke bedenktijd ongedaan te maken.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Wat is de herroepingsknop?</h2>
        <p>De herroepingsknop is een digitale functie waarmee een consument met een paar klikken kan aangeven dat hij een aankoop wil herroepen. De knop maakt het mogelijk om een online aankoop van een product of dienst binnen de wettelijke bedenktijd van 14 dagen te annuleren.</p>
        <p>Een vage contactknop of algemene retourpagina is niet genoeg. De functie moet duidelijk maken waarvoor die is, bijvoorbeeld met tekst als "Koop ongedaan maken".</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Wat verandert er aan het herroepingsrecht?</h2>
        <p>Voor consumenten verandert het wettelijke herroepingsrecht inhoudelijk niet. Wat wel verandert, is de manier waarop consumenten dat recht moeten kunnen uitoefenen: digitaal, duidelijk en zonder onnodige drempels.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Voor wie geldt de verplichting?</h2>
        <p>De verplichting geldt voor webshops en online dienstverleners die verkopen aan consumenten. B2B-transacties vallen buiten deze consumentenregel.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Zo regelt Sendwise de herroepingsknop</h2>
        <img src="/retour-afbeelding-2.png" alt="Voorbeeld van een volledig aanpasbaar retourportaal in Sendwise" width="1190" height="650" style="display:block;width:100%;margin:24px 0;border-radius:24px" />
        <p>Sendwise zorgt voor een duidelijke, wettelijk correcte herroepingsfunctie die klanten makkelijk kunnen vinden. Het verzoek, de automatische bevestiging en de interne opvolging sluiten aan op je bestaande processen rond ruilen, retourneren en klantenservice.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">Wat riskeer je zonder herroepingsknop?</h2>
        <p>Als consumenten niet goed worden geïnformeerd over hun herroepingsrecht of de herroepingsfunctie, kan de wettelijke bedenktijd worden verlengd tot maximaal een jaar. Ook kan de ACM boetes opleggen.</p>
        <h2 style="margin-top:48px;color:#07115a;font-size:32px;line-height:1.2">FAQ over de herroepingsknop</h2>
        <p>Sinds juni 2026 moeten webshops en online dienstverleners een duidelijke herroepingsfunctie aanbieden voor online aankopen van consumenten. De knop is een extra route naast het bestaande modelformulier.</p>
        <p style="margin-top:36px"><a href="/start-met-sendwise" style="display:inline-block;border-radius:12px;background:#1a5ee5;color:#fff;padding:12px 20px;font-weight:600;text-decoration:none">Direct registreren</a></p>
        <p style="margin-top:44px;color:#5e6a80;font-size:14px">Bron: <a href="https://www.acm.nl/nl/publicaties/acm-roept-online-retailers-op-zich-voor-te-bereiden-op-herroepingsknop">Autoriteit Consument &amp; Markt</a>.</p>
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
