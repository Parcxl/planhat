import { createElement, useState } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiCreditCard,
  FiLayers,
  FiPackage,
  FiRefreshCw,
  FiShield,
  FiTruck,
  FiZap,
} from "react-icons/fi"
import Homepage2Footer from "../components/Homepage2/Footer"

const trustPoints = [
  "Pakketten verzenden vanaf €3,50",
  "Geen contracten of abonnementskosten",
  "Labels, tracking en fulfilment in één platform",
]

const customerLogos = [
  { name: "Boxxl", src: "/boxxl.png" },
  { name: "Solza", src: "/solza-logo.png" },
  { name: "Ferrachi", src: "/ferrachi.png" },
  { name: "Devision", src: "/devision.png" },
]

const painPoints = [
  {
    title: "Je betaalt te veel per pakket",
    text: "Verzendtarieven lopen op, toeslagen stapelen zich op en het is onduidelijk waar je marge verdwijnt.",
    icon: FiCreditCard,
  },
  {
    title: "Je verzendproces kost te veel tijd",
    text: "Orders, labels, tracking en retouren zitten verspreid over losse tools en handmatige stappen.",
    icon: FiClock,
  },
  {
    title: "Je wilt groeien zonder logistieke chaos",
    text: "Meer volume vraagt om meer structuur, maar je wilt niet direct vastzitten aan ingewikkelde software of contracten.",
    icon: FiLayers,
  },
]

const benefits = [
  {
    eyebrow: "Platform",
    title: "Alles voor verzenden in één dashboard",
    text: "Orders komen automatisch binnen, labels staan snel klaar en tracking gaat direct mee naar je klant.",
    icon: FiPackage,
  },
  {
    eyebrow: "CONNECT",
    title: "Slimme vervoerderkeuze zonder extra gedoe",
    text: "Gebruik één pickup en laat Sendwise de beste route en vervoerder per land ondersteunen.",
    icon: FiTruck,
  },
  {
    eyebrow: "PRO",
    title: "Klaar om op te schalen als je volume groeit",
    text: "Picken, packen, voorraad en fulfilmentprocessen hou je strak zodra je team of orderaantallen toenemen.",
    icon: FiZap,
  },
]

const featureChecks = [
  "Scherpe all-in verzendtarieven",
  "Automatische label- en trackingflow",
  "Koppelingen met WooCommerce, Shopify, CCV Shop en meer",
  "Retouren overzichtelijk verwerkt",
  "Opschalen met fulfilmentsoftware zodra je eraan toe bent",
  "Nederlandse support zonder omwegen",
]

const steps = [
  {
    number: "01",
    title: "Koppel je shop",
    text: "Orders komen automatisch binnen vanuit je webshop of fulfilmentflow.",
  },
  {
    number: "02",
    title: "Verwerk sneller",
    text: "Maak labels aan, kies de juiste verzendmethode en houd grip op iedere order.",
  },
  {
    number: "03",
    title: "Schaal zonder extra complexiteit",
    text: "Breid uit met CONNECT of PRO wanneer je meer volume en meer procescontrole nodig hebt.",
  },
]

const faqs = [
  {
    question: "Voor wie is deze Sendwise landingspagina bedoeld?",
    answer:
      "Voor webshops en fulfilmentteams die sneller, goedkoper en overzichtelijker willen verzenden zonder direct vast te zitten aan contracten of losse systemen.",
  },
  {
    question: "Kan ik starten zonder abonnementskosten?",
    answer:
      "Ja. Sendwise is juist ingericht om laagdrempelig te starten, met duidelijke verzendtarieven en zonder vaste contractdruk.",
  },
  {
    question: "Werkt Sendwise met mijn webshop of fulfilmentproces?",
    answer:
      "Sendwise ondersteunt onder meer WooCommerce, Shopify, CCV Shop, Mijnwebwinkel, Lightspeed en maatwerk via de API. Voor grotere volumes is uitbreiding met CONNECT of PRO mogelijk.",
  },
  {
    question: "Wat is het verschil tussen Sendwise, CONNECT en PRO?",
    answer:
      "Sendwise is je basis voor labels, tracking en scherpe tarieven. CONNECT helpt je slim te verzenden met de juiste vervoerder per land. PRO voegt fulfilmentsoftware toe voor pick, pack en voorraadbeheer.",
  },
]

const initialFormData = {
  bedrijfsnaam: "",
  website: "",
  voornaam: "",
  email: "",
  telefoon: "",
}

const LandingHeader = () => (
  <header className="sticky top-0 z-40 border-b border-[#dbe5f2] bg-white/92 backdrop-blur-md">
    <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
      <Link to="/" aria-label="Sendwise homepage" className="shrink-0">
        <img
          src="/sendwise-tekst-blauw.png"
          alt="Sendwise"
          width="465"
          height="84"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="h-7 w-auto"
        />
      </Link>

      <div className="flex items-center gap-3">
        <Link
          to="/contact"
          className="hidden rounded-full border border-[#d8e3f2] px-4 py-2.5 inter-semibold text-sm text-[#07115a] transition hover:border-[#b8c4d8] hover:bg-[#f8fbff] sm:inline-flex"
        >
          Plan een demo
        </Link>
        <Link
          to="/start-met-sendwise"
          className="inline-flex items-center gap-2 rounded-full bg-[#1a5ee5] px-4 py-2.5 inter-semibold text-sm text-white shadow-[0_14px_30px_rgba(26,94,229,0.18)] transition hover:bg-[#164fc2]"
        >
          Start met Sendwise
          <FiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </header>
)

const FacebookAdsLanding = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [status, setStatus] = useState({ state: "idle", message: "" })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setStatus({ state: "idle", message: "" })
  }

  const normalizeWebsite = (website) => {
    const trimmed = website.trim()
    if (!trimmed) return ""
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const requiredFields = ["bedrijfsnaam", "website", "voornaam", "email", "telefoon"]
    const missingField = requiredFields.find((field) => !formData[field].trim())

    if (missingField) {
      setStatus({ state: "error", message: "Vul alle velden in om je aanvraag te versturen." })
      return
    }

    if (!acceptedTerms) {
      setStatus({
        state: "error",
        message: "Ga akkoord met de algemene voorwaarden om je aanvraag te versturen.",
      })
      return
    }

    const payload = {
      ...formData,
      website: normalizeWebsite(formData.website),
      achternaam: "",
      kvk: "1234567",
    }

    try {
      setStatus({ state: "loading", message: "Aanvraag wordt verstuurd..." })

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
        message: "Je aanvraag is verzonden. We nemen binnen 24 uur contact met je op.",
      })
      setFormData(initialFormData)
      setAcceptedTerms(false)
    } catch (error) {
      setStatus({
        state: "error",
        message: error?.message || "Er ging iets mis bij het versturen. Probeer het later opnieuw.",
      })
    }
  }

  const inputClass = "w-full rounded-[16px] border border-[#d8e3f2] bg-white px-4 py-3.5 text-sm text-[#0d1321] outline-none transition-all duration-300 placeholder:text-[#8b96aa] focus:border-[#1a5ee5] focus:ring-4 focus:ring-[#1a5ee5]/10"

  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#0d1321]">
      <LandingHeader />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e7f2ff_0,_#f7fbff_46%,_#ffffff_100%)] px-4 pb-18 pt-14 sm:px-6 sm:pb-22 sm:pt-18 lg:pb-28 lg:pt-24">
        <div className="absolute left-[-7rem] top-12 h-52 w-52 rounded-full bg-[#d8e9ff]/70 blur-3xl" aria-hidden="true" />
        <div className="absolute right-[-3rem] top-24 h-64 w-64 rounded-full bg-[#1a5ee5]/10 blur-3xl" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8e8ff] bg-white px-4 py-2 inter-semibold text-xs uppercase tracking-[0.1em] text-[#1a5ee5] shadow-[0_10px_30px_rgba(26,94,229,0.08)]">
              <span className="h-2 w-2 rounded-full bg-[#1a5ee5]" aria-hidden="true" />
              Slimmer verzenden voor webshops en fulfilmentteams
            </span>

            <h1 className="mt-6 inter-semibold text-[2.9rem] leading-[0.98] text-[#07115a] sm:text-[4.2rem] lg:text-[5.2rem]">
              Minder handwerk.
              <span className="block text-[#1a5ee5]">Meer grip op verzenden.</span>
            </h1>

            <p className="mt-6 max-w-2xl inter-medium text-lg leading-8 text-[#475467]">
              Sendwise helpt webshops om orders sneller te verwerken, labels direct aan te maken en verzendkosten onder controle te houden.
              Zonder contracten, zonder vaste kosten en met transparante tarieven vanaf €3,50 per pakket.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/start-met-sendwise"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-[14px] bg-[#1a5ee5] px-6 inter-semibold text-sm text-white shadow-[0_18px_35px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]"
              >
                Vraag direct een account aan
                <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-[14px] border border-[#d6e2f1] bg-white px-6 inter-semibold text-sm text-[#07115a] shadow-[0_10px_24px_rgba(7,17,31,0.05)] transition hover:border-[#bfd2ea] hover:bg-[#f8fbff]"
              >
                Plan een kennismaking
              </Link>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 rounded-[16px] border border-[#deebf8] bg-white/90 px-4 py-3 inter-medium text-sm leading-6 text-[#445066] shadow-[0_14px_35px_rgba(7,17,31,0.05)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f0ff] text-[#1a5ee5]">
                    <FiCheck className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[28px] border border-[#d9e6f7] bg-white p-3 shadow-[0_30px_95px_rgba(7,17,31,0.14)] sm:rounded-[36px] sm:p-4">
              <img
                src="/sendwise-hero-delivery-van.jpg"
                alt="Pakket wordt in een Sendwise bezorgbus geladen"
                width="960"
                height="960"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="aspect-[1.05/1] w-full rounded-[22px] object-cover object-center sm:rounded-[28px]"
              />

              <div className="absolute bottom-7 left-7 max-w-[320px] rounded-[22px] border border-white/40 bg-[#07115a]/82 p-5 text-white shadow-[0_18px_50px_rgba(7,17,31,0.28)] backdrop-blur-md">
                <p className="inter-semibold text-[1.05rem] leading-6">
                  Eén platform voor labels, tracking, retouren en fulfilmentgroei.
                </p>
                <p className="mt-2 inter-medium text-sm leading-6 text-white/78">
                  Eerst slimmer verzenden. Daarna rustig opschalen met CONNECT of PRO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-7 sm:px-6 sm:py-9">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <p className="w-full text-center inter-semibold text-xs uppercase tracking-[0.18em] text-[#7b8797]">
            Vertrouwd door groeiende webshops en fulfilmentpartners
          </p>
          {customerLogos.map(({ name, src }) => (
            <img
              key={name}
              src={src}
              alt={name}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="h-10 w-auto max-w-[110px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </section>

      <section className="bg-[#f7fbff] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inter-semibold text-xs uppercase tracking-[0.18em] text-[#1a5ee5]">Herkenbaar?</span>
            <h2 className="mt-3 inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl">
              Je hoeft niet nóg harder te werken om slimmer te verzenden.
            </h2>
            <p className="mt-4 max-w-2xl inter-medium text-base leading-8 text-[#667085]">
              Veel webshops en fulfilmentteams lopen tegen dezelfde dingen aan: te hoge verzendkosten,
              te veel handwerk en te weinig grip zodra het volume oploopt. Sendwise helpt om die laag rustiger en slimmer in te richten.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {painPoints.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[24px] border border-[#e1eaf7] bg-white p-6 shadow-[0_18px_55px_rgba(7,17,31,0.065)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#1a5ee5] ring-1 ring-[#dce9ff]">
                  {createElement(Icon, { className: "h-7 w-7", "aria-hidden": true })}
                </span>
                <h3 className="mt-6 inter-semibold text-2xl leading-tight text-[#07115a]">{title}</h3>
                <p className="mt-3 inter-medium text-base leading-7 text-[#667085]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-22">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inter-semibold text-xs uppercase tracking-[0.18em] text-[#1a5ee5]">Wat je krijgt</span>
            <h2 className="mt-3 inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl">
              Eén plek om je webshopverzending eindelijk overzichtelijk te maken.
            </h2>
            <p className="mt-4 max-w-2xl inter-medium text-base leading-8 text-[#667085]">
              Geen losse tools voor labels, tracking, tarieven en doorgroei. Sendwise brengt die laag samen, zodat je webshopteam sneller werkt en minder laat liggen.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {featureChecks.map((item) => (
                <li key={item} className="flex items-start gap-2.5 inter-medium text-sm leading-6 text-[#445066]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f0ff] text-[#1a5ee5]">
                    <FiCheck className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative grid gap-5">
            {benefits.map(({ eyebrow, title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[24px] border border-[#e1eaf7] bg-[#fbfdff] p-6 shadow-[0_18px_50px_rgba(7,17,31,0.06)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1a5ee5] ring-1 ring-[#dce9ff]">
                    {createElement(Icon, { className: "h-6 w-6", "aria-hidden": true })}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1.5 inter-semibold text-xs uppercase tracking-[0.08em] text-[#536175] ring-1 ring-[#e1eaf7]">
                    {eyebrow}
                  </span>
                </div>
                <h3 className="mt-5 inter-semibold text-2xl leading-tight text-[#07115a]">{title}</h3>
                <p className="mt-3 inter-medium text-base leading-7 text-[#667085]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="account-aanvragen" className="bg-[#07115a] px-4 py-16 text-white sm:px-6 sm:py-22">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <span className="inter-semibold text-xs uppercase tracking-[0.18em] text-[#8dbbff]">Zo werkt het</span>
            <h2 className="mt-3 inter-semibold text-4xl leading-tight text-white sm:text-5xl">
              Van losse orderstress naar een webshopproces dat klopt.
            </h2>
            <p className="mt-4 max-w-2xl inter-medium text-base leading-8 text-white/76">
              Zodra je overzicht hebt op orders, labels, tracking en retouren, wordt verzenden geen los pijnpunt meer
              maar een proces dat meegroeit met je webshop.
            </p>

            <div className="mt-8 grid gap-4">
              {steps.map(({ number, title, text }) => (
                <div key={number} className="rounded-[22px] border border-white/14 bg-white/6 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1a5ee5] inter-semibold text-sm text-white">
                      {number}
                    </span>
                    <div>
                      <h3 className="inter-semibold text-xl text-white">{title}</h3>
                      <p className="mt-2 inter-medium text-sm leading-6 text-white/76">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid gap-6">
            <div className="absolute -right-6 -top-6 h-28 w-28 rotate-45 rounded-[26px] bg-white/8" aria-hidden="true" />
            <div className="grid gap-4">
              <img
                src="/verzenden-afbeelding-1.png"
                alt="Verzendmethode kiezen in Sendwise"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-[68%] -rotate-2 rounded-[24px] border border-white/10 bg-white shadow-[0_22px_60px_rgba(7,17,31,0.24)]"
              />
              <img
                src="/verzenden-afbeelding-2.png"
                alt="Overzicht van afleveradres en verzending in Sendwise"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="ml-auto w-[92%] rotate-2 rounded-[24px] border border-white/10 bg-white shadow-[0_22px_60px_rgba(7,17,31,0.24)]"
              />
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[26px] border border-white/12 bg-white/10 p-5 shadow-[0_22px_60px_rgba(7,17,31,0.18)] backdrop-blur-md sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="inter-semibold text-xl text-white">Vraag direct je Sendwise account aan</p>
                  <p className="mt-2 inter-medium text-sm leading-6 text-white/76">
                    Kort formulier, snelle opvolging. We nemen binnen 24 uur contact op.
                  </p>
                </div>
                <span className="rounded-full bg-white/12 px-3 py-1.5 inter-semibold text-xs uppercase tracking-[0.08em] text-[#9ec4ff]">
                  Voor webshops
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="bedrijfsnaam" className="mb-2 block inter-semibold text-sm text-white">
                    Bedrijfsnaam
                  </label>
                  <input
                    id="bedrijfsnaam"
                    name="bedrijfsnaam"
                    value={formData.bedrijfsnaam}
                    onChange={handleChange}
                    placeholder="Bijv. Mijn Webshop B.V."
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="website" className="mb-2 block inter-semibold text-sm text-white">
                    Webshop URL
                  </label>
                  <input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="www.jouwdomein.nl"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="voornaam" className="mb-2 block inter-semibold text-sm text-white">
                    Voornaam
                  </label>
                  <input
                    id="voornaam"
                    name="voornaam"
                    value={formData.voornaam}
                    onChange={handleChange}
                    placeholder="Voornaam"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="telefoon" className="mb-2 block inter-semibold text-sm text-white">
                    Telefoonnummer
                  </label>
                  <input
                    id="telefoon"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleChange}
                    placeholder="+31 6 ..."
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="mb-2 block inter-semibold text-sm text-white">
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="naam@bedrijf.nl"
                    className={inputClass}
                  />
                </div>
              </div>

              <label className="mt-4 flex items-start gap-3 text-sm leading-6 text-white/76">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) => setAcceptedTerms(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-[#9ec4ff] focus:ring-[#9ec4ff]"
                />
                Ik ga akkoord met de algemene voorwaarden en wil dat Sendwise contact met mij opneemt over een accountaanvraag.
              </label>

              {status.message ? (
                <div
                  className={`mt-4 rounded-[16px] px-4 py-3 text-sm ${
                    status.state === "success"
                      ? "bg-[#e8fff2] text-[#14532d]"
                      : status.state === "error"
                        ? "bg-[#ffe9e9] text-[#991b1b]"
                        : "bg-white/12 text-white"
                  }`}
                >
                  {status.message}
                </div>
              ) : null}

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="inter-medium text-sm leading-6 text-white/68">
                  Geen contracten. Geen abonnementskosten. Wel snelle opvolging.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 inter-semibold text-sm text-[#1a5ee5] transition hover:bg-[#edf4ff]"
                >
                  Account aanvragen
                  <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <span className="inter-semibold text-xs uppercase tracking-[0.18em] text-[#1a5ee5]">Transparantie</span>
            <h2 className="mt-3 inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl">
              Geen vaag offertetraject als je gewoon wilt weten waar je aan toe bent.
            </h2>
            <p className="mt-4 max-w-2xl inter-medium text-base leading-8 text-[#667085]">
              In de voorbeelden viel op hoe sterk transparantie werkt. Daarom benoemt deze landingspagina meteen de belangrijkste instapvoorwaarden.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Vanaf €3,50",
                text: "Start direct met scherpe pakketprijzen zonder onduidelijke lagen erbovenop.",
                icon: FiCreditCard,
              },
              {
                title: "Geen abonnement",
                text: "Je betaalt niet eerst vaste softwarekosten voordat het voor je mag werken.",
                icon: FiShield,
              },
              {
                title: "Klaar om te schalen",
                text: "Wanneer je verder groeit, breid je uit met CONNECT of PRO zonder je basis opnieuw te moeten bouwen.",
                icon: FiRefreshCw,
              },
            ].map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[24px] border border-[#e1eaf7] bg-[#fbfdff] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1a5ee5] ring-1 ring-[#dce9ff]">
                  {createElement(Icon, { className: "h-6 w-6", "aria-hidden": true })}
                </span>
                <h3 className="mt-5 inter-semibold text-2xl leading-tight text-[#07115a]">{title}</h3>
                <p className="mt-3 inter-medium text-base leading-7 text-[#667085]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-4 py-16 sm:px-6 sm:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inter-semibold text-xs uppercase tracking-[0.18em] text-[#1a5ee5]">Veelgestelde vragen</span>
            <h2 className="mt-3 inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl">
              Eerst antwoorden. Daarna pas je keuze.
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-[22px] border border-[#e1eaf7] bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)]"
              >
                <summary className="cursor-pointer list-none inter-semibold text-xl leading-tight text-[#07115a]">
                  {question}
                </summary>
                <p className="mt-4 inter-medium text-base leading-7 text-[#667085]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-18 pt-8 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[30px] bg-[#1a5ee5] px-6 py-8 text-white shadow-[0_26px_70px_rgba(26,94,229,0.24)] sm:px-10 sm:py-10 lg:px-14 lg:py-14">
            <div className="absolute -bottom-24 right-8 h-56 w-56 rotate-45 rounded-[40px] bg-white/12" aria-hidden="true" />
            <div className="absolute -top-28 right-60 h-44 w-44 rotate-45 rounded-[32px] bg-white/10" aria-hidden="true" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="inter-semibold text-3xl leading-tight text-white sm:text-5xl">
                  Klaar om slimmer te verzenden met Sendwise?
                </h2>
                <p className="mt-4 max-w-2xl inter-medium text-base leading-7 text-white/84 sm:text-lg sm:leading-8">
                  Vraag direct een account aan of plan een kennismaking. Dan kijken we samen hoe Sendwise het beste past bij jouw verzendvolume en proces.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/start-met-sendwise"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 inter-semibold text-sm text-[#1a5ee5] transition hover:bg-[#edf4ff]"
                >
                  Start met Sendwise
                  <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 inter-semibold text-sm text-white transition hover:bg-white/10"
                >
                  Plan een demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Homepage2Footer />
    </main>
  )
}

export default FacebookAdsLanding
