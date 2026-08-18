import { PassThrough } from "node:stream"
import { renderToPipeableStream } from "react-dom/server"
import { StaticRouter } from "react-router"
import { AnimatedRoutes } from "./App"

const RENDER_TIMEOUT_MS = 20_000

export const renderRoute = (pathname) =>
  new Promise((resolve, reject) => {
    let markup = ""
    let settled = false
    let timeout
    let renderError
    const output = new PassThrough()

    const finish = (callback, value) => {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      callback(value)
    }

    output.setEncoding("utf8")
    output.on("data", (chunk) => {
      markup += chunk
    })
    output.on("end", () => {
      if (renderError) finish(reject, renderError)
      else finish(resolve, markup)
    })
    output.on("error", (error) => finish(reject, error))

    const { abort, pipe } = renderToPipeableStream(
      <StaticRouter location={pathname}>
        <AnimatedRoutes />
      </StaticRouter>,
      {
        onAllReady() {
          pipe(output)
        },
        onShellError(error) {
          finish(reject, error)
        },
        onError(error) {
          renderError ||= error
        },
      },
    )

    timeout = setTimeout(() => {
      abort()
      finish(reject, new Error(`Rendering ${pathname} exceeded ${RENDER_TIMEOUT_MS}ms`))
    }, RENDER_TIMEOUT_MS)
  })
