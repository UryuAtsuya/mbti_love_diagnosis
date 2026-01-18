import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ArticleSection() {
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
                    <Link href="/articles/truth-of-compatibility" className="group block bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-teal-200 transition-all p-5 h-full">
                        <div className="flex flex-col h-full">
                            <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded w-fit mb-3">相性の真実</span>
                            <h3 className="font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                                MBTI×ラブキャラ診断で解き明かす「運命の相性」の真実
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
                                なぜ性格診断だけでは恋愛がうまくいかないのか？MBTIとラブキャラの複合診断で、あなたの恋愛が劇的に変わる理由を徹底解説。
                            </p>
                            <span className="text-teal-500 text-sm font-bold flex items-center mt-auto">
                                読む <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/articles/idol-compatibility" className="group block bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-teal-200 transition-all p-5 h-full">
                        <div className="flex flex-col h-full">
                            <span className="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-1 rounded w-fit mb-3">推し活・アイドル</span>
                            <h3 className="font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                                MBTI 16タイプ別・相性の良い芸能人とアイドル徹底解説
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
                                推しとの相性は？性格の不一致があっても、ラブキャラの補完関係を知れば「一生推せる推し活」が可能に！
                            </p>
                            <span className="text-teal-500 text-sm font-bold flex items-center mt-auto">
                                読む <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/articles/romance-strategy" className="group block bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-teal-200 transition-all p-5 h-full">
                        <div className="flex flex-col h-full">
                            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded w-fit mb-3">恋愛攻略・実戦</span>
                            <h3 className="font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                                【実戦編】MBTI×ラブキャラで落とす！意中の相手を「沼らせる」最強の恋愛攻略マトリクス
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
                                相手のタイプに合わせた最強のアプローチ方法は？「心の開き方」と「愛の受け取り方」を完全攻略。
                            </p>
                            <span className="text-teal-500 text-sm font-bold flex items-center mt-auto">
                                読む <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </Link>
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
