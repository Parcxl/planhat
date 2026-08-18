import { Link } from "react-router-dom"
import { FiArrowLeft, FiHome } from "react-icons/fi"

const NotFound = () => (
  <main className="flex min-h-screen items-center bg-white px-4 py-24 text-[#0d1321] sm:px-6">
    <section className="mx-auto w-full max-w-3xl rounded-[28px] border border-slate-200 bg-[#f8fbff] px-6 py-14 text-center shadow-[0_24px_70px_rgba(7,17,31,0.08)] sm:px-12 sm:py-20">
      <p className="inter-semibold text-sm uppercase tracking-[0.18em] text-[#1a5ee5]">Fout 404</p>
      <h1 className="mt-4 inter-semibold text-[2.7rem] leading-[1.02] text-[#07115a] sm:text-6xl">
        Deze pagina bestaat niet
      </h1>
      <p className="mx-auto mt-6 max-w-xl inter-medium text-base leading-7 text-slate-600 sm:text-lg">
        De link is mogelijk verouderd of de pagina is verplaatst. Ga terug naar de homepage of bekijk onze kennisbank.
      </p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#1a5ee5] px-6 inter-semibold text-white transition hover:bg-[#164fc2]"
        >
          <FiHome aria-hidden="true" />
          Naar de homepage
        </Link>
        <Link
          to="/kennisbank"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] border border-slate-300 bg-white px-6 inter-semibold text-[#07115a] transition hover:border-blue-300 hover:bg-blue-50"
        >
          <FiArrowLeft aria-hidden="true" />
          Bekijk de kennisbank
        </Link>
      </div>
    </section>
  </main>
)

export default NotFound
