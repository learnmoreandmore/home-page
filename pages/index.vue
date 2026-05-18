<script setup lang="ts">
const config = useRuntimeConfig()

usePageSeo({
  title: '首页',
  description: '玩趣 - 游戏内容社区，发现好游戏、分享攻略心得、和同好一起开黑聊梗。',
  keywords: ['游戏社区', '游戏攻略', '游戏推荐', '玩家讨论', '玩趣'],
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: config.public.siteName,
  url: config.public.siteUrl,
  description: config.public.siteDescription,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${config.public.siteUrl}/products?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
})
</script>

<template>
  <div>
    <HeroSection />
    <IndustryStrip />
    <FeaturesSection />
    <PartnerStrip />
    <CasesSection />
    <CtaSection />
  </div>
</template>
