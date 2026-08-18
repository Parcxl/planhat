import { createElement, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiExternalLink,
  FiPackage,
  FiTruck,
  FiUser,
} from "react-icons/fi"
import Homepage2Header from "../components/Homepage2/Header"
import Homepage2Footer from "../components/Homepage2/Footer"

const choiceFactors = [
  {
    title: "Formaat en gewicht",
    text: "Brievenbuszendingen, standaardpakketten en grote of zware pakketten hebben ieder andere maat- en gewichtslimieten. Vergelijk daarom je meest voorkomende zendingen, niet alleen het gemiddelde.",
  },
  {
    title: "Breekbaarheid en waarde",
    text: "Bij kwetsbare of kostbare producten zijn verpakking, handmatige verwerking, verzekeringsmogelijkheden en de claimprocedure belangrijker dan een algemene voorkeur voor één vervoerder.",
  },
  {
    title: "Bestemming",
    text: "Kijk waar je klanten wonen. Dekking, bezorgsnelheid, servicepunten en tarieven verschillen per land en soms zelfs per regio.",
  },
  {
    title: "Bezorgopties voor klanten",
    text: "Denk aan avondbezorging, afhaalpunten, pakketautomaten, leeftijdscontrole en handtekening voor ontvangst. Kies de opties die werkelijk waarde toevoegen voor jouw doelgroep.",
  },
  {
    title: "Pickup en volume",
    text: "Controleer vanaf welk volume ophalen mogelijk is, wat een vaste of losse pickup kost en of de ophaaltijden aansluiten op je magazijnproces.",
  },
  {
    title: "Totale verzendkosten",
    text: "Vergelijk niet alleen het basistarief. Neem brandstof-, formaat-, gewicht-, eiland- en piektoeslagen mee, samen met retourkosten en eventuele verzekeringen.",
  },
]

const contents = [
  ["geen-beste-vervoerder", "Waarom er niet één beste vervoerder is"],
  ["keuzefactoren", "Welke factoren moet je vergelijken?"],
  ["een-vervoerder", "Wanneer kies je één vervoerder?"],
  ["meerdere-vervoerders", "Wanneer zijn meerdere vervoerders slim?"],
  ["stappenplan", "In vijf stappen de juiste keuze maken"],
  ["sendwise", "Hoe helpt Sendwise?"],
  ["veelgestelde-vragen", "Veelgestelde vragen"],
]

const steps = [
  "Breng van de afgelopen drie maanden het aantal zendingen, formaat, gewicht en bestemming in kaart.",
  "Noteer welke bezorgopties je klanten nodig hebben en welke problemen je nu ervaart.",
  "Vergelijk per vervoerder het volledige tarief inclusief toeslagen, pickups, retouren en verzekeringen.",
  "Test de beste optie met een representatieve groep zendingen en beoordeel kosten én klantbeleving.",
  "Evalueer ieder kwartaal opnieuw of je verzendprofiel, assortiment of internationale bereik is veranderd.",
]

const faqs = [
  {
    question: "Welke vervoerder is het beste voor een webshop?",
    answer:
      "Er bestaat geen vervoerder die voor iedere webshop het beste is. De juiste keuze hangt af van pakketformaat, gewicht, waarde, bestemming, bezorgopties, volume en de gewenste pickup.",
  },
  {
    question: "Is één vervoerder of meerdere vervoerders beter?",
    answer:
      "Eén vervoerder geeft meestal het meeste overzicht bij een voorspelbaar verzendprofiel. Meerdere vervoerders kunnen interessant zijn bij uiteenlopende formaten, internationale bestemmingen, piekdrukte of specifieke bezorgwensen.",
  },
  {
    question: "Waar moet je verzendtarieven op vergelijken?",
    answer:
      "Vergelijk het basistarief samen met alle relevante toeslagen, pickupkosten, retourtarieven, verzekeringsopties en kosten voor afwijkende maten of gewichten.",
  },
  {
    question: "Kun je meerdere vervoerders vanuit één systeem gebruiken?",
    answer:
      "Ja. Met verzendsoftware zoals Sendwise beheer je labels, tracking en vervoerders vanuit één platform. Afhankelijk van je volume en locatie kan ook één gezamenlijke pickup mogelijk zijn.",
  },
  {
    question: "Hoe helpt Sendwise bij het kiezen van een vervoerder?",
    answer:
      "Sendwise kijkt naar je producten, volumes, bestemmingen en huidige verzendproces. Op basis daarvan krijg je advies over een passende vervoerder of combinatie van vervoerders.",
  },
]

const MetaItem = ({ icon, children }) => (
  <div className="flex items-center gap-2 text-sm text-[#5e6a80] sm:text-base">
    {createElement(icon, { size: 16, "aria-hidden": true })}
    <span>{children}</span>
  </div>
)

const ArticleHeading = ({ id, eyebrow, children }) => (
  <div className="scroll-mt-36" id={id}>
    {eyebrow ? (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#1a5ee5]">{eyebrow}</p>
    ) : null}
    <h2 className="inter-semibold text-[1.85rem] leading-[1.14] text-[#0d1321] sm:text-[2.35rem]">
      {children}
    </h2>
  </div>
)

export default function KennisbankWelkeVervoerder() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleContentsClick = (event, id) => {
    event.preventDefault()
    const section = document.getElementById(id)
    if (!section) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    section.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" })
    window.history.replaceState(null, "", `#${id}`)
  }

  return (
    <main className="min-h-screen bg-white text-[#0d1321]">
      <Homepage2Header />

      <header className="border-b border-[#e4eaf2] bg-[#f8fafc] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/kennisbank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a5ee5] transition hover:text-[#164fc2]"
          >
            <FiArrowLeft aria-hidden="true" />
            Terug naar kennisbank
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1a5ee5]">
                <FiTruck aria-hidden="true" />
                Vervoerders kiezen
              </p>
              <h1 className="mt-5 inter-semibold text-[2.65rem] leading-[1.04] tracking-[-0.025em] text-[#0d1321] sm:text-[3.9rem] lg:text-[4.8rem]">
                Welke vervoerder kies je voor jouw webshop?
              </h1>
              <p className="mt-7 max-w-4xl text-[1.08rem] leading-8 text-[#526078] sm:text-[1.18rem]">
                De beste vervoerder bestaat niet. De juiste keuze hangt af van je pakketten,
                bestemmingen, volume en de bezorgervaring die je klanten verwacht. Met deze
                keuzehulp bepaal je welke aanpak bij jouw webshop past.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dce3ec] pt-6">
                <MetaItem icon={FiUser}>Sendwise Team</MetaItem>
                <MetaItem icon={FiCalendar}>18 augustus 2026</MetaItem>
                <MetaItem icon={FiClock}>± 7 min lezen</MetaItem>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-[#dce7f4] bg-[#eaf2ff] shadow-[0_28px_75px_rgba(15,23,42,0.13)]">
              <img
                src="/sendwise-hero-delivery-van.jpg"
                alt="Pakket wordt geladen in een Sendwise-bezorgbus"
                width="1600"
                height="1067"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <article className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[260px,minmax(0,760px)] lg:justify-center lg:gap-16">
          <aside className="self-start lg:sticky lg:top-36">
            <nav aria-label="Inhoudsopgave" className="border-l-2 border-[#dce5f0] py-1 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0d1321]">In dit artikel</p>
              <ol className="mt-4 space-y-1.5">
                {contents.map(([id, label], index) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(event) => handleContentsClick(event, id)}
                      className="group flex gap-3 py-1.5 text-sm leading-5 text-[#5e6a80] transition-colors hover:text-[#1a5ee5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5ee5]/30"
                    >
                      <span className="font-semibold text-[#a0abbd] group-hover:text-[#1a5ee5]">{index + 1}</span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0">
            <section className="rounded-[26px] border border-[#cfe0fb] bg-[#f3f8ff] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1a5ee5]">Kort antwoord</p>
              <p className="mt-3 text-[1.08rem] leading-8 text-[#334155] sm:text-[1.14rem]">
                Kies een vervoerder op basis van je meest voorkomende pakketformaat, gewicht,
                bestemming, gewenste bezorgopties en totale kosten inclusief toeslagen. Voor een
                voorspelbaar verzendprofiel is één vervoerder vaak het eenvoudigst. Combineer pas
                vervoerders wanneer verschillen in formaat, bestemming of capaciteit daar aantoonbaar
                voordeel opleveren.
              </p>
            </section>

            <section className="mt-14">
              <ArticleHeading id="geen-beste-vervoerder" eyebrow="Begin bij je verzendprofiel">
                Waarom er niet één beste vervoerder is
              </ArticleHeading>
              <div className="mt-5 space-y-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                <p>
                  Veel webshopeigenaren zoeken naar een simpel antwoord: welke pakketdienst is de
                  beste? In de praktijk bestaat dat antwoord niet. Een sieradenwebshop met lichte
                  brievenbuszendingen heeft andere eisen dan een winkel die grote, zware of kwetsbare
                  producten verzendt.
                </p>
                <p>
                  Begin daarom niet bij de naam van de vervoerder, maar bij je eigen verzendprofiel.
                  Kijk naar wat je meestal verstuurt, waar je klanten wonen en welke bezorgbelofte je
                  wilt doen. Zo vergelijk je vervoerders op punten die voor jouw webshop werkelijk
                  verschil maken.
                </p>
              </div>
            </section>

            <section className="mt-14">
              <ArticleHeading id="keuzefactoren" eyebrow="Vergelijk appels met appels">
                Welke factoren moet je vergelijken?
              </ArticleHeading>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {choiceFactors.map((factor) => (
                  <div key={factor.title} className="rounded-[22px] border border-[#dce7f4] bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                    <p className="font-semibold text-[#0d1321]">{factor.title}</p>
                    <p className="mt-2 text-[0.96rem] leading-7 text-[#526078]">{factor.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-[22px] border border-[#dce7f4] bg-[#f8fafc] p-5 text-[0.96rem] leading-7 text-[#526078] sm:p-6">
                <p>
                  De productspecificaties veranderen. Controleer daarom altijd de actuele maat- en
                  gewichtslimieten bij de vervoerder, bijvoorbeeld bij{" "}
                  <a
                    href="https://www.postnl.nl/zakelijk/klantenservice/pakketten-en-vracht/pakket-grootte-gewicht/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4"
                  >
                    PostNL <FiExternalLink className="inline" aria-hidden="true" />
                  </a>{" "}
                  en{" "}
                  <a
                    href="https://www.dhlecommerce.nl/nl/zakelijk/support/verzenden/afmetingen-en-gewicht"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4"
                  >
                    DHL eCommerce <FiExternalLink className="inline" aria-hidden="true" />
                  </a>.
                </p>
              </div>
            </section>

            <section className="mt-14">
              <ArticleHeading id="een-vervoerder" eyebrow="Eenvoud en voorspelbaarheid">
                Wanneer kies je één vervoerder?
              </ArticleHeading>
              <div className="mt-5 space-y-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                <p>
                  Voor veel webshops is één vaste vervoerder de meest praktische keuze. Je werkt met
                  één set voorwaarden, toeslagen en levertijden. Breng je pakketten zelf weg, dan hoef
                  je bovendien maar naar één servicepunt. Ook de track-en-trace-ervaring blijft voor
                  klanten herkenbaar.
                </p>
                <p>
                  Deze aanpak past vooral bij webshops met een overzichtelijk assortiment,
                  voorspelbare pakketmaten en hoofdzakelijk dezelfde bestemmingen. De operationele
                  rust kan dan zwaarder wegen dan een klein tariefverschil per individuele zending.
                </p>
              </div>
            </section>

            <section className="mt-14 rounded-[28px] border border-[#dce7f4] bg-[#f7fbff] p-6 sm:p-8">
              <ArticleHeading id="meerdere-vervoerders" eyebrow="Flexibiliteit waar die rendeert">
                Wanneer zijn meerdere vervoerders slim?
              </ArticleHeading>
              <p className="mt-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                Meerdere vervoerders worden interessant wanneer één netwerk niet goed bij al je
                zendingen past. Dat kan bijvoorbeeld het geval zijn wanneer:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "je assortiment sterk uiteenlopende formaten of gewichten bevat",
                  "je naar meerdere landen verzendt en dekking of levertijd verschilt",
                  "klanten specifieke bezorgopties verwachten",
                  "je tijdens piekperiodes minder afhankelijk wilt zijn van één netwerk",
                  "de totale kosten per zendingstype aantoonbaar lager uitvallen bij een combinatie",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[1rem] leading-7 text-[#334155]">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f0ff] text-[#1a5ee5]">
                      <FiCheck size={14} aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                Met de juiste verzendsoftware beheer je labels en tracking centraal. Met{" "}
                <Link to="/oplossingen/connect" className="font-semibold text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4">
                  Sendwise CONNECT
                </Link>{" "}
                kan, afhankelijk van volume en locatie, ook één gezamenlijke pickup mogelijk zijn.
              </p>
            </section>

            <section className="mt-14">
              <ArticleHeading id="stappenplan" eyebrow="Praktische keuzehulp">
                In vijf stappen de juiste vervoerder kiezen
              </ArticleHeading>
              <ol className="mt-7 space-y-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-[22px] border border-[#dce7f4] bg-white p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e8f0ff] font-semibold text-[#1a5ee5]">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-[0.98rem] leading-7 text-[#334155]">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-14">
              <ArticleHeading id="sendwise" eyebrow="Eén verzendplatform">
                Hoe helpt Sendwise bij je keuze?
              </ArticleHeading>
              <div className="mt-5 space-y-5 text-[1rem] leading-8 text-[#526078] sm:text-[1.06rem]">
                <p>
                  Sendwise kijkt samen met jou naar je producten, klanten, volumes en bestemmingen.
                  Op basis daarvan bepalen we of één vervoerder voldoende is of dat een combinatie
                  meer voordeel en flexibiliteit geeft. Je zit daarbij niet vast aan één standaardadvies.
                </p>
                <p>
                  Vanuit één platform maak je labels aan, verwerk je tracking en beheer je verschillende
                  vervoerders. Sendwise koppelt onder andere met WooCommerce, Shopify, Magento,
                  PrestaShop, Lightspeed, CCV Shop, Wix, Ecwid, Mijnwebwinkel en bol.com. Bekijk onze{" "}
                  <Link to="/integraties" className="font-semibold text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4">
                    webshopintegraties
                  </Link>{" "}
                  of lees meer over Sendwise voor{" "}
                  <Link to="/voor-webshops" className="font-semibold text-[#1a5ee5] underline decoration-[#1a5ee5]/30 underline-offset-4">
                    webshops
                  </Link>.
                </p>
              </div>
            </section>

            <section className="mt-14" id="veelgestelde-vragen">
              <ArticleHeading eyebrow="Snel antwoord">Veelgestelde vragen</ArticleHeading>
              <div className="mt-7 divide-y divide-[#dce7f4] border-y border-[#dce7f4]">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-8 font-semibold text-[#0d1321] marker:hidden">
                      {faq.question}
                    </summary>
                    <p className="mt-3 max-w-3xl text-[0.98rem] leading-7 text-[#526078]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-14 rounded-[28px] bg-[#0d1b3d] p-7 text-white sm:p-9">
              <div className="flex items-center gap-3 text-[#8db4ff]">
                <FiPackage aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">Persoonlijk advies</p>
              </div>
              <h2 className="mt-4 inter-semibold text-[1.9rem] leading-tight sm:text-[2.4rem]">
                Twijfel je tussen vervoerders?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/75">
                Laat je verzendprofiel door ons bekijken. We helpen je een vervoerder of combinatie
                te kiezen die past bij je producten, klanten en manier van werken.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0d1b3d] transition hover:bg-[#eef4ff]"
                >
                  Neem contact op <FiArrowRight aria-hidden="true" />
                </Link>
                <Link
                  to="/prijzen"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Bekijk verzendtarieven
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Homepage2Footer />
    </main>
  )
}
