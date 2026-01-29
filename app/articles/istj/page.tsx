import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ISTJArticle() {
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
                    【決定版】ISTJ（管理者）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 誠実、勤勉、そして責任感の塊。社会の秩序を守る信頼の守護者です。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 遊びの恋はせず、結婚を見据えた真剣な交際を望む超安定志向です。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 誠実で信頼される<span className="font-bold">「隠れベイビー（LCRE）」であり、周囲を支える「敏腕マネージャー（FARE）」</span>でもあります。</li>
                            <li><span className="font-bold">攻略法：</span> 誠実な態度、約束の厳守、そして派手さよりも「日常の安定」を共有する姿勢が重要です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ISTJ（管理者）という「信頼の代名詞」</h2>
                        <p className="leading-relaxed">
                            ISTJ（管理者）は、一度決めた約束や義務を果たすためなら、どんな努力も惜しまないタイプです。事実とデータを重視し、堅実な道を歩む彼らの姿は、パートナーにとって最大の安心材料となります。<br /><br />
                            恋愛においては非常に奥手で、感情を爆発させることはありませんが、その分、何があっても揺るがない愛を静かに育みます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：事実に基づいた誠実さ</h2>
                        <p className="mb-4">ISTJは、伝統やルールを大切にし、予測可能な平穏を愛します。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 抜群の記憶力、論理的な判断、そして何事にも動じない忍耐力。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 変化に対して保守的になりがちで、融通が利かないと思われることがあります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るISTJ：静かなるサポート役</h2>
                        <p className="mb-4">ラブキャラ64の視点から見ると、ISTJの「隠れた人間味」が見えてきます。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-700 mb-1">隠れベイビー（LCRE）</h3>
                                <p className="text-sm">周囲からは「真面目な人」と思われていますが、実は天然で不器用な一面を持っています。心を許した相手の前でだけ見せるそのギャップが、周囲を惹きつける魅力となります。</p>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-lg">
                                <h3 className="font-bold text-teal-700 mb-1">敏腕マネージャー（FARE）</h3>
                                <p className="text-sm">パートナーの生活を支えることに長けています。さりげなく相手の健康や仕事を気遣い、支障がないように手配するプロフェッショナルな愛し方です。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ISTJの恋愛攻略法：一歩ずつ「確実な実績」を積む</h2>
                        <p className="mb-4 leading-relaxed">
                            ISTJに恋をしたなら、<span className="font-bold text-teal-600">「言葉の重みを大切にすること」</span>です。適当な褒め言葉や嘘はすぐに見抜かれます。小さな約束を積み重ね、「この人は信頼できる」という実績を作ることが、彼らの心を動かす唯一の方法です。<br /><br />
                            デートも、突拍子もないサプライズより、落ち着いて話せる老舗のレストランや、静かな公園など、安心感のある場所を選びましょう。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ISTJとの安定した未来を築くには？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのキャラタイプがISTJに与える「安心感」を測定します。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            無料診断を試す
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
