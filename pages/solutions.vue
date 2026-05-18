<script setup lang="ts">
usePageSeo({
  title: '攻略专区',
  description: '玩趣攻略专区 - 新手向、全收集、Boss 打法与版本解读，玩家共建持续更新。',
  keywords: ['游戏攻略', '新手指南', '全收集', '玩趣'],
})

const guides = [
  {
    id: 'rpg',
    genre: '角色扮演',
    icon: '🧙',
    title: '一周目不迷路：主线 + 支线优先级',
    description: '按章节梳理推主线节奏、易错过支线与推荐等级区间，适合刚入坑的玩家。',
    highlights: ['主线顺序', '支线清单', '练级建议', '结局分支'],
  },
  {
    id: 'strategy',
    genre: '策略模拟',
    icon: '♟️',
    title: '资源规划与前期运营思路',
    description: '从开局资源分配到中期扩张节奏，附常见翻车点与不同难度下的调整方案。',
    highlights: ['开局模板', '科技路线', '兵种搭配', '经济平衡'],
  },
  {
    id: 'coop',
    genre: '联机合作',
    icon: '🤝',
    title: '联机分工与配装推荐',
    description: '2～4 人联机职责划分、武器/技能搭配与 Boss 阶段处理，减少野队沟通成本。',
    highlights: ['职业分工', '配装方案', 'Boss 阶段', '语音要点'],
  },
  {
    id: 'rogue',
    genre: '肉鸽动作',
    icon: '🎲',
    title: '词条构筑与通关 Build 合集',
    description: '汇总高胜率词条组合、遗物优先级与各层 Boss 对策，含无氪与速通两套思路。',
    highlights: ['词条 Tier', '遗物优先级', 'Boss 对策', '速通路线'],
  },
]
</script>

<template>
  <div>
    <BaseSection>
      <div class="page-header text-center">
        <h1 class="page-header__title">攻略专区</h1>
        <p class="page-header__desc">
          玩家共建攻略，从入门到进阶，持续随版本更新
        </p>
      </div>
    </BaseSection>

    <BaseSection variant="secondary">
      <div class="solutions-list">
        <article
          v-for="(guide, index) in guides"
          :id="guide.id"
          :key="guide.title"
          class="solution-item"
          :class="{ 'solution-item--reverse': index % 2 === 1 }"
        >
          <div class="solution-item__content">
            <span class="solution-item__industry">{{ guide.genre }}</span>
            <h2 class="solution-item__title">{{ guide.title }}</h2>
            <p class="solution-item__desc">{{ guide.description }}</p>
            <ul class="solution-item__highlights">
              <li v-for="item in guide.highlights" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="solution-item__visual" aria-hidden="true">
            <span class="solution-item__icon">{{ guide.icon }}</span>
          </div>
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

.solutions-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.solution-item {
  display: grid;
  gap: var(--space-8);
  align-items: center;
  padding: var(--space-8);
  background: var(--color-bg);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .solution-item {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);
  }

  .solution-item--reverse .solution-item__content {
    order: 2;
  }

  .solution-item--reverse .solution-item__visual {
    order: 1;
  }
}

.solution-item__industry {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}

.solution-item__title {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-4);
}

.solution-item__desc {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.solution-item__highlights {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.solution-item__highlights li {
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  font-size: var(--text-sm);
  border-radius: var(--radius-md);
}

.solution-item__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-bg-secondary));
  border-radius: var(--radius-lg);
}

.solution-item__icon {
  font-size: 5rem;
}
</style>
