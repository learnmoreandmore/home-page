<template>
  <section class="strip" aria-labelledby="genre-strip-title">
    <BaseContainer>
      <h2 id="genre-strip-title" class="strip__title">
        按类型逛游戏
      </h2>
      <p class="strip__desc">
        点选类型，直达游戏库与对应攻略合集
      </p>
      <div class="strip__scroll" role="tablist" aria-label="游戏类型">
        <NuxtLink
          v-for="item in genres"
          :key="item.label"
          :to="item.to"
          class="strip__chip"
        >
          <span class="strip__chip-icon" aria-hidden="true">{{ item.icon }}</span>
          {{ item.label }}
        </NuxtLink>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
const genres = [
  { label: '动作冒险', to: '/products?q=动作', icon: '⚔️' },
  { label: '角色扮演', to: '/solutions#rpg', icon: '🧙' },
  { label: '射击竞技', to: '/products?q=射击', icon: '🎯' },
  { label: '策略模拟', to: '/solutions#strategy', icon: '♟️' },
  { label: '休闲益智', to: '/products?q=休闲', icon: '🧩' },
  { label: '独立游戏', to: '/products?q=独立', icon: '🎨' },
  { label: '二次元', to: '/products?q=二次元', icon: '✨' },
  { label: '联机合作', to: '/solutions#coop', icon: '🤝' },
]
</script>

<style scoped>
.strip {
  padding-block: var(--space-8);
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border-light);
}

.strip__title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.strip__desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-5);
}

.strip__scroll {
  display: flex;
  gap: var(--space-3);
  overflow-x: auto;
  padding-bottom: var(--space-2);
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.strip__scroll::-webkit-scrollbar {
  height: 4px;
}

.strip__scroll::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: var(--radius-full);
}

.strip__chip {
  flex: 0 0 auto;
  scroll-snap-align: start;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  transition: border-color var(--transition-fast), color var(--transition-fast), background var(--transition-fast);
}

.strip__chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary-dark);
  background: var(--color-primary-light);
}

.strip__chip-icon {
  font-size: 1.1rem;
}
</style>
