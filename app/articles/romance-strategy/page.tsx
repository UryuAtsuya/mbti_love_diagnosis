import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'MBTI×ラブキャラで読み解く恋愛コミュニケーション | AI Love Matcher',
    description: 'MBTIとラブキャラを手がかりに、距離の縮め方、会話の合わせ方、すれ違いの減らし方を整理した実践ガイドです。',
    alternates: {
        canonical: '/articles/romance-strategy',
    },
};

export default function RomanceStrategy() {
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
                    【実践編】MBTI×ラブキャラで読み解く、相手との距離が縮まる恋愛コミュニケーション
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">このページの要点</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">前提：</span> 診断は相手を操作するためではなく、すれ違いを減らすための地図として使います。</li>
                            <li><span className="font-bold">見る順番：</span> まずラブキャラで距離感をつかみ、次にMBTIで会話の合わせ方を調整すると、実践しやすくなります。</li>
                            <li><span className="font-bold">効果：</span> 連絡頻度、褒め方、誘い方、ケンカ後の修復のしかたを、相手に合わせて変えやすくなります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. まず押さえたい前提: 相手を変えるより、合わせ方を変える</h2>
                        <p className="leading-relaxed mb-4">
                            恋愛でうまくいかないとき、多くの人は「もっと好かれる言葉」や「正解のアプローチ」を探しがちです。しかし実際には、同じ言葉でも相手の受け取り方によって印象は大きく変わります。
                        </p>
                        <p className="leading-relaxed mb-4">
                            例えば、頻繁な連絡が愛情表現として伝わる相手もいれば、干渉や圧力に感じる相手もいます。MBTIとラブキャラを一緒に見る意味は、この<span className="font-bold text-teal-600">「善意なのにズレる」</span>場面を減らすことにあります。
                        </p>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                            <p className="text-sm leading-relaxed mb-0">
                                目安としては、<span className="font-bold">ラブキャラで距離感と安心ポイントを把握し、MBTIで会話のテンポと説明のしかたを合わせる</span>と、実生活に落とし込みやすくなります。
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ別: 最初の距離の縮め方</h2>
                        <div className="space-y-4">
                            <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                                <h3 className="font-bold text-purple-700 mb-2">距離を急に詰めると引きやすいタイプ</h3>
                                <p className="text-sm leading-relaxed mb-2">
                                    例: 「ボス猫（LCRO）」「憧れの先輩（LARO）」のように、自分のペースや世界観を大切にするタイプ。
                                </p>
                                <p className="text-sm leading-relaxed mb-0">
                                    有効なのは、追い詰めることではなく<span className="font-bold text-purple-700">安心して隣に置ける人になること</span>です。質問攻めより、相手の価値観やこだわりを理解しようとする姿勢の方が好印象につながります。
                                </p>
                            </div>

                            <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
                                <h3 className="font-bold text-yellow-700 mb-2">安心感があるほど心を開きやすいタイプ</h3>
                                <p className="text-sm leading-relaxed mb-2">
                                    例: 「忠犬ハチ公（FCPE）」「隠れベイビー（LCRE）」のように、信頼と継続性を重視するタイプ。
                                </p>
                                <p className="text-sm leading-relaxed mb-0">
                                    このタイプには、気まぐれな駆け引きよりも、返信の安定感、約束を守る姿勢、ささいな変化に気づく丁寧さが効きます。派手さより<span className="font-bold text-yellow-700">一貫性</span>が重要です。
                                </p>
                            </div>

                            <div className="bg-pink-50 p-5 rounded-lg border border-pink-100">
                                <h3 className="font-bold text-pink-700 mb-2">反応の良さや盛り上がりで関係が進みやすいタイプ</h3>
                                <p className="text-sm leading-relaxed mb-2">
                                    例: 「恋愛モンスター（FCPO）」「デビルエンジェル（FAPO）」のように、感情の熱量を楽しむタイプ。
                                </p>
                                <p className="text-sm leading-relaxed mb-0">
                                    この場合は、良いと思ったことをきちんと言葉にする、テンポよく返す、一緒に楽しめる話題を持つ、といった<span className="font-bold text-pink-700">リアクションの鮮度</span>が大切です。
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. MBTI別: 会話の合わせ方を4軸で見る</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-teal-100 rounded-lg p-4">
                                <h3 className="font-bold text-teal-700 mb-2">I / E: 一人で整えるか、会話で整えるか</h3>
                                <p className="text-sm mb-0">
                                    内向型には考える余白を残し、外向型には反応のテンポを返すと会話が続きやすくなります。返答の速さだけで愛情を測らないことも大切です。
                                </p>
                            </div>
                            <div className="border border-teal-100 rounded-lg p-4">
                                <h3 className="font-bold text-teal-700 mb-2">S / N: 具体の話が好きか、可能性の話が好きか</h3>
                                <p className="text-sm mb-0">
                                    感覚型には事実ベースの話、直感型には意味や背景の話が刺さりやすい傾向があります。同じデートの話題でも切り口を変えるだけで反応は変わります。
                                </p>
                            </div>
                            <div className="border border-teal-100 rounded-lg p-4">
                                <h3 className="font-bold text-teal-700 mb-2">T / F: 納得を重視するか、気持ちを重視するか</h3>
                                <p className="text-sm mb-0">
                                    思考型には理由や整理された説明、感情型には受け止めと共感が効きやすいです。問題解決を急ぐ前に、相手が何を求めている会話かを見分けるとズレにくくなります。
                                </p>
                            </div>
                            <div className="border border-teal-100 rounded-lg p-4">
                                <h3 className="font-bold text-teal-700 mb-2">J / P: 見通しを持ちたいか、柔軟さを保ちたいか</h3>
                                <p className="text-sm mb-0">
                                    判断型には予定の明確さ、知覚型には選択肢の余白が安心につながりやすいです。誘い方ひとつでも「何時集合」か「ざっくり決めよう」かで印象が変わります。
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">4. 関係が深まってから見るべきポイント</h2>
                        <ol className="space-y-4">
                            <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <span className="font-bold text-teal-700">1. 連絡頻度が合っているか</span>
                                <p className="text-sm mt-2 mb-0">
                                    好きだから毎日話したい人もいれば、安心しているからこそ少し静かでも平気な人もいます。頻度そのものより、互いの基準が共有されているかを確認してください。
                                </p>
                            </li>
                            <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <span className="font-bold text-teal-700">2. 褒め方が相手に届いているか</span>
                                <p className="text-sm mt-2 mb-0">
                                    行動を褒めた方が響く人もいれば、気持ちを見つけてもらう方がうれしい人もいます。MBTIのT/Fとラブキャラの承認欲求を見ると調整しやすくなります。
                                </p>
                            </li>
                            <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <span className="font-bold text-teal-700">3. すれ違い後の修復方法が違いすぎないか</span>
                                <p className="text-sm mt-2 mb-0">
                                    その場で話したい人、いったん距離を置きたい人、結論から共有してほしい人など差があります。ここが合わないと小さな衝突が長引きやすくなります。
                                </p>
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">5. 診断を使うときに避けたい誤用</h2>
                        <ul className="space-y-3 list-disc pl-5">
                            <li>診断結果だけで相手の人格を決めつけること</li>
                            <li>「このタイプだからこうすべき」と正解を押しつけること</li>
                            <li>本音を聞かずに、タイプ説明だけで関係を進めようとすること</li>
                            <li>相性が低そうだからと、対話の前に諦めてしまうこと</li>
                        </ul>
                        <p className="leading-relaxed mt-4 mb-0">
                            診断は便利ですが、相手本人の言葉より優先されるものではありません。あくまで<span className="font-bold text-teal-600">観察の補助線</span>として使うのが、一番うまく機能します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">まとめ: 相性は「当てる」より「育てる」もの</h2>
                        <p className="leading-relaxed mb-8">
                            MBTIとラブキャラを一緒に見ると、相手が心地よいと感じる距離感、会話のテンポ、信頼の作り方が見えやすくなります。ただし本当に関係を深めるのは、分析そのものではなく、相手に合わせて行動を少しずつ調整していく姿勢です。
                        </p>
                        <div className="text-center">
                            <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                                まずは無料で診断する
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
