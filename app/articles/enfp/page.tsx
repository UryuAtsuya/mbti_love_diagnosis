import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ArrowLeft, Sparkles, Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: 'ENFP（広報運動家）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ENFPの恋愛傾向を、ワクワクの作り方、飽きやすさとの付き合い方、ラブキャラの見方、長続きのコツまで整理します。',
    alternates: {
        canonical: '/articles/enfp',
    },
};

export default function ENFPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-teal-400 to-pink-400 h-32 flex items-center justify-center">
                    <Zap className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ENFP（広報運動家）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-pink-600 mt-3 font-medium">自由さと熱量を持つ人が、恋愛で大切にしていること</span>
                    </h1>

                    <div className="prose prose-teal max-w-none text-gray-700">
                        <section className="bg-pink-50 p-6 rounded-2xl border border-pink-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-pink-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-pink-700">
                                <li>ENFPは、新しい可能性や人の魅力を見つけるのが得意で、関係に活気を持ち込みやすいタイプです。</li>
                                <li>恋愛では、束縛よりも信頼、退屈しない会話、相手の自立性を重視しやすくなります。</li>
                                <li>明るく見えても、理解されない感覚や温度差に意外と傷つきやすい面があります。</li>
                                <li>長続きの鍵は、自由を奪わず、同時に雑に扱わないことです。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">1. ENFPの基本性格: 人にも未来にも反応しやすい</h2>
                            <p className="mb-6 leading-relaxed">
                                ENFPは、目の前の人の魅力や、これから起こり得る面白い可能性に反応しやすいタイプです。会話の中から相手の良さを見つけたり、まだ形になっていないアイデアに熱中したりすることが多く、周囲からは明るくエネルギッシュに見られやすいでしょう。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                一方で、好奇心が強いぶん刺激に敏感で、心が動かない状態が続くと急に元気がなくなることがあります。飽きっぽいというより、<span className="font-bold text-pink-600">意味や熱量が感じられない状態に長く留まるのが苦手</span>だと考えた方が実態に近いです。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">2. 恋愛で重視しやすいこと</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-pink-700 mb-2">一緒にいて会話が広がるか</h3>
                                    <p className="text-sm mb-0">話しているうちに発想が広がる相手、自分のアイデアを面白がってくれる相手に惹かれやすい傾向があります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-pink-700 mb-2">自由と信頼が両立するか</h3>
                                    <p className="text-sm mb-0">近い関係になっても、行動を細かく管理されると息苦しさを感じやすいです。放任ではなく、信頼されている感覚が重要です。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-pink-700 mb-2">感情の温度が共有できるか</h3>
                                    <p className="text-sm mb-0">反応が薄すぎると「受け取ってもらえていない」と感じやすく、逆に温度が近いと一気に距離が縮まることがあります。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ENFPは自立した相手に惹かれやすい一方で、気持ちをちゃんと返してくれる関係を求めています。自由と放置は違う、という感覚を持っている人が多いです。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">3. ENFPが疲れやすい恋愛パターン</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-pink-700 mb-2">常識や型で押さえつけられる</h3>
                                    <p className="text-sm mb-0">「普通はこうする」「それは変だよ」と繰り返されると、自分らしさを否定された感覚になりやすいです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-pink-700 mb-2">反応が返ってこない</h3>
                                    <p className="text-sm mb-0">盛り上がりたいわけではなくても、好意や興味が見えない状態が続くと、一人で関係を回しているように感じて疲れます。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-pink-700 mb-2">刺激だけでつながる</h3>
                                    <p className="text-sm mb-0">楽しいことが多くても、安心や誠実さが伴わない関係は長期的には消耗しやすくなります。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">4. ラブキャラ診断で見るENFP</h2>
                            <p className="mb-6 leading-relaxed">
                                ENFPは、ラブキャラでは「デビルエンジェル（FAPO）」や「主人公タイプ（LCPO）」として説明しやすい場面があります。どちらも、空気を明るく動かす力と、自分の熱量で周囲を巻き込む力が出やすいイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
                                    <h3 className="text-lg font-bold text-pink-800 mb-2">デビルエンジェル（FAPO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        親しみやすさと自由さが同時にあり、近いのに掴みきれない魅力として映ることがあります。やさしいのにマイペース、このギャップが印象に残りやすいタイプです。
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-800 mb-2">主人公タイプ（LCPO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        楽しい空気を自分から作り、相手にもその楽しさを共有したくなるタイプです。関係を前へ進める勢いがあり、恋愛でも分かりやすい熱量として出やすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">5. ENFPと長続きしやすい関わり方</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-pink-700">1. 管理ではなく信頼でつながる</span>
                                    <p className="text-sm mt-2 mb-0">行動を縛るより、なぜ不安なのかを言葉にした方が関係は安定しやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-pink-700">2. 反応を返す</span>
                                    <p className="text-sm mt-2 mb-0">大げさでなくてもいいので、面白かった、うれしかった、助かったという反応があると安心しやすいです。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-pink-700">3. 小さな変化を一緒に楽しむ</span>
                                    <p className="text-sm mt-2 mb-0">新しい場所、話題、習慣などを少しずつ増やすと、関係の鮮度を保ちやすくなります。</p>
                                </li>
                            </ol>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-10">
                                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                                    <AlertCircle className="w-5 h-5 mr-2" />
                                    ENFPに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-red-900 list-disc list-inside mb-0">
                                    <li>自由を奪うような細かな管理</li>
                                    <li>興味やアイデアをすぐに否定すること</li>
                                    <li>気持ちを読ませるだけで説明しないこと</li>
                                    <li>楽しい時だけ近く、重い時に放置すること</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-pink-500 to-rose-400 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">自分の熱量の扱い方を知る</h2>
                            <p className="mb-8 font-medium">
                                ENFPらしい恋愛の強みと、<br />
                                すれ違いやすい場面を組み合わせ診断で整理できます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-pink-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                今すぐ相性診断を開始
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
