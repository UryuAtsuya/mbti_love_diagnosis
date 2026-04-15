import type { Metadata } from 'next';
import Link from 'next/link';
import { Info, Sparkles, Sun } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'ENFJ（主人公）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ENFJの恋愛傾向を、支え方、背負い込みやすい場面、相性を見る視点、関係を安定させるコツまで整理します。',
    alternates: {
        canonical: '/articles/enfj',
    },
};

export default function ENFJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="ENFJ（主人公）の性格・恋愛傾向を解説 | AI Love Matcher"
                description="ENFJの恋愛傾向を、支え方、背負い込みやすい場面、相性を見る視点、関係を安定させるコツまで整理します。"
                slug="enfj"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-400 h-32 flex items-center justify-center">
                    <Sun className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Breadcrumb items={[{ label: "記事一覧", href: "/articles" }, { label: "ENFJ（主人公）の性格・恋愛傾向を解説" }]} />

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ENFJ（主人公）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-orange-600 mt-3 font-medium">人を支える力が強い人が、恋愛で背負い込みやすいもの</span>
                    </h1>

                    <div className="prose prose-orange max-w-none text-gray-700">
                        <section className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-orange-700">
                                <li>ENFJは、人の気持ちや場の空気を読みながら、関係を前向きに育てようとしやすいタイプです。</li>
                                <li>恋愛では「一緒に良くなっていける感覚」と「感謝がちゃんと返ってくること」を重視します。</li>
                                <li>頼れる印象が強い反面、無理をしていても表に出しにくく、気づいたときには疲れ切っていることがあります。</li>
                                <li>気持ちを受け取ってくれる相手、弱さも見せていいと思える相手だと関係が安定しやすくなります。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">1. ENFJの基本性格: 人を動かす前に、人を気にかけている</h2>
                            <p className="mb-6 leading-relaxed">
                                ENFJは、周囲の人の状態をよく見ていて、必要そうな声かけや働きかけを自然に行いやすいタイプです。場を明るくする力や、誰かを励ます力が強いため、周囲からは頼れる人、面倒見のいい人として見られやすいでしょう。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                ただし、その親しみやすさの裏では、相手の気持ちや関係の流れをかなり細かく見ています。人を支えるのが得意な一方で、自分がしんどいときに助けを求めるのは遅れやすく、「平気そうに見えるのに実は消耗していた」ということも起こりやすいです。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">ENFJが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>社交的でも、誰にでも同じ深さで心を開いているわけではない</li>
                                    <li>前向きに見えても、相手の反応にはかなり敏感</li>
                                    <li>面倒見がいいぶん、自分の限界を後回しにしやすい</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">2. ENFJが恋愛で大切にしやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                ENFJは、ただ一緒にいて楽しいかどうかだけでなく、この関係が互いにとって良いものになっているかをよく見ています。相手を支えたい気持ちが強いので、自分の思いや行動がちゃんと届いているか、感謝や信頼が返ってくるかをかなり重視します。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-orange-100 rounded-xl p-4">
                                    <h3 className="font-bold text-orange-700 mb-2">成長の実感</h3>
                                    <p className="text-sm mb-0">二人で前に進んでいる感覚があると、ENFJは関係に強くコミットしやすくなります。</p>
                                </div>
                                <div className="border border-orange-100 rounded-xl p-4">
                                    <h3 className="font-bold text-orange-700 mb-2">感謝の循環</h3>
                                    <p className="text-sm mb-0">尽くすこと自体は苦ではありませんが、受け取られていない感覚が続くと消耗しやすくなります。</p>
                                </div>
                                <div className="border border-orange-100 rounded-xl p-4">
                                    <h3 className="font-bold text-orange-700 mb-2">本音を出せる安心</h3>
                                    <p className="text-sm mb-0">明るさや強さだけでなく、弱音も見せていい関係だと長続きしやすいです。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ENFJが本気になりやすいのは、自分のやさしさを当然扱いせず、心配や努力まで見てくれる相手です。支える側でいることが多いからこそ、自分も安心して預けられる感覚が大きな意味を持ちます。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">頑張りすぎてから急に疲れる</h3>
                                    <p className="text-sm mb-0">
                                        相手のために動けてしまうぶん、違和感があっても後回しにしやすいタイプです。気づいたときには余裕がなくなり、急に距離を置きたくなることがあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">反応の薄さを拒絶と受け取りやすい</h3>
                                    <p className="text-sm mb-0">
                                        ENFJは相手の反応をよく見ています。感謝や共感が極端に少ない相手だと、嫌われているのではなくても「大事にされていない」と感じやすくなります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">相手を立てすぎて本音が遅れる</h3>
                                    <p className="text-sm mb-0">
                                        雰囲気を壊したくない気持ちから、自分の不満を整えてから話そうとしがちです。結果として、小さな違和感が後から大きくなりやすい面があります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">4. ラブキャラ診断で見るENFJ</h2>
                            <p className="mb-6 leading-relaxed">
                                ENFJは、当サイトのラブキャラでは「忠犬ハチ公（FCPE）」や「キャプテンライオン（LAPE）」として説明しやすい場面があります。前者は相手への献身、後者は周囲を引っ張る包容力として出やすいイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-800 mb-2">忠犬ハチ公（FCPE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        好きな相手の期待に応えたい気持ちが強く出ると、かなり献身的に動きます。やさしさだけでなく「期待を裏切りたくない責任感」として表れやすいのが特徴です。
                                    </p>
                                </div>
                                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                                    <h3 className="text-lg font-bold text-yellow-800 mb-2">キャプテンライオン（LAPE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        相手を励まし、方向づけし、必要なときに前に出る力が強く出るパターンです。頼もしさになる一方で、自分ひとりで抱え込みすぎると疲れやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">5. ENFJと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-orange-700">1. 気遣いを受け取ったら、言葉で返す</span>
                                    <p className="text-sm mt-2 mb-0">小さなことでも反応が返ると、ENFJは安心して関わり続けやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-orange-700">2. 強い面だけでなく、疲れにも目を向ける</span>
                                    <p className="text-sm mt-2 mb-0">頼れるからと任せきりにせず、「今日は休んでいいよ」と言える相手が合いやすいです。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-orange-700">3. 建設的に本音を話せる空気を作る</span>
                                    <p className="text-sm mt-2 mb-0">否定し合うのではなく、改善できる前提で話せると、ENFJは本音を出しやすくなります。</p>
                                </li>
                            </ol>

                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-10">
                                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    ENFJに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-amber-900 list-disc list-inside mb-0">
                                    <li>気遣いを当然のものとして受け取ること</li>
                                    <li>相談だけを持ち込み、支え返す姿勢がないこと</li>
                                    <li>人前で雑に否定したり、軽く扱ったりすること</li>
                                    <li>「明るい人だから平気」と決めつけること</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">6. よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">Q. ENFJは恋愛に消極的なタイプですか？</h3>
                                    <p className="text-sm mb-0">むしろ積極的に関わろうとする傾向があります。ただし、相手のために動きすぎて自分の気持ちを後回しにしやすい面もあります。尽くすことが自然にできるタイプですが、その分だけ疲れを溜めやすい点に注意が必要です。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">Q. ENFJと相性が良いのはどのタイプですか？</h3>
                                    <p className="text-sm mb-0">INFPやISFPなど、ENFJの気遣いに気づいて感謝を返してくれるタイプと安定しやすいとされます。ただし、MBTIだけで相性は決まりません。Love Characterで愛情の出し方や受け取り方まで見ると、よりフィットする相手が分かりやすくなります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">Q. ENFJが尽くしすぎて疲れるのを防ぐには？</h3>
                                    <p className="text-sm mb-0">ENFJは相手の期待に応えようとする力が強いため、意識的に「自分のための時間」を確保することが大切です。パートナー側も、ENFJの頑張りを当たり前にせず、こまめに言葉で感謝を返すことで負担が軽減されやすくなります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-orange-700 mb-2">Q. ENFJが本音を言ってくれないと感じたらどうすればいい？</h3>
                                    <p className="text-sm mb-0">ENFJは場の雰囲気を壊したくないという気持ちが強く、不満があっても飲み込んでしまうことがあります。「何でも言っていいよ」と伝えるだけでなく、批判されても受け止める姿勢を見せることで、少しずつ本音を出しやすくなります。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">ENFJと相性が取りやすいタイプ</h2>
                            <p className="mb-6 leading-relaxed">
                                ENFJは、相手を支え導くことに自然に力を発揮するタイプです。自分が包み込む力を安心して使えるよう、感情を素直に受け取ってくれる相手との組み合わせが安定しやすい傾向があります。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <Link href="/articles/infp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-orange-50 hover:border-orange-200 transition-all">
                                    <h3 className="font-bold text-orange-700 mb-2 group-hover:text-orange-800">INFP</h3>
                                    <p className="text-sm text-gray-600">INFPの豊かな内面をENFJが引き出す形になりやすく、気持ちの共有を大切にする点が一致しています。ENFJにとってもINFPの深い共感が心の支えになりやすい関係です。</p>
                                    <span className="text-xs text-orange-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/isfp" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-orange-50 hover:border-orange-200 transition-all">
                                    <h3 className="font-bold text-orange-700 mb-2 group-hover:text-orange-800">ISFP</h3>
                                    <p className="text-sm text-gray-600">ISFPの感性の豊かさをENFJが自然に尊重する形になりやすいです。ENFJの包容力とISFPの個性が調和すると、互いに居心地の良い関係が生まれやすいです。</p>
                                    <span className="text-xs text-orange-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/infj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-orange-50 hover:border-orange-200 transition-all">
                                    <h3 className="font-bold text-orange-700 mb-2 group-hover:text-orange-800">INFJ</h3>
                                    <p className="text-sm text-gray-600">価値観の深い部分で共鳴しやすく、気持ちのやり取りがしやすい組み合わせです。どちらも相手を理解することを大切にするため、すれ違いが少ない傾向があります。</p>
                                    <span className="text-xs text-orange-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                相性はMBTIだけで決まるわけではありません。ラブタイプや価値観の共有度によっても大きく変わります。気になる相手がいれば、<Link href="/diagnosis" className="text-teal-600 hover:underline font-medium">相性診断</Link>で組み合わせを確認してみてください。
                            </p>
                        </section>

                        <section className="bg-gradient-to-br from-orange-500 to-yellow-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">支える恋のクセを整理する</h2>
                            <p className="mb-8 font-medium">
                                ENFJらしい尽くし方や、<br />
                                背負い込みやすい場面を診断で見直せます。
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
