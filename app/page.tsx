// app/page.tsx
import CharacterSection from '@/components/CharacterSection';
import DiagnosisHero from '@/components/DiagnosisHero';
import ArticleSection from '@/components/ArticleSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      {/* Hero Section */}
      <DiagnosisHero />

      {/* Article Section */}
      <ArticleSection />

      {/* Character Image Section */}
      <CharacterSection />
    </main>
  );
}