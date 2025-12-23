import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'المقالات (Posts)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'عنوان المقال',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'رابط المقال (Slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    // ... الحقول السابقة
    defineField({
      name: 'isBreaking',
      title: 'عرض في شريط الأخبار (عاجل)',
      type: 'boolean',
      initialValue: false, // بار ديفو طافي
      description: 'قم بتفعيل هذا الخيار ليظهر المقال في الشريط المتحرك أعلى الموقع',
    }),
    defineField({
      name: 'isPopular',
      title: 'واش يبان فـ "الأكثر قراءة" (Sidebar)؟',
      type: 'boolean',
      initialValue: false,
      description: 'فعّل هذا الخيار إذا بغيتي المقال يبان فالقائمة الجانبية.',
    }),
    defineField({
      name: 'isFeatured',
      title: 'واش يبان فـ "الواجهة الرئيسية" (Hero)؟',
      type: 'boolean',
      initialValue: false,
      description: 'فعّل هذا الخيار باش المقال يبان كبير الفوق (كنحتاجو 3 مقالات مفعلين).',
    }),
    defineField({
      name: 'keywords',
      title: 'الكلمات المفتاحية (SEO Tags)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'أكتب الكلمات المهمة واضغط Enter (مثلاً: باكالوريا، تمرين، 2025). هادشي مهم باش تطلع فجوجل.',
    }),
    // ... باقي الحقول
    // 1. نوع المحتوى (دروس، امتحانات، مباريات...)
    defineField({
      name: 'contentType',
      title: 'نوع المحتوى',
      type: 'string',
      options: {
        list: [
          { title: 'درس (Cours)', value: 'cours' },
          { title: 'امتحان (Examen)', value: 'exam' },
          { title: 'مباراة (Concours)', value: 'concours' },
          { title: 'توجيه (Orientation)', value: 'tawjih' },
          { title: 'أخبار (News)', value: 'news' },
        ],
        layout: 'radio'
      },
    }),
    // 2. الفئة المستهدفة (ابتدائي، إعدادي، باك، تعليم...)
    defineField({
      name: 'level',
      title: 'الفئة / المستوى',
      type: 'string',
      options: {
        list: [
          // التعليم المدرسي
          { title: 'الابتدائي (Primaire)', value: 'primaire' },
          { title: 'السادس ابتدائي (6ème)', value: '6eme' },
          { title: 'الإعدادي (Collège)', value: 'college' },
          { title: 'الثالثة إعدادي (3ème)', value: '3eme' },
          { title: 'الثانوي (Lycée)', value: 'lycee' },
          { title: 'الأولى باك (1 Bac)', value: '1bac' },
          { title: 'الثانية باك (2 Bac)', value: '2bac' },
          { title: 'الجامعة (Université)', value: 'university' },
          
          // المباريات والماستر
          { title: 'مباراة التعليم - ابتدائي', value: 'concours-primaire' },
          { title: 'مباراة التعليم - إعدادي/تأهيلي', value: 'concours-secondaire' },
          { title: 'الماستر (Master)', value: 'master' },
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'صورة الغلاف',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'content',
      title: 'محتوى المقال',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    // 3. هنا فين غتحط رابط Google Drive
    defineField({
      name: 'driveLink',
      title: 'رابط التحميل (Google Drive URL)',
      type: 'url',
      description: 'انسخ رابط الملف من جوجل درايف وضعه هنا (تأكد أن الرابط عام/Public)'
    }),
  ],
})