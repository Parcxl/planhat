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
