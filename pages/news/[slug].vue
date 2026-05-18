<script setup lang="ts">
import { getNewsBySlug } from '~/data/news'

const route = useRoute()
const slug = route.params.slug as string
const article = getNewsBySlug(slug)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: '文章未找到' })
}

usePageSeo({
  title: article.title,
  description: article.excerpt,
  type: 'article',
  publishedTime: article.publishedAt,
  keywords: [article.category, '玩趣', '社区资讯'],
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: article.title,
  description: article.excerpt,
  datePublished: article.publishedAt,
  author: {
    '@type': 'Organization',
    name: '玩趣',
  },
})
</script>

<template>
  <article>
    <BaseSection>
      <BaseContainer max-width="800px">
        <nav class="breadcrumb" aria-label="面包屑导航">
          <NuxtLink to="/news">社区资讯</NuxtLink>
          <span aria-hidden="true"> / </span>
          <span>{{ article.category }}</span>
        </nav>

        <header class="article-header">
          <span class="article-header__category">{{ article.category }}</span>
          <h1 class="article-header__title">{{ article.title }}</h1>
          <time class="article-header__date" :datetime="article.publishedAt">
            发布于 {{ article.publishedAt }}
          </time>
        </header>

        <div class="article-content" v-html="article.content" />
      </BaseContainer>
    </BaseSection>
  </article>
</template>

<style scoped>
.breadcrumb {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
}

.breadcrumb a {
  color: var(--color-primary);
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.article-header {
  margin-bottom: var(--space-12);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid var(--color-border);
}

.article-header__category {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-size: var(--text-sm);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}

.article-header__title {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-4);
}

.article-header__date {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.article-content :deep(p) {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.article-content :deep(h2) {
  font-size: var(--text-2xl);
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}
</style>
