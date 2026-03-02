import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiClock, FiUser, FiCalendar, FiCheckCircle, FiClipboard } from "react-icons/fi"

const shipmentsUrl = "https://api.sendwise.nl/shipments"
const shippingMethodsUrl = "https://api.sendwise.nl/shipping-methods"

const MetaItem = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
    <Icon size={16} />
    <span>{children}</span>
  </div>
)

const CopyButton = ({ value, id }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // stille fallback; we tonen geen aparte error in de UI
      // eslint-disable-next-line no-console
      console.error("Clipboard copy failed", e)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm font-medium transition-colors ${
        copied
          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
          : "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
      }`}
      aria-label={copied ? "URL gekopieerd" : `Kopieer URL ${id}`}
    >
      {copied ? (
        <>
          <FiCheckCircle size={14} />
          <span>Gekopieerd</span>
        </>
      ) : (
        <>
          <FiClipboard size={14} />
          <span>Kopieer URL</span>
        </>
      )}
    </button>
  )
}

export default function BlogGoedgepickt() {
  const [showSignupModal, setShowSignupModal] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="w-full pt-16 sm:pt-20 lg:pt-24 pb-16">
        <div className="w-[95%] lg:w-[80%] mx-auto">
          {/* Hero */}
          <div className="mb-10 sm:mb-12 lg:mb-14 grid gap-8 lg:grid-cols-[3fr,2fr] items-center">
            <div className="space-y-5 sm:space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs sm:text-sm font-medium text-blue-700">
                Integratie · Goedgepickt
              </p>
              <h1 className="inter-medium text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-tight text-slate-900">
                Verbind <span className="text-[#1a5ee5]">Sendwise</span> met{" "}
                <span className="text-slate-900">Goedgepickt</span>
              </h1>
              <p className="inter-medium text-[0.98rem] sm:text-[1.03rem] text-slate-700 max-w-xl">
                Koppel je Goedgepickt-omgeving met Sendwise via een API-key en maak zendingen direct
                vanuit Goedgepickt aan in Sendwise. In deze handleiding lopen we stap-voor-stap door
                de complete setup heen.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-sm">
                <MetaItem icon={FiUser}>Sendwise Team</MetaItem>
                <MetaItem icon={FiCalendar}>27 januari 2025</MetaItem>
                <MetaItem icon={FiClock}>± 6 min lezen</MetaItem>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSignupModal(true)}
                  className="group flex items-center gap-2 rounded-full bg-[#1a5ee5] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#134ac2] transition-colors"
                >
                  Start met Sendwise
                </button>
              </div>
            </div>

            <div className="relative hidden sm:block">
              <div className="relative rounded-3xl border border-slate-100 bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.16)] overflow-hidden">
                <img
                  src="/sendwise-hero-picture.png"
                  alt="Integratie tussen Sendwise en Goedgepickt"
                  className="h-56 w-full object-cover"
                />
                <div className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
                      <img
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/goedgepickt%20sendwise%20logo.png"
                        alt="Goedgepickt"
                        className="h-7 w-7 object-contain"
                      />
                    </div>
                    <div className="h-px w-6 bg-slate-200" />
                    <div className="h-10 w-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
                      <img
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/logos/Sendwise%20zonder%20connect.png"
                        alt="Sendwise"
                        className="h-7 w-7 object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 text-right">
                    Eén koppeling tussen je fulfilmentproces en slimme verzending.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inleiding */}
          <div className="mb-10 lg:mb-12 rounded-2xl border border-slate-100 bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm">
            <p className="text-slate-700 text-[0.98rem] leading-relaxed mb-4">
              In deze handleiding lees je hoe je Goedgepickt koppelt met Sendwise. De koppeling werkt
              via een API-key en zorgt ervoor dat je vanuit Goedgepickt zendingen kunt aanmaken in
              Sendwise.
            </p>
            <p className="text-slate-700 text-[0.98rem] leading-relaxed">
              We laten stap-voor-stap zien waar je de API-key in Sendwise vindt, hoe je deze toevoegt
              in Goedgepickt en hoe je controleert dat de verbinding actief is. Zodra dit is
              ingesteld, kun je Sendwise als vervoerder gebruiken binnen je bestaande
              Goedgepickt-workflow.
            </p>
          </div>

          {/* Stappenplan */}
          <div className="space-y-10 sm:space-y-12">
            {/* Stap 1 */}
            <section className="rounded-2xl border border-slate-100 bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm">
              <h2 className="inter-medium text-[1.4rem] sm:text-[1.6rem] text-slate-900 mb-4">
                Stap 1 — Navigeer naar verzendproviders (in Goedgepickt)
              </h2>
              <p className="text-slate-700 text-[0.98rem] mb-4">
                Begin in Goedgepickt door naar de instellingen te gaan waar je de verzendprovider kunt
                toevoegen.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[0.98rem] text-slate-700">
                <li>Ga in de sidebar links naar <strong>Instellingen</strong>.</li>
                <li>Klik op de <strong>Verzendproviders</strong>-card.</li>
                <li>Klik op <strong>Koppel verzendprovider</strong>.</li>
              </ul>
              <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs text-slate-600">
                In de oorspronkelijke handleiding wordt hier een screenshot getoond met een pijl naar
                de knop &ldquo;Koppel verzendprovider&rdquo;.
              </div>
            </section>

            {/* Stap 2 */}
            <section className="rounded-2xl border border-slate-100 bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm">
              <h2 className="inter-medium text-[1.4rem] sm:text-[1.6rem] text-slate-900 mb-4">
                Stap 2 — Selecteer &ldquo;Custom Shipping Provider&rdquo;
              </h2>
              <p className="text-slate-700 text-[0.98rem] mb-4">
                Kies in de modal <strong>&ldquo;Verzendprovider toevoegen&rdquo;</strong> voor de optie{" "}
                <strong>Custom Shipping Provider</strong> om Sendwise handmatig te configureren.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[0.98rem] text-slate-700">
                <li>Klik op <strong>Custom Shipping Provider</strong>.</li>
                <li>Onderaan verschijnt een formulier met <strong>16 invulvelden</strong>.</li>
              </ul>
              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-3 text-xs text-slate-600">
                In de oorspronkelijke handleiding wordt &ldquo;Custom Shipping Provider&rdquo; in een
                blauwe rechthoek gemarkeerd met een label.
              </div>
            </section>

            {/* Stap 3 */}
            <section className="rounded-2xl border border-slate-100 bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm">
              <h2 className="inter-medium text-[1.4rem] sm:text-[1.6rem] text-slate-900 mb-4">
                Stap 3 — API key ophalen in Sendwise
              </h2>
              <p className="text-slate-700 text-[0.98rem] mb-4">
                Voordat je het formulier in Goedgepickt invult, heb je een API key nodig uit je
                Sendwise-dashboard.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[0.98rem] text-slate-700 mb-4">
                <li>Ga naar het <strong>Sendwise-dashboard</strong>.</li>
                <li>Klik in de sidebar op <strong>Integraties</strong>.</li>
                <li>Klik rechtsboven op <strong>Koppelen</strong>.</li>
                <li>Zoek en klik op de <strong>Goedgepickt-integratie</strong>.</li>
              </ul>
              <p className="text-slate-700 text-[0.98rem] mb-3">
                In de Goedgepickt setup-modal in Sendwise:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[0.98rem] text-slate-700">
                <li>
                  <strong>Integratie naam:</strong> kies een herkenbare naam, bijvoorbeeld
                  &ldquo;Goedgepickt Productie&rdquo;.
                </li>
                <li>
                  <strong>API key:</strong> klik op <strong>Generate</strong> om een nieuwe API key te
                  genereren.
                </li>
                <li>
                  <span className="font-semibold text-red-600">Belangrijk:</span> bewaar deze API key op
                  een veilige plek.
                </li>
                <li>Klik op <strong>Integratie opslaan</strong>.</li>
              </ul>
              <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 text-xs text-slate-600">
                In de originele beelden worden de velden gemarkeerd met knipperende blauwe puntjes om
                duidelijk te maken wat je moet invullen.
              </div>
            </section>

            {/* Stap 4 */}
            <section className="rounded-2xl border border-slate-100 bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm">
              <h2 className="inter-medium text-[1.4rem] sm:text-[1.6rem] text-slate-900 mb-4">
                Stap 4 — Formulier invullen in Goedgepickt
              </h2>
              <p className="text-slate-700 text-[0.98rem] mb-4">
                Vul nu alle velden in het formulier in Goedgepickt in. Hieronder zie je de aanbevolen
                waarden per veld.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-100 bg-slate-50/60">
                <table className="min-w-full text-left text-[0.9rem]">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-2 font-semibold text-slate-900">Veld</th>
                      <th className="px-4 py-2 font-semibold text-slate-900">Waarde</th>
                      <th className="px-4 py-2 font-semibold text-slate-900">Opmerking</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-2 align-top font-medium text-slate-900">URL</td>
                      <td className="px-4 py-2 align-top">
                        <div className="flex flex-wrap items-center gap-2">
                          <code className="rounded bg-white px-2 py-1 text-[0.8rem] text-slate-800 border border-slate-200">
                            {shipmentsUrl}
                          </code>
                          <CopyButton value={shipmentsUrl} id="shipments" />
                        </div>
                      </td>
                      <td className="px-4 py-2 align-top text-slate-700">Sendwise endpoint URL</td>
                    </tr>
                    <tr className="bg-white/60">
                      <td className="px-4 py-2 align-top font-medium text-slate-900">API autorisatie</td>
                      <td className="px-4 py-2 align-top text-slate-500 italic">Leeg laten</td>
                      <td className="px-4 py-2 align-top text-slate-700">Niet invullen</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 align-top font-medium text-slate-900">API geheim</td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        API key uit Sendwise
                      </td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        De API key die je in stap 3 hebt gegenereerd
                      </td>
                    </tr>
                    <tr className="bg-white/60">
                      <td className="px-4 py-2 align-top font-medium text-slate-900">Naam afzender</td>
                      <td className="px-4 py-2 align-top text-slate-700">Je bedrijfsnaam</td>
                      <td className="px-4 py-2 align-top text-slate-700">Komt op het label te staan</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 align-top font-medium text-slate-900">Adres</td>
                      <td className="px-4 py-2 align-top text-slate-700">Afzender-straat</td>
                      <td className="px-4 py-2 align-top text-slate-700">Straatnaam zonder nummer</td>
                    </tr>
                    <tr className="bg-white/60">
                      <td className="px-4 py-2 align-top font-medium text-slate-900">
                        Huisnummer afzender
                      </td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        Huisnummer + toevoeging (bijv. &ldquo;123A&rdquo;)
                      </td>
                      <td className="px-4 py-2 align-top text-slate-700">Combinatie met toevoeging</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 align-top font-medium text-slate-900">Postcode</td>
                      <td className="px-4 py-2 align-top text-slate-700">Afzend-postcode</td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        Bijvoorbeeld <code>1234AB</code>
                      </td>
                    </tr>
                    <tr className="bg-white/60">
                      <td className="px-4 py-2 align-top font-medium text-slate-900">Plaats</td>
                      <td className="px-4 py-2 align-top text-slate-700">Plaatsnaam</td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        Stad waar je gevestigd bent
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 align-top font-medium text-slate-900">Landcode</td>
                      <td className="px-4 py-2 align-top text-slate-700">Nederland</td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        Sendwise doet alleen zendingen vanuit NL
                      </td>
                    </tr>
                    <tr className="bg-white/60">
                      <td className="px-4 py-2 align-top font-medium text-slate-900">E-mail</td>
                      <td className="px-4 py-2 align-top text-slate-700">Je e-mailadres</td>
                      <td className="px-4 py-2 align-top text-slate-700">Voor notificaties</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 align-top font-medium text-slate-900">Verzendmethode</td>
                      <td className="px-4 py-2 align-top text-slate-500 italic">Leeg laten</td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        Wordt later via dynamische methoden ingesteld
                      </td>
                    </tr>
                    <tr className="bg-white/60">
                      <td className="px-4 py-2 align-top font-medium text-slate-900">Servicepunten URL</td>
                      <td className="px-4 py-2 align-top text-slate-500 italic">Leeg laten</td>
                      <td className="px-4 py-2 align-top text-slate-700">Nog niet beschikbaar</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 align-top font-medium text-slate-900">
                        Voorvoegsel referentietekst
                      </td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        Eigen voorvoegsel, bijv. &ldquo;SW-&rdquo;
                      </td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        Zo worden referenties bijvoorbeeld <code>SW-12345</code>.
                      </td>
                    </tr>
                    <tr className="bg-white/60">
                      <td className="px-4 py-2 align-top font-medium text-slate-900">Naam</td>
                      <td className="px-4 py-2 align-top text-slate-700">Sendwise (of andere herkenbare naam)</td>
                      <td className="px-4 py-2 align-top text-slate-700">Naam van de verzendprovider</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 align-top font-medium text-slate-900">Actief</td>
                      <td className="px-4 py-2 align-top text-slate-700">Aangevinkt</td>
                      <td className="px-4 py-2 align-top text-slate-700">
                        Standaard al geselecteerd in Goedgepickt
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-[0.98rem] text-slate-700">
                Klaar met invullen? Klik dan op <strong>Verzendprovider koppelen</strong> om Sendwise
                als verzendprovider toe te voegen.
              </p>
            </section>

            {/* Stap 5 */}
            <section className="rounded-2xl border border-slate-100 bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm">
              <h2 className="inter-medium text-[1.4rem] sm:text-[1.6rem] text-slate-900 mb-4">
                Stap 5 — Verzendprovider bewerken &amp; dynamische verzendmethoden
              </h2>
              <p className="text-slate-700 text-[0.98rem] mb-4">
                Na het koppelen kom je op de pagina <strong>&ldquo;Verzendprovider bewerken&rdquo;</strong>.
                Hier stel je een aantal belangrijke voorkeuren in.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[0.98rem] text-slate-700 mb-4">
                <li>
                  <strong>Standaard non-EU pakketinhoud:</strong> kies{" "}
                  <strong>Commerciële goederen</strong>.
                </li>
                <li>
                  <strong>Producten zonder bestelregel-prijs:</strong> kies{" "}
                  <strong>Gebruik standaard bedrag van €1,00</strong>.
                </li>
              </ul>

              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs text-slate-600 mb-5">
                In de originele handleiding worden twee screenshots getoond (deel 1 en deel 2) van de
                pagina &ldquo;Verzendprovider bewerken&rdquo; waarin deze instellingen zichtbaar zijn.
              </div>

              <h3 className="font-semibold text-slate-900 mb-3">Dynamische verzendmethoden</h3>
              <p className="text-slate-700 text-[0.98rem] mb-3">
                Om automatisch alle verzendmethoden via Sendwise op te halen:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[0.98rem] text-slate-700 mb-4">
                <li>Ga naar het tabblad <strong>Verzendmethoden</strong>.</li>
                <li>
                  Zet het schuifje <strong>&ldquo;Dynamische verzendmethoden gebruiken&rdquo;</strong> aan.
                </li>
              </ul>
              <p className="text-slate-700 text-[0.98rem] mb-3">
                Vul vervolgens de URL voor dynamische verzendmethoden in:
              </p>
              <div className="flex flex-wrap items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/70 px-4 py-3">
                <code className="rounded bg-white px-2 py-1 text-[0.8rem] text-slate-800 border border-emerald-100 flex-1">
                  {shippingMethodsUrl}
                </code>
                <CopyButton value={shippingMethodsUrl} id="shipping-methods" />
              </div>
              <p className="mt-3 text-xs text-slate-600">
                Goedgepickt haalt hiermee automatisch alle beschikbare verzendmethodes via de
                Sendwise-API op, zodat je ze niet handmatig hoeft toe te voegen.
              </p>
            </section>

            {/* Stap 6 */}
            <section className="rounded-2xl border border-slate-100 bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm">
              <h2 className="inter-medium text-[1.4rem] sm:text-[1.6rem] text-slate-900 mb-4">
                Stap 6 — Webshop koppelen en opslaan
              </h2>
              <p className="text-slate-700 text-[0.98rem] mb-4">
                Als laatste stap koppel je Sendwise aan je webshop en sla je alle instellingen op.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[0.98rem] text-slate-700 mb-4">
                <li>Ga naar het tabblad <strong>Webshop</strong>.</li>
                <li>Klik op <strong>Koppelen aan webshop</strong>.</li>
                <li>Voeg de webshop toe die je wilt koppelen.</li>
                <li>Klik op <strong>Opslaan</strong>.</li>
              </ul>
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/80 p-4">
                <p className="text-[0.98rem] text-emerald-900 font-medium">
                  Klik onderaan de pagina op <strong>Opslaan</strong> en je hebt Sendwise succesvol
                  gekoppeld aan Goedgepickt!
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl bg-gradient-to-r from-[#1a5ee5] to-sky-500 px-6 py-8 sm:px-8 sm:py-9 text-center text-white shadow-[0_20px_60px_rgba(30,64,175,0.45)]">
              <h2 className="inter-medium text-[1.6rem] sm:text-[1.9rem] mb-3">
                Klaar om te starten?
              </h2>
              <p className="text-sm sm:text-[0.98rem] text-blue-100 mb-6">
                Maak vandaag nog je Sendwise-account aan en verbind het met Goedgepickt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setShowSignupModal(true)}
                  className="rounded-full bg-white/95 px-6 py-2.5 text-sm font-semibold text-[#1a5ee5] shadow-sm hover:bg-white"
                >
                  Gratis proberen
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Eenvoudige signup-modal */}
      {showSignupModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="inter-medium text-lg text-slate-900 mb-2">Start met Sendwise</h3>
            <p className="text-sm text-slate-700 mb-4">
              We leiden je naar de accountaanvraag-pagina van Sendwise. Vul daar je gegevens in en we
              helpen je met het koppelen van Goedgepickt.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowSignupModal(false)}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Annuleren
              </button>
              <Link
                to="/start-met-sendwise"
                className="rounded-full bg-[#1a5ee5] px-4 py-2 text-sm font-semibold text-white hover:bg-[#134ac2]"
                onClick={() => setShowSignupModal(false)}
              >
                Naar accountaanvraag
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

