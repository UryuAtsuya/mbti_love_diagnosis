import Link from 'next/link';
import { Sparkles, ArrowRight, Lightbulb, Users } from 'lucide-react';
import { articles, featuredArticleSlugs } from '@/lib/articleRegistry';

const featuredTagClasses: Record<string, string> = {
    'truth-of-compatibility': 'text-teal-700 bg-teal-50',
    'idol-compatibility': 'text-pink-600 bg-pink-50',
    'romance-strategy': 'text-orange-600 bg-orange-50',
};

const theoryArticles = articles.filter((a) =>
    ['理論・解説', 'ランキング', '相性の真実'].includes(a.tag)
);
const typeArticles = articles.filter((a) => a.tag === '16タイプ解説').slice(0, 6);

export default function ArticleSection() {
    const featured = featuredArticleSlugs.map((slug) => articles.find((a) => a.slug === slug)!);

    return (
        <section className="py-12 px-4 bg-white/50 sm:py-16">
            <div className="max-w-6xl mx-auto">
                {/* Featured Articles */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                            <Sparkles className="text-teal-700 w-6 h-6" />
                            <span>恋愛・相性コラム</span>
                        </h2>
                        <p className="text-gray-600 mt-2 leading-7">MBTI×ラブキャラで読み解く、恋愛のヒント</p>
                    </div>
                    <Link
                        href="/articles"
                        className="hidden md:flex items-center text-teal-700 font-bold hover:text-teal-800 transition-colors"
                    >
                        記事一覧を見る <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-14">
                    {featured.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="group block bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-teal-300 transition-all p-4 h-full sm:p-5"
                        >
                            <div className="flex flex-col h-full">
                                <span className={`text-xs font-bold px-2 py-1 rounded w-fit mb-3 ${featuredTagClasses[article.slug]}`}>
                                    {article.tag}
                                </span>
                                <h3 className="font-bold text-gray-800 mb-2 leading-7 group-hover:text-teal-700 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-6 line-clamp-3 mb-4 flex-grow">
                                    {article.description}
                                </p>
                                <span className="text-teal-700 text-sm font-bold flex items-center mt-auto">
                                    読む <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Theory & Analysis Preview */}
                <div className="mb-12 sm:mb-14">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-indigo-500" />
                        理論・解説
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {theoryArticles.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/articles/${article.slug}`}
                                className="group flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all"
                            >
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm text-gray-800 leading-6 group-hover:text-teal-700 transition-colors line-clamp-2">
                                        {article.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-5 mt-1 line-clamp-2">{article.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 16 Types Preview */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Users className="w-5 h-5 text-teal-700" />
                        16タイプ別解説
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {typeArticles.map((article) => {
                            const typeCode = article.slug.toUpperCase();
                            return (
                                <Link
                                    key={article.slug}
                                    href={`/articles/${article.slug}`}
                                    className="group bg-white rounded-lg p-3 border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all text-center"
                                >
                                    <div className="text-lg font-bold text-teal-700 group-hover:text-teal-800 transition-colors">
                                        {typeCode}
                                    </div>
                                    <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                                        {article.title.match(/（(.+?)）/)?.[1] ?? ''}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="mt-4 text-center">
                        <Link
                            href="/articles#types"
                            className="inline-flex min-h-10 items-center text-teal-700 font-bold text-sm hover:text-teal-800 transition-colors"
                        >
                            全16タイプを見る <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/articles"
                        className="inline-flex min-h-11 items-center text-teal-700 font-bold hover:text-teal-800 transition-colors"
                    >
                        記事一覧を見る <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
