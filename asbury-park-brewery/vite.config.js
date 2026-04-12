import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Two build modes:
//   npm run build           -> standard multi-file build in dist/
//   npm run build:single    -> BUNDLE=single, inlines everything into dist/index.html
//                              which the build:single script then copies to the
//                              repo root as asbury-park-brewery-v1.html so it
//                              doesn't collide with the mountain-king preview.
const isSingle = process.env.BUNDLE === 'single'

export default defineConfig({
  plugins: [react(), ...(isSingle ? [viteSingleFile()] : [])],
  build: {
    outDir: 'dist',
    sourcemap: false,
    ...(isSingle
      ? {
          // Single-file-friendly settings
          cssCodeSplit: false,
          assetsInlineLimit: 100_000_000,
          rollupOptions: {
            output: {
              inlineDynamicImports: true,
            },
          },
        }
      : {}),
  },
})
