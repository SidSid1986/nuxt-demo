// nuxt.config.ts
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  // 1. 全局 CSS 引入（推荐：直接在 Nuxt 顶层配置，而非 Vite 内部）
  css: ['element-plus/dist/index.css'],

  // 2. 配置插件
  plugins: ['~/plugins/element-plus.ts'],

  // 3. 配置 Vite 插件
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass' // 自动导入 SASS 样式
          })
        ]
      })
    ],

    // 4. 如需配置 CSS 预处理器（如 SASS），在这里写
    css: {
      preprocessorOptions: {
        scss: {
          // 例如：全局注入 SASS 变量
          // additionalData: `@use "~/assets/styles/variables.scss" as *;`
        }
      }
    }
  }
})