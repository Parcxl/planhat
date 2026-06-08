import { createElement, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiClipboard,
  FiGrid,
  FiMap,
  FiPackage,
  FiTruck,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"
import OrderPickingAnimation from "../components/animations/OrderPickingAnimation"
import WarehouseNavigationAnimation from "../components/animations/WarehouseNavigationAnimation"
import PackingControlAnimation from "../components/animations/PackingControlAnimation"
import InventoryOverviewAnimation from "../components/animations/InventoryOverviewAnimation"

const pillars = [
  {
    title: "Orders klaarzetten",
    text: "Nieuwe orders staan direct in je magazijnflow, klaar om te picken en te verwerken.",
    icon: FiClipboard,
  },
  {
    title: "Picken en inpakken",
    text: "Werk stap voor stap door picklijsten en voorkom fouten aan de inpaktafel.",
    icon: FiPackage,
  },
  {
    title: "Voorraad in beeld",
    text: "Houd producten, locaties en voorraad centraal bij zonder losse spreadsheets.",
    icon: FiGrid,
  },
]

const featureSections = [
  {
    eyebrow: "Picken",
    title: "Slim picken, sneller door je magazijn",
    text: "Orders worden automatisch omgezet in duidelijke picklijsten. Zo verzamelt je team sneller producten met minder fouten en minder zoekwerk.",
    items: [
      "Automatische picklijsten",
      "Batch & single picking",
      "Route-optimalisatie",
      "Ondersteuning voor scanners en mobiel",
    ],
    icon: FiClipboard,
    visual: OrderPickingAnimation,
  },
  {
    eyebrow: "Locaties",
    title: "Altijd weten waar je moet zijn",
    text: "Tijdens het picken begeleidt Sendwise PRO je stap voor stap door het magazijn, in de juiste volgorde en met duidelijke locaties.",
    items: [
      "Locatiegestuurd picken",
      "Smartphone als scanner",
      "Handheld scanners",
      "Realtime foutdetectie",
    ],
    icon: FiMap,
    visual: WarehouseNavigationAnimation,
    reversed: true,
  },
  {
    eyebrow: "Inpakken",
    title: "Efficiënt en foutloos inpakken",
    text: "Aan de inpaktafel controleert Sendwise PRO of de juiste producten worden verwerkt voordat de order naar verzending gaat.",
    items: [
      "Packcontrole per order",
      "Sneller werken aan de inpaktafel",
      "Minder fouten en retouren",
      "Duidelijke status per order",
    ],
    icon: FiBox,
    visual: PackingControlAnimation,
  },
  {
    eyebrow: "Voorraad",
    title: "Volledig inzicht in je voorraad",
    text: "Beheer producten, locaties en voorraad vanuit een overzichtelijk dashboard dat meegroeit met je magazijn.",
    items: [
      "Realtime voorraad per locatie",
      "Producten beheren en bewerken",
      "Minder out-of-stock situaties",
      "Overzicht per webshop",
    ],
    icon: FiGrid,
    visual: InventoryOverviewAnimation,
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

const SendwisePro = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white text-[#0d1321]">
      <Homepage2Header />

      <section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-44">
        <style>{`
          @keyframes proHeroImageIn {
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
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 lg:min-h-[600px] lg:grid-cols-[580px_1fr] lg:gap-10 lg:pb-20">
          <div className="relative z-10 max-w-[620px] lg:pb-8">
            <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
              <div className="flex -space-x-2">
                {[FiClipboard, FiPackage, FiTruck].map((Icon, index) => (
                  <span
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#eef5ff] text-[#1a5ee5] shadow-[0_4px_12px_rgba(15,23,42,0.10)]"
                  >
                    {createElement(Icon, { className: "h-3.5 w-3.5", "aria-hidden": "true" })}
                  </span>
                ))}
              </div>
              <p className="inter-medium text-sm text-[#707894] sm:text-[0.95rem]">
                Picken, inpakken en voorraad beheren
              </p>
            </div>

            <h1 className="inter-semibold text-5xl leading-[1.03] text-[#07115a] sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              <span className="block whitespace-nowrap">Sendwise PRO</span>
              <span className="block">voor fulfilment</span>
            </h1>

            <p className="mt-6 max-w-2xl inter-medium text-lg leading-8 text-[#3f4965]">
              Fulfilmentsoftware voor webshops die sneller en foutloos willen werken.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/start-met-sendwise"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#1a5ee5] px-6 inter-semibold text-sm text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]"
              >
                Start met PRO
                <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-[12px] border border-[#d4dceb] bg-white px-6 inter-semibold text-sm text-[#07115a] shadow-[0_10px_24px_rgba(7,17,31,0.04)] transition hover:border-[#b8c4d8] hover:bg-[#f8fbff]"
              >
                Plan een demo
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:min-h-[440px] lg:items-start lg:justify-start">
            <div className="relative w-full lg:mt-2 lg:w-[900px] lg:max-w-none">
              <div
                className="overflow-hidden rounded-l-[28px] rounded-r-none border border-r-0 border-[#cfe0fb] bg-[#f7fbff] shadow-[0_34px_95px_rgba(7,17,31,0.18)]"
                style={{ animation: "proHeroImageIn 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both" }}
              >
                <img
                  src="/sendwise-pro-dashboard-hero.png"
                  alt="Dashboard van Sendwise PRO"
                  className="aspect-[1.87/1] w-full object-cover object-left-top"
                />
              </div>
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
              Alles voor fulfilment, op één plek
            </h2>
            <p className="mt-5 max-w-2xl inter-medium text-lg leading-8 text-[#667085]">
              Van orderinname tot picken, packen en voorraadbeheer: Sendwise PRO is ingericht om sneller te werken, fouten te verminderen en mee te schalen met je volume.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { value: "102", label: "orders te picken" },
              { value: "7", label: "klaar om in te pakken" },
              { value: "0", label: "klaar voor verzending" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[20px] border border-[#e1eaf7] bg-white p-6 shadow-[0_18px_55px_rgba(7,17,31,0.06)]">
                <p className="inter-semibold text-4xl text-[#07115a]">{stat.value}</p>
                <p className="mt-2 inter-medium text-sm leading-6 text-[#667085]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-2 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="inter-semibold text-5xl leading-tight text-[#07115a] sm:text-6xl">
            Een rustige workflow voor drukke magazijnen.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl inter-medium text-lg leading-8 text-[#3f4965]">
            PRO houdt iedere stap overzichtelijk, van binnengekomen order tot ingepakt pakket.
          </p>
        </div>
      </section>

      {featureSections.map((section) => (
        <FeatureSection key={section.title} section={section} />
      ))}

      <section className="bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] bg-[#07115a] p-8 text-white shadow-[0_24px_70px_rgba(7,17,90,0.18)] lg:p-12">
            <h2 className="inter-semibold text-4xl leading-tight sm:text-5xl">
              Transparante prijzen voor je fulfilmentflow.
            </h2>
            <p className="mt-5 inter-medium text-lg leading-8 text-white/78">
              Gebruik Sendwise zonder vaste kosten, of voeg PRO toe per webshop wanneer je fulfilmentproces meer grip nodig heeft.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[#e1eaf7] bg-white p-7 shadow-[0_18px_55px_rgba(7,17,31,0.065)]">
              <p className="inter-semibold text-xl text-[#07115a]">Sendwise</p>
              <p className="mt-5 inter-semibold text-5xl text-[#07115a]">€0</p>
              <p className="mt-3 inter-medium text-base text-[#667085]">Geen maandelijkse kosten</p>
            </div>
            <div className="rounded-[24px] border border-[#bcd2fb] bg-[#f7fbff] p-7 shadow-[0_20px_65px_rgba(26,94,229,0.10)]">
              <p className="inter-semibold text-xl text-[#07115a]">Sendwise PRO</p>
              <p className="mt-5 inter-semibold text-5xl text-[#07115a]">
                €20 <span className="text-base text-[#667085]">/ maand</span>
              </p>
              <p className="mt-3 inter-medium text-base text-[#667085]">Per webshop</p>
              <Link
                to="/start-met-sendwise"
                className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1a5ee5] px-5 inter-semibold text-sm text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]"
              >
                Start met PRO
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[28px] bg-[#1a5ee5] px-8 py-10 text-white shadow-[0_24px_70px_rgba(26,94,229,0.22)] lg:px-14 lg:py-14">
            <div className="absolute -bottom-24 right-12 h-56 w-56 rotate-45 rounded-[42px] bg-white/12" aria-hidden="true" />
            <div className="absolute -top-28 right-72 h-44 w-44 rotate-45 rounded-[36px] bg-white/10" aria-hidden="true" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="inter-semibold text-4xl leading-tight text-white sm:text-5xl">
                  Klaar om fulfilment slimmer aan te pakken?
                </h2>
                <p className="mt-4 max-w-2xl inter-medium text-lg leading-8 text-white/82">
                  Ontdek hoe Sendwise PRO je helpt sneller te picken, foutloos te verpakken en overzicht te houden.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link
                  to="/start-met-sendwise"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 inter-semibold text-sm text-[#1a5ee5] shadow-[0_16px_34px_rgba(7,17,90,0.16)] transition hover:bg-[#f4f8ff]"
                >
                  Start met PRO
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 inter-semibold text-sm text-white transition hover:bg-white/16"
                >
                  Plan een demo
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

export default SendwisePro
