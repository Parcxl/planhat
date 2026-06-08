import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence, motion as Motion } from "framer-motion"
import Header from "./components/ui/Header"
import HomePage2 from "./page/Homepage2"
import FloatingBoxDemo from "./page/FloatingBoxDemo"
import Contact from "./page/Contact"
import OverOns from "./page/OverOns"
import Prijzen from "./page/Prijzen"
import SendwisePlatform from "./page/SendwisePlatform"
import SendwisePro from "./page/SendwisePro"
import SendwiseConnect from "./page/SendwiseConnect"
import IntegratieWooCommerce from "./page/IntegratieWooCommerce"
import IntegratieCCVShop from "./page/IntegratieCCVShop"
import VoorWebshops from "./page/VoorWebshops"
import VoorFulfilmentcenters from "./page/VoorFulfilmentcenters"
import StartMetSendwise from "./page/StartMetSendwise"
import AlgemeneVoorwaarden from "./page/AlgemeneVoorwaarden"
import Verwerkersovereenkomst from "./page/Verwerkersovereenkomst"
import Privacy from "./page/Privacy"
import Integraties from "./page/Integraties"
import BlogGoedgepickt from "./page/BlogGoedgepickt"
import WerkenBij from "./page/WerkenBij"
import Kennisbank from "./page/Kennisbank"

const commonPreloadImages = [
  "/sendwise-tekst-blauw.png",
  "/sendwise-tekst.png",
]

const carrierLogoImages = [
  "/gofo-logo-sendwise.png",
  "/dao-logo-sendwise.png",
  "/goedgepickt-sendwise-logo.png",
  "/colissimo-logo-sendwise.png",
  "/gls-logo-sendwise.png",
  "/CORREOS-logo-sendwise.png",
  "/AT POST-logo-sendwise.png",
  "/mrw-logo-sendwise.png",
  "/ctt-logo-sendwise.png",
  "/sendwise-dhl.svg",
]

const integrationLogoImages = [
  "/woocommerce-logo.png",
  "/shopify-logo.png",
  "/ccv-icon.svg",
  "/lightspeed.png",
  "/magento.jpg",
  "/mijnwebwinkel.png",
  "/ecwid-parcxl.png",
  "/wix.png",
  "/prestashop.png",
  "/bol-logo.png",
  "/lyra.png",
  "/goedgepickt-sendwise-logo.png",
]

const homepageImages = [
  "/sendwise-hero-delivery-van.jpg",
  "/homepage2-webshop.png",
  "/homepage2-fulfilment.png",
  "/inpakken-afbeelding-1.png",
  "/verzenden-afbeelding-1.png",
  "/verzenden-afbeelding-2.png",
  "/retour-afbeelding-1.png",
  "/retour-afbeelding-2.png",
  "/profile-founder-van.png",
  "/profile-ward.png",
  "/profile-joep.png",
  "/freek-blijenberg-boxxl.png",
  ...carrierLogoImages,
]

const preloadImagesByPath = {
  "/": homepageImages,
  "/homepage2": homepageImages,
  "/oplossingen/sendwise": [
    "/sendwise-platform-dashboard-hero.png",
    "/sendwise-platform-hero.png",
    "/sendwise-api.png",
    ...integrationLogoImages,
  ],
  "/oplossingen/pro": [
    "/sendwise-pro-dashboard-hero.png",
    "/pro-warehouse-3d.png",
  ],
  "/oplossingen/connect": [
    "/sendwise-connect-hero.jpg",
    ...carrierLogoImages,
  ],
  "/voor-webshops": [
    "/sendwise-platform-hero.png",
    "/sendwise-api.png",
    ...integrationLogoImages,
  ],
  "/voor-fulfilmentcenters": [
    "/fulfilmentcenters-hero.png",
    "/freek-blijenberg-boxxl.png",
  ],
  "/prijzen": ["/profile-olivier.png"],
  "/contact": ["/contact-hero-olivier.png"],
  "/integraties": integrationLogoImages,
  "/start-met-sendwise": ["/profile-founder-van.png"],
  "/werken-bij": ["/werken-bij-sendwise-team.png"],
  "/blog/sendwise-goedgepickt": [
    "/sendwise-hero-picture.png",
    "/goedgepickt-sendwise-logo.png",
  ],
  "/integraties/woocommerce": [
    "/woocommerce-logo.png",
    "/foto-sendwise-kopie.webp",
    "/woocommerce-step-1.png",
    "/woocommerce-step-2.png",
    "/woocommerce-step-3.png",
  ],
  "/integraties/ccv-shop": [
    "/ccv-icon.svg",
    "/foto-sendwise-kopie.webp",
    "/ccv-step-1.png",
    "/ccv-step-2.png",
    "/ccv-step-3.png",
    "/ccv-step-4.png",
  ],
  "/over-ons": [
    "/074DAC7F-33B0-4769-B2EB-D9A7CAFA53EB.webp",
    "/foto-sendwise-kopie.webp",
    "/sendwise-2.png",
  ],
}

const getPreloadImagesForPath = (pathname) => {
  const routeImages = preloadImagesByPath[pathname] || []
  return [...new Set([...commonPreloadImages, ...routeImages])]
}

const preloadImage = (src) => new Promise((resolve) => {
  const image = new Image()
  image.onload = resolve
  image.onerror = resolve
  image.src = src
})

const preloadRouteImages = (sources) => {
  if (sources.length === 0) return Promise.resolve()

  return Promise.race([
    Promise.all(sources.map(preloadImage)),
    new Promise((resolve) => window.setTimeout(resolve, 3500)),
  ])
}

const PageTransition = ({ children }) => (
  <PreloadedPageTransition>{children}</PreloadedPageTransition>
)

const PreloadedPageTransition = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    preloadRouteImages(getPreloadImagesForPath(location.pathname))
  }, [location.pathname])

  return (
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
}

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
            <PageTransition>
              <FloatingBoxDemo />
            </PageTransition>
          }
        />
        <Route
          path="/oplossingen/sendwise"
          element={
            <PageTransition>
              <SendwisePlatform />
            </PageTransition>
          }
        />
        <Route
          path="/oplossingen/pro"
          element={
            <PageTransition>
              <SendwisePro />
            </PageTransition>
          }
        />
        <Route
          path="/oplossingen/connect"
          element={
            <PageTransition>
              <SendwiseConnect />
            </PageTransition>
          }
        />
        <Route
          path="/voor-webshops"
          element={
            <PageTransition>
              <VoorWebshops />
            </PageTransition>
          }
        />
        <Route
          path="/voor-fulfilmentcenters"
          element={
            <PageTransition>
              <VoorFulfilmentcenters />
            </PageTransition>
          }
        />
        <Route
          path="/prijzen"
          element={
            <PageTransition>
              <Prijzen />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/integraties"
          element={
            <PageTransition>
              <Integraties />
            </PageTransition>
          }
        />
        <Route
          path="/start-met-sendwise"
          element={
            <PageTransition>
              <StartMetSendwise />
            </PageTransition>
          }
        />
        <Route
          path="/werken-bij"
          element={
            <PageTransition>
              <WerkenBij />
            </PageTransition>
          }
        />
        <Route
          path="/kennisbank"
          element={
            <PageTransition>
              <Kennisbank />
            </PageTransition>
          }
        />
        <Route element={<Header />}>
          <Route
            path="/over-ons"
            element={
              <PageTransition>
                <OverOns />
              </PageTransition>
            }
          />
          <Route
            path="/integraties/woocommerce"
            element={
              <PageTransition>
                <IntegratieWooCommerce />
              </PageTransition>
            }
          />
          <Route
            path="/integraties/ccv-shop"
            element={
              <PageTransition>
                <IntegratieCCVShop />
              </PageTransition>
            }
          />
          <Route
            path="/algemene-voorwaarden"
            element={
              <PageTransition>
                <AlgemeneVoorwaarden />
              </PageTransition>
            }
          />
          <Route
            path="/verwerkersovereenkomst"
            element={
              <PageTransition>
                <Verwerkersovereenkomst />
              </PageTransition>
            }
          />
          <Route
            path="/privacy"
            element={
              <PageTransition>
                <Privacy />
              </PageTransition>
            }
          />
          <Route
            path="/blog/sendwise-goedgepickt"
            element={
              <PageTransition>
                <BlogGoedgepickt />
              </PageTransition>
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
