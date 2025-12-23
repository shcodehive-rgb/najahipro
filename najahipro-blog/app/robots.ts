import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // كنمنعو جوجل يدخل للوحة التحكم (Sanity Studio)
    },
    sitemap: 'https://najahipro.com/sitemap.xml',
  }
}