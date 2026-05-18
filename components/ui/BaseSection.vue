<template>
  <section :class="['section', bgClass]">
    <BaseContainer>
      <slot />
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'secondary' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const bgClass = computed(() => ({
  'section--secondary': props.variant === 'secondary',
  'section--dark': props.variant === 'dark',
}))
</script>

<style scoped>
.section--secondary {
  background-color: var(--color-bg-secondary);
}

.section--dark {
  background-color: var(--color-bg-dark);
  color: #fff;
}
</style>
