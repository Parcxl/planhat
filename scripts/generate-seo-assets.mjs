import { writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { getCanonicalUrl, sitemapRoutes } from "../src/seo/routes.js"

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const publicRoot = join(projectRoot, "public")

const urls = sitemapRoutes()
  .map(({ pathname, lastmod }) => {
    const modified = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""
    return `  <url>\n    <loc>${getCanonicalUrl(pathname)}</loc>${modified}\n  </url>`
  })
  .join("\n")

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: https://www.sendwise.nl/sitemap.xml
`

await Promise.all([
  writeFile(join(publicRoot, "sitemap.xml"), sitemap),
  writeFile(join(publicRoot, "robots.txt"), robots),
])

console.log(`Generated sitemap with ${sitemapRoutes().length} canonical URLs`)
