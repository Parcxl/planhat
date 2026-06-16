import { Link } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"

const algemeneVoorwaardenPdf = "/sendwise-algemene-voorwaarden:15-03-2026.pdf"

const footerColumns = [
  {
    title: "Producten",
    links: [
      { label: "Sendwise", to: "/oplossingen/sendwise" },
      { label: "PRO", to: "/oplossingen/pro" },
      { label: "CONNECT", to: "/oplossingen/connect" },
    ],
  },
  {
    title: "Toepassingen",
    links: [
      { label: "Voor webshops", to: "/voor-webshops" },
      { label: "Voor fulfilmentcenters", to: "/voor-fulfilmentcenters" },
    ],
  },
  {
    title: "Integraties",
    links: [
      { label: "WooCommerce", to: "/integraties/woocommerce" },
      { label: "Shopify" },
      { label: "CCV Shop", to: "/integraties/ccv-shop" },
      { label: "Lightspeed" },
      { label: "Magento" },
      { label: "Mijnwebwinkel" },
      { label: "Ecwid" },
      { label: "Wix", to: "/kennisbank/wix-verbinden" },
      { label: "PrestaShop" },
      { label: "Bol.com" },
      { label: "Lyra" },
      { label: "GoedGepickt", to: "/blog/sendwise-goedgepickt" },
    ],
    wide: true,
  },
]

const FooterLink = ({ link }) => {
  const className = "inter-medium text-sm text-white/72 transition hover:text-white"

  if (link.to) {
    return (
      <Link to={link.to} className={className}>
        {link.label}
      </Link>
    )
  }

  return <span className={className}>{link.label}</span>
}

const Homepage2Footer = () => {
  return (
    <footer className="bg-[#07115a] px-4 pb-8 pt-12 text-white sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="p-0">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_2fr]">
            <div>
              <Link to="/" className="inline-flex">
                <img src="/sendwise-tekst.png" alt="Sendwise" className="h-8 w-auto brightness-0 invert" />
              </Link>

              <p className="mt-5 max-w-sm inter-medium text-[0.95rem] leading-7 text-white/72 sm:text-base">
                Het verzendplatform voor webshops en fulfilmentcenters die slimmer willen verzenden zonder vaste kosten.
              </p>

              <Link
                to="/start-met-sendwise"
                className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1a5ee5] px-5 inter-semibold text-sm text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]"
              >
                Registreren
                <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[0.7fr_0.8fr_1.6fr]">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="inter-semibold text-xs uppercase tracking-[0.12em] text-[#62a6ff]">
                    {column.title}
                  </h3>
                  <div className={`mt-5 grid gap-3 ${column.wide ? "grid-cols-2 gap-x-5 sm:gap-x-8" : ""}`}>
                    {column.links.map((link) => (
                      <FooterLink key={link.label} link={link} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/12 pt-6 inter-medium text-sm text-white/62 lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 Sendwise</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a href={algemeneVoorwaardenPdf} target="_blank" rel="noreferrer" className="transition hover:text-white">
                Algemene voorwaarden
              </a>
              <Link to="/verwerkersovereenkomst" className="transition hover:text-white">
                Verwerkersovereenkomst
              </Link>
              <Link to="/privacy" className="transition hover:text-white">
                Privacy voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Homepage2Footer
