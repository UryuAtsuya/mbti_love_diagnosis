import type { Metadata } from 'next';
import Link from 'next/link';
import { Info, Sparkles, Users } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'ESFJ（領事）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ESFJの恋愛傾向を、愛情表現の多さ、承認を求めやすい理由、傷つきやすい場面、長続きのコツまで整理します。',
    alternates: {
        canonical: '/articles/esfj',
    },
};

export default function ESFJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="ESFJ（領事）の性格・恋愛傾向を解説 | AI Love Matcher"
                description="ESFJの恋愛傾向を、愛情表現の多さ、承認を求めやすい理由、傷つきやすい場面、長続きのコツまで整理します。"
                slug="esfj"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-32 flex items-center justify-center">
                    <Users className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Breadcrumb items={[{ label: "記事一覧", href: "/articles" }, { label: "ESFJ（領事）の性格・恋愛傾向を解説" }]} />

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ESFJ（領事）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-orange-600 mt-3 font-medium">人に尽くしやすい人が、恋愛でちゃんと返してほしい安心感</span>
                    </h1>

                    <div className="prose prose-orange max-w-none text-gray-700">
                        <section className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-orange-700">
                                <li>ESFJは、人に喜んでもらうことや、関係の温度を保つことにエネルギーを注ぎやすいタイプです。</li>
                                <li>恋愛では、分かりやすい愛情表現、感謝、安心できるつながり、周囲との調和を重視しやすくなります。</li>
                                <li>尽くす力が強い反面、反応が薄かったり雑に扱われたりするとかなり傷つきやすい面があります。</li>
                                <li>気持ちを受け取り返してくれる相手、自分だけが与える役にならない相手だと長続きしやすいです。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">1. ESFJの基本性格: 人との温度を整える力が強い</h2>
                            <p className="mb-6 leading-relaxed">
                                ESFJは、人の気持ちや場の空気に敏感で、関係を良い状態に保とうと動きやすいタイプです。誰が困っているか、何をすれば場がうまく回るかを自然に見ていて、思いやりのある人として周囲に認識されやすいでしょう。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                一方で、相手の反応や関係の変化にもかなり敏感です。喜んでもらえたか、必要とされているかを気にしやすく、無反応や冷たい態度には想像以上に傷つくことがあります。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">ESFJが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>世話好きでも、見返りがまったくいらないわけではない</li>
                                    <li>明るく接していても、相手の反応にはかなり敏感</li>
                                    <li>社交的でも、本当に大切な相手には特別な配慮をしている</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">2. ESFJが恋愛で大切にしやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                ESFJは、恋愛でも「気持ちが通い合っているか」「ちゃんと大切にされているか」をとても重視します。相手に尽くすこと自体は得意ですが、それが一方通行にならず、関係として循環しているかどうかがかなり大事です。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-orange-100 rounded-xl p-4">
                                    <h3 className="font-bold text-orange-700 mb-2">分かりやすい愛情</h3>
                                    <p className="text-sm mb-0">好き、ありがとう、助かったなどが言葉で返ってくると安心しやすいです。</p>
                                </div>
                                <div className="border border-orange-100 rounded-xl p-4">
                                    <h3 className="font-bold text-orange-700 mb-2">関係のあたたかさ</h3>
                                    <p className="text-sm mb-0">冷たさや距離感より、つながっている実感がある方が力を発揮しやすいです。</p>
                                </div>
                                <div className="border border-orange-100 rounded-xl p-4">
                                    <h3 className="font-bold text-orange-700 mb-2">相互の気遣い</h3>
                                    <p className="text-sm mb-0">自分だけが与える側ではなく、返してもらえる感覚が重要になりやすいです。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ESFJが本気になりやすいのは、自分の愛情表現を重いと切り捨てず、受け取って返してくれる相手です。安心感のある往復があると、関係にかなり深くコミットしやすくなります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">頑張りが見えないと感じると疲れる</h3>
                                    <p className="text-sm mb-0">
                                        ESFJはかなり動けるタイプですが、それが無反応で流されると消耗しやすくなります。感謝が返らない関係は負担感が大きくなりやすいです。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">人間関係の板挟みで苦しくなりやすい</h3>
                                    <p className="text-sm mb-0">
                                        周囲との調和を気にしやすいため、恋人と家族や友人の関係が悪いとかなり疲れやすい面があります。自分だけで調整しようとして限界を迎えることもあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">冷たい距離感に弱い</h3>
                                    <p className="text-sm mb-0">
                                        連絡の薄さや反応の少なさが続くと、「嫌われたのでは」と不安になりやすいです。相手が悪気なく距離を取っていても、心の負担になりやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">4. ラブキャラ診断で見るESFJ</h2>
                            <p className="mb-6 leading-relaxed">
                                ESFJは、当サイトのラブキャラでは「憧れの先輩（LARO）」や「忠犬ハチ公（FCPE）」として説明しやすい場面があります。前者は人当たりのよさと安心感、後者は相手に尽くす一途さとして出やすいイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-800 mb-2">憧れの先輩（LARO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        人を安心させる空気や、場を整える力が出るパターンです。誰にでも感じよく接しつつ、大切な人には特に細やかな配慮が向きやすくなります。
                                    </p>
                                </div>
                                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
                                    <h3 className="text-lg font-bold text-pink-800 mb-2">忠犬ハチ公（FCPE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        好きな相手のために尽くし、期待に応えようとする献身が強く出るイメージです。分かりやすく愛情を注ぐタイプとして表れやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">5. ESFJと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-orange-700">1. 気持ちを見える形で返す</span>
                                    <p className="text-sm mt-2 mb-0">言葉でも態度でも、受け取っていることが見えるとESFJはかなり安心しやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-orange-700">2. 与える役を一方的に固定しない</span>
                                    <p className="text-sm mt-2 mb-0">頼るだけでなく、相手を労わる役にも回れると関係のバランスが取りやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-orange-700">3. 人間関係のストレスを共有する</span>
                                    <p className="text-sm mt-2 mb-0">周囲との板挟みをひとりで抱えさせないだけでも、ESFJの負担はかなり軽くなります。</p>
                                </li>
                            </ol>

                            <div className="bg-pink-50 p-6 rounded-xl border border-pink-200 mb-10">
                                <h3 className="text-lg font-bold text-pink-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    ESFJに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-pink-900 list-disc list-inside mb-0">
                                    <li>気遣いを受け取るだけで返さないこと</li>
                                    <li>連絡や反応を極端に薄くすること</li>
                                    <li>世話を焼いてくれるのを便利に利用すること</li>
                                    <li>人前で愛情表現や配慮を茶化すこと</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">6. よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">Q. ESFJは恋愛に積極的なタイプですか？</h3>
                                    <p className="text-sm mb-0">ESFJは相手を思いやる気持ちが行動に出やすいため、周囲からは積極的に見えることが多いです。ただし本人は「相手に喜んでほしい」という気持ちが先にあり、自分の気持ちを伝えることには慎重になる傾向もあります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">Q. ESFJと相性が良いのはどのタイプですか？</h3>
                                    <p className="text-sm mb-0">一般的にはISTP・ISFPなど、ESFJの世話好きな面を自然に受け取れるタイプが挙げられます。ただし、MBTIだけでなくラブキャラ（愛情表現の出し方）も見ることで、より実態に近い相性が分かります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">Q. ESFJが「重い」と言われやすいのはなぜですか？</h3>
                                    <p className="text-sm mb-0">ESFJは相手のことを考えて先回りして行動する傾向があり、相手が距離を取りたいタイプだと「干渉されている」と感じさせてしまうことがあります。好意の表し方が合わないだけで、愛情の深さ自体が問題ではないことがほとんどです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">Q. ESFJが恋愛で疲れやすいのはどんなときですか？</h3>
                                    <p className="text-sm mb-0">相手のために尽くしても感謝や反応が返ってこない場面が続くと、ESFJは強い消耗を感じやすいです。「やってもらって当然」という態度の相手とは、長期的に疲弊しやすい傾向があります。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">ESFJと相性が取りやすいタイプ</h2>
                            <p className="mb-6 leading-relaxed">
                                ESFJは、周囲の人を気にかけて関係の温度を整える力が強いタイプです。ESFJの温かさや気遣いを素直に受け取ってくれる相手、または一緒に場を明るくできる相手との組み合わせが合いやすいとされています。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <Link href="/articles/isfj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-orange-50 hover:border-orange-200 transition-all">
                                    <h3 className="font-bold text-orange-700 mb-2 group-hover:text-orange-800">ISFJ</h3>
                                    <p className="text-sm text-gray-600">ケアすることを大切にする傾向が共通しており、自然に支え合える関係になりやすいです。どちらも相手を思いやる行動が出やすいため、安心感のある関係が育ちやすいです。</p>
                                    <span className="text-xs text-orange-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/isfp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-orange-50 hover:border-orange-200 transition-all">
                                    <h3 className="font-bold text-orange-700 mb-2 group-hover:text-orange-800">ISFP</h3>
                                    <p className="text-sm text-gray-600">ESFJの包容力とISFPの感性が組み合わさると、互いを否定せずに受け入れる関係になりやすいです。ESFJがISFPの個性を大切にする形になりやすいです。</p>
                                    <span className="text-xs text-orange-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/esfp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-orange-50 hover:border-orange-200 transition-all">
                                    <h3 className="font-bold text-orange-700 mb-2 group-hover:text-orange-800">ESFP</h3>
                                    <p className="text-sm text-gray-600">社交的でポジティブな面が共通しており、一緒に楽しい時間を過ごしやすい関係です。感情の温度が近いため、喜びや気持ちを共有しやすい組み合わせです。</p>
                                    <span className="text-xs text-orange-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                相性はMBTIだけで決まるわけではありません。ラブタイプや価値観の共有度によっても大きく変わります。気になる相手がいれば、<Link href="/diagnosis" className="text-teal-600 hover:underline font-medium">相性診断</Link>で組み合わせを確認してみてください。
                            </p>
                        </section>

                        <section className="bg-gradient-to-br from-orange-500 to-pink-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">尽くす恋の温度差を整理する</h2>
                            <p className="mb-8 font-medium">
                                ESFJらしい愛情表現や、<br />
                                傷つきやすい場面を診断で確認できます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-orange-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
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
