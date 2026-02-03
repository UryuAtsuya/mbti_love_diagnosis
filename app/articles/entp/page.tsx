import Link from 'next/link';
import { ArrowLeft, Sparkles, Zap, Heart, MessageCircle, Lightbulb } from 'lucide-react';

export default function ENTPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-amber-600 to-orange-500 h-32 flex items-center justify-center">
                    <Zap className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】ENTP（討論者）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-amber-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、知性と好奇心の「遊戯的な愛」～</span>
                    </h1>

                    <div className="prose prose-amber max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-amber-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 常識を疑い、新しい可能性を追求する「知の冒険家」。持ち前のウィットと弁舌で周囲を煙に巻く。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 束縛を極端に嫌い、互いの脳を刺激し合える「対等なライバル」のような関係を好む。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 自由奔放な「ボス猫（LCRO）」や、鋭い洞察力の「カリスマバランサー（LARE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 否定ではなく「議論」で返すこと。彼らの突飛なアイデアを面白がる心の余裕を持つ。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-amber-500 pl-4 mb-6">1. ENTP（討論者）という「知的なトリックスター」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ENTP（討論者）は、16タイプの中で最も「変化」を愛するタイプです。現状維持は彼らにとって死を意味します。常に「もっと面白い方法はないか？」「なぜこれが正しいとされているのか？」と問い続け、既存の枠組みを壊して新しい価値を創造します。<br /><br />
                            その姿は時に不遜に見えることもありますが、本質は非常にピュアな知的好奇心。相手を批判したいのではなく、真理に近づくための「多角的な視点」を提示しているだけなのです。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ENTPが持つ「愛すべき矛盾」</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                    <span className="font-bold text-amber-600 block mb-1">深い思考と、飽き性の同居</span>
                                    <p>哲学的な議論には何時間でも没頭しますが、日常のルーティンや事務作業は数分で投げ出します。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                    <span className="font-bold text-amber-600 block mb-1">冷徹な分析と、無邪気な冒険心</span>
                                    <p>状況を鋭く分析しながら、最後には「面白そうだから」という直感で火の中に飛び込む危うさがあります。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-amber-500 pl-4 mb-6">2. 恋愛傾向：100回のデートより、1回の「脳内火花」</h2>
                        <p className="mb-6 leading-relaxed">
                            ENTPの恋愛を一言で言えば「知的なスリル」です。マンネリ化した付き合いを最も苦手とし、常に自分を驚かせてくれる、あるいは自分と渡り合える知性を持った相手を求めています。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ENTPが「飽きない」相手の条件</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-amber-200">「正論」に屈しない強さ：</span>
                                    <p className="text-sm mt-1">彼らが議論を吹っかけてきた際、泣いたり怒ったりするのではなく「それはこういう視点が抜けてるんじゃない？」と返せる相手に惚れ込みます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-amber-200">自立した「個」の尊重：</span>
                                    <p className="text-sm mt-1">お互いに別の趣味を持ち、一人の時間を楽しめる関係が理想。24時間一緒にいたいと言われると逃げ出したくなります。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">ユーモアのセンス：</span>
                                    <p className="text-sm mt-1">皮肉やジョークを理解し、高度な言葉遊びが楽しめるかどうかは、彼らにとって死活問題です。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-amber-500 pl-4 mb-6">3. ラブキャラ診断で見るENTP：変幻自在なエネルギー</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ENTPの「掴みどころのなさ」の正体が見えます。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <h3 className="text-lg font-bold text-amber-800 mb-2 flex items-center text-sm">
                                    <Lightbulb className="w-4 h-4 mr-2" />
                                    ボス猫（LCRO）
                                    <span className="text-xs ml-3 text-white bg-amber-500 px-2 py-0.5 rounded-full">独創的なカリスマ</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-amber-900">
                                    独自の感性（RO）で未来を見通し、周囲を惹きつける（LC）エネルギーを持つENTP。恋愛でも、相手を自分の世界に連れ去っていくような強引さと魅力があります。
                                </p>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center text-sm">
                                    <Zap className="w-4 h-4 mr-2" />
                                    カリスマバランサー（LARE）
                                    <span className="text-xs ml-3 text-white bg-orange-500 px-2 py-0.5 rounded-full">策略家のリーダー</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-orange-900">
                                    他人の心理を鋭く察知し（LA）、状況を冷静に俯瞰する（RE）力。このタイプが出会うと、相手の「落とし方」をゲームのように楽しみながら、完璧にエスコートする名軍師となります。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-amber-500 pl-4 mb-6">4. 実習：ENTPを「飽きさせない」究極の魔法</h2>
                        <p className="mb-6 leading-relaxed">
                            ENTPと長続きするための秘訣は、あなた自身が<span className="font-bold text-amber-600">「終わらない謎」であり続けること</span>です。<br /><br />
                            自分の底をすべて見せるのではなく、常に新しい学びや変化を彼らに見せてください。「あなたのことは全部わかってる」と言われた瞬間、彼らの興味は他へ移ってしまいます。逆に、「今日もこいつ、変なこと言ってるな（面白いな）」と思わせれば勝ちです。彼らの不規則で刺激的なペースを楽しみ、共に人生という名の巨大な実験場を遊び尽くしてください。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-amber-600 to-orange-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">知的なスリルを求める、あなたのための診断</h2>
                            <p className="mb-8 font-medium">
                                あなたの鋭すぎる発想についてこれて、<br />
                                唯一無二の「脳内火花」を散らしてくれる相手は？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-amber-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                スリル満点の相性診断へ
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-amber-300" />
                        <span>「議論が喧嘩にならない相手、やっと見つけた気がします。」（30代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
