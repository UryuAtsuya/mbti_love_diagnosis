import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Heart, MessageCircle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'INFP（仲介者）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'INFPの恋愛傾向を、理想の持ち方、傷つきやすい場面、ラブキャラの見方、長続きしやすい関わり方まで整理します。',
    alternates: {
        canonical: '/articles/infp',
    },
};

export default function INFPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-32 flex items-center justify-center">
                    <Sparkles className="text-white w-12 h-12" />
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
                        INFP（仲介者）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-teal-600 mt-3 font-medium">理想を大切にする人が、恋愛で安心しやすい関係とは</span>
                    </h1>

                    <div className="prose prose-teal max-w-none text-gray-700">
                        <section className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-teal-800 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-teal-700">
                                <li>INFPは、自分の価値観や感情の真実味をとても大切にするタイプです。</li>
                                <li>恋愛では、条件の良さより「この人の前なら自分でいられるか」を重視しやすくなります。</li>
                                <li>やさしく見えても内面の理想は強く、雑に扱われると静かに距離を置くことがあります。</li>
                                <li>共感、尊重、一人で整理する時間がある関係だと長続きしやすくなります。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">1. INFPの基本性格: 感受性の強さと理想の高さ</h2>
                            <p className="mb-6 leading-relaxed">
                                INFPは、おだやかに見えても内側に強い価値観を持っているタイプです。周囲に合わせられないわけではありませんが、「自分にとって大事なもの」を曲げたまま生きることには大きな負担を感じやすい傾向があります。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                また、表現や創作、物語、音楽などを通じて自分の感情を整理する人も多く、直接言葉にしにくい思いを別の形で抱えていることがあります。静かな時間が必要なのは、冷たいからではなく、感じる量が多いからです。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">INFPの強みとして出やすいもの</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>相手の言葉の奥にある気持ちを感じ取りやすい</li>
                                    <li>目先の損得より、自分にとって意味のある選択をしやすい</li>
                                    <li>好きなものや大切な人に対して、想像以上に一途になりやすい</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">2. INFPの恋愛: 「安心」と「世界観の共有」が大事</h2>
                            <p className="mb-6 leading-relaxed">
                                INFPは、恋愛を単なるイベントとして扱いにくく、相手との関係が自分の内面に大きく影響しやすいタイプです。だからこそ、テンションの高さだけで惹かれるというより、安心して気持ちを置けるか、自分の世界観を否定されないかをよく見ています。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="border border-teal-100 p-5 rounded-2xl bg-white shadow-sm">
                                    <h3 className="font-bold text-teal-600 flex items-center mb-2">
                                        <Heart className="w-4 h-4 mr-2" />
                                        惹かれやすい相手
                                    </h3>
                                    <p className="text-sm mb-0">誠実さがあり、感情や価値観を雑に扱わず、ひとりの時間も尊重してくれる相手。</p>
                                </div>
                                <div className="border border-red-100 p-5 rounded-2xl bg-white shadow-sm">
                                    <h3 className="font-bold text-red-500 flex items-center mb-2">
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        関係が壊れやすい要因
                                    </h3>
                                    <p className="text-sm mb-0">否定、せかし、雑な言い方、気分で扱いが変わること。安心感が揺らぐと一気に閉じやすくなります。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                INFPは理想を持つぶん、現実との差に傷つきやすい面もあります。ただし、それは高望みというより、「大事にしたい関係を雑に扱いたくない」という感覚に近いものです。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">理想化しすぎて疲れる</h3>
                                    <p className="text-sm mb-0">
                                        相手の良い部分を深く見つけられる反面、期待が大きくなりやすく、現実とのギャップで落ち込みやすいことがあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">傷ついてもすぐには言えない</h3>
                                    <p className="text-sm mb-0">
                                        空気を壊したくなくて飲み込むうちに、心の中だけで距離が広がることがあります。相手から見ると突然冷えたように感じられるかもしれません。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">一人時間がないと消耗する</h3>
                                    <p className="text-sm mb-0">
                                        好きな相手でも、常に反応を求められる状態は疲れやすいです。回復のための静かな時間がある方が、むしろ関係は安定しやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">4. ラブキャラ診断で見るINFP</h2>
                            <p className="mb-6 leading-relaxed">
                                INFPは、当サイトのラブキャラでは「最後の恋人（FAPE）」や「謎の生命体（FARO）」として説明しやすい場面があります。前者は受容とやさしさ、後者は独自の世界観や距離感の取り方が出やすいイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                    <h3 className="text-lg font-bold text-emerald-800 mb-2">最後の恋人（FAPE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        相手を受け止めたい気持ちが強く、やさしさや共感が前に出やすいタイプです。ただし尽くしすぎると、自分の気持ちを後回しにしやすい点には注意が必要です。
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="text-lg font-bold text-blue-800 mb-2">謎の生命体（FARO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        内側の世界が豊かで、外からは分かりにくい魅力を持つタイプです。理解しようと急ぎすぎるより、その人らしさを尊重される方が安心しやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">5. INFPと長く付き合うためのコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-teal-700">1. 正しさより先に、気持ちを受け止める</span>
                                    <p className="text-sm mt-2 mb-0">すぐに結論や改善案を出すより、「そう感じたんだね」と受け止める方が信頼につながります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-teal-700">2. 世界観をからかわない</span>
                                    <p className="text-sm mt-2 mb-0">好きなもの、感動したこと、気にしている価値観を軽く扱わないことがとても重要です。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-teal-700">3. 一人時間と親密さの両方を認める</span>
                                    <p className="text-sm mt-2 mb-0">距離が必要な時期があっても、関係そのものを否定しているとは限りません。静かな時間がある方が戻ってきやすくなります。</p>
                                </li>
                            </ol>
                        </section>

                        <section className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                                <Sparkles className="text-teal-400" />
                                自分の恋愛の癖を整理する
                            </h2>
                            <p className="mb-8 text-gray-300">
                                INFPらしい安心ポイントや、<br />
                                相手とのズレやすい場面を診断で確かめられます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-teal-400 text-gray-900 font-black py-5 px-10 rounded-full hover:bg-teal-300 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-400/20">
                                詳細な相性診断を受ける
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
