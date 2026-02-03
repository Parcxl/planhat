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

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Header />}>
          <Route
            index
            path="/"
            element={
              <PageTransition>
                <Home />
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
            path="/over-ons"
            element={
              <PageTransition>
                <OverOns />
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
