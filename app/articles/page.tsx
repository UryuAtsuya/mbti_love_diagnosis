import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Heart, Activity, ShieldCheck } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { articles as articleData } from '@/lib/articleRegistry';

export const metadata: Metadata = {
    title: '恋愛・相性コラム | AI Love Matcher',
    description: 'MBTIとラブタイプを組み合わせた恋愛・相性コラム一覧です。16タイプ別の恋愛傾向、相性ランキング、理論解説をまとめて読めます。',
    alternates: {
        canonical: '/articles',
    },
};

const iconMap: Record<string, React.ReactNode> = {
    'mbti-compatibility-ranking': <Activity className="w-6 h-6 text-rose-500" />,
    'love-character-theory': <ShieldCheck className="w-6 h-6 text-indigo-500" />,
    'truth-of-compatibility': <BrainIcon className="w-6 h-6 text-purple-500" />,
    'idol-compatibility': <Heart className="w-6 h-6 text-pink-500" />,
    'romance-strategy': <Activity className="w-6 h-6 text-orange-500" />,
};
const defaultIcon = <BookOpen className="w-6 h-6 text-teal-500" />;

export default function ArticlesIndex() {
    const articles = articleData.map((a) => ({ ...a, icon: iconMap[a.slug] ?? defaultIcon }));

    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">

            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    トップページに戻る
                </Link>
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        恋愛・相性コラム
                    </h1>
                    <p className="text-gray-600 text-lg">
                        MBTIとラブキャラ診断を活用した、恋愛や推し活に役立つ情報をお届けします。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={`/articles/${article.slug}`}
                            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 hover:border-teal-200 hover:-translate-y-1"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-2 py-1 rounded-md border border-teal-100">
                                        {article.tag}
                                    </span>
                                    <div className="bg-gray-50 p-2 rounded-full group-hover:bg-teal-50 transition-colors">
                                        {article.icon}
                                    </div>
                                </div>

                                <h2 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-3">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-gray-500 line-clamp-4 flex-grow">
                                    {article.description}
                                </p>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-teal-500 font-bold text-sm">
                                    続きを読む
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
    )
}
