import { trackAccountLead } from "./metaPixel"

export const submitAccountRequest = async (payload, form) => {
  const response = await fetch("/api/accountaanvraag", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  const result = await response.json().catch(() => null)

  if (!response.ok || result?.success !== true) {
    throw new Error(result?.error || result?.message || "Er ging iets mis bij het versturen.")
  }

  trackAccountLead(result.data?.id, form)
}
