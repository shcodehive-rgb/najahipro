import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">اتصل بنا</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">نحن هنا للإجابة على استفساراتكم. سواء كان لديكم سؤال حول الدروس، أو اقتراح لتحسين المنصة، لا تترددوا في مراسلتنا.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-sm font-medium">الاسم الكامل</label>
                   <Input placeholder="محمد..." />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium">البريد الإلكتروني</label>
                   <Input type="email" placeholder="example@gmail.com" />
                </div>
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium">الموضوع</label>
                 <Input placeholder="استفسار بخصوص..." />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium">الرسالة</label>
                 <textarea 
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="اكتب رسالتك هنا..."
                 ></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">إرسال الرسالة</Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8 pt-4">
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                 <Mail className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-bold text-lg text-gray-900">البريد الإلكتروني</h3>
                 <p className="text-gray-500 mb-2">فريقنا سيرد عليكم في أقرب وقت.</p>
                 <a href="mailto:contact@najahipro.com" className="text-blue-600 font-semibold dir-ltr">contact@najahipro.com</a>
               </div>
             </div>

             <div className="flex gap-4">
               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center shrink-0">
                 <MapPin className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-bold text-lg text-gray-900">المقر</h3>
                 <p className="text-gray-500">الدار البيضاء، المغرب</p>
               </div>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}