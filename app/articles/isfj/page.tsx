import Link from 'next/link';
import { ArrowLeft, Sparkles, Shield, Heart, MessageCircle, Home } from 'lucide-react';

export default function ISFJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-500 h-32 flex items-center justify-center">
                    <Shield className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】ISFJ（擁護者）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-emerald-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、献身と信頼の「安らぎ」～</span>
                    </h1>

                    <div className="prose prose-emerald max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-emerald-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 思慮深く忍耐強い「守り人」。他者のニーズを察し、細やかな配慮を絶やさない。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 安定と伝統を重んじ、一度結ばれた相手には一生涯の忠誠を誓う。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 期待に応える勇者「忠犬ハチ公（FCPE）」や、包容力の権化「憧れの先輩（LARO）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 日々の献身に気づき、感謝を言葉にすること。誠実さと「平凡な日常」の価値を共有する。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">1. ISFJ（擁護者）という「静かなる守護者」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ISFJ（擁護者）は、社会や家庭の調和を陰で支え続ける、現代の「騎士」のような存在です。彼らの行動原理は非常にシンプルで、「誰かの役に立ちたい、誰かを守りたい」という利他主義に基づいています。<br /><br />
                            非常に高い記憶力と観察力を持ち、相手の好物や些細な一言を何年も覚えていることも珍しくありません。目立つことよりも、自分の愛する人々が心地よく過ごせる環境を整えることに、何よりも深い幸福を感じるタイプです。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ISFJを支える3つの柱</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                                <div className="p-3 bg-white rounded-lg border border-emerald-100 text-center">
                                    <span className="font-bold text-emerald-600 block mb-1">徹底した責任感</span>
                                    <p>一度引き受けたことは最後までやり遂げる、驚異的な忍耐力を持っています。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-emerald-100 text-center">
                                    <span className="font-bold text-emerald-600 block mb-1">実用的な思いやり</span>
                                    <p>抽象的な言葉よりも、美味しい料理や掃除など、具体的な行動で愛を示します。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-emerald-100 text-center">
                                    <span className="font-bold text-emerald-600 block mb-1">変化への慎重さ</span>
                                    <p>「今ある幸せ」を大切にするため、急激な環境の変化には強い不安を感じやすいです。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">2. 恋愛傾向：100年の愛を、日々の「おやすみ」の中に</h2>
                        <p className="mb-6 leading-relaxed">
                            ISFJにとっての恋愛は「帰る場所」を作ることです。派手なデートやサプライズよりも、家で一緒に映画を見たり、一緒にスーパーへ買い出しに行ったりする「ありふれた日常」を共有することに価値を置きます。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ISFJが「一生一緒にいたい」と願う相手</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-emerald-200">礼儀正しく、誠実な人：</span>
                                    <p className="text-sm mt-1">言葉遣いやマナー、約束を守るといった「人としての基本」がしっかりしている人を深く信頼します。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-emerald-200">感謝を忘れない人：</span>
                                    <p className="text-sm mt-1">「やってくれて当たり前」と思わず、「いつもありがとう」と小まめに伝えてくれる相手のために、さらに尽くそうとします。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-emerald-200">安定した情緒を持つ人：</span>
                                    <p className="text-sm mt-1">波乱万丈な関係よりも、穏やかで安心できる関係を好みます。感情の起伏が激しい人とは長続きしにくい傾向があります。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">3. ラブキャラ診断で見るISFJ：究極の癒やし手</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ISFJの献身性の深さが解き明かされます。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <h3 className="text-lg font-bold text-emerald-800 mb-2 flex items-center">
                                    <Heart className="w-4 h-4 mr-2" />
                                    忠犬ハチ公（FCPE）
                                    <span className="text-xs ml-3 text-emerald-600 bg-white px-2 py-0.5 rounded-full border border-emerald-200">一途な献身</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-emerald-900">
                                    相手の喜ぶ顔が見たい一心で、全力でサポートする（FA）ISFJ。その甲斐甲斐しさはまさにハチ公そのもの。期待に応えたい（CE）という欲求が強く、パートナーにとってこれ以上ないほど「尽くしてくれる」存在になります。
                                </p>
                            </div>
                            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <h3 className="text-lg font-bold text-teal-800 mb-2 flex items-center">
                                    <Home className="w-4 h-4 mr-2" />
                                    憧れの先輩（LARO）
                                    <span className="text-xs ml-3 text-teal-600 bg-white px-2 py-0.5 rounded-full border border-teal-200">落ち着いた魅力</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-teal-900">
                                    自分のペースを崩さず（RO）、必要であればそっと手を差し伸べる（LA）ISFJ。その落ち着いた佇まいは、周囲に「この人がいれば大丈夫」という絶対的な安心感を与えます。安定した家庭を築くための最高のパートナーです。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">4. 実習：ISFJと「銀婚式」を目指すための処方箋</h2>
                        <p className="mb-6 leading-relaxed">
                            ISFJは不満があっても自分の中に溜め込んでしまう傾向があります。「相手に嫌われたくない」「波風を立てたくない」という思いが強いため、気づいた時には限界に達していることも。<br /><br />
                            ISFJのパートナーに必要なのは、<span className="font-bold text-emerald-600">「彼らがSOSを出す前に、その疲れに気づく鋭さ」</span>です。定期的に「最近疲れない？」「〇〇してくれて本当に助かってるよ」と言葉と態度で示してください。彼らの献身を当たり前のインフラだと思わないこと。それが、彼らの愛の炎を一生絶やさない唯一の方法です。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-emerald-600 to-teal-600 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">世界一の「安らぎ」を、データで導く</h2>
                            <p className="mb-8 font-medium">
                                ISFJのあなたの優しさを心から大切にし、<br />
                                共に幸せな家庭を築ける最高の相手を診断します。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-emerald-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                無料相性診断をスタート
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-300" />
                        <span>「私のことをそのまま書かれているようで驚きました。」（30代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
