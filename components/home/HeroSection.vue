<template>
  <section class="hero">
    <BaseContainer>
      <p class="hero__tagline">
        发现好游戏 · 聊攻略梗图 · 和同好一起玩
      </p>
      <h1 class="hero__title">
        找游戏、找攻略，来玩趣就对了
      </h1>
      <p class="hero__sub">
        玩趣是面向玩家的游戏内容社区，收录热门作品、优质攻略与玩家讨论，让你少踩坑、多乐趣
      </p>

      <form class="hero__search" role="search" @submit.prevent="onSearch">
        <label class="sr-only" for="home-search">搜索游戏、攻略或话题</label>
        <input
          id="home-search"
          v-model="q"
          type="search"
          class="hero__input"
          placeholder="搜索游戏名、类型或攻略关键词，如：开放世界、联机、新手向"
          autocomplete="off"
        >
        <button type="submit" class="hero__submit">
          搜索
        </button>
      </form>

      <div class="hero__hot" aria-label="热门搜索">
        <span class="hero__hot-label">热门：</span>
        <NuxtLink
          v-for="tag in hotTags"
          :key="tag"
          :to="{ path: '/products', query: { q: tag } }"
          class="hero__hot-link"
        >
          {{ tag }}
        </NuxtLink>
      </div>

      <dl class="hero__stats">
        <div v-for="stat in stats" :key="stat.label" class="hero__stat">
          <dt class="hero__stat-value">{{ stat.value }}</dt>
          <dd class="hero__stat-label">{{ stat.label }}</dd>
        </div>
      </dl>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
const router = useRouter()
const q = ref('')

const hotTags = ['开放世界', '肉鸽', '联机合作', '独立游戏', '二次元']

const stats = [
  { value: '2000+', label: '收录游戏' },
  { value: '50万+', label: '社区用户' },
  { value: '10万+', label: '攻略帖子' },
]

function onSearch() {
  const query = q.value.trim()
  if (query) {
    router.push({ path: '/products', query: { q: query } })
  }
  else {
    router.push('/products')
  }
}
</script>

<style scoped>
.hero {
  padding-block: clamp(2.5rem, 6vw, 4rem) clamp(2rem, 5vw, 3rem);
  background: var(--color-hero-bg);
  border-bottom: 1px solid var(--color-hero-border);
}

.hero__tagline {
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
  letter-spacing: 0.02em;
}

.hero__title {
  text-align: center;
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-3);
}

.hero__sub {
  text-align: center;
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  max-width: 42rem;
  margin-inline: auto;
  margin-bottom: var(--space-8);
  line-height: var(--leading-relaxed);
}

.hero__search {
  display: flex;
  max-width: 52rem;
  margin-inline: auto;
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: box-shadow var(--transition-fast);
}

.hero__search:focus-within {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.hero__input {
  flex: 1;
  min-width: 0;
  padding: var(--space-4) var(--space-5);
  border: none;
  font-size: var(--text-base);
  color: var(--color-text);
  background: transparent;
}

.hero__input::placeholder {
  color: var(--color-text-muted);
}

.hero__submit {
  flex-shrink: 0;
  padding-inline: clamp(1.25rem, 4vw, 2rem);
  background: var(--color-primary);
  color: #fff;
  font-size: var(--text-base);
  font-weight: 600;
  transition: background var(--transition-fast);
}

.hero__submit:hover {
  background: var(--color-primary-dark);
}

.hero__hot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-5);
  padding-inline: var(--space-2);
}

.hero__hot-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.hero__hot-link {
  font-size: var(--text-sm);
  color: var(--color-primary-dark);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.hero__hot-link:hover {
  background: var(--color-primary-light);
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  max-width: 36rem;
  margin-inline: auto;
  margin-top: clamp(2rem, 5vw, 3rem);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-hero-border);
}

.hero__stat {
  text-align: center;
}

.hero__stat-value {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-primary);
}

.hero__stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: var(--space-1);
}

@media (max-width: 639px) {
  .hero__search {
    flex-direction: column;
    border-radius: var(--radius-md);
  }

  .hero__submit {
    padding-block: var(--space-3);
  }
}
</style>
