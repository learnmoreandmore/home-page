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
  /* test rebase item1 */
}

.layout__main {
  flex: 1;
}
</style>
