export const PEAK_SURCHARGE_ARTICLE = {
  "/kennisbank/piektoeslagen-2026": {
    title: "Piektoeslagen 2026: wat betaal je per vervoerder?",
    seoTitle: "Piektoeslagen 2026: PostNL, DHL en FedEx | Sendwise",
    description: "Bekijk de piektoeslagen voor 2026: PostNL pakketten en brievenbuspakketten, DHL zonder piektoeslag en FedEx Economy per bestemming.",
    excerpt: "Wat zijn piektoeslagen, waarom rekenen vervoerders ze en hoeveel betaal je in 2026? Bekijk het overzicht voor PostNL, DHL en FedEx Economy.",
    type: "Nieuws",
    hideSupplementaryContent: true,
    hideSendwiseSection: true,
    category: "Tarieven & toeslagen",
    readTime: "± 3 min",
    publishedTime: "2026-10-12",
    image: "/kennisbank-piekdrukte.jpg",
    imageAlt: "Verzenddozen tijdens de drukke verzendperiode rond de feestdagen",
    introEyebrow: "Verzenden rond de feestdagen",
    introTitle: "Wat is een piektoeslag?",
    intro: [
      "Een piektoeslag is een extra bedrag bovenop het verzendtarief tijdens drukke periodes, zoals Black Friday, Sinterklaas en kerst. Het bedrag en de periode verschillen per vervoerder en verzendmethode.",
    ],
    sections: [
      {
        id: "waarom-piektoeslagen",
        eyebrow: "Extra capaciteit",
        title: "Waarom rekenen vervoerders piektoeslagen?",
        paragraphs: ["Tijdens de feestdagen verwerken vervoerders meer pakketten. Ze zetten extra personeel, voertuigen en sorteercapaciteit in. Met een piektoeslag vangen ze deze extra kosten op."],
      },
      {
        id: "postnl-piektoeslagen",
        eyebrow: "Vast bedrag per zending",
        title: "PostNL: piektoeslagen in 2026",
        paragraphs: ["Voor verzending via Sendwise gelden de onderstaande piektoeslagen. De bedragen komen bovenop het reguliere verzendtarief."],
        table: {
          caption: "Piektoeslagen PostNL via Sendwise in 2026",
          headers: ["Vervoerder / verzendmethode", "Piektoeslag", "Periode"],
          rows: [
            ["PostNL pakketten", "€ 0,32 per pakket", "15 november t/m 31 december 2026"],
            ["PostNL brievenbuspakketten", "€ 0,17 per brievenbuspakket", "15 november t/m 31 december 2026"],
          ],
        },
      },
      {
        id: "dhl-piektoeslagen",
        title: "DHL: geen piektoeslag",
        paragraphs: ["DHL eCommerce rekent geen piektoeslag. Ook tijdens de drukke periode rond de feestdagen blijft het normale verzendtarief gelden."],
      },
      {
        id: "fedex-economy",
        eyebrow: "Per bestemming en kilogram",
        title: "FedEx Economy: toeslagen per bestemming",
        paragraphs: [
          "Voor FedEx Economy vanuit Nederland gelden onderstaande toeslagen van 21 september t/m 1 november 2026. FedEx noemt dit de Demand Surcharge.",
        ],
        table: {
          caption: "FedEx Economy vanuit Nederland: 21 september t/m 1 november 2026",
          headers: ["Bestemming volgens de FedEx-zone-indeling", "Toeslag per kilogram"],
          rows: [
            ["Europa", "€ 0,10"],
            ["Verenigde Staten en Canada", "€ 0,46"],
            ["Latijns-Amerika en Cariben (LAC)", "€ 0,46"],
            ["Israël", "€ 1,00"],
            ["Midden-Oosten, India en overige landen in de MEISA-zone", "€ 1,50"],
            ["Overige landen in de APAC-zone", "€ 0,09"],
            ["China en Hongkong", "€ 0,09"],
            ["Australië en Nieuw-Zeeland", "€ 0,46"],
            ["Overige landen in de FedEx-zone Rest of the World", "€ 0,70"],
          ],
        },
        paragraphsAfterTable: [
          "Voor FedEx International Economy buiten Europa geldt een minimumtoeslag van € 0,90 per pakketzending. Binnen Europa, met FedEx Regional Economy, geldt dit minimum niet. Bestemmingen volgen de FedEx-zone-indeling.",
        ],
        notes: [
          { kind: "info", text: "Na 1 november 2026 kunnen de piektoeslagen voor FedEx Economy stijgen of dalen, afhankelijk van de drukte en beschikbare capaciteit binnen het FedEx-netwerk. De exacte piektoeslagen voor die periode zijn daarom nog niet beschikbaar." },
        ],
      },
      {
        id: "fedex-afwijkende-pakketten",
        eyebrow: "Aanvullende piektoeslagen",
        title: "FedEx: extra kosten voor afwijkende pakketten",
        paragraphs: ["Voor pakketten die onder extra afhandeling, extra groot of niet-geautoriseerd vallen, gelden aanvullende piektoeslagen van 21 september 2026 t/m 7 februari 2027."],
        table: {
          caption: "Aanvullende FedEx-piektoeslagen voor afwijkende pakketten",
          headers: ["Categorie", "Extra piektoeslag per pakket"],
          rows: [
            ["Extra afhandeling: afmetingen, gewicht of verpakking", "€ 10"],
            ["Extra groot pakket (Oversize)", "€ 25"],
            ["Niet-geautoriseerd pakket (Unauthorized Package)", "€ 60"],
          ],
        },
        paragraphsAfterTable: ["De toepasselijke extra piektoeslag komt bovenop de reguliere afhandelingstoeslag en de internationale Demand Surcharge. FedEx berekent ook brandstoftoeslag over de Demand Surcharge."],
      },
    ],
    sendwise: "Vragen over de toeslag voor jouw zending? Neem contact op met Sendwise.",
    summary: "PostNL rekent een vast bedrag per pakket of brievenbuspakket. DHL eCommerce heeft geen piektoeslag. Bij FedEx Economy hangt het bedrag af van de bestemming en het gewicht; na 1 november kan het stijgen of dalen met de drukte in het netwerk.",
    faqs: [],
    sources: [
      { label: "PostNL: waarom er een toeslag geldt tijdens de piekperiode", href: "https://www.postnl.be/contact/bezorging-rond-de-feestdagen/piek-periode/" },
      { label: "FedEx: officiële Europese Demand Surcharge-tabel, bijgewerkt op 1 oktober 2026", href: "https://www.fedex.com/content/dam/fedex/international/rates/fedex-demand-surcharge-en-eu.pdf" },
      { label: "FedEx Nederland: toepassing en aanpassing van de toeslag bij grote vraag", href: "https://www.fedex.com/nl-nl/shipping/surcharges/temporary-surcharges.html" },
      { label: "FedEx Nederland: brandstoftoeslagen", href: "https://www.fedex.com/nl-nl/shipping/surcharges.html" },
    ],
    about: ["Piektoeslagen 2026", "PostNL", "Brievenbuspakket", "DHL", "FedEx Economy", "Verzendkosten", "Feestdagen"],
    breadcrumb: "Piektoeslagen 2026",
  },
}
