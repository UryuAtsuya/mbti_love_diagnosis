import Link from 'next/link';
import { ArrowRight, Check, Heart, MessageCircle, Sparkles, Users } from 'lucide-react';
import ArticleSection from '@/components/ArticleSection';
import CharacterSection from '@/components/CharacterSection';

const features = [
  { icon: Users, number: '01', title: '二人の相性がわかる', text: '性格と恋愛傾向を組み合わせて、惹かれ合う理由を分析します。' },
  { icon: MessageCircle, number: '02', title: 'すれ違う理由がわかる', text: '連絡頻度・距離感・価値観の違いを、言葉にして整理します。' },
  { icon: Heart, number: '03', title: '関係を深めるヒントがわかる', text: '相手への伝え方や接し方を、具体的な行動に変えて紹介します。' },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <section className="relative border-b border-[#ebe5ea] px-4 py-12 sm:py-20 lg:py-24">
        <div className="hero-orb hero-orb-left" aria-hidden="true" />
        <div className="hero-orb hero-orb-right" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#eadde4] bg-white/80 px-4 py-2 text-xs font-bold tracking-[.08em] text-[var(--color-coral-dark)] sm:text-sm">
              <Sparkles className="h-4 w-4" /> 無料のMBTI × ラブタイプ相性診断
            </p>
            <h1 className="text-[2.15rem] font-bold leading-[1.2] tracking-[-.04em] sm:text-5xl lg:text-[3.5rem]">
              性格だけではわからない、<br />
              <span className="text-[var(--color-coral-dark)]">二人の恋愛相性</span>を読み解く。
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#5f5b6d] sm:text-lg lg:mx-0">
              MBTIとラブタイプを掛け合わせて、会話・距離感・愛情表現・すれ違いやすいポイントまで整理します。
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/diagnosis" className="primary-cta w-full sm:w-auto">
                二人の相性を診断する <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-xs font-medium text-[#777182]">登録不要 ・ 約1分 ・ 完全無料</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rotate-3 rounded-[2rem] bg-[#d9f1eb]" aria-hidden="true" />
            <div className="relative rounded-[1.75rem] border border-white/70 bg-white/95 p-6 shadow-[0_24px_70px_rgba(37,35,66,.14)] sm:p-8">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="rounded-full bg-[#e7f6f2] px-4 py-2 text-[#0f766e]">INTJ</span>
                <Heart className="h-5 w-5 fill-[#0f9f8f] text-[#0f9f8f]" />
                <span className="rounded-full bg-[#eef9f6] px-4 py-2 text-[#0f766e]">ENFP</span>
              </div>
              <div className="my-7 text-center">
                <p className="text-xs font-bold tracking-[.16em] text-[#8c8696]">COMPATIBILITY</p>
                <p className="mt-1 font-serif text-6xl font-semibold text-[var(--color-navy)]">87<span className="text-2xl">%</span></p>
                <p className="mt-3 font-bold leading-7">正反対だからこそ、<br />お互いの世界を広げられる関係</p>
              </div>
              <div className="space-y-3 border-t border-[#eee9ed] pt-5 text-sm">
                {[['惹かれ合いやすさ', 5], ['会話の相性', 4], ['安心感', 4]].map(([label, count]) => (
                  <div key={String(label)} className="flex items-center justify-between gap-3">
                    <span className="text-[#696474]">{label}</span>
                    <span className="tracking-wider text-[#0f9f8f]">{'★'.repeat(Number(count))}<span className="text-[#d8e5e1]">{'★'.repeat(5 - Number(count))}</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="section-heading"><span>WHAT YOU CAN LEARN</span><h2>相性の数字だけで終わらない診断</h2></div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {features.map(({ icon: Icon, number, title, text }) => (
              <div key={number} className="rounded-3xl border border-[#e9e4e8] bg-white p-6 shadow-[0_10px_30px_rgba(37,35,66,.05)]">
                <div className="flex items-center justify-between"><Icon className="h-6 w-6 text-[var(--color-coral)]" /><span className="font-serif text-3xl text-[#cbe4de]">{number}</span></div>
                <h3 className="mt-7 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#6a6573]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[var(--color-navy)] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold tracking-[.18em] text-[#9ad8cc]">HOW IT WORKS</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">たった3ステップで診断</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {['自分のタイプを選ぶ', '相手のタイプを選ぶ', '二人の結果を見る'].map((text, index) => <div key={text} className="rounded-2xl border border-white/15 bg-white/8 p-5"><span className="text-xs font-bold text-[#9ad8cc]">STEP {index + 1}</span><p className="mt-2 font-bold">{text}</p></div>)}
          </div>
          <Link href="/diagnosis" className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--color-coral)] px-8 font-bold shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#0d8b7e]">無料で診断を始める <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>

      <CharacterSection />
      <ArticleSection />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-[#e9e3e8] bg-white p-7 sm:p-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[#e9f7f3]">
            <div className="flex gap-0"><span className="h-16 w-16 rounded-full border-2 border-[#99d8ce]" /><span className="-ml-5 h-16 w-16 rounded-full border-2 border-[#0f9f8f]" /></div>
          </div>
          <div><p className="text-xs font-bold tracking-[.15em] text-[#0f766e]">OUR POLICY</p><h2 className="mt-3 text-2xl font-bold">診断結果は、二人を決めつけるものではありません。</h2><p className="mt-4 leading-8 text-[#696474]">性格タイプや恋愛傾向を、相手を理解するための「会話のきっかけ」として提供しています。</p></div>
        </div>
      </section>

      <section className="px-4 pb-28 pt-8 text-center sm:pb-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#e3f4ef] px-6 py-14 sm:px-12">
          <p className="font-serif text-2xl font-semibold leading-relaxed sm:text-4xl">あの人との違いは、<br />相性の悪さではないかもしれません。</p>
          <p className="mt-5 leading-7 text-[#625d70]">二人の考え方と愛情表現を、一度整理してみませんか？</p>
          <Link href="/diagnosis" className="primary-cta mt-8">二人の相性を診断する <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>

      <Link href="/diagnosis" className="fixed bottom-3 left-4 right-4 z-40 flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--color-coral)] px-6 font-bold text-white shadow-[0_8px_30px_rgba(37,35,66,.28)] md:hidden">
        <Check className="h-5 w-5" /> 無料で診断する
      </Link>
    </main>
  );
}
