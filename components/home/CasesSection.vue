<script setup lang="ts">
const highlights = [
  {
    tag: '热帖',
    title: '《星界旅人》全收集路线图文（含隐藏结局）',
    metric: '2.3万赞',
    sub: '328 条讨论',
  },
  {
    tag: '活动',
    title: '玩趣 × 独立发行商「夏夜游戏节」专题页上线',
    metric: '40+款',
    sub: '限时试玩与折扣',
  },
  {
    tag: '榜单',
    title: '本周玩家热议：联机肉鸽新作口碑逆袭',
    metric: '9.1分',
    sub: '社区综合评分',
  },
]
</script>

<template>
  <BaseSection variant="secondary">
    <div class="cases__head">
      <div>
        <h2 class="cases__title">社区精选</h2>
        <p class="cases__subtitle">
          正在火的内容，来自真实玩家
        </p>
      </div>
      <NuxtLink to="/news" class="cases__more">
        更多资讯
        <span aria-hidden="true">›</span>
      </NuxtLink>
    </div>

    <ul class="cases__list">
      <li v-for="item in highlights" :key="item.title" class="cases__row">
        <div class="cases__main">
          <span class="cases__tag">{{ item.tag }}</span>
          <h3 class="cases__name">{{ item.title }}</h3>
        </div>
        <div class="cases__aside">
          <p class="cases__metric">{{ item.metric }}</p>
          <p class="cases__sub">{{ item.sub }}</p>
        </div>
      </li>
    </ul>
  </BaseSection>
</template>

<style scoped>
.cases__head {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

@media (min-width: 640px) {
  .cases__head {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.cases__title {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.cases__subtitle {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.cases__more {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-primary);
}

.cases__more:hover {
  color: var(--color-primary-dark);
}

.cases__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.cases__row {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: box-shadow var(--transition-fast);
}

@media (min-width: 640px) {
  .cases__row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.cases__row:hover {
  box-shadow: var(--shadow-md);
}

.cases__tag {
  display: inline-block;
  padding: 2px var(--space-2);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-primary-dark);
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-2);
}

.cases__name {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text);
  line-height: var(--leading-tight);
}

.cases__aside {
  flex-shrink: 0;
  text-align: left;
}

@media (min-width: 640px) {
  .cases__aside {
    text-align: right;
    min-width: 8rem;
  }
}

.cases__metric {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-highlight);
}

.cases__sub {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: var(--space-1);
}
</style>
