import { createServer } from "node:http"
import { readFile, stat } from "node:fs/promises"
import { dirname, extname, join, normalize, sep } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const distRoot = join(projectRoot, "dist")
const requestedPort = Number.parseInt(process.argv[2] || "4173", 10)
const port = Number.isFinite(requestedPort) ? requestedPort : 4173

const prerenderedRoutes = new Map([
  ["/kennisbank/retourportaal-herroepingsrecht", "kennisbank/retourportaal-herroepingsrecht/index.html"],
  ["/kennisbank/retourportaal-herroepingsrecht/", "kennisbank/retourportaal-herroepingsrecht/index.html"],
])

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
}

const safeFilePath = (relativePath) => {
  const filePath = normalize(join(distRoot, relativePath))
  return filePath.startsWith(`${distRoot}${sep}`) ? filePath : null
}

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url || "/", `http://${request.headers.host || "localhost"}`).pathname)
    let relativePath = prerenderedRoutes.get(pathname)

    if (!relativePath) {
      const publicPath = pathname.replace(/^\/+/, "")
      const candidate = safeFilePath(publicPath)
      if (candidate && publicPath) {
        try {
          if ((await stat(candidate)).isFile()) relativePath = publicPath
        } catch {
          // Non-file routes use the SPA fallback below.
        }
      }
    }

    relativePath ||= "index.html"
    const filePath = safeFilePath(relativePath)
    if (!filePath) {
      response.writeHead(403)
      response.end("Forbidden")
      return
    }

    const body = await readFile(filePath)
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": relativePath.endsWith(".html") ? "no-cache" : "public, max-age=31536000, immutable",
    })
    response.end(body)
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
    response.end(`Server error: ${error.message}`)
  }
})

server.listen(port, "0.0.0.0", () => {
  console.log(`Production preview: http://localhost:${port}`)
})
