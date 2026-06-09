import { useEffect, useState } from "react"
import { FiCheck, FiMail, FiRefreshCw, FiSliders, FiTag } from "react-icons/fi"

const scenes = [
  {
    key: "tracking",
    label: "Tracking",
    icon: FiMail,
    title: "Trackingpagina",
    subtitle: "Logo, kleur en statusupdates staan klaar.",
    cursor: "left-[73%] top-[49%]",
  },
  {
    key: "returns",
    label: "Retouren",
    icon: FiRefreshCw,
    title: "Retourportaal",
    subtitle: "Klant voert ordernummer in en maakt zelf een retourlabel.",
    cursor: "left-[62%] top-[66%]",
  },
  {
    key: "label",
    label: "Label",
    icon: FiTag,
    title: "Labelbranding",
    subtitle: "Je logo en retourtekst op het verzendlabel.",
    cursor: "left-[55%] top-[42%]",
  },
  {
    key: "rules",
    label: "Regels",
    icon: FiSliders,
    title: "Verzendregels",
    subtitle: "Automatisch de juiste vervoerder per order.",
    cursor: "left-[72%] top-[58%]",
  },
]

const barcodeBars = [3, 1, 2, 1, 4, 2, 1, 3, 1, 1, 5, 2, 2, 1, 3, 4, 1, 2, 1, 5, 2, 1, 3, 1, 2, 4, 1, 1, 3, 2, 5, 1]
const qrBlocks = [
  "col-start-1 row-start-1",
  "col-start-2 row-start-1",
  "col-start-3 row-start-1",
  "col-start-1 row-start-2",
  "col-start-3 row-start-2",
  "col-start-1 row-start-3",
  "col-start-2 row-start-3",
  "col-start-3 row-start-3",
  "col-start-5 row-start-1",
  "col-start-6 row-start-1",
  "col-start-8 row-start-1",
  "col-start-6 row-start-2",
  "col-start-7 row-start-3",
  "col-start-8 row-start-3",
  "col-start-4 row-start-4",
  "col-start-6 row-start-4",
  "col-start-8 row-start-4",
  "col-start-1 row-start-5",
  "col-start-3 row-start-5",
  "col-start-5 row-start-5",
  "col-start-7 row-start-5",
  "col-start-2 row-start-6",
  "col-start-4 row-start-6",
  "col-start-6 row-start-6",
  "col-start-8 row-start-6",
  "col-start-1 row-start-7",
  "col-start-2 row-start-7",
  "col-start-5 row-start-7",
  "col-start-7 row-start-7",
  "col-start-8 row-start-7",
  "col-start-3 row-start-8",
  "col-start-4 row-start-8",
  "col-start-6 row-start-8",
]

const SceneButton = ({ scene, active, onClick }) => {
  const Icon = scene.icon

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 inter-semibold text-[0.68rem] transition duration-300 sm:gap-2 sm:px-3 sm:text-[0.72rem] ${
        active ? "bg-[#07115a] text-white" : "bg-white/72 text-[#667085] hover:bg-white"
      }`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {scene.label}
    </button>
  )
}

const AppShell = ({ children }) => (
  <div className="h-full overflow-hidden rounded-[20px] bg-white shadow-[0_24px_72px_rgba(7,17,90,0.12)] ring-1 ring-[#dfe8f6] sm:rounded-[24px]">
    <div className="flex h-10 items-center justify-between border-b border-[#e7eef8] px-3 sm:h-11 sm:px-4">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbf47]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#33d17a]" />
      </div>
      <img src="/sendwise-tekst-blauw.png" alt="" className="h-4 w-auto sm:h-5" />
      <span className="rounded-full bg-[#e8fff2] px-2 py-1 inter-semibold text-[0.64rem] text-[#128042] sm:px-2.5 sm:text-[0.68rem]">Live</span>
    </div>
    <div className="h-[calc(100%-40px)] overflow-hidden p-3 sm:h-[calc(100%-44px)] sm:p-5">{children}</div>
  </div>
)

const SceneIntro = ({ scene }) => (
  <div className="max-w-[360px]">
    <p className="inter-semibold text-lg leading-tight text-[#07115a] sm:text-xl">{scene.title}</p>
    <p className="mt-1 text-xs leading-5 text-[#667085] sm:mt-1.5 sm:text-sm sm:leading-6">{scene.subtitle}</p>
  </div>
)

const TrackingPreview = () => (
  <div className="mt-3 rounded-[18px] bg-[#f8fbff] p-3 ring-1 ring-[#e5eef8] sm:mt-5 sm:rounded-[22px] sm:p-5">
    <div className="flex items-center justify-between">
      <img src="/sendwise-tekst-blauw.png" alt="" className="h-4 w-auto sm:h-5" />
      <button type="button" className="rounded-full bg-[#1a5ee5] px-3 py-1.5 inter-semibold text-[0.68rem] text-white sm:px-3.5 sm:py-2 sm:text-xs">Track pakket</button>
    </div>
    <div className="mt-7">
      <p className="inter-semibold text-xl text-[#07115a] sm:text-2xl">Je bestelling is onderweg</p>
      <div className="mt-5 h-2 rounded-full bg-[#e1eaf7]">
        <div className="h-2 w-[62%] rounded-full bg-[#1a5ee5]" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Aangemeld", "Onderweg", "Bezorgd"].map((step, index) => (
          <div key={step} className="rounded-[12px] bg-white px-2 py-2.5 text-center ring-1 ring-[#e5eef8] sm:rounded-[14px] sm:px-3 sm:py-3">
            <span className={`mx-auto block h-2.5 w-2.5 rounded-full ${index < 2 ? "bg-[#1a5ee5]" : "bg-[#d8e4f5]"}`} />
            <span className="mt-2 block text-[0.68rem] inter-semibold text-[#667085]">{step}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ReturnsPreview = () => (
  <div className="mt-3 rounded-[18px] bg-[#f8fbff] p-3 ring-1 ring-[#e5eef8] sm:mt-5 sm:rounded-[22px] sm:p-5">
    <div className="flex items-center justify-between">
      <span className="rounded-full bg-white px-2.5 py-1.5 text-[0.68rem] inter-semibold text-[#667085] ring-1 ring-[#e5eef8] sm:px-3 sm:text-xs">retour.sendwise.nl</span>
      <img src="/sendwise-icon-blauw.png" alt="" className="h-8 w-8" />
    </div>
    <p className="mt-4 inter-semibold text-xl text-[#07115a] sm:mt-6 sm:text-2xl">Retour aanmelden</p>
    <div className="mt-3 grid gap-2.5 sm:mt-5 sm:gap-3">
      <div className="rounded-[15px] bg-white px-4 py-3 ring-1 ring-[#e5eef8]">
        <span className="text-xs text-[#667085]">Ordernummer</span>
        <p className="inter-semibold text-sm text-[#07115a]">SW-1842</p>
      </div>
      <div className="rounded-[15px] bg-white px-4 py-3 ring-1 ring-[#e5eef8]">
        <span className="text-xs text-[#667085]">Retourreden</span>
        <p className="inter-semibold text-sm text-[#07115a]">Maat te klein</p>
      </div>
      <button type="button" className="rounded-[15px] bg-[#1a5ee5] py-3 inter-semibold text-sm text-white">Retourlabel aanmaken</button>
    </div>
  </div>
)

const LabelPreview = () => (
  <div className="mt-3 rounded-[18px] bg-white p-3 shadow-[0_14px_34px_rgba(7,17,90,0.08)] ring-1 ring-[#e5eef8] sm:mt-5 sm:rounded-[22px] sm:p-5">
    <div className="flex items-start justify-between border-b border-[#e8eef8] pb-4">
      <div>
        <p className="text-[0.68rem] inter-semibold uppercase tracking-[0.14em] text-[#728097]">Verzendlabel</p>
        <p className="mt-1 inter-semibold text-lg text-[#07115a] sm:text-xl">DHL Parcel</p>
      </div>
      <img src="/sendwise-icon-blauw.png" alt="" className="h-10 w-10 rounded-[12px] bg-[#eef5ff] p-2 sm:h-12 sm:w-12" />
    </div>
    <div className="mt-4 grid grid-cols-[1fr_0.72fr] gap-3 sm:mt-5 sm:grid-cols-[1fr_0.78fr] sm:gap-5">
      <div className="space-y-2.5">
        <div className="h-3 rounded-full bg-[#07115a]" />
        <div className="h-3 w-4/5 rounded-full bg-[#cdd9ee]" />
        <div className="h-3 w-2/3 rounded-full bg-[#cdd9ee]" />
        <div className="mt-4 rounded-[12px] bg-[#f8fbff] p-2.5 text-[0.64rem] inter-semibold text-[#667085] ring-1 ring-[#e5eef8] sm:mt-5 sm:p-3 sm:text-[0.7rem]">
          Retour? Ga naar retour.sendwise.nl
        </div>
      </div>
      <div className="grid gap-3">
        <div className="flex h-14 items-stretch justify-center gap-[2px] rounded-[12px] bg-white px-2 py-2 ring-1 ring-[#d9e4f2] sm:h-16 sm:gap-[3px] sm:px-3">
          {barcodeBars.map((width, index) => (
            <span
              key={`${width}-${index}`}
              className="block h-full bg-[#07115a]"
              style={{ width: `${width}px` }}
            />
          ))}
        </div>
        <div className="grid h-16 w-16 grid-cols-8 grid-rows-8 gap-[2px] rounded-[10px] bg-white p-2 ring-1 ring-[#d9e4f2] sm:h-20 sm:w-20">
          {qrBlocks.map((position, index) => (
            <span key={`${position}-${index}`} className={`${position} rounded-[1px] bg-[#07115a]`} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

const RulesPreview = () => (
  <div className="mt-3 rounded-[18px] bg-[#f8fbff] p-3 ring-1 ring-[#e5eef8] sm:mt-5 sm:rounded-[22px] sm:p-5">
    <div className="grid gap-2.5 sm:gap-3">
      {[
        ["Land is Nederland", "/sendwise-dhl.svg", "DHL"],
        ["Gewicht boven 20 kg", "/postnl-icoon.webp", "PostNL"],
      ].map(([condition, logo, carrier]) => (
        <div key={condition} className="grid grid-cols-[1fr_auto] items-center gap-2 rounded-[14px] bg-white p-2.5 ring-1 ring-[#e5eef8] sm:gap-3 sm:rounded-[16px] sm:p-3">
          <span className="inter-medium text-xs text-[#445066] sm:text-sm">{condition}</span>
          <span className="flex h-9 w-16 items-center justify-center rounded-[11px] bg-white px-2 ring-1 ring-[#d9e4f2] sm:h-10 sm:w-20 sm:rounded-[12px]">
            <img src={logo} alt={carrier} className="max-h-6 max-w-full object-contain sm:max-h-7" />
          </span>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center justify-between rounded-[14px] bg-[#eef5ff] px-3 py-2.5 sm:mt-5 sm:rounded-[16px] sm:px-4 sm:py-3">
      <span className="inter-semibold text-sm text-[#07115a]">Regelset actief</span>
      <FiCheck className="h-5 w-5 text-[#1a5ee5]" aria-hidden="true" />
    </div>
  </div>
)

const ScenePreview = ({ active }) => {
  if (active === "tracking") return <TrackingPreview />
  if (active === "returns") return <ReturnsPreview />
  if (active === "label") return <LabelPreview />
  return <RulesPreview />
}

const ModernCursor = () => (
  <div className="relative h-8 w-8">
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 drop-shadow-[0_10px_18px_rgba(7,17,90,0.18)]"
      aria-hidden="true"
    >
      <path
        d="M7.5 4.8L24.7 17.6C25.5 18.2 25.2 19.5 24.2 19.7L16.4 21.1L12.8 28.1C12.3 29 11 28.8 10.8 27.8L7.5 4.8Z"
        fill="white"
      />
      <path
        d="M7.5 4.8L24.7 17.6C25.5 18.2 25.2 19.5 24.2 19.7L16.4 21.1L12.8 28.1C12.3 29 11 28.8 10.8 27.8L7.5 4.8Z"
        stroke="#07115A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

const PlatformAutomationAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = scenes[activeIndex]

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % scenes.length)
    }, 4700)

    return () => window.clearTimeout(timer)
  }, [activeIndex])

  return (
    <div className="relative h-full overflow-hidden rounded-[20px] bg-[#f4f8ff] p-2 sm:rounded-[24px] sm:p-3">
      <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
        {scenes.map((scene, index) => (
          <SceneButton key={scene.key} scene={scene} active={index === activeIndex} onClick={() => setActiveIndex(index)} />
        ))}
      </div>

      <div key={active.key} className="relative h-[calc(100%-46px)] min-h-[252px] animate-[sceneFade_460ms_cubic-bezier(0.16,1,0.3,1)] sm:h-[calc(100%-48px)] sm:min-h-[260px]">
        <AppShell>
          <SceneIntro scene={active} />
          <ScenePreview active={active.key} />
        </AppShell>
      </div>

      <div className={`pointer-events-none absolute ${active.cursor} z-30 hidden transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:block`}>
        <ModernCursor />
      </div>

      <style>{`
        @keyframes sceneFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default PlatformAutomationAnimation
