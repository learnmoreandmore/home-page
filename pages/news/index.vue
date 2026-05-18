<script setup lang="ts">
import { newsArticles } from '~/data/news'

usePageSeo({
  title: '社区资讯',
  description: '玩趣社区资讯 - 活动专题、产品更新与社区公告。',
  keywords: ['社区资讯', '游戏活动', '玩趣', '社区公告'],
})
</script>

<template>
  <div>
    <BaseSection>
      <div class="page-header text-center">
        <h1 class="page-header__title">社区资讯</h1>
        <p class="page-header__desc">
          活动、更新与公告，玩趣社区一手掌握
        </p>
      </div>
    </BaseSection>

    <BaseSection variant="secondary">
      <div class="news-grid">
        <article v-for="article in newsArticles" :key="article.slug" class="news-card">
          <span class="news-card__category">{{ article.category }}</span>
          <h2 class="news-card__title">
            <NuxtLink :to="`/news/${article.slug}`">
              {{ article.title }}
            </NuxtLink>
          </h2>
          <p class="news-card__excerpt">{{ article.excerpt }}</p>
          <time class="news-card__date" :datetime="article.publishedAt">
            {{ article.publishedAt }}
          </time>
        </article>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped>
.page-header__title {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-4);
}

.page-header__desc {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}

.news-grid {
  display: grid;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.news-card {
  padding: var(--space-6);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: box-shadow var(--transition-base);
}

.news-card:hover {
  box-shadow: var(--shadow-md);
}

.news-card__category {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-size: var(--text-xs);
  font-weight: 500;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}

.news-card__title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-3);
}

.news-card__title a {
  transition: color var(--transition-fast);
}

.news-card__title a:hover {
  color: var(--color-primary);
}

.news-card__excerpt {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.news-card__date {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}
</style>
