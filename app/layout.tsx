import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MBTI×ラブタイプ相性診断 | AIが解き明かす運命の相性",
  description: "AIがあなたのMBTIと恋愛タイプから、二人の相性を徹底分析！16タイプ別の解説コラムも充実。あなたの恋愛を科学する相性診断サイト。",
  metadataBase: new URL('https://mbti-lovetype.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MBTI×ラブタイプ相性診断',
    description: 'AIがあなたのMBTIと恋愛タイプから、二人の相性を徹底分析！',
    url: 'https://mbti-lovetype.com',
    siteName: 'AI Love Matcher',
    images: [
      {
        url: '/Love_type.png',
        width: 1200,
        height: 630,
        alt: 'MBTI × Love Type Correlation Chart',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBTI×ラブタイプ相性診断',
    description: 'AIが二人の相性を徹底分析！16タイプ別の解説コラムも充実。',
    images: ['/Love_type.png'],
  },
  icons: {
    icon: '/Icon.svg',
    apple: '/Icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AI Love Matcher',
              url: 'https://mbti-lovetype.com',
              description: 'AIがあなたのMBTIと恋愛タイプから、二人の相性を徹底分析。16タイプ別の解説コラムも充実。',
              inLanguage: 'ja',
              publisher: {
                '@type': 'Organization',
                name: 'AI Love Matcher 運営事務局',
                url: 'https://mbti-lovetype.com',
              },
            }),
          }}
        />
        {/* Google AdSense verification */}
        <meta name="google-adsense-account" content="ca-pub-8206190214868370" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8206190214868370"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7G66GB972Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7G66GB972Z');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PTTLC8W3');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTTLC8W3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
