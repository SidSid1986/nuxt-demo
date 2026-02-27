// nuxt.config.ts
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  // 1. 全局样式
  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css'
  ],

  // 2. 插件配置
  plugins: [
    '~/plugins/element-plus.ts',
    '~/plugins/rem-adaptation.client.js' // 简化后的插件
  ],

  // 3. App 配置 (核心修改：注入外部 REM 初始化脚本)
  app: {
    head: {
      script: [
        {
          src: '/rem-init.js', // 指向 public/rem-init.js
          tagPosition: 'head', // 【关键】放在 head 中，阻塞渲染直到执行完毕
          tagPriority: 'high'  // 高优先级加载
        }
      ]
    }
  },

  // 4. Vite 插件配置 (自动导入)
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: false // 样式已由 css 数组全局引入
          })
        ]
      })
    ]
  },

  // 5. 运行时配置
  runtimeConfig: {
    private: {
      backendUrl: '',
      internalKey: ''
    },
    public: {
      apiBase: ''
    }
  },

  // 6. PostCSS 配置 (PX 转 REM)
  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 10, // 必须与 JS 中的 baseFontSize 逻辑匹配
        propList: ['*', '!border'],
        selectorBlackList: ['norem'],
        unitPrecision: 5,
        replace: true,
        mediaQuery: true,
        minPixelValue: 2
      },
      autoprefixer: {}
    }
  },

  // 7. 其他推荐配置 (可选)
  compatibilityDate: '2024-11-01', // 建议添加兼容性日期
  devtools: { enabled: true }
})