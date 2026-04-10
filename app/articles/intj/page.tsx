import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Brain, Lock, ShieldCheck, Sparkles } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';

export const metadata: Metadata = {
    title: 'INTJ（建築家）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'INTJの恋愛傾向を、知的な相性、自立の感覚、すれ違いやすい点、ラブキャラの見方まで含めて整理します。',
    alternates: {
        canonical: '/articles/intj',
    },
};

export default function INTJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="INTJ（建築家）の性格・恋愛傾向を解説 | AI Love Matcher"
                description="INTJの恋愛傾向を、知的な相性、自立の感覚、すれ違いやすい点、ラブキャラの見方まで含めて整理します。"
                slug="intj"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-500 h-32 flex items-center justify-center">
                    <Brain className="text-white w-12 h-12" />
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
                        INTJ（建築家）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-indigo-600 mt-3 font-medium">知性と自立を大切にする人が、恋愛で信頼する相手とは</span>
                    </h1>

                    <div className="prose prose-indigo max-w-none text-gray-700">
                        <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-indigo-700">
                                <li>INTJは、感情よりもまず構造や理由を見ようとしやすいタイプです。</li>
                                <li>恋愛では、盛り上がりよりも信頼性、自立性、会話の質を重視しやすくなります。</li>
                                <li>冷たく見えても、関係を軽く扱っているわけではなく、慎重だからこそ簡単に踏み込まないことが多いです。</li>
                                <li>言葉の誠実さ、時間感覚、考える余白を尊重されると関係が安定しやすくなります。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">1. INTJの基本性格: 感情より先に構造を見る</h2>
                            <p className="mb-6 leading-relaxed">
                                INTJは、起きていることを感覚的に受け止めるより、まず「なぜそうなるのか」「この先どうつながるのか」を考えやすいタイプです。そのため、物事を遠くから俯瞰しているように見えたり、反応が薄いと誤解されたりすることがあります。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                しかし実際には、関心がないから静かなのではなく、雑に反応したくないから慎重なだけということも多いです。自分なりに納得したものには深くコミットしやすく、関係に対しても軽い気持ちで踏み込むことはあまりありません。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">INTJらしさが出やすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>考える前に返事を急がされると疲れやすい</li>
                                    <li>筋の通らない説明や曖昧な約束に不信感を持ちやすい</li>
                                    <li>好きな相手にも、自分の時間と集中の余白は必要になりやすい</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">2. INTJの恋愛: 「一緒に考えられる人か」を見ている</h2>
                            <p className="mb-6 leading-relaxed">
                                INTJにとって恋愛は、その場の気分だけで進めるものではなく、長く一緒にいるときに無理が少ないかを見極める関係でもあります。会話のテンポ、生活の組み立て方、問題が起きたときの向き合い方など、かなり現実的な視点も持ち込みやすいタイプです。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-indigo-100 rounded-xl p-4">
                                    <h3 className="font-bold text-indigo-700 mb-2">知的な会話</h3>
                                    <p className="text-sm mb-0">考えを深められる相手に対して、信頼が育ちやすくなります。</p>
                                </div>
                                <div className="border border-indigo-100 rounded-xl p-4">
                                    <h3 className="font-bold text-indigo-700 mb-2">自立した距離感</h3>
                                    <p className="text-sm mb-0">常時べったりより、それぞれの集中時間を保てる関係を好みやすいです。</p>
                                </div>
                                <div className="border border-indigo-100 rounded-xl p-4">
                                    <h3 className="font-bold text-indigo-700 mb-2">予測可能性</h3>
                                    <p className="text-sm mb-0">連絡や約束の安定感があると、関係への安心が増しやすくなります。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">感情表現が少なく見える</h3>
                                    <p className="text-sm mb-0">
                                        好意があっても、分かりやすい言葉や態度にすぐは出ないことがあります。相手からすると「本気なのか分からない」と感じやすいポイントです。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">問題解決を急ぎすぎる</h3>
                                    <p className="text-sm mb-0">
                                        共感より先に整理や解決案を出すため、感情型の相手には冷たく見えることがあります。悪意ではなく、役に立ちたい気持ちが先に出ている場合も多いです。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">一人で考える時間が長い</h3>
                                    <p className="text-sm mb-0">
                                        距離を取りたいのではなく、頭の中を整理したいだけのこともあります。ここを拒絶と誤解されると、双方にストレスが残りやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">4. ラブキャラ診断で見るINTJ</h2>
                            <p className="mb-6 leading-relaxed">
                                INTJは、当サイトのラブキャラでは「隠れベイビー（LCRE）」や「完全無欠のカメレオン（LAPO）」として説明しやすい場面があります。表面は整っていても、深く信頼した相手には少し違う顔が出る点が特徴です。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                    <h3 className="text-lg font-bold text-indigo-800 mb-2 flex items-center">
                                        <Lock className="w-4 h-4 mr-2" />
                                        隠れベイビー（LCRE）として見える場面
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        外では落ち着いて見えても、信頼した相手の前では少し素直さや甘えが出やすいタイプです。見せる相手をかなり選ぶので、その変化がギャップとして感じられます。
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                                    <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center">
                                        <ShieldCheck className="w-4 h-4 mr-2" />
                                        完全無欠のカメレオン（LAPO）として見える場面
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        必要に応じて自分の役割を調整し、最適な形で関係を保とうとするタイプです。器用に見えても、内側ではかなり計算して動いていることがあります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">5. INTJと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-indigo-700">1. 曖昧な駆け引きより、誠実な説明を選ぶ</span>
                                    <p className="text-sm mt-2 mb-0">気持ちを読ませるより、理由や意図を明確にした方が信頼されやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-indigo-700">2. 集中時間を尊重する</span>
                                    <p className="text-sm mt-2 mb-0">一人で考える時間を奪わない方が、結果的に関係への負担が減りやすいです。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-indigo-700">3. 感情を言語化して頼む</span>
                                    <p className="text-sm mt-2 mb-0">「察して」より、「こう言ってもらえるとうれしい」と具体化した方が、INTJには伝わりやすくなります。</p>
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">6. よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">Q. INTJは恋愛に消極的なタイプですか？</h3>
                                    <p className="text-sm mb-0">恋愛に興味がないわけではなく、効率の悪いアプローチを避ける傾向があります。「この人なら長期的に良い関係を築けそうだ」と判断できると、自分から動くこともあります。感情より論理で関係を評価しやすい点が、消極的に見える原因になりやすいです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">Q. INTJと相性が良いのはどのタイプですか？</h3>
                                    <p className="text-sm mb-0">ENFPやENTPなど、知的な刺激を与えてくれつつ感情面を補ってくれるタイプと相性が良いとされることが多いです。ただし、MBTIだけで相性は決まりません。Love Characterで信頼の築き方や距離感の好みまで確認すると、より精度の高い判断ができます。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">Q. INTJが冷たく感じるのは愛情がないから？</h3>
                                    <p className="text-sm mb-0">INTJは愛情を言葉や態度で頻繁に表現するのが得意ではない傾向があります。しかし、問題解決や将来設計を一緒に考えてくれる行動そのものが、INTJなりの愛情表現であることが多いです。表面的な温度感だけで判断しない方が関係は安定します。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">Q. INTJに「察してほしい」は通じますか？</h3>
                                    <p className="text-sm mb-0">INTJは論理的に考える力が強い一方で、暗黙の感情的サインを読み取るのが苦手なことがあります。「こうしてくれると嬉しい」と具体的に伝えた方が、INTJにとっては行動に移しやすく、結果的に関係の満足度が上がりやすくなります。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">INTJと相性が取りやすいタイプ</h2>
                            <p className="mb-6 leading-relaxed">
                                INTJは、深い思考と独自のビジョンを持つ相手との関係で知的な刺激を得やすい傾向があります。互いの独立性を尊重しながら、対話を通じて関係が深まるタイプとの組み合わせが良いとされています。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <Link href="/articles/enfp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all">
                                    <h3 className="font-bold text-indigo-700 mb-2 group-hover:text-indigo-800">ENFP</h3>
                                    <p className="text-sm text-gray-600">INTJの戦略的な視点と、ENFPの発想の広がりが互いを刺激し合う組み合わせです。正反対に見えて、会話の中で互いの世界が広がりやすい関係です。</p>
                                    <span className="text-xs text-indigo-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/entp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all">
                                    <h3 className="font-bold text-indigo-700 mb-2 group-hover:text-indigo-800">ENTP</h3>
                                    <p className="text-sm text-gray-600">知的な議論を楽しめるENTPとINTJは、互いの思考の深さで刺激し合えます。アイデアの量と分析の鋭さを持ち寄る形になりやすいです。</p>
                                    <span className="text-xs text-indigo-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/infj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all">
                                    <h3 className="font-bold text-indigo-700 mb-2 group-hover:text-indigo-800">INFJ</h3>
                                    <p className="text-sm text-gray-600">内向的な直観を共有するINFJとは、言葉にしなくても通じ合う感覚を持ちやすい関係です。互いの独立した思考を尊重しながら深まりやすい組み合わせです。</p>
                                    <span className="text-xs text-indigo-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                相性はMBTIだけで決まるわけではありません。ラブタイプや価値観の共有度によっても大きく変わります。気になる相手がいれば、<Link href="/diagnosis" className="text-teal-600 hover:underline font-medium">相性診断</Link>で組み合わせを確認してみてください。
                            </p>
                        </section>

                        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">自分の信頼の条件を知る</h2>
                            <p className="mb-8 font-medium">
                                INTJらしい恋愛の優先順位や、<br />
                                相手とズレやすい場面を診断で整理できます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                精密相性診断を体験する
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
