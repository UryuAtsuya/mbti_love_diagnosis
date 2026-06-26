import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleAffiliateRecommendation from '@/components/ArticleAffiliateRecommendation';

export const metadata: Metadata = {
    title: '連絡頻度の違いで苦しくなる前に読む話 | AI Love Matcher',
    description: '返信ペースの違いが不安や不満に変わる前に、すり合わせるべきポイントと伝え方の例をまとめました。',
    alternates: {
        canonical: '/articles/message-frequency-gap',
    },
};

export default function MessageFrequencyGapPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="連絡頻度の違いで苦しくなる前に読む話 | AI Love Matcher"
                description="返信ペースの違いが不安や不満に変わる前に、すり合わせるべきポイントと伝え方の例をまとめました。"
                slug="message-frequency-gap"
                datePublished="2026-04-19"
                dateModified="2026-05-19"
            />
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Breadcrumb items={[{ label: '記事一覧', href: '/articles' }, { label: '連絡頻度の違いで苦しくなる前に読む話' }]} />

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                    連絡頻度の違いで苦しくなる前に読む話
                </h1>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <p className="mb-0 text-sm text-teal-800">
                            返信の速さやメッセージ量の違いは、気持ちの差そのものとは限りません。まずは「愛情の差」と「連絡スタイルの差」を分けて考えることが重要です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 連絡頻度のズレが苦しくなる理由</h2>
                        <p className="mb-4">
                            連絡は単なる情報交換ではなく、安心確認の役割を持つことがあります。だからこそ、自分にとっては普通のペースでも、相手にとっては「放置された」と感じることがあります。
                        </p>
                        <p className="mb-0">
                            問題は頻度そのものより、その頻度にどんな意味を乗せているかです。「返信が早い=大切にされている」と感じる人と、「返事を急かされない=信頼されている」と感じる人では、同じやり取りでも解釈が変わります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. 先に見ておきたい3つの論点</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">返信速度</h3>
                                <p className="text-sm mb-0">数時間空くと不安になるのか、翌日でも問題ないのか。ここはかなり個人差があります。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">メッセージの密度</h3>
                                <p className="text-sm mb-0">短文でテンポよく続けたいのか、まとめて深く話したいのか。量だけでなくスタイルも見ておく必要があります。</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">連絡の役割</h3>
                                <p className="text-sm mb-0">安心確認なのか、予定調整なのか、雑談でつながるためなのか。役割が違うと食い違いやすくなります。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. 伝え方を間違えると、ただの要求に聞こえる</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-rose-50 border border-rose-100 rounded-xl p-5">
                                <h3 className="font-bold text-rose-700 mb-2">避けたい言い方</h3>
                                <p className="text-sm mb-0">なんで返してくれないの？ 普通もっと返すよね？ 私のこと大事じゃないの？</p>
                            </div>
                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                                <h3 className="font-bold text-emerald-700 mb-2">伝わりやすい言い方</h3>
                                <p className="text-sm mb-0">返信がない時間が長いと少し不安になりやすいから、忙しいときの目安が分かると助かる。</p>
                            </div>
                        </div>
                        <p className="mt-4 mb-0">
                            要求ではなく、自分の受け取り方を共有する形に変えると、相手も防御しにくくなります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">4. すり合わせの現実的な落としどころ</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>平日は短文でOK、週末に長めに話す</li>
                            <li>忙しい日はスタンプか一言だけ送る</li>
                            <li>返事が遅いときは、夜まで待ってから確認する</li>
                            <li>大事な話はテキストではなく通話や対面にする</li>
                        </ul>
                        <p className="mt-4 mb-0">完璧に一致させる必要はなく、互いに無理の少ない最低ラインを決めるだけでも楽になります。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">5. MBTIとラブタイプで見え方を分ける</h2>
                        <p className="mb-4">
                            MBTIでは、外向型か内向型か、直感型か感覚型かによって、連絡の意味づけが変わることがあります。外向型はやり取りのテンポそのものに安心を感じやすく、内向型は一度考える時間を置いてから返す方が自然な場合があります。
                        </p>
                        <p className="mb-4">
                            一方で、連絡頻度の不安はMBTIだけでは説明しきれません。ラブタイプで見ると、好意をこまめな反応で受け取りたい人もいれば、信頼しているからこそ頻繁に確認しなくていいと感じる人もいます。
                        </p>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-sm">
                            <p className="mb-3">
                                たとえば、相手が「返信は少ないけれど会ったときは丁寧」なら、愛情が薄いのではなく、テキストより対面で関係を作るタイプかもしれません。
                            </p>
                            <p className="mb-0">
                                逆に「会っているときも雑で、連絡でも不安を放置する」なら、頻度の問題ではなく尊重の問題として見直す必要があります。
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">6. 実際に使える確認メッセージ</h2>
                        <div className="space-y-4">
                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                                <h3 className="font-bold text-emerald-700 mb-2">忙しさを確認したいとき</h3>
                                <p className="text-sm mb-0">
                                    「最近忙しそうだけど、返しやすい時間帯ってある？ 無理に即レスしてほしいわけじゃなくて、目安が分かると安心する。」
                                </p>
                            </div>
                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                                <h3 className="font-bold text-emerald-700 mb-2">寂しさを伝えたいとき</h3>
                                <p className="text-sm mb-0">
                                    「返事がないときに、勝手に不安になりやすいみたい。短くてもいいから、忙しい日は一言だけもらえると落ち着く。」
                                </p>
                            </div>
                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                                <h3 className="font-bold text-emerald-700 mb-2">相手の負担を減らしたいとき</h3>
                                <p className="text-sm mb-0">
                                    「毎回長く返さなくて大丈夫。大事な話だけ週末にまとめて話せたら、普段は短文でも安心できそう。」
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">7. それでもつらいときに見直すポイント</h2>
                        <p className="mb-4">
                            話し合っても改善しない場合は、相手のスタイルが悪いというより、必要な安心の形が大きく違う可能性があります。ここを無視して無理に合わせ続けると、好きでも消耗します。
                        </p>
                        <p className="mb-0">
                            連絡頻度は小さな問題に見えますが、実際には信頼感や優先順位の感じ方に直結しやすい論点です。軽く扱わない方がいい部分でもあります。
                        </p>
                    </section>

                    <section className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-teal-800 mb-4">関連する読み物</h2>
                        <div className="space-y-2 text-sm">
                            <p><Link href="/articles/relationship-checkpoints" className="text-teal-700 font-bold hover:underline">相性が悪いと感じたときに先に確認したい5つのこと</Link></p>
                            <p><Link href="/articles/truth-of-compatibility" className="text-teal-700 font-bold hover:underline">MBTI×ラブキャラで見直す、相性の考え方</Link></p>
                        </div>
                    </section>
                </div>
            </div>
            <ArticleAffiliateRecommendation />
        </main>
    );
}
