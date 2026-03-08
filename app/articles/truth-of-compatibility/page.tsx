import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'MBTI×ラブキャラで見直す相性の考え方 | AI Love Matcher',
    description: 'MBTIだけでは説明しきれない恋愛のすれ違いを、ラブキャラとの組み合わせで整理するガイドです。',
    alternates: {
        canonical: '/articles/truth-of-compatibility',
    },
};

export default function TruthOfCompatibility() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Link
                    href="/articles"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    記事一覧に戻る
                </Link>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                    MBTI×ラブキャラ診断で見直す、相性の考え方
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">〜性格が似ていても恋愛でズレる理由を整理する〜</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">先に結論</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">MBTI：</span> 会話のテンポ、考え方、意思決定のしかたなどを整理しやすい指標です。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 恋愛での距離感、安心の求め方、愛情表現の出し方を見直す補助線として使えます。</li>
                            <li><span className="font-bold">相性の見方：</span> 「似ているか」だけでなく、「何で安心し、何で傷つきやすいか」まで見ると精度が上がります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 性格が合うのに恋愛で苦しくなるのはなぜか</h2>
                        <p className="leading-relaxed mb-4">
                            「会話は合うのに、なぜか疲れる」「好き同士のはずなのに、肝心な場面で噛み合わない」。こうした悩みは珍しくありません。理由のひとつは、性格の相性と恋愛の相性が完全には一致しないからです。
                        </p>
                        <p className="leading-relaxed mb-0">
                            日常会話や仕事感覚では相性が良くても、恋愛になると<span className="font-bold text-teal-600">連絡頻度、安心の作り方、甘え方、衝突後の戻り方</span>が問題になります。ここはMBTIだけでは見えにくい部分です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. MBTIが教えてくれること、教えてくれないこと</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">MBTIが見やすい領域</h3>
                                <ul className="list-disc pl-5 text-sm space-y-2 mb-0">
                                    <li>話し方や受け取り方の違い</li>
                                    <li>考える前に話すか、考えてから話すか</li>
                                    <li>事実と具体を重視するか、可能性や意味を重視するか</li>
                                    <li>結論を急ぐか、余白を残したいか</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">MBTIだけでは見えにくい領域</h3>
                                <ul className="list-disc pl-5 text-sm space-y-2 mb-0">
                                    <li>愛情を感じるタイミング</li>
                                    <li>近づかれると安心するか、少し距離が必要か</li>
                                    <li>尽くす側でいたいか、受け止めてもらいたいか</li>
                                    <li>ケンカの後にすぐ話したいか、時間が必要か</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ラブキャラが補うのは「恋愛の場面別の反応」</h2>
                        <p className="mb-4 leading-relaxed">
                            当サイトのラブキャラは、学術的な診断というよりも、恋愛で繰り返しやすい反応パターンを分かりやすく読むための整理軸です。相手がどういうふうに愛情を受け取りやすいか、どんな接し方で疲れやすいかを見る補助線として使えます。
                        </p>
                        <ul className="space-y-4 mb-0">
                            <li className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                                <span className="font-bold text-pink-700">ボス猫（LCRO）</span>
                                <p className="text-sm mt-2 mb-0">自分のペースを大切にしやすいタイプ。好意があっても、急接近や過干渉には慎重になりやすい傾向があります。</p>
                            </li>
                            <li className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                <span className="font-bold text-yellow-700">忠犬ハチ公（FCPE）</span>
                                <p className="text-sm mt-2 mb-0">分かりやすい誠実さや安心感に反応しやすいタイプ。関係の継続性や信頼の積み上げに価値を置きます。</p>
                            </li>
                            <li className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <span className="font-bold text-blue-700">最後の恋人（FAPE）</span>
                                <p className="text-sm mt-2 mb-0">受容や優しさが強く出やすいタイプ。相手を支えようとしすぎて、自分の疲れに気づくのが遅れることもあります。</p>
                            </li>
                            <li className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                <span className="font-bold text-purple-700">ツンデレヤンキー（LCPE）</span>
                                <p className="text-sm mt-2 mb-0">愛情は深いのに見せ方が不器用になりやすいタイプ。照れや防御が先に出ると誤解されやすくなります。</p>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">4. よくある3つのすれ違いパターン</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">似た者同士で話は合うが、動きが遅い</h3>
                                <p className="text-sm mb-0">
                                    内向型同士、慎重派同士などは落ち着いて話せる一方で、関係が進むきっかけが少なくなることがあります。この場合は、相性が悪いというより、進展の役割をどちらが担うかが曖昧なだけです。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">正反対だから惹かれるが、回復の仕方が違う</h3>
                                <p className="text-sm mb-0">
                                    片方は話してすぐ解決したい、もう片方は静かに整理してから向き合いたい、といった違いがあると、ケンカ後の二次被害が起こりやすくなります。ここは性格差より、修復手順の共有が重要です。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">好意はあるのに、愛情表現が翻訳されていない</h3>
                                <p className="text-sm mb-0">
                                    行動で示しているつもりなのに、相手は言葉がほしい。逆に言葉では伝えるのに、相手は継続的な行動を求めている。こうしたズレは、タイプを知るとかなり整理しやすくなります。
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">5. 診断結果を関係改善に使う3ステップ</h2>
                        <ol className="space-y-3 list-decimal pl-5">
                            <li>自分が安心を感じる場面と、疲れやすい場面を書き出す</li>
                            <li>相手に対して「何がうれしいか」「何が重いか」を言語化してみる</li>
                            <li>MBTIとラブキャラを照らして、連絡・会話・衝突後の対応を1つだけ変える</li>
                        </ol>
                        <p className="leading-relaxed mt-4 mb-0">
                            大事なのは、一度に全部変えようとしないことです。まずは「返信のテンポを合わせる」「説明のしかたを変える」など、観察しやすい小さな点から調整すると続けやすくなります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">6. 最後に: 相性は結果ではなく、理解の入り口</h2>
                        <p className="mb-6 leading-relaxed">
                            相性診断は、相手との未来を決めるものではありません。むしろ価値があるのは、「どこで心地よくなり、どこでズレやすいのか」を先回りして見つけられることです。自分の癖を理解し、相手の受け取り方を想像できるようになるだけでも、恋愛の消耗はかなり減らせます。
                        </p>
                        <div className="text-center">
                            <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                                今すぐ相性診断を受ける
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
