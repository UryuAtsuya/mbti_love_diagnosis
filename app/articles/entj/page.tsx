import Link from 'next/link';
import { ArrowLeft, Sparkles, Shield, Heart, MessageCircle, Target } from 'lucide-react';

export default function ENTJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-slate-700 to-indigo-800 h-32 flex items-center justify-center">
                    <Shield className="text-white w-12 h-12" />
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
                        【決定版】ENTJ（指揮官）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-indigo-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、知略と野心の「覇道の愛」～</span>
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
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 圧倒的なビジョンと決断力を持つ「生まれながらのリーダー」。目標達成を至上命題とする。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 妥協のない「パートナー選定」。互いに高め合い、社会的な高みを目指す「戦友」を求める。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 包容力の権化「憧れの先輩（LARO）」や、誠実な「忠犬ハチ公（FCPE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 自らの志の高さを語ること。曖昧な感情論よりも、具体的なメリットと将来性を提示する。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">1. ENTJ（指揮官）という「勝利の設計者」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ENTJ（指揮官）は、常に数年・数十年先の未来を「今」見ているタイプです。彼らにとって人生とは、一つの壮大なプロジェクトであり、無駄や非効率は徹底的に排除されます。<br /><br />
                            その自信に満ちた振る舞いは、周囲に「この人についていけば間違いない」という強烈な安心感を与えます。しかし、その内面には「自分の基準を満たせない自分」への厳しさと、選んだ仲間を守り抜くという強固な責任感が同居しています。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ENTJがパートナーに課す「暗黙の審査」</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                                <div className="p-3 bg-white rounded-lg border border-indigo-100 text-center shadow-sm">
                                    <span className="font-bold text-indigo-600 block mb-1">知性の独立</span>
                                    <p>自分の意見を持ち、議論を恐れないこと。イエスマンは不要です。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-indigo-100 text-center shadow-sm">
                                    <span className="font-bold text-indigo-600 block mb-1">野心の共有</span>
                                    <p>「普通でいい」ではなく、より良い生活や地位を共に目指せる熱意を求めます。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-indigo-100 text-center shadow-sm">
                                    <span className="font-bold text-indigo-600 block mb-1">効率的な感情処理</span>
                                    <p>問題を放置せず、建設的な話し合いで即座に解決できる能力を重んじます。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">2. 恋愛傾向：愛とは「最強の同盟」を組むこと</h2>
                        <p className="mb-6 leading-relaxed">
                            ENTJの恋愛は、非常に戦略的で長期的です。「好きだから一緒にいる」のは大前提として、その先に「この人と一緒になることで、ライフステージをどう上げられるか」を真剣に検討します。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ENTJの「一途さ」の裏側</h3>
                        <p className="mb-6 leading-relaxed">
                            一度「この人だ」と決めた相手に対して、ENTJは驚くほど一途で忠実です。なぜなら、彼らにとってパートナーは「自分が選び抜いた最高の人材」であり、その人の幸福を最大化することは、自分の経営者としての責任（愛）だからです。浮気などの非合理的なリスクを冒すことは、彼らのプライドが許しません。
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">3. ラブキャラ診断で見るENTJ：支配と献身のダイナミズム</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ENTJの「強者の愛」の構造が解明されます。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                <h3 className="text-lg font-bold text-indigo-800 mb-2 flex items-center text-sm">
                                    <Target className="w-4 h-4 mr-2" />
                                    憧れの先輩（LARO）
                                    <span className="text-xs ml-3 text-white bg-indigo-800 px-2 py-0.5 rounded-full">絶対的統率</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-indigo-900">
                                    自分を律し（RO）、周囲に明確な道を示す（LA）ENTJ。このタイプが強く出ると、パートナーを精神的・経済的な安全圏へと導き、圧倒的な「パトロン」としての包容力を発揮します。
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    忠犬ハチ公（FCPE）
                                    <span className="text-xs ml-3 text-white bg-slate-800 px-2 py-0.5 rounded-full">隠された脆さ</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-900">
                                    実は「認めてほしい」という純粋な欲求（FA）と、選んだ相手への高い忠誠心（CE）を持つENTJ。外での戦いに疲れた彼らが、唯一弱みを見せ、認められたいと願うのが「家庭」という聖域なのです。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-800 pl-4 mb-6">4. 実習：ENTJと「覇道」を共に歩む方法</h2>
                        <p className="mb-6 leading-relaxed">
                            ENTJと向き合う際、絶対にやってはいけないのは、<span className="font-bold text-indigo-600">「感情的な駆け引きでのコントロール」</span>です。彼らはそれを見抜いた瞬間、あなたへの尊敬を失います。<br /><br />
                            絆を深める唯一の方法は、彼らの「ビジョン」に寄り添い、時には彼らが見落としている「細かな配慮」や「休息」の必要性を、<span className="font-bold text-indigo-600">論理的に</span>提示してあげることです。「あなたが最高のパフォーマンスを出すために、今はこれが必要だ」という言い方であれば、彼らは喜んであなたの提案を受け入れます。彼らの背中を預けられる、世界で唯ひとりの「副官」になってください。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-slate-700 to-indigo-900 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">高みを目指すあなたのための、選別診断</h2>
                            <p className="mb-8 font-medium">
                                ENTJのあなたの野心を理解し、<br />
                                唯一無二のパワーカップルになれる「ダイヤモンドの原石」は？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-indigo-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                パートナー審査を開始
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-indigo-300" />
                        <span>「厳しい人だと思ってたけど、誰よりも将来の責任を背負ってくれていたんだと気づきました。」（30代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
