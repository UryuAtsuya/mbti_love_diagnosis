import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function INTPArticle() {
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
                    【決定版】INTP（論理学者）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 飽くなき好奇心と独創的な発想を持つ、知の探究者です。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 慣習や形式にとらわれず、知的な刺激と自由を何よりも大切にします。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 独自の感性で生きる<span className="font-bold">「不思議生命体（FARO）」であり、状況に応じて自分を最適化する「パーフェクトカメレオン（LAPO）」</span>でもあります。</li>
                            <li><span className="font-bold">攻略法：</span> 彼らの知的探究心を肯定し、プライベートな時間を侵さない「心地よい距離感」を保つことが鍵です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：INTP（論理学者）という「宇宙の真理を追う者」</h2>
                        <p className="leading-relaxed">
                            INTP（論理学者）は、常に「なぜ？」を問い続け、世界の仕組みを解明することに喜びを感じます。世俗的な成功や肩書きにはあまり興味がなく、自分の頭の中で繰り広げられる思考の旅を愛しています。<br /><br />
                            恋愛においても「一般的なカップルの形」に縛られることを嫌います。彼らが求めるのは、言葉を超えた知的な共鳴と、沈黙さえも心地よいと感じられる深い理解です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：客観性と創造性のマリアージュ</h2>
                        <p className="mb-4">INTPは、あらゆることを客観的な視点から分析し、誰も思いつかないようなアイデアを生み出します。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 偏見のないオープンな思考、高い集中力、そして純粋な探究心。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 自分の興味のない分野には極端に無頓着で、他者の感情への配慮が欠落しがちです。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るINTP：捉えどころのない魅力</h2>
                        <p className="mb-4">ラブキャラ64でINTPを分析すると、その「非日常的な存在感」が際立ちます。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-bold text-purple-700 mb-1">不思議生命体（FARO）</h3>
                                <p className="text-sm">既存の枠組みに当てはまらない、独自の論理で生きています。その「掴めなさに」翻弄される異性は、いつの間にか彼らのペースに巻き込まれていきます。</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-700 mb-1">パーフェクトカメレオン（LAPO）</h3>
                                <p className="text-sm">本心を見せることは稀ですが、観察能力が高いため、相手が何を求めているかを瞬時に理解し、それに合わせた役割を演じることができてしまいます。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. INTPの恋愛攻略法：思考のパズルを共に解く</h2>
                        <p className="mb-4 leading-relaxed">
                            INTPの気を引くには、<span className="font-bold text-teal-600">「未知の知識や新しい視点」</span>を提供することが最も効果的です。最新の科学ニュースや、哲学的な問いかけなど、彼らが考え込みたくなるような話題を振ってみてください。<br /><br />
                            また、彼らが返信を忘れたり、デート中にボーッとしていても、悪気がないことを理解してあげましょう。彼らはただ、脳内で壮大なシミュレーションを行っているだけなのです。その奇妙な性質を「面白い」と笑って受け入れられる度量があれば、彼らにとってあなたは「一生離したくないパートナー」となります。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ミステリアスなINTPの本音を知りたい？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのキャラタイプが、INTPにとって「最高の理解者」になれるか診断します。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            相性を詳しく見る
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
