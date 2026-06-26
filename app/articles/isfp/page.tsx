import type { Metadata } from 'next';
import Link from 'next/link';
import { Info, Palette, Sparkles } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleAffiliateRecommendation from '@/components/ArticleAffiliateRecommendation';

export const metadata: Metadata = {
    title: 'ISFP（冒険家）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ISFPの恋愛傾向を、感性の強さ、やさしさの出方、傷つきやすい場面、関係を守るコツまで整理します。',
    alternates: {
        canonical: '/articles/isfp',
    },
};

export default function ISFPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-rose-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="ISFP（冒険家）の性格・恋愛傾向を解説 | AI Love Matcher"
                description="ISFPの恋愛傾向を、感性の強さ、やさしさの出方、傷つきやすい場面、関係を守るコツまで整理します。"
                slug="isfp"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 to-rose-400 h-32 flex items-center justify-center">
                    <Palette className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Breadcrumb items={[{ label: "記事一覧", href: "/articles" }, { label: "ISFP（冒険家）の性格・恋愛傾向を解説" }]} />

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ISFP（冒険家）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-rose-500 mt-3 font-medium">感性が豊かな人が、恋愛で静かに守りたいもの</span>
                    </h1>

                    <div className="prose prose-rose max-w-none text-gray-700">
                        <section className="bg-rose-50 p-6 rounded-2xl border border-rose-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-rose-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-rose-700">
                                <li>ISFPは、自分の感覚や価値観に正直で、やさしさや好意を行動の空気感で示しやすいタイプです。</li>
                                <li>恋愛では、安心できる距離感、否定されない感性、無理をしなくていい空気を大切にします。</li>
                                <li>穏やかに見えても傷つきやすい面があり、強い言葉や雑な扱いには静かに距離を取ることがあります。</li>
                                <li>派手な演出より、自分の好みやペースを丁寧に扱ってくれる相手だと心を開きやすくなります。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">1. ISFPの基本性格: 言葉より感触で世界を見ている</h2>
                            <p className="mb-6 leading-relaxed">
                                ISFPは、理屈よりも「自分がどう感じるか」を大切にしやすいタイプです。空気、色、音、手触り、人の雰囲気など、言語化しにくい情報を自然に受け取っていて、その感覚が判断の軸になりやすい傾向があります。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                そのため、押しつけの強い環境や、正しさばかりを求められる関係では疲れやすくなります。目立ちたがりではなくても、自分の大事な感性やペースを守れる場所では、かなりやわらかく魅力的な存在になりやすいです。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">ISFPが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>控えめでも、何も感じていないわけではない</li>
                                    <li>争いを避けても、譲れない価値観はしっかり持っている</li>
                                    <li>自由そうに見えても、信頼した相手への情は深い</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">2. ISFPが恋愛で大切にしやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                ISFPは、恋愛でも「この人といると落ち着くか」「気を張らずにいられるか」をよく見ています。言葉の量や大きな約束より、会っているときの空気、やり取りのやわらかさ、雑に扱われていない感覚が重要です。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-rose-100 rounded-xl p-4">
                                    <h3 className="font-bold text-rose-700 mb-2">感性の尊重</h3>
                                    <p className="text-sm mb-0">好きなものや違和感を否定されない関係だと、安心して本音を出しやすくなります。</p>
                                </div>
                                <div className="border border-rose-100 rounded-xl p-4">
                                    <h3 className="font-bold text-rose-700 mb-2">静かな安心感</h3>
                                    <p className="text-sm mb-0">一緒にいて無理に盛り上がらなくても心地よい相手を好みやすいタイプです。</p>
                                </div>
                                <div className="border border-rose-100 rounded-xl p-4">
                                    <h3 className="font-bold text-rose-700 mb-2">細やかな気づき</h3>
                                    <p className="text-sm mb-0">派手さより、自分の好きなことを覚えていてくれるような観察の深さに惹かれます。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ISFPが本気になりやすいのは、自分の世界を乱暴に開かせようとせず、やさしく近づいてくれる相手です。安心していられると、言葉少なでもかなり一途に関係を守ろうとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">傷ついてもその場で言いにくい</h3>
                                    <p className="text-sm mb-0">
                                        ISFPは場を荒立てたくない気持ちがあり、不快でもすぐ言葉にしないことがあります。そのまま距離があいてから問題が見えるケースもあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">強い言い方に閉じやすい</h3>
                                    <p className="text-sm mb-0">
                                        正論であっても、強い圧や批判が続くと気持ちが縮こまりやすいです。反論しないから納得している、というわけではありません。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">気まぐれに見えて、実は調整中</h3>
                                    <p className="text-sm mb-0">
                                        ひとりになりたがる時期や反応の波は、気持ちが冷めたというより、自分の感覚を整え直している時間であることがあります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">4. ラブキャラ診断で見るISFP</h2>
                            <p className="mb-6 leading-relaxed">
                                ISFPは、当サイトのラブキャラでは「聖母（LACE）」や「忠犬ハチ公（FCPE）」として説明しやすい場面があります。前者は受け止めるやさしさ、後者は信頼した相手への一途さを表すイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                                    <h3 className="text-lg font-bold text-rose-800 mb-2">聖母（LACE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        相手を強く変えようとせず、ありのままを受け止める力が出るパターンです。穏やかな空気で相手を安心させる魅力として表れやすくなります。
                                    </p>
                                </div>
                                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                                    <h3 className="text-lg font-bold text-yellow-800 mb-2">忠犬ハチ公（FCPE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        心を許した相手への忠誠心や、静かな献身が強く出るイメージです。大げさではなくても、関係そのものを大切に守ろうとする姿勢が出やすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">5. ISFPと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-rose-700">1. まず否定せずに受け取る</span>
                                    <p className="text-sm mt-2 mb-0">考え方や好みが違っても、最初から評価しない姿勢があるとISFPは安心しやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-rose-700">2. 言葉以外のサインにも目を向ける</span>
                                    <p className="text-sm mt-2 mb-0">表情、距離感、選ぶ行動の変化に気づけると、すれ違いを早めに防ぎやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-rose-700">3. ペースを急かしすぎない</span>
                                    <p className="text-sm mt-2 mb-0">答えや本音をすぐ求めるより、安心できる流れの中で話せる方が関係は安定しやすいです。</p>
                                </li>
                            </ol>

                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-10">
                                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    ISFPに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-amber-900 list-disc list-inside mb-0">
                                    <li>好みや感性を「意味がない」と切り捨てること</li>
                                    <li>強い口調で本音を急かすこと</li>
                                    <li>人前で恥をかかせること</li>
                                    <li>静かな時間を拒絶や冷たさと決めつけること</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">6. よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">Q. ISFPは恋愛に消極的なタイプですか？</h3>
                                    <p className="text-sm mb-0">言葉で積極的にアプローチするのは得意ではない傾向がありますが、行動や態度でさりげなく好意を示すことが多いです。自分の感覚を大切にするタイプなので、無理に押すより自然な流れの中で距離を縮めようとしやすいです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">Q. ISFPと相性が良いのはどのタイプですか？</h3>
                                    <p className="text-sm mb-0">ENFJやESTJなど、ISFPの感性を尊重しつつ安定感を提供してくれるタイプと相性が良いとされます。ただし、相性はMBTIだけでは分かりません。Love Characterで感情表現のスタイルや安心ポイントまで確認すると、より実感に合った判断がしやすくなります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">Q. ISFPが不満を溜め込んでいるか見分けるには？</h3>
                                    <p className="text-sm mb-0">ISFPは言葉より先に態度に変化が出やすいタイプです。返事が短くなる、一緒にいる時間を減らそうとするなどの変化が見られたら、問い詰めるのではなく「最近どう？」と穏やかに聞いてみると、本音を話しやすくなる傾向があります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">Q. ISFPとの会話が続かないと感じたら？</h3>
                                    <p className="text-sm mb-0">ISFPは抽象的な議論より、五感に訴える体験や具体的な話題の方が乗りやすい傾向があります。一緒に何かを体験したり、好きなものについて語ってもらう形の方が、言葉のやり取りだけよりも自然にコミュニケーションが深まりやすいです。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">ISFPと相性が取りやすいタイプ</h2>
                            <p className="mb-6 leading-relaxed">
                                ISFPは、感性や個性を否定されない安心感の中で関係を深めやすいタイプです。自分のペースを尊重してくれながら、温かみのあるやり取りができる相手との組み合わせが合いやすいとされています。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <Link href="/articles/enfj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
                                    <h3 className="font-bold text-yellow-700 mb-2 group-hover:text-yellow-800">ENFJ</h3>
                                    <p className="text-sm text-gray-600">ISFPの感性や個性を丁寧に尊重するENFJとは、否定されない安心感の中で関係が深まりやすいです。ENFJの包容力がISFPの内面を引き出してくれることがあります。</p>
                                    <span className="text-xs text-yellow-600 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/esfj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
                                    <h3 className="font-bold text-yellow-700 mb-2 group-hover:text-yellow-800">ESFJ</h3>
                                    <p className="text-sm text-gray-600">感情を大切にする傾向が共通しており、日常の中で温かみのある関係を築きやすいです。ESFJの社交性がISFPをさりげなくサポートする形になりやすいです。</p>
                                    <span className="text-xs text-yellow-600 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/estp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
                                    <h3 className="font-bold text-yellow-700 mb-2 group-hover:text-yellow-800">ESTP</h3>
                                    <p className="text-sm text-gray-600">ISFPの感性とESTPのアクティブさが組み合わさると、日常に刺激が生まれやすい関係です。互いの行動力と感性が補い合う形になりやすいです。</p>
                                    <span className="text-xs text-yellow-600 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                相性はMBTIだけで決まるわけではありません。ラブタイプや価値観の共有度によっても大きく変わります。気になる相手がいれば、<Link href="/diagnosis" className="text-teal-600 hover:underline font-medium">相性診断</Link>で組み合わせを確認してみてください。
                            </p>
                        </section>

                        <section className="bg-gradient-to-br from-yellow-400 to-rose-400 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">感性を守る恋の条件を知る</h2>
                            <p className="mb-8 font-medium">
                                ISFPらしいやさしさや、<br />
                                傷つきやすい場面を診断で整理できます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-rose-500 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
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
