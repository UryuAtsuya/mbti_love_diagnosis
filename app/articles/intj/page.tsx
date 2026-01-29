import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function INTJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Link
                    href="/articles"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    記事一覧に戻る
                </Link>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                    【決定版】INTJ（建築家）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 合理的で高い分析力を持つINTJは、常に未来を見据えた戦略家です。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 感情に流されず、自分と同じように向上心を持つ知的なパートナーを求めます。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 孤高のオーラを放つ<span className="font-bold">「ボス猫（LCRO）」や、落ち着きのある「憧れの先輩（LARO）」</span>の特性を持ちます。</li>
                            <li><span className="font-bold">攻略法：</span> 感情論での押し付けは避け、論理的で対等な対話を積み重ねることが信頼への唯一の道です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：INTJ（建築家）という「静かなる戦略家」</h2>
                        <p className="leading-relaxed">
                            INTJ（建築家）は、非常に高い論理思考と独立心を持っており、どんな問題もシステム的に解決しようとします。その冷静沈着な姿は周囲に「冷たい」という印象を与えることもありますが、実際には非常に誠実で、一度認めた相手には深い忠誠心を示します。<br /><br />
                            恋愛においても「この相手と過ごす時間は合理的か？」「将来的に互いを高め合えるか？」という長期的な視点で相手を厳選する傾向があります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：完璧主義の裏側にある誠実さ</h2>
                        <p className="mb-4">INTJは自分自身にも他人にも高い基準を設けます。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 高い問題解決能力、決断力、そして一度決めたことをやり抜く意志の強さ。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 他人の感情的なニーズに疎く、無意識に相手を批判的に見てしまうことがあります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るINTJ：孤高の魅力</h2>
                        <p className="mb-4">当サイトの「ラブキャラ64」でINTJを分析すると、その独特な距離感が浮き彫りになります。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-bold text-purple-700 mb-1">ボス猫（LCRO）</h3>
                                <p className="text-sm">自分のペースを乱されることを極端に嫌います。しかし、その「誰にも媚びない強さ」が、ミステリアスな魅力として異性を惹きつけます。</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-700 mb-1">憧れの先輩（LARO）</h3>
                                <p className="text-sm">自分の世界観が完成されており、多くを語らずとも背中で語るような佇まいは、周囲に「頼りになる存在」という安心感を与えます。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. INTJの恋愛攻略法：知性を刺激するアプローチ</h2>
                        <p className="mb-4 leading-relaxed">
                            INTJの心を動かすには、<span className="font-bold text-teal-600">「精神的な自立」と「知的な好奇心」</span>を見せることが不可欠です。「〇〇さんのおかげで助かった」という感情的な感謝よりも、「あなたのあの分析、非常に論理的で勉強になった」という能力への賞賛が、彼らの自尊心を最も満たします。<br /><br />
                            また、彼らが一人で思考に耽る時間を「寂しい」と責めてはいけません。その孤独を尊重し、横で自分の作業を淡々と進められるような自立した関係こそが、彼らの理想です。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">INTJへのアプローチに悩んでいませんか？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのラブキャラが、INTJの「心の壁」をどう突破できるか教えます。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            攻略法を診断する
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
