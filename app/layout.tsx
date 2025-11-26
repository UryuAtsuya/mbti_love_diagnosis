import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MBTI×ラブタイプ相性診断",
  description: "AIが二人の相性を徹底分析！",
  icons: {
    icon: '/Icon.svg',
    apple: '/Icon.svg',
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8206190214868370"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
