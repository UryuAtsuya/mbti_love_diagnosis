import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ENFPArticle() {
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
                    【決定版】ENFP（広報運動家）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 自由を愛し、周囲にエネルギーを振りまく情熱的なタイプです。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 好奇心旺盛で、新しい刺激やロマンチックな展開を常に求めています。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 奔放な<span className="font-bold">「デビル天使（FAPO）」や、愛を求める「恋愛モンスター（FCPO）」</span>の側面を持ちます。</li>
                            <li><span className="font-bold">攻略法：</span> 束縛を避け、彼らの創造性を共に楽しむ姿勢が成約の鍵となります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ENFP（広報運動家）という「自由な冒険家」</h2>
                        <p className="leading-relaxed">
                            ENFP（広報運動家）は、周囲に明るい光を灯すような太陽のような存在です。可能性に満ちた未来を信じ、直感のままに突き進むその姿は、多くの人を惹きつけて止みません。<br /><br />
                            恋愛においても、その情熱と好奇心はフル回転します。「運命」や「ソウルメイト」という言葉を信じ、ドラマチックな展開を好む一方、束縛やマンネリを何よりも嫌う性質を持っています。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：可能性を愛するクリエイター</h2>
                        <p className="mb-4">ENFPは、他人の感情に敏感でありながら、自分自身の自由を最優先するバランス感覚を持っています。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 高いコミュニケーション能力、常識にとらわれない発想力。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 細かい実務や継続的なルーチンが苦手で、感情の起伏が激しい一面もあります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るENFP：光と影のハイブリッド</h2>
                        <p className="mb-4">ラブキャラ64の視点からENFPを分析すると、非常に興味深い結果が得られます。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-pink-50 p-4 rounded-lg">
                                <h3 className="font-bold text-pink-700 mb-1">デビル天使（FAPO）</h3>
                                <p className="text-sm">普段は天使のような優しさと愛想の良さを持っていますが、内面には誰にも邪魔されたくない「絶対的な自由」が潜んでいます。このギャップに振り回される異性は後を絶ちません。</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h3 className="font-bold text-red-700 mb-1">恋愛モンスター（FCPO）</h3>
                                <p className="text-sm">一度好きになると、その人を全力で愛し、自分も同じだけの愛を求めます。その熱量は、時に相手を圧倒するほどのパワーを持っています。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ENFPの恋愛攻略法：飽きさせない関係作り</h2>
                        <p className="mb-4 leading-relaxed">
                            ENFPの心を射止めるためには、<span className="font-bold text-teal-600">「常に新しい刺激を提供し続けること」と「決して自由を奪わないこと」</span>の2点が不可欠です。彼らの突飛なアイデアを面白がり、一緒にワクワクできるパートナーであることを証明しましょう。<br /><br />
                            また、彼らが落ち込んでいる時は、論理的なアドバイスよりも「あなたはあなたのままで素晴らしい」という全肯定の姿勢が、最も深い信頼へと繋がります。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">推しとの相性も気になりませんか？</h2>
                        <p className="text-gray-600 mb-6 text-sm">ENFPのアイドルとあなたの相性を、最新AIが分析します。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            相性診断を試す
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
