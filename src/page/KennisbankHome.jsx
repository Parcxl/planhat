import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { FiArrowRight, FiClock, FiSearch } from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"

const articles = [
  {
    title: "De nieuwe herroepingsknop voor webshops",
    description:
      "Lees wat de verplichte herroepingsknop betekent voor webshops en hoe je het herroepingsproces automatiseert met Sendwise.",
    to: "/kennisbank/retourportaal-herroepingsrecht",
    category: "Herroepingsrecht",
    readTime: "± 5 min",
    image: "/retour-afbeelding-2.png",
    tags: ["Herroepingsknop", "Herroepingsrecht", "Webshops", "ACM"],
  },
  {
    title: "Wix verbinden met Sendwise",
    description:
      "Stap-voor-stap handleiding voor het aanmaken van een Wix API key en het invullen van access token, account ID en site ID in Sendwise.",
    to: "/kennisbank/wix-verbinden",
    category: "Integraties",
    readTime: "± 7 min",
    image: "/wix-step-8.png",
    tags: ["Wix", "Integratie", "API key", "Access token"],
  },
]

export default function KennisbankHome() {
  const [query, setQuery] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredArticles = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return articles

    return articles.filter((article) =>
      [article.title, article.description, article.category, ...article.tags]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    )
  }, [query])

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0d1321]">
      <Homepage2Header />

      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:pb-20 lg:pt-44">
        <div className="absolute left-0 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#eaf2ff] blur-3xl" />
        <div className="absolute right-[-8rem] top-20 h-[24rem] w-[24rem] rounded-full bg-[#f1f7ff] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="inter-semibold text-[3rem] leading-[0.98] tracking-[0px] text-[#0d1321] sm:text-[4.2rem] lg:text-[5.2rem]">
              Kennisbank
            </h1>

            <div className="mx-auto mt-10 w-full max-w-3xl rounded-[28px] border border-[#dfeaf7] bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
              <div className="relative">
                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8b96aa]" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Zoek op integratie, platform of onderwerp..."
                  className="h-14 w-full rounded-2xl border border-transparent bg-[#f7fbff] px-5 pl-12 text-[1rem] font-medium text-[#0d1321] outline-none transition-all duration-300 placeholder:text-[#8b96aa] focus:border-[#1a5ee5]/30 focus:bg-white focus:ring-4 focus:ring-[#1a5ee5]/10"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.title}
                to={article.to}
                className="group grid gap-6 rounded-[32px] border border-[#dce7f4] bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] lg:grid-cols-[0.92fr,1.08fr] lg:p-6"
              >
                <div className="overflow-hidden rounded-[24px] border border-[#e3edf8] bg-[#f7fbff]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-col justify-between gap-6 py-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="rounded-full bg-[#f2f7ff] px-3 py-1.5 font-semibold text-[#1a5ee5]">
                        {article.category}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[#5e6a80]">
                        <FiClock size={14} />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="mt-5 inter-semibold text-[1.8rem] leading-tight text-[#0d1321] sm:text-[2.2rem]">
                      {article.title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[#526078]">{article.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#dce7f4] bg-white px-3 py-1.5 text-xs font-semibold text-[#5e6a80]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a5ee5]">
                    Lees handleiding
                    <FiArrowRight className="transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}

            {filteredArticles.length === 0 ? (
              <div className="rounded-[28px] border border-[#dce7f4] bg-white p-10 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <p className="text-lg font-semibold text-[#0d1321]">Geen artikelen gevonden</p>
                <p className="mt-3 text-[0.98rem] text-[#5e6a80]">
                  Probeer een andere zoekterm, bijvoorbeeld retouren, Wix of integratie.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <Homepage2Footer />
    </main>
  )
}
