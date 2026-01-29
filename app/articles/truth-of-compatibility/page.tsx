import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
                    MBTI×ラブキャラ診断で解き明かす「運命の相性」の真実
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～なぜ性格診断だけでは恋愛がうまくいかないのか？～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">結論：</span> 恋愛の相性は「情報の処理の癖（MBTI）」と「恋愛の振る舞い（ラブキャラ）」の2軸で決まります。</li>
                            <li><span className="font-bold">背景：</span> 性格が似ていても、「ボス猫」や「忠犬ハチ公」といった愛の出力キャラクターが異なると、期待値のズレから摩擦が生じます。</li>
                            <li><span className="font-bold">解決策：</span> 16タイプのMBTIに、64通りの「ラブキャラ」を掛け合わせた当サイト独自の複合診断により、表面的な性格解説を超えた持続可能な関係構築が可能になります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. MBTIが教えてくれる「コミュニケーションの周波数」</h2>
                        <p className="leading-relaxed mb-4">
                            MBTIは、以下の4つの指標から性格を分類し、人間関係の「噛み合いやすさ」を可視化します。
                        </p>
                        <ul className="grid gap-3 bg-gray-50 p-6 rounded-lg mb-4">
                            <li className="flex items-start"><span className="font-bold text-teal-600 mr-2">内向型(I) / 外向型(E)</span></li>
                            <li className="flex items-start"><span className="font-bold text-teal-600 mr-2">感覚型(S) / 直感型(N)</span></li>
                            <li className="flex items-start"><span className="font-bold text-teal-600 mr-2">思考型(T) / 感情型(F)</span></li>
                            <li className="flex items-start"><span className="font-bold text-teal-600 mr-2">判断型(J) / 知覚型(P)</span></li>
                        </ul>
                        <p>これらは「会話のテンポ」や「生活リズム」の相性には直結しますが、「相手をどう愛し、どう愛されたいか」という、より情緒的で複雑な役割までは定義しきれません。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラが補完する「恋愛におけるアイデンティティ」</h2>
                        <p className="mb-4 leading-relaxed">
                            MBTIが「思考のエンジン」なら、ラブキャラは「恋愛での振る舞い」を決めるOSです。当サイトの診断では、独自の指標に基づき、あなたを以下のような具体的なキャラクターとして定義します。
                        </p>
                        <ul className="space-y-4 mb-6">
                            <li className="bg-pink-50 p-4 rounded-lg">
                                <span className="font-bold text-pink-700">● ボス猫（LCRO）：</span>
                                <span className="text-sm ml-2">我が道をゆくエネルギーに溢れたタイプ。</span>
                            </li>
                            <li className="bg-yellow-50 p-4 rounded-lg">
                                <span className="font-bold text-yellow-700">● 忠犬ハチ公（FCPE）：</span>
                                <span className="text-sm ml-2">素直で人懐っこく、純粋な愛を注ぐタイプ。</span>
                            </li>
                            <li className="bg-blue-50 p-4 rounded-lg">
                                <span className="font-bold text-blue-700">● 最後の恋人（FAPE）：</span>
                                <span className="text-sm ml-2">優しくて包容力があり、令和のマザーテレサとも呼ばれるタイプ。</span>
                            </li>
                            <li className="bg-purple-50 p-4 rounded-lg">
                                <span className="font-bold text-purple-700">● ツンデレヤンキー（LCPE）：</span>
                                <span className="text-sm ml-2">情に厚いが、素直になれない不器用さを持つタイプ。</span>
                            </li>
                        </ul>
                        <p>例えば、同じ「INFP（仲介者）」であっても、<span className="font-bold text-teal-600">「不思議生命体（FARO）」</span>としてのINFPと、<span className="font-bold text-teal-600">「ちゃっかりうさぎ（FCRE）」</span>としてのINFPでは、恋人との距離感や問題への対処法は全く異なります。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. 【独自考察】MBTI×ラブキャラの相性マトリクス（実例）</h2>
                        <div className="bg-gray-800 text-white p-6 rounded-lg my-6 shadow-inner">
                            <h4 className="font-bold mb-3 flex items-center">
                                <span className="text-2xl mr-2">💡</span> プロの視点
                            </h4>
                            <p className="leading-relaxed">
                                性格（MBTI）は「隣を歩く時の歩幅」を決め、ラブキャラは「手を繋ぎたいか、少し離れて歩きたいか」という心の距離を決めます。歩幅が合っていても、求める距離感が違えば、二人はいつか歩き疲れてしまうのです。
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">まとめ：自分を深く知ることが、最高のパートナーへの近道</h2>
                        <p className="mb-6 leading-relaxed">
                            自分自身のMBTIとラブキャラを正しく認識することは、単なるエンターテインメントではありません。自分がなぜ過去の恋愛で同じ失敗を繰り返したのか？を言語化し客観視することで、不必要な摩擦を減らし、より深い信頼関係を築くことができるようになります。
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
