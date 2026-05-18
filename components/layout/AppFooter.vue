<script setup lang="ts">
const config = useRuntimeConfig()
const siteName = config.public.siteName as string
const currentYear = new Date().getFullYear()

const footerLinks = {
  community: [
    { label: '关于玩趣', to: '/about' },
    { label: '社区资讯', to: '/news' },
    { label: '加入社区', to: '/contact' },
  ],
  discover: [
    { label: '游戏库', to: '/products' },
    { label: '攻略专区', to: '/solutions' },
  ],
}
</script>

<template>
  <footer class="footer">
    <BaseContainer>
      <div class="footer__grid">
        <div class="footer__brand">
          <NuxtLink to="/" class="footer__logo">
            <span class="footer__logo-icon" aria-hidden="true">玩</span>
            {{ siteName }}
          </NuxtLink>
          <p class="footer__desc">
            游戏内容社区，发现好游戏、分享攻略心得，和同好一起聊梗开黑。
          </p>
        </div>

        <div class="footer__links">
          <h3 class="footer__heading">社区</h3>
          <ul>
            <li v-for="link in footerLinks.community" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer__links">
          <h3 class="footer__heading">发现</h3>
          <ul>
            <li v-for="link in footerLinks.discover" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer__contact">
          <h3 class="footer__heading">联系我们</h3>
          <ul>
            <li>玩家反馈：feedback@wanqu.game</li>
            <li>商务合作：biz@wanqu.game</li>
            <li>社区公约与举报入口见站内帮助</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; {{ currentYear }} {{ siteName }}. 保留所有权利。</p>
        <p>
          <a href="#">用户协议</a>
          <span aria-hidden="true"> · </span>
          <a href="#">隐私政策</a>
        </p>
      </div>
    </BaseContainer>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-dark);
  color: rgba(255, 255, 255, 0.8);
  padding-block: var(--section-gap);
}

.footer__grid {
  display: grid;
  gap: var(--space-8);
  margin-bottom: var(--space-12);
}

@media (min-width: 640px) {
  .footer__grid {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
  }
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-weight: 700;
  font-size: var(--text-lg);
  color: #fff;
  margin-bottom: var(--space-4);
}

.footer__logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: var(--radius-sm);
  font-size: var(--text-base);
}

.footer__desc {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: rgba(255, 255, 255, 0.6);
  max-width: 28ch;
}

.footer__heading {
  font-size: var(--text-sm);
  font-weight: 600;
  color: #fff;
  margin-bottom: var(--space-4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer__links ul,
.footer__contact ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__links a,
.footer__contact li {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.6);
  transition: color var(--transition-fast);
}

.footer__links a:hover {
  color: #fff;
}

.footer__bottom {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.5);
}

@media (min-width: 768px) {
  .footer__bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer__bottom a {
  color: rgba(255, 255, 255, 0.5);
  transition: color var(--transition-fast);
}

.footer__bottom a:hover {
  color: #fff;
}
</style>
