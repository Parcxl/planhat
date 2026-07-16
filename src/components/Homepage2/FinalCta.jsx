import { Link } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"

const FinalCta = () => {
  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[24px] bg-[#1a5ee5] px-5 py-7 text-white shadow-[0_24px_70px_rgba(26,94,229,0.22)] sm:rounded-[28px] sm:px-8 sm:py-10 lg:px-14 lg:py-14">
          <div className="absolute -bottom-24 right-12 h-56 w-56 rotate-45 rounded-[42px] bg-white/12" aria-hidden="true" />
          <div className="absolute -top-28 right-72 h-44 w-44 rotate-45 rounded-[36px] bg-white/10" aria-hidden="true" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="inter-semibold text-3xl leading-tight text-white sm:text-5xl">
                Verzend slimmer zonder abonnementskosten.
              </h2>
              <p className="mt-4 max-w-2xl inter-medium text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
                Koppel je webshop, maak labels aan en profiteer direct van scherpe all-in verzendtarieven.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                to="/start-met-sendwise"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 inter-semibold text-sm text-[#1a5ee5] shadow-[0_16px_34px_rgba(7,17,90,0.16)] transition hover:bg-[#f4f8ff]"
              >
                Registreren
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
  )
}

export default FinalCta
