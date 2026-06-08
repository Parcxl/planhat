import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiPackage, FiRefreshCw, FiTruck } from "react-icons/fi"

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
      image: "/profile-founder-van.png",
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
      image: "/profile-ward.png",
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
      image: "/profile-joep.png",
      alt: "Joep van Sendwise",
      quote: "“Met het retourportaal maken klanten zelf eenvoudig een retour aan, terwijl jij overzicht houdt op iedere status.”",
      author: "Joep van Sendwise",
    },
  },
]

const PackingPreview = ({ Icon }) => (
  <div className="relative min-h-[520px] pt-6">
    <img
      src="/inpakken-afbeelding-1.png"
      alt="Producten inpakken in Sendwise"
      className="mx-auto w-[69%] -rotate-2 rounded-3xl border border-[#dfe7f4] bg-white shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
    />

    <div className="mx-auto mt-8 flex w-fit items-center gap-3 inter-medium text-xl text-[#07115a]">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07115a] text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      Producten ingepakt en klaar voor verzending
    </div>
  </div>
)

const ShippingPreview = ({ Icon }) => {
  return (
    <div className="relative min-h-[520px] pt-2">
      <img
        src="/verzenden-afbeelding-1.png"
        alt="Verzendmethode kiezen in Sendwise"
        className="w-[43%] -rotate-2 rounded-3xl border border-[#dfe7f4] bg-white shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
      />

      <div className="mx-auto mt-7 flex w-fit items-center gap-3 inter-medium text-xl text-[#07115a]">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07115a] text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        Kies direct de juiste verzendmethode
      </div>

      <img
        src="/verzenden-afbeelding-2.png"
        alt="Afleveradres kaart in Sendwise"
        className="relative ml-auto mt-7 w-[75%] rotate-2 rounded-3xl border border-[#dfe7f4] bg-white shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
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
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % workflowTabs.length)
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [activeIndex])

  return (
    <section className="overflow-hidden bg-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="inter-semibold text-5xl leading-tight text-[#07115a] sm:text-6xl">
            Software zo slim, dat verzenden simpel voelt.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl inter-medium text-lg leading-8 text-[#3f4965]">
            Van order tot retour: Sendwise geeft je rust met een duidelijke workflow die handwerk voorkomt.
          </p>
        </div>

        <div className="mx-auto mt-12 flex w-full max-w-md items-end justify-center gap-8">
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

        <div className="relative mt-16 min-h-[520px] rounded-[34px] bg-white">
          <style>{`
            @keyframes workflowTabProgress {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
          <div className="absolute left-0 top-24 h-52 w-48 -translate-x-20 rotate-45 rounded-[36px] bg-[#07115a]" aria-hidden="true" />
          <div className="absolute left-[48%] top-0 h-56 w-56 rotate-45 rounded-[42px] bg-[#1a5ee5]" aria-hidden="true" />
          <div className="absolute bottom-8 left-20 h-44 w-44 rotate-45 rounded-[34px] bg-[#e8f2ff]" aria-hidden="true" />

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={active.key}
              initial={{ opacity: 0, x: 56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -56 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid items-stretch gap-8 lg:grid-cols-[1fr_420px]"
            >
              <div className="relative min-h-[520px]">
                {isPackingTab ? (
                  <PackingPreview Icon={ActiveIcon} />
                ) : isShippingTab ? (
                  <ShippingPreview Icon={ActiveIcon} />
                ) : isReturnsTab ? (
                  <div className="relative min-h-[520px] pt-3">
                    <div className="relative w-[78%] -rotate-2">
                      <img
                        src="/retour-afbeelding-1.png"
                        alt="Recente retouren overzicht"
                        className="w-full rounded-3xl border border-[#dfe7f4] bg-white shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
                      />
                    </div>

                    <div className="mx-auto mt-6 flex w-fit items-center gap-3 inter-medium text-xl text-[#07115a]">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07115a] text-white">
                        <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      Retouren overzichtelijk verwerkt
                    </div>

                    <div className="relative ml-auto mt-6 w-[70%] rotate-2">
                      <img
                        src="/retour-afbeelding-2.png"
                        alt="Retourportaal order controleren"
                        className="w-full rounded-3xl border border-[#dfe7f4] bg-white shadow-[0_24px_70px_rgba(7,17,90,0.14)]"
                      />
                    </div>
                  </div>
                ) : (
                  null
                )}
              </div>

              <aside className="relative overflow-hidden rounded-[26px] shadow-[0_24px_70px_rgba(7,17,90,0.16)]">
                <img
                  src={active.testimonial.image}
                  alt={active.testimonial.alt}
                  className="h-full min-h-[520px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07115a]/90 via-[#07115a]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="inter-semibold text-2xl leading-tight">
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
