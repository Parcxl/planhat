import { createElement, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowRight,
  FiCheck,
  FiCreditCard,
  FiLayers,
  FiPackage,
  FiPrinter,
  FiTruck,
  FiUsers,
  FiZap,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"
import LabelPrintAnimation from "../components/animations/LabelPrintAnimation"
import ConnectFlowAnimation from "../components/animations/ConnectFlowAnimation"
import ShipmentInsightAnimation from "../components/animations/ShipmentInsightAnimation"
import BillingInsightAnimation from "../components/animations/BillingInsightAnimation"

const pillars = [
  {
    title: "Eén verzendlaag",
    text: "Sluit Sendwise onder je WMS aan en verwerk zendingen voor al je klanten vanuit één laag.",
    icon: FiLayers,
  },
  {
    title: "Minder pickups",
    text: "Bundel zendingen en voorkom losse vervoerdersprocessen per klant of carrier.",
    icon: FiTruck,
  },
  {
    title: "Betere marge",
    text: "Werk met duidelijke tarieven en gecombineerd volume zonder vaste verplichtingen.",
    icon: FiCreditCard,
  },
]

const featureSections = [
  {
    eyebrow: "WMS",
    title: "Verzenden vanuit je eigen WMS",
    text: "Sendwise werkt als verzendmotor onder je bestaande fulfilmentsoftware. Labels, tarieven en carriers worden geregeld zonder extra schermen voor je team.",
    items: [
      "Labels aanmaken vanuit je WMS",
      "Eén verzendlaag voor al je klanten",
      "Bulk, automatisch of handmatig",
      "Ondersteuning voor packstations en printers",
    ],
    icon: FiPrinter,
    visual: LabelPrintAnimation,
  },
  {
    eyebrow: "CONNECT",
    title: "Eén verzendmethode voor al je klanten",
    text: "Met CONNECT gebruik je één vaste verzendmethode onder je WMS. Per land werkt Sendwise met vaste, betrouwbare vervoerders.",
    items: [
      "Eén pickup voor alle klanten",
      "Betere tarieven door gecombineerd volume",
      "Vaste carriers per land",
      "Minder operationele schakels",
    ],
    icon: FiTruck,
    visual: ConnectFlowAnimation,
    reversed: true,
  },
  {
    eyebrow: "Overzicht",
    title: "Grip op iedere zending",
    text: "Houd status, tracking en vervolgacties centraal bij elkaar. Je team hoeft minder te zoeken wanneer klanten vragen stellen.",
    items: [
      "Realtime status per zending",
      "Track & trace direct beschikbaar",
      "Problemen melden vanuit één plek",
      "Support centraal gebundeld",
    ],
    icon: FiPackage,
    visual: ShipmentInsightAnimation,
  },
  {
    eyebrow: "Facturen",
    title: "Kosten helder per klant en volume",
    text: "Maak verzendkosten inzichtelijker en voorkom dat tarieven, toeslagen en facturen verspreid raken over losse vervoerders.",
    items: [
      "Duidelijke verzendkosten",
      "Geen verborgen toeslagen",
      "Inzicht in facturen",
      "Geschikt voor meerdere klanten",
    ],
    icon: FiCreditCard,
    visual: BillingInsightAnimation,
    reversed: true,
  },
]

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

const BoxxlCase = () => (
  <section className="bg-white px-6 py-16 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="relative rounded-[28px] bg-[#07115a] px-8 py-10 text-white shadow-[0_24px_70px_rgba(7,17,90,0.18)] lg:px-16 lg:py-16">
        <div className="absolute bottom-0 right-24 hidden h-44 w-44 rotate-45 rounded-[34px] bg-[#1a5ee5] lg:block" aria-hidden="true" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[250px_1fr]">
          <div className="lg:-mt-32">
            <img
              src="/freek-blijenberg-boxxl.png"
              alt="Freek Blijenberg van Boxxl Fulfilment"
              className="h-[320px] w-full rounded-2xl object-cover object-top shadow-[0_18px_45px_rgba(0,0,0,0.24)] lg:h-[350px]"
            />
          </div>

          <div className="relative z-10">
            <p className="max-w-4xl inter-semibold text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.35]">
              “Met Sendwise houden we ons fulfilmentproces strak en schaalbaar. Labels, tarieven en vervoerders komen samen in één overzichtelijke verzendlaag.”
            </p>

            <div className="mt-7 border-l-2 border-[#1a5ee5] pl-4">
              <p className="inter-semibold text-lg text-white">Freek Blijenberg</p>
              <p className="mt-1 inter-medium text-sm text-white/75">Founder Boxxl Fulfilment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const VoorFulfilmentcenters = () => {
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
                {[FiLayers, FiTruck, FiUsers].map((Icon, index) => (
                  <span
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#eef5ff] text-[#1a5ee5] shadow-[0_4px_12px_rgba(15,23,42,0.10)]"
                  >
                    {createElement(Icon, { className: "h-3.5 w-3.5", "aria-hidden": "true" })}
                  </span>
                ))}
              </div>
              <p className="inter-medium text-sm text-[#707894] sm:text-[0.95rem]">
                Voor fulfilmentteams die schaalbaar willen verzenden
              </p>
            </div>

            <h1 className="inter-semibold text-5xl leading-[1.03] text-[#07115a] sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              <span className="block sm:whitespace-nowrap">Eén verzendlaag.</span>
              <span className="block sm:whitespace-nowrap">Meer grip.</span>
            </h1>

            <p className="mt-6 max-w-2xl inter-medium text-lg leading-8 text-[#3f4965]">
              Verzend voor al je klanten met vaste tarieven, één pickup en minder operationele complexiteit.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#1a5ee5] px-6 inter-semibold text-sm text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]"
              >
                Plan een kennismaking
                <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/start-met-sendwise"
                className="inline-flex h-12 items-center justify-center rounded-[12px] border border-[#d4dceb] bg-white px-6 inter-semibold text-sm text-[#07115a] shadow-[0_10px_24px_rgba(7,17,31,0.04)] transition hover:border-[#b8c4d8] hover:bg-[#f8fbff]"
              >
                Start met Sendwise
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:min-h-[570px] lg:justify-end">
            <div className="relative w-full max-w-[600px] overflow-hidden rounded-[34px] shadow-[0_34px_95px_rgba(7,17,31,0.24)]">
              <img
                src="/fulfilmentcenters-hero.png"
                alt="Sendwise voor fulfilmentcenters"
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

      <section className="bg-[#f7fbff] px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl">
              Sendwise als verzendlaag onder je WMS
            </h2>
            <p className="mt-5 max-w-2xl inter-medium text-lg leading-8 text-[#667085]">
              Je blijft werken in je eigen fulfilmentsoftware. Sendwise regelt daaronder carriers, labels, tarieven en tracking.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { value: "1", label: "verzendlaag" },
              { value: "1", label: "pickupflow" },
              { value: "alle", label: "klanten gekoppeld" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[20px] border border-[#e1eaf7] bg-white p-6 shadow-[0_18px_55px_rgba(7,17,31,0.06)]">
                <p className="inter-semibold text-4xl text-[#07115a]">{stat.value}</p>
                <p className="mt-2 inter-medium text-sm leading-6 text-[#667085]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] bg-[#07115a] p-8 text-white shadow-[0_24px_70px_rgba(7,17,90,0.18)] lg:p-12">
            <h2 className="inter-semibold text-4xl leading-tight sm:text-5xl">
              Verzenden binnen fulfilment is vaak onnodig complex.
            </h2>
            <p className="mt-5 inter-medium text-lg leading-8 text-white/78">
              Meerdere vervoerders, klantafspraken en pickups drukken op je marge. Sendwise brengt die complexiteit terug naar één centrale flow.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Verschillende pickups per dag", "Onvoorspelbare verzendkosten", "Versnipperde support bij problemen"].map((item) => (
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
            Minder schakels, meer marge.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl inter-medium text-lg leading-8 text-[#3f4965]">
            Een fulfilmentcenter heeft snelheid nodig, maar vooral overzicht. Sendwise houdt de verzendlaag strak.
          </p>
        </div>
      </section>

      {featureSections.map((section) => (
        <FeatureSection key={section.title} section={section} />
      ))}

      <BoxxlCase />

      <section className="bg-white px-6 pb-24 pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[28px] bg-[#1a5ee5] px-8 py-10 text-white shadow-[0_24px_70px_rgba(26,94,229,0.22)] lg:px-14 lg:py-14">
            <div className="absolute -bottom-24 right-12 h-56 w-56 rotate-45 rounded-[42px] bg-white/12" aria-hidden="true" />
            <div className="absolute -top-28 right-72 h-44 w-44 rotate-45 rounded-[36px] bg-white/10" aria-hidden="true" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="inter-semibold text-4xl leading-tight text-white sm:text-5xl">
                  Klaar om fulfilment slimmer in te richten?
                </h2>
                <p className="mt-4 max-w-2xl inter-medium text-lg leading-8 text-white/82">
                  Verlaag kosten, vereenvoudig je verzendlaag en bedien klanten vanuit één schaalbare flow.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link
                  to="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 inter-semibold text-sm text-[#1a5ee5] shadow-[0_16px_34px_rgba(7,17,90,0.16)] transition hover:bg-[#f4f8ff]"
                >
                  Plan een kennismaking
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/start-met-sendwise"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 inter-semibold text-sm text-white transition hover:bg-white/16"
                >
                  Start met Sendwise
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

export default VoorFulfilmentcenters
