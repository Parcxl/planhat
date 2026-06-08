import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FiArrowRight, FiCheck } from "react-icons/fi"

const trustPoints = [
  "All-in verzendtarieven",
  "Geen abonnementskosten",
  "Binnen enkele minuten gestart",
]

const customerLogos = [
  { name: "Boxxl", src: "/boxxl.png" },
  { name: "Solza", src: "/solza-logo.png" },
  { name: "Ferrachi", src: "/ferrachi.png" },
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-44">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-4 pb-12 sm:px-6 sm:pb-16 lg:min-h-[690px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pb-24">
        <div className="relative z-10 max-w-[690px] lg:pb-10">
          <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
            <div className="flex -space-x-2">
              {customerLogos.map(({ name, src }) => (
                <span key={name} className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_4px_12px_rgba(15,23,42,0.10)]">
                  <img src={src} alt={name} className="max-h-5 max-w-[26px] object-contain" />
                </span>
              ))}
            </div>
            <p className="inter-medium text-sm leading-snug text-[#707894] sm:text-[0.95rem]">Meer dan 650 webshops gingen je voor</p>
          </div>

          <h1 className="inter-semibold text-[2.75rem] leading-[1.02] text-indigo-950 sm:text-6xl sm:leading-[1.02] lg:text-7xl">
            <span className="block sm:whitespace-nowrap">Verzend slimmer.</span>
            <span className="block sm:whitespace-nowrap">Betaal minder.</span>
          </h1>

          <div className="mt-8 flex flex-col gap-3 sm:mt-11 sm:flex-row">
            <Link to="/start-met-sendwise" className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-[12px] bg-[#1a5ee5] px-6 inter-medium text-base text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2] sm:w-auto">
              Gratis aanmelden
              <FiArrowRight className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link to="/prijzen" className="group inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-[12px] border-2 border-[#d5dbe8] bg-white px-6 inter-medium text-base text-indigo-950 transition hover:border-[#b9c4d8] hover:bg-[#f8fafc] sm:w-auto">
              <span className="-ml-1 mr-0 inline-flex w-0 -translate-x-2 justify-center text-lg leading-none text-[#1a5ee5] opacity-0 transition-[width,margin,opacity,transform] duration-200 ease-out group-hover:mr-1.5 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true">
                €
              </span>
              Bekijk tarieven
            </Link>
          </div>

          <ul className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-4">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 inter-medium text-[0.95rem] text-[#07115a] sm:text-base">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f0ff] text-[#1a5ee5]">
                  <FiCheck className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center justify-center lg:min-h-[570px] lg:justify-end">
          <div className="relative w-full max-w-[600px] overflow-hidden rounded-[24px] shadow-[0_24px_65px_rgba(7,17,31,0.20)] sm:rounded-[30px] lg:rounded-[34px] lg:shadow-[0_34px_95px_rgba(7,17,31,0.24)]">
            <img
              src="/sendwise-hero-delivery-van.jpg"
              alt="Pakket wordt in een blauwe bezorgbus geladen"
              width="960"
              height="960"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="aspect-[1.12/1] w-full object-cover object-center"
            />
            <motion.div
              className="absolute -right-20 -top-20 hidden h-44 w-44 rounded-full bg-[#eef2f6] sm:block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
