import { createElement, useEffect } from "react"
import { FiArrowRight, FiMail, FiPhone } from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"

const pixelId = "1522034239328606"

const customerLogos = [
  { name: "Boxxl", src: "/boxxl.png" },
  { name: "Solza", src: "/solza-logo.png" },
  { name: "Ferrachi", src: "/ferrachi.png" },
]

const contactOptions = [
  {
    label: "Mail ons",
    value: "info@sendwise.nl",
    href: "mailto:info@sendwise.nl",
    icon: FiMail,
  },
  {
    label: "Bel ons",
    value: "+31 6 19156123",
    href: "tel:+31619156123",
    icon: FiPhone,
  },
]

const FacebookAdsThanks = () => {
  useEffect(() => {
    if (!window.fbq) {
      ;(function (f, b, e, v, n, t, s) {
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = true
        n.version = "2.0"
        n.queue = []
        t = b.createElement(e)
        t.async = true
        t.src = v
        t.id = "sendwise-meta-pixel"
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
    }

    window.fbq("init", pixelId)
    window.fbq("track", "PageView")
  }, [])

  return (
    <main className="min-h-screen bg-white text-[#0d1321]">
      <Homepage2Header />

      <section className="relative overflow-hidden bg-[#1a5ee5] pt-24 sm:pt-28 lg:pt-40">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:min-h-[620px] lg:grid-cols-[1fr_0.88fr] lg:gap-16 lg:pb-24">
          <div className="relative z-10 max-w-[690px]">
            <div className="mb-5 flex items-center gap-3 text-white">
              <div className="flex -space-x-2">
                {customerLogos.map(({ name, src }) => (
                  <span key={name} className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_4px_12px_rgba(15,23,42,0.10)]">
                    <img src={src} alt={name} className="max-h-5 max-w-[26px] object-contain" />
                  </span>
                ))}
              </div>
              <p className="inter-medium text-sm leading-snug text-white sm:text-[0.95rem]">
                Meer dan 650 webshops gingen je voor
              </p>
            </div>

            <h1 className="inter-semibold text-[3rem] leading-[1.02] text-white min-[390px]:text-[3.45rem] sm:text-7xl sm:leading-[0.98] lg:text-8xl">
              Bedankt.
            </h1>

            <p className="mt-5 max-w-[560px] text-base leading-7 text-[#dbe7ff] sm:mt-6 sm:text-[1.1rem] sm:leading-[1.75]">
              Je aanvraag is goed ontvangen. We nemen snel contact met je op om je Sendwise account klaar te zetten.
            </p>
          </div>

          <div className="relative z-10 lg:pt-8">
            <div
              className="pointer-events-none absolute left-[-18px] top-[-62px] hidden h-[72px] w-[138px] text-white lg:block"
              aria-hidden="true"
            >
              <svg
                width="138"
                height="72"
                viewBox="0 0 138 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1 top-0 overflow-visible"
              >
                <path
                  d="M16 8C17 29 32 43 55 41C78 39 98 42 113 58"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M101 58L115 60L110 47"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="relative rounded-[22px] border border-white/18 bg-[#f8fbff] p-5 shadow-[0_24px_65px_rgba(7,17,90,0.24)] sm:rounded-[30px] sm:p-7 lg:rounded-[34px] lg:p-8 lg:shadow-[0_34px_95px_rgba(7,17,90,0.28)]">
              <h2 className="inter-semibold text-[1.45rem] leading-tight text-[#07115a] sm:text-[1.65rem]">
                Contactgegevens
              </h2>
              <p className="mt-2 max-w-md inter-medium text-sm leading-6 text-[#5a667c]">
                Heb je in de tussentijd een vraag? Je kunt ons direct bereiken.
              </p>

              <div className="mt-6 grid gap-3">
                {contactOptions.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={value}
                    href={href}
                    className="group flex items-center justify-between gap-4 rounded-[16px] border border-[#dfe8f6] bg-white px-4 py-4 transition hover:border-[#bfd4f8] hover:bg-[#fbfdff]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#e7f0ff] text-[#1a5ee5]">
                        {createElement(Icon, { className: "h-5 w-5", "aria-hidden": true })}
                      </span>
                      <span>
                        <span className="block inter-semibold text-sm text-[#07115a]">{label}</span>
                        <span className="mt-1 block inter-medium text-sm text-[#5a667c]">{value}</span>
                      </span>
                    </span>
                    <FiArrowRight className="h-5 w-5 shrink-0 text-[#1a5ee5] transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      <Homepage2Footer />
    </main>
  )
}

export default FacebookAdsThanks
