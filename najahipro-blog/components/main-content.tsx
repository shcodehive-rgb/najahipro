import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { client } from "@/sanity/client" // استيراد العميل

// 1. دالة لجلب البيانات (GROQ Query)
async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "category": level,
    "date": _createdAt,
    "imageUrl": mainImage.asset->url,
    "excerpt": array::join(string::split((pt::text(content)), "")[0..150], "") + "..."
  }`
  const data = await client.fetch(query)
  return data
}

// 2. المكون رجعناه async باش يقدر يجيب البيانات
export async function MainContent() {
  const articles = await getPosts() // هنا كنجيبو المقالات الحقيقية

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 pb-2 inline-block">
          آخر المقالات
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 3. عرض المقالات الحقيقية */}
        {articles.length > 0 ? (
          articles.map((article: any) => (
            <Card key={article._id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative overflow-hidden h-48 bg-gray-100">
                {article.imageUrl ? (
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    لا توجد صورة
                  </div>
                )}
                <Badge className="absolute top-4 right-4 bg-blue-600">
                  {article.category || "عام"}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-relaxed line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  {/* الرابط دابا خدام بالـ Slug الحقيقي */}
                  <Link href={`/blog/${article._id}`}> 
                    <Button variant="link" className="text-blue-600 p-0 h-auto font-semibold">
                      اقرأ المزيد
                      <ArrowLeft className="mr-2 w-4 h-4 rotate-180" />
                    </Button>
                  </Link>
                  <span className="text-xs text-gray-500 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString('ar-MA')}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-2 py-10">
            جاري تحميل المقالات أو لا يوجد محتوى بعد...
          </p>
        )}
      </div>
    </div>
  )
}