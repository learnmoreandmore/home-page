<template>
  <component
    :is="tag"
    :class="['btn', `btn--${variant}`, `btn--${size}`, { 'btn--block': block }]"
    :type="tag === 'button' ? type : undefined"
    :to="to"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  to?: string
  href?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  block: false,
  type: 'button',
})

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  white-space: nowrap;
  text-decoration: none;
}

.btn--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn--md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
}

.btn--lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

.btn--block {
  width: 100%;
}

.btn--primary {
  background-color: var(--color-primary);
  color: #fff;
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
}

.btn--secondary {
  background-color: var(--color-bg-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.btn--secondary:hover {
  background-color: var(--color-border-light);
}

.btn--outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn--outline:hover {
  background-color: var(--color-primary-light);
}

.btn--ghost {
  background-color: transparent;
  color: var(--color-text);
}

.btn--ghost:hover {
  background-color: var(--color-bg-secondary);
}
</style>
