import { CARRIER_ARTICLES } from "../content/carrierArticles.js"

export const SITE_URL = "https://www.sendwise.nl"
export const DEFAULT_SOCIAL_IMAGE = "/sendwise-hero-delivery-van.jpg"
export const DEFAULT_SOCIAL_IMAGE_ALT = "Pakket wordt in een blauwe Sendwise-bezorgbus geladen"

const route = (config) => ({
  index: true,
  sitemap: true,
  prerender: true,
  type: "website",
  ...config,
})

export const SEO_ROUTES = {
  "/": route({
    title: "Slim verzenden voor webshops — vanaf €3,50 per pakket | Sendwise",
    description:
      "Verzend pakketten vanaf €3,50 per stuk. Geen contracten, geen abonnementskosten en eerlijke all-in tarieven zonder verrassingen.",
    schemaType: "WebPage",
  }),
  "/verzend-slimmer": route({
    title: "Sendwise voor webshops en fulfilmentteams | Slimmer verzenden vanaf €3,50",
    description:
      "Minder handwerk, meer grip op verzenden. Ontdek Sendwise voor labels, tracking, retouren en fulfilmentgroei zonder contracten of vaste kosten.",
    sitemap: false,
    schemaType: "WebPage",
  }),
  "/verzend-slimmer/bedankt": route({
    title: "Bedankt voor je aanvraag | Sendwise",
    description:
      "Je Sendwise accountaanvraag is ontvangen. Het team neemt contact met je op om je account klaar te zetten.",
    index: false,
    sitemap: false,
    schemaType: "WebPage",
  }),
  "/verzenddoos-animatie": route({
    title: "3D verzenddoos animatie | Sendwise",
    description: "Losse 3D animatie van een zwevende kartonnen verzenddoos.",
    index: false,
    sitemap: false,
    prerender: false,
    schemaType: "WebPage",
  }),
  "/oplossingen/sendwise": route({
    title: "Sendwise verzendplatform | Labels, tracking & integraties",
    description:
      "Het verzendplatform voor webshops en fulfilment. Labels printen, tracking beheren en integreren met al je systemen.",
    schemaType: "Service",
    schemaName: "Sendwise verzendplatform",
    breadcrumb: [{ name: "Sendwise", path: "/oplossingen/sendwise" }],
  }),
  "/oplossingen/pro": route({
    title: "Sendwise PRO | Fulfilment software voor webshops",
    description:
      "Pick & pack, voorraadbeheer en magazijninzicht in één fulfilment dashboard. Ontwikkeld voor schaalbare webshops.",
    schemaType: "Service",
    schemaName: "Sendwise PRO fulfilmentsoftware",
    breadcrumb: [{ name: "Sendwise PRO", path: "/oplossingen/pro" }],
  }),
  "/oplossingen/connect": route({
    title: "CONNECT verzendmethode | Eén pickup, beste vervoerder",
    description:
      "Verzend met één vaste methode via de beste vervoerder per land. Goedkoper, eenvoudiger en betrouwbaarder verzenden.",
    schemaType: "Service",
    schemaName: "Sendwise CONNECT",
    breadcrumb: [{ name: "CONNECT", path: "/oplossingen/connect" }],
  }),
  "/voor-webshops": route({
    title: "Verzendoplossing voor webshops — vanaf €3,50 | Sendwise",
    description:
      "Goedkoper verzenden zonder contracten. Eén platform voor labels, tracking en fulfilment.",
    schemaType: "Service",
    schemaName: "Sendwise voor webshops",
    breadcrumb: ["Voor webshops"],
  }),
  "/voor-fulfilmentcenters": route({
    title: "Verzendoplossing voor fulfilmentcenters — scherpe tarieven",
    description:
      "Eén verzendlaag voor al je klanten. Minder pickups, lagere kosten en centrale support.",
    schemaType: "Service",
    schemaName: "Sendwise voor fulfilmentcenters",
    breadcrumb: ["Voor fulfilmentcenters"],
  }),
  "/integraties": route({
    title: "Webshopintegraties | Koppel je webshop met Sendwise",
    description:
      "Bekijk alle Sendwise-integraties voor WooCommerce, Shopify, CCV Shop, Wix, Goedgepickt en andere webshopsystemen.",
    schemaType: "CollectionPage",
    breadcrumb: ["Integraties"],
  }),
  "/integraties/woocommerce": route({
    title: "WooCommerce verzendsoftware | Koppel WooCommerce met Sendwise",
    description:
      "Verbind je WooCommerce webshop met Sendwise en verzend sneller met scherpe tarieven en automatische labels.",
    schemaType: "Service",
    schemaName: "Sendwise WooCommerce-integratie",
    breadcrumb: ["Integraties", "WooCommerce"],
  }),
  "/integraties/ccv-shop": route({
    title: "CCV Shop verzendsoftware | Koppel CCV Shop met Sendwise",
    description:
      "Gebruik Sendwise als verzendlaag bovenop CCV Shop. Labels, tracking en scherpe tarieven zonder contracten.",
    schemaType: "Service",
    schemaName: "Sendwise CCV Shop-integratie",
    breadcrumb: ["Integraties", "CCV Shop"],
  }),
  "/prijzen": route({
    title: "Verzendtarieven | Pakketten verzenden vanaf €3,50",
    description:
      "Bekijk indicatieve verzendtarieven per land. Geen abonnementen, geen contracten en eerlijke prijzen.",
    schemaType: "WebPage",
    breadcrumb: ["Prijzen"],
  }),
  "/over-ons": route({
    title: "Over Sendwise | Slimmer en goedkoper verzenden",
    description:
      "Sendwise is het verzendplatform voor webshops en fulfilmentcenters. Eerlijk, schaalbaar en transparant.",
    schemaType: "AboutPage",
    breadcrumb: ["Over Sendwise"],
  }),
  "/contact": route({
    title: "Contact | Neem contact op met Sendwise",
    description:
      "Vragen over verzenden, tarieven of samenwerking? Neem contact op met Sendwise.",
    schemaType: "ContactPage",
    breadcrumb: ["Contact"],
  }),
  "/werken-bij": route({
    title: "Werken bij Sendwise | Vacatures en stages",
    description:
      "Bekijk open rollen bij Sendwise, waaronder sales medewerker en stagiair software developer.",
    schemaType: "WebPage",
    breadcrumb: ["Werken bij"],
  }),
  "/kennisbank": route({
    title: "Kennisbank | Sendwise artikelen en hulp",
    description:
      "Praktische Sendwise handleidingen voor integraties, verzending en fulfilment workflows.",
    schemaType: "CollectionPage",
    breadcrumb: ["Kennisbank"],
  }),
  "/kennisbank/wix-verbinden": route({
    title: "Wix verbinden met Sendwise | Stap-voor-stap handleiding",
    description:
      "Lees hoe je in Wix een API key maakt en access token, account ID en site ID gebruikt om Wix met Sendwise te koppelen.",
    type: "article",
    schemaType: "BlogPosting",
    image: "/wix-step-8.png",
    imageAlt: "Wix koppelen met Sendwise",
    publishedTime: "2026-06-16",
    modifiedTime: "2026-06-16",
    headline: "Wix verbinden met Sendwise",
    about: ["Wix", "Webshopintegratie", "Verzendsoftware"],
    breadcrumb: ["Kennisbank", "Wix verbinden"],
  }),
  "/kennisbank/retourportaal-herroepingsrecht": route({
    title: "Herroepingsknop voor webshops verplicht | Sendwise",
    description:
      "Lees wat de verplichte herroepingsknop betekent voor webshops en hoe Sendwise het herroepingsproces compliant en automatisch inricht.",
    type: "article",
    schemaType: "BlogPosting",
    image: "/retour-afbeelding-2.png",
    imageAlt: "Voorbeeld van het herroepingsproces in Sendwise",
    publishedTime: "2026-07-03",
    modifiedTime: "2026-07-17",
    headline: "De nieuwe herroepingsknop voor webshops",
    about: ["Herroepingsknop", "Herroepingsrecht", "Webshops", "ACM"],
    breadcrumb: ["Kennisbank", "Herroepingsknop voor webshops"],
  }),
  "/kennisbank/postnl-energietoeslag-vrachtwagenheffing": route({
    title: "PostNL-energietoeslag en vrachtwagenheffing | Sendwise",
    description:
      "Lees hoe de PostNL-energietoeslag werkt, waar je het actuele bedrag vindt en waarom Sendwise de vrachtwagenheffing niet doorberekent.",
    type: "article",
    schemaType: "BlogPosting",
    image: "/postnl-icoon.webp",
    imageAlt: "PostNL-beeldmerk bij uitleg over energietoeslag en vrachtwagenheffing",
    publishedTime: "2026-08-06",
    modifiedTime: "2026-08-10",
    headline: "Uitleg over de PostNL-energietoeslag en vrachtwagenheffing",
    about: ["PostNL", "Energietoeslag", "Vrachtwagenheffing", "Verzendkosten"],
    breadcrumb: ["Kennisbank", "PostNL-energietoeslag en vrachtwagenheffing"],
  }),
  "/kennisbank/welke-vervoerder-webshop": route({
    title: "Welke vervoerder voor je webshop? | Keuzehulp | Sendwise",
    description:
      "Welke vervoerder past bij jouw webshop? Vergelijk pakketformaat, gewicht, bestemming, bezorgopties, pickup en totale verzendkosten.",
    type: "article",
    schemaType: "BlogPosting",
    image: "/sendwise-hero-delivery-van.jpg",
    imageAlt: "Pakket wordt geladen in een Sendwise-bezorgbus",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-18",
    headline: "Welke vervoerder kies je voor jouw webshop?",
    about: ["Vervoerder kiezen", "Webshop", "Pakketdienst", "Verzendkosten", "Verzendsoftware"],
    breadcrumb: ["Kennisbank", "Welke vervoerder voor je webshop"],
    faq: [
      {
        question: "Welke vervoerder is het beste voor een webshop?",
        answer:
          "Er bestaat geen vervoerder die voor iedere webshop het beste is. De juiste keuze hangt af van pakketformaat, gewicht, waarde, bestemming, bezorgopties, volume en de gewenste pickup.",
      },
      {
        question: "Is één vervoerder of meerdere vervoerders beter?",
        answer:
          "Eén vervoerder geeft meestal het meeste overzicht bij een voorspelbaar verzendprofiel. Meerdere vervoerders kunnen interessant zijn bij uiteenlopende formaten, internationale bestemmingen, piekdrukte of specifieke bezorgwensen.",
      },
      {
        question: "Waar moet je verzendtarieven op vergelijken?",
        answer:
          "Vergelijk het basistarief samen met alle relevante toeslagen, pickupkosten, retourtarieven, verzekeringsopties en kosten voor afwijkende maten of gewichten.",
      },
      {
        question: "Kun je meerdere vervoerders vanuit één systeem gebruiken?",
        answer:
          "Ja. Met verzendsoftware zoals Sendwise beheer je labels, tracking en vervoerders vanuit één platform. Afhankelijk van je volume en locatie kan ook één gezamenlijke pickup mogelijk zijn.",
      },
      {
        question: "Hoe helpt Sendwise bij het kiezen van een vervoerder?",
        answer:
          "Sendwise kijkt naar je producten, volumes, bestemmingen en huidige verzendproces. Op basis daarvan krijg je advies over een passende vervoerder of combinatie van vervoerders.",
      },
    ],
  }),
  ...Object.fromEntries(
    Object.entries(CARRIER_ARTICLES).map(([path, article]) => [
      path,
      route({
        title: article.seoTitle,
        description: article.description,
        type: "article",
        schemaType: "BlogPosting",
        image: article.image,
        imageAlt: article.imageAlt,
        publishedTime: article.publishedTime,
        modifiedTime: article.publishedTime,
        headline: article.title,
        about: article.about,
        breadcrumb: ["Kennisbank", article.breadcrumb],
        faq: article.faqs,
      }),
    ]),
  ),
  "/start-met-sendwise": route({
    title: "Start met Sendwise | Vraag een account aan",
    description:
      "Vraag een Sendwise account aan en ontdek hoe je slimmer en goedkoper kunt verzenden.",
    schemaType: "WebPage",
    breadcrumb: ["Start met Sendwise"],
  }),
  "/blog/sendwise-goedgepickt": route({
    title: "Verbind Sendwise met Goedgepickt | Stap-voor-stap handleiding",
    description:
      "Leer hoe je Sendwise koppelt aan Goedgepickt via een API-key en dynamische verzendmethoden in een duidelijke stap-voor-stap gids.",
    type: "article",
    schemaType: "BlogPosting",
    image: "/sendwise-hero-picture.avif",
    imageAlt: "Integratie tussen Sendwise en Goedgepickt",
    publishedTime: "2025-01-27",
    modifiedTime: "2025-01-27",
    headline: "Verbind Sendwise met Goedgepickt",
    about: ["Goedgepickt", "Webshopintegratie", "Verzendsoftware", "API"],
    breadcrumb: [
      { name: "Kennisbank", path: "/kennisbank" },
      { name: "Goedgepickt koppelen", path: "/blog/sendwise-goedgepickt" },
    ],
  }),
  "/algemene-voorwaarden": route({
    title: "Algemene voorwaarden | Sendwise",
    description: "Lees de algemene voorwaarden voor het gebruik van Sendwise en het verzendplatform.",
    sitemap: false,
    schemaType: "WebPage",
    breadcrumb: ["Algemene voorwaarden"],
  }),
  "/verwerkersovereenkomst": route({
    title: "Verwerkersovereenkomst (DPA) | Sendwise",
    description:
      "De Verwerkersovereenkomst (DPA) van Sendwise met afspraken over verwerking van persoonsgegevens.",
    sitemap: false,
    schemaType: "WebPage",
    breadcrumb: ["Verwerkersovereenkomst"],
  }),
  "/privacy": route({
    title: "Privacyverklaring | Sendwise",
    description:
      "Lees hoe Sendwise persoonsgegevens verwerkt en beschermt bij het gebruik van de website en het verzendplatform.",
    sitemap: false,
    schemaType: "WebPage",
    breadcrumb: ["Privacyverklaring"],
  }),
}

export const NOT_FOUND_SEO = {
  title: "Pagina niet gevonden | Sendwise",
  description: "Deze pagina bestaat niet of is verplaatst.",
  index: false,
  sitemap: false,
  prerender: true,
  type: "website",
  schemaType: "WebPage",
  notFound: true,
}

export const getSeoForPath = (pathname) => SEO_ROUTES[pathname] || NOT_FOUND_SEO

export const getCanonicalUrl = (pathname) => `${SITE_URL}${pathname === "/" ? "/" : pathname}`

const breadcrumbItems = (pathname, labels = []) => {
  if (!labels.length) return null
  const segments = pathname.split("/").filter(Boolean)
  return [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    ...labels.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: typeof entry === "string" ? entry : entry.name,
      item: `${SITE_URL}${
        typeof entry === "string"
          ? `/${segments.slice(0, index + 1).join("/")}`
          : entry.path
      }`,
    })),
  ]
}

export const buildSiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Sendwise",
      legalName: "Sendwise",
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
      email: "info@sendwise.nl",
      telephone: "+31619156123",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "KvK",
        value: "98390376",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ondernemingsweg 66",
        postalCode: "2404HN",
        addressLocality: "Alphen aan den Rijn",
        addressCountry: "NL",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@sendwise.nl",
        telephone: "+31619156123",
        availableLanguage: ["nl", "en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Sendwise",
      inLanguage: "nl-NL",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
})

export const buildRouteStructuredData = (pathname, seo = getSeoForPath(pathname)) => {
  if (seo.notFound || !seo.index) return null

  const canonicalUrl = getCanonicalUrl(pathname)
  const imageUrl = `${SITE_URL}${seo.image || DEFAULT_SOCIAL_IMAGE}`
  const graph = []

  if (seo.schemaType === "BlogPosting") {
    graph.push({
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      headline: seo.headline,
      description: seo.description,
      image: [imageUrl],
      datePublished: seo.publishedTime,
      dateModified: seo.modifiedTime,
      inLanguage: "nl-NL",
      author: {
        "@type": "Organization",
        name: "Sendwise Team",
        url: `${SITE_URL}/over-ons`,
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: seo.about,
    })
  } else if (seo.schemaType === "Service") {
    graph.push({
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: seo.schemaName,
      description: seo.description,
      url: canonicalUrl,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Nederland" },
    })
  } else {
    graph.push({
      "@type": seo.schemaType || "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: "nl-NL",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    })
  }

  const items = breadcrumbItems(pathname, seo.breadcrumb)
  if (items) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: items,
    })
  }

  if (seo.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: seo.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    })
  }

  return { "@context": "https://schema.org", "@graph": graph }
}

export const sitemapRoutes = () =>
  Object.entries(SEO_ROUTES)
    .filter(([, seo]) => seo.index && seo.sitemap)
    .map(([pathname, seo]) => ({ pathname, lastmod: seo.modifiedTime }))
