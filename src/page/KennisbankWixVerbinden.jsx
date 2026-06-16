import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowRight,
  FiArrowLeft,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiCopy,
  FiLink2,
  FiMail,
  FiUser,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"

const siteIdExampleUrl =
  "https://demo-webwinkel.manage.wix.com/dashboard/cd5e5d04-2c4c-4f1a-a7a4-36602247a6f9/setupIST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0"

const requiredItems = [
  "Toegang tot je Wix-account met rechten op accountinstellingen en API keys.",
  "Een bestaande Wix-site die je met Sendwise wilt koppelen.",
  "Toegang tot het Sendwise dashboard via Integraties > Koppelen > Wix.",
]

const steps = [
  {
    title: "Stap 1 — Open accountinstellingen in Wix",
    text: "Log in op Wix, klik rechtsboven op je profielfoto en open vervolgens Accountinstellingen. Vanuit hier ga je naar de API-omgeving van je account.",
    image: "/wix-step-1.png",
    alt: "Wix accountmenu met Accountinstellingen",
    bullets: [
      "Klik rechtsboven op je profielfoto.",
      "Kies Accountinstellingen in het uitklapmenu.",
    ],
  },
  {
    title: "Stap 2 — Ga in de sidebar naar API keys",
    text: "Binnen je accountinstellingen staat links de navigatie voor accountonderdelen. Open daar API keys om sleutels voor externe koppelingen te beheren.",
    image: "/wix-step-2.png",
    alt: "Wix accountinstellingen met API keys in de sidebar",
    bullets: [
      "Gebruik de linker sidebar binnen accountinstellingen.",
      "Klik op API keys.",
    ],
  },
  {
    title: "Stap 3 — Start met een nieuwe API key",
    text: "Op de API Keys-pagina klik je op Generate API Key. Daarmee open je het formulier waarin je de Wix-koppeling voor Sendwise aanmaakt.",
    image: "/wix-step-3.png",
    alt: "Wix API Keys overzicht met Generate API Key knop",
    bullets: [
      "Open de API Keys-pagina.",
      "Klik rechtsboven op Generate API Key.",
    ],
  },
  {
    title: "Stap 4 — Vul naam, site en permissies correct in",
    text: "Geef de key een herkenbare naam en selecteer de Wix-site die je wilt koppelen. Zorg daarna dat bij de site permissions in ieder geval Wix Stores en Wix eCommerce actief zijn, zodat Sendwise orders en webshopdata kan uitlezen.",
    image: "/wix-step-4.png",
    alt: "Wix formulier voor het genereren van een API key",
    bullets: [
      "Geef de key een duidelijke naam, bijvoorbeeld Sendwise of demo-koppeling.",
      "Selecteer de Wix-site die je met Sendwise wilt verbinden.",
      "Controleer dat onder de permissions minimaal Wix Stores en Wix eCommerce zijn ingeschakeld.",
      "Klik daarna op Generate Key.",
    ],
    note: "Na het genereren stuurt Wix een verificatiecode naar je e-mailadres. Vul die code in binnen Wix. Daarna krijg je het access token te zien.",
  },
  {
    title: "Stap 5 — Open in Sendwise de Wix-integratie",
    text: "Ga in Sendwise naar Integraties, kies Koppelen en open daar Wix. In dit formulier ga je zometeen de vier gegevens invullen die Wix zojuist heeft opgeleverd.",
    image: "/wix-step-5.png",
    alt: "Sendwise Wix integratieformulier",
    bullets: [
      "Open Integraties > Koppelen > Wix in Sendwise.",
      "Laat deze pagina open staan terwijl je de Wix-gegevens verzamelt.",
    ],
  },
  {
    title: "Stap 6 — Kopieer het access token en het account ID uit Wix",
    text: "Zodra Wix de verificatie heeft afgerond, kun je het token kopiëren en in Sendwise plakken bij Access Token. Op dezelfde API Keys-pagina staat rechts ook het Account ID. Dat ID vul je in Sendwise in bij Account ID.",
    image: "/wix-step-6.png",
    alt: "Wix API Keys overzicht met gegenereerde key en account ID",
    bullets: [
      "Kopieer het token van de zojuist aangemaakte key.",
      "Plak dit in Sendwise bij Access Token.",
      "Kopieer rechts op dezelfde pagina het Account ID.",
      "Plak dit in Sendwise bij Account ID.",
    ],
  },
  {
    title: "Stap 7 — Haal het Site ID uit je Wix dashboard-URL en test de verbinding",
    text: "Voor Site ID ga je terug naar het Wix dashboard van de shop. In de URL staat direct na /dashboard/ het site-id. Kopieer exact dat UUID-gedeelte, vul het in Sendwise in en geef de integratie een naam. Klik daarna op Test verbinding.",
    image: "/wix-step-7.png",
    alt: "Ingevuld Sendwise Wix formulier klaar voor test",
    bullets: [
      "Ga terug naar het Wix dashboard van de gekoppelde site.",
      "Zoek in de URL het deel direct na /dashboard/.",
      "Kopieer dat UUID-formaat en plak het in Sendwise bij Site ID.",
      "Vul ook een herkenbare integratienaam in.",
      "Klik daarna op Test verbinding.",
    ],
    siteIdExample: "cd5e5d04-2c4c-4f1a-a7a4-36602247a6f9",
  },
  {
    title: "Stap 8 — Sla de koppeling op zodra de test succesvol is",
    text: "Als Sendwise aangeeft dat de verbinding succesvol is, dan klopt de configuratie. Je kunt daarna direct op Opslaan klikken om de Wix-integratie actief te maken.",
    image: "/wix-step-8.png",
    alt: "Succesvolle Wix verbinding in Sendwise",
    bullets: [
      "Controleer dat de status op Verbinding succesvol staat.",
      "Klik daarna op Opslaan.",
    ],
    note: "Vanaf dit moment kan Sendwise de Wix-shop gebruiken voor automatische synchronisatie.",
  },
]

const MetaItem = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 text-sm text-[#5e6a80] sm:text-base">
    <Icon size={16} />
    <span>{children}</span>
  </div>
)

const CopyChip = ({ value }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (error) {
      console.error("Clipboard copy failed", error)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
        copied
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border-[#d6e3f8] bg-white text-[#1a5ee5] hover:bg-[#f5f9ff]"
      }`}
    >
      {copied ? <FiCheckCircle size={14} /> : <FiCopy size={14} />}
      <span>{copied ? "Gekopieerd" : "Kopieer waarde"}</span>
    </button>
  )
}

const StepCard = ({ step, index }) => {
  const reverse = index % 2 === 1

  return (
    <section className="rounded-[30px] border border-[#dce7f4] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      <div className={`grid gap-8 lg:items-center ${reverse ? "lg:grid-cols-[1.05fr,0.95fr]" : "lg:grid-cols-[0.95fr,1.05fr]"}`}>
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="overflow-hidden rounded-[24px] border border-[#dce7f4] bg-[#f7fbff]">
            <img src={step.image} alt={step.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className={`space-y-5 ${reverse ? "lg:order-1" : ""}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce7f4] bg-[#f7fbff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1a5ee5]">
            <FiLink2 size={14} />
            Kennisbank artikel
          </div>

          <h2 className="inter-semibold text-[1.65rem] leading-tight text-[#0d1321] sm:text-[2rem] lg:text-[2.4rem]">
            {step.title}
          </h2>

          <p className="text-[1rem] leading-8 text-[#526078] sm:text-[1.05rem]">{step.text}</p>

          <ul className="space-y-3">
            {step.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-[0.98rem] leading-7 text-[#334155]">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a5ee5]/10 text-[#1a5ee5]">
                  <FiCheckCircle size={14} />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {step.note ? (
            <div className="rounded-[22px] border border-[#d6ebff] bg-[#f2f8ff] p-5 text-[0.95rem] leading-7 text-[#355070]">
              <div className="mb-2 flex items-center gap-2 font-semibold text-[#1a5ee5]">
                <FiMail size={16} />
                Belangrijk
              </div>
              <p>{step.note}</p>
            </div>
          ) : null}

          {step.siteIdExample ? (
            <div className="rounded-[22px] border border-[#e2e8f0] bg-[#fbfdff] p-5">
              <p className="text-sm font-semibold text-[#0d1321]">Voorbeeld van het Site ID in de Wix URL</p>
              <code className="mt-3 block overflow-x-auto rounded-2xl bg-[#0f172a] px-4 py-4 text-xs leading-6 text-white">
                {siteIdExampleUrl}
              </code>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#e8f0ff] px-3 py-1.5 text-xs font-semibold text-[#1a5ee5]">
                  Site ID: {step.siteIdExample}
                </span>
                <CopyChip value={step.siteIdExample} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default function KennisbankWixVerbinden() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0d1321]">
      <Homepage2Header />

      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:pb-20 lg:pt-44">
        <div className="absolute left-[-8rem] top-10 h-[24rem] w-[24rem] rounded-full bg-[#eaf2ff] blur-3xl" />
        <div className="absolute right-[-8rem] top-28 h-[22rem] w-[22rem] rounded-full bg-[#eef7ff] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/kennisbank"
            className="inline-flex items-center gap-2 rounded-full border border-[#dce7f4] bg-white px-4 py-2 text-sm font-semibold text-[#1a5ee5] shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition hover:bg-[#f7fbff]"
          >
            <FiArrowLeft />
            Terug naar kennisbank
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="inter-semibold max-w-4xl text-[2.5rem] leading-[1.02] text-[#0d1321] sm:text-[3.6rem] lg:text-[4.6rem]">
                Handleiding: Wix verbinden met Sendwise
              </h1>

              <p className="max-w-3xl text-[1.05rem] leading-8 text-[#526078] sm:text-[1.12rem]">
                In deze kennisbankpagina zie je stap voor stap hoe je in Wix een API key aanmaakt,
                het access token, account ID en site ID verzamelt, en deze gegevens in Sendwise
                invult om de koppeling te testen en op te slaan.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <MetaItem icon={FiUser}>Sendwise Team</MetaItem>
                <MetaItem icon={FiCalendar}>16 juni 2026</MetaItem>
                <MetaItem icon={FiClock}>± 7 min lezen</MetaItem>
              </div>

            </div>

            <div className="rounded-[32px] border border-[#dce7f4] bg-white p-4 shadow-[0_26px_70px_rgba(15,23,42,0.08)] sm:p-5">
              <img
                src="/wix-step-8.png"
                alt="Succesvolle Wix koppeling met Sendwise"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full rounded-[24px] border border-[#e3edf8]"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr,1.15fr]">
            <div className="rounded-[28px] border border-[#dce7f4] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1a5ee5]">Wat heb je nodig?</p>
              <ul className="mt-4 space-y-3">
                {requiredItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.98rem] leading-7 text-[#334155]">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a5ee5]/10 text-[#1a5ee5]">
                      <FiCheckCircle size={14} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#dce7f4] bg-[#f7fbff] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1a5ee5]">Welke Wix-gegevens vul je uiteindelijk in?</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] bg-white p-5">
                  <p className="text-sm font-semibold text-[#0d1321]">Access Token</p>
                  <p className="mt-2 text-sm leading-6 text-[#5e6a80]">Het token dat Wix toont nadat je de API key hebt gegenereerd en bevestigd via e-mailcode.</p>
                </div>
                <div className="rounded-[22px] bg-white p-5">
                  <p className="text-sm font-semibold text-[#0d1321]">Account ID</p>
                  <p className="mt-2 text-sm leading-6 text-[#5e6a80]">Te vinden rechts op de API Keys-pagina in Wix.</p>
                </div>
                <div className="rounded-[22px] bg-white p-5">
                  <p className="text-sm font-semibold text-[#0d1321]">Site ID</p>
                  <p className="mt-2 text-sm leading-6 text-[#5e6a80]">Het UUID-deel in je Wix dashboard-URL direct na <code>/dashboard/</code>.</p>
                </div>
                <div className="rounded-[22px] bg-white p-5">
                  <p className="text-sm font-semibold text-[#0d1321]">Integratie naam</p>
                  <p className="mt-2 text-sm leading-6 text-[#5e6a80]">Een herkenbare naam in Sendwise, bijvoorbeeld de naam van je shop of omgeving.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stappenplan" className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-[#dce7f4] bg-[#0d1321] px-6 py-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)] sm:px-10 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8bb5ff]">Afronding</p>
              <h2 className="mt-3 inter-semibold text-[1.8rem] leading-tight sm:text-[2.3rem]">
                Zie je “Verbinding succesvol”? Dan is de Wix-koppeling klaar om op te slaan.
              </h2>
              <p className="mt-4 text-[1rem] leading-8 text-white/76">
                Gebruik daarna de opgeslagen integratie om Wix-orders automatisch richting Sendwise te synchroniseren.
              </p>
            </div>

            <Link
              to="/start-met-sendwise"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#0d1321] transition hover:bg-[#eef4ff]"
            >
              Start met Sendwise
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Homepage2Footer />
    </main>
  )
}
