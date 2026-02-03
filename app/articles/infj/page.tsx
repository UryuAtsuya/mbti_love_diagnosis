import Link from 'next/link';
import { ArrowLeft, BookOpen, Heart, Sparkles, MessageCircle, Info } from 'lucide-react';

export default function INFJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-32 flex items-center justify-center">
                    <BookOpen className="text-white w-12 h-12" />
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
                        【決定版】INFJ（提唱者）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-teal-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、最古で最新の「愛の哲学」～</span>
                    </h1>

                    <div className="prose prose-teal max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-teal-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-teal-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 全人口の1%未満とされる超希少タイプ。深い洞察力を持つ理想主義者。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 表面的な遊びよりも、魂が共鳴する精神的な繋がりを最優先。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 包容力の権化「憧れの先輩（LARO）」や「カリスマバランサー（LARE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 誠実な対話と、彼らの静かな情熱への全肯定。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">1. INFJ（提唱者）という「静かなる革命家」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            INFJ（提唱者）は、全16タイプの中で最も複雑で掴みどころがないタイプと言われます。その最大の特徴は、内向的でありながら非常に強い「外向きの使命感」を持っている点にあります。<br /><br />
                            彼らは単なる夢想家ではありません。自身の理想（Ni：内向的直感）を、現実社会の調和（Fe：外向的感情）のためにどう活かすかを常に考えています。この「静かなる革命」と言えるマインドセットが、周囲には神秘的で知的な魅力として映るのです。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">INFJ特有の「矛盾」する二面性</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-white rounded-lg border border-gray-100">
                                    <span className="font-bold text-teal-600 block mb-1">社交的な孤独感</span>
                                    <p>誰とでも合わせられる社交性を持ちながら、内面では「誰も自分を分かっていない」という深い孤独を感じています。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-100">
                                    <span className="font-bold text-teal-600 block mb-1">冷徹なまでの温かさ</span>
                                    <p>深い愛情を持つ一方で、一度「信頼に値しない」と判断した相手を即座に断絶する（ドアスラム）厳しい一面も。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">2. 恋愛傾向：100の遊びより、1の「運命」を</h2>
                        <p className="mb-6">
                            INFJの恋愛観を一言で表すなら「魂の融合」です。マッチングアプリや合コンでの表面的なコミュニケーションに虚しさを感じやすく、お互いの人生のビジョンや価値観が合流する瞬間を待っています。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">INFJが恋に落ちる「3つのトリガー」</h3>
                        <ol className="space-y-4 mb-10">
                            <li className="flex items-start">
                                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold">知的な共鳴：</span>
                                    <p className="text-sm mt-1">世間話ではなく、哲学、芸術、社会貢献といった深いテーマで議論できる相手に強く惹かれます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold">裏表のない誠実さ：</span>
                                    <p className="text-sm mt-1">「この人の言葉に嘘がない」と直感したとき、INFJは初めて鉄壁のガードを緩めます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold">「守りたい」と思わせる脆さ：</span>
                                    <p className="text-sm mt-1">強がっている人が時折見せる素の表情や弱さに、INFJの深い母性（父性）が反応します。</p>
                                </div>
                            </li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">3. ラブキャラ診断で見るINFJ：憧れと調和の象徴</h2>
                        <p className="mb-6">当サイト独自の「ラブキャラ64」で分析すると、INFJの恋愛における「役割」はさらに明確になります。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    憧れの先輩（LARO）
                                </h3>
                                <p className="text-sm leading-relaxed text-blue-900">
                                    INFJの持つ「どこか俗世から離れた雰囲気」がこのキャラに集約されます。自分の世界観を持ちつつ、周囲には優しく接するその姿は、多くの異性から「手の届かない憧れ」として映ります。本人は自由でいたい（RO）という欲求が強いのですが、無意識に相手の心をリード（LA）してしまいます。
                                </p>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <h3 className="text-lg font-bold text-emerald-800 mb-2 flex items-center">
                                    <Heart className="w-4 h-4 mr-2" />
                                    カリスマバランサー（LARE）
                                </h3>
                                <p className="text-sm leading-relaxed text-emerald-900">
                                    パートナーが不安定なときほど力を発揮するのがこのタイプ。相手の感情の荒波を、まるで凪（なぎ）のように鎮める圧倒的な包容力を持っています。しかし、自分自身のケアを（RE：受け止める）後回しにしがちな点が注意が必要です。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-teal-500 pl-4 mb-6">4. INFJを「沼らせる」最強の付き合い方</h2>
                        <p className="mb-6 leading-relaxed">
                            INFJと付き合いたい、あるいは長続きさせたいなら、<span className="font-bold text-teal-600">「心の安全基地」</span>になることが唯一の正解です。<br /><br />
                            彼らは日々、他人の感情の機微を読み取りすぎて疲弊しています。あなたが彼らに対して「ここでは何を言ってもいい、何もしなくてもいい」という無条件の肯定を示すことができれば、INFJはあなたに依存と言えるほどの深い愛を捧げるようになります。
                        </p>

                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-10">
                            <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center">
                                <Info className="w-5 h-5 mr-2" />
                                ここに注意！INFJの「禁忌」
                            </h3>
                            <ul className="text-sm space-y-2 text-amber-900 list-disc list-inside">
                                <li>「考えすぎだよ」と言って話を切り上げる（彼らにとって思考は生命線です）。</li>
                                <li>サプライズで大勢の場に連れて行く（事前の心理的準備が必要です）。</li>
                                <li>感情的な駆け引きや試すような行動（誠実さを最も重んじます）。</li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-teal-500 to-emerald-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">あなたの本当の相性は？</h2>
                            <p className="mb-8 font-medium">
                                INFJのあなたには、どのタイプが「運命の相手」なのか。<br />
                                64キャラ×16タイプのマトリクスで、科学的に解き明かします。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-teal-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                無料診断をスタートする
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-teal-400" />
                        <span>読者の声：「自分の説明書そのものでした」</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
