import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function INFJArticle() {
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
                    【決定版】INFJ（提唱者）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> INFJは深い洞察力と強い信念を持つ理想主義者です。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 表面的な付き合いよりも、魂が共鳴するような精神的な繋がりを重視します。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 恋愛では<span className="font-bold">「憧れの先輩（LARO）」や「カリスマバランサー（LARE）」</span>の役割を担いやすく、落ち着いた大人の包容力を発揮します。</li>
                            <li><span className="font-bold">攻略法：</span> 価値観への深い共感を示し、彼らの「心の安全基地」になることが重要です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：INFJ（提唱者）という「静かなる理想主義者」</h2>
                        <p className="leading-relaxed">
                            INFJ（提唱者）は、全16タイプの中でも最も稀少なタイプの一つとされています。一見すると控えめで穏やかですが、その内面には非常に強固な信念と、他者の本質を見抜く鋭い洞察力を秘めています。<br /><br />
                            恋愛においてもその性質は色濃く反映され、遊びの恋や一時的な感情に流されることは滅多にありません。彼らが求めるのは、お互いの人生観を尊重し、高め合える「究極のパートナーシップ」です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：理想を現実に変える力</h2>
                        <p className="mb-4">INFJは直感（N）と感情（F）の機能が非常に発達しており、言葉にされない相手の痛みや欲求を察知する天才です。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 高い倫理観と責任感、そして他者の成長を心から願う献身性。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 理想が高すぎるあまり現実に絶望しやすく、一人で悩みを抱え込みがちです。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るINFJ：憧れと調和の象徴</h2>
                        <p className="mb-4">当サイト独自の「ラブキャラ64」で分析すると、INFJは以下のキャラクターに強く該当します。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-700 mb-1">憧れの先輩（LARO）</h3>
                                <p className="text-sm">自分のペースを崩さず、自由に生きているように見えて、周囲からの信頼が厚い。その神秘的な雰囲気が、異性を惹きつける強力な魅力となります。</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-lg">
                                <h3 className="font-bold text-emerald-700 mb-1">カリスマバランサー（LARE）</h3>
                                <p className="text-sm">相手の感情の揺れを敏感に察知し、関係の調和を保つリーダーシップを発揮します。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. INFJの恋愛攻略法：心の壁を溶かす方法</h2>
                        <p className="mb-4 leading-relaxed">
                            INFJを攻略する最大のポイントは、<span className="font-bold text-teal-600">「表面的な社交辞令を捨て、本音で語り合うこと」</span>です。彼らは「この人は自分の深い部分を理解しようとしてくれている」と感じた時、初めて強固な心の壁を解きます。<br /><br />
                            また、彼らが一人で考え込む時間は、精神的な回復に不可欠です。その時間を尊重し、そっと見守ることができる包容力を見せることで、彼らにとって「唯一無二の理解者」としてのポジションを確立できるでしょう。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">あなたの本当のキャラを診断してみませんか？</h2>
                        <p className="text-gray-600 mb-6 text-sm">MBTIだけでは分からない、あなたの「恋愛での役割」を解き明かします。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            今すぐ診断を受ける
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
