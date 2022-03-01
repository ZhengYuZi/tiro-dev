const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')

const entryDir = path.resolve(__dirname, '../../tiro-ui')
const outputDir = path.resolve(__dirname, '../../build')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, 'index.ts'),
          name: 'tiro-ui',
          fileName: 'tiro-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
}

const buildLib = async () => {
  await buildAll()
}

buildLib()
