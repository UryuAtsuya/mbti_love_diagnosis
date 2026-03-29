import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { articles, featuredArticleSlugs } from '@/lib/articleRegistry';

const featuredTagClasses: Record<string, string> = {
    'truth-of-compatibility': 'text-teal-600 bg-teal-50',
    'idol-compatibility': 'text-pink-600 bg-pink-50',
    'romance-strategy': 'text-orange-600 bg-orange-50',
};

export default function ArticleSection() {
    const featured = featuredArticleSlugs.map((slug) => articles.find((a) => a.slug === slug)!);

    return (
        <section className="py-16 px-4 bg-white/50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                            <Sparkles className="text-teal-500 w-6 h-6" />
                            <span>恋愛・相性コラム</span>
                        </h2>
                        <p className="text-gray-500 mt-2">MBTI×ラブキャラで読み解く、恋愛のヒント</p>
                    </div>
                    <Link
                        href="/articles"
                        className="hidden md:flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors"
                    >
                        記事一覧を見る <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featured.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="group block bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-teal-200 transition-all p-5 h-full"
                        >
                            <div className="flex flex-col h-full">
                                <span className={`text-xs font-bold px-2 py-1 rounded w-fit mb-3 ${featuredTagClasses[article.slug]}`}>
                                    {article.tag}
                                </span>
                                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
                                    {article.description}
                                </p>
                                <span className="text-teal-500 text-sm font-bold flex items-center mt-auto">
                                    読む <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors"
                    >
                        記事一覧を見る <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
