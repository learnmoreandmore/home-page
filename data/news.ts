export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  category: string
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'spring-fest-2025',
    title: '玩趣 2025 春季游戏节专题上线',
    excerpt: '40+ 款独立与国产新作集中展示，含试玩密钥、开发者 AMA 与社区投票。',
    content: `
      <p>玩趣春季游戏节专题页今日正式上线，汇集平台精选的独立游戏、国产新作与海外口碑作品，玩家可在专题内领取试玩资格、参与「最想玩榜单」投票。</p>
      <h2>专题亮点</h2>
      <p>本次专题设置「新品试玩」「开发者问答」「玩家神评」三个子板块。已有 12 家工作室入驻 AMA 日程，攻略区同步开放「新手 30 分钟上手」征集活动。</p>
      <h2>参与方式</h2>
      <p>登录玩趣账号即可投票与留言；优质讨论帖将有机会获得官方推荐位与周边礼包。活动持续至 4 月底，欢迎来社区一起逛展。</p>
    `,
    publishedAt: '2025-03-01',
    category: '社区活动',
  },
  {
    slug: 'guide-editor-update',
    title: '攻略编辑器 2.0：支持分章节与版本标注',
    excerpt: '长攻略更好写、更好读，版本更新后可标注「适用于 x.x 补丁」。',
    content: `
      <p>玩趣攻略编辑器 2.0 即日起向全体创作者开放。新版本支持章节目录、折叠 spoiler、图片标注与版本标签，方便在游戏频繁更新时维护攻略时效性。</p>
      <h2>主要更新</h2>
      <p>新增「补丁适用」字段，读者可按版本筛选；支持从草稿一键生成目录；移动端排版优化，发帖体验更顺滑。</p>
      <h2>创作者激励</h2>
      <p>本月完成 3 篇优质攻略并通过审核的创作者，可获得社区「攻略达人」徽章与首页推荐机会。详情见创作者中心说明。</p>
    `,
    publishedAt: '2025-02-15',
    category: '产品更新',
  },
  {
    slug: 'community-guidelines',
    title: '玩趣社区公约 2025 版发布',
    excerpt: '强调友善讨论、拒绝引战与剧透礼仪，共建轻松好玩的玩家氛围。',
    content: `
      <p>玩趣正式发布 2025 版社区公约，在原有基础上补充了剧透标记规范、组队招募格式建议与 AI 生成内容标注要求。</p>
      <h2>核心原则</h2>
      <p>尊重不同玩法与观点，禁止人身攻击、歧视与恶意引流。涉及未发售内容时需使用剧透标签；交易、代练类信息按版块规则发布。</p>
      <h2>举报与申诉</h2>
      <p>玩家可通过帖子右下角举报，站务将在 24 小时内处理。对处理结果有异议可提交申诉，社区仲裁委员会将复核。</p>
    `,
    publishedAt: '2025-01-20',
    category: '社区公告',
  },
]

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug)
}
