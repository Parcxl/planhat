import { useEffect, useRef, useState } from "react"
import { FiArrowRight, FiCheck, FiLink, FiPrinter, FiTruck } from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"
import Reviews from "../components/Homepage2/Reviews"
import PlatformAutomationAnimation from "../components/animations/PlatformAutomationAnimation"

const algemeneVoorwaardenPdf = "/sendwise-algemene-voorwaarden:15-03-2026.pdf"

const heroPoints = [
  "All-in verzendtarieven",
  "Geen abonnementskosten",
  "Binnen enkele minuten gestart",
]

const customerLogos = [
  { name: "Boxxl", src: "/boxxl.png" },
  { name: "Solza", src: "/solza-logo.png" },
  { name: "Ferrachi", src: "/ferrachi.png" },
]

const webshopIntegrations = [
  { name: "WooCommerce", src: "/woocommerce-logo.webp" },
  { name: "Shopify", src: "/shopify-logo.webp" },
  { name: "Wix", src: "/wix.png" },
  { name: "CCV", src: "/ccv-icon.svg" },
  { name: "Lightspeed", src: "/lightspeed.webp" },
  { name: "Bol.com", src: "/bol-logo.png" },
  { name: "Mijnwebwinkel", src: "/mijnwebwinkel.webp" },
  { name: "Goedgepickt", src: "/goedgepickt-sendwise-logo.webp" },
]

const carrierHighlights = [
  {
    name: "DHL",
    src: "/sendwise-dhl.svg",
    saving: "-37%",
    className: "left-3 top-8 lg:left-8 lg:top-10",
    transform: "perspective(900px) rotateX(10deg) rotateY(-24deg) rotateZ(-7deg) translateZ(28px)",
    from: "translate(180px, 118px) scale(0.62)",
  },
  {
    name: "Gofo",
    src: "/gofo-logo-sendwise.webp",
    saving: "-24%",
    className: "right-2 top-12 lg:right-8 lg:top-16",
    transform: "perspective(900px) rotateX(8deg) rotateY(22deg) rotateZ(7deg) translateZ(18px)",
    from: "translate(-178px, 105px) scale(0.62)",
  },
  {
    name: "PostNL",
    src: "/postnl-icoon.webp",
    saving: "-19%",
    className: "left-9 bottom-8 lg:left-16 lg:bottom-10",
    transform: "perspective(900px) rotateX(-8deg) rotateY(-18deg) rotateZ(5deg) translateZ(16px)",
    from: "translate(150px, -118px) scale(0.62)",
  },
  {
    name: "FedEx",
    src: "/fedex-logo-nieuw.png",
    saving: "-31%",
    className: "right-8 bottom-5 lg:right-14 lg:bottom-12",
    transform: "perspective(900px) rotateX(-10deg) rotateY(24deg) rotateZ(-6deg) translateZ(24px)",
    from: "translate(-152px, -122px) scale(0.62)",
  },
]

const platformFeatures = [
  "Retourportaal voor klanten",
  "Branded trackingpagina's",
  "Labelbranding in je eigen huisstijl",
  "Automatische verzendregels per order",
]

const LogoRail = ({ items, reverse = false, withSavings = false, compact = false }) => (
  <div
    className={`flex w-max ${compact ? "gap-0" : "gap-3"}`}
    style={{
      animation: `landingLogoRail ${reverse ? "36s" : "32s"} linear infinite ${reverse ? "reverse" : ""}`,
    }}
  >
    {[...items, ...items].map((item, index) => (
      <div
        key={`${item.name}-${index}`}
        className={`relative flex shrink-0 items-center justify-center ${
          compact ? "h-20 w-28 sm:h-24 sm:w-36 lg:h-28 lg:w-40" : "h-24 w-30 px-2 sm:h-32 sm:w-36"
        }`}
      >
        {withSavings ? (
          <span className="absolute right-1 top-1 rounded-full bg-[#e8fff2] px-2 py-0.5 inter-semibold text-[0.72rem] text-[#128042] ring-1 ring-[#bdf5d2]">
            {item.saving}
          </span>
        ) : null}
        <img
          src={item.src}
          alt={withSavings ? `${item.name} vervoerder` : `${item.name} integratie`}
          loading="lazy"
          decoding="async"
          className={`object-contain ${
            compact ? "max-h-16 max-w-[130px] sm:max-h-20 sm:max-w-[170px] lg:max-h-24 lg:max-w-[190px]" : "max-h-16 max-w-[128px] sm:max-h-24 sm:max-w-[168px]"
          }`}
        />
      </div>
    ))}
  </div>
)

const initialFormData = {
  naam: "",
  bedrijfsnaam: "",
  email: "",
  telefoon: "",
}

const FacebookAdsLanding = () => {
  const carrierSceneRef = useRef(null)
  const [formData, setFormData] = useState(initialFormData)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [status, setStatus] = useState({ state: "idle", message: "", form: "" })
  const [carrierSceneVisible, setCarrierSceneVisible] = useState(false)

  useEffect(() => {
    if (!carrierSceneRef.current) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCarrierSceneVisible(true)
        }
      },
      { threshold: 0.68 }
    )

    observer.observe(carrierSceneRef.current)

    return () => observer.disconnect()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setStatus({ state: "idle", message: "", form: "" })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formKey = event.currentTarget.dataset.form || "account"

    const requiredFields = ["naam", "bedrijfsnaam", "email", "telefoon"]
    const missingField = requiredFields.find((field) => !formData[field].trim())

    if (missingField) {
      setStatus({ state: "error", message: "Vul alle velden in om je aanvraag te versturen.", form: formKey })
      return
    }

    if (!acceptedTerms) {
      setStatus({
        state: "error",
        message: "Ga akkoord met de algemene voorwaarden om je aanvraag te versturen.",
        form: formKey,
      })
      return
    }

    const payload = {
      bedrijfsnaam: formData.bedrijfsnaam,
      website: "",
      voornaam: formData.naam,
      achternaam: "",
      email: formData.email,
      telefoon: formData.telefoon,
      kvk: "1234567",
    }

    try {
      setStatus({ state: "loading", message: "Aanvraag wordt verstuurd...", form: formKey })

      const response = await fetch("/api/accountaanvraag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || data?.success === false) {
        throw new Error(data?.error || data?.message || "Er ging iets mis bij het versturen.")
      }

      setStatus({
        state: "success",
        message: "Je aanvraag is verzonden. Wij nemen binnen 24 uur contact met je op.",
        form: formKey,
      })
      setFormData(initialFormData)
      setAcceptedTerms(false)
    } catch (error) {
      setStatus({
        state: "error",
        message: error?.message || "Er ging iets mis bij het versturen. Probeer het later opnieuw.",
        form: formKey,
      })
    }
  }

  const inputClass = "w-full rounded-[14px] border border-[#d8e3f2] bg-white px-4 py-3 text-sm text-[#0d1321] outline-none transition-all duration-300 placeholder:text-[#a3adbf] focus:border-[#1a5ee5] focus:ring-4 focus:ring-[#1a5ee5]/10"
  const renderAccountForm = (formKey) => {
    const fieldPrefix = `${formKey}-`
    const visibleStatus = status.form === formKey ? status : { state: "idle", message: "" }

    return (
      <form onSubmit={handleSubmit} data-form={formKey} className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${fieldPrefix}naam`} className="mb-2 block inter-semibold text-sm text-[#07115a]">
              Naam *
            </label>
            <input
              id={`${fieldPrefix}naam`}
              name="naam"
              value={formData.naam}
              onChange={handleChange}
              placeholder="Uw naam"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={`${fieldPrefix}bedrijfsnaam`} className="mb-2 block inter-semibold text-sm text-[#07115a]">
              Bedrijfsnaam *
            </label>
            <input
              id={`${fieldPrefix}bedrijfsnaam`}
              name="bedrijfsnaam"
              value={formData.bedrijfsnaam}
              onChange={handleChange}
              placeholder="Bedrijfsnaam"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={`${fieldPrefix}email`} className="mb-2 block inter-semibold text-sm text-[#07115a]">
              E-mail *
            </label>
            <input
              id={`${fieldPrefix}email`}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="info@email.nl"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={`${fieldPrefix}telefoon`} className="mb-2 block inter-semibold text-sm text-[#07115a]">
              Telefoonnummer *
            </label>
            <input
              id={`${fieldPrefix}telefoon`}
              name="telefoon"
              value={formData.telefoon}
              onChange={handleChange}
              placeholder="+31 6 12345678"
              className={inputClass}
            />
          </div>
        </div>

        <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#667085]">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) => setAcceptedTerms(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-[#c9d7eb] text-[#1a5ee5] focus:ring-[#1a5ee5]/20"
          />
          <span>
            Ik ga akkoord met de{" "}
            <a
              href={algemeneVoorwaardenPdf}
              target="_blank"
              rel="noreferrer"
              className="inter-semibold text-[#1a5ee5] hover:underline"
            >
              algemene voorwaarden
            </a>
          </span>
        </label>

        {visibleStatus.message ? (
          <div
            className={`mt-5 rounded-[16px] px-4 py-3 text-sm ${
              visibleStatus.state === "success"
                ? "bg-[#e8fff2] text-[#14532d]"
                : visibleStatus.state === "error"
                  ? "bg-[#ffe9e9] text-[#991b1b]"
                  : "bg-white text-[#07115a]"
            }`}
          >
            {visibleStatus.message}
          </div>
        ) : null}

        <button
          type="submit"
          className="group mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[12px] bg-[#1a5ee5] px-6 inter-medium text-base text-white shadow-[0_14px_30px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]"
        >
          Vraag je account aan
          <FiArrowRight className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </form>
    )
  }

  return (
    <main className="min-h-screen bg-white text-[#0d1321]">
      <style>{`
        @keyframes olivierFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes landingLogoRail {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <Homepage2Header />

      <section className="relative overflow-hidden bg-[#1a5ee5] pt-24 sm:pt-28 lg:pt-44">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-8 sm:px-6 sm:pb-12 lg:min-h-[640px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pb-12">
          <div className="relative z-10 max-w-[690px] lg:pb-10">
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

            <h1 className="inter-semibold text-[2.45rem] leading-[1.04] text-white min-[390px]:text-[2.75rem] sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              <span className="block sm:whitespace-nowrap">Verzend slimmer.</span>
              <span className="block sm:whitespace-nowrap">Groei zonder gedoe.</span>
            </h1>

            <p className="mt-5 max-w-[540px] text-base leading-7 text-[#dbe7ff] sm:mt-6 sm:text-[1.08rem] sm:leading-[1.7]">
              Sendwise geeft je webshop snelle labels, scherpe tarieven en minder handwerk in je verzendproces.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#sendwise-aanvraag"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-[12px] bg-white px-6 inter-medium text-base text-[#1a5ee5] shadow-[0_14px_30px_rgba(7,17,90,0.18)] transition hover:bg-[#eef4ff] sm:w-auto"
              >
                Vraag een account aan
                <FiArrowRight className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>

            <ul className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-4">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 inter-medium text-[0.95rem] text-white sm:text-base">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/18 text-white">
                    <FiCheck className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center justify-center lg:min-h-[570px] lg:items-start lg:justify-end lg:pt-8">
            <div
              className="pointer-events-none absolute left-[-18px] top-[-70px] hidden h-[72px] w-[138px] text-white lg:block"
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

            <div
              id="sendwise-aanvraag"
              className="relative w-full max-w-[500px] rounded-[22px] border border-white/18 bg-[#f8fbff] p-5 shadow-[0_24px_65px_rgba(7,17,90,0.24)] sm:rounded-[30px] sm:p-7 lg:max-w-[520px] lg:rounded-[34px] lg:p-8 lg:shadow-[0_34px_95px_rgba(7,17,90,0.28)]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="inter-semibold text-[1.45rem] leading-tight text-[#07115a] sm:text-[1.65rem]">
                    Start direct met verzenden
                  </h2>
                  <p className="mt-2 max-w-md inter-medium text-sm leading-6 text-[#5a667c]">
                    Laat je gegevens achter en wij nemen contact met je op.
                  </p>
                </div>

              <img
                src="/profile-olivier.avif"
                alt="Olivier van Sendwise"
                width="112"
                height="112"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="hidden h-16 w-16 rounded-full object-cover ring-4 ring-white sm:block"
                style={{ animation: "olivierFloat 4.2s ease-in-out infinite" }}
              />
            </div>

            {renderAccountForm("hero")}
          </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
          <div className="relative">
            <div
              className="overflow-hidden rounded-[24px] bg-[#f4f8ff] shadow-[0_24px_65px_rgba(7,17,31,0.12)] sm:rounded-[30px] lg:rounded-[34px]"
              style={{ animation: "olivierFloat 4.6s ease-in-out infinite" }}
            >
            <img
              src="/profile-founder-van.webp"
              alt="Olivier van Sendwise"
              width="1254"
              height="1254"
              loading="lazy"
              decoding="async"
              className="aspect-[1.28/1] w-full object-cover object-center"
            />
            </div>
          </div>

          <div className="max-w-[620px]">
            <h2 className="inter-semibold text-[2rem] leading-[1.08] text-[#07115a] sm:text-[2.85rem]">
              Te dure verzendingen eten je marge op
            </h2>
            <p className="mt-5 text-base leading-8 text-[#4e5a73] sm:text-[1.08rem]">
              Je webshop groeit, maar elke zending kost meer dan nodig. Losse vervoerders, onduidelijke toeslagen en handmatig labels maken zorgen voor druk op je marge.
            </p>

            <ul className="mt-8 grid gap-3">
              {[
                "Je betaalt te veel per pakket, vooral bij groeiend volume",
                "Toeslagen en uitzonderingen maken je kosten onvoorspelbaar",
                "Handmatig vergelijken en labels maken kost onnodig tijd",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 inter-medium text-base leading-7 text-[#1f2a44]">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f0ff] text-[#1a5ee5]">
                    <FiCheck className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Reviews />

      <section className="overflow-hidden bg-[#f7fbff] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#eef5ff] px-3.5 py-2 inter-semibold text-xs uppercase tracking-[0.08em] text-[#1a5ee5] ring-1 ring-[#dce9ff]">
              <FiLink className="h-4 w-4" aria-hidden="true" />
              Stap 1
            </span>
            <h2 className="inter-semibold text-[2rem] leading-[1.08] text-[#07115a] sm:text-[2.85rem]">
              Koppel je webshop
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#4e5a73] sm:text-[1.08rem]">
              Orders komen automatisch binnen vanuit je webshop, marketplace of eigen koppeling. Geen overtypen, geen losse exports.
            </p>
          </div>

          <div className="relative overflow-hidden py-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f7fbff] to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f7fbff] to-transparent sm:w-20" />
            <LogoRail items={webshopIntegrations} compact />
            <div className="mt-1">
              <LogoRail items={[...webshopIntegrations.slice(4), ...webshopIntegrations.slice(0, 4)]} reverse compact />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14">
          <div ref={carrierSceneRef} className="relative order-2 min-h-[300px] overflow-hidden rounded-[24px] bg-[#f7fbff] px-4 py-6 shadow-[inset_0_0_0_1px_rgba(225,234,247,0.9)] sm:min-h-[430px] sm:px-8 lg:order-1 lg:rounded-[28px]">
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a5ee5]/8 blur-2xl" aria-hidden="true" />

            <div className="absolute left-1/2 top-1/2 z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 sm:h-32 sm:w-32">
              <img
                src="/sendwise-badge-blue-overlay.png"
                alt="Sendwise"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain drop-shadow-none sm:drop-shadow-[0_24px_34px_rgba(7,17,90,0.20)]"
              />
              <div className="absolute -right-5 top-0 rotate-[8deg] rounded-[10px] bg-white px-2 py-1.5 shadow-[0_10px_24px_rgba(7,17,90,0.12)] ring-1 ring-[#dfeaf7] sm:-right-8 sm:top-2 sm:rounded-[12px] sm:px-3 sm:py-2 sm:shadow-[0_16px_34px_rgba(7,17,90,0.16)]">
                <p className="inter-semibold text-[0.62rem] leading-none text-[#07115a] sm:text-[0.72rem]">Geen</p>
                <p className="mt-0.5 inter-semibold text-[0.62rem] leading-none text-[#1a5ee5] sm:mt-1 sm:text-[0.72rem]">contract</p>
                <div className="mt-1.5 h-0.5 w-9 rounded-full bg-[#dce8ff] sm:mt-2 sm:h-1 sm:w-12" />
                <div className="mt-1 h-0.5 w-6 rounded-full bg-[#dce8ff] sm:h-1 sm:w-8" />
              </div>
            </div>

            {carrierHighlights.map((carrier) => (
              <div
                key={carrier.name}
                className={`absolute z-20 flex h-20 w-28 items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-32 sm:w-48 ${carrier.className}`}
                style={{
                  opacity: carrierSceneVisible ? 1 : 0,
                  transform: carrierSceneVisible ? carrier.transform : carrier.from,
                  transformStyle: "preserve-3d",
                }}
              >
                <span className="absolute -right-1 top-0 z-10 rounded-full bg-[#e8fff2] px-2 py-1 inter-semibold text-xs text-[#128042] shadow-[0_10px_24px_rgba(18,128,66,0.14)] ring-1 ring-[#bdf5d2] sm:px-3 sm:py-1.5 sm:text-sm">
                  {carrier.saving}
                </span>
                <img
                  src={carrier.src}
                  alt={`${carrier.name} vervoerder`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-14 max-w-[118px] object-contain drop-shadow-none sm:max-h-24 sm:max-w-[190px] sm:drop-shadow-[0_22px_28px_rgba(7,17,90,0.22)]"
                />
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#eef5ff] px-3.5 py-2 inter-semibold text-xs uppercase tracking-[0.08em] text-[#1a5ee5] ring-1 ring-[#dce9ff]">
              <FiTruck className="h-4 w-4" aria-hidden="true" />
              Stap 2
            </span>
            <h2 className="inter-semibold text-[2rem] leading-[1.08] text-[#07115a] sm:text-[2.85rem]">
              Kies direct het beste tarief
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#4e5a73] sm:text-[1.08rem]">
              Sendwise vergelijkt vervoerders en maakt je verzendkosten voorspelbaar. Je ziet sneller waar je marge blijft liggen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#eef5ff] px-3.5 py-2 inter-semibold text-xs uppercase tracking-[0.08em] text-[#1a5ee5] ring-1 ring-[#dce9ff]">
              <FiPrinter className="h-4 w-4" aria-hidden="true" />
              Stap 3
            </span>
            <h2 className="inter-semibold text-[2rem] leading-[1.08] text-[#07115a] sm:text-[2.85rem]">
              Meer dan labels printen
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#4e5a73] sm:text-[1.08rem]">
              Sendwise wordt de verzendlaag van je webshop. Van retouren tot branded tracking en automatische verzendregels: alles blijft gekoppeld aan dezelfde order.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {platformFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 inter-medium text-sm leading-6 text-[#445066]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f0ff] text-[#1a5ee5]">
                    <FiCheck className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-[#dfe8f6] bg-white p-2.5 shadow-[0_24px_70px_rgba(7,17,31,0.10)] sm:min-h-[390px] sm:p-4 lg:min-h-[430px] lg:rounded-[28px]">
            <div className="relative h-[300px] sm:h-[350px] lg:h-[390px]">
              <PlatformAutomationAnimation />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[24px] bg-[#07115a] px-5 py-7 text-white shadow-[0_24px_70px_rgba(7,17,90,0.18)] sm:rounded-[30px] sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:rounded-[34px] lg:px-12 lg:py-12">
          <div className="max-w-xl">
            <h2 className="inter-semibold text-[2rem] leading-tight sm:text-[2.5rem]">
              Start vandaag nog met slimmer verzenden
            </h2>
            <p className="mt-4 max-w-lg inter-medium text-base leading-8 text-white/78 sm:text-[1.05rem]">
              Laat je gegevens achter. Wij nemen contact met je op en kijken welke Sendwise opzet past bij jouw webshop.
            </p>
            <ul className="mt-7 grid gap-3">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 inter-medium text-[0.95rem] text-white">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/14 text-white">
                    <FiCheck className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[22px] bg-[#f8fbff] p-5 text-[#0d1321] shadow-[0_24px_65px_rgba(7,17,31,0.18)] sm:p-7 lg:rounded-[30px] lg:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="inter-semibold text-[1.45rem] leading-tight text-[#07115a] sm:text-[1.65rem]">
                  Vraag je account aan
                </h3>
                <p className="mt-2 max-w-md inter-medium text-sm leading-6 text-[#5a667c]">
                  Binnen enkele minuten aangevraagd. Geen abonnementskosten, geen contracten.
                </p>
              </div>
              <img
                src="/profile-olivier.avif"
                alt="Olivier van Sendwise"
                width="112"
                height="112"
                loading="lazy"
                decoding="async"
                className="hidden h-16 w-16 rounded-full object-cover ring-4 ring-white sm:block"
                style={{ animation: "olivierFloat 4.2s ease-in-out infinite" }}
              />
            </div>

            {renderAccountForm("cta")}
          </div>
        </div>
      </section>

      <Homepage2Footer />
    </main>
  )
}

export default FacebookAdsLanding
