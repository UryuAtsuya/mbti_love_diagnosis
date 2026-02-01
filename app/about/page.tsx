import Link from 'next/link';
import { ArrowLeft, Heart, Brain, Users } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Link
                    href="/"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    ホームに戻る
                </Link>

                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-teal-500 pb-4">当サイトについて</h1>

                <div className="space-y-10 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4 flex items-center">
                            <Heart className="w-5 h-5 mr-2" />
                            AI Love Matcherの目的
                        </h2>
                        <p>
                            「AI Love Matcher」は、最新のAI技術を活用して、MBTI（16タイプ性格診断）と恋愛キャラクターという2つの視点から、人々のより良い人間関係の構築を支援するために生まれました。<br /><br />
                            「なぜあの人とうまくいかないのか？」「自分に本当に合う人はどんな人か？」という普遍的な問いに対して、単なる相性診断以上の深みを持った分析を提供することを目指しています。
                        </p>
                    </section>

                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-xl font-bold text-teal-700 mb-4 flex items-center">
                            <Brain className="w-5 h-5 mr-2" />
                            コンテンツ制作方針
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0">1</span>
                                <div>
                                    <span className="font-bold">AI技術と専門知見の融合：</span>
                                    <p className="text-sm mt-1">当サイトの記事は、最新のAI（人工知能）を活用してドラフトを生成し、人間による事実確認（ファクトチェック）と専門的な解釈を加えて制作しています。AIならではの網羅性と、人間ならではの繊細な心理描写を掛け合わせています。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0">2</span>
                                <div>
                                    <span className="font-bold">独自の指標「Love Character 64」：</span>
                                    <p className="text-sm mt-1">既存の性格診断だけでは捉えきれない「恋愛における振る舞い」を64通りのキャラクターに分類。よりパーソナライズされた深い体験を提供します。</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4 flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            運営者情報
                        </h2>
                        <div className="border border-gray-100 rounded-lg overflow-hidden">
                            <table className="w-full text-left table-auto border-collapse">
                                <tbody className="bg-white">
                                    <tr className="border-b border-gray-50">
                                        <th className="px-6 py-4 bg-gray-50 font-bold text-gray-700 w-1/3">サイト名</th>
                                        <td className="px-6 py-4 text-gray-600">AI Love Matcher (MBTI×ラブキャラ相性診断)</td>
                                    </tr>
                                    <tr className="border-b border-gray-50">
                                        <th className="px-6 py-4 bg-gray-50 font-bold text-gray-700">運営チーム</th>
                                        <td className="px-6 py-4 text-gray-600">AI Love Matcher 制作委員会</td>
                                    </tr>
                                    <tr className="border-b border-gray-50">
                                        <th className="px-6 py-4 bg-gray-50 font-bold text-gray-700">URL</th>
                                        <td className="px-6 py-4 text-gray-600">https://mbti-lovetype.com/</td>
                                    </tr>
                                    <tr>
                                        <th className="px-6 py-4 bg-gray-50 font-bold text-gray-700">お問い合わせ</th>
                                        <td className="px-6 py-4 text-gray-600">
                                            <Link href="/contact" className="text-teal-600 hover:underline">お問い合わせフォーム</Link> よりお願いいたします
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
