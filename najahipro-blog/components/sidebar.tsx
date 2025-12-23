import { client } from "@/sanity/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowLeft } from "lucide-react"
import Link from "next/link"

// دالة لجلب المقالات "المشهورة"
async function getPopularPosts() {
  // كنجيبو 5 مقالات اللي فيهم isPopular = true
  const query = `*[_type == "post" && isPopular == true][0...5] | order(_createdAt desc) {
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    "category": level
  }`
  return await client.fetch(query)
}

export async function Sidebar() {
  const posts = await getPopularPosts()

  return (
    <div className="space-y-6">
      
      {/* بطاقة "الأكثر قراءة" */}
      <Card className="border-none shadow-md bg-white overflow-hidden">
        <CardHeader className="bg-blue-50 border-b border-blue-100 pb-4">
          <CardTitle className="text-lg font-bold flex items-center gap-2 text-blue-800">
            <TrendingUp className="w-5 h-5" />
            الأكثر قراءة
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {posts.length > 0 ? (
              posts.map((post: any, index: number) => (
                <Link key={post._id} href={`/blog/${post._id}`} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group">
                  {/* الرقم الترتيبي */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-700 leading-snug group-hover:text-blue-600 line-clamp-2">
                      {post.title}
                    </h4>
                    {post.category && (
                        <span className="text-[10px] text-gray-400 mt-1 block">{post.category}</span>
                    )}
                  </div>
                  
                  {post.imageUrl && (
                    <img src={post.imageUrl} alt={post.title} className="w-12 h-12 rounded-md object-cover border border-gray-100" />
                  )}
                </Link>
              ))
            ) : (
              <p className="p-4 text-sm text-gray-400 text-center">لا توجد مقالات مشهورة حالياً</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* بطاقة إشهارية أو معلومات إضافية (اختياري) */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white text-center shadow-lg">
        <h3 className="font-bold text-lg mb-2">هل تحتاج مساعدة؟</h3>
        <p className="text-blue-100 text-sm mb-4">انضم لمجموعتنا على تيليغرام للتوصل بآخر المستجدات.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors w-full">
          انضم الآن
        </button>
      </div>

    </div>
  )
}