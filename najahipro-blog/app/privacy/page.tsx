import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">سياسة الخصوصية</h1>
        
        <div className="prose prose-lg text-gray-700 leading-loose">
          <p>أهلاً بكم في منصة "نجاحي برو". نحن نقدر خصوصيتكم ونلتزم بحماية بياناتكم الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا للمعلومات عند زيارتكم لموقعنا.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">ملفات تعريف الارتباط (Cookies)</h3>
          <p>نحن نستخدم "ملفات تعريف الارتباط" لتحسين تجربة المستخدم وتحليل حركة المرور. كما نستعين بشركات إعلان كطرف ثالث (مثل Google AdSense) لعرض الإعلانات عند زيارتكم لموقعنا.</p>
          <p>يحق لهذه الشركات استخدام معلومات حول زياراتكم لهذا الموقع (باستثناء الاسم أو العنوان أو البريد الإلكتروني أو رقم الهاتف) وذلك من أجل تقديم إعلانات حول البضائع والخدمات التي تهمكم.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Google AdSense</h3>
          <p>يستخدم Google ملف تعريف الارتباط DoubleClick DART لخدمة الإعلانات بناءً على زيارة المستخدمين لموقعنا. يمكن للزوار إلغاء الاشتراك في استخدام ملف تعريف الارتباط DART عن طريق زيارة سياسة الخصوصية الخاصة بشبكة Google الإعلانية للمحتوى.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">البيانات التي نجمعها</h3>
          <p>نحن لا نطلب منكم تسجيل الدخول لتصفح المحتوى التعليمي. البيانات التي قد يتم جمعها تلقائياً تشمل نوع المتصفح، وعنوان IP لأغراض التحليل والإحصاء فقط.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">اتصل بنا</h3>
          <p>إذا كان لديكم أي استفسار حول سياسة الخصوصية، يمكنكم التواصل معنا عبر صفحة "اتصل بنا".</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}