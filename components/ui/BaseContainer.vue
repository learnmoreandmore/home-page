<template>
  <div
    :class="['container', $attrs.class]"
    :style="containerStyle"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  maxWidth?: string
  padding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  maxWidth: 'var(--container-max)',
  padding: true,
})

const containerStyle = computed(() => ({
  maxWidth: props.maxWidth,
  paddingInline: props.padding ? undefined : '0',
}))
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
