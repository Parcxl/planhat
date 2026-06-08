import { createElement, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowRight,
  FiCheck,
  FiCreditCard,
  FiFileText,
  FiPackage,
  FiShield,
  FiShoppingBag,
  FiTruck,
  FiZap,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"
import LabelPrintAnimation from "../components/animations/LabelPrintAnimation"
import ConnectFlowAnimation from "../components/animations/ConnectFlowAnimation"
import OrderPickingAnimation from "../components/animations/OrderPickingAnimation"
import PackingControlAnimation from "../components/animations/PackingControlAnimation"

const integrations = [
  { name: "WooCommerce", src: "/woocommerce-logo.png" },
  { name: "Wix", src: "/wix.png" },
  { name: "Shopify", src: "/shopify-logo.png" },
  { name: "Sendwise API", src: "/sendwise-api.png" },
  { name: "PrestaShop", src: "/prestashop.png" },
  { name: "Mijnwebwinkel", src: "/mijnwebwinkel.png" },
  { name: "Magento", src: "/magento.jpg" },
  { name: "Goedgepickt", src: "/goedgepickt-sendwise-logo.png" },
  { name: "CCV", src: "/ccv-icon.svg" },
  { name: "Lightspeed", src: "/lightspeed.png" },
  { name: "Bol.com", src: "/bol-logo.png" },
]

const pillars = [
  {
    title: "Geen contracten",
    text: "Start zonder vaste verplichtingen en verzend wanneer het jou uitkomt.",
    icon: FiFileText,
  },
  {
    title: "Scherpe tarieven",
    text: "Profiteer van duidelijke all-in tarieven zonder losse labelbijdrages.",
    icon: FiCreditCard,
  },
  {
    title: "Alles gekoppeld",
    text: "Orders uit je webshop staan automatisch klaar om te verwerken.",
    icon: FiZap,
  },
]

const featureSections = [
  {
    eyebrow: "Labels",
    title: "Labels aanmaken en printen in seconden",
    text: "Orders komen automatisch binnen vanuit je webshop. Vanuit één dashboard maak je labels aan, print je ze direct en stuur je tracking naar je klant.",
    items: [
      "Orders automatisch binnen",
      "Labels per order of in bulk",
      "Handmatig verzenden of via Excel",
      "Tracking direct naar je klant",
    ],
    icon: FiPackage,
    visual: LabelPrintAnimation,
  },
  {
    eyebrow: "CONNECT",
    title: "Goedkoper verzenden met CONNECT",
    text: "Verzend via Sendwise met vaste, betrouwbare vervoerders in Nederland en Europa. Eén pickup, scherpe tarieven en geen losse vervoerderscontracten.",
    items: [
      "Eén pickup voor al je zendingen",
      "Scherpe all-in tarieven",
      "Geen contracten of abonnementskosten",
      "De juiste vervoerder per land",
    ],
    icon: FiTruck,
    visual: ConnectFlowAnimation,
    reversed: true,
  },
  {
    eyebrow: "Fulfilment",
    title: "Groei door met Sendwise PRO",
    text: "Wanneer je volume groeit, helpt PRO je om picken, packen en voorraadbeheer strak te organiseren.",
    items: [
      "Picklijsten voor je magazijn",
      "Packcontrole aan de inpaktafel",
      "Minder fouten en retouren",
      "Voorraad beter in beeld",
    ],
    icon: FiShoppingBag,
    visual: OrderPickingAnimation,
  },
  {
    eyebrow: "Inpakken",
    title: "Minder fouten voor de deur uit",
    text: "Controleer orders voordat ze verzonden worden en houd je proces rustig, ook wanneer het drukker wordt.",
    items: [
      "Controle per order",
      "Duidelijke status per stap",
      "Sneller verwerken op piekmomenten",
      "Minder support achteraf",
    ],
    icon: FiShield,
    visual: PackingControlAnimation,
    reversed: true,
  },
]

const IntegrationLogo = ({ name, src }) => (
  <div className="flex h-28 w-40 shrink-0 items-center justify-center">
    <img src={src} alt={`${name} integratie`} className="max-h-24 max-w-[190px] object-contain" />
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
    <section className="bg-white px-6 py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
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

const VoorWebshops = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white text-[#0d1321]">
      <Homepage2Header />

      <section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-44">
        <div className="mx-auto grid min-h-[690px] w-full max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24">
          <div className="relative z-10 max-w-[690px] lg:pb-10">
            <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
              <div className="flex -space-x-2">
                {[FiShoppingBag, FiPackage, FiTruck].map((Icon, index) => (
                  <span
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#eef5ff] text-[#1a5ee5] shadow-[0_4px_12px_rgba(15,23,42,0.10)]"
                  >
                    {createElement(Icon, { className: "h-3.5 w-3.5", "aria-hidden": "true" })}
                  </span>
                ))}
              </div>
              <p className="inter-medium text-sm text-[#707894] sm:text-[0.95rem]">
                Voor webshops die slimmer willen verzenden
              </p>
            </div>

            <h1 className="inter-semibold text-5xl leading-[1.03] text-[#07115a] sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              <span className="block sm:whitespace-nowrap">Verzend slimmer.</span>
              <span className="block sm:whitespace-nowrap">Betaal minder.</span>
            </h1>

            <p className="mt-6 max-w-2xl inter-medium text-lg leading-8 text-[#3f4965]">
              Alles voor labels, tracking, tarieven en fulfilment in één platform voor je webshop.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/start-met-sendwise"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#1a5ee5] px-6 inter-semibold text-sm text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]"
              >
                Start met Sendwise
                <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/prijzen"
                className="inline-flex h-12 items-center justify-center rounded-[12px] border border-[#d4dceb] bg-white px-6 inter-semibold text-sm text-[#07115a] shadow-[0_10px_24px_rgba(7,17,31,0.04)] transition hover:border-[#b8c4d8] hover:bg-[#f8fbff]"
              >
                Bekijk tarieven
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:min-h-[570px] lg:justify-end">
            <div className="relative w-full max-w-[600px] overflow-hidden rounded-[34px] shadow-[0_34px_95px_rgba(7,17,31,0.24)]">
              <img
                src="/sendwise-platform-hero.png"
                alt="Webshop order verwerken met Sendwise"
                className="aspect-[1.12/1] w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="flex min-h-[250px] flex-col rounded-[24px] border border-[#e1eaf7] bg-[#fbfdff] p-7 shadow-[0_18px_55px_rgba(7,17,31,0.065)]"
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

      <section className="overflow-hidden bg-[#f7fbff] px-6 py-16 lg:py-20">
        <style>{`
          @keyframes webshopIntegrations {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl">
              Koppel je webshop en verzend direct
            </h2>
            <p className="mt-5 max-w-xl inter-medium text-lg leading-8 text-[#667085]">
              Sendwise sluit aan op je webshop, marketplace en fulfilmentflow. Orders staan automatisch klaar om te verwerken.
            </p>
          </div>

          <div className="relative overflow-hidden py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f7fbff] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f7fbff] to-transparent" />

            <div className="flex w-max" style={{ animation: "webshopIntegrations 34s linear infinite" }}>
              {[...integrations, ...integrations].map((integration, index) => (
                <IntegrationLogo key={`${integration.name}-${index}`} {...integration} />
              ))}
            </div>
            <div className="mt-2 flex w-max" style={{ animation: "webshopIntegrations 38s linear infinite reverse" }}>
              {[...integrations.slice(5), ...integrations.slice(0, 5), ...integrations.slice(5), ...integrations.slice(0, 5)].map((integration, index) => (
                <IntegrationLogo key={`${integration.name}-reverse-${index}`} {...integration} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] bg-[#07115a] p-8 text-white shadow-[0_24px_70px_rgba(7,17,90,0.18)] lg:p-12">
            <h2 className="inter-semibold text-4xl leading-tight sm:text-5xl">
              Geen verrassingen. Geen verplichtingen.
            </h2>
            <p className="mt-5 inter-medium text-lg leading-8 text-white/78">
              Je betaalt voor wat je verzendt. Geen abonnementskosten, geen contracten en geen onduidelijke toeslagen.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Geen contracten",
              "Geen abonnementskosten",
              "Eerlijke indexeringen",
              "Duidelijke tarieven per zending",
            ].map((item) => (
              <div key={item} className="rounded-[20px] border border-[#e1eaf7] bg-[#fbfdff] p-6 shadow-[0_18px_55px_rgba(7,17,31,0.06)]">
                <p className="inter-semibold text-lg leading-tight text-[#07115a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-2 pt-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="inter-semibold text-5xl leading-tight text-[#07115a] sm:text-6xl">
            Van eerste order tot groeiend magazijn.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl inter-medium text-lg leading-8 text-[#3f4965]">
            Start met eenvoudig verzenden en breid uit met CONNECT of PRO wanneer je volume groeit.
          </p>
        </div>
      </section>

      {featureSections.map((section) => (
        <FeatureSection key={section.title} section={section} />
      ))}

      <section className="bg-white px-6 pb-24 pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[28px] bg-[#1a5ee5] px-8 py-10 text-white shadow-[0_24px_70px_rgba(26,94,229,0.22)] lg:px-14 lg:py-14">
            <div className="absolute -bottom-24 right-12 h-56 w-56 rotate-45 rounded-[42px] bg-white/12" aria-hidden="true" />
            <div className="absolute -top-28 right-72 h-44 w-44 rotate-45 rounded-[36px] bg-white/10" aria-hidden="true" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="inter-semibold text-4xl leading-tight text-white sm:text-5xl">
                  Klaar om slimmer te verzenden met je webshop?
                </h2>
                <p className="mt-4 max-w-2xl inter-medium text-lg leading-8 text-white/82">
                  Verlaag verzendkosten en maak je proces eenvoudiger zonder overstapstress.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link
                  to="/start-met-sendwise"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 inter-semibold text-sm text-[#1a5ee5] shadow-[0_16px_34px_rgba(7,17,90,0.16)] transition hover:bg-[#f4f8ff]"
                >
                  Start met Sendwise
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 inter-semibold text-sm text-white transition hover:bg-white/16"
                >
                  Plan een kennismaking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Homepage2Footer />
    </main>
  )
}

export default VoorWebshops
