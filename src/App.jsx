import { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence, motion as Motion } from "framer-motion"
import HomePage2 from "./page/Homepage2"
import Cookie from "./components/ui/Cookie"

const Header = lazy(() => import("./components/ui/Header"))
const FloatingBoxDemo = lazy(() => import("./page/FloatingBoxDemo"))
const Contact = lazy(() => import("./page/Contact"))
const OverOns = lazy(() => import("./page/OverOns"))
const Prijzen = lazy(() => import("./page/Prijzen"))
const SendwisePlatform = lazy(() => import("./page/SendwisePlatform"))
const SendwisePro = lazy(() => import("./page/SendwisePro"))
const SendwiseConnect = lazy(() => import("./page/SendwiseConnect"))
const IntegratieWooCommerce = lazy(() => import("./page/IntegratieWooCommerce"))
const IntegratieCCVShop = lazy(() => import("./page/IntegratieCCVShop"))
const VoorWebshops = lazy(() => import("./page/VoorWebshops"))
const VoorFulfilmentcenters = lazy(() => import("./page/VoorFulfilmentcenters"))
const StartMetSendwise = lazy(() => import("./page/StartMetSendwise"))
const AlgemeneVoorwaarden = lazy(() => import("./page/AlgemeneVoorwaarden"))
const Verwerkersovereenkomst = lazy(() => import("./page/Verwerkersovereenkomst"))
const Privacy = lazy(() => import("./page/Privacy"))
const Integraties = lazy(() => import("./page/Integraties"))
const BlogGoedgepickt = lazy(() => import("./page/BlogGoedgepickt"))
const WerkenBij = lazy(() => import("./page/WerkenBij"))
const Kennisbank = lazy(() => import("./page/KennisbankHome"))
const KennisbankWixVerbinden = lazy(() => import("./page/KennisbankWixVerbinden"))
const KennisbankRetourportaal = lazy(() => import("./page/KennisbankRetourportaal"))
const FacebookAdsLanding = lazy(() => import("./page/FacebookAdsLanding"))
const FacebookAdsThanks = lazy(() => import("./page/FacebookAdsThanks"))

const sharedCriticalImages = ["/sendwise-tekst-blauw.png", "/sendwise-tekst.png"]
const homepageWorkflowImages = [
  "/inpakken-afbeelding-1.png",
  "/verzenden-afbeelding-1.png",
  "/verzenden-afbeelding-2.png",
  "/retour-afbeelding-1.png",
  "/retour-afbeelding-2.png",
  "/profile-founder-van.webp",
  "/profile-ward.webp",
  "/profile-joep.webp",
]

const criticalImagesByPath = {
  "/": ["/sendwise-hero-delivery-van.jpg", ...homepageWorkflowImages, ...sharedCriticalImages],
  "/homepage2": ["/sendwise-hero-delivery-van.jpg", ...homepageWorkflowImages, ...sharedCriticalImages],
  "/verzend-slimmer": ["/sendwise-hero-delivery-van.jpg", "/verzenden-afbeelding-1.png", "/verzenden-afbeelding-2.png", ...sharedCriticalImages],
  "/verzend-slimmer/bedankt": ["/sendwise-hero-delivery-van.jpg", ...sharedCriticalImages],
  "/oplossingen/sendwise": ["/sendwise-platform-dashboard-hero.webp", ...sharedCriticalImages],
  "/oplossingen/pro": ["/sendwise-pro-dashboard-hero.webp", ...sharedCriticalImages],
  "/oplossingen/connect": ["/sendwise-connect-hero.jpg", ...sharedCriticalImages],
  "/voor-webshops": ["/sendwise-platform-hero.webp", ...sharedCriticalImages],
  "/voor-fulfilmentcenters": ["/fulfilmentcenters-hero.avif", ...sharedCriticalImages],
  "/prijzen": ["/profile-olivier.avif", ...sharedCriticalImages],
  "/contact": ["/contact-hero-olivier.avif", ...sharedCriticalImages],
  "/start-met-sendwise": ["/profile-founder-van.webp", ...sharedCriticalImages],
  "/blog/sendwise-goedgepickt": ["/sendwise-hero-picture.avif", ...sharedCriticalImages],
  "/integraties/woocommerce": ["/woocommerce-logo.webp", ...sharedCriticalImages],
  "/integraties/ccv-shop": ["/ccv-icon.svg", ...sharedCriticalImages],
  "/kennisbank": ["/wix-step-8.png", ...sharedCriticalImages],
  "/kennisbank/wix-verbinden": ["/wix-step-8.png", "/wix-step-1.png", ...sharedCriticalImages],
  "/kennisbank/retourportaal-herroepingsrecht": ["/profile-joep.webp", ...sharedCriticalImages],
}

const syncCriticalPreloadLinks = (sources) => {
  document.head
    .querySelectorAll('link[data-route-critical-image="true"]')
    .forEach((node) => node.remove())

  sources.forEach((src) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = src
    link.setAttribute("fetchpriority", "high")
    link.setAttribute("data-route-critical-image", "true")
    document.head.appendChild(link)
  })
}

const PageTransition = ({ children }) => (
  <Motion.div
    className="w-full"
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -4 }}
    transition={{ duration: 0.18, ease: "easeOut" }}
  >
    {children}
  </Motion.div>
)

const RouteFallback = () => (
  <div className="min-h-screen bg-white" aria-hidden="true" />
)

const seoMap = {
  "/": {
    title: "Slim verzenden voor webshops — vanaf €3,50 per pakket | Sendwise",
    description:
      "Verzend pakketten vanaf €3,50 per stuk. Geen contracten, geen abonnementskosten en eerlijke all-in tarieven zonder verrassingen.",
  },
  "/homepage2": {
    title: "Sendwise homepage redesign | Slim verzenden voor webshops",
    description:
      "Nieuwe witte homepage voor Sendwise met scherpe verzendtarieven, slimme vervoerderkeuze en fulfilmentsoftware.",
  },
  "/verzend-slimmer": {
    title: "Sendwise voor webshops en fulfilmentteams | Slimmer verzenden vanaf €3,50",
    description:
      "Minder handwerk, meer grip op verzenden. Ontdek Sendwise voor labels, tracking, retouren en fulfilmentgroei zonder contracten of vaste kosten.",
  },
  "/verzend-slimmer/bedankt": {
    title: "Bedankt voor je aanvraag | Sendwise",
    description:
      "Je Sendwise accountaanvraag is ontvangen. Het team neemt contact met je op om je account klaar te zetten.",
  },
  "/verzenddoos-animatie": {
    title: "3D verzenddoos animatie | Sendwise",
    description: "Losse 3D animatie van een zwevende kartonnen verzenddoos.",
  },
  "/oplossingen/sendwise": {
    title: "Sendwise verzendplatform | Labels, tracking & integraties",
    description:
      "Het verzendplatform voor webshops en fulfilment. Labels printen, tracking beheren en integreren met al je systemen.",
  },
  "/oplossingen/pro": {
    title: "Sendwise PRO | Fulfilment software voor webshops",
    description:
      "Pick & pack, voorraadbeheer en magazijninzicht in één fulfilment dashboard. Ontwikkeld voor schaalbare webshops.",
  },
  "/oplossingen/connect": {
    title: "CONNECT verzendmethode | Eén pickup, beste vervoerder",
    description:
      "Verzend met één vaste methode via de beste vervoerder per land. Goedkoper, eenvoudiger en betrouwbaarder verzenden.",
  },
  "/voor-webshops": {
    title: "Verzendoplossing voor webshops — vanaf €3,50 | Sendwise",
    description:
      "Goedkoper verzenden zonder contracten. Eén platform voor labels, tracking en fulfilment.",
  },
  "/voor-fulfilmentcenters": {
    title: "Verzendoplossing voor fulfilmentcenters — scherpe tarieven",
    description:
      "Eén verzendlaag voor al je klanten. Minder pickups, lagere kosten en centrale support.",
  },
  "/integraties/woocommerce": {
    title: "WooCommerce verzendsoftware | Koppel WooCommerce met Sendwise",
    description:
      "Verbind je WooCommerce webshop met Sendwise en verzend sneller met scherpe tarieven en automatische labels.",
  },
  "/integraties/ccv-shop": {
    title: "CCV Shop verzendsoftware | Koppel CCV Shop met Sendwise",
    description:
      "Gebruik Sendwise als verzendlaag bovenop CCV Shop. Labels, tracking en scherpe tarieven zonder contracten.",
  },
  "/prijzen": {
    title: "Verzendtarieven | Pakketten verzenden vanaf €3,50",
    description:
      "Bekijk indicatieve verzendtarieven per land. Geen abonnementen, geen contracten en eerlijke prijzen.",
  },
  "/verwerkersovereenkomst": {
    title: "Verwerkersovereenkomst (DPA) | Sendwise",
    description:
      "De Verwerkersovereenkomst (DPA) van Sendwise met afspraken over verwerking van persoonsgegevens.",
  },
  "/over-ons": {
    title: "Over Sendwise | Slimmer en goedkoper verzenden",
    description:
      "Sendwise is het verzendplatform voor webshops en fulfilmentcenters. Eerlijk, schaalbaar en transparant.",
  },
  "/contact": {
    title: "Contact | Neem contact op met Sendwise",
    description:
      "Vragen over verzenden, tarieven of samenwerking? Neem contact op met Sendwise.",
  },
  "/werken-bij": {
    title: "Werken bij Sendwise | Vacatures en stages",
    description:
      "Bekijk open rollen bij Sendwise, waaronder sales medewerker en stagiair software developer.",
  },
  "/kennisbank": {
    title: "Kennisbank | Sendwise artikelen en hulp",
    description:
      "Praktische Sendwise handleidingen voor integraties, verzending en fulfilment workflows.",
  },
  "/kennisbank/wix-verbinden": {
    title: "Wix verbinden met Sendwise | Stap-voor-stap handleiding",
    description:
      "Lees hoe je in Wix een API key maakt en access token, account ID en site ID gebruikt om Wix met Sendwise te koppelen.",
  },
  "/kennisbank/retourportaal-herroepingsrecht": {
    title: "Herroepingsknop voor webshops verplicht | Sendwise",
    description:
      "Lees wat de verplichte herroepingsknop betekent voor webshops en hoe Sendwise het herroepingsproces compliant en automatisch inricht.",
    type: "article",
    image: "/retour-afbeelding-2.png",
    imageAlt: "Voorbeeld van het herroepingsproces in Sendwise",
    publishedTime: "2026-07-03",
    modifiedTime: "2026-07-17",
  },
  "/start-met-sendwise": {
    title: "Start met Sendwise | Vraag een account aan",
    description:
      "Vraag een Sendwise account aan en ontdek hoe je slimmer en goedkoper kunt verzenden.",
  },
  "/blog/sendwise-goedgepickt": {
    title: "Verbind Sendwise met Goedgepickt | Stap-voor-stap handleiding",
    description:
      "Leer hoe je Sendwise koppelt aan Goedgepickt via een API-key en dynamische verzendmethoden in een duidelijke stap-voor-stap gids.",
  },
}

const SITE_URL = "https://www.sendwise.nl"
const DEFAULT_SOCIAL_IMAGE = "/sendwise-hero-delivery-van.jpg"
const DEFAULT_SOCIAL_IMAGE_ALT = "Pakket wordt in een blauwe Sendwise-bezorgbus geladen"

const upsertMeta = (attribute, key, content) => {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}

const removeMeta = (attribute, key) => {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove()
}

const setCanonical = (href) => {
  let tag = document.head.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement("link")
    tag.setAttribute("rel", "canonical")
    document.head.appendChild(tag)
  }
  tag.setAttribute("href", href)
}

const getRouteStructuredData = (pathname, seo, canonicalUrl, imageUrl) => {
  if (pathname !== "/kennisbank/retourportaal-herroepingsrecht") return null

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
        headline: "De nieuwe herroepingsknop voor webshops",
        description: seo.description,
        image: [imageUrl],
        datePublished: seo.publishedTime,
        dateModified: seo.modifiedTime,
        inLanguage: "nl-NL",
        author: {
          "@type": "Organization",
          name: "Sendwise Team",
          url: `${SITE_URL}/over-ons`,
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: ["Herroepingsknop", "Herroepingsrecht", "Webshops", "ACM"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Kennisbank", item: `${SITE_URL}/kennisbank` },
          { "@type": "ListItem", position: 3, name: "Herroepingsknop voor webshops", item: canonicalUrl },
        ],
      },
    ],
  }
}

const AnimatedRoutes = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const { pathname, search, hash } = location
    if (pathname.length > 1 && pathname.endsWith("/")) {
      const nextPath = pathname.replace(/\/+$/, "")
      navigate(`${nextPath}${search}${hash}`, { replace: true })
    }
  }, [location, navigate])

  useEffect(() => {
    syncCriticalPreloadLinks(criticalImagesByPath[location.pathname] || sharedCriticalImages)
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname])

  useEffect(() => {
    const seo = seoMap[location.pathname] || seoMap["/"]
    if (!seo) return

    document.documentElement.lang = "nl"
    document.title = seo.title
    const canonicalPath = location.pathname === "/homepage2" ? "/" : location.pathname
    const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`
    const imageUrl = `${SITE_URL}${seo.image || DEFAULT_SOCIAL_IMAGE}`
    const imageAlt = seo.imageAlt || DEFAULT_SOCIAL_IMAGE_ALT

    upsertMeta("name", "description", seo.description)
    upsertMeta("name", "robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1")
    setCanonical(canonicalUrl)

    upsertMeta("property", "og:locale", "nl_NL")
    upsertMeta("property", "og:type", seo.type || "website")
    upsertMeta("property", "og:site_name", "Sendwise")
    upsertMeta("property", "og:title", seo.title)
    upsertMeta("property", "og:description", seo.description)
    upsertMeta("property", "og:url", canonicalUrl)
    upsertMeta("property", "og:image", imageUrl)
    upsertMeta("property", "og:image:alt", imageAlt)

    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", seo.title)
    upsertMeta("name", "twitter:description", seo.description)
    upsertMeta("name", "twitter:image", imageUrl)
    upsertMeta("name", "twitter:image:alt", imageAlt)

    if (seo.type === "article") {
      upsertMeta("property", "article:published_time", seo.publishedTime)
      upsertMeta("property", "article:modified_time", seo.modifiedTime)
      upsertMeta("property", "article:author", "Sendwise Team")
    } else {
      removeMeta("property", "article:published_time")
      removeMeta("property", "article:modified_time")
      removeMeta("property", "article:author")
    }

    const structuredData = getRouteStructuredData(location.pathname, seo, canonicalUrl, imageUrl)
    let structuredDataTag = document.getElementById("route-structured-data")
    if (!structuredDataTag) {
      structuredDataTag = document.createElement("script")
      structuredDataTag.id = "route-structured-data"
      structuredDataTag.type = "application/ld+json"
      document.head.appendChild(structuredDataTag)
    }
    structuredDataTag.textContent = JSON.stringify(structuredData || {})
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          path="/"
          element={
            <PageTransition>
              <HomePage2 />
            </PageTransition>
          }
        />
        <Route
          path="/homepage2"
          element={
            <PageTransition>
              <HomePage2 />
            </PageTransition>
          }
        />
        <Route
          path="/verzenddoos-animatie"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <FloatingBoxDemo />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/verzend-slimmer"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <FacebookAdsLanding />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/verzend-slimmer/bedankt"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <FacebookAdsThanks />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/oplossingen/sendwise"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <SendwisePlatform />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/oplossingen/pro"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <SendwisePro />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/oplossingen/connect"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <SendwiseConnect />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/voor-webshops"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <VoorWebshops />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/voor-fulfilmentcenters"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <VoorFulfilmentcenters />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/prijzen"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <Prijzen />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <Contact />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/integraties"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <Integraties />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/start-met-sendwise"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <StartMetSendwise />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/werken-bij"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <WerkenBij />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/kennisbank"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <Kennisbank />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/kennisbank/wix-verbinden"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <KennisbankWixVerbinden />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/kennisbank/retourportaal-herroepingsrecht"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <KennisbankRetourportaal />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          element={(
            <Suspense fallback={<RouteFallback />}>
              <Header />
            </Suspense>
          )}
        >
          <Route
            path="/over-ons"
            element={
              <Suspense fallback={<RouteFallback />}>
                <PageTransition>
                  <OverOns />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/integraties/woocommerce"
            element={
              <Suspense fallback={<RouteFallback />}>
                <PageTransition>
                  <IntegratieWooCommerce />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/integraties/ccv-shop"
            element={
              <Suspense fallback={<RouteFallback />}>
                <PageTransition>
                  <IntegratieCCVShop />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/algemene-voorwaarden"
            element={
              <Suspense fallback={<RouteFallback />}>
                <PageTransition>
                  <AlgemeneVoorwaarden />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/verwerkersovereenkomst"
            element={
              <Suspense fallback={<RouteFallback />}>
                <PageTransition>
                  <Verwerkersovereenkomst />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/privacy"
            element={
              <Suspense fallback={<RouteFallback />}>
                <PageTransition>
                  <Privacy />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/blog/sendwise-goedgepickt"
            element={
              <Suspense fallback={<RouteFallback />}>
                <PageTransition>
                  <BlogGoedgepickt />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <HomePage2 />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <Cookie />
    </BrowserRouter>
  )
}

export default App
