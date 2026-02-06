import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const token = env.ACCOUNTANVRAAG_TOKEN || env.VITE_ACCOUNTANVRAAG_TOKEN || 'parcxl-accountaanvragen-2025'

  return {
    plugins: [react()],
    server: {
      port: 3001,
      proxy: {
        '/api/accountaanvraag': {
          target: 'https://app.sendwise.nl',
          changeOrigin: true,
          secure: true,
          rewrite: () => '/api/accountaanvragen/create',
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Authorization', `Bearer ${token}`)
              proxyReq.setHeader('Content-Type', 'application/json')
            })
          },
        },
      },
    },
  }
})
