import { createElement, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCreditCard,
  FiLink,
  FiMail,
  FiPrinter,
  FiRefreshCw,
  FiShield,
  FiTruck,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"
import FinalCta from "../components/Homepage2/FinalCta"
import LabelPrintAnimation from "../components/animations/LabelPrintAnimation"
import ShipmentInsightAnimation from "../components/animations/ShipmentInsightAnimation"
import TicketSupportAnimation from "../components/animations/TicketSupportAnimation"
import BillingInsightAnimation from "../components/animations/BillingInsightAnimation"
import BrandingExperienceAnimation from "../components/animations/BrandingExperienceAnimation"

const integrations = [
  { name: "WooCommerce", src: "/woocommerce-logo.webp" },
  { name: "Wix", src: "/wix.png" },
  { name: "Shopify", src: "/shopify-logo.webp" },
  { name: "Sendwise API", src: "/sendwise-api.webp" },
  { name: "PrestaShop", src: "/prestashop.webp" },
  { name: "Orders", src: "/orders.webp" },
  { name: "Mijnwebwinkel", src: "/mijnwebwinkel.webp" },
  { name: "Magento", src: "/magento.jpg" },
  { name: "Lyra", src: "/lyra.webp" },
  { name: "Goedgepickt", src: "/goedgepickt-sendwise-logo.webp" },
  { name: "Ecwid", src: "/ecwid-parcxl.webp" },
  { name: "CCV", src: "/ccv-icon.svg" },
  { name: "Lightspeed", src: "/lightspeed.webp" },
  { name: "Bol.com", src: "/bol-logo.png" },
]

const pillars = [
  {
    title: "Orders automatisch binnen",
    text: "Koppel je webshop, marketplace of eigen systeem en laat orders direct klaarzetten voor verzending.",
    icon: FiLink,
  },
  {
    title: "Verzenden zonder handwerk",
    text: "Maak labels aan, kies de juiste vervoerder en print direct vanuit dezelfde workflow.",
    icon: FiTruck,
  },
  {
    title: "Grip op iedere status",
    text: "Volg zendingen, retouren en onderzoeken zonder losse portals of zoekwerk.",
    icon: FiShield,
  },
]

const featureSections = [
  {
    eyebrow: "Labels",
    title: "Labels aanmaken en printen in seconden",
    text: "Verwerk orders per stuk, in bulk of via import. Sendwise houdt het proces compact, zodat je team sneller kan picken, pakken en verzenden.",
    items: [
      "Verzendlabels per order of in bulk",
      "Handmatig zendingen aanmaken",
      "Zendingen importeren via Excel",
      "Ondersteuning voor labelprinters",
    ],
    icon: FiPrinter,
    visual: LabelPrintAnimation,
  },
  {
    eyebrow: "Tracking",
    title: "Volledig inzicht in elke zending",
    text: "Alle zendingen blijven vindbaar met hun status, track & trace en vervolgacties. Je ziet sneller waar aandacht nodig is.",
    items: [
      "Realtime status per zending",
      "Track & trace direct beschikbaar",
      "Retourlabels vanuit het dashboard",
      "Problemen melden met een klik",
    ],
    icon: FiBarChart2,
    visual: ShipmentInsightAnimation,
    reversed: true,
  },
  {
    eyebrow: "Support",
    title: "Tickets en onderzoeken op één plek",
    text: "Als er iets misgaat met een zending, blijft communicatie gekoppeld aan de juiste order. Geen losse mails of vervoerdersportals meer.",
    items: [
      "Overzicht van openstaande tickets",
      "Updates over onderzoeken bij vervoerders",
      "Communicatie per zending gebundeld",
      "Sneller schakelen met support",
    ],
    icon: FiMail,
    visual: TicketSupportAnimation,
  },
  {
    eyebrow: "Facturen",
    title: "Inzicht in kosten en facturen",
    text: "Bekijk tarieven, facturen en verzendkosten overzichtelijk bij elkaar. Zo houd je controle zonder verborgen toeslagen.",
    items: [
      "Overzicht van alle facturen",
      "Facturen eenvoudig betalen",
      "Volledig inzicht in verzendprijzen",
      "Geen verborgen kosten",
    ],
    icon: FiCreditCard,
    visual: BillingInsightAnimation,
    reversed: true,
  },
  {
    eyebrow: "Branding",
    title: "Je eigen trackingervaring voor klanten",
    text: "Maak je verzendcommunicatie herkenbaar met trackingpagina's en e-mails die aansluiten op je eigen merk.",
    items: [
      "Custom trackingpagina",
      "Eigen tracking e-mails",
      "Consistente merkervaring",
      "Geschikt voor CONNECT-zendingen",
    ],
    icon: FiRefreshCw,
    visual: BrandingExperienceAnimation,
  },
]

const IntegrationLogo = ({ name, src }) => (
  <div className="flex h-20 w-28 shrink-0 items-center justify-center sm:h-28 sm:w-36 lg:h-32 lg:w-40">
    <img
      src={src}
      alt={`${name} integratie`}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      className="max-h-16 max-w-[130px] object-contain sm:max-h-24 sm:max-w-[180px] lg:max-h-28 lg:max-w-[210px]"
    />
  </div>
)

const CheckList = ({ items }) => (
  <ul className="grid gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 inter-medium text-sm leading-6 text-[#445066]">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f0ff] text-[#1a5ee5]">
          <FiCheck className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
        </span>
        {item}
      </li>
    ))}
  </ul>
)

const FeatureSection = ({ section }) => {
  const Visual = section.visual
  const Icon = section.icon

  const copy = (
    <div className="flex flex-col justify-center">
      <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#eef5ff] px-3.5 py-2 inter-semibold text-xs uppercase tracking-[0.08em] text-[#1a5ee5] ring-1 ring-[#dce9ff]">
        {createElement(Icon, { className: "h-4 w-4", "aria-hidden": "true" })}
        {section.eyebrow}
      </span>
      <h2 className="inter-semibold text-3xl leading-tight text-[#07115a] sm:text-4xl">
        {section.title}
      </h2>
      <p className="mt-4 max-w-xl inter-medium text-base leading-8 text-[#667085]">
        {section.text}
      </p>
      <div className="mt-7">
        <CheckList items={section.items} />
      </div>
    </div>
  )

  const visual = (
    <div className="relative min-h-[300px] overflow-hidden rounded-[26px] border border-[#e1eaf7] bg-[#fbfdff] p-4 shadow-[0_20px_65px_rgba(7,17,31,0.08)] sm:min-h-[340px] sm:p-5">
      <div className="absolute right-6 top-6 h-16 w-16 rotate-45 rounded-[18px] bg-[#e8f2ff]" aria-hidden="true" />
      <div className="relative h-[270px] sm:h-[310px]">
        {createElement(Visual)}
      </div>
    </div>
  )

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:py-16">
      <div className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 ${section.reversed ? "" : ""}`}>
        {section.reversed ? (
          <>
            <div className="lg:order-1">{copy}</div>
            <div className="lg:order-2">{visual}</div>
          </>
        ) : (
          <>
            {visual}
            {copy}
          </>
        )}
      </div>
    </section>
  )
}

const SendwisePlatform = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white text-[#0d1321]">
      <Homepage2Header />

      <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-44">
        <style>{`
          @keyframes platformHeroImageIn {
            from {
              opacity: 0;
              transform: translateX(70px) scale(0.985);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
        `}</style>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-4 pb-12 sm:px-6 sm:pb-16 lg:min-h-[600px] lg:grid-cols-[580px_1fr] lg:gap-10 lg:pb-20">
          <div className="relative z-10 max-w-[620px] lg:pb-8">
            <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
              <div className="flex -space-x-2">
                {[FiLink, FiPrinter, FiTruck].map((Icon, index) => (
                  <span
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#eef5ff] text-[#1a5ee5] shadow-[0_4px_12px_rgba(15,23,42,0.10)]"
                  >
                    {createElement(Icon, { className: "h-3.5 w-3.5", "aria-hidden": "true" })}
                  </span>
                ))}
              </div>
              <p className="inter-medium text-sm text-[#707894] sm:text-[0.95rem]">
                Koppelen, labels maken en zendingen volgen
              </p>
            </div>

            <h1 className="inter-semibold text-[2.65rem] leading-[1.03] text-[#07115a] sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              <span className="block sm:whitespace-nowrap">Het Sendwise</span>
              <span className="block">platform</span>
            </h1>

            <p className="mt-5 max-w-2xl inter-medium text-base leading-7 text-[#3f4965] sm:mt-6 sm:text-lg sm:leading-8">
              Labels, tracking en verzendkosten in één rustig dashboard.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/start-met-sendwise"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-[12px] bg-[#1a5ee5] px-6 inter-semibold text-sm text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2] sm:w-auto"
              >
                Start met Sendwise
                <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-[12px] border border-[#d4dceb] bg-white px-6 inter-semibold text-sm text-[#07115a] shadow-[0_10px_24px_rgba(7,17,31,0.04)] transition hover:border-[#b8c4d8] hover:bg-[#f8fbff] sm:w-auto"
              >
                Plan een kennismaking
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:min-h-[440px] lg:items-start lg:justify-start">
            <div
              className="relative w-full lg:mt-2 lg:w-[900px] lg:max-w-none"
            >
              <div
                className="overflow-hidden rounded-[24px] border border-[#cfe0fb] bg-[#f7fbff] shadow-[0_24px_65px_rgba(7,17,31,0.14)] lg:rounded-l-[28px] lg:rounded-r-none lg:border-r-0 lg:shadow-[0_34px_95px_rgba(7,17,31,0.18)]"
                style={{ animation: "platformHeroImageIn 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both" }}
              >
                <img
                  src="/sendwise-platform-dashboard-hero.webp"
                  alt="Dashboard van het Sendwise platform"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="aspect-[1.87/1] w-full object-cover object-left-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-10 sm:px-6 sm:pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="flex min-h-[220px] flex-col rounded-[22px] border border-[#e1eaf7] bg-[#fbfdff] p-5 shadow-[0_18px_55px_rgba(7,17,31,0.065)] sm:min-h-[250px] sm:rounded-[24px] sm:p-7"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1a5ee5] shadow-[0_12px_30px_rgba(26,94,229,0.10)] ring-1 ring-[#dce9ff]">
                  {createElement(Icon, { className: "h-7 w-7", "aria-hidden": "true" })}
                </span>
                <h2 className="mt-6 inter-semibold text-2xl leading-tight text-[#07115a]">{title}</h2>
                <p className="mt-3 inter-medium text-base leading-7 text-[#667085]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f7fbff] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <style>{`
          @keyframes platformIntegrations {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
              <h2 className="inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl">
              Orders automatisch binnen vanuit je systemen
            </h2>
            <p className="mt-4 max-w-xl inter-medium text-base leading-7 text-[#667085] sm:mt-5 sm:text-lg sm:leading-8">
              Sendwise sluit aan op de tools die je al gebruikt. Daardoor staat elke order klaar zonder handmatig overtypen.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/integraties"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[#d4dceb] bg-white px-5 inter-semibold text-sm text-[#07115a] shadow-[0_10px_24px_rgba(7,17,31,0.04)] transition hover:border-[#b8c4d8] hover:bg-[#f8fbff]"
              >
                Bekijk alle integraties
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f7fbff] to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f7fbff] to-transparent sm:w-20" />

            <div className="flex w-max" style={{ animation: "platformIntegrations 34s linear infinite" }}>
              {[...integrations, ...integrations].map((integration, index) => (
                <IntegrationLogo key={`${integration.name}-${index}`} {...integration} />
              ))}
            </div>
            <div className="mt-2 flex w-max" style={{ animation: "platformIntegrations 38s linear infinite reverse" }}>
              {[...integrations.slice(6), ...integrations.slice(0, 6), ...integrations.slice(6), ...integrations.slice(0, 6)].map((integration, index) => (
                <IntegrationLogo key={`${integration.name}-reverse-${index}`} {...integration} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-2 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl lg:text-6xl">
            Alles wat je dagelijks nodig hebt om te verzenden.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl inter-medium text-base leading-7 text-[#3f4965] sm:mt-5 sm:text-lg sm:leading-8">
            De belangrijkste verzendacties blijven dicht bij elkaar, zodat je team minder hoeft te zoeken en sneller kan werken.
          </p>
        </div>
      </section>

      {featureSections.map((section) => (
        <FeatureSection key={section.title} section={section} />
      ))}

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[28px] bg-[#07115a] p-8 text-white shadow-[0_24px_70px_rgba(7,17,90,0.18)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <h2 className="inter-semibold text-4xl leading-tight sm:text-5xl">
              Eén platform voor webshop, magazijn en support.
            </h2>
            <p className="mt-5 inter-medium text-lg leading-8 text-white/78">
              Van order tot factuur: Sendwise brengt de losse stappen terug naar een overzichtelijke workflow.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Orders klaarzetten", "Labels printen", "Status volgen"].map((step, index) => (
              <div key={step} className="rounded-[18px] bg-white/10 p-5 ring-1 ring-white/14">
                <p className="inter-semibold text-sm text-[#8fd36a]">0{index + 1}</p>
                <p className="mt-3 inter-semibold text-lg leading-tight text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
      <Homepage2Footer />
    </main>
  )
}

export default SendwisePlatform
