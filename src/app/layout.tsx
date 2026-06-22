import type { Metadata } from "next";
import { Noto_Serif_Bengali, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const displayFont = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "আত্মীয়তা — বিয়ের পাত্র-পাত্রী খুঁজুন",
  description: "বিশ্বাসযোগ্য ও নিরাপদ বিবাহ-সম্বন্ধের প্ল্যাটফর্ম",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className={`${displayFont.variable} ${bodyFont.variable} font-body`}>
        {children}
      </body>
    </html>
  );
  }
