import { createElement } from "react"
import { FiArrowRight, FiCheck, FiCpu, FiLink, FiTrendingDown } from "react-icons/fi"

const cards = [
  {
    title: "Lagere verzendkosten",
    text: "Verzend met scherpe all-in tarieven, zonder abonnementskosten of losse labelbijdrages.",
    meta: "All-in tarieven",
    icon: FiTrendingDown,
  },
  {
    title: "Alles direct gekoppeld",
    text: "Orders uit je webshop staan automatisch klaar, inclusief verzendmethode en klantgegevens.",
    meta: "WooCommerce, Shopify en meer",
    icon: FiLink,
  },
  {
    title: "Minder handwerk",
    text: "Maak labels aan, verwerk tracking en houd je verzendingen bij vanuit één rustig dashboard.",
    meta: "Labels en tracking automatisch",
    icon: FiCpu,
  },
]

const customerLogos = [
  { name: "Boxxl", src: "/boxxl.png" },
  { name: "Solza", src: "/solza-logo.png" },
  { name: "Ferrachi", src: "/ferrachi.png" },
  { name: "Strong Desire", src: "/strong-desire.png" },
  { name: "Devision", src: "/devision.png" },
]

const mobileCustomerLogos = [...customerLogos, ...customerLogos]

const WhyChooseSendwise = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-8 lg:pt-12">
      <style>{`
        @keyframes homepage2MobileLogos {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="absolute inset-x-0 bottom-0 top-[600px] z-0 sm:top-[56%] lg:top-[330px]"
        style={{ backgroundColor: "#1a5ee5" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <h2 className="mx-auto max-w-5xl text-center inter-semibold text-4xl leading-tight text-indigo-950 sm:text-5xl lg:text-6xl">
          Alles om slimmer te verzenden
        </h2>

        <div className="mt-9 grid gap-5 sm:mt-12 lg:grid-cols-3 lg:gap-6">
          {cards.map(({ title, text, meta, icon: Icon }) => (
            <article
              key={title}
              className="group flex min-h-[250px] flex-col rounded-2xl border border-[#e4ecf8] bg-white p-5 shadow-[0_18px_55px_rgba(7,17,31,0.07)] sm:p-7 lg:min-h-[300px]"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#1a5ee5] ring-1 ring-[#dce9ff] sm:h-20 sm:w-20">
                  {createElement(Icon, { className: "h-8 w-8 sm:h-10 sm:w-10", "aria-hidden": true })}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4f8ff] text-[#1a5ee5] ring-1 ring-[#e0ebfb]">
                  <FiCheck className="h-4 w-4 stroke-[3]" aria-hidden="true" />
                </span>
              </div>

              <h3 className="mt-4 inter-semibold text-[1.35rem] leading-tight text-[#07115a] sm:text-2xl">{title}</h3>
              <p className="mt-3 inter-medium text-[0.95rem] leading-7 text-[#667085] sm:text-base">{text}</p>

              <div className="mt-auto flex items-center justify-between gap-4 pt-6 sm:pt-8">
                <span className="rounded-full bg-[#f7faff] px-3 py-2 inter-medium text-xs text-[#526076] ring-1 ring-[#e1eaf7] sm:px-3.5 sm:text-sm">
                  {meta}
                </span>
                <a
                  href="/start-met-sendwise"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1a5ee5] text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-[#164fc2]"
                  aria-label={`${title} bekijken`}
                >
                  <FiArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative z-10 px-4 pb-12 pt-14 sm:px-6 sm:pt-20 lg:pb-16">
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="inter-semibold text-lg text-white">Vertrouwd door webshops en fulfilmentteams</p>

          <div className="relative -mx-4 mt-8 overflow-hidden sm:hidden">
            <div className="flex w-max items-center gap-10 pr-10" style={{ animation: "homepage2MobileLogos 22s linear infinite" }}>
              {mobileCustomerLogos.map(({ name, src }, index) => (
                <img
                  key={`${name}-${index}`}
                  src={src}
                  alt={name}
                  className="h-14 max-w-32 shrink-0 object-contain opacity-90 brightness-0 invert"
                />
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 hidden w-full max-w-6xl items-center justify-center gap-x-8 gap-y-7 sm:flex sm:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-12">
            {customerLogos.map(({ name, src }) => (
              <img
                key={name}
                src={src}
                alt={name}
                className="h-14 max-w-32 shrink object-contain opacity-90 brightness-0 invert transition hover:opacity-100 sm:h-20 sm:max-w-44 lg:h-24 lg:max-w-60"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSendwise
