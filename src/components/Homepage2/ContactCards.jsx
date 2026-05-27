import { createElement } from "react"
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi"

const contactCards = [
  {
    eyebrow: "E-mail",
    title: "Stuur ons een bericht",
    value: "info@sendwise.nl",
    note: "Voor vragen over tarieven, integraties of je verzendproces.",
    action: "Mail Sendwise",
    href: "mailto:info@sendwise.nl",
    icon: FiMail,
  },
  {
    eyebrow: "Telefoon",
    title: "Bel direct met ons team",
    value: "+31 6 19156123",
    note: "Maandag tot vrijdag bereikbaar voor advies en support.",
    action: "Bel ons",
    href: "tel:+31619156123",
    icon: FiPhone,
  },
  {
    eyebrow: "Adres",
    title: "Kom langs in Alphen",
    value: "Ondernemingsweg 66\n2404HN Alphen aan den Rijn",
    note: "Ons kantoor voor afspraken, demo's en samenwerking.",
    action: "Bekijk locatie",
    href: "https://www.google.com/maps/search/?api=1&query=Ondernemingsweg%2066%202404HN%20Alphen%20aan%20den%20Rijn",
    icon: FiMapPin,
  },
]

const ContactCards = ({ className = "" }) => {
  return (
    <section className={`bg-white px-6 pb-16 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl">
              Neem contact op
            </h2>
            <p className="mt-3 max-w-2xl inter-medium text-lg leading-8 text-[#667085]">
              We denken graag mee over je webshop, fulfilmentproces of verzendtarieven.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {contactCards.map(({ eyebrow, title, value, note, action, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              className="group flex min-h-[290px] rounded-[24px] border border-[#e1eaf7] bg-[#fbfdff] p-7 shadow-[0_18px_55px_rgba(7,17,31,0.065)] transition duration-300 hover:border-[#bfd4f8] hover:bg-white hover:shadow-[0_26px_75px_rgba(7,17,31,0.10)]"
              target={eyebrow === "Adres" ? "_blank" : undefined}
              rel={eyebrow === "Adres" ? "noreferrer" : undefined}
            >
              <div className="flex w-full flex-col">
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#1a5ee5] shadow-[0_12px_30px_rgba(26,94,229,0.10)] ring-1 ring-[#dce9ff] transition group-hover:bg-[#eef5ff]">
                    {createElement(Icon, { className: "h-8 w-8", "aria-hidden": true })}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1.5 inter-semibold text-xs uppercase tracking-[0.08em] text-[#536175] ring-1 ring-[#e1eaf7]">
                    {eyebrow}
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="inter-semibold text-2xl leading-tight text-[#07115a]">{title}</h3>
                  <p className="mt-3 inter-medium text-base leading-7 text-[#667085]">{note}</p>
                </div>

                <p className="mt-6 whitespace-pre-line inter-semibold text-xl leading-snug text-[#07115a]">
                  {value}
                </p>

                <div className="mt-auto flex items-center gap-2 pt-7 inter-semibold text-sm text-[#1a5ee5]">
                  <span>{action}</span>
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactCards
