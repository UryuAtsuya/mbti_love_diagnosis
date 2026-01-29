import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ESFJArticle() {
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
                    【決定版】ESFJ（領事）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 社交的な思いやりが深く、コミュニティの和を何よりも大切にするタイプです。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 相手のニーズを敏感に察知し、記念日や日常のケアを欠かさない献身的な愛を注ぎます。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 調和を司る<span className="font-bold">「カリスマバランサー（LARE）」や、愛嬌溢れる「ちゃっかりうさぎ（FCRE）」</span>になりやすいです。</li>
                            <li><span className="font-bold">攻略法：</span> 彼らの気遣いを「当たり前」と思わず、最大限の感謝を言葉にすることが重要です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ESFJ（領事）という「調和の守護者」</h2>
                        <p className="leading-relaxed">
                            ESFJ（領事）は、周囲の人々が心地よく過ごせるよう、常に気を配っているタイプです。人懐っこく温かいその性格は、どんな場所でも歓迎されます。<br /><br />
                            恋愛においても、その「奉仕精神」は変わりません。恋人の家族や友人も含めて大切にし、温かい家庭を築くことを夢みるロマンチストな一面もあります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：共感とサポートのプロ</h2>
                        <p className="mb-4">ESFJは、伝統やルールを守りながら、人々の感情に寄り添います。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 高い共感力、実務的なサポート能力、そして抜群の社交性。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 他人の目を気にしすぎて自分を後回しにしたり、批判を個人的に受け止めすぎたりします。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るESFJ：愛され上手な調整役</h2>
                        <p className="mb-4">ラブキャラ64で見ると、ESFJの「多面的な魅力」が理解できます。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-emerald-50 p-4 rounded-lg">
                                <h3 className="font-bold text-emerald-700 mb-1">カリスマバランサー（LARE）</h3>
                                <p className="text-sm">リーダーシップの中に絶妙なバランス感覚を持ち、周囲から頼りにされます。人に弱みを見せるのは少し苦手ですが、その完璧さが魅力でもあります。</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-700 mb-1">ちゃっかりうさぎ（FCRE）</h3>
                                <p className="text-sm">人懐っこさと冷静さを武器に、世渡り上手な一面も。優れた感性で素敵な恋人を見つける能力に長けています。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ESFJの恋愛攻略法：彼らの「居場所」を肯定する</h2>
                        <p className="mb-4 leading-relaxed">
                            ESFJを攻略するには、<span className="font-bold text-teal-600">「彼らの存在がどれほど周囲を助けているか」</span>を具体的に称賛してください。彼らは承認欲求が強いため、自分が必要とされていると感じることで深い安心感を得ます。<br /><br />
                            また、彼らの大切な友人や家族を、あなたも同じように大切にする姿勢を見せることで、信頼は不動のものになります。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ESFJの恋人をもっと笑顔にしたい？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのキャラタイプが、ESFJにとって「最高の理解者」になれるか診断します。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            無料相性診断を受ける
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
