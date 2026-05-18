// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },

  // ui / layout：pathPrefix: false → BaseSection、AppHeader 等
  // home：单独注册目录（自定义 components 数组会覆盖默认 ~/components 扫描）
  // 使用文件名作为标签：HeroSection、CtaSection 等（非 HomeCtaSection）
  components: [
    { path: '~/components/ui', pathPrefix: false },
    { path: '~/components/layout', pathPrefix: false },
    { path: '~/components/home', pathPrefix: false },
  ],

  modules: ['@nuxtjs/sitemap'],

  css: ['~/assets/styles/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    name: '玩趣',
    description: '玩趣 - 游戏内容社区，发现好游戏、分享攻略心得、和同好一起开黑聊梗。',
    defaultLocale: 'zh-CN',
  },

  sitemap: {
    strictNuxtContentPaths: true,
    /** 无动态路由源时减小服务端体积，并消除 build 时的 zeroRuntime 提示 */
    zeroRuntime: true,
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: '玩趣',
      siteDescription: '玩趣 - 游戏内容社区，发现好游戏、分享攻略心得、和同好一起开黑聊梗。',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
