<script setup lang="ts">
const config = useRuntimeConfig()
const { isMobile } = useBreakpoints()
const menuOpen = ref(false)

const siteName = config.public.siteName as string

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

watch(isMobile, (mobile) => {
  if (!mobile) menuOpen.value = false
})
</script>

<template>
  <header class="header">
    <div class="header__topbar" role="note">
      <BaseContainer class="header__topbar-inner">
        <span>玩家共建攻略社区</span>
        <span class="header__dot" aria-hidden="true">·</span>
        <span>每日更新游戏资讯</span>
        <span class="header__dot" aria-hidden="true">·</span>
        <span>友善讨论，拒绝引战</span>
      </BaseContainer>
    </div>
    <BaseContainer class="header__inner">
      <NuxtLink to="/" class="header__logo" @click="closeMenu">
        <span class="header__logo-icon" aria-hidden="true">玩</span>
        <span class="header__logo-text">{{ siteName }}</span>
      </NuxtLink>

      <AppNav v-if="!isMobile" class="header__nav" />

      <div class="header__actions">
        <NuxtLink v-if="!isMobile" to="/contact" class="header__link">
          创作者入驻
        </NuxtLink>
        <BaseButton v-if="!isMobile" to="/contact" size="sm">
          立即加入
        </BaseButton>

        <button
          v-if="isMobile"
          class="header__menu-btn"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          aria-label="打开菜单"
          @click="toggleMenu"
        >
          <span class="header__menu-icon" :class="{ 'is-open': menuOpen }" />
        </button>
      </div>
    </BaseContainer>

    <Transition name="slide">
      <div
        v-if="isMobile && menuOpen"
        id="mobile-menu"
        class="header__mobile-menu"
      >
        <AppNav @click="closeMenu" />
        <NuxtLink to="/contact" class="header__link header__link--block" @click="closeMenu">
          创作者入驻
        </NuxtLink>
        <BaseButton to="/contact" block @click="closeMenu">
          立即加入
        </BaseButton>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header__topbar {
  display: none;
  background: linear-gradient(90deg, var(--color-primary-dark), var(--color-primary));
  color: rgba(255, 255, 255, 0.95);
  font-size: var(--text-xs);
  padding-block: var(--space-1);
}

@media (min-width: 768px) {
  .header__topbar {
    display: block;
  }
}

.header__topbar-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 1.75rem;
}

.header__dot {
  opacity: 0.65;
}

.header {
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border-light);
}

.header__link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
}

.header__link:hover {
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.header__link--block {
  text-align: center;
  padding: var(--space-3);
  margin-bottom: var(--space-2);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: clamp(3.5rem, 10vw, 4.5rem);
  gap: var(--space-4);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-weight: 700;
  font-size: var(--text-lg);
  color: var(--color-text);
  flex-shrink: 0;
}

.header__logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: #fff;
  border-radius: var(--radius-md);
  font-size: var(--text-lg);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.header__menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-md);
}

.header__menu-btn:hover {
  background-color: var(--color-bg-secondary);
}

.header__menu-icon,
.header__menu-icon::before,
.header__menu-icon::after {
  display: block;
  width: 1.25rem;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 1px;
  transition: transform var(--transition-base), opacity var(--transition-base);
}

.header__menu-icon {
  position: relative;
}

.header__menu-icon::before,
.header__menu-icon::after {
  content: '';
  position: absolute;
  left: 0;
}

.header__menu-icon::before { top: -6px; }
.header__menu-icon::after { top: 6px; }

.header__menu-icon.is-open {
  background-color: transparent;
}

.header__menu-icon.is-open::before {
  transform: translateY(6px) rotate(45deg);
}

.header__menu-icon.is-open::after {
  transform: translateY(-6px) rotate(-45deg);
}

.header__mobile-menu {
  padding: var(--space-4) var(--container-padding) var(--space-6);
  border-top: 1px solid var(--color-border-light);
  background: var(--color-bg);
}

.header__mobile-menu :deep(.nav__list) {
  flex-direction: column;
  align-items: stretch;
  margin-bottom: var(--space-4);
}

.header__mobile-menu :deep(.nav__link) {
  padding: var(--space-3) var(--space-4);
}

.slide-enter-active,
.slide-leave-active {
  transition: all var(--transition-base);
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
