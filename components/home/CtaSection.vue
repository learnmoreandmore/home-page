<template>
  <section class="cta-band" aria-labelledby="cta-band-title">
    <BaseContainer class="cta-band__inner">
      <div class="cta-band__text">
        <h2 id="cta-band-title" class="cta-band__title">
          还没找到同好？来社区发帖聊聊
        </h2>
        <p class="cta-band__desc">
          注册玩趣账号，关注感兴趣的游戏与话题，写攻略、晒成就、找队友，一起把游戏玩得更尽兴。
        </p>
      </div>
      <div class="cta-band__actions">
        <BaseButton to="/contact" size="lg" variant="secondary" class="cta-band__btn">
          立即加入
        </BaseButton>
        <BaseButton to="/products" size="lg" variant="outline" class="cta-band__btn cta-band__btn--ghost">
          逛游戏库
        </BaseButton>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.cta-band {
  background: linear-gradient(100deg, var(--color-primary) 0%, #fb923c 50%, var(--color-accent) 100%);
  color: #fff;
  padding-block: clamp(2.5rem, 5vw, 3.5rem);
}

.cta-band__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  align-items: flex-start;
}

@media (min-width: 768px) {
  .cta-band__inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.cta-band__title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-3);
}

@media (min-width: 768px) {
  .cta-band__title {
    font-size: var(--text-2xl);
  }
}

.cta-band__desc {
  font-size: var(--text-sm);
  opacity: 0.95;
  max-width: 36rem;
  line-height: var(--leading-relaxed);
}

.cta-band__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  width: 100%;
}

@media (min-width: 768px) {
  .cta-band__actions {
    width: auto;
    flex-shrink: 0;
  }
}

.cta-band :deep(.btn--secondary) {
  background: #fff;
  color: var(--color-primary-dark);
  border: none;
}

.cta-band :deep(.btn--secondary:hover) {
  background: var(--color-primary-light);
}

.cta-band :deep(.btn--outline) {
  border-color: rgba(255, 255, 255, 0.85);
  color: #fff;
  background: transparent;
}

.cta-band :deep(.btn--outline:hover) {
  background: rgba(255, 255, 255, 0.15);
}
</style>
