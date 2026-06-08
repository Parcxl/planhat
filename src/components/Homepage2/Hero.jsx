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
    <section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-44">
      <div className="mx-auto grid min-h-[690px] w-full max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24">
        <div className="relative z-10 max-w-[690px] lg:pb-10">
          <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
            <div className="flex -space-x-2">
              {customerLogos.map(({ name, src }) => (
                <span key={name} className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_4px_12px_rgba(15,23,42,0.10)]">
                  <img src={src} alt={name} className="max-h-5 max-w-[26px] object-contain" />
                </span>
              ))}
            </div>
            <p className="inter-medium text-sm text-[#707894] sm:text-[0.95rem]">Meer dan 650 webshops gingen je voor</p>
          </div>

          <h1 className="inter-semibold text-5xl leading-[1.03] text-indigo-950 sm:text-6xl sm:leading-[1.02] lg:text-7xl">
            <span className="block sm:whitespace-nowrap">Verzend slimmer.</span>
            <span className="block sm:whitespace-nowrap">Betaal minder.</span>
          </h1>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <Link to="/start-met-sendwise" className="group inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#1a5ee5] px-6 inter-medium text-base text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]">
              Gratis aanmelden
              <FiArrowRight className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link to="/prijzen" className="group inline-flex h-12 items-center justify-center overflow-hidden rounded-[12px] border-2 border-[#d5dbe8] bg-white px-6 inter-medium text-base text-indigo-950 transition hover:border-[#b9c4d8] hover:bg-[#f8fafc]">
              <span className="-ml-1 mr-0 inline-flex w-0 -translate-x-2 justify-center text-lg leading-none text-[#1a5ee5] opacity-0 transition-[width,margin,opacity,transform] duration-200 ease-out group-hover:mr-1.5 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true">
                €
              </span>
              Bekijk tarieven
            </Link>
          </div>

          <ul className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-4">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 inter-medium text-base text-[#07115a]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f0ff] text-[#1a5ee5]">
                  <FiCheck className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex min-h-[570px] items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[600px] overflow-hidden rounded-[34px] shadow-[0_34px_95px_rgba(7,17,31,0.24)]">
            <img
              src="/sendwise-hero-delivery-van.png"
              alt="Pakket wordt in een blauwe bezorgbus geladen"
              className="aspect-[1.12/1] w-full object-cover object-center"
            />
            <motion.div
              className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#eef2f6]"
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
