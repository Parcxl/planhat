import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Header from "./components/ui/Header"
import Home from "./page/Home"
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

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -14 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

const seoMap = {
  "/": {
    title: "Slim verzenden voor webshops — vanaf €3,50 per pakket | Sendwise",
    description:
      "Verzend pakketten vanaf €3,50 per stuk. Geen contracten, geen abonnementskosten en eerlijke all-in tarieven zonder verrassingen.",
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
      "Het verhaal achter Sendwise. Ons team, onze missie en waarom wij verzenden eenvoudiger maken.",
  },
  "/contact": {
    title: "Contact met Sendwise | Neem contact op",
    description:
      "Vragen over Sendwise? Neem contact met ons op. We helpen je graag op weg.",
  },
  "/start-met-sendwise": {
    title: "Account aanvragen | Start met Sendwise",
    description:
      "Vraag een account aan bij Sendwise. Binnen 24 uur nemen we contact op.",
  },
  "/algemene-voorwaarden": {
    title: "Algemene voorwaarden | Sendwise",
    description:
      "Lees de algemene voorwaarden van Sendwise voor het gebruik van het platform.",
  },
  "/privacy": {
    title: "Privacy voorwaarden | Sendwise",
    description:
      "Lees hoe Sendwise omgaat met persoonsgegevens en privacy.",
  },
  "/integraties": {
    title: "Integraties | Sendwise koppelingen",
    description:
      "Bekijk alle integraties van Sendwise met webshops en systemen.",
  },
  "/blog/sendwise-goedgepickt": {
    title: "Sendwise x GoedGepickt | Integratie en voordelen",
    description:
      "Koppel Sendwise met GoedGepickt en automatiseer je fulfilment.",
  },
}

const AnimatedRoutes = () => {
  const location = useLocation()

  useEffect(() => {
    const current = seoMap[location.pathname]
    if (!current) return
    document.title = current.title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", current.description)
    }
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <PageTransition>
                <Home />
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
            path="/start-met-sendwise"
            element={
              <PageTransition>
                <StartMetSendwise />
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
            path="/integraties"
            element={
              <PageTransition>
                <Integraties />
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
