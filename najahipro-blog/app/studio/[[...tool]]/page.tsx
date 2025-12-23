"use client"

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config' 
// 👆 لاحظ: درنا غير 3 ديال (../) ماشي 4

export default function StudioPage() {
  return (
    <div className="z-[9999] relative">
      <NextStudio config={config} />
    </div>
  )
}