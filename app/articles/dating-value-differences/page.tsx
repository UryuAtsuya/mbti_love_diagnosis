import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: '価値観が違う相手とうまく付き合うための話し合い方 | AI Love Matcher',
    description: 'お金、時間、将来像の違いでぶつかったときに、相手を否定せず論点を整理する話し合いの進め方を解説します。',
    alternates: {
        canonical: '/articles/dating-value-differences',
    },
};

export default function DatingValueDifferencesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="価値観が違う相手とうまく付き合うための話し合い方 | AI Love Matcher"
                description="お金、時間、将来像の違いでぶつかったときに、相手を否定せず論点を整理する話し合いの進め方を解説します。"
                slug="dating-value-differences"
                datePublished="2026-04-19"
                dateModified="2026-05-19"
            />
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Breadcrumb items={[{ label: '記事一覧', href: '/articles' }, { label: '価値観が違う相手とうまく付き合うための話し合い方' }]} />

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                    価値観が違う相手とうまく付き合うための話し合い方
                </h1>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <p className="mb-0 text-sm text-teal-800">
                            価値観の違いは、すぐに「相性が悪い」で片づけるより、何の論点で違っているのかを分けることで対処しやすくなります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 価値観の違いがつらいのは、結論より背景が見えないから</h2>
                        <p className="mb-4">
                            お金の使い方、休みの過ごし方、結婚や将来の考え方。こうした違いは、結論だけ聞くと受け入れにくくても、その背景にある不安や優先順位が見えると理解しやすくなります。
                        </p>
                        <p className="mb-0">
                            たとえば節約志向の人は、ケチなのではなく「先が見えないことが怖い」のかもしれません。逆に体験にお金を使いたい人は、浪費ではなく「今の時間を大切にしたい」のかもしれません。背景を読まずに結論だけぶつけると、対立が深まりやすくなります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. 話し合いの前に分けるべき3つの論点</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">事実</h3>
                                <p className="text-sm mb-0">何が起きたか。頻度、金額、予定、発言など、確認可能な内容です。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">感情</h3>
                                <p className="text-sm mb-0">それによってどう感じたか。不安、寂しさ、焦り、窮屈さなどです。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">要望</h3>
                                <p className="text-sm mb-0">今後どうしたいか。相手を変える命令ではなく、相談の形にするのが重要です。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ぶつかりやすいテーマ別の進め方</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">お金の使い方</h3>
                                <p className="text-sm mb-0">「どちらが正しいか」ではなく、「何に安心を感じるか」で話すと整理しやすくなります。固定費には慎重、記念日には使いたい、など場面別に分けると落としどころが見えます。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">時間の使い方</h3>
                                <p className="text-sm mb-0">一人時間が必要な人と、一緒に過ごすことで安心する人では衝突しやすいです。会う頻度、連絡の頻度、一人時間の確保を別々に決めると噛み合いやすくなります。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">将来像</h3>
                                <p className="text-sm mb-0">結婚、仕事、住む場所などは、今すぐ結論を出す話と、方向感だけ共有すればいい話が混ざりやすいです。期限付きの論点かどうかを先に分けると、必要以上に重くなりません。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">4. 話し合いを壊しやすい言い方</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>普通はこうでしょ</li>
                            <li>前からずっとそうだよね</li>
                            <li>私ばっかり我慢してる</li>
                            <li>その考え方が理解できない</li>
                        </ul>
                        <p className="mt-4 mb-0">
                            こうした言い方は、論点ではなく人格を責められている感覚を生みやすくなります。価値観の違いを扱う場面では特に逆効果です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">5. 使いやすい会話テンプレ</h2>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-sm space-y-3">
                            <p>最近、○○の場面で少し引っかかることがあった。</p>
                            <p>私は△△みたいに感じやすいみたいで、そこが少し不安だった。</p>
                            <p>あなたはどう考えていたのかを先に知りたい。</p>
                            <p className="mb-0">その上で、今後は□□みたいにできると助かる。</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">6. MBTI別に起こりやすいすれ違い</h2>
                        <p className="mb-4">
                            価値観の違いは、単に「性格が合わない」というより、安心する判断基準が違うことで起こります。MBTIで見ると、判断型は予定やルールが決まっている方が落ち着きやすく、知覚型は余白や変更のしやすさを大切にしやすい傾向があります。
                        </p>
                        <p className="mb-4">
                            思考型は「合理的かどうか」を先に見やすく、感情型は「相手の気持ちを大切にできているか」を先に見やすいことがあります。どちらが正しいかではなく、話し合いで見ている場所が違うと考えると、相手を責めずに整理しやすくなります。
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">予定重視の人</h3>
                                <p className="text-sm mb-0">
                                    先に決めておくことで安心するため、急な変更が続くと大切にされていないように感じやすくなります。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">柔軟さ重視の人</h3>
                                <p className="text-sm mb-0">
                                    その場の気分や状況も大切にしたいため、細かく決めすぎると窮屈に感じやすくなります。
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">7. 合わせることと我慢することを分ける</h2>
                        <p className="mb-4">
                            話し合いの目的は、どちらか一方が完全に譲ることではありません。毎回同じ人だけが予定を変える、金銭感覚を飲み込む、将来の希望を言えない状態が続くなら、それはすり合わせではなく我慢になっています。
                        </p>
                        <p className="mb-4">
                            合わせるとは、互いの大事にしているものを理解したうえで、現実的な運用を決めることです。たとえば「旅行は年2回までにするが、記念日は少し良い店に行く」「平日は一人時間を優先し、週末は予定を共有する」のように、場面ごとに分けると負担が偏りにくくなります。
                        </p>
                        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-sm">
                            <p className="mb-0">
                                価値観が違う相手と続けるには、完全一致を目指すより「違っても扱える形」を作る方が現実的です。
                            </p>
                        </div>
                    </section>

                    <section className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-teal-800 mb-4">関連する記事</h2>
                        <div className="space-y-2 text-sm">
                            <p><Link href="/articles/relationship-checkpoints" className="text-teal-700 font-bold hover:underline">相性が悪いと感じたときに先に確認したい5つのこと</Link></p>
                            <p><Link href="/articles/message-frequency-gap" className="text-teal-700 font-bold hover:underline">連絡頻度の違いで苦しくなる前に読む話</Link></p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
