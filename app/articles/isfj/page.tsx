import type { Metadata } from 'next';
import Link from 'next/link';
import { Info, Shield, Sparkles } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'ISFJ（擁護者）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ISFJの恋愛傾向を、支える愛情の出方、我慢しやすい場面、安心を感じる条件、長続きのコツまで整理します。',
    alternates: {
        canonical: '/articles/isfj',
    },
};

export default function ISFJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="ISFJ（擁護者）の性格・恋愛傾向を解説 | AI Love Matcher"
                description="ISFJの恋愛傾向を、支える愛情の出方、我慢しやすい場面、安心を感じる条件、長続きのコツまで整理します。"
                slug="isfj"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-500 h-32 flex items-center justify-center">
                    <Shield className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Breadcrumb items={[{ label: "記事一覧", href: "/articles" }, { label: "ISFJ（擁護者）の性格・恋愛傾向を解説" }]} />

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ISFJ（擁護者）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-emerald-600 mt-3 font-medium">やさしく支える人が、恋愛で無理を抱え込みやすい場面</span>
                    </h1>

                    <div className="prose prose-emerald max-w-none text-gray-700">
                        <section className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-emerald-700">
                                <li>ISFJは、人の役に立ちたい気持ちが強く、細やかな配慮を積み重ねて関係を守りやすいタイプです。</li>
                                <li>恋愛では、安心感、感謝、安定したやり取り、相手の誠実さを特に重視します。</li>
                                <li>尽くせるぶん、無理をしていても我慢しやすく、限界まで自分の気持ちを後回しにすることがあります。</li>
                                <li>支えられるだけでなく、自分の努力や疲れにも気づいてくれる相手だと長続きしやすいです。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">1. ISFJの基本性格: 目立たないところで支える力が強い</h2>
                            <p className="mb-6 leading-relaxed">
                                ISFJは、相手の状態や必要なことをよく観察し、目立たないところで支える力が強いタイプです。派手に自己主張するより、関係を安定させるために何が必要かを考えて動きやすく、周囲からは安心感のある人として見られやすいでしょう。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                ただし、そのやさしさは無限ではありません。相手に合わせることが多いぶん、自分の不満や疲れを後回しにしやすく、気づかれないまま負担が積み上がることがあります。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">ISFJが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>やさしいからといって、何でも平気なわけではない</li>
                                    <li>控えめでも、見ていることや覚えていることは多い</li>
                                    <li>穏やかに見えても、関係が雑になると静かに傷つく</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">2. ISFJが恋愛で大切にしやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                ISFJは、恋愛でも「ちゃんと大切にされているか」「二人の関係が落ち着いて続いていくか」をよく見ています。大きな刺激より、日々の安心感や思いやりの積み重ねがあるかどうかを重視しやすいタイプです。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-emerald-100 rounded-xl p-4">
                                    <h3 className="font-bold text-emerald-700 mb-2">感謝の可視化</h3>
                                    <p className="text-sm mb-0">頑張りに気づいてもらえることが、ISFJには大きな安心材料になります。</p>
                                </div>
                                <div className="border border-emerald-100 rounded-xl p-4">
                                    <h3 className="font-bold text-emerald-700 mb-2">安定した温度</h3>
                                    <p className="text-sm mb-0">感情の波が激しすぎない関係の方が、長期では信頼しやすくなります。</p>
                                </div>
                                <div className="border border-emerald-100 rounded-xl p-4">
                                    <h3 className="font-bold text-emerald-700 mb-2">誠実な生活感</h3>
                                    <p className="text-sm mb-0">言葉だけでなく、ふだんの態度や約束の守り方をかなり見ています。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ISFJが本気になりやすいのは、自分のやさしさを利用せず、ちゃんと対等に扱ってくれる相手です。安心して支え合える感覚があると、かなり深く関係を守ろうとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">我慢してから限界が来やすい</h3>
                                    <p className="text-sm mb-0">
                                        ISFJは不満があってもその場で言いにくく、先に相手を優先しがちです。小さな違和感を溜め込むと、後から大きな疲れとして出やすくなります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">献身を当然扱いされると傷つく</h3>
                                    <p className="text-sm mb-0">
                                        助けたり気づいたりできるからこそ、当たり前のように扱われると消耗しやすいです。感謝がない関係は、静かにしんどさが積もっていきます。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">強い言い方や不安定さに弱い</h3>
                                    <p className="text-sm mb-0">
                                        急な怒りや乱暴な言葉にはかなり傷つきやすいタイプです。落ち着いて話せない関係では、本音を出しづらくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">4. ラブキャラ診断で見るISFJ</h2>
                            <p className="mb-6 leading-relaxed">
                                ISFJは、当サイトのラブキャラでは「忠犬ハチ公（FCPE）」や「憧れの先輩（LARO）」として説明しやすい場面があります。前者は一途な献身、後者は落ち着いた安心感として出やすいイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                    <h3 className="text-lg font-bold text-emerald-800 mb-2">忠犬ハチ公（FCPE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        好きな相手を支えたい気持ちが強く出るパターンです。約束や気遣いを積み重ね、静かに関係を守ろうとする姿勢として表れます。
                                    </p>
                                </div>
                                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                    <h3 className="text-lg font-bold text-teal-800 mb-2">憧れの先輩（LARO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        落ち着いた配慮と、必要な場面でそっと前に出る安心感として表れるイメージです。目立ちすぎずとも「この人がいると落ち着く」と思われやすいタイプです。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">5. ISFJと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-emerald-700">1. 気づいた配慮を言葉にする</span>
                                    <p className="text-sm mt-2 mb-0">小さなことでも見てもらえている感覚があると、ISFJはかなり安心しやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-emerald-700">2. 我慢させすぎる前に確認する</span>
                                    <p className="text-sm mt-2 mb-0">「大丈夫？」を定期的に入れられる相手だと、ISFJは限界前に本音を出しやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-emerald-700">3. 安心できる話し方を保つ</span>
                                    <p className="text-sm mt-2 mb-0">厳しさが必要な場面でも、雑な言い方を避けるだけで関係の安定度はかなり変わります。</p>
                                </li>
                            </ol>

                            <div className="bg-teal-50 p-6 rounded-xl border border-teal-200 mb-10">
                                <h3 className="text-lg font-bold text-teal-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    ISFJに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-teal-900 list-disc list-inside mb-0">
                                    <li>気遣いを当たり前のものとして消費すること</li>
                                    <li>人前で雑に否定したり強く責めたりすること</li>
                                    <li>不安定な態度で振り回すこと</li>
                                    <li>「言わないなら平気」と決めつけること</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">6. よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">Q. ISFJは恋愛に消極的なタイプですか？</h3>
                                    <p className="text-sm mb-0">ISFJは慎重に相手を見極めてから距離を縮める傾向があるため、消極的に映ることがあります。ただし、信頼関係ができた後は非常に深い愛情を注ぐタイプで、一度決めた相手を長く大切にしやすいです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">Q. ISFJと相性が良いのはどのタイプですか？</h3>
                                    <p className="text-sm mb-0">ESTPやEFSPなど、ISFJが苦手とする積極性を自然に補ってくれるタイプが挙げられます。ただし、MBTIだけで判断せず、ラブキャラで「安心の求め方」が一致しているかを確認すると、より実態に近い相性が見えます。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">Q. ISFJが本音を言わないのはどうすればいいですか？</h3>
                                    <p className="text-sm mb-0">ISFJは「相手を困らせたくない」という配慮から、不満を飲み込みやすいタイプです。責めるのではなく「何でも話してほしい」という安心感を日常的に伝えておくことで、少しずつ本音を出しやすくなる傾向があります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">Q. ISFJが突然距離を取るのはなぜですか？</h3>
                                    <p className="text-sm mb-0">我慢を重ねた結果、限界を超えて一気に離れるパターンがISFJには見られます。怒りというよりも疲弊が原因であることが多く、小さな不満の段階で対話の機会を作ることが予防策として効果的です。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">ISFJと相性が取りやすいタイプ</h2>
                            <p className="mb-6 leading-relaxed">
                                ISFJは、献身的なケアとサポートで関係を支えやすいタイプです。ISFJの安定感や誠実さを受け取ってくれる相手、または日常の中でチーム感を作れる相手との組み合わせが合いやすいとされています。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <Link href="/articles/esfp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                                    <h3 className="font-bold text-emerald-700 mb-2 group-hover:text-emerald-800">ESFP</h3>
                                    <p className="text-sm text-gray-600">ESFPの明るさがISFJの日常に活気を与えやすい組み合わせです。ISFJの安定感とESFPの行動力が自然に役割分担する形になりやすいです。</p>
                                    <span className="text-xs text-emerald-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/estj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                                    <h3 className="font-bold text-emerald-700 mb-2 group-hover:text-emerald-800">ESTJ</h3>
                                    <p className="text-sm text-gray-600">安定と責任感を共通して持つESTJとは、日常の信頼が築きやすいペアです。二人で物事を進める際のチーム感が出やすい組み合わせです。</p>
                                    <span className="text-xs text-emerald-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/istj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                                    <h3 className="font-bold text-emerald-700 mb-2 group-hover:text-emerald-800">ISTJ</h3>
                                    <p className="text-sm text-gray-600">誠実さと着実さを共有するISTJとは、日常の中で静かな信頼が育ちやすいです。言葉が少なくても理解し合いやすい安心感がある関係です。</p>
                                    <span className="text-xs text-emerald-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                相性はMBTIだけで決まるわけではありません。ラブタイプや価値観の共有度によっても大きく変わります。気になる相手がいれば、<Link href="/diagnosis" className="text-teal-600 hover:underline font-medium">相性診断</Link>で組み合わせを確認してみてください。
                            </p>
                        </section>

                        <section className="bg-gradient-to-br from-emerald-600 to-teal-600 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">支える恋の負担を見直す</h2>
                            <p className="mb-8 font-medium">
                                ISFJらしい献身や、<br />
                                我慢しやすい場面を診断で整理できます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-emerald-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
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
