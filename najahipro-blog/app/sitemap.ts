import { MetadataRoute } from 'next'
import { client } from "@/sanity/client"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://najahipro.com' // الرابط ديالك

  // 1. جلب جميع المقالات من Sanity
  const posts = await client.fetch(`
    *[_type == "post"] {
      "slug": slug.current,
      _updatedAt
    }
  `)

  // 2. تحويل المقالات إلى روابط لـ Sitemap
  const postsUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post._id}`, // لاحظ أننا كنستعملو ID
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // 3. الروابط الثابتة (الرئيسية، اتصل بنا...)
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/category/primaire',
    '/category/college',
    '/category/lycee',
    '/category/university',
    '/category/concours-primaire',
    '/category/master',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.5,
  })) as MetadataRoute.Sitemap

  return [...staticRoutes, ...postsUrls]
}