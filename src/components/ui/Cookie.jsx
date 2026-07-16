import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiSettings, FiX } from "react-icons/fi"
import {
  getStoredConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
  saveConsent,
} from "../../lib/consent"

const defaultPreferences = {
  analytics: false,
  marketing: false,
}

const CookieToggle = ({ checked, description, disabled = false, label, onChange }) => (
  <label className="flex cursor-pointer items-start justify-between gap-5 border-b border-slate-200 py-5 last:border-b-0">
    <span>
      <span className="block inter-semibold text-[0.95rem] text-[#07115a]">{label}</span>
      <span className="mt-1 block inter-medium text-sm leading-6 text-slate-600">
        {description}
      </span>
    </span>
    <span className="relative mt-0.5 shrink-0">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
      />
      <span className="block h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-[#1a5ee5] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#1a5ee5] peer-disabled:opacity-60" />
      <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
    </span>
  </label>
)

const Cookie = () => {
  const [storedConsent, setStoredConsent] = useState(() => getStoredConsent())
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState(() => {
    const existingConsent = getStoredConsent()
    return existingConsent || defaultPreferences
  })

  useEffect(() => {
    const openPreferences = () => {
      setPreferences(getStoredConsent() || defaultPreferences)
      setShowPreferences(true)
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openPreferences)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openPreferences)
  }, [])

  const chooseConsent = (nextPreferences) => {
    const savedConsent = saveConsent(nextPreferences)
    setStoredConsent(savedConsent)
    setPreferences(savedConsent)
    setShowPreferences(false)
  }

  const openPreferences = () => {
    setPreferences(storedConsent || defaultPreferences)
    setShowPreferences(true)
  }

  return (
    <>
      {!storedConsent && !showPreferences && (
        <section
          className="fixed inset-x-3 bottom-3 z-[100] rounded-[18px] border border-white/20 bg-[#07115a] p-4 text-white shadow-[0_18px_55px_rgba(7,17,90,0.28)] sm:bottom-5 sm:left-auto sm:right-5 sm:w-[470px]"
          aria-label="Cookiekeuze"
        >
          <div>
            <h2 className="inter-semibold text-base">Cookies</h2>
            <p className="mt-1.5 inter-medium text-[0.82rem] leading-5 text-blue-100">
              We gebruiken cookies om de website te verbeteren en campagnes te meten.{" "}
              <Link className="underline underline-offset-2 hover:text-white" to="/privacy">
                Meer informatie
              </Link>
              {" · "}
              <button
                type="button"
                onClick={openPreferences}
                className="underline underline-offset-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Voorkeuren
              </button>
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => chooseConsent(defaultPreferences)}
                className="rounded-full border border-white/55 px-3 py-2.5 inter-semibold text-xs text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm"
              >
                Alleen noodzakelijk
              </button>
              <button
                type="button"
                onClick={() => chooseConsent({ analytics: true, marketing: true })}
                className="rounded-full bg-white px-3 py-2.5 inter-semibold text-xs text-[#07115a] transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm"
              >
                Cookies accepteren
              </button>
            </div>
          </div>
        </section>
      )}

      {storedConsent && !showPreferences && (
        <button
          type="button"
          onClick={openPreferences}
          className="fixed bottom-3 left-3 z-[90] flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 inter-semibold text-xs text-[#07115a] shadow-[0_10px_30px_rgba(15,23,42,0.14)] transition hover:border-blue-200 hover:text-[#1a5ee5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a5ee5] sm:bottom-5 sm:left-5"
        >
          <FiSettings aria-hidden="true" />
          Cookie-instellingen
        </button>
      )}

      {showPreferences && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center bg-slate-950/45 p-3 backdrop-blur-sm sm:items-center sm:p-6">
          <section
            className="relative max-h-[calc(100vh-24px)] w-full max-w-xl overflow-y-auto rounded-[24px] bg-white p-5 shadow-[0_28px_90px_rgba(7,17,90,0.30)] sm:max-h-[calc(100vh-48px)] sm:p-7"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
          >
            {storedConsent && (
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a5ee5]"
                aria-label="Cookie-instellingen sluiten"
              >
                <FiX className="h-5 w-5" aria-hidden="true" />
              </button>
            )}

            <div className="pr-9">
              <p className="inter-semibold text-sm text-[#1a5ee5]">Cookievoorkeuren</p>
              <h2 id="cookie-settings-title" className="mt-1 inter-semibold text-2xl text-[#07115a]">
                Kies wat bij jou past
              </h2>
              <p className="mt-3 inter-medium text-sm leading-6 text-slate-600">
                Noodzakelijke opslag staat altijd aan. Analytics en marketing gebruiken we
                alleen wanneer jij daarvoor kiest.
              </p>
            </div>

            <div className="mt-5 border-y border-slate-200">
              <CookieToggle
                checked
                disabled
                label="Noodzakelijk"
                description="Nodig om je cookievoorkeur te bewaren en de website betrouwbaar te laten werken."
              />
              <CookieToggle
                checked={Boolean(preferences.analytics)}
                onChange={(analytics) => setPreferences((current) => ({ ...current, analytics }))}
                label="Analytics"
                description="Microsoft Clarity laat ons via gebruiksinzichten, heatmaps en sessie-opnamen zien waar de website beter kan."
              />
              <CookieToggle
                checked={Boolean(preferences.marketing)}
                onChange={(marketing) => setPreferences((current) => ({ ...current, marketing }))}
                label="Marketing"
                description="Helpt ons advertentiecampagnes, waaronder Meta-campagnes, te meten en verbeteren."
              />
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => chooseConsent(preferences)}
                className="rounded-full border border-[#1a5ee5] px-5 py-3 inter-semibold text-sm text-[#1a5ee5] transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a5ee5]"
              >
                Selectie opslaan
              </button>
              <button
                type="button"
                onClick={() => chooseConsent({ analytics: true, marketing: true })}
                className="rounded-full bg-[#1a5ee5] px-5 py-3 inter-semibold text-sm text-white transition hover:bg-[#144fc6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a5ee5]"
              >
                Alles accepteren
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default Cookie
