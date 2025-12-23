import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Users, BookOpen, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      
      <main>
        {/* قسم العنوان (Hero Section) */}
        <div className="bg-blue-600 text-white py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن؟</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              "نجاحي برو" هي منصتكم التعليمية الأولى في المغرب، نسعى لتمكين التلاميذ والطلبة من أدوات التفوق الدراسي عبر محتوى رقمي مجاني عالي الجودة.
            </p>
          </div>
        </div>

        {/* قسم المحتوى */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          
          {/* قصتنا */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-blue-600" />
                قصة نجاحي برو
              </h2>
              <div className="prose prose-lg text-gray-600 leading-loose">
                <p>
                  انطلقت منصة <strong>NAJAHIPRO</strong> بمبادرة شبابية تهدف إلى سد الخصاص في المحتوى التعليمي الرقمي المنظم في المغرب. لاحظنا الصعوبات التي يواجهها التلاميذ في العثور على دروس وتمارين وحلول موثوقة، فقررنا إنشاء هذه المنصة لتكون مرجعاً شاملاً يغني عن البحث المتشتت.
                </p>
                <p>
                  نحن نؤمن بأن التعليم حق للجميع، وأن التكنولوجيا هي الوسيلة الأنجع لتقريب المعرفة. لذلك، نحرص على تقديم محتوى يواكب المقررات الوزارية ويراعي التحديثات المستمرة.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-full flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <h3 className="text-6xl font-black text-blue-600 mb-2">+10K</h3>
                <p className="text-gray-500 font-medium">زائر شهرياً يستفيدون من خدماتنا</p>
              </div>
            </div>
          </div>

          {/* أهدافنا */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">لماذا تختار نجاحي برو؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">محتوى موثوق وشامل</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  نقدم دروساً وملخصات تغطي جميع الأسلاك الدراسية من الابتدائي إلى الجامعي، مراجعة من طرف أساتذة مختصين.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">توجيه مدرسي دقيق</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  لا نكتفي بالدروس، بل نرافقك في اختيار مسارك الدراسي والمهني عبر مقالات توجيهية وإعلانات المباريات.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">مجتمع تفاعلي</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  نستمع لاقتراحاتكم ونطور المنصة باستمرار لتلبي حاجياتكم. نجاحكم هو نجاحنا.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}