<script setup lang="ts">
const navItems = [
  { label: '首页', to: '/' },
  { label: '关于玩趣', to: '/about' },
  { label: '游戏库', to: '/products' },
  { label: '攻略专区', to: '/solutions' },
  { label: '社区资讯', to: '/news' },
  { label: '加入社区', to: '/contact' },
]
</script>

<template>
  <nav class="nav" aria-label="主导航">
    <ul class="nav__list">
      <li v-for="item in navItems" :key="item.to" class="nav__item">
        <NuxtLink :to="item.to" class="nav__link">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav__list {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav__link {
  display: block;
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: color var(--transition-fast), background-color var(--transition-fast);
}

.nav__link:hover,
.nav__link.router-link-active {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
}

@media (min-width: 1024px) {
  .nav__link {
    font-size: var(--text-base);
    padding: var(--space-2) var(--space-5);
  }
}
</style>
