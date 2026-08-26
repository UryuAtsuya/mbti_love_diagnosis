import type { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    BookOpen,
    Clock3,
    Compass,
    HeartHandshake,
    Lightbulb,
    Sparkles,
    UsersRound,
} from 'lucide-react';
import { articles as articleData, featuredArticleSlugs, type Article } from '@/lib/articleRegistry';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: '恋愛・相性コラム | AI Love Matcher',
    description: 'MBTIとラブタイプを組み合わせた恋愛・相性コラム一覧です。悩みや知りたいことから、今の自分に合う記事を選べます。',
    alternates: {
        canonical: '/articles',
    },
    openGraph: {
        title: '恋愛・相性コラム | AI Love Matcher',
        description: '相性は、答えではなく、理解の入り口。悩みや知りたいことから今の自分に合う記事を選べます。',
        url: '/articles',
        type: 'website',
        images: [
            {
                url: '/articles-og.png',
                width: 1734,
                height: 907,
                alt: 'AI Love Matcher 恋愛・相性コラム',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '恋愛・相性コラム | AI Love Matcher',
        description: '相性は、答えではなく、理解の入り口。',
        images: ['/articles-og.png'],
    },
};

const theoryTags = new Set(['理論・解説', 'ランキング', '相性の真実']);
const romanceTags = new Set(['恋愛攻略・実戦', '推し活・アイドル']);
const typesTag = '16タイプ解説';

const readingPaths = [
    {
        href: '#start-here',
        icon: Compass,
        eyebrow: 'はじめての方へ',
        title: '診断結果の見方を知りたい',
        description: '結果に振り回されず、自分や相手を理解する材料として使うコツから読めます。',
        tone: 'bg-[#e3f4ef] border-[#c6e7de] text-[#0f766e]',
    },
    {
        href: '#romance',
        icon: HeartHandshake,
        eyebrow: '今、悩みがある',
        title: 'すれ違いを整理したい',
        description: '連絡頻度・価値観・距離感など、具体的な悩みに近い記事を選べます。',
        tone: 'bg-[#fff0eb] border-[#f4d8cf] text-[#a9503b]',
    },
    {
        href: '#types',
        icon: UsersRound,
        eyebrow: 'タイプから探す',
        title: '自分や相手の傾向を知りたい',
        description: '16タイプ別に、恋愛で安心しやすいことや、すれ違いやすい場面を確認できます。',
        tone: 'bg-[#f1effa] border-[#ddd8ef] text-[#62558f]',
    },
];

export default function ArticlesIndex() {
    const featuredArticles = featuredArticleSlugs
        .map((slug) => articleData.find((article) => article.slug === slug))
        .filter((article): article is Article => Boolean(article));
    const featuredArticle = featuredArticles[0];
    const theoryArticles = articleData.filter((article) => theoryTags.has(article.tag));
    const romanceArticles = articleData.filter((article) => romanceTags.has(article.tag));
    const typeArticles = articleData.filter((article) => article.tag === typesTag);

    return (
        <main className="min-h-screen bg-[#faf7f8] text-[#252342]">
            <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10">
                <Breadcrumb items={[{ label: '恋愛コラム' }]} />

                <header className="relative mt-6 overflow-hidden rounded-[2rem] border border-[#e7e1e6] bg-white px-6 py-10 shadow-[0_18px_55px_rgba(37,35,66,.06)] sm:px-10 sm:py-14">
                    <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#d9f2ec] opacity-70" aria-hidden="true" />
                    <div className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-[#f3e8ec] opacity-70" aria-hidden="true" />
                    <div className="relative max-w-3xl">
                        <p className="text-xs font-bold tracking-[.18em] text-[#0f766e]">LOVE &amp; RELATIONSHIP JOURNAL</p>
                        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
                            今の気持ちから、<br className="hidden sm:block" />読む記事を選べます。
                        </h1>
                        <p className="mt-5 max-w-2xl text-base leading-8 text-[#625d69] sm:text-lg">
                            相性・連絡・価値観・タイプのこと。診断の答え合わせではなく、次の会話や行動につながる読み物をまとめました。
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#77717e]">
                            <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#0f766e]" />全{articleData.length}記事</span>
                            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#0f766e]" />1記事 約5〜8分</span>
                        </div>
                    </div>
                </header>

                <section className="mt-10" aria-labelledby="choose-by-concern">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-bold tracking-[.16em] text-[#0f766e]">CHOOSE BY CONCERN</p>
                            <h2 id="choose-by-concern" className="mt-2 text-2xl font-bold">何から読みたいですか？</h2>
                        </div>
                        <p className="text-sm text-[#77717e]">迷ったら、今の自分に近いものを選んでください。</p>
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {readingPaths.map((path) => {
                            const Icon = path.icon;
                            return (
                                <Link
                                    key={path.href}
                                    href={path.href}
                                    className={`group rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(37,35,66,.08)] ${path.tone}`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <Icon className="h-6 w-6" />
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                    <p className="mt-7 text-xs font-bold tracking-[.12em] opacity-80">{path.eyebrow}</p>
                                    <h3 className="mt-2 text-lg font-bold text-[#252342]">{path.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-[#625d69]">{path.description}</p>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {featuredArticle && (
                    <section id="start-here" className="scroll-mt-28 pt-16" aria-labelledby="start-here-title">
                        <div className="grid overflow-hidden rounded-[2rem] border border-[#d6e8e3] bg-[#e3f4ef] lg:grid-cols-[.8fr_1.2fr]">
                            <div className="flex min-h-64 flex-col justify-between p-7 sm:p-9">
                                <div>
                                    <p className="text-xs font-bold tracking-[.16em] text-[#0f766e]">START HERE</p>
                                    <h2 id="start-here-title" className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">最初の1本におすすめ</h2>
                                    <p className="mt-4 text-sm leading-7 text-[#55505d]">診断結果を「答え」ではなく、会話や自己理解の入り口として読むための基本ガイドです。</p>
                                </div>
                                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-[#625d69]"><Clock3 className="h-4 w-4" />約6分</div>
                            </div>
                            <Link href={`/articles/${featuredArticle.slug}`} className="group flex flex-col justify-center border-t border-[#d6e8e3] bg-white p-7 lg:border-l lg:border-t-0 sm:p-10">
                                <span className="w-fit rounded-full bg-[#edf8f5] px-3 py-1 text-xs font-bold text-[#0f766e]">{featuredArticle.tag}</span>
                                <h3 className="mt-5 text-2xl font-bold leading-snug transition-colors group-hover:text-[#0f766e]">{featuredArticle.title}</h3>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#625d69]">{featuredArticle.description}</p>
                                <span className="mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-[#0f766e]">この記事を読む <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                            </Link>
                        </div>
                    </section>
                )}

                <ArticleGroup
                    id="theory"
                    eyebrow="UNDERSTAND"
                    title="診断と相性を、丁寧に理解する"
                    description="ランキングやタイプを決めつけに使わず、現実の関係に役立てるための基礎知識です。"
                    icon={Lightbulb}
                    articles={theoryArticles}
                />
                <ArticleGroup
                    id="romance"
                    eyebrow="RELATIONSHIP"
                    title="恋愛の悩みから選ぶ"
                    description="連絡頻度、価値観、距離感など、いま困っている場面に近い記事から読めます。"
                    icon={HeartHandshake}
                    articles={romanceArticles}
                />
                <ArticleGroup
                    id="types"
                    eyebrow="16 PERSONALITIES"
                    title="16タイプ別の恋愛傾向"
                    description="自分や相手のタイプを入口に、安心しやすいこと・すれ違いやすいことを確認できます。"
                    icon={Sparkles}
                    articles={typeArticles}
                    compact
                />
            </div>
        </main>
    );
}

function ArticleGroup({
    id,
    eyebrow,
    title,
    description,
    icon: Icon,
    articles,
    compact = false,
}: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    icon: typeof BookOpen;
    articles: Article[];
    compact?: boolean;
}) {
    return (
        <section id={id} className="scroll-mt-24 pt-16" aria-labelledby={`${id}-title`}>
            <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0f766e] shadow-[0_8px_24px_rgba(37,35,66,.06)]"><Icon className="h-5 w-5" /></div>
                <div>
                    <p className="text-xs font-bold tracking-[.16em] text-[#0f766e]">{eyebrow}</p>
                    <h2 id={`${id}-title`} className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6a6573]">{description}</p>
                </div>
            </div>
            <div className={`mt-7 grid gap-4 ${compact ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                {articles.map((article) => <ArticleCard key={article.slug} article={article} compact={compact} />)}
            </div>
        </section>
    );
}

function ArticleCard({ article, compact }: { article: Article; compact: boolean }) {
    return (
        <Link
            href={`/articles/${article.slug}`}
            className={`group flex h-full flex-col rounded-3xl border border-[#e8e2e7] bg-white transition hover:-translate-y-1 hover:border-[#bddfd7] hover:shadow-[0_16px_36px_rgba(37,35,66,.08)] ${compact ? 'p-5' : 'p-6'}`}
        >
            <div className="flex items-center justify-between gap-3 text-xs">
                <span className="rounded-full bg-[#edf8f5] px-3 py-1 font-bold text-[#0f766e]">{article.tag}</span>
                <span className="inline-flex shrink-0 items-center gap-1 text-[#837d8b]"><Clock3 className="h-3.5 w-3.5" />約{compact ? '7' : '6'}分</span>
            </div>
            <h3 className={`mt-5 font-bold leading-7 transition-colors group-hover:text-[#0f766e] ${compact ? 'text-base' : 'text-lg'}`}>{article.title}</h3>
            {!compact && <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6a6573]">{article.description}</p>}
            <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#0f766e]">続きを読む <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
        </Link>
    );
}
