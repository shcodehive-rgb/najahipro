"use client"

import { DiscussionEmbed } from 'disqus-react';

export function Comments({ post }: { post: any }) {
  // 👇 هنا حطينا السمية اللي جبتي من الكود
  const disqusShortname = "najahipro"; 
  
  const disqusConfig = {
    // هاد الرابط مهم باش ديسكاس يعرف كل مقال بوحدو
    url: `https://najahipro.com/blog/${post._id}`,
    identifier: post._id,
    title: post.title,
    language: 'ar' // باش يطلع بالعربية
  };

  return (
    <div dir="rtl">
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}