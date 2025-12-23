import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    // هنا فرضنا اللون الكحل بـ style باش مايكونش خطأ
    <footer 
      style={{ backgroundColor: 'black' }} 
      className="text-white pt-16 pb-8 border-t border-gray-800" 
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* العمود 1: عن الموقع */}
          <div>
            <Link href="/" className="text-2xl font-black text-white tracking-tighter block mb-6">
              NAJAHI<span className="text-blue-500">PRO</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              منصة تعليمية مغربية شاملة تهدف إلى مساعدة التلاميذ والطلبة على التفوق الدراسي من خلال توفير دروس، ملخصات، امتحانات، ومباريات بجودة عالية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-red-600 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-pink-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* العمود 2: الأسلاك الدراسية */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              الأسلاك الدراسية
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/category/primaire" className="text-gray-300 hover:text-white transition-colors">التعليم الابتدائي</Link></li>
              <li><Link href="/category/college" className="text-gray-300 hover:text-white transition-colors">التعليم الإعدادي</Link></li>
              <li><Link href="/category/lycee" className="text-gray-300 hover:text-white transition-colors">التعليم الثانوي التأهيلي</Link></li>
              <li><Link href="/category/university" className="text-gray-300 hover:text-white transition-colors">التعليم الجامعي</Link></li>
              <li><Link href="/category/tawjih" className="text-gray-300 hover:text-white transition-colors">التوجيه المدرسي والمهني</Link></li>
            </ul>
          </div>

          {/* العمود 3: امتحانات ومباريات */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              امتحانات ومباريات
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/category/2bac" className="text-gray-300 hover:text-white transition-colors">الامتحانات الوطنية (2 Bac)</Link></li>
              <li><Link href="/category/1bac" className="text-gray-300 hover:text-white transition-colors">الامتحانات الجهوية (1 Bac)</Link></li>
              <li><Link href="/category/3eme" className="text-gray-300 hover:text-white transition-colors">الموحد الثالثة إعدادي</Link></li>
              <li><Link href="/category/concours-primaire" className="text-gray-300 hover:text-white transition-colors">مباراة التعليم (الابتدائي)</Link></li>
              <li><Link href="/category/master" className="text-gray-300 hover:text-white transition-colors">مباريات الماستر (Master)</Link></li>
            </ul>
          </div>

          {/* العمود 4: معلومات وتواصل */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              روابط هامة
            </h3>
            <ul className="space-y-3 text-sm mb-6">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">من نحن</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">شروط الاستخدام</Link></li>
            </ul>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>contact@najahipro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>المغرب، الدار البيضاء</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p className="text-gray-400">© 2025 NAJAHIPRO. جميع الحقوق محفوظة.</p>
          <p className="text-gray-400">تصميم وتطوير: Salah Dev</p>
        </div>
      </div>
    </footer>
  )
}