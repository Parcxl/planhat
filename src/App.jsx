import { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence, motion as Motion } from "framer-motion"
import HomePage2 from "./page/Homepage2"

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
const Kennisbank = lazy(() => import("./page/Kennisbank"))

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
      "Binnenkort vind je hier praktische artikelen over verzenden, integraties, tarieven en fulfilment workflows.",
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
    const seo = seoMap[location.pathname] || seoMap["/"]
    if (!seo) return

    document.title = seo.title
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta")
      descriptionTag.setAttribute("name", "description")
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute("content", seo.description)
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
    </BrowserRouter>
  )
}

export default App
