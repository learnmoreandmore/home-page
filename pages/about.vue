<script setup lang="ts">
usePageSeo({
  title: '关于玩趣',
  description: '了解玩趣——专注游戏内容与玩家社区的平台，我们的理念与社区文化。',
  keywords: ['关于玩趣', '游戏社区', '玩家文化', '玩趣'],
})
</script>

<template>
  <div>
    <BaseSection>
      <div class="page-header text-center">
        <h1 class="page-header__title">关于玩趣</h1>
        <p class="page-header__desc">
          为玩家而生，让找游戏、写攻略、聊剧情都更简单
        </p>
      </div>
    </BaseSection>

    <BaseSection variant="secondary">
      <div class="about-grid">
        <div class="about-content">
          <h2>我们是谁</h2>
          <p>
            玩趣成立于 2019 年，是一个面向全体玩家的游戏内容社区。我们不做「冷冰冰的百科」，而是希望把攻略、讨论、资讯和发现游戏串在一起，让你打开网站就能玩得更明白、聊得更开心。
          </p>
          <p>
            目前已有超过 50 万注册玩家，收录 2000+ 款游戏条目，攻略与讨论帖累计逾十万篇。无论你是硬核收集党还是休闲剧情党，都能在这里找到同好。
          </p>
        </div>
        <div class="about-stats grid sm:grid-cols-2 gap-6">
          <div class="stat-card">
            <span class="stat-card__value">2019</span>
            <span class="stat-card__label">社区上线</span>
          </div>
          <div class="stat-card">
            <span class="stat-card__value">50万+</span>
            <span class="stat-card__label">注册玩家</span>
          </div>
          <div class="stat-card">
            <span class="stat-card__value">2000+</span>
            <span class="stat-card__label">收录游戏</span>
          </div>
          <div class="stat-card">
            <span class="stat-card__value">10万+</span>
            <span class="stat-card__label">攻略与帖子</span>
          </div>
        </div>
      </div>
    </BaseSection>

    <BaseSection>
      <h2 class="section-title text-center">社区文化</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <BaseCard icon="🎮">
          <template #header><h3>使命</h3></template>
          连接玩家与好内容，让每一款被爱的游戏都有人说得清、玩得到。
        </BaseCard>
        <BaseCard icon="🌟">
          <template #header><h3>愿景</h3></template>
          成为中文玩家最愿意常来的游戏内容社区。
        </BaseCard>
        <BaseCard icon="🤝">
          <template #header><h3>价值观</h3></template>
          友善讨论、尊重剧透、鼓励创作、拒绝引战与恶意行为。
        </BaseCard>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped>
.page-header__title {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-4);
}

.page-header__desc {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}

.about-grid {
  display: grid;
  gap: var(--space-12);
  align-items: start;
}

@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.about-content h2 {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-6);
}

.about-content p {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.stat-card {
  padding: var(--space-6);
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  text-align: center;
}

.stat-card__value {
  display: block;
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-primary);
}

.stat-card__label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-top: var(--space-2);
}

.section-title {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-12);
}
</style>
