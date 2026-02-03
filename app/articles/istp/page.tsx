import Link from 'next/link';
import { ArrowLeft, Sparkles, Wrench, Heart, MessageCircle, Zap } from 'lucide-react';

export default function ISTPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-slate-600 to-emerald-500 h-32 flex items-center justify-center">
                    <Wrench className="text-white w-12 h-12" />
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
                        【決定版】ISTP（巨匠）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-emerald-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、技巧と自由の「実存的な愛」～</span>
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
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 冷静沈着な「問題解決의 スペシャリスト」。言葉よりも行動で語り、今この瞬間の最適解を叩き出す。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 束縛を極端に嫌い、互いの自由を尊重しながら「背中で語り合う」ような関係を好む。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 独自の道を歩む「ボス猫（LCRO）」や、意外と従順な「忠犬ハチ公（FCPE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 感情論で追い詰めないこと。彼らの趣味やスキルを「プロ」として尊重し、一人の時間を守らせる。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">1. ISTP（巨匠）という「静かなる技術者」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ISTP（巨匠）は、16タイプの中で最も「実利」と「効率」を重んじる個人主義者です。彼らの世界は、抽象的な概念よりも、触れることのできる現実とロジックで構成されています。何かが壊れれば直し、問題があれば最小の労力で解決する。その洗練された手腕は、周囲に「職人」のような圧倒的な信頼感を与えます。<br /><br />
                            彼らににとって自由とは、空気と同じです。誰かに指示されることや、型にはまったルーティンを強要されることを極端に嫌います。常に自分の感覚（Se）と論理（Ti）に従って、最適と思われる道を選び取ります。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ISTPが持つ「独自の美学」</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                    <span className="font-bold text-emerald-600 block mb-1">道具と身体の拡張</span>
                                    <p>車、バイク、ガジェット、スポーツ…。自らのスキルを磨き、道具を使いこなす瞬間に最大の快感を感じます。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                    <span className="font-bold text-emerald-600 block mb-1">効率的な無口</span>
                                    <p>無駄な世間話はしません。しかし、必要であれば一言で状況を整理し、本質を射抜く言葉を放ちます。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">2. 恋愛傾向：束縛もしない、執着もしない。でも「隣」にいる愛</h2>
                        <p className="mb-6 leading-relaxed">
                            ISTPの恋愛を一言で言えば「実存的な共存」です。ベタベタした愛情表現や、重い誓いを交わすことを苦手とします。彼らにとっての愛は、言葉で飾るものではなく、困った時に助けることや、一緒にいて心地よい無言の時間を共有することにあります。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ISTPが恋に「落ちる」3つの瞬間</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-emerald-200">共通の「体験」を楽しめる相手：</span>
                                    <p className="text-sm mt-1">カフェで何時間もしゃべるより、一緒にスノーボードをしたり、DIYをしたりして「体験」を共有できる相手を好みます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-emerald-200">精神的に自立している人：</span>
                                    <p className="text-sm mt-1">「あなたがいないと生きていけない」と言われると、重圧でシャッターを下ろしてしまいます。「お互い好きなことしようぜ」くらいの距離感が最も燃えます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-emerald-200">感情を論理的に説明できる人：</span>
                                    <p className="text-sm mt-1">「なんで怒ってるかわかる？」といった察しゲーを最も嫌います。「私は○○の理由で△△と感じた」と冷静に言われると、全力で対処しようとします。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">3. ラブキャラ診断で見るISTP：ギャップ萌えの正体</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ISTPの「不器用な情熱」の仕組みが分かります。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <h3 className="text-lg font-bold text-emerald-800 mb-2 flex items-center text-sm">
                                    <Zap className="w-4 h-4 mr-2" />
                                    ボス猫（LCRO）
                                    <span className="text-xs ml-3 text-white bg-emerald-500 px-2 py-0.5 rounded-full">孤高のスペシャリスト</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-emerald-900">
                                    独自のペース（RO）を崩さず、周囲に媚びることのない（LC）気質。このタイプが出るISTPは、ミステリアスな魅力を放ち、相手を「もっと知りたい」という狩猟本能を刺激させます。
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    忠犬ハチ公（FCPE）
                                    <span className="text-xs ml-3 text-white bg-slate-800 px-2 py-0.5 rounded-full">一途な職人質</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-900">
                                    意外にも、大切だと認めた相手の要望には驚くほど健気に応えようとする（FA, CE）一面。普段のクールさとのギャップは凄まじく、一度この「デレ」を見てしまうと離れられなくなるパートナーも多いです。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">4. 実習：ISTPと「最強のチーム」を組むための裏技</h2>
                        <p className="mb-6 leading-relaxed">
                            ISTPは「察する」ことを自分のタスクに入れていません。彼らとの絆を深める最強の方法は、<span className="font-bold text-emerald-600">「やってほしいことをタスク化して依頼する」</span>ことです。<br /><br />
                            「最近寂しいな」と言うのではなく、「週に1回は新しいお店にランチに行きたい」と伝えてください。彼らは具体的なミッションを与えられると、持ち前の技術と効率性を発揮して、完璧に遂行しようとします。彼らの「言葉」ではなく「修理してくれた電球」や「調べてくれたルート」に愛を感じ取ってください。それが、巨匠と共に歩む唯一の作法です。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-slate-700 to-emerald-600 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">実利とスリルを愛する、あなたのための診断</h2>
                            <p className="mb-8 font-medium">
                                ISTPのあなたの自由を奪わず、<br />
                                最高のパフォーマンスを引き出してくれる「相棒」は誰？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-emerald-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                合理的相性診断を受ける
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-300" />
                        <span>「何も言わずに車のメンテナンスをしてくれていた彼の姿に、本当の愛を感じました。」（20代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
