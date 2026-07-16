export const CONSENT_STORAGE_KEY = "sendwise_cookie_consent_v1"
export const CONSENT_CHANGE_EVENT = "sendwise:consent-changed"
export const OPEN_COOKIE_SETTINGS_EVENT = "sendwise:open-cookie-settings"

const normalizeConsent = (value) => ({
  version: 1,
  necessary: true,
  analytics: Boolean(value?.analytics),
  marketing: Boolean(value?.marketing),
  updatedAt: value?.updatedAt || new Date().toISOString(),
})

export const getStoredConsent = () => {
  if (typeof window === "undefined") return null

  try {
    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!storedValue) return null

    const parsedValue = JSON.parse(storedValue)
    if (parsedValue?.version !== 1) return null

    return normalizeConsent(parsedValue)
  } catch {
    return null
  }
}

export const applyConsent = (consent) => {
  if (typeof window === "undefined") return

  const normalizedConsent = normalizeConsent(consent)

  if (typeof window.clarity === "function") {
    window.clarity("consentv2", {
      ad_Storage: normalizedConsent.marketing ? "granted" : "denied",
      analytics_Storage: normalizedConsent.analytics ? "granted" : "denied",
    })
  }

  if (typeof window.fbq === "function") {
    window.fbq("consent", normalizedConsent.marketing ? "grant" : "revoke")
  }
}

export const saveConsent = (consent) => {
  const normalizedConsent = normalizeConsent({
    ...consent,
    updatedAt: new Date().toISOString(),
  })

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(normalizedConsent))
  } catch {
    // Consent is still applied for the current page if browser storage is unavailable.
  }

  applyConsent(normalizedConsent)
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, { detail: normalizedConsent }),
  )

  return normalizedConsent
}
