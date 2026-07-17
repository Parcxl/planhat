import { createElement, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiExternalLink,
  FiRefreshCw,
  FiUser,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"

const benefits = [
  "Wettelijk correcte herroepingsfunctie",
  "Duidelijke knop of link op je webshop",
  "Herroepen zonder verplichte accountdrempel",
  "Automatische bevestiging per e-mail",
  "Aansluiting op je retourproces",
  "Geschikt voor webshops en online diensten",
]

const returnProcessBenefits = [
  "Maak de knop makkelijk vindbaar, bijvoorbeeld in de footer",
  "Gebruik duidelijke tekst zoals 'Koop ongedaan maken'",
  "Laat alleen noodzakelijke bestelgegevens invullen",
  "Stuur direct een automatische ontvangstbevestiging",
  "Houd het modelformulier daarnaast beschikbaar",
  "Laat het proces aansluiten op klantenservice en retourbeleid",
]

const MetaItem = ({ icon, children }) => (
  <div className="flex items-center gap-2 text-sm text-[#5e6a80] sm:text-base">
    {createElement(icon, { size: 16, "aria-hidden": true })}
    <span>{children}</span>
  </div>
)

const CheckList = ({ items }) => (
  <ul className="grid gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 rounded-[18px] border border-[#dce7f4] bg-white px-4 py-4 text-[0.96rem] leading-7 text-[#334155]"
      >
        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f0ff] text-[#1a5ee5]">
          <FiCheck size={14} aria-hidden="true" />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

export default function KennisbankRetourportaal() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0d1321]">
      <Homepage2Header />

      <section className="bg-white px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/kennisbank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a5ee5] transition hover:text-[#164fc2]"
          >
            <FiArrowLeft aria-hidden="true" />
            Terug naar kennisbank
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:min-h-[590px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="max-w-[680px] lg:pb-8">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#6f7694]">
                <FiRefreshCw aria-hidden="true" />
                Retouren &amp; herroepingsrecht
              </div>

              <h1 className="mt-6 inter-semibold text-[2.75rem] leading-[1.02] text-indigo-950 sm:text-6xl sm:leading-[1.02] lg:text-7xl">
                De nieuwe herroepingsknop voor webshops
              </h1>

              <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-[#526078] sm:text-[1.12rem]">
                Sinds juni 2026 moeten webshops en apps een duidelijke herroepingsknop aanbieden.
                Lees wat deze verplichting betekent, voor wie de regels gelden en hoe je het
                herroepingsproces automatiseert met Sendwise.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                <MetaItem icon={FiUser}>Sendwise Team</MetaItem>
                <MetaItem icon={FiCalendar}>3 juli 2026</MetaItem>
                <MetaItem icon={FiClock}>± 5 min lezen</MetaItem>
              </div>
            </div>

            <aside className="relative min-h-[560px] w-full overflow-hidden rounded-[24px] shadow-[0_24px_65px_rgba(7,17,31,0.20)] sm:min-h-[590px] sm:rounded-[30px] lg:min-h-[590px] lg:max-w-[500px] lg:justify-self-end lg:rounded-[34px] lg:shadow-[0_34px_95px_rgba(7,17,31,0.24)]">
              <img
                src="/profile-joep.webp"
                alt="Joep van Sendwise bij de blauwe Sendwise-bus"
                width="1254"
                height="1254"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full scale-110 object-cover object-center sm:scale-105 lg:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07115a]/95 via-[#07115a]/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-9 lg:p-10">
                <p className="inter-semibold text-[1.35rem] leading-tight sm:text-[1.75rem] lg:text-[1.9rem]">
                  “Met een duidelijke herroepingsknop maak je annuleren net zo laagdrempelig als
                  bestellen, zonder extra werk voor je klantenservice.”
                </p>
                <p className="mt-5 inter-medium text-sm text-white/80 sm:text-base">Joep van Sendwise</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <article className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <section className="space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
            <p>
              Retouren en annuleringen zijn voor veel webshops nog altijd een noodzakelijk kwaad.
              Toch verandert er iets fundamenteels. De Autoriteit Consument &amp; Markt wijst online
              retailers erop dat zij in hun online omgeving, zoals webshops en apps, een duidelijke
              en toegankelijke ontbindingsfunctie moeten aanbieden.
            </p>
            <p>
              Deze functie wordt vaak de herroepingsknop genoemd. Wie online verkoopt aan
              consumenten, moet het voor klanten makkelijk maken om een online aankoop binnen de
              wettelijke bedenktijd ongedaan te maken. Geen zoektocht door algemene voorwaarden,
              geen verplicht mailtje naar de klantenservice en geen verstopt formulier.
            </p>

            <div className="rounded-[24px] border border-[#cfe0fb] bg-[#f3f8ff] p-6 text-[#355070] sm:p-7">
              <p className="font-medium">
                Een online aankoop is vaak met een paar klikken gedaan. De nieuwe
                herroepingsfunctie zorgt ervoor dat consumenten hun aankoop ook digitaal,
                laagdrempelig en zonder onnodige drempels kunnen herroepen.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="inter-semibold text-[2rem] leading-tight text-[#0d1321] sm:text-[2.6rem]">
              Wat is de herroepingsknop?
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
              <p>
                De herroepingsknop is een digitale functie op je website of in je app waarmee een
                consument met een paar klikken kan aangeven dat hij een aankoop wil herroepen. De
                knop maakt het mogelijk om een online aankoop van een product of dienst binnen de
                wettelijke bedenktijd van 14 dagen te annuleren.
              </p>
              <p>
                De verplichting komt voort uit Europese regels en is in Nederland vastgelegd in het
                Burgerlijk Wetboek. De kern is eenvoudig: consumenten moeten een online aankoop net
                zo makkelijk kunnen ontbinden als zij die hebben gesloten.
              </p>
              <p>
                <strong className="font-semibold text-[#0d1321]">Kort gezegd:</strong> een vage
                contactknop of algemene retourpagina is niet genoeg. De functie moet duidelijk maken
                waarvoor die is, bijvoorbeeld met tekst als "Koop ongedaan maken".
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="inter-semibold text-[2rem] leading-tight text-[#0d1321] sm:text-[2.6rem]">
              Wat verandert er aan het herroepingsrecht?
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
              <p>
                Voor consumenten verandert het wettelijke herroepingsrecht inhoudelijk niet. Zij
                kunnen nog steeds binnen de wettelijke bedenktijd van 14 dagen aangeven dat zij van
                de aankoop afzien. Bij fysieke producten start die bedenktijd vanaf levering. Bij
                diensten en digitale content start de termijn vanaf het sluiten van de overeenkomst.
              </p>
              <p>
                Wat wel verandert, is de manier waarop consumenten dat recht moeten kunnen
                uitoefenen. De herroeping moet digitaal, duidelijk en zonder onnodige drempels
                kunnen. De knop is een aanvulling op het bestaande modelformulier en vervangt dat
                formulier dus niet.
              </p>
            </div>
            <div className="mt-7">
              <CheckList items={returnProcessBenefits} />
            </div>
          </section>

          <section className="mt-16">
            <h2 className="inter-semibold text-[2rem] leading-tight text-[#0d1321] sm:text-[2.6rem]">
              Voor wie geldt de verplichting?
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
              <p>
                De verplichting geldt voor webshops en online dienstverleners die verkopen aan
                consumenten. Dat gaat niet alleen om webshops met fysieke producten, maar ook om
                online diensten en digitale producten zoals cursussen of andere digitale content.
              </p>
              <p>
                Verkoop je uitsluitend zakelijk, dan valt je webshop buiten deze consumentenregel.
                Verkoop je zowel B2C als B2B, dan moet het consumentendeel van je transacties wel
                een duidelijke herroepingsfunctie aanbieden. De knop geldt alleen voor producten en
                diensten die ook online zijn aangeschaft.
              </p>
            </div>
          </section>
        </div>

        <section className="mx-auto mt-16 max-w-6xl rounded-[32px] border border-[#dce7f4] bg-[#f7fbff] p-5 shadow-[0_22px_65px_rgba(15,23,42,0.07)] sm:p-8 lg:p-10">
          <div className="grid gap-9 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[24px] border border-[#dce7f4] bg-white">
              <img
                src="/retour-afbeelding-2.png"
                alt="Voorbeeld van een volledig aanpasbaar retourportaal in Sendwise"
                loading="lazy"
                decoding="async"
                className="w-full"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1a5ee5]">
                De Sendwise-oplossing
              </p>
              <h2 className="mt-4 inter-semibold text-[2rem] leading-tight text-[#0d1321] sm:text-[2.6rem]">
                Zo regelt Sendwise de herroepingsknop
              </h2>
              <div className="mt-5 space-y-4 text-[1rem] leading-8 text-[#526078]">
                <p>Sendwise helpt webshops om de herroepingsknop professioneel in te richten.</p>
                <p>
                  We zorgen voor een duidelijke, wettelijk correcte herroepingsfunctie die klanten
                  makkelijk kunnen vinden, bijvoorbeeld via de footer of accountomgeving van je
                  webshop.
                </p>
                <p>
                  Het verzoek, de automatische bevestiging en de interne opvolging sluiten aan op je
                  bestaande processen rond ruilen, retourneren en klantenservice.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <CheckList items={benefits} />
          </div>
        </section>

        <div className="mx-auto max-w-4xl">
          <section className="mt-16">
            <h2 className="inter-semibold text-[2rem] leading-tight text-[#0d1321] sm:text-[2.6rem]">
              Wat riskeer je zonder herroepingsknop?
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
              <p>
                Niet voldoen aan de regels kan directe gevolgen hebben. Als consumenten niet goed
                worden geïnformeerd over hun herroepingsrecht of de herroepingsfunctie, kan de
                wettelijke bedenktijd worden verlengd tot maximaal een jaar. Ook kan de ACM boetes
                opleggen.
              </p>
              <p>
                Voor een webshop raakt dat direct aan marges, voorraadbeheer en klantenservice. Een
                aankoop die veel langer kan worden herroepen, zorgt voor onzekerheid in je
                operationele proces.
              </p>
              <p>
                Door de knop goed in te richten, maak je van een wettelijke verplichting geen risico,
                maar een beheersbaar onderdeel van je logistiek.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="inter-semibold text-[2rem] leading-tight text-[#0d1321] sm:text-[2.6rem]">
              FAQ over de herroepingsknop
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
              <p>
                <strong className="font-semibold text-[#0d1321]">
                  Vanaf wanneer is de herroepingsknop verplicht?
                </strong>{" "}
                Sinds juni 2026 moeten webshops en online dienstverleners een duidelijke
                herroepingsfunctie aanbieden voor online aankopen van consumenten.
              </p>
              <p>
                <strong className="font-semibold text-[#0d1321]">
                  Geldt de verplichting ook voor B2B?
                </strong>{" "}
                Nee. De verplichting geldt voor verkoop aan consumenten. Zakelijke transacties
                vallen hier buiten.
              </p>
              <p>
                <strong className="font-semibold text-[#0d1321]">
                  Vervangt de knop het herroepingsformulier?
                </strong>{" "}
                Nee. De herroepingsknop is een extra route naast het bestaande modelformulier.
              </p>
              <p>
                <strong className="font-semibold text-[#0d1321]">
                  Moet ik dit zelf bouwen?
                </strong>{" "}
                Nee. Sendwise kan de herroepingsknop en de automatische opvolging voor je
                inrichten, zodat je webshop op tijd en correct voldoet.
              </p>
            </div>
          </section>

          <section className="mt-16 rounded-[32px] bg-[#1a5ee5] px-6 py-9 text-white shadow-[0_24px_75px_rgba(26,94,229,0.24)] sm:px-10 sm:py-11">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/75">
              Klaar voor de verplichting
            </p>
            <h2 className="mt-3 inter-semibold text-[2rem] leading-tight sm:text-[2.7rem]">
              Maak je herroepingsproces compliant en geautomatiseerd
            </h2>
            <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-white/85 sm:text-[1.06rem]">
              Ontdek hoe Sendwise jouw webshop helpt met een duidelijke herroepingsknop,
              automatische bevestigingen en een proces dat aansluit op je bestaande workflow.
            </p>
            <Link
              to="/start-met-sendwise"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#1a5ee5] transition hover:bg-[#eef4ff]"
            >
              Direct registreren
              <FiArrowRight aria-hidden="true" />
            </Link>
          </section>

          <section className="mt-10 border-t border-[#dce7f4] pt-7 text-sm leading-7 text-[#5e6a80]">
            <p className="font-semibold text-[#0d1321]">Bron</p>
            <p className="mt-2">
              Autoriteit Consument &amp; Markt, Ondernemersplein/KVK en het Burgerlijk Wetboek over de
              herroepingsknop en het herroepingsrecht bij online aankopen.
            </p>
            <a
              href="https://www.acm.nl/nl/publicaties/acm-roept-online-retailers-op-zich-voor-te-bereiden-op-herroepingsknop"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-semibold text-[#1a5ee5] hover:underline"
            >
              Bekijk de ACM-publicatie
              <FiExternalLink aria-hidden="true" />
            </a>
          </section>
        </div>
      </article>

      <Homepage2Footer />
    </main>
  )
}
