import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Featured Article - Right Side */}
        <article className="lg:col-span-2 group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/arabic-education-classroom-modern.jpg"
              alt="Featured article"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-8 text-white">
              <Badge className="bg-blue-600 mb-3">تعليم</Badge>
              <h2 className="text-4xl font-bold mb-3 text-balance">كيف تنجح في امتحاناتك النهائية: دليل شامل للطلاب</h2>
              <p className="text-gray-200 mb-4 text-lg leading-relaxed">
                اكتشف أفضل الاستراتيجيات والتقنيات المثبتة علمياً للتفوق في الامتحانات وتحقيق أعلى الدرجات
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  15 ديسمبر 2024
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Sub Features - Left Side */}
        <div className="flex flex-col gap-6">
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/university-students-studying.jpg"
                alt="Article"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                <Badge className="bg-green-600 mb-2 text-xs">جامعة</Badge>
                <h3 className="text-xl font-bold mb-2 text-balance">أفضل التخصصات الجامعية لسوق العمل 2024</h3>
                <span className="text-xs flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  14 ديسمبر 2024
                </span>
              </div>
            </div>
          </article>

          <article className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/student-reading-book-library.jpg"
                alt="Article"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                <Badge className="bg-purple-600 mb-2 text-xs">ثانوي</Badge>
                <h3 className="text-xl font-bold mb-2 text-balance">تقنيات المراجعة الفعالة للباكالوريا</h3>
                <span className="text-xs flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  13 ديسمبر 2024
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

