import { createElement, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiExternalLink,
  FiPackage,
  FiTruck,
  FiUser,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"
import { CARRIER_ARTICLES } from "../content/carrierArticles"

const contents = [
  ["over-de-vervoerder", "Past deze vervoerder bij je webshop?"],
  ["sterke-punten", "Sterke punten"],
  ["praktisch", "Praktisch voor je webshop"],
  ["aandachtspunten", "Aandachtspunten"],
  ["sendwise", "Hoe helpt Sendwise?"],
  ["veelgestelde-vragen", "Veelgestelde vragen"],
  ["bronnen", "Bronnen"],
]

const MetaItem = ({ icon, children }) => (
  <div className="flex items-center gap-2 text-sm text-[#5e6a80] sm:text-base">
    {createElement(icon, { size: 16, "aria-hidden": true })}
    <span>{children}</span>
  </div>
)

const ArticleHeading = ({ id, eyebrow, children }) => (
  <div className="scroll-mt-36" id={id}>
    {eyebrow ? (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#1a5ee5]">{eyebrow}</p>
    ) : null}
    <h2 className="inter-semibold text-[1.85rem] leading-[1.14] text-[#0d1321] sm:text-[2.35rem]">
      {children}
    </h2>
  </div>
)

export default function KennisbankVervoerderDetail() {
  const { pathname } = useLocation()
  const article = CARRIER_ARTICLES[pathname]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (!article) return null

  const handleContentsClick = (event, id) => {
    event.preventDefault()
    const section = document.getElementById(id)
    if (!section) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    section.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" })
    window.history.replaceState(null, "", `#${id}`)
  }

  const relatedArticles = Object.entries(CARRIER_ARTICLES).filter(([path]) => path !== pathname)

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

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1a5ee5]">
                <FiTruck aria-hidden="true" />
                {article.category}
              </p>
              <h1 className="mt-5 inter-semibold text-[2.65rem] leading-[1.04] tracking-[-0.025em] text-[#0d1321] sm:text-[3.9rem] lg:text-[4.8rem]">
                {article.title}
              </h1>
              <p className="mt-7 max-w-4xl text-[1.08rem] leading-8 text-[#526078] sm:text-[1.18rem]">
                {article.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dce3ec] pt-6">
                <MetaItem icon={FiUser}>Sendwise Team</MetaItem>
                <MetaItem icon={FiCalendar}>18 augustus 2026</MetaItem>
                <MetaItem icon={FiClock}>{article.readTime} lezen</MetaItem>
              </div>
            </div>

            <div className={`relative overflow-hidden rounded-[30px] border border-[#dce7f4] shadow-[0_28px_75px_rgba(15,23,42,0.13)] ${article.imageBackground}`}>
              <img
                src={article.image}
                alt={article.imageAlt}
                width="1200"
                height="900"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className={`aspect-[4/3] h-full w-full ${article.imageClassName}`}
              />
            </div>
          </div>
        </div>
      </header>

      <article className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[260px,minmax(0,760px)] lg:justify-center lg:gap-16">
          <aside className="self-start lg:sticky lg:top-36">
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
            <section className="rounded-[26px] border border-[#cfe0fb] bg-[#f3f8ff] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1a5ee5]">Kort antwoord</p>
              <p className="mt-3 text-[1.08rem] leading-8 text-[#334155] sm:text-[1.14rem]">{article.quickAnswer}</p>
            </section>

            <section className="mt-14">
              <ArticleHeading id="over-de-vervoerder" eyebrow={article.carrier}>
                Past {article.carrier} bij jouw webshop?
              </ArticleHeading>
              <div className="mt-5 space-y-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                {article.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <p className="mt-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                Wil je eerst alle criteria naast elkaar zetten? Lees dan de algemene keuzehulp{" "}
                <Link
                  to="/kennisbank/welke-vervoerder-webshop"
                  className="font-semibold text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4"
                >
                  welke vervoerder kies je voor jouw webshop?
                </Link>
              </p>
            </section>

            <section className="mt-14">
              <ArticleHeading id="sterke-punten" eyebrow="Waar de vervoerder in uitblinkt">
                Sterke punten van {article.carrier}
              </ArticleHeading>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {article.strengths.map((strength) => (
                  <div key={strength.title} className="rounded-[22px] border border-[#dce7f4] bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                    <p className="font-semibold text-[#0d1321]">{strength.title}</p>
                    <p className="mt-2 text-[0.96rem] leading-7 text-[#526078]">{strength.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <ArticleHeading id="praktisch" eyebrow="Van label tot bezorging">
                {article.practicalTitle}
              </ArticleHeading>
              <div className="mt-5 space-y-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                {article.practical.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>

            <section className="mt-14 rounded-[28px] border border-[#dce7f4] bg-[#f7fbff] p-6 sm:p-8">
              <ArticleHeading id="aandachtspunten" eyebrow="Voor je beslist">
                Aandachtspunten voor jouw vergelijking
              </ArticleHeading>
              <ul className="mt-6 space-y-3">
                {article.considerations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[1rem] leading-7 text-[#334155]">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f0ff] text-[#1a5ee5]">
                      <FiCheck size={14} aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <ArticleHeading id="sendwise" eyebrow="Eén verzendplatform">
                Hoe helpt Sendwise met {article.carrier}?
              </ArticleHeading>
              <p className="mt-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">{article.sendwise}</p>
              <p className="mt-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                Bekijk ook onze{" "}
                <Link to="/prijzen" className="font-semibold text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4">
                  verzendtarieven
                </Link>,{" "}
                <Link to="/integraties" className="font-semibold text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4">
                  webshopintegraties
                </Link>{" "}
                en de mogelijkheden van{" "}
                <Link to="/oplossingen/connect" className="font-semibold text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4">
                  Sendwise CONNECT
                </Link>.
              </p>
            </section>

            <section className="mt-14" id="veelgestelde-vragen">
              <ArticleHeading eyebrow="Snel antwoord">Veelgestelde vragen over {article.carrier}</ArticleHeading>
              <div className="mt-7 divide-y divide-[#dce7f4] border-y border-[#dce7f4]">
                {article.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-8 font-semibold text-[#0d1321] marker:hidden">
                      {faq.question}
                    </summary>
                    <p className="mt-3 max-w-3xl text-[0.98rem] leading-7 text-[#526078]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-14" id="bronnen">
              <ArticleHeading eyebrow="Gecontroleerd op 18 augustus 2026">Bronnen en actuele voorwaarden</ArticleHeading>
              <p className="mt-5 text-[0.98rem] leading-7 text-[#526078]">
                Voorwaarden, tarieven en netwerken kunnen veranderen. Controleer vóór je definitieve
                keuze altijd de actuele informatie van de vervoerder.
              </p>
              <ul className="mt-5 space-y-3">
                {article.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-start gap-2 text-[0.96rem] font-semibold leading-6 text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4"
                    >
                      {source.label} <FiExternalLink className="mt-1 shrink-0" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <h2 className="inter-semibold text-[1.65rem] text-[#0d1321]">Vergelijk andere vervoerders</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {relatedArticles.map(([path, related]) => (
                  <Link
                    key={path}
                    to={path}
                    className="group rounded-[22px] border border-[#dce7f4] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1a5ee5]">{related.carrier}</p>
                    <p className="mt-2 font-semibold leading-6 text-[#0d1321]">{related.title}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1a5ee5]">
                      Lees artikel <FiArrowRight className="transition group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-14 rounded-[28px] bg-[#0d1b3d] p-7 text-white sm:p-9">
              <div className="flex items-center gap-3 text-[#8db4ff]">
                <FiPackage aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">Persoonlijk advies</p>
              </div>
              <h2 className="mt-4 inter-semibold text-[1.9rem] leading-tight sm:text-[2.4rem]">
                Is {article.carrier} geschikt voor jouw webshop?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/75">
                Laat je verzendprofiel door ons bekijken. We vergelijken je formaten, bestemmingen,
                volumes en bezorgwensen en geven een praktisch advies.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0d1b3d] transition hover:bg-[#eef4ff]"
              >
                Neem contact op <FiArrowRight aria-hidden="true" />
              </Link>
            </section>
          </div>
        </div>
      </article>

      <Homepage2Footer />
    </main>
  )
}
