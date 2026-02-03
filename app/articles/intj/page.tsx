import Link from 'next/link';
import { ArrowLeft, Sparkles, Brain, Lock, MessageCircle, ShieldCheck } from 'lucide-react';

export default function INTJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-500 h-32 flex items-center justify-center">
                    <Brain className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】INTJ（建築家）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-indigo-600 mt-3 font-medium">～MBTI×ラブキャラで解き明かす、知性と効率の「究極愛」～</span>
                    </h1>

                    <div className="prose prose-indigo max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-indigo-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 冷静沈着な戦略家。完璧主義で、物事の本質と未来の効率を常に見据える。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 感情に流されず、知的な共鳴と「人生の共同経営者」としての適性を重視。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 秘密の情熱を持つ「隠れベイビー（LCRE）」や、多才な「完全無欠のカメレオン（LAPO）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 論理的な誠実さを見せ、彼らの「知的な聖域」を尊重して一歩ずつ歩み寄る。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">1. INTJ（建築家）という「静かなる野心家」の思考回路</h2>
                        <p className="mb-6 leading-relaxed">
                            INTJ（建築家）は、全タイプの中で最も自立心が強く、知的な独立を重んじるタイプです。彼らの脳内は、常に巨大なチェス盤のように整理されており、目の前の出来事を長期的な戦略の一部として捉えています。<br /><br />
                            「なぜ？」という問いを自分にも他人にも投げかけ続け、非効率や不合理を嫌います。一見冷たく見えることもありますが、それは感情がないからではなく、感情よりも「真実」や「最適解」を優先するという彼らなりの誠実さの表れなのです。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">INTJを理解する3つのキーワード</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                                <div className="p-3 bg-white rounded-lg border border-gray-100 text-center">
                                    <span className="font-bold text-indigo-600 block mb-1">徹底した論理性</span>
                                    <p>全ての行動に理由を求めます。「なんとなく」は彼らの辞書にはありません。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-100 text-center">
                                    <span className="font-bold text-indigo-600 block mb-1">高い基準</span>
                                    <p>自分自身に対しても、将来のパートナーに対しても、決して妥協しない高い理想を持っています。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-100 text-center">
                                    <span className="font-bold text-indigo-600 block mb-1">驚愕の内省力</span>
                                    <p>一人の時間を使い、自分の思考をアップデートし続けることが彼らにとっての休息です。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">2. 恋愛傾向：愛は「最適化」すべきプロジェクト</h2>
                        <p className="mb-6 leading-relaxed">
                            INTJにとっての恋愛は、一時的な高揚感を楽しむものではなく、人生という長距離走を共にする「最高のチームメイト」を探すプロセスです。そのため、一目惚れや衝動的な交際は少なく、相手を注意深く観察し、分析してから心を開きます。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">INTJが「この人だ」と確信する瞬間</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-indigo-200">知的な議論が成立した時：</span>
                                    <p className="text-sm mt-1">自分の複雑な思考を理解し、さらに鋭い視点で返してくれる相手に、抗いがたい魅力を感じます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-indigo-200">自律した関係が築ける時：</span>
                                    <p className="text-sm mt-1">「24時間一緒にいたい」という依存ではなく、別々の部屋でそれぞれ好きなことに没頭できる距離感を好みます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-indigo-200">約束と時間を守られた時：</span>
                                    <p className="text-sm mt-1">INTJにとって遅刻やドタキャンは不信感の種。些細なルールを守る誠実さが、彼らの心の鍵を開けます。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">3. ラブキャラ診断で見るINTJ：鉄壁の内側に潜むギャップ</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、INTJが恋人にだけ見せる「素顔」が見えてきます。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                <h3 className="text-lg font-bold text-indigo-800 mb-2 flex items-center">
                                    <Lock className="w-4 h-4 mr-2" />
                                    隠れベイビー（LCRE）
                                    <span className="text-xs ml-3 text-indigo-600 bg-white px-2 py-0.5 rounded-full border border-indigo-200">激レアな素顔</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-indigo-900">
                                    外では完璧にリードするリーダー（LC）ですが、心を許した特定の相手の前では、子供のように甘えたい・素直になりたい（RE）という欲求を隠し持っています。このギャップに触れられるのは、彼らが「世界で一番信頼している人」だけの特権です。
                                </p>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                                <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center">
                                    <ShieldCheck className="w-4 h-4 mr-2" />
                                    完全無欠のカメレオン（LAPO）
                                    <span className="text-xs ml-3 text-purple-600 bg-white px-2 py-0.5 rounded-full border border-purple-200">戦略的な魅力</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-purple-900">
                                    必要であればどんな役割も完璧にこなすINTJ。恋愛においても、相手に合わせて自分を最適化（PO）しつつ、主導権はしっかり握る（LA）タイプです。多才でミステリアスな雰囲気が、異性を強く惹きつけます。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">4. 実戦：INTJとの関係を「永続的」なものにするには</h2>
                        <p className="mb-6 leading-relaxed">
                            INTJは一度「この人」と決めれば、驚くほど一途で誠実です。しかし、感情の表現が不器用なため、パートナーは「本当に愛されているのかな？」と不安になるかもしれません。<br /><br />
                            彼らに愛を求めるなら、情緒的なアピールよりも<span className="font-bold text-indigo-600">「言語化のリクエスト」</span>を。そして、彼らが一人で考え込む時間は、あなたを嫌いになったからではなく、あなたとの未来をより良くするために脳をフル回転させている時間なのだと理解してください。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">知的な相性の世界へ、ようこそ</h2>
                            <p className="mb-8 font-medium">
                                INTJのあなたの複雑な思考を理解し、<br />
                                共に人生を構築できる「最高のパートナー」をデータで証明します。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                精密相性診断を体験する
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-indigo-300" />
                        <span>「謎が多い彼のこと、少し分かった気がします。」（20代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
