const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
  plugins: [react()],
  base: '/cristina/',
  optimizeDeps: {
    exclude: [
      '@react-three/fiber',
      '@react-three/drei',
      '@react-three/postprocessing',
    ],
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 3000,
  },
})
