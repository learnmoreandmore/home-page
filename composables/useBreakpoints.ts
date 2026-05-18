export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export function useBreakpoints() {
  const width = ref(0)

  const updateWidth = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  const current = computed<Breakpoint>(() => {
    const w = width.value
    if (w >= BREAKPOINTS['2xl']) return '2xl'
    if (w >= BREAKPOINTS.xl) return 'xl'
    if (w >= BREAKPOINTS.lg) return 'lg'
    if (w >= BREAKPOINTS.md) return 'md'
    if (w >= BREAKPOINTS.sm) return 'sm'
    return 'xs'
  })

  const isMobile = computed(() => width.value < BREAKPOINTS.md)
  const isTablet = computed(() => width.value >= BREAKPOINTS.md && width.value < BREAKPOINTS.lg)
  const isDesktop = computed(() => width.value >= BREAKPOINTS.lg)

  function greaterThan(bp: Breakpoint): ComputedRef<boolean> {
    return computed(() => width.value >= BREAKPOINTS[bp])
  }

  function lessThan(bp: Breakpoint): ComputedRef<boolean> {
    return computed(() => width.value < BREAKPOINTS[bp])
  }

  return {
    width: readonly(width),
    current,
    isMobile,
    isTablet,
    isDesktop,
    greaterThan,
    lessThan,
    BREAKPOINTS,
  }
}
