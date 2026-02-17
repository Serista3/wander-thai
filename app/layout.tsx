import type { Metadata } from "next";
import { poppins, kanit } from "./fonts";
import HeaderNav from "@/components/layout/navigation/HeaderNav";
import Footer from "@/components/layout/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title:  {
    default: 'Wander Thai | ค้นหาสถานที่ท่องเที่ยวที่คุณอยากไป',
    template: '%s | Wander Thai'
  },
  description: "เว็บไซต์แนะนำสถานที่ท่องเที่ยว ให้ผู้ใช้ค้นหาและสำรวจสถานที่ท่องเที่ยวที่อยากไป",
  keywords: ['สถานที่ท่องเที่ยว', 'แนะนำสถานที่ท่องเที่ยว', 'ที่ที่อยากไป', 'wander thai', 'บรรยากาศ', 'สถานที่บรรยากาศดี', 'ที่เที่ยวยอดฮิต', 'สถานที่น่าไปปี 2026',
    'สถานที่', 'ท่องเที่ยว', 'ภูเขา', 'วัด', 'ป่า', 'ทะเล', 'น้ำตก', 'แม่น้ำ'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${poppins.className} ${kanit.className} antialiased`}
      >
        <HeaderNav />
          <main className="min-h-screen">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
