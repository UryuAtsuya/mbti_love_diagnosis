// app/page.tsx
import CharacterSection from '@/components/CharacterSection';
import DiagnosisHero from '@/components/DiagnosisHero';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      {/* Hero Section */}
      <DiagnosisHero />

      {/* Character Image Section */}
      <CharacterSection />
    </main>
  );
}