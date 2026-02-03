import Link from 'next/link';
import { ArrowLeft, Sparkles, Heart, Zap, MessageCircle, AlertCircle } from 'lucide-react';

export default function ENFPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-teal-400 to-pink-400 h-32 flex items-center justify-center">
                    <Zap className="text-white w-12 h-12 animate-pulse" />
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
                        【決定版】ENFP（広報運動家）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-pink-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、自由と情熱の「冒険譚」～</span>
                    </h1>

                    <div className="prose prose-teal max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-pink-50 p-6 rounded-2xl border border-pink-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-pink-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-pink-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 好奇心旺盛で、周囲を明るく照らすエネルギッシュな冒険家。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 運命を信じ、ドラマチックな展開と「共に成長できる関係」を追求。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 自由奔放な「デビルエンジェル（FAPO）」や、情熱的な「主人公タイプ（LCPO）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 可能性を共に楽しみ、彼らの「自由な翼」を守る寛容さを見せる。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">1. ENFP（広報運動家）という「無限の可能性」の体現者</h2>
                        <p className="mb-6 leading-relaxed">
                            ENFP（広報運動家）は、退屈な日常をワクワクする冒険へと変えてしまう魔法使いのような存在です。彼らの視線は常に「今ここ」ではなく「何が起こり得るか」という未来の可能性に向けられています。<br /><br />
                            彼らにとって人生とは、未発見の宝物を探す旅そのもの。高いコミュニケーション能力と直感力を駆使して、人々の心を動かし、新しい世界を切り拓いていくパイオニアなのです。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ENFPが持つ「光と影」</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-white rounded-lg border border-gray-100">
                                    <span className="font-bold text-pink-600 block mb-1">底なしの楽観性と繊細さ</span>
                                    <p>明るく悩みがないように見えて、実は他人の批判や不調和に誰よりも敏感。夜一人で深く落ち込むこともあります。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-100">
                                    <span className="font-bold text-pink-600 block mb-1">多才ゆえの「飽き性」</span>
                                    <p>興味が次々と移るため、一つのことを継続するのが苦手。恋愛においてもマンネリが最大の敵となります。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">2. 恋愛傾向：運命を加速させる「熱量の魔法」</h2>
                        <p className="mb-6 leading-relaxed">
                            ENFPの恋愛は、まさにジェットコースターです。「運命の人に出会った！」と感じた瞬間の爆発的なアプローチは、相手を驚かせることもありますが、その純粋な情熱に抗える人は多くありません。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ENFPが「本気」になる相手の条件</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold underline decoration-pink-300 decoration-4">自分の価値観を面白がってくれる：</span>
                                    <p className="text-sm mt-1">突飛なアイデアや未来の話を、「面白いね！」と笑い飛ばさず受け入れてくれる安心感を求めます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold underline decoration-pink-300 decoration-4">自立した「自分」を持っている：</span>
                                    <p className="text-sm mt-1">依存されるのを嫌うため、自分自身の趣味や目標に打ち込んでいる自立した人に惹かれます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold underline decoration-pink-300 decoration-4">束縛の気配がない：</span>
                                    <p className="text-sm mt-1">「これしなきゃダメだよ」という義務感を感じた瞬間、彼らの心の熱は急速に冷めてしまいます。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">3. ラブキャラ診断で見るENFP：感情のスペシャリスト</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ENFPの持つ「人を惹きつける力」の正体が明らかになります。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
                                <h3 className="text-lg font-bold text-pink-800 mb-2 flex items-center">
                                    <Zap className="w-4 h-4 mr-2" />
                                    デビルエンジェル（FAPO）
                                    <span className="text-xs ml-3 text-pink-500 bg-white px-2 py-0.5 rounded-full border border-pink-200">主な特徴</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-pink-900">
                                    天使のような明るさで近づいてきたかと思えば、突然自分の世界に戻って一人を謳歌する。その「予測不能な自由さ（PO）」が、相手を「もっと知りたい」と思わせる強力なスパイスになります。相手をリード（LA）するよりは、自分の楽しさに相手を巻き込む（FA）天才です。
                                </p>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center">
                                    <Heart className="w-4 h-4 mr-2" />
                                    主人公タイプ（LCPO）
                                    <span className="text-xs ml-3 text-orange-500 bg-white px-2 py-0.5 rounded-full border border-orange-200">隠れた顔</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-orange-900">
                                    恋愛においても「この物語の主役」でありたいという願望が強いENFP。ドラマチックな演出、サプライズ、ストレートな愛の言葉。これらを全力で提供し、相手にもそれを望む情熱的なリーダーシップを発揮します。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">4. 実習：ENFPと「一生飽きない」パートナーシップを築く術</h2>
                        <p className="mb-6 leading-relaxed">
                            ENFPのパートナーは、時にその移り変わりの早さに不安を感じるかもしれません。しかし、解決策はシンプルです。<span className="font-bold text-pink-600">「一緒に新しい遊びを開発し続けること」</span>です。<br /><br />
                            彼らにとって、変化は裏切りではなく「進化」です。新しいレストラン、新しい趣味、新しい旅行先……常に変化を取り入れ、「次は何をしようか？」とワクワクを共有し続けることが、彼らの心を繋ぎ止める最大の魔法となります。
                        </p>

                        <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-10">
                            <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                                <AlertCircle className="w-5 h-5 mr-2" />
                                これだけはNG！ENFPの地雷
                            </h3>
                            <ul className="text-sm space-y-2 text-red-900 list-disc list-inside">
                                <li>「普通はこうするでしょ」という常識の押し付け（彼らにとって死刑宣告に近い言葉です）。</li>
                                <li>スケジュールのガチガチな管理（その場のノリ＝直感を大切にするのが彼らの正義です）。</li>
                                <li>感情的な冷遇（「理由を言わず不機嫌になる」ことが最も不安を煽ります）。</li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-pink-500 to-rose-400 p-10 rounded-3xl text-center text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><Heart className="w-20 h-20" /></div>
                            <h2 className="text-2xl font-bold mb-4 relative z-10">あなたの「運命の歯車」を回そう</h2>
                            <p className="mb-8 font-medium relative z-10">
                                ENFPのあなたにぴったりの、<br />
                                「自由を尊重しつつ熱く愛してくれる相手」は誰？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-pink-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg relative z-10">
                                今すぐ相性診断を開始！
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-pink-300" />
                        <span>「この記事を読んでから、彼への見方が180度変わりました！」（30代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
