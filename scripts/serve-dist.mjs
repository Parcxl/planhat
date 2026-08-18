import { createServer } from "node:http"
import { readFile, stat } from "node:fs/promises"
import { dirname, extname, join, normalize, sep } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const distRoot = join(projectRoot, "dist")
const requestedPort = Number.parseInt(process.argv[2] || "4173", 10)
const port = Number.isFinite(requestedPort) ? requestedPort : 4173

const redirects = new Map([
  ["/homepage2", "/"],
  ["/blog", "/kennisbank"],
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
  ".pdf": "application/pdf",
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

const existingFile = async (relativePath) => {
  const filePath = safeFilePath(relativePath)
  if (!filePath) return null
  try {
    return (await stat(filePath)).isFile() ? filePath : null
  } catch {
    return null
  }
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`)
    let pathname = decodeURIComponent(url.pathname)

    if (pathname.length > 1 && pathname.endsWith("/")) {
      response.writeHead(308, { Location: `${pathname.replace(/\/+$/, "")}${url.search}` })
      response.end()
      return
    }

    if (redirects.has(pathname)) {
      response.writeHead(308, { Location: redirects.get(pathname) })
      response.end()
      return
    }

    const publicPath = pathname.replace(/^\/+/, "")
    let filePath
    let statusCode = 200

    if (pathname === "/") {
      filePath = await existingFile("index.html")
    } else if (extname(publicPath)) {
      filePath = await existingFile(publicPath)
    } else {
      filePath = await existingFile(`${publicPath}.html`)
    }

    if (!filePath) {
      filePath = await existingFile("404.html")
      statusCode = 404
    }

    const body = await readFile(filePath)
    const extension = extname(filePath).toLowerCase()
    response.writeHead(statusCode, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
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
