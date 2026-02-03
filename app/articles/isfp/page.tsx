import Link from 'next/link';
import { ArrowLeft, Sparkles, Palette, Heart, MessageCircle, Music } from 'lucide-react';

export default function ISFPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-rose-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-yellow-400 to-rose-400 h-32 flex items-center justify-center">
                    <Palette className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-rose-600 hover:text-rose-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】ISFP（冒険家）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-rose-500 mt-3 font-medium">～MBTI×ラブキャラで紐解く、感性と純粋の「色彩豊かな愛」～</span>
                    </h1>

                    <div className="prose prose-rose max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-rose-50 p-6 rounded-2xl border border-rose-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-rose-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-rose-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 溢れる感性と慈愛を持つ「静かなる芸術家」。型に嵌まることを嫌い、自由な自己表現を志向する。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 嘘や駆け引きを嫌う超・誠実派。言葉よりも「共に過ごす時間の質感」や「共有する美意識」を重視する。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 慈愛に満ちた「聖母（LACE）」や、一途な「忠犬ハチ公（FCPE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 彼らの感性を否定しないこと。プレゼントの価格より、そこに込められた「センス」と「真心」を見せる。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">1. ISFP（冒険家）という「今を生きる表現者」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ISFP（冒険家）は、16タイプの中で最も「世界の美しさ」に敏感なタイプです。彼らの内面は、言葉にできない豊かで鮮やかな感情で満たされています。しかし、それを大声で叫ぶことはありません。彼らは自らの生き方、選ぶ服、聴く音楽、あるいは愛する人への接し方を通じて、その芸術性を表現します。<br /><br />
                            彼らにとって人生とは、一つの果てしない探索です。「こうあるべき」という社会の枠組みよりも、「自分がどう感じるか（Fi）」という心の羅針盤を何よりも大切にします。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ISFPが恋人にだけ見せる「特別な聖域」</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-white rounded-lg border border-yellow-100 shadow-sm">
                                    <span className="font-bold text-rose-500 block mb-1">五感の共有</span>
                                    <p>美味しい食事、美しい夕日、心地よい手触りの布地. 理屈ではなく「感覚」が一致することに深い愛を感じます。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-yellow-100 shadow-sm">
                                    <span className="font-bold text-rose-500 block mb-1">静かなる不変性</span>
                                    <p>移り気に見えて、一度心を許した相手への忠誠心は驚くほど強大。沈黙すらも愛の形に変えてしまいます。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">2. 恋愛傾向：10,000の言葉より、1つの「ぬくもり」</h2>
                        <p className="mb-6 leading-relaxed">
                            ISFPの恋愛は、非常にピュアで、かつ現実の質感に基づいています。将来の壮大な約束よりも、今隣にいる二人の空気感を守ることを優先します。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ISFPのパートナーが知っておくべき「3つの感性」</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-yellow-200">「否定しない」という最高の愛：</span>
                                    <p className="text-sm mt-1">彼らのセンスや価値観を「変わってるね」と切り捨てるのは禁物。面白がって一緒に楽しむ姿勢が、彼らの心を最も開きます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-yellow-200">パーソナルスペースの聖域化：</span>
                                    <p className="text-sm mt-1">どれだけ愛していても、自分の世界に閉じこもる時間が必要です。それを「拒絶」と捉えず、「充電」と理解して見守ってください。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-yellow-200">サプライズへの繊細な反応：</span>
                                    <p className="text-sm mt-1">派手な演出よりも、ふとした瞬間に自分の好きな花を覚えていてくれた、といった「細かな観察眼」に基づく愛に、魂が震えるほど感動します。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">3. ラブキャラ診断で見るISFP：無償の愛と献身</h2>
                        <p className="mb-6">「ラブキャラ64」で紐解くと、ISFPの「癒し」の正体が見えてきます。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                                <h3 className="text-lg font-bold text-rose-800 mb-2 flex items-center text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    聖母（LACE）
                                    <span className="text-xs ml-3 text-white bg-rose-400 px-2 py-0.5 rounded-full">究極の慈愛</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-rose-900">
                                    相手のありのままを肯定し（LA）、献身的に支える（CE）力。このタイプが出るISFPは、パートナーにとって「帰るべき港」のような存在になります。
                                </p>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                                <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center text-sm">
                                    <Music className="w-4 h-4 mr-2" />
                                    忠犬ハチ公（FCPE）
                                    <span className="text-xs ml-3 text-white bg-yellow-500 px-2 py-0.5 rounded-full">一途な共鳴</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-yellow-900">
                                    自分の感情をストレートに出しつつ（FA）、相手への深い忠誠心を守る（CE）気質. 一度結ばれた絆を、目に見えない糸のように大切に守り続ける強さがあります。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-yellow-400 pl-4 mb-6">4. 実習：ISFPの「心のキャンバス」に彩りを添える方法</h2>
                        <p className="mb-6 leading-relaxed">
                            ISFPと長続きするための秘訣は、<span className="font-bold text-rose-500">「言葉にならないサインをキャッチすること」</span>です。<br /><br />
                            彼らは不満があっても、調和を乱すことを恐れて口に出さないことがあります。その代わり、表情や選ぶ音楽、あるいは少しだけの距離感で何かを伝えようとしています。「最近、何かあった？」と優しく、でもプレッシャーを与えずに聞いてあげてください。彼らの繊細な感性を守る盾になり、共に「美しい今」を積み重ねていく。それが出来れば、ISFPはあなたに一生分の、色彩豊かな愛を捧げてくれるでしょう。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-yellow-400 to-rose-400 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">純粋な魂と響き合う、あなたへの贈り物</h2>
                            <p className="mb-8 font-medium">
                                ISFPのあなたの豊かな感性を傷つけず、<br />
                                宝石のように大切に扱ってくれる相手はどこにいる？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-rose-500 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                魂の共鳴診断へ
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-rose-300" />
                        <span>「言葉は少ないけれど、私の好きなものを全部覚えてくれていた。それが何よりのプロポーズでした。」（20代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
