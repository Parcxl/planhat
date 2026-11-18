import { getStoredConsent } from "./consent"

const pixelId = "1522034239328606"
const trackedRequests = new Set()
let initialized = false
let campaignConfirmationPending = false

const getPixel = (consent) => {
  if (!consent?.marketing) return null

  if (!window.fbq) {
    const fbq = function () {
      if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments)
      else fbq.queue.push(arguments)
    }
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = "2.0"
    // Route changes are tracked explicitly, including the one-time campaign confirmation.
    fbq.disablePushState = true
    fbq.queue = []
    window.fbq = fbq
    window._fbq ||= fbq

    const script = document.createElement("script")
    script.async = true
    script.src = "https://connect.facebook.net/en_US/fbevents.js"
    document.head.appendChild(script)
  }

  if (!initialized) {
    window.fbq("consent", "grant")
    window.fbq("init", pixelId)
    initialized = true
  }

  return window.fbq
}

export const trackMetaPageView = (consent) => {
  const fbq = getPixel(consent)
  if (!fbq) return false

  fbq("trackSingle", pixelId, "PageView")
  return true
}

export const trackCampaignConfirmation = () => {
  if (!campaignConfirmationPending) return

  // The active ad set still uses a URL-based conversion on the confirmation page.
  campaignConfirmationPending = false
  trackMetaPageView(getStoredConsent())
}

export const trackAccountLead = (requestId, form) => {
  if (!requestId) return

  const eventId = `accountaanvraag-${requestId}`
  if (trackedRequests.has(eventId)) return

  try {
    const fbq = getPixel(getStoredConsent())
    if (!fbq) return

    fbq("trackSingle", pixelId, "Lead", { content_name: form }, { eventID: eventId })
    trackedRequests.add(eventId)
    if (form === "verzend-slimmer") campaignConfirmationPending = true
  } catch (error) {
    console.warn("Meta Pixel kon het Lead-event niet versturen.", error)
  }
}
