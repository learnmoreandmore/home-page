<script setup lang="ts">
const route = useRoute()
const searchQuery = computed(() => {
  const q = route.query.q
  return typeof q === 'string' ? q.trim() : ''
})

usePageSeo({
  title: '游戏库',
  description: '玩趣游戏库 - 按类型与热度浏览游戏，查看评分、标签与玩家短评。',
  keywords: ['游戏库', '游戏推荐', '游戏评分', '玩趣'],
})

const games = [
  {
    icon: '🌌',
    name: '星界旅人',
    description: '开放世界太空探索 RPG，支持多人联机与飞船自定义，社区评分 9.1。',
    features: ['开放世界', '联机', '剧情向', 'PC / 主机'],
  },
  {
    icon: '🏰',
    name: '深渊回廊',
    description: 'Roguelike 地牢探险，每局随机词条与 Build，适合短局刷图与挑战排行。',
    features: ['肉鸽', '动作', '高重玩', 'Steam'],
  },
  {
    icon: '⚔️',
    name: '剑与晨雾',
    description: '回合制策略 + 营地养成，战棋关卡与多结局分支，攻略向玩家口碑稳定。',
    features: ['策略', '回合制', '多结局', '独立'],
  },
  {
    icon: '🎵',
    name: '节拍街区',
    description: '音乐节奏 + 都市叙事，曲库持续更新，适合休闲玩家与音游爱好者。',
    features: ['音游', '休闲', '剧情', '移动端'],
  },
]
</script>

<template>
  <div>
    <BaseSection>
      <div class="page-header text-center">
        <h1 class="page-header__title">游戏库</h1>
        <p class="page-header__desc">
          发现值得一玩的作品，查看标签、平台与社区评价
        </p>
        <p v-if="searchQuery" class="page-header__query" role="status">
          当前搜索：<strong>{{ searchQuery }}</strong> · 以下为相关游戏，也可到
          <NuxtLink to="/solutions">攻略专区</NuxtLink>
          看看玩家心得
        </p>
      </div>
    </BaseSection>

    <BaseSection variant="secondary">
      <div class="products-grid">
        <article v-for="game in games" :key="game.name" class="product-card">
          <span class="product-card__icon" aria-hidden="true">{{ game.icon }}</span>
          <h2 class="product-card__name">{{ game.name }}</h2>
          <p class="product-card__desc">{{ game.description }}</p>
          <ul class="product-card__features">
            <li v-for="feature in game.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </article>
      </div>
    </BaseSection>

    <CtaSection />
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

.page-header__query {
  margin-top: var(--space-6);
  max-width: 48rem;
  margin-inline: auto;
  padding: var(--space-4) var(--space-5);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  background: var(--color-primary-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  line-height: var(--leading-relaxed);
}

.page-header__query strong {
  color: var(--color-primary-dark);
}

.page-header__query a {
  color: var(--color-primary-dark);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.products-grid {
  display: grid;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.product-card {
  padding: var(--space-8);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: box-shadow var(--transition-base);
}

.product-card:hover {
  box-shadow: var(--shadow-lg);
}

.product-card__icon {
  font-size: var(--text-4xl);
  display: block;
  margin-bottom: var(--space-4);
}

.product-card__name {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-4);
}

.product-card__desc {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.product-card__features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.product-card__features li {
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  font-size: var(--text-sm);
  border-radius: var(--radius-full);
}
</style>
