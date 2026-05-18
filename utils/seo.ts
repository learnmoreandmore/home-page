interface SeoOptions {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  keywords?: string[]
}

export function usePageSeo(options: SeoOptions = {}) {
  const config = useRuntimeConfig()
  const route = useRoute()

  const siteName = config.public.siteName as string
  const siteUrl = config.public.siteUrl as string
  const defaultDescription = config.public.siteDescription as string

  const title = options.title ? `${options.title} - ${siteName}` : siteName
  const description = options.description || defaultDescription
  const image = options.image || `${siteUrl}/og-image.png`
  const url = options.url || `${siteUrl}${route.path}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogUrl: url,
    ogType: options.type || 'website',
    ogSiteName: siteName,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    ...(options.publishedTime && { articlePublishedTime: options.publishedTime }),
    ...(options.keywords && { keywords: options.keywords.join(', ') }),
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })

  return { title, description, url }
}

export function useJsonLd(data: Record<string, unknown>) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(data),
      },
    ],
  })
}
