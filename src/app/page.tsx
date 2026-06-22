import Link from "next/link";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <Header />

      <section className="relative overflow-hidden bg-deep-600 text-cream-100">
        <div
          className="absolute inset-0 opacity-30 bg-noksha-dots"
          style={{ backgroundSize: "22px 22px" }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
          <h1 className="font-display text-3xl sm:text-5xl font-700 leading-tight">
            পরিবারের বিশ্বাসে, <br className="hidden sm:block" />
            একটি সম্পর্কের শুরু
          </h1>
          <p className="mt-5 text-cream-200/90 text-base sm:text-lg max-w-xl mx-auto">
            যাচাই করা প্রোফাইল, স্বচ্ছ তথ্য — পাত্র-পাত্রী খোঁজার একটি নিরাপদ
            জায়গা।
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/browse"
              className="px-6 py-3 rounded bg-gold-500 text-maroon-700 font-600 hover:bg-gold-400 transition-colors focus-ring"
            >
              প্রোফাইল ব্রাউজ করুন
            </Link>
            <Link
              href="/signup"
              className="px-6 py-3 rounded border border-cream-100/40 hover:bg-deep-500 transition-colors focus-ring"
            >
              নিজের প্রোফাইল দিন
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <FeatureCard
            title="যাচাই করা প্রোফাইল"
            desc="প্রতিটি প্রোফাইল রিভিউ করার পরই প্রকাশ করা হয়"
          />
          <FeatureCard
            title="পরিবারের অংশগ্রহণ"
