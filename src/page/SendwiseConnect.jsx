import { createElement, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowRight,
  FiCheck,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPackage,
  FiRepeat,
  FiTruck,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"
import ConnectFlowAnimation from "../components/animations/ConnectFlowAnimation"
import ConnectUSPCardAnimation from "../components/animations/ConnectUSPCardAnimation"
import ConnectBrandingAnimation from "../components/animations/ConnectBrandingAnimation"

const carrierLogos = [
  { name: "GLS", src: "/gls-logo-sendwise.webp" },
  { name: "DHL", src: "/sendwise-dhl.svg" },
  { name: "DAO", src: "/dao-logo-sendwise.webp" },
  { name: "Colissimo", src: "/colissimo-logo-sendwise.webp" },
  { name: "PostNL", src: "/postnl-icoon.webp" },
  { name: "Gofo", src: "/gofo-logo-sendwise.webp" },
  { name: "MRW", src: "/mrw-logo-sendwise.webp" },
  { name: "Correos", src: "/CORREOS-logo-sendwise.webp" },
  { name: "AT POST", src: "/AT POST-logo-sendwise.webp" },
  { name: "CTT", src: "/ctt-logo-sendwise.webp" },
]

const pillars = [
  {
    title: "Eén pickup",
    text: "Bundel zendingen voor meerdere vervoerders in één overzichtelijke ophaalflow.",
    icon: FiTruck,
  },
  {
    title: "Beste vervoerder per land",
    text: "Werk met vaste, betrouwbare partners per bestemming zonder zelf contracten te beheren.",
    icon: FiGlobe,
  },
  {
    title: "Één aanspreekpunt",
    text: "Support, tarieven en tracking blijven centraal bij Sendwise in plaats van versnipperd.",
    icon: FiMail,
  },
]

const featureSections = [
  {
    eyebrow: "Flow",
    title: "CONNECT maakt verzenden overzichtelijk",
    text: "Met CONNECT werk je vanuit één vaste verzendmethode. Per land gebruiken we betrouwbare vervoerders, terwijl jij werkt met één pickup en één aanspreekpunt.",
    items: [
      "Eén vaste verzendmethode",
      "Per land betrouwbare vervoerders",
      "Eén pickup voor alle zendingen",
      "Duidelijke tarieven en levering",
    ],
    icon: FiRepeat,
    visual: ConnectFlowAnimation,
  },
  {
    eyebrow: "Voordeel",
    title: "Waarom bedrijven verzenden met CONNECT",
    text: "CONNECT is eenvoudiger dan losse verzendcontracten en geeft meer grip op kosten, kwaliteit en support.",
    items: [
      "Geen losse vervoerderscontracten",
      "Minder operationeel gedoe",
      "Scherpe tarieven per bestemming",
      "Support via één partij",
    ],
    icon: FiCheck,
    visual: ConnectUSPCardAnimation,
    reversed: true,
  },
  {
    eyebrow: "Branding",
    title: "Tracking in jouw eigen stijl",
    text: "Voor CONNECT-zendingen bepaal je zelf hoe klanten hun pakket volgen met trackingpagina's en e-mails in je eigen huisstijl.",
    items: [
      "Eigen trackingpagina",
      "Tracking e-mails in je branding",
      "Heldere statusupdates voor klanten",
      "Geen extra tooling nodig",
    ],
    icon: FiMail,
    visual: ConnectBrandingAnimation,
  },
]

const CarrierLogo = ({ name, src }) => (
  <div className="flex h-20 w-28 shrink-0 items-center justify-center sm:h-24 sm:w-36 lg:h-28 lg:w-40">
    <img
      src={src}
      alt={`${name} vervoerder`}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      className="max-h-16 max-w-[130px] object-contain sm:max-h-20 sm:max-w-[170px] lg:max-h-24 lg:max-w-[190px]"
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

const SendwiseConnect = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white text-[#0d1321]">
      <Homepage2Header />

      <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-44">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-4 pb-12 sm:px-6 sm:pb-16 lg:min-h-[690px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pb-24">
          <div className="relative z-10 max-w-[690px] lg:pb-10">
            <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
              <div className="flex -space-x-2">
                {[FiTruck, FiMapPin, FiPackage].map((Icon, index) => (
                  <span
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#eef5ff] text-[#1a5ee5] shadow-[0_4px_12px_rgba(15,23,42,0.10)]"
                  >
                    {createElement(Icon, { className: "h-3.5 w-3.5", "aria-hidden": "true" })}
                  </span>
                ))}
              </div>
              <p className="inter-medium text-sm text-[#707894] sm:text-[0.95rem]">
                Eén pickup, vaste carriers en centrale support
              </p>
            </div>

            <h1 className="inter-semibold text-[2.75rem] leading-[1.03] text-[#07115a] sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              <span className="block sm:whitespace-nowrap">CONNECT.</span>
              <span className="block sm:whitespace-nowrap">Minder gedoe.</span>
            </h1>

            <p className="mt-5 max-w-2xl inter-medium text-base leading-7 text-[#3f4965] sm:mt-6 sm:text-lg sm:leading-8">
              Verzend via één methode met de juiste vervoerder per land, zonder losse contracten of meerdere pickups.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/start-met-sendwise"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-[12px] bg-[#1a5ee5] px-6 inter-semibold text-sm text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2] sm:w-auto"
              >
                Start met CONNECT
                <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/prijzen"
                className="inline-flex h-12 w-full items-center justify-center rounded-[12px] border border-[#d4dceb] bg-white px-6 inter-semibold text-sm text-[#07115a] shadow-[0_10px_24px_rgba(7,17,31,0.04)] transition hover:border-[#b8c4d8] hover:bg-[#f8fbff] sm:w-auto"
              >
                Bekijk tarieven
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:min-h-[570px] lg:justify-end">
            <div className="relative w-full max-w-[600px] overflow-hidden rounded-[24px] shadow-[0_24px_65px_rgba(7,17,31,0.20)] sm:rounded-[30px] lg:rounded-[34px] lg:shadow-[0_34px_95px_rgba(7,17,31,0.24)]">
              <img
                src="/sendwise-connect-hero.jpg"
                alt="Sendwise CONNECT bezorgbus"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="aspect-[1.12/1] w-full object-cover object-center"
              />
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
          @keyframes connectCarriers {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl">
              De slimme standaard voor Nederland en Europa
            </h2>
            <p className="mt-4 max-w-xl inter-medium text-base leading-7 text-[#667085] sm:mt-5 sm:text-lg sm:leading-8">
              CONNECT haalt complexiteit uit je verzendproces. Eén methode, één pickup en de juiste vervoerder per bestemming.
            </p>
          </div>

          <div className="relative overflow-hidden py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f7fbff] to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f7fbff] to-transparent sm:w-20" />

            <div className="flex w-max" style={{ animation: "connectCarriers 32s linear infinite" }}>
              {[...carrierLogos, ...carrierLogos].map((carrier, index) => (
                <CarrierLogo key={`${carrier.name}-${index}`} {...carrier} />
              ))}
            </div>
            <div className="mt-2 flex w-max" style={{ animation: "connectCarriers 38s linear infinite reverse" }}>
              {[...carrierLogos.slice(5), ...carrierLogos.slice(0, 5), ...carrierLogos.slice(5), ...carrierLogos.slice(0, 5)].map((carrier, index) => (
                <CarrierLogo key={`${carrier.name}-reverse-${index}`} {...carrier} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] bg-[#07115a] p-8 text-white shadow-[0_24px_70px_rgba(7,17,90,0.18)] lg:p-12">
            <h2 className="inter-semibold text-3xl leading-tight sm:text-5xl">
              Waarom verzenden vaak onnodig ingewikkeld is.
            </h2>
            <p className="mt-4 inter-medium text-base leading-7 text-white/78 sm:mt-5 sm:text-lg sm:leading-8">
              Veel webshops werken met losse vervoerders, verschillende afspraken en versnipperde support. CONNECT brengt dat terug naar één heldere flow.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Meerdere vervoerders en contracten",
              "Verschillende pickups en werkwijzen",
              "Onvoorspelbare tarieven",
              "Support verdeeld over meerdere partijen",
            ].map((item) => (
              <div key={item} className="rounded-[20px] border border-[#e1eaf7] bg-[#fbfdff] p-6 shadow-[0_18px_55px_rgba(7,17,31,0.06)]">
                <p className="inter-semibold text-lg leading-tight text-[#07115a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-2 pt-8 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl lg:text-6xl">
            Eén verzendmethode voor iedere bestemming.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl inter-medium text-base leading-7 text-[#3f4965] sm:mt-5 sm:text-lg sm:leading-8">
            Van carrierselectie tot tracking: CONNECT houdt de verzendlaag eenvoudig en voorspelbaar.
          </p>
        </div>
      </section>

      {featureSections.map((section) => (
        <FeatureSection key={section.title} section={section} />
      ))}

      <section className="bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[24px] bg-[#1a5ee5] px-5 py-7 text-white shadow-[0_24px_70px_rgba(26,94,229,0.22)] sm:rounded-[28px] sm:px-8 sm:py-10 lg:px-14 lg:py-14">
            <div className="absolute -bottom-24 right-12 h-56 w-56 rotate-45 rounded-[42px] bg-white/12" aria-hidden="true" />
            <div className="absolute -top-28 right-72 h-44 w-44 rotate-45 rounded-[36px] bg-white/10" aria-hidden="true" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="inter-semibold text-3xl leading-tight text-white sm:text-5xl">
                  Maak verzenden eenvoudiger en goedkoper.
                </h2>
                <p className="mt-4 max-w-2xl inter-medium text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
                  Met CONNECT werk je met vaste tarieven, één pickup en de juiste vervoerder per land.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link
                  to="/start-met-sendwise"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 inter-semibold text-sm text-[#1a5ee5] shadow-[0_16px_34px_rgba(7,17,90,0.16)] transition hover:bg-[#f4f8ff]"
                >
                  Start met CONNECT
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/prijzen"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 inter-semibold text-sm text-white transition hover:bg-white/16"
                >
                  Tarieven
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

export default SendwiseConnect
