<template>
  <article :class="['card', { 'card--hover': hover }]">
    <header v-if="$slots.header || icon" class="card__header">
      <div v-if="icon" class="card__icon" aria-hidden="true">
        {{ icon }}
      </div>
      <slot name="header" />
    </header>
    <div class="card__body">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </footer>
  </article>
</template>

<script setup lang="ts">
interface Props {
  icon?: string
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  hover: true,
})
</script>

<style scoped>
.card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.card--hover:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card__icon {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
}

.card__header :deep(h3) {
  font-size: var(--text-xl);
  margin-bottom: var(--space-2);
}

.card__body {
  color: var(--color-text-secondary);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

.card__footer {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-light);
}
</style>
