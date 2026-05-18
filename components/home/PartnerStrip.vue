<template>
  <section class="partners" aria-labelledby="partners-title">
    <BaseContainer>
      <h2 id="partners-title" class="partners__title">
        合作发行与工作室
      </h2>
      <p class="partners__sub">
        与优质厂商、独立团队共建专题与试玩活动（示例展示）
      </p>
      <ul class="partners__grid">
        <li v-for="name in names" :key="name" class="partners__cell">
          <span class="partners__abbr">{{ name.slice(0, 2) }}</span>
          <span class="partners__name">{{ name }}</span>
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
const names = [
  '星野工作室',
  '像素方舟',
  '幻境互娱',
  '夜航游戏',
  '萌爪发行',
  '云端单机社',
  '琥珀互动',
  '拾光独立',
]
</script>

<style scoped>
.partners {
  padding-block: var(--space-10);
  background: var(--color-bg-secondary);
  border-block: 1px solid var(--color-border-light);
}

.partners__title {
  font-size: var(--text-lg);
  font-weight: 600;
  text-align: center;
  margin-bottom: var(--space-2);
}

.partners__sub {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-align: center;
  margin-bottom: var(--space-8);
}

.partners__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .partners__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .partners__grid {
    grid-template-columns: repeat(8, 1fr);
  }
}

.partners__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-2);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  min-height: 5.5rem;
  transition: box-shadow var(--transition-fast);
}

.partners__cell:hover {
  box-shadow: var(--shadow-sm);
}

.partners__abbr {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-primary-dark);
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
}

.partners__name {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-align: center;
  line-height: var(--leading-tight);
}
</style>
