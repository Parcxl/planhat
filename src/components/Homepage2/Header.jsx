import { useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion as Motion } from "framer-motion"
import {
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiHelpCircle,
  FiLayers,
  FiMenu,
  FiPackage,
  FiShoppingBag,
  FiTruck,
  FiX,
} from "react-icons/fi"

const navGroups = [
  {
    label: "Oplossingen",
    items: [
      {
        title: "Sendwise Platform",
        text: "Labels, tracking en verzendregels in een overzicht.",
        to: "/oplossingen/sendwise",
        visual: "platform",
      },
      {
        title: "Sendwise PRO",
        text: "Fulfilmentsoftware voor pick, pack en voorraad.",
        to: "/oplossingen/pro",
        visual: "warehouse",
      },
      {
        title: "Sendwise CONNECT",
        text: "Een pickup, automatisch de beste vervoerder per land.",
        to: "/oplossingen/connect",
        visual: "connect",
      },
    ],
  },
  {
    label: "Voor wie",
    items: [
      {
        title: "Webshops",
        text: "Scherpe tarieven en minder handwerk bij elke order.",
        to: "/voor-webshops",
        visual: "webshop",
      },
      {
        title: "Fulfilmentcenters",
        text: "Een schaalbare verzendlaag voor meerdere klanten.",
        to: "/voor-fulfilmentcenters",
        visual: "fulfilment",
      },
      {
        title: "Integraties",
        text: "Koppel WooCommerce, CCV Shop, Goedgepickt en meer.",
        to: "/integraties",
        visual: "integrations",
      },
    ],
  },
]

const directLinks = [
  { label: "Prijzen", to: "/prijzen" },
  { label: "Support", to: "/contact" },
]

const trustItems = ["Pakketten vanaf €3,50", "Geen contracten", "Nederlandse support"]

const utilityLinks = [
  { label: "Kennisbank", to: "/kennisbank" },
  { label: "Werken bij", to: "/werken-bij" },
]

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: "easeOut",
      staggerChildren: 0.09,
    },
  },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.22, ease: "easeIn" } },
}

const dropdownItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.34, ease: "easeOut" } },
}

const CardboardBoxVisual = ({ className = "" }) => (
  <div className={`relative h-20 w-28 ${className}`} aria-hidden="true">
    <div className="absolute left-2 top-4 h-12 w-20 rotate-[-10deg] rounded-[5px] bg-[#c99f5d] shadow-[0_18px_26px_rgba(98,75,42,0.20)]">
      <div className="absolute inset-x-2 top-2 h-2 rounded-sm bg-[#e6c385]/65" />
      <div className="absolute left-3 top-5 h-2 w-8 rounded-sm bg-white/75" />
      <div className="absolute bottom-2 right-3 flex gap-1">
        <span className="h-3 w-3 rounded-[2px] border border-[#5f5145]/65" />
        <span className="h-3 w-3 rounded-[2px] border border-[#5f5145]/65" />
      </div>
    </div>
    <div className="absolute right-3 top-6 h-12 w-5 rotate-[-10deg] skew-y-[26deg] rounded-r-[5px] bg-[#b88947]" />
    <div className="absolute left-5 top-1 h-5 w-14 rotate-[-10deg] skew-x-[-28deg] rounded-t-[5px] bg-[#dfbd78]" />
  </div>
)

const WarehouseVisual = ({ className = "" }) => (
  <div className={`relative h-20 w-28 ${className}`} aria-hidden="true">
    <div className="absolute bottom-3 left-2 h-10 w-24 rounded-[6px] bg-[#d4dee9] shadow-[0_18px_26px_rgba(44,62,80,0.18)]">
      <div className="absolute bottom-0 left-4 h-8 w-4 rounded-t bg-[#9baabe]" />
      <div className="absolute bottom-0 left-11 h-8 w-4 rounded-t bg-[#9baabe]" />
      <div className="absolute bottom-0 right-4 h-8 w-4 rounded-t bg-[#9baabe]" />
    </div>
    <div className="absolute left-1 top-4 h-5 w-[104px] rotate-[-7deg] rounded-[4px] bg-[#f0f4f8]" />
    <div className="absolute bottom-2 right-4 h-7 w-9 rotate-[8deg] rounded-[4px] bg-[#c99f5d]" />
    <div className="absolute bottom-5 right-1 h-5 w-8 rotate-[-8deg] rounded-[4px] bg-[#dfbd78]" />
  </div>
)

const IntegrationVisual = ({ className = "" }) => (
  <div className={`relative h-20 w-28 ${className}`} aria-hidden="true">
    <div className="absolute left-4 top-5 h-12 w-12 rotate-[-10deg] rounded-[12px] bg-[#dfeaff] shadow-[0_18px_26px_rgba(26,94,229,0.16)]">
      <div className="absolute left-4 top-4 h-4 w-4 rounded-full bg-[#1a5ee5]" />
    </div>
    <div className="absolute right-4 top-2 h-11 w-11 rotate-[11deg] rounded-[12px] bg-[#c99f5d] shadow-[0_16px_24px_rgba(98,75,42,0.16)]">
      <div className="absolute inset-x-2 top-2 h-1.5 rounded bg-[#e6c385]/75" />
    </div>
    <div className="absolute bottom-2 right-10 h-9 w-9 rotate-[4deg] rounded-[11px] bg-white shadow-[0_12px_20px_rgba(15,23,42,0.12)]">
      <div className="absolute left-3 top-3 h-3 w-3 rounded bg-[#8fd36a]" />
    </div>
    <div className="absolute left-[48px] top-[33px] h-[2px] w-10 rotate-[-18deg] bg-[#9ab3db]" />
    <div className="absolute left-[52px] top-[47px] h-[2px] w-8 rotate-[20deg] bg-[#9ab3db]" />
  </div>
)

const ConnectVisual = ({ className = "" }) => (
  <div className={`relative h-20 w-28 ${className}`} aria-hidden="true">
    <CardboardBoxVisual className="absolute -left-1 -top-1 scale-[0.72]" />
    <div className="absolute bottom-3 right-2 h-9 w-16 rounded-[8px] bg-[#1a5ee5] shadow-[0_14px_24px_rgba(26,94,229,0.22)]">
      <div className="absolute -left-2 top-2 h-5 w-7 rounded bg-[#dfeaff]" />
      <span className="absolute bottom-[-5px] left-3 h-3 w-3 rounded-full bg-[#07111f]" />
      <span className="absolute bottom-[-5px] right-3 h-3 w-3 rounded-full bg-[#07111f]" />
    </div>
  </div>
)

const dropdownIconMap = {
  platform: FiLayers,
  warehouse: FiPackage,
  connect: FiTruck,
  webshop: FiShoppingBag,
  fulfilment: FiPackage,
  integrations: FiLayers,
}

const Homepage2Header = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMenus = () => {
    setActiveMenu(null)
    setMobileOpen(false)
  }

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-[#dfe5ee] bg-[#f7f9fc]"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="hidden bg-[#2b3442] text-white lg:block">
        <div className="mx-auto flex h-10 w-full max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-7">
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 inter-medium text-xs text-white/78">
                <FiCheck className="text-[#8fd36a]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5">
            {utilityLinks.map((link) => (
              <Link key={link.label} to={link.to} className="inter-medium text-xs text-white/72 transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <span className="flex h-7 w-7 flex-col overflow-hidden rounded-[8px] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]" aria-label="Nederland">
              <span className="block flex-1 bg-[#ae1c28]" />
              <span className="block flex-1 bg-white" />
              <span className="block flex-1 bg-[#21468b]" />
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" aria-label="Sendwise homepage" onClick={closeMenus} className="shrink-0">
          <img src="/sendwise-tekst-blauw.png" alt="Sendwise" className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center rounded-[18px] border border-[#dce6f6] bg-[#edf3fb] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] lg:flex">
          {navGroups.map((group) => (
            <div key={group.label} className="relative">
              <button
                type="button"
                onMouseEnter={() => setActiveMenu(group.label)}
                onFocus={() => setActiveMenu(group.label)}
                onClick={() => setActiveMenu(activeMenu === group.label ? null : group.label)}
                className={`inline-flex h-11 items-center gap-1.5 rounded-[14px] px-5 inter-semibold text-sm transition ${
                  activeMenu === group.label ? "bg-white text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.10)]" : "text-[#1f2937] hover:bg-white/80 hover:text-[#1a5ee5]"
                }`}
                aria-expanded={activeMenu === group.label}
              >
                {group.label}
                <FiChevronDown className={`transition ${activeMenu === group.label ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>

              <AnimatePresence>
                {activeMenu === group.label && (
                  <Motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-0 top-[calc(100%+16px)] w-[285px]"
                  >
                    <div className="grid gap-1 rounded-[18px] border border-[#dfe7f3] bg-white p-2 shadow-[0_22px_55px_rgba(7,17,31,0.12)]">
                      {group.items.map(({ title, to, visual }) => {
                        const DropdownIcon = dropdownIconMap[visual] || FiArrowRight
                        return (
                          <Motion.div key={title} variants={dropdownItemVariants}>
                            <Link
                              to={to}
                              onClick={closeMenus}
                            className="group flex min-h-[50px] items-center gap-3 rounded-[12px] px-3 py-2 transition hover:bg-[#f4f8ff]"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#eef5ff] text-[#1a5ee5] ring-1 ring-[#dce9ff] transition group-hover:bg-[#1a5ee5] group-hover:text-white group-hover:ring-[#1a5ee5]">
                              <DropdownIcon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="min-w-0 flex-1 truncate inter-semibold text-sm text-[#07115a]">
                              {title}
                            </span>
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#9aa4b2] opacity-0 transition group-hover:translate-x-0.5 group-hover:text-[#1a5ee5] group-hover:opacity-100">
                              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                            </span>
                          </Link>
                          </Motion.div>
                        )
                      })}
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {directLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onMouseEnter={() => setActiveMenu(null)}
              onFocus={() => setActiveMenu(null)}
              onClick={closeMenus}
              className="inline-flex h-11 items-center rounded-[14px] px-5 inter-semibold text-sm text-[#1f2937] transition hover:bg-white/80 hover:text-[#1a5ee5]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://app.sendwise.nl" className="rounded-[14px] border border-[#d8dee8] px-5 py-3 inter-bold text-sm text-[#1f2937] transition hover:border-[#b9c4d3] hover:bg-[#f8fafc]">
            Inloggen
          </a>
          <Link to="/start-met-sendwise" className="inline-flex items-center gap-2 rounded-[14px] bg-[#1a5ee5] px-5 py-3 inter-bold text-sm text-white shadow-[0_14px_28px_rgba(26,94,229,0.22)] transition hover:bg-[#164fc2]">
            Registreren
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8dee8] text-[#0d1321] lg:hidden"
          aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#e3e8f0] bg-white lg:hidden">
          <div className="mx-auto w-full max-w-7xl px-6 py-5">
            <div className="mb-5 grid gap-2">
              {trustItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 inter-semibold text-sm text-[#445066]">
                  <FiCheck className="text-[#1a5ee5]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 inter-bold text-xs uppercase tracking-[0.12em] text-[#7b8797]">{group.label}</p>
                  <div className="grid gap-1">
                    {group.items.map(({ title, to }) => (
                      <Link key={title} to={to} onClick={closeMenus} className="flex items-center justify-between gap-3 rounded-2xl px-3 py-3 inter-semibold text-[#111827] transition hover:bg-[#f4f7fb]">
                        <span>{title}</span>
                        <FiArrowRight className="text-[#9aa4b2]" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="grid gap-1">
                {directLinks.map((link) => (
                  <Link key={link.label} to={link.to} onClick={closeMenus} className="flex items-center gap-3 rounded-2xl px-3 py-3 inter-semibold text-[#111827] transition hover:bg-[#f4f7fb]">
                    <FiHelpCircle className="text-[#1a5ee5]" aria-hidden="true" />
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="grid gap-3 border-t border-[#e3e8f0] pt-5">
                <a href="https://app.sendwise.nl" className="inline-flex items-center justify-center rounded-full border border-[#d8dee8] px-5 py-3 inter-bold text-sm text-[#1f2937]">
                  Inloggen
                </a>
                <Link to="/start-met-sendwise" onClick={closeMenus} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a5ee5] px-5 py-3 inter-bold text-sm text-white">
                  Registreren
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Homepage2Header
