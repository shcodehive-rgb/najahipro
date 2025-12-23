import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: {
    default: "NajahiPro - منصة الدعم المدرسي والتوجيه",
    template: "%s | NajahiPro"
  },
  description: "منصة نجاحي برو توفر دروس، ملخصات، امتحانات ومباريات.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}