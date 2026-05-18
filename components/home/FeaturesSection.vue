<script setup lang="ts">
const features = [
  {
    icon: '🎮',
    title: '游戏库',
    description: '按类型、平台与热度浏览，评分、标签与玩家短评一目了然。',
  },
  {
    icon: '📖',
    title: '攻略专区',
    description: '新手入门、全收集、Boss 打法与版本解读，由玩家共建持续更新。',
  },
  {
    icon: '💬',
    title: '讨论区',
    description: '发帖聊剧情、晒截图、求组队，板块分区清晰，氛围轻松友好。',
  },
  {
    icon: '🏆',
    title: '成就与榜单',
    description: '周榜热帖、神评合集与年度玩家之选，发现社区里正在火的内容。',
  },
  {
    icon: '📺',
    title: '实况与二创',
    description: '支持攻略视频、梗图与同人推荐，优质创作者可获得社区推荐位。',
  },
  {
    icon: '🔔',
    title: '关注与动态',
    description: '关注游戏、话题或 UP 主，新作上线与攻略更新第一时间推送。',
  },
]
</script>

<template>
  <BaseSection>
    <div class="features__head">
      <div class="features__head-text">
        <h2 class="features__title">社区能玩什么</h2>
        <p class="features__subtitle">
          从找游戏到写攻略，玩趣把玩家的日常需求都装在一个社区里
        </p>
      </div>
      <NuxtLink to="/products" class="features__more">
        逛游戏库
        <span aria-hidden="true">›</span>
      </NuxtLink>
    </div>

    <ul class="features__list">
      <li v-for="feature in features" :key="feature.title" class="features__item">
        <span class="features__icon" aria-hidden="true">{{ feature.icon }}</span>
        <div class="features__body">
          <h3 class="features__name">{{ feature.title }}</h3>
          <p class="features__desc">{{ feature.description }}</p>
        </div>
      </li>
    </ul>
  </BaseSection>
</template>

<style scoped>
.features__head {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}

@media (min-width: 768px) {
  .features__head {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.features__title {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.features__subtitle {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  max-width: 36rem;
}

.features__more {
  flex-shrink: 0;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

.features__more:hover {
  color: var(--color-primary-dark);
}

.features__list {
  display: grid;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .features__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features__list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.features__item {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.features__item:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-sm);
}

.features__icon {
  font-size: var(--text-2xl);
  line-height: 1;
}

.features__name {
  font-size: var(--text-base);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.features__desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
</style>
