/**
 * Vercel serverless proxy: POST /api/accountaanvraag → app.sendwise.nl/api/accountaanvragen/create
 * Avoids CORS by keeping the request on the same origin (www.sendwise.nl).
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token =
    process.env.ACCOUNTANVRAAG_TOKEN ||
    process.env.VITE_ACCOUNTANVRAAG_TOKEN ||
    "parcxl-accountaanvragen-2025";

  try {
    const body = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});
    const response = await fetch("https://app.sendwise.nl/api/accountaanvragen/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body,
    });

    const data = await response.json().catch(() => ({}));
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Accountaanvraag proxy error:", err);
    res.status(502).json({
      success: false,
      error: "Er ging iets mis bij het versturen. Probeer het later opnieuw.",
    });
  }
}
