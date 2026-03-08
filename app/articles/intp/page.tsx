import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Info, Lightbulb, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'INTP（論理学者）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'INTPの恋愛傾向を、距離感、知的な相性、本音が見えにくい理由、長く付き合うコツまで整理します。',
    alternates: {
        canonical: '/articles/intp',
    },
};

export default function INTPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-32 flex items-center justify-center">
                    <Lightbulb className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        INTP（論理学者）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-purple-600 mt-3 font-medium">静かに考える時間が長い人が、恋愛で求めている自由と理解</span>
                    </h1>

                    <div className="prose prose-purple max-w-none text-gray-700">
                        <section className="bg-purple-50 p-6 rounded-2xl border border-purple-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-purple-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-purple-700">
                                <li>INTPは、感情より先に仕組みや理由を考えやすく、気持ちを言葉にするまで時間がかかるタイプです。</li>
                                <li>恋愛では、知的な刺激、無理のない距離感、ひとりで考える時間の確保を大切にしやすくなります。</li>
                                <li>冷たく見えても、興味を持った相手には長く観察し、独自の形で関心を示していることがあります。</li>
                                <li>感情を強くぶつけられるより、落ち着いて整理して話せる関係の方が信頼につながりやすいです。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-purple-500 pl-4 mb-6">1. INTPの基本性格: まず考え、納得してから動く</h2>
                            <p className="mb-6 leading-relaxed">
                                INTPは、物事をすぐに結論づけるより、構造や理由を探りながら理解したいタイプです。会話でも人間関係でも、「なぜそうなるのか」が見えてくると安心しやすく、表面的なノリだけでは深く入りにくい傾向があります。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                また、自分の頭の中で考える時間がとても重要です。そのため、反応が遅い、突然ひとりになりたがる、会話の途中で別の思考に飛ぶといった場面もありますが、これは無関心というより処理のしかたの違いであることが少なくありません。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">INTPが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>言葉数が少ないときでも、相手に興味がないとは限らない</li>
                                    <li>感情表現が控えめでも、頭の中ではかなり考えている</li>
                                    <li>自由を求めるが、信頼した相手との関係を軽く見ているわけではない</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-purple-500 pl-4 mb-6">2. INTPが恋愛で重視しやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                INTPは、恋愛でも自分の思考や生活リズムを大きく壊さずにいられる関係を好みます。常に濃い連絡を取り合うことより、必要なときにちゃんと話せること、面白い視点を共有できること、無理に演じなくていいことが重要になりやすいです。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-purple-100 rounded-xl p-4">
                                    <h3 className="font-bold text-purple-700 mb-2">知的な会話</h3>
                                    <p className="text-sm mb-0">単なる世間話より、考え方や発想を交換できる相手に惹かれやすいです。</p>
                                </div>
                                <div className="border border-purple-100 rounded-xl p-4">
                                    <h3 className="font-bold text-purple-700 mb-2">自律した距離感</h3>
                                    <p className="text-sm mb-0">四六時中つながるより、互いの時間を持ちながら関係を続けられる方が合いやすいです。</p>
                                </div>
                                <div className="border border-purple-100 rounded-xl p-4">
                                    <h3 className="font-bold text-purple-700 mb-2">整理できる対話</h3>
                                    <p className="text-sm mb-0">感情があっても、論点が見える会話だと安心して向き合いやすくなります。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                INTPが本気になりやすいのは、変に合わせさせようとせず、その人らしい考え方やペースを尊重してくれる相手です。「理解しようとしてくれる人」だと感じると、少しずつ深い部分まで見せやすくなります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-purple-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-purple-700 mb-2">返事が遅く、温度差に見える</h3>
                                    <p className="text-sm mb-0">
                                        INTPは考えてから返したいタイプなので、感情が高まっている場面ほど反応が遅くなりやすいです。相手からは「冷たい」「向き合ってくれない」と受け取られやすくなります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-purple-700 mb-2">感情だけのやり取りでフリーズする</h3>
                                    <p className="text-sm mb-0">
                                        強い口調や察してほしい圧が続くと、どう対応すればいいか分からず閉じやすくなります。逃げているというより、処理が追いついていない状態に近いです。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-purple-700 mb-2">自由時間を拒絶と誤解される</h3>
                                    <p className="text-sm mb-0">
                                        ひとりの時間は、気持ちが離れたサインではなく、頭を整えるための必要時間であることが多いです。そこが噛み合わないと、相互不信になりやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-purple-500 pl-4 mb-6">4. ラブキャラ診断で見るINTP</h2>
                            <p className="mb-6 leading-relaxed">
                                INTPは、当サイトのラブキャラでは「恋愛マジシャン（FCRO）」や「謎の生命体（FARO）」として説明しやすい場面があります。前者は気づかれにくい器用さ、後者は独自の世界観と距離感の強さを表すイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                                    <h3 className="text-lg font-bold text-purple-800 mb-2">恋愛マジシャン（FCRO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        普段は静かでも、相手のツボや必要な配慮を意外とよく見ていて、さりげなく喜ばせる器用さが出るパターンです。分かりやすくはないものの、観察の深さが愛情として表れます。
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="text-lg font-bold text-blue-800 mb-2">謎の生命体（FARO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        自分の世界に集中しているときのINTPを説明しやすいイメージです。近づきにくく見えても、無理に崩そうとせず尊重してくれる相手には少しずつ心を開きやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-purple-500 pl-4 mb-6">5. INTPと長く付き合うためのコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-purple-700">1. 反応の速さだけで気持ちを判断しない</span>
                                    <p className="text-sm mt-2 mb-0">考える時間が必要なタイプだと分かっているだけで、無用な不安を減らしやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-purple-700">2. 結論だけでなく、理由も共有する</span>
                                    <p className="text-sm mt-2 mb-0">「なぜそう感じたか」が見えると、INTPは向き合いやすくなり、納得感を持って動けます。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-purple-700">3. 自由時間を前提に関係を設計する</span>
                                    <p className="text-sm mt-2 mb-0">べったりより、適度な距離感がある方が、かえって長期では安定しやすいことがあります。</p>
                                </li>
                            </ol>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-10">
                                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    INTPに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-blue-900 list-disc list-inside mb-0">
                                    <li>即レスや頻繁な連絡を愛情の証明として強く求めること</li>
                                    <li>感情の察し合いだけで結論を出そうとすること</li>
                                    <li>ひとり時間や没頭時間を軽く扱うこと</li>
                                    <li>「普通はこうでしょ」で思考を閉じること</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-purple-600 to-blue-600 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">考えすぎる恋のクセを整理する</h2>
                            <p className="mb-8 font-medium">
                                INTPらしい距離感や、<br />
                                本音が見えにくい理由を診断で確かめられます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-purple-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
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
