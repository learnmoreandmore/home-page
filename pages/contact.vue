<script setup lang="ts">
usePageSeo({
  title: '加入社区',
  description: '加入玩趣游戏社区 - 注册账号、创作者入驻或商务合作联系。',
  keywords: ['加入社区', '注册', '创作者入驻', '玩趣'],
})

const form = reactive({
  nickname: '',
  email: '',
  platform: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div>
    <BaseSection>
      <div class="page-header text-center">
        <h1 class="page-header__title">加入玩趣</h1>
        <p class="page-header__desc">
          注册社区账号，或申请创作者 / 商务合作
        </p>
      </div>
    </BaseSection>

    <BaseSection variant="secondary">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>其他方式</h2>
          <ul class="contact-info__list">
            <li>
              <strong>玩家反馈</strong>
              <span>feedback@wanqu.game</span>
            </li>
            <li>
              <strong>创作者入驻</strong>
              <span>creator@wanqu.game</span>
            </li>
            <li>
              <strong>商务合作</strong>
              <span>biz@wanqu.game</span>
            </li>
            <li>
              <strong>社区帮助</strong>
              <span>站内「帮助中心」查看公约与举报指引</span>
            </li>
          </ul>
        </div>

        <form v-if="!submitted" class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="nickname">昵称 *</label>
            <input id="nickname" v-model="form.nickname" type="text" required placeholder="社区显示名称">
          </div>
          <div class="form-group">
            <label for="email">邮箱 *</label>
            <input id="email" v-model="form.email" type="email" required placeholder="用于验证与通知">
          </div>
          <div class="form-group">
            <label for="platform">常玩平台</label>
            <input id="platform" v-model="form.platform" type="text" placeholder="如：PC / Switch / 手机">
          </div>
          <div class="form-group">
            <label for="message">想说的话 *</label>
            <textarea id="message" v-model="form.message" required rows="5" placeholder="注册意向、想写的攻略类型，或合作简述" />
          </div>
          <BaseButton type="submit" block size="lg">
            提交申请
          </BaseButton>
        </form>

        <div v-else class="contact-success">
          <p class="contact-success__icon" aria-hidden="true">✓</p>
          <h2>提交成功</h2>
          <p>感谢关注玩趣，我们会在 1～3 个工作日内通过邮件回复你。</p>
        </div>
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

.contact-grid {
  display: grid;
  gap: var(--space-12);
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr 1.5fr;
    align-items: start;
  }
}

.contact-info h2 {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-6);
}

.contact-info__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.contact-info__list li {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.contact-info__list strong {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.contact-info__list span {
  font-size: var(--text-base);
}

.contact-form {
  padding: var(--space-8);
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.form-group {
  margin-bottom: var(--space-5);
}

.form-group label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--space-2);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.contact-success {
  padding: var(--space-12);
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  text-align: center;
}

.contact-success__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: var(--color-primary);
  color: #fff;
  font-size: var(--text-2xl);
  border-radius: 50%;
  margin-bottom: var(--space-6);
}

.contact-success h2 {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-4);
}

.contact-success p {
  color: var(--color-text-secondary);
}
</style>
