import { client } from "@/sanity/client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

// دالة لجلب المقالات الرئيسية (3 مقالات)
async function getFeaturedPosts() {
  const query = `*[_type == "post" && isFeatured == true][0...3] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "category": level,
    "date": _createdAt,
    "imageUrl": mainImage.asset->url,
    "excerpt": array::join(string::split((pt::text(content)), "")[0..100], "") + "..."
  }`
  return await client.fetch(query)
}

// دالة لجلب آخر المقالات (العادية)
async function getLatestPosts() {
  const query = `*[_type == "post" && isFeatured != true][0...6] | order(_createdAt desc) {
    _id,
    title,
    "category": level,
    "date": _createdAt,
    "imageUrl": mainImage.asset->url,
    "excerpt": array::join(string::split((pt::text(content)), "")[0..150], "") + "..."
  }`
  return await client.fetch(query)
}

export default async function Home() {
  const featuredPosts = await getFeaturedPosts() // نجيبو 3 مقالات للكبار
  const latestPosts = await getLatestPosts()     // نجيبو الباقي

  // نقسمو المقالات الرئيسية: الكبير بوحدو، والصغار بوحدهم
  const mainFeature = featuredPosts[0]
  const subFeatures = featuredPosts.slice(1, 3)

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* --- 1. قسم الواجهة (HERO SECTION) --- */}
        {mainFeature && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            
            {/* المقال الكبير (يمين) */}
            <div className="lg:col-span-8 group relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img src={mainFeature.imageUrl} alt={mainFeature.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-8 w-full">
                <Badge className="bg-blue-600 mb-3 hover:bg-blue-700">{mainFeature.category}</Badge>
                <Link href={`/blog/${mainFeature._id}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight hover:text-blue-400 transition-colors">
                    {mainFeature.title}
                  </h2>
                </Link>
                <div className="flex items-center text-gray-300 text-sm gap-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {new Date(mainFeature.date).toLocaleDateString('ar-MA')}</span>
                  <Link href={`/blog/${mainFeature._id}`} className="text-white font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    اقرأ المزيد <ArrowLeft className="w-4 h-4"/>
                  </Link>
                </div>
              </div>
            </div>

            {/* المقالان الصغيران (يسار) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {subFeatures.map((post: any) => (
                <div key={post._id} className="relative flex-1 rounded-2xl overflow-hidden shadow-md group">
                  <img src={post.imageUrl} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <Badge className="bg-purple-600 mb-2 text-xs">{post.category}</Badge>
                    <Link href={`/blog/${post._id}`}>
                      <h3 className="text-lg font-bold text-white leading-snug hover:text-purple-300 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 2. باقي المحتوى والسايدبار --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* آخر المقالات */}
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-blue-600 pr-4">آخر المستجدات</h3>
            <div className="space-y-6">
              {latestPosts.map((post: any) => (
                <div key={post._id} className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-4 rounded-xl hover:shadow-lg transition-all group">
                   <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden relative flex-shrink-0">
                      {post.imageUrl ? (
                        <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">Najahipro</div>
                      )}
                   </div>
                   <div className="flex-1 py-1">
                      <div className="flex items-center gap-2 mb-2">
                         <Badge variant="outline" className="text-blue-600 border-blue-100 bg-blue-50">{post.category}</Badge>
                         <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3"/> {new Date(post.date).toLocaleDateString('ar-MA')}</span>
                      </div>
                      <Link href={`/blog/${post._id}`}>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 leading-snug">{post.title}</h3>
                      </Link>
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* السايدبار (الأكثر قراءة) */}
          <aside className="lg:col-span-4 space-y-8">
            <Sidebar />
          </aside>

        </div>
      </main>
      <Footer />
    </div>
  )
}