import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { build } from "vite"
import {
  buildRouteStructuredData,
  buildSiteStructuredData,
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  getCanonicalUrl,
  NOT_FOUND_SEO,
  SEO_ROUTES,
  SITE_URL,
} from "../src/seo/routes.js"

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const distRoot = join(projectRoot, "dist")
const ssrRoot = join(projectRoot, ".seo-ssr")
const sourceHtml = await readFile(join(distRoot, "index.html"), "utf8")

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")

const safeJson = (value) => JSON.stringify(value).replaceAll("<", "\\u003c")

const replaceMeta = (html, attribute, key, value) => {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[\\s\\S]*?\\/?>`, "i")
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `  ${tag}\n</head>`)
}

const removeMeta = (html, attribute, key) =>
  html.replace(new RegExp(`\\s*<meta\\s+${attribute}="${key}"[\\s\\S]*?\\/?>`, "i"), "")

const replaceJsonLd = (html, id, value) => {
  const script = `<script id="${id}" type="application/ld+json">${safeJson(value || {})}</script>`
  const pattern = new RegExp(`<script\\s+id="${id}"[\\s\\S]*?<\\/script>`, "i")
  return pattern.test(html) ? html.replace(pattern, script) : html.replace("</head>", `  ${script}\n</head>`)
}

const createHtml = ({ pathname, seo, markup = "", notFound = false }) => {
  const canonicalUrl = getCanonicalUrl(pathname)
  const imageUrl = `${SITE_URL}${seo.image || DEFAULT_SOCIAL_IMAGE}`
  const imageAlt = seo.imageAlt || DEFAULT_SOCIAL_IMAGE_ALT
  let html = sourceHtml
    .replace(/<html\s+lang="[^"]*"/i, '<html lang="nl"')
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

  html = replaceMeta(html, "name", "description", seo.description)
  html = replaceMeta(
    html,
    "name",
    "robots",
    seo.index
      ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      : "noindex,follow",
  )
  html = replaceMeta(html, "property", "og:locale", "nl_NL")
  html = replaceMeta(html, "property", "og:type", seo.type || "website")
  html = replaceMeta(html, "property", "og:site_name", "Sendwise")
  html = replaceMeta(html, "property", "og:title", seo.title)
  html = replaceMeta(html, "property", "og:description", seo.description)
  html = replaceMeta(html, "property", "og:url", notFound ? SITE_URL : canonicalUrl)
  html = replaceMeta(html, "property", "og:image", imageUrl)
  html = replaceMeta(html, "property", "og:image:alt", imageAlt)
  html = replaceMeta(html, "name", "twitter:card", "summary_large_image")
  html = replaceMeta(html, "name", "twitter:title", seo.title)
  html = replaceMeta(html, "name", "twitter:description", seo.description)
  html = replaceMeta(html, "name", "twitter:image", imageUrl)
  html = replaceMeta(html, "name", "twitter:image:alt", imageAlt)

  if (notFound) {
    html = html.replace(/\s*<link\s+rel="canonical"[\s\S]*?\/?\s*>/i, "")
  } else {
    html = html.replace(
      /<link\s+rel="canonical"[\s\S]*?\/?\s*>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    )
  }

  if (seo.type === "article") {
    html = replaceMeta(html, "property", "article:published_time", seo.publishedTime)
    html = replaceMeta(html, "property", "article:modified_time", seo.modifiedTime)
    html = replaceMeta(html, "property", "article:author", "Sendwise Team")
  } else {
    html = removeMeta(html, "property", "article:published_time")
    html = removeMeta(html, "property", "article:modified_time")
    html = removeMeta(html, "property", "article:author")
  }

  html = replaceJsonLd(html, "site-structured-data", buildSiteStructuredData())
  html = replaceJsonLd(html, "route-structured-data", buildRouteStructuredData(pathname, seo))
  return html
}

const routeOutputPath = (pathname) =>
  pathname === "/"
    ? join(distRoot, "index.html")
    : join(distRoot, `${pathname.replace(/^\//, "")}.html`)

await build({
  root: projectRoot,
  publicDir: false,
  logLevel: "warn",
  ssr: {
    noExternal: ["@gsap/react", "gsap"],
  },
  build: {
    ssr: join(projectRoot, "src/entry-server.jsx"),
    outDir: ssrRoot,
    emptyOutDir: true,
    rollupOptions: {
      output: { entryFileNames: "entry-server.mjs" },
    },
  },
})

try {
  const serverEntryUrl = `${pathToFileURL(join(ssrRoot, "entry-server.mjs")).href}?v=${Date.now()}`
  const { renderRoute } = await import(serverEntryUrl)

  for (const [pathname, seo] of Object.entries(SEO_ROUTES)) {
    const markup = seo.prerender ? await renderRoute(pathname) : ""
    const outputPath = routeOutputPath(pathname)
    await mkdir(dirname(outputPath), { recursive: true })
    await writeFile(outputPath, createHtml({ pathname, seo, markup }))
    console.log(`Generated SEO page: ${pathname}`)
  }

  const notFoundMarkup = await renderRoute("/404-seo-not-found")
  await writeFile(
    join(distRoot, "404.html"),
    createHtml({
      pathname: "/404-seo-not-found",
      seo: NOT_FOUND_SEO,
      markup: notFoundMarkup,
      notFound: true,
    }),
  )
  console.log("Generated SEO page: 404")
} finally {
  await rm(ssrRoot, { recursive: true, force: true })
}
