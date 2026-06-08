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
  /* test rebase item1 2 */
}

.layout__main {
  width: 100%;
  flex: 1;
  /* test item2 */
  /* test item2 2 */
  /* aaaa */
  /* aaaa222222 */
}
</style>
