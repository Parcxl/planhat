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
  "Volledig aanpasbaar retourportaal",
  "Voor een fractie van de prijs van veel concurrenten",
  "Automatische retouraanmeldingen",
  "Scherpe verzendtarieven",
  "Overzicht in retouren en statussen",
  "Geschikt voor Nederland en Europa",
]

const returnProcessBenefits = [
  "Duidelijke retourinstructies",
  "Automatisch gegenereerde retourlabels",
  "Transparante retourkosten",
  "Meerdere vervoerders of verzendopties",
  "Statusupdates voor klant en webshop",
  "Minder handmatig werk voor klantenservice",
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
                Waarom makkelijk retourneren geen luxe meer is
              </h1>

              <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-[#526078] sm:text-[1.12rem]">
                Retouren zijn niet alleen een operationeel proces. Ze raken je klantbeleving, je
                conversie en je verplichtingen als webshop. Met een goed retourportaal maak je
                retourneren duidelijker, sneller en beter schaalbaar.
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
                  “Met het retourportaal maken klanten zelf eenvoudig een retour aan, terwijl jij
                  overzicht houdt op iedere status.”
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
              Retouren zijn voor veel webshops nog steeds een noodzakelijk kwaad. Ze kosten tijd,
              geld en aandacht. Toch wordt een soepel retourproces steeds belangrijker. Niet alleen
              omdat consumenten het verwachten, maar ook omdat wet- en regelgeving rondom online
              aankopen duidelijke eisen stelt aan het herroepingsrecht.
            </p>
            <p>
              In Nederland en de rest van Europa geldt bij online aankopen in veel gevallen een
              wettelijke bedenktijd van 14 dagen. Binnen die periode mag een consument de koop
              herroepen, zonder daarvoor een reden te hoeven geven. Voor webshops betekent dit dat
              retourneren niet alleen praktisch goed geregeld moet zijn, maar ook helder,
              toegankelijk en betrouwbaar moet worden aangeboden.
            </p>

            <div className="rounded-[24px] border border-[#cfe0fb] bg-[#f3f8ff] p-6 text-[#355070] sm:p-7">
              <p className="font-medium">
                Veel webshops hebben hun verkoopproces strak ingericht, maar het retourproces blijft
                achter. Klanten moeten mailen, wachten op instructies, handmatig labels ontvangen of
                onduidelijke retourvoorwaarden uitpluizen. Dat is niet meer van deze tijd.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="inter-semibold text-[2rem] leading-tight text-[#0d1321] sm:text-[2.6rem]">
              Herroepingsrecht: wat betekent het voor webshops?
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
              <p>
                Het herroepingsrecht geeft consumenten bij online aankopen het recht om binnen 14
                dagen af te zien van de aankoop. Volgens Europese consumentenregels geldt deze
                periode bij producten vanaf het moment van levering. Voor diensten geldt de termijn
                vanaf het moment dat de overeenkomst is gesloten.
              </p>
              <p>
                Daarnaast moeten klanten vooraf duidelijk geïnformeerd worden over retourvoorwaarden
                en eventuele retourkosten. Als een webshop de consument niet goed informeert over
                retourkosten, kan dat gevolgen hebben voor wie deze kosten uiteindelijk moet dragen.
              </p>
              <p>
                <strong className="font-semibold text-[#0d1321]">Kort gezegd:</strong> retouren zijn
                geen bijzaak meer. Ze zijn onderdeel van je wettelijke informatieplicht, je
                klantbeleving en je operationele proces.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="inter-semibold text-[2rem] leading-tight text-[#0d1321] sm:text-[2.6rem]">
              Waarom makkelijker retourneren steeds belangrijker wordt
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
              <p>
                Consumenten vergelijken webshops niet alleen op prijs of levertijd. Ze kijken ook
                naar hoe makkelijk ze iets kunnen terugsturen. Een onduidelijk retourproces zorgt
                voor twijfel vóór aankoop en frustratie ná aankoop.
              </p>
              <p>Een goed retourproces helpt juist om vertrouwen op te bouwen.</p>
            </div>
            <div className="mt-7">
              <CheckList items={returnProcessBenefits} />
            </div>
          </section>

          <section className="mt-16">
            <h2 className="inter-semibold text-[2rem] leading-tight text-[#0d1321] sm:text-[2.6rem]">
              Retourneren in Nederland en Europa
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
              <p>
                De Europese markt wordt steeds toegankelijker voor webshops. Maar zodra je
                internationaal verkoopt, wordt retourneren complexer. Elk land heeft andere
                vervoerders, verschillende tarieven en andere klantverwachtingen.
              </p>
              <p>
                Toch verwacht de consument overal hetzelfde: snel, duidelijk en zonder gedoe
                retourneren. Daarom is een retourportaal geen extraatje meer voor grote webshops. Het
                wordt steeds meer de standaard voor iedere webshop die serieus wil groeien.
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
                Een volledig aanpasbaar retourportaal
              </h2>
              <div className="mt-5 space-y-4 text-[1rem] leading-8 text-[#526078]">
                <p>Sendwise helpt webshops om retouren professioneel en betaalbaar te organiseren.</p>
                <p>
                  Klanten melden zelf hun retour aan. Jij bepaalt hoe het portaal werkt, welke
                  retourredenen zichtbaar zijn, welke verzendmethodes beschikbaar zijn en hoe het
                  proces eruitziet.
                </p>
                <p>
                  Het resultaat: minder handmatig werk, minder vragen bij de klantenservice en een
                  betere ervaring voor je klant.
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
              Waarom kiezen voor Sendwise?
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem]">
              <p>
                Veel retourportalen zijn duur, complex of vooral gebouwd voor grote
                enterprise-webshops. Sendwise pakt dat anders aan.
              </p>
              <p>
                Je krijgt een professioneel, volledig aanpasbaar retourportaal voor een fractie van
                de prijs van veel concurrenten. Daarbij profiteer je van scherpe verzendprijzen,
                waardoor retourneren niet onnodig duur hoeft te worden.
              </p>
              <p>
                Zo maak je van retouren geen kostenpost waar je grip op verliest, maar een beheersbaar
                onderdeel van je logistieke proces.
              </p>
            </div>
          </section>

          <section className="mt-16 rounded-[32px] bg-[#1a5ee5] px-6 py-9 text-white shadow-[0_24px_75px_rgba(26,94,229,0.24)] sm:px-10 sm:py-11">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/75">
              Klaar voor de toekomst
            </p>
            <h2 className="mt-3 inter-semibold text-[2rem] leading-tight sm:text-[2.7rem]">
              Maak je retourproces slimmer, goedkoper en professioneler
            </h2>
            <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-white/85 sm:text-[1.06rem]">
              Ontdek hoe jouw webshop binnen korte tijd kan werken met een volledig aanpasbaar
              retourportaal en scherpe verzendtarieven.
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
              Europese Commissie / Your Europe over consumentenrechten, retouren en herroepingsrecht
              bij online aankopen.
            </p>
            <a
              href="https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_en.htm"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-semibold text-[#1a5ee5] hover:underline"
            >
              Bekijk de Europese consumentenregels
              <FiExternalLink aria-hidden="true" />
            </a>
          </section>
        </div>
      </article>

      <Homepage2Footer />
    </main>
  )
}
