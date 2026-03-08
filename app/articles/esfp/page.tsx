import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Info, PartyPopper, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'ESFP（エンターテイナー）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ESFPの恋愛傾向を、明るさの裏の繊細さ、好意の伝え方、反応を重視する理由、長続きのコツまで整理します。',
    alternates: {
        canonical: '/articles/esfp',
    },
};

export default function ESFPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-yellow-400 h-32 flex items-center justify-center">
                    <PartyPopper className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ESFP（エンターテイナー）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-pink-600 mt-3 font-medium">明るく見える人が、恋愛でちゃんと受け取ってほしいもの</span>
                    </h1>

                    <div className="prose prose-pink max-w-none text-gray-700">
                        <section className="bg-pink-50 p-6 rounded-2xl border border-pink-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-pink-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-pink-700">
                                <li>ESFPは、目の前の人を楽しませたり、場を明るくしたりする力が強いタイプです。</li>
                                <li>恋愛では、反応の良さ、一緒に体験を楽しめること、感情を素直に共有できることを重視しやすくなります。</li>
                                <li>明るさの裏では意外と傷つきやすく、自分の表現が雑に扱われると急にしぼみやすい面があります。</li>
                                <li>ちゃんと喜んでくれる相手、楽しさだけでなく弱い時期も受け止めてくれる相手だと長続きしやすいです。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">1. ESFPの基本性格: いま目の前にある温度に強い</h2>
                            <p className="mb-6 leading-relaxed">
                                ESFPは、その場の空気や相手の反応をすばやく感じ取り、場を盛り上げたり、和らげたりするのが得意なタイプです。難しく考えすぎるより、まず動いてみる、試してみるという行動力があり、人からは華やかで親しみやすい印象を持たれやすいでしょう。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                ただし、ただノリがいいだけではなく、相手が楽しんでいるか、喜んでくれているかをかなり見ています。表現が明るいぶん、反応が薄い相手や冷たい空気には想像以上に傷つきやすい面があります。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">ESFPが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>社交的でも、雑に扱われると一気に引きやすい</li>
                                    <li>明るいからといって、悩みが浅いわけではない</li>
                                    <li>勢いで動いているように見えても、相手の反応はよく見ている</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">2. ESFPが恋愛で大切にしやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                ESFPは、恋愛においても「一緒にいて楽しいか」「気持ちがちゃんと返ってくるか」をかなり大切にします。大げさな理想より、会っている時間の楽しさや、感情がちゃんと循環している実感があるかどうかが重要です。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-pink-100 rounded-xl p-4">
                                    <h3 className="font-bold text-pink-700 mb-2">反応の良さ</h3>
                                    <p className="text-sm mb-0">自分の気遣いや表現に反応が返ると、ESFPは安心して愛情を出しやすくなります。</p>
                                </div>
                                <div className="border border-pink-100 rounded-xl p-4">
                                    <h3 className="font-bold text-pink-700 mb-2">体験の共有</h3>
                                    <p className="text-sm mb-0">会話だけでなく、外出やイベントなど一緒に楽しめる時間に価値を感じやすいです。</p>
                                </div>
                                <div className="border border-pink-100 rounded-xl p-4">
                                    <h3 className="font-bold text-pink-700 mb-2">感情の素直さ</h3>
                                    <p className="text-sm mb-0">駆け引きより、嬉しい・寂しいを自然に言い合える関係の方が合いやすいタイプです。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ESFPが本気になりやすいのは、楽しさを共有できるだけでなく、自分が落ちている日でも空気を変えずにいてくれる相手です。盛り上がる時間と落ち着く時間の両方を持てる関係はかなり強いです。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-pink-700 mb-2">反応が薄いと一気に不安になる</h3>
                                    <p className="text-sm mb-0">
                                        ESFPは相手の表情や返事をよく見ています。気持ちが返ってこない感覚が続くと、「自分だけが頑張っている」と感じやすくなります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-pink-700 mb-2">勢いが軽さに見られやすい</h3>
                                    <p className="text-sm mb-0">
                                        ノリよく関われるぶん、真剣さがないと誤解されることがあります。本人は本気でも、言葉や行動の速さが軽く見える場面があります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-pink-700 mb-2">落ち込む時期を見せにくい</h3>
                                    <p className="text-sm mb-0">
                                        普段明るい人ほど、弱ったときにその差が大きくなります。元気役を期待され続けると、ひとりで抱え込みやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">4. ラブキャラ診断で見るESFP</h2>
                            <p className="mb-6 leading-relaxed">
                                ESFPは、当サイトのラブキャラでは「ロマンスマジシャン（FCRO）」や「聖母（LACE）」として説明しやすい場面があります。前者は場を惹きつける魅力、後者は相手を丸ごと明るく包むやさしさとして出やすいイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
                                    <h3 className="text-lg font-bold text-pink-800 mb-2">ロマンスマジシャン（FCRO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        出会った瞬間の空気づくりや、相手を楽しませる演出力が強く出るパターンです。華やかさだけでなく、相手の反応を見ながら距離を縮める器用さも含まれます。
                                    </p>
                                </div>
                                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                                    <h3 className="text-lg font-bold text-yellow-800 mb-2">聖母（LACE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        明るさの奥にある受容力が出るイメージです。相手の気分が落ちているときにも前向きさを押しつけず、そばで温度を上げてくれる魅力として現れます。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">5. ESFPと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-pink-700">1. 喜びや感謝を表情と言葉で返す</span>
                                    <p className="text-sm mt-2 mb-0">受け取った気持ちをきちんと返すことで、ESFPは安心して関われるようになります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-pink-700">2. 一緒に楽しむ時間を意識して作る</span>
                                    <p className="text-sm mt-2 mb-0">特別なイベントでなくても、共通体験があるほど関係の温度は上がりやすいです。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-pink-700">3. 元気な日だけで判断しない</span>
                                    <p className="text-sm mt-2 mb-0">落ちている時期も自然に扱えると、ESFPはかなり深く信頼しやすくなります。</p>
                                </li>
                            </ol>

                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-10">
                                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    ESFPに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-amber-900 list-disc list-inside mb-0">
                                    <li>反応をほとんど返さず、気持ちを受け取らないこと</li>
                                    <li>表現の大きさを「軽い」で片づけること</li>
                                    <li>楽しさを与える役だけを期待すること</li>
                                    <li>人前で感性やテンションを茶化すこと</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-pink-600 to-yellow-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">楽しさと繊細さの両方を整理する</h2>
                            <p className="mb-8 font-medium">
                                ESFPらしい愛情表現や、<br />
                                傷つきやすい場面を診断で見直せます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-pink-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
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
