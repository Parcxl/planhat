import { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence, motion as Motion } from "framer-motion"
import HomePage2 from "./page/Homepage2"
import Cookie from "./components/ui/Cookie"
import {
  buildRouteStructuredData,
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  getCanonicalUrl,
  getSeoForPath,
  SITE_URL,
} from "./seo/routes"

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
const KennisbankPostnlToeslagen = lazy(() => import("./page/KennisbankPostnlToeslagen"))
const FacebookAdsLanding = lazy(() => import("./page/FacebookAdsLanding"))
const FacebookAdsThanks = lazy(() => import("./page/FacebookAdsThanks"))
const NotFound = lazy(() => import("./page/NotFound"))

const criticalImagesByPath = {
  "/": ["/sendwise-hero-delivery-van.jpg"],
  "/homepage2": ["/sendwise-hero-delivery-van.jpg"],
  "/verzend-slimmer": ["/sendwise-hero-delivery-van.jpg"],
  "/verzend-slimmer/bedankt": ["/sendwise-hero-delivery-van.jpg"],
  "/oplossingen/sendwise": ["/sendwise-platform-dashboard-hero.webp"],
  "/oplossingen/pro": ["/sendwise-pro-dashboard-hero.webp"],
  "/oplossingen/connect": ["/sendwise-connect-hero.jpg"],
  "/voor-webshops": ["/sendwise-platform-hero.webp"],
  "/voor-fulfilmentcenters": ["/fulfilmentcenters-hero.avif"],
  "/prijzen": ["/profile-olivier.avif"],
  "/contact": ["/contact-hero-olivier.avif"],
  "/start-met-sendwise": ["/profile-founder-van.webp"],
  "/blog/sendwise-goedgepickt": ["/sendwise-hero-picture.avif"],
  "/integraties/woocommerce": ["/woocommerce-logo.webp"],
  "/integraties/ccv-shop": ["/ccv-icon.svg"],
  "/kennisbank": ["/wix-step-8.png"],
  "/kennisbank/wix-verbinden": ["/wix-step-8.png"],
  "/kennisbank/retourportaal-herroepingsrecht": ["/profile-joep.webp"],
  "/kennisbank/postnl-energietoeslag-vrachtwagenheffing": ["/postnl-icoon.webp"],
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
    initial={typeof window === "undefined" ? false : { opacity: 0, y: 6 }}
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

const removeCanonical = () => {
  document.head.querySelector('link[rel="canonical"]')?.remove()
}

export const AnimatedRoutes = () => {
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
    syncCriticalPreloadLinks(criticalImagesByPath[location.pathname] || [])
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname])

  useEffect(() => {
    const seo = getSeoForPath(location.pathname)

    document.documentElement.lang = "nl"
    document.title = seo.title
    const canonicalUrl = getCanonicalUrl(location.pathname)
    const imageUrl = `${SITE_URL}${seo.image || DEFAULT_SOCIAL_IMAGE}`
    const imageAlt = seo.imageAlt || DEFAULT_SOCIAL_IMAGE_ALT

    upsertMeta("name", "description", seo.description)
    upsertMeta(
      "name",
      "robots",
      seo.index
        ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        : "noindex,follow",
    )
    if (seo.notFound) removeCanonical()
    else setCanonical(canonicalUrl)

    upsertMeta("property", "og:locale", "nl_NL")
    upsertMeta("property", "og:type", seo.type || "website")
    upsertMeta("property", "og:site_name", "Sendwise")
    upsertMeta("property", "og:title", seo.title)
    upsertMeta("property", "og:description", seo.description)
    upsertMeta("property", "og:url", seo.notFound ? SITE_URL : canonicalUrl)
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

    const structuredData = buildRouteStructuredData(location.pathname, seo)
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
          path="/kennisbank/postnl-energietoeslag-vrachtwagenheffing"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <KennisbankPostnlToeslagen />
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
              <Suspense fallback={<RouteFallback />}>
                <PageTransition>
                  <NotFound />
                </PageTransition>
              </Suspense>
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
