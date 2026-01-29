import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
                    【実戦編】MBTI×ラブキャラで落とす！意中の相手を「沼らせる」最強の恋愛攻略マトリクス
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> MBTIによる「心の開き方」と、ラブキャラ64による「愛の受け取り方」を掛け合わせた、ターゲット別の攻略戦略を公開。</li>
                            <li><span className="font-bold">戦略の核：</span> 相手が「ボス猫」なら追わせる、「忠犬ハチ公」なら安心させるなど、キャラクターごとの生存戦略（愛の形）に合わせたアプローチが成功の鍵。</li>
                            <li><span className="font-bold">結論：</span> 相手の特性を理解することで、的外れなアプローチを防ぎ、最短距離で深い信頼関係を築くことが可能になります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 【ラブキャラ別】心の壁を突破する「最初のアプローチ」</h2>
                        <div className="space-y-4">
                            <div className="bg-purple-50 p-5 rounded-lg">
                                <h3 className="font-bold text-purple-700 mb-2">● 「ボス猫（LCRO）」「憧れの先輩（LARO）」を攻略する場合</h3>
                                <p className="text-sm leading-relaxed">
                                    <span className="font-bold text-purple-600">攻略法：「追いかけない」こと。</span><br />
                                    相手の唯一無二の感性や能力を「一目置いている」というスタンスで伝え、適度な距離感を保ちましょう。彼らが「自分のテリトリーにいてもストレスを感じない」と思わせたら勝ちです。
                                </p>
                            </div>
                            <div className="bg-yellow-50 p-5 rounded-lg">
                                <h3 className="font-bold text-yellow-700 mb-2">● 「忠犬ハチ公（FCPE）」「隠れベイビー（LCRE）」を攻略する場合</h3>
                                <p className="text-sm leading-relaxed">
                                    <span className="font-bold text-yellow-600">攻略法：「圧倒的な安心感」の提供。</span><br />
                                    マメな連絡や、些細な変化に気づいて褒める行動が有効です。「自分は常にあなたの味方である」というサインを出し続けることで、彼らの心の門は開きます。
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. 【MBTI別】会話を弾ませ「特別な存在」になる方法</h2>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="border border-teal-100 rounded-lg p-4">
                                <span className="font-bold text-teal-600">S（感覚型）へのアプローチ：</span>
                                <p className="text-sm mt-1">具体的・現実的な話題を振り、「自分の話をしっかり覚えてくれている」という信頼を勝ち取る。</p>
                            </li>
                            <li className="border border-teal-100 rounded-lg p-4">
                                <span className="font-bold text-teal-600">N（直感型）へのアプローチ：</span>
                                <p className="text-sm mt-1">正解のない抽象的な議論や未来の夢の話を共有し、「知的な面白さ」で惹きつける。</p>
                            </li>
                            <li className="border border-teal-100 rounded-lg p-4">
                                <span className="font-bold text-teal-600">T（思考型）へのアプローチ：</span>
                                <p className="text-sm mt-1">感情的な共感よりも「客観的なアドバイスを求める」形で、相手の存在意義を刺激する。</p>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">まとめ：診断は「攻略本」ではなく「地図」である</h2>
                        <p className="leading-relaxed mb-8">
                            MBTI×ラブキャラ診断で得られる情報は、相手を攻略するための「地図」です。しかし、最後に一歩を踏み出すのはあなた自身の勇気と誠実さです。診断結果を武器に、あなただけの素敵な関係を築き上げてください。
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
