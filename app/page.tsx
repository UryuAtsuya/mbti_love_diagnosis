// app/page.tsx
import ArticleSection from '@/components/ArticleSection';
import DiagnosisHero from '@/components/DiagnosisHero';
import CharacterSection from '@/components/CharacterSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      {/* Article Section - Primary content for SEO */}
      <ArticleSection />

      {/* Diagnosis CTA */}
      <DiagnosisHero />

      {/* Character Image Section */}
      <CharacterSection />
    </main>
  );
}
