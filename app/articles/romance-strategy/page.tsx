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
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> MBTIによる「心の開き方」と、ラブキャラ64による「愛の受け取り方」を掛け合わせた、ターゲット別の攻略戦略を公開。</li>
                            <li><span className="font-bold">戦略の核：</span> 相手が「ボス猫」なら追わせる、「忠犬ハチ公」なら安心させるなど、キャラクターごとの生存戦略（愛の形）に合わせたアプローチが成功の鍵。</li>
                            <li><span className="font-bold">結論：</span> 相手の特性を理解することで、的外れなアプローチを防ぎ、最短距離で深い信頼関係を築くことが可能になります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：なぜ、あなたの「良かれ」と思った行動が逆効果になるのか？</h2>
                        <p className="leading-relaxed">
                            「毎日連絡した方が喜ばれると思ったのに、引かれてしまった」「サプライズをしたのに、反応が薄かった」――。こうした恋愛のすれ違いは、相手の<span className="font-bold text-teal-600">「情報の処理方法（MBTI）」と「愛の役割（ラブキャラ）」</span>を無視した一方的なアプローチが原因です。<br /><br />
                            恋愛の攻略とは、相手をコントロールすることではありません。相手が<span className="font-bold text-teal-600">「最も心地よいと感じる愛の周波数」</span>に、あなたの行動をチューニングすることです。本記事では、当サイト独自の複合データに基づき、タイプ別の徹底攻略法を伝授します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 【ラブキャラ別】心の壁を突破する「最初のアプローチ」</h2>
                        <p className="mb-4">相手の「ラブキャラ」が分かれば、どの程度の距離感で近づくべきかが見えてきます。</p>

                        <div className="bg-purple-50 p-5 rounded-lg mb-4">
                            <h3 className="font-bold text-purple-700 mb-2">● 「ボス猫（LCRO）」「憧れの先輩（LARO）」を攻略する場合</h3>
                            <ul className="list-none space-y-1">
                                <li><span className="font-bold text-sm">特性：</span> <span className="text-sm">自分のペースを何よりも大切にし、自立した関係を好みます。</span></li>
                                <li><span className="font-bold text-sm">攻略法：</span> <span className="text-sm font-bold text-purple-600">「追いかけない」こと。</span> <span className="text-sm">相手の唯一無二の感性や能力を「一目置いている」というスタンスで伝え、適度な距離感を保ちましょう。彼らが「自分のテリトリーにいてもストレスを感じない」と思わせたら勝ちです。</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 p-5 rounded-lg">
                            <h3 className="font-bold text-yellow-700 mb-2">● 「忠犬ハチ公（FCPE）」「隠れベイビー（LCRE）」を攻略する場合</h3>
                            <ul className="list-none space-y-1">
                                <li><span className="font-bold text-sm">特性：</span> <span className="text-sm">素直で人懐っこく、あるいは内面に甘えたい欲求を秘めています。</span></li>
                                <li><span className="font-bold text-sm">攻略法：</span> <span className="text-sm font-bold text-yellow-600">「圧倒的な安心感」の提供。</span> <span className="text-sm">マメな連絡や、些細な変化に気づいて褒める行動が有効です。「自分は常にあなたの味方である」というサインを出し続けることで、彼らの心の門は開きます。</span></li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. 【MBTI別】会話を弾ませ「特別な存在」になる方法</h2>
                        <p className="mb-4">ラブキャラで距離を縮めたら、次はMBTIの指標を使って、相手の「脳」が喜ぶコミュニケーションを取りましょう。</p>

                        <div className="space-y-4">
                            <div className="border border-teal-100 rounded-lg p-4">
                                <h3 className="font-bold text-teal-600">S（感覚型）へのアプローチ</h3>
                                <p className="text-sm mt-1">「最近どう？」という抽象的な質問は避け、「昨日言ってたあの件、どうなった？」といった具体的・現実的な話題を振ると、相手は「自分の話をしっかり覚えてくれている」と信頼を寄せます。</p>
                            </div>
                            <div className="border border-teal-100 rounded-lg p-4">
                                <h3 className="font-bold text-teal-600">N（直感型）へのアプローチ</h3>
                                <p className="text-sm mt-1">「もし明日世界が終わるとしたら？」といった、正解のない抽象的な議論や、未来の夢の話を共有しましょう。あなたの「知的な面白さ」に、相手は強く惹かれます。</p>
                            </div>
                            <div className="border border-teal-100 rounded-lg p-4">
                                <h3 className="font-bold text-teal-600">T（思考型）へのアプローチ</h3>
                                <p className="text-sm mt-1">悩みを相談する際は、感情的に共感を求めるよりも、「客観的なアドバイスを求める」形を取ると、相手は自分の存在意義を感じ、心を開きやすくなります。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. 【究極の戦略】「最後の恋人（FAPE）」の包容力を再現する</h2>
                        <p className="mb-4">攻略の最終段階は、相手にとって「替えのきかない唯一の理解者」になることです。当サイトで最も徳が高いとされる<span className="font-bold">「最後の恋人（FAPE）」</span>の振る舞いには、全タイプに共通する攻略のヒントが隠されています。</p>

                        <div className="bg-pink-50 border-2 border-pink-100 p-6 rounded-xl text-center">
                            <p className="font-bold text-pink-700 text-lg mb-2">「相手の弱点を、最大の魅力として肯定する」</p>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p>「主役体質（LCPO）」の寂しがり屋な一面。</p>
                                <p>「ツンデレヤンキー（LCPE）」の不器用な優しさ。</p>
                                <p>「デビル天使（FAPO）」の予想外な自由さ。</p>
                            </div>
                        </div>
                        <p className="mt-4">これらを否定せず、「そういうところがあるから、あなたは素敵なんだね」と言語化して伝えられる存在になったとき、相手はあなたに「沼る（深く依存・信頼する）」ことになります。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">おわりに：診断は「攻略本」ではなく「地図」である</h2>
                        <p className="mb-4">MBTI×ラブキャラ診断で得られる情報は、相手を攻略するための「地図」です。地図があれば、暗闇を闇雲に進む必要はありません。<br /><br />
                            しかし、最後に一歩を踏み出すのはあなた自身の勇気と、相手を思う誠実さです。診断結果を武器に、ぜひ自信を持って、あなただけの素敵な関係を築き上げてください。</p>

                        <p className="font-bold text-center mt-6 mb-2">「あの人の攻略ルートを、もっと詳しく知りたい」</p>
                        <div className="text-center">
                            <p className="mb-4 text-sm text-gray-500">そう思ったら、まずは二人で診断を受けてみることから始めてみませんか？</p>
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
