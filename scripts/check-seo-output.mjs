import { readFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import {
  buildRouteStructuredData,
  getCanonicalUrl,
  SEO_ROUTES,
  sitemapRoutes,
} from "../src/seo/routes.js"

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const distRoot = join(projectRoot, "dist")
const failures = []
const seenTitles = new Map()
const seenCanonicals = new Map()

const outputPath = (pathname) =>
  pathname === "/"
    ? join(distRoot, "index.html")
    : join(distRoot, `${pathname.replace(/^\//, "")}.html`)

const matchContent = (html, pattern) => html.match(pattern)?.[1]?.trim() || ""

const fail = (pathname, message) => failures.push(`${pathname}: ${message}`)

for (const [pathname, seo] of Object.entries(SEO_ROUTES)) {
  const html = await readFile(outputPath(pathname), "utf8")
  const title = matchContent(html, /<title>([\s\S]*?)<\/title>/i)
  const description = matchContent(
    html,
    /<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i,
  )
  const robots = matchContent(html, /<meta\s+name="robots"\s+content="([^"]*)"\s*\/?>/i)
  const canonical = matchContent(html, /<link\s+rel="canonical"\s+href="([^"]*)"\s*\/?>/i)
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length
  const rootMarker = '<div id="root">'
  const rootStart = html.indexOf(rootMarker)
  const rootMarkup = rootStart >= 0
    ? html.slice(rootStart + rootMarker.length, html.indexOf("</body>", rootStart))
    : ""
  const routeJson = matchContent(
    html,
    /<script\s+id="route-structured-data"\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i,
  )

  if (title !== seo.title.replaceAll("&", "&amp;")) fail(pathname, "title does not match route config")
  if (description !== seo.description.replaceAll("&", "&amp;").replaceAll('"', "&quot;")) {
    fail(pathname, "description does not match route config")
  }
  if (seo.index && !robots.startsWith("index,follow")) fail(pathname, "indexable route is not index,follow")
  if (!seo.index && robots !== "noindex,follow") fail(pathname, "non-indexable route is not noindex,follow")
  if (canonical !== getCanonicalUrl(pathname)) fail(pathname, "canonical is not self-referencing")
  if (seo.prerender && h1Count !== 1) fail(pathname, `expected one prerendered H1, found ${h1Count}`)
  if (seo.prerender && rootMarkup.length < 500) fail(pathname, "prerendered root content is unexpectedly small")

  try {
    const parsed = JSON.parse(routeJson || "{}")
    const expected = buildRouteStructuredData(pathname, seo)
    if (JSON.stringify(parsed) !== JSON.stringify(expected || {})) {
      fail(pathname, "route structured data does not match route config")
    }
  } catch (error) {
    fail(pathname, `invalid route structured data: ${error.message}`)
  }

  if (seo.index) {
    if (seenTitles.has(title)) fail(pathname, `duplicate title also used by ${seenTitles.get(title)}`)
    if (seenCanonicals.has(canonical)) fail(pathname, `duplicate canonical also used by ${seenCanonicals.get(canonical)}`)
    seenTitles.set(title, pathname)
    seenCanonicals.set(canonical, pathname)
  }
}

const notFoundHtml = await readFile(join(distRoot, "404.html"), "utf8")
if (!/name="robots"\s+content="noindex,follow"/i.test(notFoundHtml)) fail("404", "missing noindex,follow")
if (/<link\s+rel="canonical"/i.test(notFoundHtml)) fail("404", "must not contain a canonical")
if ((notFoundHtml.match(/<h1[\s>]/gi) || []).length !== 1) fail("404", "must contain one H1")

const sitemap = await readFile(join(distRoot, "sitemap.xml"), "utf8")
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const expectedSitemapUrls = sitemapRoutes().map(({ pathname }) => getCanonicalUrl(pathname))
if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedSitemapUrls)) {
  fail("sitemap.xml", "URLs do not exactly match the indexable sitemap routes")
}

if (failures.length) {
  console.error(`SEO output verification failed (${failures.length}):`)
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exitCode = 1
} else {
  console.log(
    `SEO output verified: ${Object.keys(SEO_ROUTES).length} routes, ${expectedSitemapUrls.length} sitemap URLs and a real 404 document`,
  )
}
