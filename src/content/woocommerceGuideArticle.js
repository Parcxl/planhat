export const WOOCOMMERCE_GUIDE_ARTICLE = {
  "/kennisbank/woocommerce-koppelen": {
    title: "WooCommerce koppelen aan Sendwise",
    seoTitle: "WooCommerce koppelen aan Sendwise | Handleiding",
    description:
      "Koppel WooCommerce veilig aan Sendwise via de actuele autorisatiestroom. Met uitleg over het winkeldomein, goedkeuren, opslaan en de DHL-plugin.",
    excerpt:
      "Koppel je WooCommerce-webshop zonder handmatig API-sleutels aan te maken. Vul je domein in, keur Sendwise goed in WooCommerce en sla de verbinding op.",
    type: "Handleiding",
    category: "Integraties",
    readTime: "± 5 min",
    publishedTime: "2026-08-19",
    image: "/woocommerce-logo.webp",
    imageAlt: "WooCommerce koppelen aan Sendwise",
    imageClassName: "object-contain p-16",
    imageBackground: "bg-[#ffffff]",
    quickAnswer:
      "Open WooCommerce bij de integraties in Sendwise, vul je winkeldomein in en klik op Verbinden. Log vervolgens in bij WooCommerce, klik op Goedkeuren en sla de succesvolle verbinding daarna op in Sendwise.",
    introTitle: "Dit heb je nodig voordat je begint",
    introEyebrow: "Integraties",
    intro: [
      "Met de WooCommerce-koppeling komen bestellingen automatisch in Sendwise binnen. Vanuit Sendwise kun je vervolgens verzendlabels aanmaken en de verzendstatus bij de bestelling laten verwerken.",
      "Zorg dat je kunt inloggen als beheerder van de WordPress-omgeving waarin WooCommerce actief is. Houd ook het domein van je webshop en je Sendwise-account bij de hand.",
      "Je hoeft voor deze actuele koppelmethode geen Consumer Key, Consumer Secret of andere WooCommerce API-sleutels handmatig aan te maken.",
    ],
    sections: [
      {
        id: "koppeling-openen",
        eyebrow: "Stap voor stap",
        title: "Open de WooCommerce-koppeling in Sendwise",
        guideSteps: [
          { text: "Log in bij Sendwise en open Integraties in het menu." },
          { text: "Klik op + koppelen en selecteer WooCommerce als verkoopkanaal." },
          {
            text: "Vul bij Winkeldomein het domein van je WooCommerce-webshop in, bijvoorbeeld mijnwinkel.nl. Gebruik het hoofddomein waarop WooCommerce bereikbaar is.",
            figure: {
              image: "/kennisbank-handleidingen/woocommerce-domein-verbinden.png",
              imageAlt: "WooCommerce-koppeling in Sendwise met het veld Winkeldomein en de knop Verbinden",
              caption: "Vul het domein van je WooCommerce-webshop in en klik daarna op Verbinden.",
            },
          },
          { text: "Klik op Verbinden. Sendwise stuurt je nu door naar de autorisatiepagina van je WooCommerce-webshop." },
        ],
        notes: [
          {
            kind: "note",
            text: "Gebruik je de officiële DHL-plugin in WooCommerce voor bijvoorbeeld servicepunten in de checkout? Zet dan de optie DHL Plugin aan voordat je de koppeling opslaat.",
          },
        ],
      },
      {
        id: "inloggen-woocommerce",
        eyebrow: "Autoriseren",
        title: "Log in bij WooCommerce",
        guideSteps: [
          {
            text: "Vul op de WooCommerce-pagina je gebruikersnaam of e-mailadres en je wachtwoord in. Gebruik een account dat toestemming mag geven voor de koppeling.",
            figure: {
              image: "/kennisbank-handleidingen/woocommerce-inloggen.png",
              imageAlt: "WooCommerce-inlogpagina voor het verbinden van Sendwise",
              caption: "Log in bij de WooCommerce-webshop om de autorisatie voort te zetten.",
            },
          },
          { text: "Klik op Login. Wanneer je al bent ingelogd, kan WooCommerce deze stap automatisch overslaan." },
        ],
      },
      {
        id: "toegang-goedkeuren",
        eyebrow: "Autoriseren",
        title: "Keur de verbinding met Sendwise goed",
        paragraphs: [
          "WooCommerce laat zien welke toegang Sendwise nodig heeft om de integratie te laten werken. De koppeling gebruikt lees- en schrijftoegang voor onder meer bestellingen, producten, klanten en webhooks.",
        ],
        guideSteps: [
          {
            text: "Controleer of Sendwise als aanvragende toepassing wordt getoond en klik op Goedkeuren.",
            figure: {
              image: "/kennisbank-handleidingen/woocommerce-goedkeuren.png",
              imageAlt: "WooCommerce-autorisatiepagina met de knop Goedkeuren",
              caption: "Klik op Goedkeuren om WooCommerce met Sendwise te verbinden.",
            },
          },
          { text: "Na goedkeuring stuurt WooCommerce je automatisch terug naar Sendwise." },
        ],
      },
      {
        id: "verbinding-opslaan",
        eyebrow: "Afronden",
        title: "Controleer de verbinding en klik op Opslaan",
        guideSteps: [
          { text: "Controleer in Sendwise of wordt aangegeven dat de verbinding succesvol is." },
          { text: "Klik op Opslaan om de WooCommerce-koppeling definitief vast te leggen." },
          { text: "Controleer daarna met een recente of nieuwe bestelling of orders correct in Sendwise binnenkomen." },
        ],
        notes: [
          {
            kind: "warning",
            text: "Wordt de verbinding niet als succesvol weergegeven? Probeer de autorisatie opnieuw en controleer of je met een WooCommerce-beheeraccount bent ingelogd. Neem contact op met Sendwise wanneer de koppeling daarna nog niet lukt.",
          },
        ],
      },
      {
        id: "dhl-plugin",
        eyebrow: "Optionele instelling",
        title: "DHL-plugin in WooCommerce gebruiken",
        paragraphs: [
          "Gebruik je in WooCommerce de DHL-plugin voor bijvoorbeeld het aanbieden van DHL-servicepunten in de checkout? Zet dan in de Sendwise-koppeling de toggle DHL Plugin aan.",
          "Met deze instelling kan Sendwise correct samenwerken met de DHL-plugin en de trackinginformatie bij de WooCommerce-order terugverwerken. Laat de toggle uitgeschakeld wanneer je webshop deze DHL-plugin niet gebruikt.",
        ],
      },
    ],
    sendwise:
      "Na het opslaan beheert Sendwise de WooCommerce-koppeling vanuit één verzendomgeving. Bestellingen kunnen automatisch worden geïmporteerd en de verzendstatus kan bij de bijbehorende order worden verwerkt.",
    summary:
      "Vul je WooCommerce-domein in Sendwise in, klik op Verbinden, log in bij WooCommerce en keur de toegang goed. Controleer na terugkomst of de verbinding succesvol is en klik op Opslaan. Activeer de DHL Plugin-toggle alleen als je die plugin daadwerkelijk in WooCommerce gebruikt.",
    faqs: [
      {
        question: "Moet ik WooCommerce API-sleutels aanmaken voor Sendwise?",
        answer: "Nee. Bij de actuele koppelmethode vul je het domein van je webshop in en autoriseer je Sendwise via de inlog- en goedkeuringspagina van WooCommerce.",
      },
      {
        question: "Wanneer zet ik de optie DHL Plugin aan?",
        answer: "Zet deze optie alleen aan wanneer je WooCommerce-webshop de DHL-plugin gebruikt, bijvoorbeeld om DHL-servicepunten in de checkout aan te bieden.",
      },
      {
        question: "Wat doe ik als de WooCommerce-verbinding niet succesvol is?",
        answer: "Probeer de autorisatie opnieuw met een WooCommerce-beheeraccount. Controleer het winkeldomein en neem contact op met Sendwise als de verbinding daarna nog niet lukt.",
      },
    ],
    sources: [
      { label: "Sendwise: WooCommerce-integratie", href: "https://www.sendwise.nl/integraties/woocommerce" },
    ],
    about: ["WooCommerce", "Webshop koppelen", "DHL-plugin", "Integratie", "Sendwise"],
    breadcrumb: "WooCommerce koppelen",
  },
}
