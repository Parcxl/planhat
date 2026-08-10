import { createElement, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiExternalLink,
  FiSettings,
  FiShield,
  FiTruck,
  FiUser,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"

const summaryItems = [
  "In augustus 2026 is de energietoeslag € 0,17 per PostNL-pakket, exclusief btw.",
  "Het bedrag wordt maandelijks opnieuw vastgesteld en kan dus stijgen of dalen.",
  "De eerste factuur waarop de toeslag apart staat, is die van 19 augustus 2026.",
  "Sendwise neemt de vrachtwagenheffing van € 0,11 per pakket volledig voor eigen rekening.",
  "Vanaf 2027 wordt de energietoeslag verwerkt in de reguliere PostNL-tarieven.",
]

const truckFactors = [
  "het gewicht van de vrachtwagen",
  "de CO₂-emissieklasse",
  "de Euro-emissieklasse",
  "het aantal kilometers op wegen waar de heffing geldt",
]

const contents = [
  ["waarom-energietoeslag", "Waarom een energietoeslag?"],
  ["factuur", "Wanneer staat die op je factuur?"],
  ["looptijd", "Hoelang wordt die apart berekend?"],
  ["vrachtwagenheffing", "Hoe werkt de vrachtwagenheffing?"],
  ["sendwise-betaalt", "Wat neemt Sendwise voor zijn rekening?"],
  ["samengevat", "Alles op een rij"],
  ["veelgestelde-vragen", "Veelgestelde vragen"],
]

const faqs = [
  {
    question: "Hoe hoog is de PostNL-energietoeslag?",
    answer:
      "Voor augustus 2026 bedraagt de energietoeslag € 0,17 per PostNL-pakket, exclusief btw. PostNL stelt de toeslag iedere maand opnieuw vast, waardoor deze kan stijgen of dalen.",
  },
  {
    question: "Geldt de toeslag van € 0,17 ook na augustus?",
    answer:
      "Niet automatisch. De € 0,17 geldt alleen voor augustus 2026. Voor iedere volgende maand vind je het actuele bedrag in Sendwise onder Instellingen → Administratie → Toeslagen.",
  },
  {
    question: "Wanneer wordt de energietoeslag voor het eerst berekend?",
    answer:
      "De factuur van 19 augustus 2026 is de eerste factuur waarop de energietoeslag apart wordt vermeld.",
  },
  {
    question: "Waar kan ik het actuele bedrag bekijken?",
    answer:
      "Ga in Sendwise naar Instellingen → Administratie → Toeslagen. Daar staat het actuele maandbedrag voor PostNL-zendingen.",
  },
  {
    question: "Waarom verandert de energietoeslag iedere maand?",
    answer:
      "De toeslag beweegt mee met de brandstof- en energiekosten van PostNL. Wanneer deze kosten veranderen, kan PostNL ook de toeslag aanpassen.",
  },
  {
    question: "Wat is de vrachtwagenheffing?",
    answer:
      "Dit is een wettelijke heffing voor vrachtwagens met een technische maximummassa van meer dan 3.500 kilogram. Vervoerders betalen per gereden kilometer op de wegen waar de heffing geldt.",
  },
  {
    question: "Waarom heeft de vrachtwagenheffing invloed op PostNL?",
    answer:
      "PostNL vervoert pakketten tussen distributie- en sorteercentra met zware vrachtwagens. Omdat die meer dan 3.500 kilogram wegen, vallen ze onder de heffing.",
  },
  {
    question: "Wordt de vrachtwagenheffing aan mij doorberekend?",
    answer:
      "Nee. De vrachtwagenheffing veroorzaakt € 0,11 extra kosten per PostNL-pakket, maar Sendwise neemt dit bedrag volledig voor eigen rekening.",
  },
  {
    question: "Hoelang blijft de energietoeslag apart zichtbaar?",
    answer:
      "Tot en met 31 december 2026. Vanaf 2027 wordt de kostenontwikkeling meegenomen in de jaarlijkse indexering van de PostNL-tarieven.",
  },
]

const MetaItem = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 text-sm text-[#5e6a80] sm:text-base">
    {createElement(Icon, { size: 16, "aria-hidden": true })}
    <span>{children}</span>
  </div>
)

const ArticleHeading = ({ id, eyebrow, children }) => (
  <div className="scroll-mt-28" id={id}>
    {eyebrow ? (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#1a5ee5]">{eyebrow}</p>
    ) : null}
    <h2 className="inter-semibold text-[1.85rem] leading-[1.14] text-[#0d1321] sm:text-[2.35rem]">
      {children}
    </h2>
  </div>
)

export default function KennisbankPostnlToeslagen() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleContentsClick = (event, id) => {
    event.preventDefault()
    const section = document.getElementById(id)
    if (!section) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    section.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" })
    window.history.replaceState(null, "", `#${id}`)
  }

  return (
    <main className="min-h-screen bg-white text-[#0d1321]">
      <Homepage2Header />

      <header className="border-b border-[#e4eaf2] bg-[#f8fafc] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/kennisbank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a5ee5] transition hover:text-[#164fc2]"
          >
            <FiArrowLeft aria-hidden="true" />
            Terug naar kennisbank
          </Link>

          <div className="mt-12 max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1a5ee5]">
              Tarieven &amp; toeslagen
            </p>
            <h1 className="mt-5 inter-semibold text-[2.65rem] leading-[1.04] tracking-[-0.025em] text-[#0d1321] sm:text-[3.9rem] lg:text-[5rem]">
              Uitleg over de PostNL-energietoeslag en vrachtwagenheffing
            </h1>
            <p className="mt-7 max-w-4xl text-[1.08rem] leading-8 text-[#526078] sm:text-[1.18rem]">
              Door hogere brandstofprijzen stijgen de kosten voor pakketvervoer. We leggen uit wat
              je in augustus op je factuur ziet en welke nieuwe kosten Sendwise niet aan je
              doorberekent.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dce3ec] pt-6">
              <MetaItem icon={FiUser}>Sendwise Team</MetaItem>
              <MetaItem icon={FiCalendar}>10 augustus 2026</MetaItem>
              <MetaItem icon={FiClock}>± 6 min lezen</MetaItem>
            </div>
          </div>
        </div>
      </header>

      <article className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[260px,minmax(0,760px)] lg:justify-center lg:gap-16">
          <aside className="self-start lg:sticky lg:top-28">
            <nav aria-label="Inhoudsopgave" className="border-l-2 border-[#dce5f0] py-1 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0d1321]">In dit artikel</p>
              <ol className="mt-4 space-y-1.5">
                {contents.map(([id, label], index) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(event) => handleContentsClick(event, id)}
                      className="group flex gap-3 py-1.5 text-sm leading-5 text-[#5e6a80] transition-colors hover:text-[#1a5ee5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5ee5]/30"
                    >
                      <span className="font-semibold text-[#a0abbd] group-hover:text-[#1a5ee5]">{index + 1}</span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0">
            <p className="text-[1.08rem] leading-9 text-[#334155] sm:text-[1.14rem]">
              Door de oorlog in Iran en de onrust in het Midden-Oosten zijn de brandstofprijzen fors
              gestegen. Dit heeft direct invloed op de kosten die PostNL maakt voor het vervoeren en
              bezorgen van pakketten. Daarom geldt er een variabele energietoeslag voor
              PostNL-zendingen.
            </p>

            <section className="mt-14">
              <ArticleHeading id="waarom-energietoeslag" eyebrow="Energiekosten">
                Waarom geldt er een energietoeslag?
              </ArticleHeading>
              <div className="mt-5 space-y-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                <p>
                  Voor het vervoeren, sorteren en bezorgen van pakketten gebruikt PostNL verschillende
                  vormen van vervoer en energie. Stijgende brandstof- en energieprijzen hebben daardoor
                  direct invloed op de kosten van het bezorgnetwerk.
                </p>
                <p>
                  PostNL berekent hiervoor een variabele energietoeslag per pakket. Voor
                  <strong className="font-semibold text-[#0d1321]"> augustus 2026</strong> is deze
                  vastgesteld op <strong className="font-semibold text-[#0d1321]">€ 0,17 per PostNL-pakket, exclusief btw</strong>.
                  Dit is geen vast tarief: PostNL kan de toeslag iedere maand verhogen of verlagen.
                </p>
              </div>
            </section>

            <section className="mt-14 rounded-[28px] border border-[#dce7f4] bg-[#f7fbff] p-6 sm:p-8">
              <ArticleHeading id="factuur" eyebrow="Zichtbaar in Sendwise">
                Wanneer zie je de energietoeslag op je factuur?
              </ArticleHeading>
              <p className="mt-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                De factuur van <strong className="font-semibold text-[#0d1321]">19 augustus 2026</strong> is de eerste
                waarop de energietoeslag apart wordt vermeld. Voor augustus bedraagt deze € 0,17 per
                PostNL-pakket, exclusief btw.
              </p>
              <div className="mt-6 rounded-[22px] border border-[#d5e4f7] bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#0d1321]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf4ff] text-[#1a5ee5]">
                    <FiSettings aria-hidden="true" />
                  </span>
                  Vind het actuele maandbedrag in Sendwise
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#1a5ee5]">
                  <span className="rounded-lg bg-[#f2f6fb] px-3 py-2">Instellingen</span>
                  <FiArrowRight className="text-[#9aa7ba]" aria-hidden="true" />
                  <span className="rounded-lg bg-[#f2f6fb] px-3 py-2">Administratie</span>
                  <FiArrowRight className="text-[#9aa7ba]" aria-hidden="true" />
                  <span className="rounded-lg bg-[#e8f0ff] px-3 py-2">Toeslagen</span>
                </div>
              </div>
            </section>

            <section className="mt-14">
              <ArticleHeading id="looptijd" eyebrow="Tot eind 2026">
                Hoelang wordt de energietoeslag apart berekend?
              </ArticleHeading>
              <div className="mt-5 space-y-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                <p>
                  De energietoeslag wordt tot en met <strong className="font-semibold text-[#0d1321]">31 december 2026</strong> afzonderlijk berekend.
                </p>
                <p>
                  Vanaf 2027 wordt deze kostenontwikkeling meegenomen in de jaarlijkse indexering van
                  de PostNL-tarieven. De energietoeslag wordt dan verwerkt in het reguliere
                  verzendtarief en staat niet meer afzonderlijk op de factuur.
                </p>
              </div>
            </section>

            <section className="mt-14">
              <ArticleHeading id="vrachtwagenheffing" eyebrow="Nieuwe overheidsheffing">
                Hoe zit het met de nieuwe vrachtwagenheffing?
              </ArticleHeading>
              <div className="mt-5 space-y-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                <p>
                  Sinds 1 juli 2026 geldt in Nederland de nieuwe vrachtwagenheffing. Deze is gebaseerd op de{" "}
                  <a
                    href="https://wetten.overheid.nl/BWBR0047082/2026-03-01/0"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#1a5ee5] underline decoration-[#b7cdf4] underline-offset-4 hover:decoration-[#1a5ee5]"
                  >
                    Wet vrachtwagenheffing <FiExternalLink className="inline" aria-hidden="true" />
                  </a>
                  .
                </p>
                <p>
                  De heffing geldt voor Nederlandse en buitenlandse vrachtwagens met een technische
                  maximummassa van meer dan <strong className="font-semibold text-[#0d1321]">3.500 kilogram</strong>.
                  Op vrijwel alle Nederlandse snelwegen en enkele provinciale en gemeentelijke wegen
                  betalen vervoerders een bedrag per kilometer.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {truckFactors.map((factor) => (
                  <div key={factor} className="flex items-start gap-3 rounded-[18px] border border-[#dce7f4] bg-white p-4 text-sm leading-6 text-[#334155]">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-[#1a5ee5]">
                      <FiTruck size={14} aria-hidden="true" />
                    </span>
                    <span className="first-letter:uppercase">{factor}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                PostNL gebruikt zware vrachtwagens om pakketten tussen distributie- en sorteercentra
                te vervoeren. Daardoor heeft de heffing ook invloed op de kosten van PostNL-zendingen.
                Meer informatie vind je op de{" "}
                <a
                  href="https://www.rijksoverheid.nl/themas/verkeer-en-vervoer/goederenvervoer/vrachtwagenheffing"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#1a5ee5] underline decoration-[#b7cdf4] underline-offset-4 hover:decoration-[#1a5ee5]"
                >
                  website van de Rijksoverheid <FiExternalLink className="inline" aria-hidden="true" />
                </a>
                .
              </p>
            </section>

            <section id="sendwise-betaalt" className="mt-14 scroll-mt-28 overflow-hidden rounded-[30px] bg-[#0d1321] p-6 text-white sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <FiShield size={22} aria-hidden="true" />
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#8fb6ff]">Onze keuze</p>
              <h2 className="mt-3 inter-semibold text-[1.9rem] leading-[1.14] sm:text-[2.45rem]">
                Sendwise neemt de vrachtwagenheffing voor eigen rekening
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-white/75 sm:text-[1.06rem]">
                De vrachtwagenheffing zorgt voor Sendwise voor een extra kostenpost van
                <strong className="font-semibold text-white"> € 0,11 per PostNL-pakket</strong>. Om de gevolgen voor
                onze klanten te beperken, nemen we dit bedrag volledig voor eigen rekening. Voor
                PostNL-zendingen wordt alleen de actuele, variabele energietoeslag afzonderlijk berekend.
              </p>
              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                <FiCheck className="text-[#8fb6ff]" aria-hidden="true" />
                Jij betaalt € 0,00 vrachtwagenheffing
              </div>
            </section>

            <section className="mt-14 scroll-mt-28" id="samengevat">
              <ArticleHeading eyebrow="Kort en duidelijk">Samengevat</ArticleHeading>
              <ul className="mt-6 space-y-3">
                {summaryItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-[18px] bg-[#f7fbff] px-4 py-4 text-[0.98rem] leading-7 text-[#334155]">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f0ff] text-[#1a5ee5]">
                      <FiCheck size={14} aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-16 scroll-mt-28" id="veelgestelde-vragen">
              <ArticleHeading eyebrow="Snel antwoord">Veelgestelde vragen</ArticleHeading>
              <div className="mt-7 divide-y divide-[#dce7f4] border-y border-[#dce7f4]">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-1">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-[1rem] font-semibold leading-6 text-[#0d1321] marker:hidden sm:text-[1.05rem]">
                      {faq.question}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2f7ff] text-[#1a5ee5] transition group-open:rotate-180">
                        <FiChevronDown aria-hidden="true" />
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-6 pr-12 text-[0.98rem] leading-8 text-[#526078]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-14 rounded-[30px] bg-[#1a5ee5] px-6 py-9 text-white shadow-[0_24px_70px_rgba(26,94,229,0.22)] sm:px-9 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">Grip op je verzendkosten</p>
              <h2 className="mt-3 inter-semibold text-[1.9rem] leading-tight sm:text-[2.4rem]">Slim verzenden zonder verrassingen</h2>
              <p className="mt-4 max-w-xl text-[1rem] leading-8 text-white/80">
                Bekijk actuele toeslagen vooraf in Sendwise en houd één helder overzicht van je zendingen, vervoerders en kosten.
              </p>
              <Link
                to="/start-met-sendwise"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#1a5ee5] transition hover:bg-[#eef4ff]"
              >
                Start met Sendwise
                <FiArrowRight aria-hidden="true" />
              </Link>
            </section>
          </div>
        </div>
      </article>

      <Homepage2Footer />
    </main>
  )
}
