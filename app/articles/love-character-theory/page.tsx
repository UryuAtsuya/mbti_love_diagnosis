import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Heart, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';

export const metadata: Metadata = {
    title: 'ラブキャラ64診断とは? MBTIと合わせて読むための理論ガイド | AI Love Matcher',
    description: 'ラブキャラ64を、MBTIとどう違うのか、何を見るための整理軸なのかという観点でわかりやすく解説します。',
    alternates: {
        canonical: '/articles/love-character-theory',
    },
};

export default function LoveCharacterGuide() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="ラブキャラ64診断とは? MBTIと合わせて読むための理論ガイド | AI Love Matcher"
                description="ラブキャラ64を、MBTIとどう違うのか、何を見るための整理軸なのかという観点でわかりやすく解説します。"
                slug="love-character-theory"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-32 flex items-center justify-center">
                    <ShieldCheck className="text-white w-12 h-12" />
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
                        【理論編】ラブキャラ64診断とは? MBTIと合わせて読むためのガイド
                        <span className="block text-xl sm:text-2xl text-indigo-600 mt-3 font-medium">〜恋愛でズレやすい場面を整理するための、当サイト独自の読み方〜</span>
                    </h1>

                    <div className="prose prose-indigo max-w-none text-gray-700">
                        <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                この記事で分かること
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-sm text-indigo-700">
                                <li>ラブキャラ64が、MBTIと何を分担して見ているのか。</li>
                                <li>恋愛でよく起こる「安心のズレ」「距離感のズレ」を、どう整理するか。</li>
                                <li>診断結果を読むときに、どこを信じてどこを保留にするべきか。</li>
                            </ul>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-600 pl-4 mb-6">1. なぜMBTIだけでは恋愛を説明しきれないのか</h2>
                        <p className="mb-6 leading-relaxed">
                            MBTIは、ものごとの捉え方や会話のテンポを考えるうえで便利です。一方で恋愛では、<span className="font-bold">誰にどう近づくか、どんな接し方で安心するか、気まずくなったときにどう回復するか</span>が大きく影響します。
                        </p>
                        <p className="mb-6 leading-relaxed">
                            例えば、同じENFPでも、盛り上がりを重視してテンポよく距離を縮めたい人もいれば、自由を大事にして急接近を避けたい人もいます。こうした違いを読みやすくするために、当サイトではラブキャラ64を<span className="font-bold text-indigo-600">恋愛時の反応パターンを整理する独自フレーム</span>として使っています。
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-600 pl-4 mb-6">2. ラブキャラ64が見ようとしている4つの観点</h2>
                        <p className="mb-6 leading-relaxed">
                            ラブキャラ64は、恋愛における行動の違いを一つの正解に押し込めるためのものではありません。実際には、次の4つの観点をざっくり見直すための整理軸として使うと分かりやすくなります。
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-indigo-600 mb-2 flex items-center">
                                    <Zap className="w-4 h-4 mr-2" />
                                    1. 関係を前に進める力
                                </h3>
                                <p className="text-sm mb-0">
                                    自分からリードしやすいか、相手に合わせながら空気を整えるか。誘い方、決め方、頼もしさの見せ方に出やすい観点です。
                                </p>
                            </div>
                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-purple-600 mb-2 flex items-center">
                                    <Heart className="w-4 h-4 mr-2" />
                                    2. 愛情の向き方
                                </h3>
                                <p className="text-sm mb-0">
                                    相手を支える方が自然なのか、自分の魅力を見つけてほしいのか。褒め言葉の刺さり方や、甘え方の違いに表れます。
                                </p>
                            </div>
                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-indigo-600 mb-2">3. 安心と刺激のバランス</h3>
                                <p className="text-sm mb-0">
                                    いつもの安定に安心するか、変化や新鮮さがないと気持ちが停滞しやすいか。デートの組み方や関係の温度感に関係します。
                                </p>
                            </div>
                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-purple-600 mb-2">4. 感情の見せ方</h3>
                                <p className="text-sm mb-0">
                                    本音を外に出しやすいか、内側で整理してから見せたいか。誤解やすれ違いの多くは、この差から生まれます。
                                </p>
                            </div>
                        </div>

                        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-10">
                            <p className="text-sm leading-relaxed mb-0">
                                ここで大事なのは、ラブキャラ64が<span className="font-bold">公式の心理尺度そのものではない</span>という点です。当サイトでは、恋愛の場面で起きやすい反応を読みやすくするための独自の整理軸として使っています。
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-600 pl-4 mb-6">3. 代表的なラブキャラの見方</h2>
                        <div className="space-y-4 mb-10">
                            <div className="bg-white border border-gray-100 rounded-2xl p-5">
                                <h3 className="font-bold text-indigo-700 mb-2">ボス猫（LCRO）</h3>
                                <p className="text-sm mb-0">
                                    自分のペースを守りつつ、必要な場面では主導権を握りやすいタイプ。近づくときは、詰めるよりも尊重が先に必要です。
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-2xl p-5">
                                <h3 className="font-bold text-indigo-700 mb-2">忠犬ハチ公（FCPE）</h3>
                                <p className="text-sm mb-0">
                                    誠実さや継続性に価値を置きやすいタイプ。小さな積み重ねで信頼を育てる関係が向いています。
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-2xl p-5">
                                <h3 className="font-bold text-indigo-700 mb-2">謎の生命体（FARO）</h3>
                                <p className="text-sm mb-0">
                                    いったん周囲に馴染んで見えても、内側には独自の世界観が強くあります。分かったつもりで踏み込みすぎると急に距離ができます。
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-2xl p-5">
                                <h3 className="font-bold text-indigo-700 mb-2">最後の恋人（FAPE）</h3>
                                <p className="text-sm mb-0">
                                    受容や優しさを強く持ちやすいタイプ。相手を支えられる一方で、我慢が溜まりやすい点もセットで見ておく必要があります。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-600 pl-4 mb-6">4. なぜMBTIと掛け合わせて読むのか</h2>
                        <p className="mb-6 leading-relaxed">
                            MBTIが「どんな言葉で理解しやすいか」を示すなら、ラブキャラは「どんな接し方で安心しやすいか」を補います。同じラブキャラでも、MBTIが違えば会話の入り口や伝え方は変わりますし、同じMBTIでもラブキャラが違えば心地よい距離感は変わります。
                        </p>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
                            <p className="text-sm leading-relaxed mb-0">
                                例として、同じINFPでも「最後の恋人（FAPE）」なら受容や寄り添いが強く出やすく、「謎の生命体（FARO）」ならひとりの世界を守りたい感覚が前に出やすくなります。タイプ名が同じでも、恋愛での見え方はかなり変わります。
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-600 pl-4 mb-6">5. 診断結果はどう読めばいいか</h2>
                        <ol className="space-y-3 mb-10">
                            <li>まずは「自分が安心する条件」を探す</li>
                            <li>次に「相手に求めすぎていた部分」がないかを見る</li>
                            <li>最後に、連絡頻度や会話のテンポなど行動に落とせる点だけを調整する</li>
                        </ol>
                        <p className="mb-6 leading-relaxed">
                            診断の一番良い使い方は、自分や相手を決めつけることではなく、<span className="font-bold text-indigo-600">話し合う材料を増やすこと</span>です。読んで終わりにせず、行動に1つだけ落とし込むと実感しやすくなります。
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-600 pl-4 mb-6">よくある質問</h2>
                        <div className="space-y-4 mb-10">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-indigo-700 mb-2">Q. ラブキャラとMBTIの違いは何ですか？</h3>
                                <p className="text-sm mb-0">MBTIは思考・行動パターンの全般的な傾向を見る指標であるのに対し、ラブキャラは恋愛における距離感・安心の求め方・愛情表現の出し方に特化した整理軸です。同じMBTIタイプでもラブキャラが異なれば、恋愛の振る舞いは大きく変わります。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-indigo-700 mb-2">Q. ラブキャラの結果が自分のイメージと違います</h3>
                                <p className="text-sm mb-0">ラブキャラは「自覚している自分」ではなく「恋愛で無意識に出やすい傾向」を拾う設計です。普段の自分と違って見える場合は、過去の恋愛を振り返ってみると腑に落ちることが多いです。しっくり来ない部分は保留にして構いません。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-indigo-700 mb-2">Q. ラブキャラは変わることがありますか？</h3>
                                <p className="text-sm mb-0">はい、恋愛経験や環境の変化によってラブキャラは変わることがあります。特に大きな恋愛を経験した後や、生活環境が大きく変わった時期には結果が変動しやすいです。半年～1年ごとに再診断してみると、自分の変化を確認できます。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-indigo-700 mb-2">Q. ラブキャラ診断はどんな場面で活用できますか？</h3>
                                <p className="text-sm mb-0">パートナーとのすれ違いの原因を探るとき、自分の恋愛パターンを整理したいとき、新しい関係で気をつけるべきポイントを知りたいときに効果的です。話し合いのきっかけや、自己理解を深めるツールとして使うのがおすすめです。</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-600 pl-4 mb-6">6. 断定しすぎないための注意点</h2>
                        <p className="mb-6 leading-relaxed">
                            恋愛は、性格だけでなく年齢、経験、生活環境、その時期の心の余裕にも大きく左右されます。ラブキャラ64もMBTIも便利ですが、それだけで未来が決まるわけではありません。診断結果がしっくり来ない部分は、いまの自分や相手に照らして保留にして大丈夫です。
                        </p>

                        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">理論を、日常の会話に落とし込む</h2>
                            <p className="mb-8 font-medium">
                                自分のMBTIとラブキャラを並べてみると、<br />
                                恋愛で繰り返しやすい癖が見えやすくなります。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                無料診断をスタート
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-500 text-center">
                    Edit by AI Love Matcher Editorial Team
                </div>
            </div>
        </main>
    );
}
