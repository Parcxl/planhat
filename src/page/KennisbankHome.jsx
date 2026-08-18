import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowRight,
  FiBookOpen,
  FiClock,
  FiFileText,
  FiGrid,
  FiSearch,
  FiX,
  FiZap,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"
import { CARRIER_ARTICLES } from "../content/carrierArticles"

const carrierArticles = Object.entries(CARRIER_ARTICLES).map(([to, article]) => ({
  title: article.title,
  description: article.excerpt,
  to,
  type: "Blog",
  category: article.category,
  readTime: article.readTime,
  image: article.image,
  imageAlt: article.imageAlt,
  tags: article.about.slice(0, 4),
}))

const articles = [
  {
    title: "Welke vervoerder kies je voor jouw webshop?",
    description:
      "Vergelijk vervoerders op pakketformaat, bestemming, bezorgopties en totale kosten en bepaal welke aanpak bij jouw webshop past.",
    to: "/kennisbank/welke-vervoerder-webshop",
    type: "Blog",
    category: "Keuzehulp",
    readTime: "± 7 min",
    image: "/sendwise-hero-delivery-van.jpg",
    imageAlt: "Pakket wordt geladen in een blauwe Sendwise-bezorgbus",
    tags: ["Vervoerder", "Webshop", "Verzendkosten", "Pakketdienst"],
  },
  ...carrierArticles,
  {
    title: "Uitleg over de PostNL-energietoeslag en vrachtwagenheffing",
    description:
      "Lees hoe de variabele PostNL-energietoeslag werkt, waar je het actuele bedrag vindt en waarom Sendwise de vrachtwagenheffing niet doorberekent.",
    to: "/kennisbank/postnl-energietoeslag-vrachtwagenheffing",
    type: "Nieuws",
    category: "Tarieven & toeslagen",
    readTime: "± 6 min",
    image: "/postnl-icoon.webp",
    imageAlt: "PostNL-beeldmerk bij uitleg over energietoeslagen",
    tags: ["PostNL", "Energietoeslag", "Vrachtwagenheffing", "Facturatie"],
    imageClassName: "object-contain p-12",
    imageBackground: "bg-[#fff100]",
  },
  {
    title: "De nieuwe herroepingsknop voor webshops",
    description:
      "Lees wat de verplichte herroepingsknop betekent voor webshops en hoe je het herroepingsproces automatiseert met Sendwise.",
    to: "/kennisbank/retourportaal-herroepingsrecht",
    type: "Nieuws",
    category: "Wetgeving",
    readTime: "± 5 min",
    image: "/retour-afbeelding-2.png",
    imageAlt: "Voorbeeld van het herroepingsproces in Sendwise",
    tags: ["Herroepingsknop", "Herroepingsrecht", "Webshops", "ACM"],
  },
  {
    title: "Wix verbinden met Sendwise",
    description:
      "Stap-voor-stap handleiding voor het aanmaken van een Wix API key en het koppelen van je webshop met Sendwise.",
    to: "/kennisbank/wix-verbinden",
    type: "Handleiding",
    category: "Integraties",
    readTime: "± 7 min",
    image: "/wix-step-8.png",
    imageAlt: "Wix koppelen met Sendwise",
    tags: ["Wix", "Integratie", "API key", "Access token"],
  },
  {
    title: "Goedgepickt verbinden met Sendwise",
    description:
      "Koppel Goedgepickt aan Sendwise met een API-key en stel dynamische verzendmethoden stap voor stap correct in.",
    to: "/blog/sendwise-goedgepickt",
    type: "Handleiding",
    category: "Integraties",
    readTime: "± 8 min",
    image: "/sendwise-hero-picture.avif",
    imageAlt: "Goedgepickt-integratie met Sendwise",
    tags: ["Goedgepickt", "Integratie", "API", "Verzendmethoden"],
  },
]

const filters = [
  { label: "Alles", icon: <FiGrid aria-hidden="true" /> },
  { label: "Blog", icon: <FiFileText aria-hidden="true" /> },
  { label: "Handleiding", icon: <FiBookOpen aria-hidden="true" /> },
  { label: "Nieuws", icon: <FiZap aria-hidden="true" /> },
]

const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()

const typeStyles = {
  Blog: "bg-[#e8f0ff] text-[#1a5ee5]",
  Handleiding: "bg-[#e9f8ef] text-[#16794a]",
  Nieuws: "bg-[#fff2df] text-[#a65300]",
}

export default function KennisbankHome() {
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("Alles")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredArticles = useMemo(() => {
    const needle = normalize(query.trim())

    return articles.filter((article) => {
      const matchesType = activeFilter === "Alles" || article.type === activeFilter
      if (!matchesType) return false
      if (!needle) return true

      return normalize(
        [article.title, article.description, article.type, article.category, ...article.tags].join(" "),
      ).includes(needle)
    })
  }, [activeFilter, query])

  const clearSearch = () => {
    setQuery("")
    setActiveFilter("Alles")
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fb] text-[#0d1321]">
      <Homepage2Header />

      <section className="relative overflow-hidden bg-[#07115a] px-4 pb-28 pt-32 text-white sm:px-6 sm:pt-36 lg:pb-36 lg:pt-44">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#1a5ee5]/35 blur-3xl" />
        <div className="absolute -right-20 bottom-[-8rem] h-96 w-96 rounded-full bg-[#4b8cff]/25 blur-3xl" />
        <div className="absolute left-1/2 top-[-12rem] h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#79adff]">Sendwise kennisbank</p>
              <h1 className="mt-5 inter-semibold text-[3rem] leading-[0.98] tracking-[-0.03em] sm:text-[4.3rem] lg:text-[5.35rem]">
                Alles over slimmer verzenden.
              </h1>
              <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-white/72 sm:text-[1.15rem]">
                Praktische handleidingen, vervoerdersvergelijkingen en actuele uitleg voor webshops
                die grip willen houden op hun verzendproces.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-4">
              <label htmlFor="knowledge-search" className="sr-only">Zoek in de kennisbank</label>
              <div className="relative">
                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#6f7e99]" aria-hidden="true" />
                <input
                  id="knowledge-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Zoek op vervoerder, integratie of onderwerp..."
                  className="h-16 w-full rounded-[20px] border border-transparent bg-white px-14 text-[0.98rem] font-medium text-[#0d1321] outline-none transition placeholder:text-[#8490a4] focus:border-[#79adff] focus:ring-4 focus:ring-[#79adff]/20"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Zoekopdracht wissen"
                    className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#edf2f8] text-[#56647a] transition hover:bg-[#dfe8f4]"
                  >
                    <FiX aria-hidden="true" />
                  </button>
                ) : null}
              </div>
              <div className="grid grid-cols-3 gap-2 px-2 pb-1 pt-4 text-center">
                <div>
                  <p className="inter-semibold text-xl">{articles.length}</p>
                  <p className="mt-1 text-xs text-white/55">Artikelen</p>
                </div>
                <div className="border-x border-white/12">
                  <p className="inter-semibold text-xl">3</p>
                  <p className="mt-1 text-xs text-white/55">Categorieën</p>
                </div>
                <div>
                  <p className="inter-semibold text-xl">Direct</p>
                  <p className="mt-1 text-xs text-white/55">Doorzoekbaar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-4 pb-24 sm:px-6 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 rounded-[26px] border border-[#dce5f0] bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.09)] sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0" role="group" aria-label="Filter artikelen op type">
              {filters.map(({ label, icon }) => {
                const active = activeFilter === label
                const count = label === "Alles" ? articles.length : articles.filter((article) => article.type === label).length

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActiveFilter(label)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-[#1a5ee5] text-white shadow-[0_10px_24px_rgba(26,94,229,0.22)]"
                        : "bg-[#f3f6fa] text-[#536078] hover:bg-[#e8eef6] hover:text-[#0d1321]"
                    }`}
                  >
                    {icon}
                    {label}
                    <span className={`rounded-md px-1.5 py-0.5 text-[0.68rem] ${active ? "bg-white/18 text-white" : "bg-white text-[#7b8799]"}`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            <p className="shrink-0 text-sm font-medium text-[#69768b]" aria-live="polite">
              {filteredArticles.length} {filteredArticles.length === 1 ? "resultaat" : "resultaten"}
            </p>
          </div>

          {filteredArticles.length ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link
                  key={article.to}
                  to={article.to}
                  className="group flex min-h-full flex-col overflow-hidden rounded-[26px] border border-[#dce5f0] bg-white shadow-[0_12px_34px_rgba(15,23,42,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#c8d8eb] hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)]"
                >
                  <div className={`relative aspect-[16/10] overflow-hidden ${article.imageBackground || "bg-[#eef3f8]"}`}>
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className={`h-full w-full transition duration-500 group-hover:scale-[1.035] ${article.imageClassName || "object-cover"}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${typeStyles[article.type]}`}>
                      {article.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#728096]">
                      <span>{article.category}</span>
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap normal-case tracking-normal">
                        <FiClock aria-hidden="true" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="mt-5 inter-semibold text-[1.45rem] leading-[1.16] text-[#0d1321] sm:text-[1.6rem]">
                      {article.title}
                    </h2>
                    <p className="mt-4 line-clamp-3 text-[0.96rem] leading-7 text-[#5a687e]">{article.description}</p>

                    <div className="mt-auto flex items-center justify-between border-t border-[#e4eaf1] pt-5 text-sm font-semibold text-[#1a5ee5]">
                      <span>Lees artikel</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#edf4ff] transition group-hover:translate-x-0.5 group-hover:bg-[#1a5ee5] group-hover:text-white">
                        <FiArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[28px] border border-dashed border-[#cbd8e7] bg-white px-6 py-16 text-center shadow-[0_12px_34px_rgba(15,23,42,0.04)]">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4ff] text-xl text-[#1a5ee5]">
                <FiSearch aria-hidden="true" />
              </span>
              <h2 className="mt-5 inter-semibold text-2xl text-[#0d1321]">Geen artikelen gevonden</h2>
              <p className="mx-auto mt-3 max-w-md text-[0.98rem] leading-7 text-[#667389]">
                Probeer een andere zoekterm of bekijk opnieuw alle blogs, handleidingen en nieuwsartikelen.
              </p>
              <button
                type="button"
                onClick={clearSearch}
                className="mt-6 rounded-xl bg-[#1a5ee5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#164fc2]"
              >
                Wis zoekopdracht en filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Homepage2Footer />
    </main>
  )
}
