<template>
  <div class="layout">
    <AppHeader />
    <main id="main-content" class="layout__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  width: 100%;
}

.layout__main {
  width: 100%;
  flex: 1;
  /* aaaa */
  /* aaaa222222 */
  /* aaaa3333 */
}
</style>
