import { defineConfig } from '@rsbuild/core'
import { pluginVue2 } from '@rsbuild/plugin-vue2'
import { pluginSass } from '@rsbuild/plugin-sass'
export default defineConfig({
  plugins: [
    pluginSass({
      sassLoaderOptions: {
        additionalData: `@import '@/style/index.scss';`,
      },
    }),
    pluginVue2(),
  ],
  output: {
    distPath: {
      root: 'build',
      js: 'resource/js',
    },
    assetPrefix: './',
    clean: true,
    filename: 'js/[name].js',
    cssFilename: 'css/[name].css',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  source: {
    alias: { '@': './src' }, 
  },
  server: {
    port: 9931,
  },
  dev: {
    
  },
  tools: {},
})
