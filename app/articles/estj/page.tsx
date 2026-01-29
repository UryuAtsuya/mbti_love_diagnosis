import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ESTJArticle() {
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
                    【決定版】ESTJ（幹部）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 組織的でリーダーシップ溢れるESTJは、伝統と秩序を重んじる「守護者」です。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 非常に現実的で、共通の目標に向かって歩める、安定感のあるパートナーシップを求めます。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 圧倒的なエネルギーでリードする<span className="font-bold">「ボス猫（LCRO）」や、頼りがいのある「キャプテンライオン（LAPE）」</span>の気質が強く出ます。</li>
                            <li><span className="font-bold">攻略法：</span> 曖昧さを排除し、具体的で誠実な行動を示すことが、彼らの信頼を勝ち取る最短ルートです。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ESTJ（幹部）という「頼れるリーダー」</h2>
                        <p className="leading-relaxed">
                            ESTJ（幹部）は、目標達成のために計画を立て、効率的に実行する能力に長けています。周囲からも「頼れる兄貴・姉貴分」として信頼されることが多く、嘘や不正を嫌う真っ直ぐな性格です。<br /><br />
                            恋愛においてもその「誠実さ」は変わりません。場当たり的な関係よりも、将来を見据えた「地に足のついた交際」を好む傾向があります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：規律と情熱の融合</h2>
                        <p className="mb-4">ESTJは、感情よりも論理（T）と現実（S）を重視します。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 高い管理能力、責任感、そして困難に立ち向かう強靭な意志。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 自分の正しさを押し通してしまい、周囲の繊細な感情を置き去りにしてしまうことがあります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るESTJ：圧倒的な存在感</h2>
                        <p className="mb-4">ラブキャラ64の視点からESTJを分析すると、その「力強さ」が際立ちます。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-bold text-purple-700 mb-1">ボス猫（LCRO）</h3>
                                <p className="text-sm">我が道をゆくエネルギーに溢れ、唯一無二の魅力を放ます。恋愛でも自分のペースで相手をリードし、守り抜く強さを持っています。</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="font-bold text-orange-700 mb-1">キャプテンライオン（LAPE）</h3>
                                <p className="text-sm">優しさと強さを兼ね備え、どんな相手に対しても自分の責任を果たそうとします。非常に器が大きく、人間味溢れる愛し方をします。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ESTJの恋愛攻略法：論理的な「信頼」の構築</h2>
                        <p className="mb-4 leading-relaxed">
                            ESTJに恋をしたら、「自分の意見をハッキリ伝えること」、そして<span className="font-bold text-teal-600">「約束を100%守ること」</span>を意識してください。彼らは、自立していて有能なパートナーを尊重します。<br /><br />
                            デートの際も「どこでもいい」ではなく、具体的なプランを提案し、合理的に楽しむ姿勢が評価されます。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ESTJとの「最強のパートナーシップ」を築くには？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのキャラタイプが、ESTJの背中を支える「副官」になれるか診断します。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            無料相性診断を受ける
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
