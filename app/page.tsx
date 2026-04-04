// app/page.tsx
import CharacterSection from '@/components/CharacterSection';
import DiagnosisHero from '@/components/DiagnosisHero';
import ArticleSection from '@/components/ArticleSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      {/* Hero Section */}
      <DiagnosisHero />

      {/* Affiliate Banner */}
      <div className="max-w-4xl mx-auto px-4 py-4 text-center">
        <p className="text-xs text-gray-400 mb-2">PR</p>
        <a href="https://px.a8.net/svt/ejp?a8mat=4AZS0V+61WO6Q+5UBE+5Z6WX" rel="nofollow" target="_blank">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width={350} height={250} alt="" src="https://www27.a8.net/svt/bgt?aid=260330143366&wid=001&eno=01&mid=s00000027257001004000&mc=1" className="inline-block" />
        </a>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AZS0V+61WO6Q+5UBE+5Z6WX" alt="" />
      </div>

      {/* Article Section */}
      <ArticleSection />

      {/* Character Image Section */}
      <CharacterSection />
    </main>
  );
}