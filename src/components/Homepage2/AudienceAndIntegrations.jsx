import { Link } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"

const audienceRows = [
  {
    title: "Voor webshops",
    text: "Koppel je webshop, verwerk orders automatisch en verzend goedkoper zonder contracten of abonnementskosten.",
    cta: "Bekijk webshops",
    to: "/voor-webshops",
    image: "/homepage2-webshop.png",
    imageAlt: "Webshop pakketten inpakken met Sendwise",
    textSide: "left",
  },
  {
    title: "Voor fulfilmentcenters",
    text: "Verzend op schaal voor meerdere klanten met grip op tarieven, carriers en operationele workflows.",
    cta: "Bekijk fulfilmentcenters",
    to: "/voor-fulfilmentcenters",
    image: "/homepage2-fulfilment.png",
    imageAlt: "Fulfilmentcenter pakketten verwerken met Sendwise",
    textSide: "right",
  },
]

const integrations = [
  { name: "WooCommerce", src: "/woocommerce-logo.png" },
  { name: "Wix", src: "/wix.png" },
  { name: "Shopify", src: "/shopify-logo.png" },
  { name: "Sendwise API", src: "/sendwise-api.png" },
  { name: "PrestaShop", src: "/prestashop.png" },
  { name: "Orders", src: "/orders.png" },
  { name: "Mijnwebwinkel", src: "/mijnwebwinkel.png" },
  { name: "Magento", src: "/magento.jpg" },
  { name: "Lyra", src: "/lyra.png" },
  { name: "Goedgepickt", src: "/goedgepickt-sendwise-logo.png" },
  { name: "Ecwid", src: "/ecwid-parcxl.png" },
  { name: "CCV", src: "/ccv-icon.svg" },
  { name: "Lightspeed", src: "/lightspeed.png" },
  { name: "Bol.com", src: "/bol-logo.png" },
]

const IntegrationLogo = ({ name, src }) => (
  <div className="flex h-28 w-40 shrink-0 items-center justify-center">
    <img src={src} alt={`${name} integratie`} className="max-h-24 max-w-[190px] object-contain" />
  </div>
)

const AudienceFeatureRow = ({ title, text, cta, to, image, imageAlt, textSide }) => {
  const textCard = (
    <Link
      to={to}
      className="group flex h-[250px] flex-col rounded-[24px] bg-[#1a5ee5] p-8 text-white shadow-[0_22px_60px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]"
    >
      <div>
        <h3 className="inter-semibold text-3xl leading-tight">{title}</h3>
        <p className="mt-4 inter-medium text-lg leading-8 text-white/90">{text}</p>
      </div>
      <span className={`${textSide === "left" ? "mt-4" : "mt-7"} inline-flex items-center gap-3 inter-semibold text-base text-white`}>
        {cta}
        <FiArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  )

  const imageCard = (
    <div className="h-[250px] overflow-hidden rounded-[24px] shadow-[0_22px_60px_rgba(7,17,31,0.09)]">
      <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
    </div>
  )

  return (
    <div className={`grid gap-7 ${textSide === "left" ? "lg:grid-cols-[0.42fr_0.58fr]" : "lg:grid-cols-[0.58fr_0.42fr]"}`}>
      {textSide === "left" ? (
        <>
          {textCard}
          {imageCard}
        </>
      ) : (
        <>
          <div className="lg:order-1">{imageCard}</div>
          <div className="lg:order-2">{textCard}</div>
        </>
      )}
    </div>
  )
}

const AudienceAndIntegrations = () => {
  return (
    <>
      <section className="bg-white px-6 pb-14 pt-14 lg:pb-20 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-7">
          {audienceRows.map((row) => (
            <AudienceFeatureRow key={row.title} {...row} />
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#f7fbff] px-6 py-16 lg:py-20">
        <style>{`
          @keyframes homepage2Integrations {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="inter-semibold text-5xl leading-tight text-[#07115a] sm:text-6xl">
                Koppel je webshop en start direct met verzenden
              </h2>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/start-met-sendwise"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a5ee5] px-5 py-3 inter-semibold text-sm text-white shadow-[0_14px_30px_rgba(26,94,229,0.25)] transition hover:bg-[#164fc2]"
                >
                  Registreren
                  <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/integraties"
                  className="inline-flex items-center justify-center rounded-xl border border-[#d4dceb] bg-white px-5 py-3 inter-semibold text-sm text-[#07115a] shadow-[0_10px_24px_rgba(7,17,31,0.04)] transition hover:border-[#b8c4d8] hover:bg-[#f8fbff]"
                >
                  Bekijk alle integraties
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden py-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f7fbff] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f7fbff] to-transparent" />

              <div className="flex w-max gap-0" style={{ animation: "homepage2Integrations 34s linear infinite" }}>
                {[...integrations, ...integrations].map((integration, index) => (
                  <IntegrationLogo key={`${integration.name}-${index}`} {...integration} />
                ))}
              </div>

              <div className="mt-2 flex w-max gap-0" style={{ animation: "homepage2Integrations 38s linear infinite reverse" }}>
                {[...integrations.slice(6), ...integrations.slice(0, 6), ...integrations.slice(6), ...integrations.slice(0, 6)].map((integration, index) => (
                  <IntegrationLogo key={`${integration.name}-reverse-${index}`} {...integration} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AudienceAndIntegrations
