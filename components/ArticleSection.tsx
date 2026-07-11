import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { articles, featuredArticleSlugs } from '@/lib/articleRegistry';

export default function ArticleSection() {
  const featured = featuredArticleSlugs.map((slug) => articles.find((article) => article.slug === slug)!).filter(Boolean);
  return (
    <section className="border-y border-[#ebe5ea] bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="text-xs font-bold tracking-[.16em] text-[#0f766e]">JOURNAL</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">恋愛を、もう少し深く理解する。</h2><p className="mt-3 text-sm leading-7 text-[#6a6573]">相性・会話・距離感を、タイプだけで決めつけずに考えるコラム。</p></div>
          <Link href="/articles" className="inline-flex min-h-11 items-center gap-2 font-bold text-[#0f766e]">恋愛コラムをすべて見る <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {featured.map((article, index) => <Link key={article.slug} href={`/articles/${article.slug}`} className={`group flex min-h-64 flex-col rounded-3xl border border-[#e9e4e8] p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(37,35,66,.08)] ${index === 0 ? 'bg-[#e3f4ef]' : 'bg-[#fcfafb]'}`}><span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0f766e]">{article.tag}</span><h3 className="mt-5 text-lg font-bold leading-7 group-hover:text-[#0f766e]">{article.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6a6573]">{article.description}</p><div className="mt-auto flex items-center justify-between pt-5 text-xs text-[#837d8b]"><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 約5分</span><ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div></Link>)}
        </div>
      </div>
    </section>
  );
}
