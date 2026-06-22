# আত্মীয়তা — সেটআপ গাইড

## ধাপ ১: Supabase (সম্পন্ন ✅)
- supabase_schema.sql ফাইলের কন্টেন্ট SQL Editor এ রান করা হয়েছে
- Project Settings → API থেকে URL, anon key, service_role key সংগ্রহ করা হয়েছে

## ধাপ ২: Vercel এ ডিপ্লয়
- vercel.com এ GitHub দিয়ে লগইন করুন
- এই repo (motenctg-dotcom) সিলেক্ট করে Import করুন
- Environment Variables সেকশনে এই ৪টা যুক্ত করুন:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE_KEY
  - ADMIN_PASSWORD
- Deploy বাটনে চাপুন
- ২-৩ মিনিট অপেক্ষা করুন, একটা লাইভ লিংক পাবেন (যেমন motenctg-dotcom.vercel.app)

## ধাপ ৩: টেস্ট করুন
- /signup থেকে একাউন্ট খুলুন
- /dashboard থেকে একটা প্রোফাইল দিন
- /browse এ গিয়ে দেখুন প্রোফাইল দেখা যাচ্ছে কিনা (ছবি ব্লার থাকবে)
- /admin এ গিয়ে ADMIN_PASSWORD দিয়ে লগইন করে একটা প্রিমিয়াম কোড জেনারেট করুন
- ড্যাশবোর্ডে সেই কোড রিডিম করে দেখুন ছবি/ফোন নাম্বার আনব্লক হয় কিনা

## ভবিষ্যতে যা করা যাবে
- নিজের ডোমেইন যুক্ত করা (Vercel Settings → Domains)
- bKash/SSLCommerz দিয়ে অটোমেটিক পেমেন্ট যুক্ত করা
- Supabase Storage দিয়ে আসল প্রোফাইল ছবি আপলোডের ফিচার যুক্ত করা
