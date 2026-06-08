import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiPackage, FiRefreshCw, FiTruck } from "react-icons/fi"

const workflowPreloadSources = [
  "/inpakken-afbeelding-1.png",
  "/verzenden-afbeelding-1.png",
  "/verzenden-afbeelding-2.png",
  "/retour-afbeelding-1.png",
  "/retour-afbeelding-2.png",
  "/profile-founder-van.webp",
  "/profile-ward.webp",
  "/profile-joep.webp",
]

const workflowTabs = [
  {
    key: "inpakken",
    label: "Inpakken",
    icon: FiPackage,
    title: "Pak orders foutloos in",
    helper: "Alle orderregels, adressen en verzendopties staan klaar voordat je label wordt aangemaakt.",
    primaryAction: "Pakbon controleren",
    secondaryAction: "Label voorbereiden",
    badge: "Order #SW-1842",
    status: "Klaar om in te pakken",
    steps: ["Order geselecteerd", "Pakbon gecontroleerd", "Verzendlabel klaar"],
    testimonial: {
      image: "/profile-founder-van.webp",
      alt: "Sendwise order inpakken",
      quote: "“Alle producten en ordergegevens staan direct klaar. Zo pak je sneller in en voorkom je fouten voordat het label wordt gemaakt.”",
      author: "Olivier van Sendwise",
    },
  },
  {
    key: "verzenden",
    label: "Verzenden",
    icon: FiTruck,
    title: "Maak zendingen in één klik",
    helper: "Kies automatisch de juiste vervoerder, print je label en stuur tracking direct naar je klant.",
    primaryAction: "DHL label maken",
    secondaryAction: "Tracking versturen",
    badge: "DHL pakket",
    status: "Label aangemaakt",
    steps: ["Tarief gekozen", "Label geprint", "Tracking verzonden"],
    testimonial: {
      image: "/profile-ward.webp",
      alt: "Ward van Sendwise",
      quote: "“Van verzendmethode tot label: alles staat klaar om direct de juiste zending aan te maken.”",
      author: "Ward van Sendwise",
    },
  },
  {
    key: "retourneren",
    label: "Retourneren",
    icon: FiRefreshCw,
    title: "Verwerk retouren zonder gedoe",
    helper: "Retourlabels, statussen en klantupdates blijven gekoppeld aan dezelfde order.",
    primaryAction: "Retourlabel maken",
    secondaryAction: "Klant informeren",
    badge: "Retour #RT-219",
    status: "Retour onderweg",
    steps: ["Retour aangemeld", "Label gedeeld", "Status bijgewerkt"],
    testimonial: {
      image: "/profile-joep.webp",
      alt: "Joep van Sendwise",
      quote: "“Met het retourportaal maken klanten zelf eenvoudig een retour aan, terwijl jij overzicht houdt op iedere status.”",
      author: "Joep van Sendwise",
    },
  },
]

const PackingPreview = ({ Icon }) => (
  <div className="relative min-h-[350px] pt-4 lg:min-h-[520px] lg:pt-6">
    <img
      src="/inpakken-afbeelding-1.png"
      alt="Producten inpakken in Sendwise"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="mx-auto w-[92%] -rotate-2 rounded-2xl border border-[#dfe7f4] bg-white shadow-[0_18px_45px_rgba(7,17,90,0.12)] sm:w-[82%] lg:w-[69%] lg:rounded-3xl lg:shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
    />

    <div className="mx-auto mt-6 flex w-fit max-w-full items-center gap-3 px-2 inter-medium text-base leading-snug text-[#07115a] sm:text-lg lg:mt-8 lg:text-xl">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07115a] text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      Producten ingepakt en klaar voor verzending
    </div>
  </div>
)

const ShippingPreview = ({ Icon }) => {
  return (
    <div className="relative min-h-[390px] pt-2 lg:min-h-[520px]">
      <img
        src="/verzenden-afbeelding-1.png"
        alt="Verzendmethode kiezen in Sendwise"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="w-[66%] -rotate-2 rounded-2xl border border-[#dfe7f4] bg-white shadow-[0_18px_45px_rgba(7,17,90,0.12)] sm:w-[54%] lg:w-[43%] lg:rounded-3xl lg:shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
      />

      <div className="mx-auto mt-6 flex w-fit max-w-full items-center gap-3 px-2 inter-medium text-base leading-snug text-[#07115a] sm:text-lg lg:mt-7 lg:text-xl">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07115a] text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        Kies direct de juiste verzendmethode
      </div>

      <img
        src="/verzenden-afbeelding-2.png"
        alt="Afleveradres kaart in Sendwise"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="relative ml-auto mt-6 w-[94%] rotate-2 rounded-2xl border border-[#dfe7f4] bg-white shadow-[0_18px_45px_rgba(7,17,90,0.12)] lg:mt-7 lg:w-[75%] lg:rounded-3xl lg:shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
      />
    </div>
  )
}

const SmartWorkflow = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = workflowTabs[activeIndex] ?? workflowTabs[0]
  const ActiveIcon = active.icon
  const isReturnsTab = active.key === "retourneren"
  const isPackingTab = active.key === "inpakken"
  const isShippingTab = active.key === "verzenden"

  useEffect(() => {
    const preloadedImages = workflowPreloadSources.map((src) => {
      const image = new Image()
      image.fetchPriority = "high"
      image.decoding = "async"
      image.src = src
      return image
    })

    return () => {
      preloadedImages.forEach((image) => {
        image.src = ""
      })
    }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % workflowTabs.length)
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [activeIndex])

  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="inter-semibold text-4xl leading-tight text-[#07115a] sm:text-5xl lg:text-6xl">
            Software zo slim, dat verzenden simpel voelt.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl inter-medium text-base leading-7 text-[#3f4965] sm:mt-5 sm:text-lg sm:leading-8">
            Van order tot retour: Sendwise geeft je rust met een duidelijke workflow die handwerk voorkomt.
          </p>
        </div>

        <div className="mx-auto mt-9 flex w-full max-w-md -translate-x-2 items-end justify-center gap-7 sm:mt-12 sm:translate-x-0 sm:gap-8">
          {workflowTabs.map((tab, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative pb-4 inter-semibold text-sm transition ${
                  isActive ? "text-[#1a5ee5]" : "text-[#667085] hover:text-[#07115a]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 overflow-hidden rounded-full transition-colors duration-300 ${
                    isActive ? "bg-[#dce8ff]" : "bg-[#e6ebf4] group-hover:bg-[#cbd5e6]"
                  }`}
                >
                  {isActive && (
                    <span
                      key={active.key}
                      className="block h-full rounded-full bg-[#1a5ee5]"
                      style={{ animation: "workflowTabProgress 5s linear forwards" }}
                    />
                  )}
                </span>
              </button>
            )
          })}
        </div>

        <div className="relative mt-10 rounded-[24px] bg-white sm:mt-16 lg:min-h-[520px] lg:rounded-[34px]">
          <style>{`
            @keyframes workflowTabProgress {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
          <div className="absolute left-0 top-24 hidden h-52 w-48 -translate-x-20 rotate-45 rounded-[36px] bg-[#07115a] lg:block" aria-hidden="true" />
          <div className="absolute left-[48%] top-0 hidden h-56 w-56 rotate-45 rounded-[42px] bg-[#1a5ee5] lg:block" aria-hidden="true" />
          <div className="absolute bottom-8 left-20 hidden h-44 w-44 rotate-45 rounded-[34px] bg-[#e8f2ff] lg:block" aria-hidden="true" />

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={active.key}
              initial={{ opacity: 0, x: 56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -56 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid items-stretch gap-6 lg:grid-cols-[1fr_420px] lg:gap-8"
            >
              <div className="relative lg:min-h-[520px]">
                {isPackingTab ? (
                  <PackingPreview Icon={ActiveIcon} />
                ) : isShippingTab ? (
                  <ShippingPreview Icon={ActiveIcon} />
                ) : isReturnsTab ? (
                  <div className="relative min-h-[390px] pt-3 lg:min-h-[520px]">
                    <div className="relative w-[94%] -rotate-2 lg:w-[78%]">
                      <img
                        src="/retour-afbeelding-1.png"
                        alt="Recente retouren overzicht"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="w-full rounded-2xl border border-[#dfe7f4] bg-white shadow-[0_18px_45px_rgba(7,17,90,0.12)] lg:rounded-3xl lg:shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
                      />
                    </div>

                    <div className="mx-auto mt-6 flex w-fit max-w-full items-center gap-3 px-2 inter-medium text-base leading-snug text-[#07115a] sm:text-lg lg:text-xl">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07115a] text-white">
                        <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      Retouren overzichtelijk verwerkt
                    </div>

                    <div className="relative ml-auto mt-6 w-[90%] rotate-2 lg:w-[70%]">
                      <img
                        src="/retour-afbeelding-2.png"
                        alt="Retourportaal order controleren"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="w-full rounded-2xl border border-[#dfe7f4] bg-white shadow-[0_18px_45px_rgba(7,17,90,0.12)] lg:rounded-3xl lg:shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
                      />
                    </div>
                  </div>
                ) : (
                  null
                )}
              </div>

              <aside className="relative min-h-[390px] overflow-hidden rounded-[22px] shadow-[0_20px_55px_rgba(7,17,90,0.14)] lg:min-h-0 lg:rounded-[26px] lg:shadow-[0_24px_70px_rgba(7,17,90,0.16)]">
                <img
                  src={active.testimonial.image}
                  alt={active.testimonial.alt}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="h-full min-h-[390px] w-full scale-110 object-cover object-center lg:min-h-[520px] lg:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07115a]/90 via-[#07115a]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
                  <p className="inter-semibold text-xl leading-tight sm:text-2xl">
                    {active.testimonial.quote}
                  </p>
                  <p className="mt-5 inter-medium text-sm text-white/80">{active.testimonial.author}</p>
                </div>
              </aside>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default SmartWorkflow
