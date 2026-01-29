import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function IdolCompatibility() {
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
                    【保存版】MBTI 16タイプ別・相性の良い芸能人とアイドル徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～推し活の「なぜ？」を最新の相性論で解明～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">要約</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> MBTI 16タイプに基づき、各タイプと最も相性の良い（または惹かれやすい）アイドル・芸能人の特徴を分析。</li>
                            <li><span className="font-bold">活用法：</span> 推しのMBTIを知ることで、自分がなぜその人を応援したくなるのかという「好きの解像度」を高め、より健やかで深い推し活を実現します。</li>
                            <li><span className="font-bold">補足：</span> 単なる性格の一致不一致ではなく、「ラブキャラ」的な役割（尽くしたい、見守りたい、翻弄されたい等）の補完関係が重要です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 「内向型・感覚型（SJ）」が惹かれるアイドルの形</h2>
                        <p className="font-bold text-teal-700 mb-2">具体タイプ：ISTJ、ISFJ、ESTJ、ESFJ</p>
                        <p className="leading-relaxed mb-4">
                            これらのタイプは「安心感」と「伝統」を重んじます。王道清純派のアイドルや、何年も努力を積み重ねてきた実力派に強く惹かれる傾向があります。
                        </p>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                            <span className="font-bold text-gray-800">惹かれる相手：</span>
                            誠実さが伝わるアイドル、自分を律して夢を追うストイックなタレント。
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. 「外交型・直感型（NT/NF）」が陥る「沼」の正体</h2>
                        <p className="font-bold text-teal-700 mb-2">具体タイプ：ENFP、ENFJ、ENTP、ENTJ、INFP、INFJ、INTP、INTJ</p>
                        <p className="leading-relaxed mb-4">
                            これらのタイプは「可能性」と「独創性」に惹かれます。
                        </p>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                            <span className="font-bold text-gray-800">惹かれる相手：</span>
                            唯一無二の感性を持つアーティスト、ミステリアスな雰囲気のアイドル、あるいは自分にはない爆発的なエネルギーを持つ「主役体質（LCPO）」のタレントに、強い憧れを抱きます。
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. 相性を超えた「ラブキャラ」的な推し活のススメ</h2>
                        <div className="bg-gray-800 text-white p-6 rounded-lg my-6 shadow-inner">
                            <h4 className="font-bold mb-4 flex items-center">
                                <span className="text-2xl mr-2">💡</span> 推し活のマトリクス
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center"><span className="w-32 inline-block text-teal-300">デビル天使 (FAPO)</span> 推しなら、振り回されることを楽しむ。</li>
                                <li className="flex items-center"><span className="w-32 inline-block text-blue-300">憧れの先輩 (LARO)</span> 推しなら、一歩引いてその生き様を尊敬する。</li>
                                <li className="flex items-center"><span className="w-32 inline-block text-yellow-300">忠犬ハチ公 (FCPE)</span> 推しなら、全力で愛を返し、安心感を提供する。</li>
                            </ul>
                        </div>
                        <p className="leading-relaxed">
                            MBTIが示す「タイプ」だけでなく、推しがステージで見せる「キャラ」を理解することで、推し活のストレス（認知の不一致）は劇的に解消されます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">まとめ：推しへの愛は「自己理解」から始まる</h2>
                        <p className="mb-8 leading-relaxed">
                            なぜそのアイドルに心惹かれるのか。その答えは、あなたの内面にある「理想の自分」や「補いたい欠落」にあります。MBTI×ラブキャラ相性診断を通じて自分を深く知ることで、推しとの精神的な距離感はより心地よいものになるでしょう。
                        </p>
                        <div className="text-center">
                            <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                                まずは無料で診断する
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
