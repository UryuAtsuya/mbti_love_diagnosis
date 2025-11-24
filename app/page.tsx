// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import CharacterSection from '@/components/CharacterSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-teal-500" />
          <span className="text-sm font-bold text-teal-600">AIが二人の相性を徹底分析</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          MBTI × Love Type<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
            最強の相性診断
          </span>
        </h1>

        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          あなたの性格タイプと恋愛傾向から、二人の相性をAIが詳しく分析します。
          デートのアドバイスや、気をつけるべきポイントも教えてくれる！
        </p>

        <Link
          href="/diagnosis"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-teal-200 hover:scale-105 transition-transform"
        >
          <Heart className="w-5 h-5 fill-white" />
          診断を始める
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Character Image Section */}
      <CharacterSection />
    </main>
  );
}