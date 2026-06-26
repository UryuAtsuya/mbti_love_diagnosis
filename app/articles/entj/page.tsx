import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Shield, Sparkles, Target } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleAffiliateRecommendation from '@/components/ArticleAffiliateRecommendation';

export const metadata: Metadata = {
    title: 'ENTJ（指揮官）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ENTJの恋愛傾向を、パートナー選びの基準、責任感、強く出やすい部分、ラブキャラの見方まで含めて整理します。',
    alternates: {
        canonical: '/articles/entj',
    },
};

export default function ENTJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="ENTJ（指揮官）の性格・恋愛傾向を解説 | AI Love Matcher"
                description="ENTJの恋愛傾向を、パートナー選びの基準、責任感、強く出やすい部分、ラブキャラの見方まで含めて整理します。"
                slug="entj"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-slate-700 to-indigo-800 h-32 flex items-center justify-center">
                    <Shield className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Breadcrumb items={[{ label: "記事一覧", href: "/articles" }, { label: "ENTJ（指揮官）の性格・恋愛傾向を解説" }]} />

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ENTJ（指揮官）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-indigo-600 mt-3 font-medium">前に進む力が強い人が、恋愛で本当に求めているもの</span>
                    </h1>

                    <div className="prose prose-indigo max-w-none text-gray-700">
                        <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-indigo-700">
                                <li>ENTJは、目標達成や全体最適を強く意識しやすいタイプです。</li>
                                <li>恋愛では、頼れること、尊敬できること、前向きに一緒に進めることを重視しやすくなります。</li>
                                <li>強く見えても、関係を大切にする責任感はかなり強く、選んだ相手には真剣です。</li>
                                <li>感情的な駆け引きより、率直さと建設的な対話の方が信頼につながりやすくなります。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">1. ENTJの基本性格: 物事を前に進める力が強い</h2>
                            <p className="mb-6 leading-relaxed">
                                ENTJは、現状をただ受け入れるより、「どうすればもっと良くなるか」を考えて動きやすいタイプです。判断が速く、方向性を決めることにも比較的抵抗が少ないため、周囲からは頼もしく見られやすいでしょう。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                ただし、その強さは支配したいからというより、停滞や曖昧さに強いストレスを感じやすいことの裏返しでもあります。自分にも他人にも基準が高くなりやすく、意図せず厳しく見えてしまうことがあります。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">ENTJらしさが出やすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>曖昧な状態を長く放置するのが苦手</li>
                                    <li>問題が起きたときに、まず改善策を考えやすい</li>
                                    <li>大切な相手ほど、成長や可能性を期待しやすい</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">2. ENTJの恋愛: 「尊敬できる相手か」をよく見ている</h2>
                            <p className="mb-6 leading-relaxed">
                                ENTJは、恋愛においても相手をかなり真剣に見ています。単に好きという感情だけでなく、この人と一緒にいるとき自分はどう在れるか、互いに支え合えるか、将来を一緒に作っていけるかを考えやすいタイプです。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-indigo-100 rounded-xl p-4">
                                    <h3 className="font-bold text-indigo-700 mb-2">尊敬</h3>
                                    <p className="text-sm mb-0">自分の考えや行動を持っている相手に惹かれやすくなります。</p>
                                </div>
                                <div className="border border-indigo-100 rounded-xl p-4">
                                    <h3 className="font-bold text-indigo-700 mb-2">前進感</h3>
                                    <p className="text-sm mb-0">一緒にいることで停滞するより、前向きになれる関係を好みやすいです。</p>
                                </div>
                                <div className="border border-indigo-100 rounded-xl p-4">
                                    <h3 className="font-bold text-indigo-700 mb-2">率直さ</h3>
                                    <p className="text-sm mb-0">遠回しな駆け引きより、はっきりしたコミュニケーションに安心しやすいです。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ENTJは強く見えても、選んだ相手を雑に扱うタイプではありません。むしろ、関係を守る責任感が強いからこそ、軽い態度や曖昧な関わり方に敏感になりやすい面があります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">正論が先に出てしまう</h3>
                                    <p className="text-sm mb-0">
                                        相手を助けたい気持ちから改善策をすぐ出しやすく、感情の受け止めが足りないと見えることがあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">期待値が高くなりすぎる</h3>
                                    <p className="text-sm mb-0">
                                        好きな相手ほど「もっとできるはず」と思いやすく、それがプレッシャーとして伝わることがあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">弱さを見せるのが遅い</h3>
                                    <p className="text-sm mb-0">
                                        外では強く振る舞いやすい分、疲れや不安を見せるタイミングが遅れやすいです。限界まで抱え込むと急に硬くなることがあります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">4. ラブキャラ診断で見るENTJ</h2>
                            <p className="mb-6 leading-relaxed">
                                ENTJは、当サイトのラブキャラでは「憧れの先輩（LARO）」や「忠犬ハチ公（FCPE）」として説明しやすい場面があります。前者は導く力、後者は選んだ相手への強い忠誠心として現れやすいイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                    <h3 className="text-lg font-bold text-indigo-800 mb-2 flex items-center">
                                        <Target className="w-4 h-4 mr-2" />
                                        憧れの先輩（LARO）として見える場面
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        方向性を示し、全体を引っ張る力が強く出るタイプです。頼もしさとして映る一方、相手のペースへの配慮が少ないと圧になりやすい面もあります。
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center">
                                        <Heart className="w-4 h-4 mr-2" />
                                        忠犬ハチ公（FCPE）として見える場面
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        一度信頼した相手にはかなり一途で、責任を持って支えようとするタイプです。外からは強く見えても、内側では「ちゃんと認められたい」気持ちを持っていることがあります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">5. ENTJと長く付き合うためのコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-indigo-700">1. 感情だけでなく、状況も共有する</span>
                                    <p className="text-sm mt-2 mb-0">「つらい」だけでなく、何が起きていて何を求めているのかが分かると、ENTJは動きやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-indigo-700">2. 反対意見は率直に伝える</span>
                                    <p className="text-sm mt-2 mb-0">遠慮しすぎるより、論点を整理して伝えた方が、対等な相手として信頼されやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-indigo-700">3. 休息や感情面のケアも価値として伝える</span>
                                    <p className="text-sm mt-2 mb-0">ENTJは走り続けやすいので、「休むことも成果の一部」と伝わるとバランスが取りやすくなります。</p>
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">6. よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">Q. ENTJは恋愛に消極的なタイプですか？</h3>
                                    <p className="text-sm mb-0">むしろ主導権を取って関係を進めようとする傾向があります。ただし、恋愛にも効率や目的意識を持ち込みやすいため、ロマンチックな雰囲気を重視する相手には「ドライ」と感じられることもあります。本人なりに真剣に向き合っていることが多いです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">Q. ENTJと相性が良いのはどのタイプですか？</h3>
                                    <p className="text-sm mb-0">INTPやINFPなど、ENTJの推進力を受け止めつつ違う視点を提供できるタイプと相性が良いとされます。ただし、MBTIだけで相性は判断しきれません。Love Characterで主導権の取り方や感情表現のバランスまで見ると、より現実的な相性が見えやすくなります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">Q. ENTJのパートナーが主張しにくいと感じたら？</h3>
                                    <p className="text-sm mb-0">ENTJは議論に強く、意見をはっきり言うタイプなので、相手が萎縮してしまうケースがあります。ENTJ自身は対等な議論を歓迎していることが多いため、論点を整理して率直に伝えた方が、遠慮するよりも関係が健全に保たれやすいです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-indigo-700 mb-2">Q. ENTJに感情的なサポートを求めてもいい？</h3>
                                    <p className="text-sm mb-0">ENTJは問題を解決しようとする傾向が強く、「ただ聞いてほしい」という気持ちに気づきにくいことがあります。「今は解決策より気持ちを聞いてほしい」と前置きするだけで、ENTJも対応を切り替えやすくなります。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">ENTJと相性が取りやすいタイプ</h2>
                            <p className="mb-6 leading-relaxed">
                                ENTJは、目標に向かって行動する力が強く、同じ方向を向いて切磋琢磨できる相手との関係で輝きやすいタイプです。尊重し合いながら互いの強みを発揮できる組み合わせが長続きしやすい傾向があります。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <Link href="/articles/intp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-slate-50 hover:border-slate-300 transition-all">
                                    <h3 className="font-bold text-slate-700 mb-2 group-hover:text-slate-800">INTP</h3>
                                    <p className="text-sm text-gray-600">INTPの分析力とENTJの決断力が合わさると、考えを形にするチーム感が生まれやすいです。互いに刺激し合える知的な関係になりやすいです。</p>
                                    <span className="text-xs text-slate-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/infp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-slate-50 hover:border-slate-300 transition-all">
                                    <h3 className="font-bold text-slate-700 mb-2 group-hover:text-slate-800">INFP</h3>
                                    <p className="text-sm text-gray-600">ENTJの行動力とINFPの価値観が噛み合うと、互いの弱点を補い合う形になりやすいです。方向性を合わせることができれば、互いに大きく成長できる関係です。</p>
                                    <span className="text-xs text-slate-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/intj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-slate-50 hover:border-slate-300 transition-all">
                                    <h3 className="font-bold text-slate-700 mb-2 group-hover:text-slate-800">INTJ</h3>
                                    <p className="text-sm text-gray-600">戦略的な思考を共有するINTJとは、長期的な視点で関係を築きやすいです。互いの独立性を尊重しながら、目標や価値観を共有できる関係になりやすいです。</p>
                                    <span className="text-xs text-slate-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                相性はMBTIだけで決まるわけではありません。ラブタイプや価値観の共有度によっても大きく変わります。気になる相手がいれば、<Link href="/diagnosis" className="text-teal-600 hover:underline font-medium">相性診断</Link>で組み合わせを確認してみてください。
                            </p>
                        </section>

                        <section className="bg-gradient-to-br from-slate-700 to-indigo-900 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">自分の恋愛の強さと弱点を知る</h2>
                            <p className="mb-8 font-medium">
                                ENTJらしいパートナー選びの基準や、<br />
                                すれ違いやすい場面を診断で整理できます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-indigo-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                パートナー傾向を診断する
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
