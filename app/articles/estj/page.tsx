import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Gavel, Info, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'ESTJ（幹部）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ESTJの恋愛傾向を、責任感の出方、率直さが強く出る場面、相手に求めやすいこと、関係を続けるコツまで整理します。',
    alternates: {
        canonical: '/articles/estj',
    },
};

export default function ESTJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-500 h-32 flex items-center justify-center">
                    <Gavel className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ESTJ（幹部）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-indigo-600 mt-3 font-medium">前に進める力が強い人が、恋愛で求めやすい誠実さと実行力</span>
                    </h1>

                    <div className="prose prose-indigo max-w-none text-gray-700">
                        <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-indigo-700">
                                <li>ESTJは、現実を動かす力や責任感が強く、曖昧な状態を長く放置しにくいタイプです。</li>
                                <li>恋愛では、信頼できること、行動に移せること、将来を一緒に組み立てられることを重視しやすくなります。</li>
                                <li>率直さが強く出ると厳しく見えることがありますが、本質的には関係を守ろうとする意識が強いタイプです。</li>
                                <li>感情の察し合いより、具体的な話し合いができる相手だと長続きしやすくなります。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">1. ESTJの基本性格: 現実を回し、責任を引き受ける</h2>
                            <p className="mb-6 leading-relaxed">
                                ESTJは、物事を整理し、役割を決め、現実を前に進める力が強いタイプです。迷い続けるより、判断して動いた方がいいと考えやすく、周囲からは頼もしい人、はっきりした人として見られることが多いでしょう。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                その一方で、曖昧さや非効率さにはストレスを感じやすく、言い方が強く見える場面もあります。冷たいからではなく、「ちゃんとしたい」「崩したくない」という責任感が強く出ているケースが少なくありません。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">ESTJが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>厳しく見えても、関係を軽く見ているわけではない</li>
                                    <li>指摘が多いのは、改善できると思っているからこそでもある</li>
                                    <li>感情表現は控えめでも、守る意識はかなり強い</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">2. ESTJが恋愛で大切にしやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                ESTJは、恋愛でも「気持ちがあるか」だけでなく、「現実に支え合えるか」をよく見ています。将来の話ができるか、役割を持てるか、約束が守られるかなど、生活の中で信頼できる関係かどうかを重視しやすいタイプです。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-indigo-100 rounded-xl p-4">
                                    <h3 className="font-bold text-indigo-700 mb-2">誠実さ</h3>
                                    <p className="text-sm mb-0">言葉と行動が揃っている相手を、ESTJはかなり信頼しやすくなります。</p>
                                </div>
                                <div className="border border-indigo-100 rounded-xl p-4">
                                    <h3 className="font-bold text-indigo-700 mb-2">実行力</h3>
                                    <p className="text-sm mb-0">話すだけでなく、必要なことを一緒に進められる相手を好みやすいです。</p>
                                </div>
                                <div className="border border-indigo-100 rounded-xl p-4">
                                    <h3 className="font-bold text-indigo-700 mb-2">将来の見通し</h3>
                                    <p className="text-sm mb-0">先の話を避けず、現実的に組み立てられることが安心につながります。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ESTJが本気になりやすいのは、頼れるだけでなく、対等に責任を持ってくれる相手です。感情を共有しつつも、地に足のついた関係を作れることがかなり重要です。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">率直さが強すぎて圧に見える</h3>
                                    <p className="text-sm mb-0">
                                        早く解決したい気持ちが強いほど、ESTJの言い方はストレートになりやすいです。本人は前進のためでも、相手には責められているように見えることがあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">察してほしいやり取りが噛み合いにくい</h3>
                                    <p className="text-sm mb-0">
                                        ESTJは曖昧な不満や態度から意図を読むのが得意とは限りません。問題が見えないまま責められると、防御的になりやすくなります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">相手にも同じ水準を求めやすい</h3>
                                    <p className="text-sm mb-0">
                                        自分が責任を持つぶん、相手にも同じ誠実さや実行力を求めやすい傾向があります。期待が高くなりすぎると、関係が息苦しくなることがあります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">4. ラブキャラ診断で見るESTJ</h2>
                            <p className="mb-6 leading-relaxed">
                                ESTJは、当サイトのラブキャラでは「憧れの先輩（LARO）」や「忠犬ハチ公（FCPE）」として説明しやすい場面があります。前者は引っ張る力と安心感、後者は守る責任感と一途さを表すイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                    <h3 className="text-lg font-bold text-indigo-800 mb-2">憧れの先輩（LARO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        方向性を示し、必要な判断をして周囲を動かす力が出るパターンです。頼もしさが魅力になる一方、配慮が足りないと強さが圧に見えることもあります。
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="text-lg font-bold text-blue-800 mb-2">忠犬ハチ公（FCPE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        選んだ相手に対して責任を持ち、必要なことを実行で示す一途さが出るイメージです。派手な甘さより、守る行動で愛情が見えやすいタイプです。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">5. ESTJと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-indigo-700">1. 不満は具体的に伝える</span>
                                    <p className="text-sm mt-2 mb-0">何が起きていて、どう改善したいのかが見えると、ESTJは建設的に向き合いやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-indigo-700">2. 努力や責任感をきちんと認める</span>
                                    <p className="text-sm mt-2 mb-0">当たり前のように見える部分ほど、言葉にされると信頼感が増しやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-indigo-700">3. 対等な意見を冷静に返す</span>
                                    <p className="text-sm mt-2 mb-0">遠慮しすぎるより、論点を整理して返す方が、ESTJには対等な相手として伝わりやすいです。</p>
                                </li>
                            </ol>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-10">
                                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    ESTJに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-blue-900 list-disc list-inside mb-0">
                                    <li>曖昧なまま不満を溜めてあとで爆発させること</li>
                                    <li>約束や時間を軽く扱うこと</li>
                                    <li>責任感を利用して任せきりにすること</li>
                                    <li>人前で意地を張るようにぶつかること</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">堅実に進める恋の相性を整理する</h2>
                            <p className="mb-8 font-medium">
                                ESTJらしい責任感や、<br />
                                強く出やすい場面を診断で見直せます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-indigo-800 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                無料診断をスタートする
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-500">
                    この記事は一般的な傾向をもとに編集しています。2026年3月更新。
                </div>
            </div>
        </main>
    );
}
