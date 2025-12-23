import { client } from "@/sanity/client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FolderOpen } from "lucide-react"
import Link from "next/link"

// 1. تعريف المجموعات (Groups)
// هنا كنقولو ليه: كلمة "doros" كتعني (ابتدائي + إعدادي + ثانوي + جامعي)
const categoryGroups: Record<string, string[]> = {
  // جميع الدروس
  "doros": ["primaire", "college", "lycee", "university"],
  // جميع الامتحانات
  "imtihanat": ["6eme", "3ac", "1bac", "2bac"],
  // جميع المباريات
  "moubaryat": ["concours-primaire", "concours-secondaire", "master"],
  // جميع التوجيه
  "tawjih": ["tawjih"]
}

// عناوين الصفحات
const titles: Record<string, string> = {
  "doros": "جميع الدروس والمحاضرات",
  "imtihanat": "جميع الامتحانات والفروض",
  "moubaryat": "مستجدات المباريات والتوظيف",
  "tawjih": "التوجيه المدرسي والمهني",
  // العناوين الفرعية
  "2bac": "الثانية باكالوريا",
  "1bac": "الأولى باكالوريا",
  "3ac": "الثالثة إعدادي",
  "primaire": "التعليم الابتدائي",
  "college": "التعليم الإعدادي",
  "lycee": "التعليم الثانوي",
  "university": "التعليم الجامعي",
  "concours-primaire": "مباراة التعليم (الابتدائي)",
  "concours-secondaire": "مباراة التعليم (تأهيلي)",
  "master": "مباريات الماستر",
}

// دالة الجلب الجديدة (كاتقبل بزاف ديال الأقسام دقة وحدة)
async function getPostsByLevels(levels: string[]) {
  // هنا استعملنا "in" باش نقلبو فاليست كاملة
  const query = `*[_type == "post" && level in $levels] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "category": level,
    "date": _createdAt,
    "imageUrl": mainImage.asset->url
  }`
  const posts = await client.fetch(query, { levels })
  return posts
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // واش هاد الرابط هو "مجموعة" ولا "قسم عادي"؟
  // إلا كان "moubaryat"، خود الليست ديالها. إلا كان عادي (بحال 2bac)، ديرو فليست بوحدو.
  const targetLevels = categoryGroups[slug] || [slug]
  
  const articles = await getPostsByLevels(targetLevels)
  const pageTitle = titles[slug] || slug

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-8">
                <div className="mb-8 border-b pb-4">
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <FolderOpen className="w-8 h-8 text-blue-600" />
                        {pageTitle}
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.length > 0 ? (
                    articles.map((article: any) => (
                    <Card key={article._id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-gray-100">
                        <div className="relative overflow-hidden h-48 bg-gray-100">
                        {article.imageUrl ? (
                            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400 bg-gray-50">NAJAHIPRO</div>
                        )}
                        </div>
                        <CardContent className="p-5">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                            {article.title}
                        </h3>
                        <div className="flex items-center justify-between mt-4">
                            <Link href={`/blog/${article._id}`}>
                            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold gap-1 text-sm">
                                اقرأ المزيد <ArrowLeft className="w-4 h-4" />
                            </Button>
                            </Link>
                            <span className="text-xs text-gray-400">{new Date(article.date).toLocaleDateString('ar-MA')}</span>
                        </div>
                        </CardContent>
                    </Card>
                    ))
                ) : (
                    <div className="col-span-full py-16 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <FolderOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-500">لا توجد مقالات حالياً</h3>
                        <Link href="/"><Button variant="outline" className="mt-6">العودة للرئيسية</Button></Link>
                    </div>
                )}
                </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
                <Sidebar />
            </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}