// app/page.tsx
import ArticleSection from '@/components/ArticleSection';
import DiagnosisHero from '@/components/DiagnosisHero';
import CharacterSection from '@/components/CharacterSection';

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'AI Love Matcherでは何ができますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MBTIとラブタイプを組み合わせて、二人の相性、すれ違いやすい場面、会話で気をつけたいポイントを無料で確認できます。',
        },
      },
      {
        '@type': 'Question',
        name: '診断結果はどのように使えばいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '診断結果は相手を決めつけるためではなく、連絡頻度、距離感、価値観の違いを話し合うためのヒントとして使うことを推奨しています。',
        },
      },
      {
        '@type': 'Question',
        name: '診断は無料ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。AI Love Matcherの相性診断と記事コンテンツは無料で利用できます。',
        },
      },
    ],
  };

  return (
      <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="bg-white px-4 py-9 sm:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold text-teal-700">無料のMBTI×ラブタイプ相性診断</p>
          <h1 className="mx-auto max-w-[20rem] text-[1.65rem] font-bold leading-[1.35] text-gray-900 sm:max-w-4xl sm:text-4xl">
            <span className="block sm:inline">MBTIとラブタイプで、</span>
            <span className="block sm:inline">二人の相性と</span>
            <span className="block sm:inline">すれ違い方を診断</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-gray-700 sm:text-lg">
            AI Love Matcherは、性格タイプと恋愛傾向を組み合わせて、相性の高さだけでなく、連絡頻度・距離感・価値観のズレまで整理します。診断結果は決めつけではなく、相手を理解する会話のきっかけとして使えます。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-700 sm:gap-3">
            <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2">無料診断</span>
            <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2">16タイプ別解説</span>
            <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2">恋愛コミュニケーションのヒント</span>
          </div>
        </div>
      </section>
      {/* Article Section - Primary content for SEO */}
      <ArticleSection />

      {/* Diagnosis CTA */}
      <DiagnosisHero />

      {/* Character Image Section */}
      <CharacterSection />
    </main>
  );
}
