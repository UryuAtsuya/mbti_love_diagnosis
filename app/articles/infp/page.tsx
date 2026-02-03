import Link from 'next/link';
import { ArrowLeft, Heart, Sparkles, BookOpen, MessageCircle } from 'lucide-react';

export default function INFPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Header Image/Banner placeholder style */}
                <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-32 flex items-center justify-center">
                    <Sparkles className="text-white w-12 h-12 animate-pulse" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【完全版】INFP（仲介者）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-teal-600 mt-3 font-medium">～感受性豊かな理想主義者が掴む、最高の幸せとは～</span>
                    </h1>

                    <div className="prose prose-teal max-w-none text-gray-700">
                        {/* Summary Section */}
                        <section className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-teal-800 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 mr-2" />
                                3分でわかる！INFPの重要ポイント
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-teal-700">
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-2">●</span>
                                    <span><span className="font-bold">基本性格：</span> 強固な内的価値観を持ち、自分らしさを何よりも大切にする芸術家肌。</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-2">●</span>
                                    <span><span className="font-bold">恋愛観：</span> 「運命の赤い糸」を信じるロマンチスト。魂の深い繋がりを求めます。</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-2">●</span>
                                    <span><span className="font-bold">ラブキャラ：</span> 包容力の塊<span className="font-bold">「マザーテレサ（FAPE）」</span>や、神秘的な<span className="font-bold">「謎の生命体（FARO）」</span>の資質。</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-500 mr-2">●</span>
                                    <span><span className="font-bold">攻略の鍵：</span> 否定せずに共感し、彼らの豊かな想像力（世界観）の一部になること。</span>
                                </li>
                            </ul>
                        </section>

                        {/* Content Body */}
                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">1. INFP（仲介者）の基本性格と「生きづらさ」の正体</h2>
                        <p className="mb-6 leading-relaxed">
                            INFPは「仲介者」という名称の通り、調和と理想を大切にするタイプです。しかし、彼らの内面は名前に反して、猛烈に燃え盛る情熱と、誰にも踏み込めないほど繊細な聖域で構成されています。<br /><br />
                            彼らがしばしば「社会で生きづらさ」を感じるのは、効率や論理が優先される現代において、<span className="font-bold text-teal-600">「自分の価値観に嘘をつけない」</span>という純粋すぎる性質を持っているからです。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-8">
                            <h3 className="text-lg font-bold text-gray-800 mb-3">INFPの強みと隠れた才能</h3>
                            <ul className="space-y-2 text-sm">
                                <li>✨ <span className="font-bold">圧倒的な共感力：</span> 言葉にできない相手の感情を、自分のことのように感じ取ることができます。</li>
                                <li>🎨 <span className="font-bold">クリエイティビティ：</span> 独自の視点で世界を捉え、表現する力を持っています。</li>
                                <li>🌱 <span className="font-bold">成長への意欲：</span> 自己の内面を深く掘り下げ、より良い人間であろうと努力し続けます。</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">2. 恋愛の「傾向」と「地雷」：ロマンチストの苦悩</h2>
                        <p className="mb-6">
                            INFPの恋愛は、常に「深さ」を追求します。表面的な外見や条件よりも、相手の魂の色、言葉の裏にある深い意味に惹かれます。<br /><br />
                            一度心を許した相手には、驚くほどの献身を見せますが、一方で<span className="font-bold text-red-500">「理想の押し付け」</span>という落とし穴にはまりやすい側面もあります。
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="border border-teal-100 p-5 rounded-2xl bg-white shadow-sm">
                                <h3 className="font-bold text-teal-600 flex items-center mb-2">
                                    <Heart className="w-4 h-4 mr-2" />
                                    惹かれるポイント
                                </h3>
                                <p className="text-sm">誠実さ、優しさ、自分の世界観を尊重してくれる寛容さ。そして、何かに情熱を持って取り組んでいる姿。</p>
                            </div>
                            <div className="border border-red-100 p-5 rounded-2xl bg-white shadow-sm">
                                <h3 className="font-bold text-red-500 flex items-center mb-2">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    やってはいけないNG行動
                                </h3>
                                <p className="text-sm">価値観を否定する、デリカシーのない言動、急かしすぎる、一人の時間を奪う。これらは致命的なダメージになります。</p>
                            </div>
                        </div>

                        {/* Love Character Analysis */}
                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">3. ラブキャラ診断で見るINFP：愛の求道者</h2>
                        <p className="mb-6">当サイト独自の「ラブキャラ64」で分析すると、INFPの核心が見えてきます。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <h3 className="text-lg font-bold text-emerald-800 mb-2">最後の恋人（FAPE）</h3>
                                <p className="text-sm leading-relaxed">
                                    INFPの究極の進化形とも言えるキャラクター。無償の愛、圧倒的な寛容さ、そして相手にすべてを委ねる潔さを持っています。周囲からは「マザーテレサのような人」と評されることも多く、その深い愛に救われる人は少なくありません。
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-800 mb-2">謎の生命体（FARO）</h3>
                                <p className="text-sm leading-relaxed">
                                    自分の世界に入り込んでいる時のINFP。他人には理解できない独自の美学や趣味を大切にしており、その「掴みどころのなさ」が最大の魅力となります。理解しようとするよりも、そのままを受け入れてくれる人を好みます。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">4. 実践レシピ：INFPと幸せな関係を築くために</h2>
                        <div className="space-y-4 mb-10">
                            <p className="leading-relaxed">
                                INFPとの関係を長続きさせるキーワードは<span className="font-bold text-teal-600">「ペース配分」と「肯定」</span>です。彼らは感情の波が大きく、一人で内省する時間があって初めてバランスを保てます。<br /><br />
                                彼らが何かを伝えてくれた時は、論理的な正論は一度横に置き、まずは「そう感じたんだね」と受け止めるだけで、彼らの中でのあなたの信頼度は不動のものになるでしょう。
                            </p>
                        </div>

                        {/* CTA Section */}
                        <section className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                                <Sparkles className="text-teal-400" />
                                あなたの内的宇宙を解き明かそう
                            </h2>
                            <p className="mb-8 text-gray-300">
                                INFPの深い精神性を活かした、あなただけの「恋愛戦略」がここにあります。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-teal-400 text-gray-900 font-black py-5 px-10 rounded-full hover:bg-teal-300 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-400/20">
                                詳細な相性診断を受ける
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-500 flex justify-between items-center">
                    <span>© AI Love Matcher Editorial Team</span>
                    <span>監修：心理分析エキスパート</span>
                </div>
            </div>
        </main>
    );
}
