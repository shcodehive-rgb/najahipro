"use client"

import { useState, useEffect } from "react"
import { Search, Facebook, Twitter, Instagram, Youtube, Menu, ChevronDown, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { client } from "@/sanity/client"

export function Header() {
  const [breakingNews, setBreakingNews] = useState<any[]>([])

  useEffect(() => {
    const fetchBreakingNews = async () => {
      // ✅ التغيير 1: جبنا _id (الأيدي) باش الرابط يخدم مع الصفحة الحالية
      const query = `*[_type == "post" && isBreaking == true] {
        title,
        _id
      }`
      try {
        const data = await client.fetch(query)
        setBreakingNews(data)
      } catch (error) {
        console.error("Error fetching news:", error)
      }
    }

    fetchBreakingNews()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm" dir="rtl">
      
      {/* شريط الأخبار العاجلة */}
      {breakingNews.length > 0 && (
        <div className="bg-red-600 text-white py-2 overflow-hidden relative z-50 border-b border-red-700">
           <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
               
               <div className="bg-white text-red-600 px-3 py-0.5 text-xs font-black rounded-sm shrink-0 flex items-center gap-1 z-10 shadow-sm animate-pulse">
                 <Bell className="w-3 h-3 fill-current" />
                 مستجدات
               </div>

               <div className="flex-1 overflow-hidden relative h-6">
                  <div className="animate-marquee whitespace-nowrap absolute top-0 flex gap-8 items-center w-full">
                     {breakingNews.map((news, index) => (
                       // ✅ التغيير 2: دابا الرابط كيستعمل _id
                       <Link key={index} href={`/blog/${news._id}`} className="text-sm font-medium hover:underline hover:text-red-100 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white rounded-full opacity-70"></span>
                          {news.title}
                       </Link>
                     ))}
                     {/* التكرار (باش الشريط يعمر) */}
                     {breakingNews.length === 1 && (
                        <Link href={`/blog/${breakingNews[0]._id}`} className="text-sm font-medium hover:underline hover:text-red-100 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white rounded-full opacity-70"></span>
                          {breakingNews[0].title}
                       </Link>
                     )}
                  </div>
               </div>
           </div>
        </div>
      )}

      {/* Main Header Content - (نفس الكود القديم ما تبدلش) */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52">
                <DropdownMenuItem>الرئيسية</DropdownMenuItem>
                <DropdownMenuItem>الدروس</DropdownMenuItem>
                <DropdownMenuItem>الامتحانات</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link href="/" className="font-bold text-gray-700 hover:text-blue-600">الرئيسية</Link>

           <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 outline-none cursor-pointer">
                الدروس <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white z-50">
                {/* 👇 زدنا هذا الرابط العام */}
                <Link href="/category/doros"><DropdownMenuItem className="justify-end cursor-pointer font-bold bg-gray-50">عرض جميع الدروس</DropdownMenuItem></Link>
                
                <Link href="/category/primaire"><DropdownMenuItem className="justify-end cursor-pointer">التعليم الابتدائي</DropdownMenuItem></Link>
                <Link href="/category/college"><DropdownMenuItem className="justify-end cursor-pointer">التعليم الإعدادي</DropdownMenuItem></Link>
                <Link href="/category/lycee"><DropdownMenuItem className="justify-end cursor-pointer">التعليم الثانوي</DropdownMenuItem></Link>
                <Link href="/category/university"><DropdownMenuItem className="justify-end cursor-pointer">التعليم الجامعي</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 outline-none">
                الامتحانات <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white z-50">
                <Link href="/category/6eme"><DropdownMenuItem className="justify-end cursor-pointer">السادس ابتدائي</DropdownMenuItem></Link>
                <Link href="/category/3eme"><DropdownMenuItem className="justify-end cursor-pointer">الثالثة إعدادي</DropdownMenuItem></Link>
                <Link href="/category/1bac"><DropdownMenuItem className="justify-end cursor-pointer">الأولى باكالوريا</DropdownMenuItem></Link>
                <Link href="/category/2bac"><DropdownMenuItem className="justify-end cursor-pointer">الثانية باكالوريا</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 outline-none cursor-pointer">
                المباريات <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white z-50">
                {/* 👇 زدنا هذا الرابط العام */}
                <Link href="/category/moubaryat"><DropdownMenuItem className="justify-end cursor-pointer font-bold bg-gray-50">كل المباريات</DropdownMenuItem></Link>
                
                <Link href="/category/concours-primaire"><DropdownMenuItem className="justify-end cursor-pointer">مباراة التعليم (ابتدائي)</DropdownMenuItem></Link>
                <Link href="/category/concours-secondaire"><DropdownMenuItem className="justify-end cursor-pointer">مباراة التعليم (تأهيلي)</DropdownMenuItem></Link>
                <Link href="/category/master"><DropdownMenuItem className="justify-end cursor-pointer">سلك الماستر (Master)</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/category/tawjih" className="font-medium text-gray-700 hover:text-blue-600">
              التوجيه
            </Link>
          </nav>

          <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter">
            NAJAHI<span className="text-gray-800">PRO</span>
          </Link>

        </div>
      </div>
    </header>
  )
}