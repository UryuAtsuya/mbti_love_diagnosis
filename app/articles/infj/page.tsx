import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Info, Sparkles } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';

export const metadata: Metadata = {
    title: 'INFJ（提唱者）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'INFJの恋愛傾向を、距離感、安心ポイント、すれ違いやすい場面、ラブキャラの見方まで含めて整理します。',
    alternates: {
        canonical: '/articles/infj',
    },
};

export default function INFJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="INFJ（提唱者）の性格・恋愛傾向を解説 | AI Love Matcher"
                description="INFJの恋愛傾向を、距離感、安心ポイント、すれ違いやすい場面、ラブキャラの見方まで含めて整理します。"
                slug="infj"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-32 flex items-center justify-center">
                    <BookOpen className="text-white w-12 h-12" />
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
                        INFJ（提唱者）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-teal-600 mt-3 font-medium">静かに深く相手を見つめる人が、恋愛で大切にしていること</span>
                    </h1>

                    <div className="prose prose-teal max-w-none text-gray-700">
                        <section className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-teal-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-teal-700">
                                <li>INFJは、表面的な楽しさよりも、気持ちや価値観が通い合う感覚を重視しやすいタイプです。</li>
                                <li>誰にでもやさしく見えても、本当に心を開く相手はかなり慎重に選ぶ傾向があります。</li>
                                <li>恋愛では「誠実さ」「言葉の一貫性」「安心して本音を出せる空気」が特に重要です。</li>
                                <li>疲れているときほど一人で抱え込みやすいので、静かな配慮がある関係だと安定しやすくなります。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">1. INFJの基本性格: やさしさと観察力が同時に強い</h2>
                            <p className="mb-6 leading-relaxed">
                                INFJは、相手の表情や空気の変化を敏感に受け取りやすく、場に必要な配慮を自然に考えることが多いタイプです。そのため「話しやすい」「落ち着く」と思われやすい一方で、本人の内側ではかなり多くの情報を処理しています。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                また、ただ人に合わせているだけではなく、自分なりの理想や基準を強く持っているのもINFJらしさです。穏やかに見えても、「ここは譲れない」と感じる線がはっきりしており、その線を越えられると急に距離を取ることがあります。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">INFJが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>やさしいから何でも受け止められるように見えるが、実際はかなり消耗しやすい</li>
                                    <li>話を聞くのが上手でも、自分の本音は簡単には見せない</li>
                                    <li>急に静かになったときは、怒っているというより整理中のことが多い</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">2. 恋愛で大切にしやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                INFJは、恋愛をその場の勢いだけで進めるよりも、「この人とはどんな関係を築けそうか」を静かに見ています。会話が続くかどうかだけでなく、価値観のズレが大きすぎないか、安心して弱さを出せる相手かどうかを確認しながら距離を縮める傾向があります。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-teal-100 rounded-xl p-4">
                                    <h3 className="font-bold text-teal-700 mb-2">深い会話</h3>
                                    <p className="text-sm mb-0">雑談が苦手というより、意味のある会話に安心しやすいタイプです。</p>
                                </div>
                                <div className="border border-teal-100 rounded-xl p-4">
                                    <h3 className="font-bold text-teal-700 mb-2">言葉の一貫性</h3>
                                    <p className="text-sm mb-0">その場しのぎの甘い言葉より、行動と合っている言葉を信頼します。</p>
                                </div>
                                <div className="border border-teal-100 rounded-xl p-4">
                                    <h3 className="font-bold text-teal-700 mb-2">心理的安全性</h3>
                                    <p className="text-sm mb-0">評価や否定を恐れずに話せる相手だと、関係が深まりやすくなります。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                INFJが本気になりやすいのは、派手に盛り上げてくれる人よりも、気持ちを丁寧に扱ってくれる人です。「ちゃんと分かろうとしてくれている」と感じると、少しずつ自分の内側を見せてくれるようになります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">気を遣いすぎて本音が遅れる</h3>
                                    <p className="text-sm mb-0">
                                        その場を壊したくない気持ちが強く、違和感を抱えてもすぐには言わないことがあります。表面上は穏やかでも、限界を超えると突然距離を取る形で表れやすいです。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">言葉より空気を読みすぎる</h3>
                                    <p className="text-sm mb-0">
                                        相手の表情や温度感から意味を読み取りすぎて、不安が大きくなることがあります。相手が説明不足なタイプだと、誤解が膨らみやすくなります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">回復に一人時間が必要</h3>
                                    <p className="text-sm mb-0">
                                        感情が動いたあと、すぐその場で結論を出すのが苦手なことがあります。話し合いを避けているのではなく、整理の時間が必要なケースも少なくありません。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">4. ラブキャラ診断で見るINFJ</h2>
                            <p className="mb-6 leading-relaxed">
                                当サイトのラブキャラでは、INFJは「憧れの先輩（LARO）」や「カリスマバランサー（LARE）」の要素で説明しやすい場面があります。どちらも、<span className="font-bold text-teal-600">相手を落ち着かせる力と、自分の内側を簡単には見せない慎重さ</span>を持つ点が共通しています。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="text-lg font-bold text-blue-800 mb-2">憧れの先輩（LARO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        物腰がやわらかくても、自分の世界観や判断軸をしっかり持っているため、周囲から「落ち着いていて頼れる人」と見られやすいです。近づきやすさと近づきにくさが同居しているのが特徴です。
                                    </p>
                                </div>
                                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                    <h3 className="text-lg font-bold text-emerald-800 mb-2">カリスマバランサー（LARE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        相手の状態を読みながら空気を整えるのが得意で、感情的な場面でも比較的落ち着いて対応しやすいタイプです。ただし、その分だけ自分の疲れに気づきにくい面もあります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">5. INFJと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-teal-700">1. 急がず、言葉と行動を揃える</span>
                                    <p className="text-sm mt-2 mb-0">早く仲良くなることより、安心して信頼できる人だと伝わることの方が重要です。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-teal-700">2. 気持ちを雑に処理しない</span>
                                    <p className="text-sm mt-2 mb-0">「考えすぎ」「気にしすぎ」で片づけると、理解されない感覚が強まります。まず受け止める姿勢が効きます。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-teal-700">3. 一人時間を拒絶と受け取らない</span>
                                    <p className="text-sm mt-2 mb-0">静かな時間は、関係を終わらせたいサインではなく、整え直すための時間であることも多いです。</p>
                                </li>
                            </ol>

                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-10">
                                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    INFJに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-amber-900 list-disc list-inside mb-0">
                                    <li>本音を試すような駆け引き</li>
                                    <li>説明なしに感情だけをぶつけること</li>
                                    <li>準備なく大勢の場へ引っ張ること</li>
                                    <li>繊細さを弱さとして軽く扱うこと</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">6. よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">Q. INFJは恋愛に消極的なタイプですか？</h3>
                                    <p className="text-sm mb-0">消極的に見えることはありますが、関心がないわけではありません。相手の内面をじっくり見てから距離を縮める傾向があるため、慎重に映りやすいだけです。信頼できると感じた相手には、深い愛情を向けることが多いです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">Q. INFJと相性が良いのはどのタイプですか？</h3>
                                    <p className="text-sm mb-0">一般的にはENFPやENTPなど、INFJの内面に興味を持って踏み込んでくれるタイプと相性が良いとされます。ただし、実際の相性はMBTIだけでは測りきれません。Love Characterで恋愛スタイルも含めて確認すると、より立体的に理解しやすくなります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">Q. INFJが突然距離を置くのはなぜですか？</h3>
                                    <p className="text-sm mb-0">いわゆる「ドアスラム」と呼ばれる現象で、長期間我慢を重ねた結果、限界に達して急に離れるケースがあります。本人にとっても急な決断ではなく、内側ではずっと葛藤していたことが多いです。日頃から安心して本音を出せる空気があると予防しやすくなります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-teal-700 mb-2">Q. INFJに愛情を伝えるにはどうすればいいですか？</h3>
                                    <p className="text-sm mb-0">派手なサプライズより、日常のなかで気持ちを丁寧に言葉にする方が届きやすい傾向があります。「あなたの話をちゃんと聞きたい」「無理しなくていいよ」といった、安心感を与える言葉が信頼につながりやすいです。</p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-teal-500 to-emerald-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">自分の安心ポイントを知る</h2>
                            <p className="mb-8 font-medium">
                                INFJらしい恋愛の傾向を、<br />
                                MBTIとラブタイプの組み合わせで整理できます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-teal-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
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
