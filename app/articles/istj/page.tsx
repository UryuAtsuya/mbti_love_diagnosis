import Link from 'next/link';
import { ArrowLeft, Sparkles, Briefcase, Heart, MessageCircle, Ruler } from 'lucide-react';

export default function ISTJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-slate-600 to-slate-400 h-32 flex items-center justify-center">
                    <Briefcase className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-slate-600 hover:text-slate-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】ISTJ（管理者）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-slate-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、誠実と責任の「純愛」～</span>
                    </h1>

                    <div className="prose prose-slate max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 有言実行の努力家。伝統と秩序を重んじ、一度決めたルールと約束は絶対守る。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 遊びの恋はせず、結婚を見据えた「超長期的な安定」を最優先に考える。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 落ち着きのある「憧れの先輩（LARO）」や、誠実な「忠犬ハチ公（FCPE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 感情論よりも「事実」と「誠実さ」で対話する。彼らのルーチンを尊重することが信頼への近道。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">1. ISTJ（管理者）という「誠実の塊」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ISTJ（管理者）は、現代社会を支える最も揺るぎない「基盤」となる人々です。彼らの世界観は、正確な事実、確立されたルール、そして何よりも「義務の遂行」の上に成り立っています。<br /><br />
                            「やるべきことをやる」という当たり前のことを、誰よりも正確に、誰よりも長く続けられるのが彼らの最大の才能です。周囲からは「堅物」や「真面目すぎる」と言われることもありますが、その裏にあるのは、関わる全てのものに対する深い責任感に他なりません。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ISTJを象徴する3つの美学</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                                <div className="p-3 bg-white rounded-lg border border-slate-100 text-center">
                                    <span className="font-bold text-slate-600 block mb-1">時間は守るものではなく、奪わないもの</span>
                                    <p>彼らにとって遅刻は単なるルール違反ではなく、相手の人生へのリスペクト不足と捉えます。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-slate-100 text-center">
                                    <span className="font-bold text-slate-600 block mb-1">言葉より行動</span>
                                    <p>「愛してる」と100回言うよりも、毎週末の買い出しを手伝うことに真の価値を見出します。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-slate-100 text-center">
                                    <span className="font-bold text-slate-600 block mb-1">効率的な感情管理</span>
                                    <p>感情に振り回されて判断を誤ることを嫌い、常に中立で客観的な視点を保とうと努めます。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">2. 恋愛傾向：10倍の速さで「結婚」を意識する</h2>
                        <p className="mb-6 leading-relaxed">
                            ISTJにとって恋愛は、人生という長期プロジェクトの重要な契約の一つです。そのため、スリルのある恋や一時の火遊びに興味を持つことは滅多にありません。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ISTJが「パートナー」に選ぶ人の基準</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-slate-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-slate-200">生活習慣が安定している人：</span>
                                    <p className="text-sm mt-1">金銭感覚や時間の使い方が自分と似ている相手に、強い安心感を抱きます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-slate-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-slate-200">感情を論理的に説明できる人：</span>
                                    <p className="text-sm mt-1">「なんとなく怒っている」のではなく、「こういう理由で悲しかった」と冷静に伝えてくれる相手をリスペクトします。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-slate-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-slate-200">家族や友人を大切にしている人：</span>
                                    <p className="text-sm mt-1">伝統やコミュニティを重んじる性質があるため、周囲への誠実さ、を重視します。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">3. ラブキャラ診断で見るISTJ：静寂の中の深い情熱</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ISTJの不器用ながらも真っ直ぐな愛の形が見えてきます。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center">
                                    <Ruler className="w-4 h-4 mr-2" />
                                    憧れの先輩（LARO）
                                    <span className="text-xs ml-3 text-white bg-slate-500 px-2 py-0.5 rounded-full">主軸キャラ</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-900">
                                    自分のペースとルールを何よりも大切にする（RO）ISTJ。必要最低限のリード（LA）で、無駄のないスマートな交際を好みます。その「頼もしすぎる背中」は、浮ついた関係に疲れた人々にとって、最高の救いとなります。
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
                                    <Heart className="w-4 h-4 mr-2" />
                                    忠犬ハチ公（FCPE）
                                    <span className="text-xs ml-3 text-white bg-blue-500 px-2 py-0.5 rounded-full">内面の顔</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-blue-900">
                                    一度「この人は自分の守るべき人だ」と定義すると、驚くほど献身的に役割を果たそうとする（CE）面が現れます。相手のために自己研鑽に励み、喜ばせようとする（FA）その姿は、普段のクールさからは想像できないほど情熱的です。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-slate-500 pl-4 mb-6">4. 実習：ISTJとの愛を「不動の資産」にする方法</h2>
                        <p className="mb-6 leading-relaxed">
                            ISTJは感情の裏読みが苦手です。「察してほしい」という態度は、彼らをただ混乱させるだけです。<br /><br />
                            彼らとの関係を円滑にする魔法の言葉は、<span className="font-bold text-slate-600">「あなたの〇〇という行動は、私にとって非常に助かっている」</span>という客観的な評価です。彼らは褒められることよりも、「役立っている」と認識されることに最大の喜びを感じます。彼らの誠実さを「当然」と思わず、その堅実な愛をリスペクトし続けてください。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-slate-600 to-slate-800 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">誠実なあなたのための、偽りなき診断</h2>
                            <p className="mb-8 font-medium">
                                ISTJのあなたの堅実な愛を100%理解し、<br />
                                共に歩んでくれる「本物のパートナー」は？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-slate-800 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                論理相性診断を実行する
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-slate-300" />
                        <span>「安心感しかない、という彼の性格が言語化されてスッキリしました。」（30代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
