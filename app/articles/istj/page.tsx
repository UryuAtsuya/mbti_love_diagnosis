import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Info, Sparkles } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleAffiliateRecommendation from '@/components/ArticleAffiliateRecommendation';

export const metadata: Metadata = {
    title: 'ISTJ（管理者）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ISTJの恋愛傾向を、誠実さの出方、安定を重視する理由、感情表現が控えめな場面、長続きのコツまで整理します。',
    alternates: {
        canonical: '/articles/istj',
    },
};

export default function ISTJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="ISTJ（管理者）の性格・恋愛傾向を解説 | AI Love Matcher"
                description="ISTJの恋愛傾向を、誠実さの出方、安定を重視する理由、感情表現が控えめな場面、長続きのコツまで整理します。"
                slug="istj"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-slate-600 to-slate-400 h-32 flex items-center justify-center">
                    <Briefcase className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Breadcrumb items={[{ label: "記事一覧", href: "/articles" }, { label: "ISTJ（管理者）の性格・恋愛傾向を解説" }]} />

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ISTJ（管理者）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-slate-600 mt-3 font-medium">安定を大切にする人が、恋愛で静かに積み上げている信頼</span>
                    </h1>

                    <div className="prose prose-slate max-w-none text-gray-700">
                        <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-slate-700">
                                <li>ISTJは、約束や役割をまじめに守り、日々の積み重ねで信頼を作りやすいタイプです。</li>
                                <li>恋愛では、安定感、誠実さ、生活リズムの相性、言葉と行動の一致を重視しやすくなります。</li>
                                <li>感情表現は控えめでも、大切な相手には責任を持って関わろうとする姿勢がかなり強いです。</li>
                                <li>曖昧な駆け引きや約束破りには弱く、落ち着いて話せる相手だと長く続きやすいです。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">1. ISTJの基本性格: 派手さより確実さを選びやすい</h2>
                            <p className="mb-6 leading-relaxed">
                                ISTJは、物事を地道に進め、決めたことをきちんと守る力が強いタイプです。感覚的な勢いより、事実や実績、手順を見て判断しやすく、安定して信頼できる人として周囲から見られることが多いでしょう。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                その一方で、軽いノリや曖昧な言い回しには疲れやすく、気持ちより先に現実の整合性を見てしまう面があります。冷たく見えることもありますが、本質的には関わる相手に対して責任感が強いタイプです。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">ISTJが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>感情表現が控えめでも、関係を軽く見ているわけではない</li>
                                    <li>慎重なのは興味がないからではなく、責任を持ちたいから</li>
                                    <li>厳しそうに見えても、内側では相手を守ろうとする意識が強い</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">2. ISTJが恋愛で大切にしやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                ISTJは、恋愛でも安心して続けられる土台をかなり重視します。勢いだけで関係を進めるより、日々のやり取りに無理がないか、約束が守られるか、生活感まで含めて相性がいいかをよく見ています。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-slate-100 rounded-xl p-4">
                                    <h3 className="font-bold text-slate-700 mb-2">一貫性</h3>
                                    <p className="text-sm mb-0">言っていることとやっていることが揃っている相手を信頼しやすいです。</p>
                                </div>
                                <div className="border border-slate-100 rounded-xl p-4">
                                    <h3 className="font-bold text-slate-700 mb-2">生活の安定</h3>
                                    <p className="text-sm mb-0">無理なく続けられるリズムがある関係の方が、気持ちも深まりやすくなります。</p>
                                </div>
                                <div className="border border-slate-100 rounded-xl p-4">
                                    <h3 className="font-bold text-slate-700 mb-2">誠実な対話</h3>
                                    <p className="text-sm mb-0">感情があっても、事実と一緒に話せる相手だと噛み合いやすくなります。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ISTJが本気になりやすいのは、派手さより信頼を優先する相手です。特別な演出が少なくても、落ち着いて積み上げられる関係にはかなり深く責任を持とうとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-slate-700 mb-2">愛情が伝わりにくい</h3>
                                    <p className="text-sm mb-0">
                                        ISTJは約束を守る、予定を整える、必要な役割を果たすなどで愛情を示しやすいです。言葉が少ないと、相手には気持ちが見えにくいことがあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-slate-700 mb-2">曖昧な駆け引きに消耗する</h3>
                                    <p className="text-sm mb-0">
                                        試すような言い方や気分で態度が変わるやり取りは、ISTJにとってかなり負担です。真剣に向き合いたいからこそ、不安定さが続くと離れやすくなります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-slate-700 mb-2">変化へのスピード感が合わない</h3>
                                    <p className="text-sm mb-0">
                                        関係や予定を急に大きく変えるのは苦手なことがあります。慎重さを煮え切らなさと誤解されると、互いにストレスがたまりやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">4. ラブキャラ診断で見るISTJ</h2>
                            <p className="mb-6 leading-relaxed">
                                ISTJは、当サイトのラブキャラでは「憧れの先輩（LARO）」や「忠犬ハチ公（FCPE）」として説明しやすい場面があります。前者は落ち着いた信頼感、後者は選んだ相手を守ろうとする一途さを表すイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">憧れの先輩（LARO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        落ち着いていて頼れ、無駄なことを言わない安心感として出るパターンです。派手さはなくても、生活を整える力が魅力として映りやすくなります。
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <h3 className="text-lg font-bold text-blue-800 mb-2">忠犬ハチ公（FCPE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        一度信頼した相手に対して、長く役割を果たそうとする一途さが出るイメージです。感情の派手さより責任の重さで愛情が見えやすいタイプです。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">5. ISTJと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-slate-700">1. 小さな約束ほど守る</span>
                                    <p className="text-sm mt-2 mb-0">細かいことの積み重ねが、ISTJには大きな信頼として積み上がります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-slate-700">2. 気持ちと事実を分けて話す</span>
                                    <p className="text-sm mt-2 mb-0">何が起きて、どう感じたかを整理して伝えると、ISTJはかなり向き合いやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-slate-700">3. 愛情表現の形を狭く決めつけない</span>
                                    <p className="text-sm mt-2 mb-0">言葉が少なくても、行動で示しているものを見つけられると関係は安定しやすいです。</p>
                                </li>
                            </ol>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-10">
                                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    ISTJに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-blue-900 list-disc list-inside mb-0">
                                    <li>気分で約束を変えたり破ったりすること</li>
                                    <li>試すような駆け引きをすること</li>
                                    <li>慎重さを頭ごなしに否定すること</li>
                                    <li>責任感を当然のものとして扱うこと</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">6. よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-slate-700 mb-2">Q. ISTJは恋愛に興味がないように見えるのですが？</h3>
                                    <p className="text-sm mb-0">ISTJは感情を表に出すのが得意ではないため、興味がないように見えることがあります。しかし内面では相手のことを真剣に考えており、行動で誠実さを示すことが多いタイプです。言葉の少なさは関心の薄さではなく、性質によるものです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-slate-700 mb-2">Q. ISTJと相性が良いのはどのタイプですか？</h3>
                                    <p className="text-sm mb-0">ESFPやENFPなど、ISTJの堅実さに安心しつつ関係に活気をもたらすタイプが相性良好とされています。ただし、恋愛での安心の求め方は人それぞれなので、ラブキャラも併せて確認することで具体的な相性像が見えてきます。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-slate-700 mb-2">Q. ISTJに変化を受け入れてもらうにはどうすればいいですか？</h3>
                                    <p className="text-sm mb-0">ISTJはルーティンや安定を好むため、急な変化にはストレスを感じやすいです。事前に理由と見通しを伝え、準備する時間を与えると受け入れやすくなります。「突然」を避け「予告」を意識するのがポイントです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-slate-700 mb-2">Q. ISTJの愛情表現はどこで感じ取れますか？</h3>
                                    <p className="text-sm mb-0">甘い言葉よりも、時間通りに迎えに来る、約束を忘れない、体調を気にかけるなどの「地味だが確実な行動」に現れます。派手さはありませんが、継続的で裏切らない愛情表現がISTJの強みです。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">ISTJと相性が取りやすいタイプ</h2>
                            <p className="mb-6 leading-relaxed">
                                ISTJは、信頼と誠実さを軸に関係を築くタイプです。日常の安定感を共有できる相手、または互いの違いが刺激と安心のバランスになれる相手との組み合わせが合いやすいとされています。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <Link href="/articles/esfp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-slate-50 hover:border-slate-300 transition-all">
                                    <h3 className="font-bold text-slate-700 mb-2 group-hover:text-slate-800">ESFP</h3>
                                    <p className="text-sm text-gray-600">ISTJの安定感とESFPの明るさが補い合うと、生活の基盤を共有しながら楽しみも生まれやすい関係です。お互いの違いが刺激と安心のバランスになりやすいです。</p>
                                    <span className="text-xs text-slate-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/estj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-slate-50 hover:border-slate-300 transition-all">
                                    <h3 className="font-bold text-slate-700 mb-2 group-hover:text-slate-800">ESTJ</h3>
                                    <p className="text-sm text-gray-600">秩序と責任感を共有するESTJとは、日常の決めごとや役割分担がしやすい関係です。同じ方向を向いて物事を進める安心感が生まれやすいです。</p>
                                    <span className="text-xs text-slate-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/isfj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-slate-50 hover:border-slate-300 transition-all">
                                    <h3 className="font-bold text-slate-700 mb-2 group-hover:text-slate-800">ISFJ</h3>
                                    <p className="text-sm text-gray-600">誠実さと細やかな配慮を共通して持つISFJとは、静かな信頼の上に関係が育ちやすいです。お互いの不満を溜めないよう言葉にすることが大切な組み合わせです。</p>
                                    <span className="text-xs text-slate-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                相性はMBTIだけで決まるわけではありません。ラブタイプや価値観の共有度によっても大きく変わります。気になる相手がいれば、<Link href="/diagnosis" className="text-teal-600 hover:underline font-medium">相性診断</Link>で組み合わせを確認してみてください。
                            </p>
                        </section>

                        <section className="bg-gradient-to-br from-slate-600 to-slate-800 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">堅実な恋の強みと弱点を整理する</h2>
                            <p className="mb-8 font-medium">
                                ISTJらしい誠実さや、<br />
                                すれ違いやすいポイントを診断で言語化できます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-slate-800 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                無料診断をスタートする
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-500">
                    この記事は一般的な傾向をもとに編集しています。2026年3月更新。
                </div>
            </div>
            <ArticleAffiliateRecommendation />
        </main>
    );
}
