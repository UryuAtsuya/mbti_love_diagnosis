import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: '相性が悪いと感じたときに先に確認したい5つのこと | AI Love Matcher',
    description: '本当に相性が悪いのか、それとも話し方や距離感のズレなのかを見極めるための確認ポイントを整理します。',
    alternates: {
        canonical: '/articles/relationship-checkpoints',
    },
};

export default function RelationshipCheckpointsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="相性が悪いと感じたときに先に確認したい5つのこと | AI Love Matcher"
                description="本当に相性が悪いのか、それとも話し方や距離感のズレなのかを見極めるための確認ポイントを整理します。"
                slug="relationship-checkpoints"
                datePublished="2026-04-19"
                dateModified="2026-05-19"
            />
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Breadcrumb items={[{ label: '記事一覧', href: '/articles' }, { label: '相性が悪いと感じたときに先に確認したい5つのこと' }]} />

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                    相性が悪いと感じたときに先に確認したい5つのこと
                </h1>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <p className="mb-0 text-sm text-teal-800">
                            「なんとなく合わない」をそのまま相性の悪さと決めると、修正できる問題まで見落としやすくなります。まずは、どの論点で苦しくなっているのかを分解することが先です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 連絡の量と速度に期待差はないか</h2>
                        <p className="mb-4">
                            相性が悪いと感じるきっかけで最も多いのが、連絡のテンポです。自分は毎日やり取りしたいのに、相手は要件があるときだけで十分だと考えていると、それだけで不安と不満が溜まります。
                        </p>
                        <p className="mb-0">
                            ここは性格の問題というより、期待値の問題であることが多いです。相手が冷たいのではなく、心地いい頻度の基準が違うだけ、というケースは珍しくありません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. 言い方が合わないだけで、中身は近くないか</h2>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                            <p className="mb-3 text-sm">
                                片方は結論を先に言う、もう片方は背景から話したい。片方は短くはっきり伝える、もう片方は余韻を残したい。こうした違いは、内容より話し方のズレで摩擦を起こします。
                            </p>
                            <p className="mb-0 text-sm">
                                同じことを考えていても、受け取り方が悪いだけで「価値観が合わない」と誤解している場合があります。衝突のログを振り返ると、論点ではなく口調でこじれていることがあります。
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. 不安が強い時期と、相手の余裕のなさが重なっていないか</h2>
                        <p className="mb-4">
                            忙しい時期、仕事が荒れている時期、家族や友人との問題を抱えている時期は、普段より反応が鈍くなります。そのタイミングでこちらの不安が強いと、相手の余裕のなさを拒絶と受け取りやすくなります。
                        </p>
                        <p className="mb-0">
                            これは相性そのものより、タイミングの問題です。一定期間の環境要因を切り分けずに判断すると、本来は続く関係まで壊しやすくなります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">4. 仲直りの手順が共有されているか</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">共有されていない状態</h3>
                                <p className="text-sm mb-0">片方はすぐ話したい、片方は放っておいてほしい。ここが噛み合わないと、ケンカそのものより、ケンカ後の扱いで傷が深くなります。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">共有されている状態</h3>
                                <p className="text-sm mb-0">「一度落ち着いてから話す」「その日のうちに一言だけ送る」など、戻り方が見えていると、相性への不安はかなり減ります。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">5. そもそも我慢しすぎていないか</h2>
                        <p className="mb-4">
                            配慮と我慢は違います。こちらだけが合わせ続けている、違和感を飲み込んでいる、言えば嫌われそうで本音が出せない。こうした状態が続いているなら、それは相性の問題というより関係の健全性の問題です。
                        </p>
                        <p className="mb-0">
                            相性診断でどう出るかより、自分が安心して話せるか、尊重されている感覚があるかの方が重要です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">6. MBTIだけで相性を決めない</h2>
                        <p className="mb-4">
                            MBTIで相性が良いとされる組み合わせでも、恋愛ではうまくいかないことがあります。逆に、タイプだけ見ると違いが大きい二人でも、連絡頻度、生活リズム、愛情表現の受け取り方が合っていれば安定することがあります。
                        </p>
                        <p className="mb-4">
                            当サイトでは、MBTIを「考え方の傾向」、ラブタイプを「恋愛で安心する条件」と分けて見ています。相性が悪いと感じたときは、性格そのものではなく、安心条件のズレが起きていないかを先に確認すると判断しやすくなります。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">性格の違い</h3>
                                <p className="text-sm mb-0">
                                    考える順番、決め方、感情表現の出方が違う状態です。説明の仕方を変えると改善することがあります。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">安心条件の違い</h3>
                                <p className="text-sm mb-0">
                                    連絡、距離感、優先順位、将来像の扱いが違う状態です。具体的なルール作りが必要になりやすいです。
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">7. 危険な相性の悪さと、調整できるズレの違い</h2>
                        <p className="mb-4">
                            調整できるズレは、話し合うと少しずつ行動が変わります。返信の目安を決める、予定変更の伝え方を変える、ケンカ後の戻り方を決めるなど、二人で運用を作れる状態です。
                        </p>
                        <p className="mb-4">
                            一方で、こちらの不安を何度伝えても軽く扱われる、人格を否定される、話し合いそのものを拒否され続ける場合は、相性以前に関係の安全性を見直す必要があります。診断結果が良くても、尊重されない関係を続ける理由にはなりません。
                        </p>
                        <div className="bg-rose-50 border border-rose-100 rounded-xl p-5 text-sm">
                            <p className="mb-0">
                                「違いがあること」と「大切にされないこと」は別です。前者はすり合わせの対象ですが、後者は距離を取る判断材料になります。
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">確認を会話に変えるための聞き方</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>返信が遅いとき、どういう状態だと返しにくくなる？</li>
                            <li>意見が違ったときは、その場で話したい方？ 少し置きたい方？</li>
                            <li>私が気をつけた方が話しやすくなることってある？</li>
                            <li>最近、無理して合わせてる感じはない？</li>
                        </ul>
                    </section>

                    <section className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-teal-800 mb-4">次の一歩</h2>
                        <p className="mb-4">相性が悪いかどうかを急いで決めるより、ズレている論点を1つだけ会話に出す方が、関係は前に進みます。</p>
                        <div className="space-y-2 text-sm">
                            <p><Link href="/articles/message-frequency-gap" className="text-teal-700 font-bold hover:underline">連絡頻度の違いで苦しくなる前に読む話</Link></p>
                            <p><Link href="/articles/dating-value-differences" className="text-teal-700 font-bold hover:underline">価値観が違う相手とうまく付き合うための話し合い方</Link></p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
