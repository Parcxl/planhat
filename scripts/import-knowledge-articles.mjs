import { readFile, writeFile } from "node:fs/promises"
import { basename } from "node:path"

const [, , outputFile, ...inputFiles] = process.argv

if (!outputFile || inputFiles.length === 0) {
  throw new Error("Gebruik: node scripts/import-knowledge-articles.mjs <output> <artikel...>")
}

const PUBLISHED_TIME = "2026-08-19"
const SENDWISE_URL = "https://www.sendwise.nl"

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

const clean = (value) =>
  value
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim()

const clip = (value, limit) => {
  const text = clean(value)
  if (text.length <= limit) return text
  const clipped = text.slice(0, limit - 1).replace(/\s+\S*$/, "")
  return `${clipped}…`
}

const clipWords = (value, limit) => {
  const text = clean(value)
  if (text.length <= limit) return text
  return text.slice(0, limit).replace(/\s+\S*$/, "").replace(/[,:;.!?\s]+$/, "")
}

const makeSeoTitle = (title) => {
  if (`${title} | Sendwise`.length <= 60) return `${title} | Sendwise`
  const shortened = title
    .replace(/:\s*wat kun je verwachten\?$/i, "")
    .replace(/,\s*en waar moet je op letten\?$/i, "")
    .replace(/:\s*waar moet je op letten\?$/i, "")
  return `${clipWords(shortened, 48)} | Sendwise`
}

const parseFrontmatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error("Frontmatter ontbreekt")

  const title = match[1].match(/^title:\s*["'](.+)["']$/m)?.[1]
  const category = match[1].match(/^category:\s*["'](.+)["']$/m)?.[1]
  const tagsBlock = match[1].split(/^tags:\s*$/m)[1] || ""
  const tags = [...tagsBlock.matchAll(/^\s*-\s*["'](.+?)["']\s*$/gm)].map((item) => item[1])
  if (!title || !category) throw new Error("Titel of categorie ontbreekt in frontmatter")
  return { title, category, tags, body: match[2] }
}

const applyEditorialCorrections = (fileName, body) => {
  let value = body
    .replace("gevouwen of juist juist ongekreukt", "gevouwen of juist ongekreukt")
    .replaceAll("standaardverzekering", "dekking van de gekozen verzenddienst")
    .replaceAll("basisverzekering", "dekking van de gekozen verzenddienst")
    .replace(/De meeste vervoerders bieden een dekking van de gekozen verzenddienst die tot een bepaald bedrag per zending dekt, vaak enkele honderden euro's\./, "Dekking bij verlies of schade verschilt sterk per vervoerder, dienst en goederensoort; een standaardpakket is niet automatisch voor de volledige verkoopwaarde verzekerd.")
    .replace("we starten dezelfde dag een onderzoek en voeren namens jou het gesprek", "we helpen je een onderzoek bij de vervoerder te starten en voeren namens jou het gesprek")
    .replace("we starten dezelfde dag een onderzoek", "we helpen je een onderzoek bij de vervoerder te starten")
    .replace(/starten we dezelfde dag een onderzoek bij (PostNL|DHL)/g, "helpen we je een onderzoek bij $1 te starten")
    .replace("zodat je nooit voor verrassingen komt te staan", "waardoor je vooraf beter zicht houdt op je totale verzendprijs")
    .replace("bieden we onze klanten in deze periode extra capaciteit en prioriteit", "stemmen we verwachte piekvolumes en beschikbare verzendopties tijdig met klanten af")
    .replace(/gelden er geen douaneformaliteiten/g, "is voor Uniegoederen doorgaans geen reguliere invoeraangifte nodig")
    .replace("Frankrijk valt binnen de EU, waardoor er geen douaneformaliteiten gelden", "Frankrijk valt binnen de EU, waardoor voor Uniegoederen doorgaans geen reguliere invoeraangifte nodig is")
    .replace("Spanje valt binnen de EU, waardoor er voor het vasteland geen douaneformaliteiten gelden", "Spanje valt binnen de EU, waardoor voor Uniegoederen op het vasteland doorgaans geen reguliere invoeraangifte nodig is")
    .replace("Bij de grote vervoerders (PostNL, DHL, DPD) duurt standaardverzending binnen Nederland doorgaans 1 werkdag. Lever je het pakket op een werkdag vóór de cutoff-tijd aan (meestal tussen 17:00 en 18:00 uur, afhankelijk van het afgiftepunt), dan wordt het in de meeste gevallen de volgende werkdag bezorgd.", "Veel binnenlandse pakketdiensten streven bij tijdige aanlevering naar bezorging op de volgende werkdag. De concrete bezorgdag hangt af van de gekozen dienst, het aanlevervenster, de bestemming en drukte in het netwerk.")
    .replace("PostNL bezorgt pakketten die vóór de aanlevertijd zijn aangeboden, de volgende werkdag. PostNL bezorgt van maandag tot en met zaterdag, tot uiterlijk 21:30 uur. Bied je een pakket op maandag aan bij een PostNL-punt of via een ophaalservice, dan ligt het in de meeste gevallen op dinsdag bij de ontvanger.", "PostNL streeft er voor reguliere pakketten die volgens het afgesproken aanlevervenster worden aangeboden naar om ze op de eerstvolgende bezorgdag te bezorgen. Volgens de servicekaders bezorgt PostNL pakketten van maandag tot en met zaterdag; de actuele tracking blijft leidend voor de ontvanger.")
    .replace("Omdat het netwerk van GOFO nog volop in ontwikkeling is (inclusief de aankomende samenwerking met ViaTim voor servicepunten), kan de daadwerkelijke snelheid regionaal nog iets verschillen.", "Omdat het netwerk van GOFO relatief jong is, is het verstandig de werkelijke prestaties per regio en verzendprofiel te blijven volgen.")
    .replace(/gelden wel afwijkende douaneregels/g, "kunnen wel afwijkende douaneregels gelden")

  if (fileName.includes("43-retourlabel")) {
    value = value
      .replace("zonder dat je bij elke zending automatisch kosten maakt voor een retourlabel dat mogelijk niet gebruikt wordt", "zonder dat je voor iedere bestelling vooraf een fysiek label hoeft te produceren; wanneer kosten ontstaan, hangt af van je vervoerders- en platformvoorwaarden")
      .replace("kan ook onnodige kosten en een hoger retourpercentage met zich meebrengen", "kan ook onnodige administratie geven en de retourdrempel verlagen")
  }

  if (fileName.includes("49-verpakkingsafval")) {
    value = value
      .replace("In de praktijk vul je dit in door je aan te melden bij Verpact en jaarlijks te rapporteren hoeveel verpakkingsmateriaal je op de markt hebt gebracht, waarna je hiervoor een bijdrage betaalt.", "Wie precies producent is en welke administratie-, aanmeld- en bijdrageplicht geldt, hangt sinds de Europese PPWR-wijziging van 12 augustus 2026 af van je rol in de keten en het type verpakking. Verpact hanteert voor de reguliere afvalbeheerbijdrage een heffingsvrije drempel van 50.000 kilogram, met uitzonderingen voor onder meer statiegeld- en bepaalde SUP-verpakkingen.")
      .replace("De verplichting geldt in principe voor elk bedrijf dat verpakkingen op de markt brengt, al gelden er vrijstellingen voor bedrijven die onder een bepaalde hoeveelheid verpakkingsmateriaal per jaar blijven. Voor kleinere webshops kan dit betekenen dat de administratieve last beperkt blijft, maar het is belangrijk om dit zelf te checken in plaats van aan te nemen dat de verplichting niet geldt.", "Ook onder de heffingsvrije drempel moet je kunnen onderbouwen hoeveel verpakkingen je op de Nederlandse markt brengt. Controleer daarnaast of uitzonderingen, import, verkoop op afstand of SUP-regels op jouw situatie van toepassing zijn. Gebruik hiervoor de actuele beslisbomen en het beleid van Verpact of vraag gespecialiseerd advies.")
      .replace("Webshops die verpakkingsmateriaal op de Nederlandse markt brengen, vallen onder de UPV-regelgeving en moeten zich aanmelden en jaarlijks rapporteren bij Verpact, met vrijstellingen voor kleinere hoeveelheden. Check tijdig of en hoe deze verplichting voor jouw webshop geldt.", "Webshops kunnen onder de producentenverantwoordelijkheid voor verpakkingen vallen, maar aanmelding, aangifte en bijdrage hangen af van rol, materiaal, gewicht en uitzonderingen. Leg je verpakkingsadministratie vast en controleer de actuele PPWR- en Verpact-regels voor jouw situatie.")
  }

  if (fileName.includes("54-pakket-geweigerd")) {
    value = value
      .replace("Dan verwerk je dit als een annulering, eventueel met aftrek van de gemaakte verzendkosten, afhankelijk van je eigen voorwaarden hierover.", "Dan beoordeel je of sprake is van herroeping, ontbinding of een andere situatie. Verreken kosten niet automatisch: consumentenrechten en je vooraf verstrekte informatie bepalen wat je wel en niet mag inhouden.")
  }

  const replacements = {
    "64-levertijd-postnl-duitsland": [[/\d+ tot \d+ werkdagen/g, "2 tot 3 werkdagen"]],
    "66-levertijd-postnl-frankrijk": [[/\d+ tot \d+ werkdagen/g, "2 tot 4 werkdagen"]],
    "71-levertijd-postnl-spanje": [[/\d+ tot \d+ werkdagen/g, "3 tot 5 werkdagen"]],
    "67-levertijd-dhl-frankrijk": [[/\d+ tot \d+ werkdagen/g, "4 tot 5 werkdagen"]],
    "72-levertijd-dhl-spanje": [[/\d+ tot \d+ werkdagen/g, "circa 4 werkdagen"]],
  }

  for (const [key, rules] of Object.entries(replacements)) {
    if (!fileName.includes(key)) continue
    for (const [pattern, replacement] of rules) value = value.replace(pattern, replacement)
  }

  if (fileName.includes("58-levertijd-gofo")) {
    value = value
      .replace(/doorgaans binnen 1 tot 2 werkdagen na aanbieding, vergelijkbaar met wat je van PostNL en DHL gewend bent/g, "volgens de actuele dienstbelofte en tracking na aanbieding")
      .replace(/GOFO streeft naar binnenlandse levertijden vergelijkbaar met PostNL en DHL \(doorgaans 1 tot 2 werkdagen\)/g, "GOFO richt zich op gecontroleerde binnenlandse levertijden")
      .replace("vergeleken met één bij DHL en twee bij PostNL", "waarbij het vervolgproces bij andere vervoerders per dienst en bezorgvoorkeur verschilt")
      .replace("drie afleverpogingen in plaats van één of twee", "drie afleverpogingen voordat het pakket naar het distributiecentrum teruggaat")
  }

  if (fileName.includes("77-levertijd-fedex-vs") || fileName.includes("79-levertijd-fedex-mexico")) {
    value = value.replace(/4 tot 6 werkdagen/g, "2 tot 5 werkdagen")
  }

  return value
}

const parseBody = (body, title) => {
  const normalized = body.replace(/^\s*#\s+.+\n+/, "")
  const chunks = normalized.split(/\n(?=##\s+)/)
  const introBlocks = chunks.shift().split(/\n\s*\n/).filter((block) => clean(block))
  const intro = []
  const sections = []
  let sendwise = "Sendwise helpt je de relevante verzendkeuzes, tarieven en voorwaarden voor jouw webshop inzichtelijk te maken."
  let summary = clean(introBlocks[0]) || title

  const introItems = []
  for (const block of introBlocks) {
    const text = clean(block)
    const item = text.match(/^\d+\.\s*([^.!?]{2,90}[.!?])\s+(.+)$/)
    if (/^\*\*\d+\./.test(block.trim()) && item) {
      introItems.push({ title: item[1], text: item[2] })
    } else {
      intro.push(text)
    }
  }
  if (introItems.length) {
    sections.push({ id: "praktische-tips", eyebrow: "Direct toepasbaar", title: "Praktische tips", items: introItems })
  }

  for (const chunk of chunks) {
    const [headingLine, ...rest] = chunk.split("\n")
    const heading = clean(headingLine.replace(/^##\s+/, ""))
    const blocks = rest.join("\n").split(/\n\s*\n/).map(clean).filter(Boolean)

    if (/sendwise/i.test(heading)) {
      sendwise = blocks.join(" ")
      continue
    }
    if (/samengevat/i.test(heading)) {
      summary = blocks.join(" ")
      continue
    }

    const paragraphs = []
    const items = []
    for (const block of blocks) {
      const item = block.match(/^(?:\d+\.\s*)?([^.!?]{2,90}[.!?])\s+(.+)$/)
      const wasBoldLead = /^\*\*/.test(rest.join("\n").split(/\n\s*\n/)[blocks.indexOf(block)]?.trim() || "")
      if (item && wasBoldLead) {
        items.push({ title: item[1].replace(/^\d+\.\s*/, ""), text: item[2] })
      } else {
        paragraphs.push(block)
      }
    }

    sections.push({
      id: slugify(heading),
      eyebrow: "Praktische uitleg",
      title: heading,
      ...(paragraphs.length ? { paragraphs } : {}),
      ...(items.length ? { items } : {}),
    })
  }

  return { intro, sections, sendwise, summary }
}

const sourceSet = (fileName, category) => {
  if (fileName.includes("fedex")) return [
    { label: "FedEx: internationale verzendservices en indicatieve transittijden", href: "https://www.fedex.com/nl-nl/shipping/international.html" },
    { label: "FedEx: verzenden binnen Europa", href: "https://www.fedex.com/nl-nl/shipping/international/ship-to-europe.html" },
  ]
  if (fileName.includes("postnl-nederland")) return [{ label: "PostNL: servicekaders Pakketten Nederland 2026", href: "https://www.postnl.nl/api/assets/blt43aa441bfc1e29f2/blt38d11658af411f46/1031-r19628-servicekaders-vanaf-1-januari-2026-v4.pdf" }]
  if (fileName.includes("postnl")) return [{ label: "PostNL: bezorgtijden naar het buitenland", href: "https://www.postnl.nl/zakelijk/post-versturen/post-naar-het-buitenland/bezorgtijd-naar-buitenland/" }]
  if (fileName.includes("dhl-nederland")) return [{ label: "DHL eCommerce: transittijden voor zakelijke zendingen", href: "https://www.dhlecommerce.nl/nl/zakelijk/klantenservice" }]
  if (fileName.includes("dhl")) return [{ label: "DHL eCommerce: actuele bezorgduur per bestemming", href: "https://www.dhlecommerce.nl/nl/consument/support/verzenden/bezorgduur" }]
  if (fileName.includes("bpost")) return [{ label: "bpost: zakelijke pakketten binnen België", href: "https://www.bpost.be/en/business-parcels-send" }]
  if (fileName.includes("gofo")) return [
    { label: "GOFO Nederland: landelijke dekking en netwerk in 2026", href: "https://www.gofo.com/nl/gofo-debuut-nederland-webwinkel-vakdagen-2026/" },
    { label: "GOFO Nederland: bezorgproces en tracking", href: "https://www.gofo.com/nl/en/" },
  ]
  if (fileName.includes("sieraden")) return [{ label: "DHL eCommerce: verzekerd verzenden", href: "https://www.dhlecommerce.nl/nl/zakelijk/verzekerd-verzenden" }]
  if (fileName.includes("kleding") || category === "Verpakking") return [{ label: "PostNL: pakket adresseren en verpakken", href: "https://www.postnl.nl/versturen/pakket-versturen/hoe-verstuur-ik-een-pakket/pakket-adresseren-en-verpakken/" }]
  if (fileName.includes("herroepingsrecht") || fileName.includes("pakket-geweigerd")) return [{ label: "ACM: bedenktijd, retourkosten en terugbetaling", href: "https://www.acm.nl/nl/verkoop-aan-consumenten/klantenservice/bedenktijd" }]
  if (fileName.includes("aansprakelijkheid")) return [{ label: "Burgerlijk Wetboek Boek 7, artikel 11: risico bij bezorging", href: "https://wetten.overheid.nl/BWBR0005290/2024-01-01/#Boek7_Titeldeel1_Afdeling2_Artikel11" }]
  if (fileName.includes("verpakkingsafval")) return [{ label: "Verpact: beleid 2026 en producentenverantwoordelijkheid", href: "https://www.verpact.nl/sites/default/files/2026-01/Beleid%202026_concept.pdf" }]
  if (category === "Verzendkosten") return [{ label: "Sendwise: transparante verzendtarieven", href: `${SENDWISE_URL}/prijzen` }]
  if (category === "Retouren") return [{ label: "ACM: ruilen en retourneren", href: "https://www.acm.nl/nl/verkoop-aan-consumenten/klantenservice/ruilen-en-retourneren" }]
  return [{ label: "Sendwise: verzendoplossingen voor webshops", href: `${SENDWISE_URL}/voor-webshops` }]
}

const imageFor = (fileName, category) => {
  if (fileName.includes("fedex")) return ["/kennisbank-internationaal-verzenden.jpg", "Internationaal pakket onderweg met FedEx"]
  if (fileName.includes("postnl")) return ["/kennisbank-postnl-bezorger.jpg", "PostNL-bezorger tijdens een pakketronde"]
  if (fileName.includes("dhl")) return ["/kennisbank-dhl-bezorger.jpg", "DHL-bezorger tijdens een pakketronde"]
  if (fileName.includes("gofo")) return ["/kennisbank-gofo-bezorger.jpg", "GOFO-bezorger met pakketten"]
  if (fileName.includes("bpost")) return ["/kennisbank-belgie-bpost.jpg", "Pakketbezorging met bpost in België"]
  if (category === "Retouren") return ["/kennisbank-retourproces.jpg", "Retourpakket wordt verwerkt"]
  if (category === "Verpakking" || category === "Productcategorieën") return ["/kennisbank-piekdrukte.jpg", "Verzenddozen in een professioneel verzendproces"]
  if (category === "Verzendkosten" || category === "Conversie") return ["/kennisbank-drempelbedrag.jpg", "Webshop analyseert verzendkosten en orderwaarde"]
  if (category === "Klantervaring") return ["/sendwise-platform-dashboard-hero.webp", "Sendwise-dashboard voor tracking en klantcommunicatie"]
  return ["/sendwise-hero-delivery-van.jpg", "Pakketten worden voorbereid voor verzending met Sendwise"]
}

const typeFor = (category) => ["Juridisch", "Operationeel", "Techniek", "Verpakking"].includes(category) ? "Handleiding" : "Blog"

const records = {}
for (const inputFile of inputFiles) {
  const fileName = basename(inputFile)
  const parsed = parseFrontmatter(await readFile(inputFile, "utf8"))
  const correctedBody = applyEditorialCorrections(fileName, parsed.body)
  const content = parseBody(correctedBody, parsed.title)
  const pathSlug = fileName.replace(/^artikel-\d+-/, "").replace(/\.md$/, "")
  const path = `/kennisbank/${pathSlug}`
  const [image, imageAlt] = imageFor(fileName, parsed.category)
  const wordCount = clean(correctedBody).split(/\s+/).length
  const secondAnswer = content.sections[0]?.paragraphs?.[0] || content.sections[0]?.items?.[0]?.text || content.intro[0]

  const timingNotice = parsed.category === "Levertijden"
    ? "De genoemde doorlooptijd is indicatief: de exacte levertijd hangt af van dienst, herkomst- en bestemmingspostcode, afgiftemoment, feestdagen en eventuele douaneafhandeling. Controleer voor iedere zending de actuele transitietijd."
    : null
  if (timingNotice) content.intro.push(timingNotice)

  records[path] = {
    title: parsed.title,
    seoTitle: makeSeoTitle(parsed.title),
    description: clip(content.summary, 155),
    excerpt: clip(content.intro.join(" "), 190),
    type: typeFor(parsed.category),
    category: parsed.category,
    readTime: `± ${Math.max(3, Math.ceil(wordCount / 180))} min`,
    publishedTime: PUBLISHED_TIME,
    image,
    imageAlt,
    quickAnswer: timingNotice ? `${content.summary} ${timingNotice}` : content.summary,
    introTitle: "Dit moet je vooraf weten",
    introEyebrow: parsed.category,
    intro: content.intro,
    sections: content.sections,
    sendwise: content.sendwise,
    summary: content.summary,
    faqs: [
      { question: parsed.title.endsWith("?") ? parsed.title : `Wat moet je weten over ${parsed.title.toLowerCase()}?`, answer: content.summary },
      { question: "Waar moet je in de praktijk als eerste op letten?", answer: clip(secondAnswer, 300) },
    ],
    sources: sourceSet(fileName, parsed.category),
    about: [...new Set([...parsed.tags, parsed.category, "Webshop"])],
    breadcrumb: clip(parsed.title.replace(/\?$/, ""), 64),
  }
}

const output = `// Automatisch geïmporteerd uit de aangeleverde Markdown-artikelen.\nexport const IMPORTED_KNOWLEDGE_ARTICLES = ${JSON.stringify(records, null, 2)}\n`
await writeFile(outputFile, output)
console.log(`Imported ${Object.keys(records).length} knowledge articles into ${outputFile}`)
