import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ENFJArticle() {
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
                    【決定版】ENFJ（主人公）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> カリスマ性と共感力を備え、人々を導く天性のリーダーです。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 相手の幸せを第一に考え、献身的に尽くすことに喜びを感じます。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 頼れる<span className="font-bold">「キャプテンライオン（LAPE）」や、調和を重んじる「カリスマバランサー（LARE）」</span>として振る舞います。</li>
                            <li><span className="font-bold">攻略法：</span> 常に気を張っている彼らの「弱さ」を優しく受け入れることが重要です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ENFJ（主人公）という「導く者」</h2>
                        <p className="leading-relaxed">
                            ENFJ（主人公）は、強い責任感と利他精神を持ち、周囲の人々をポジティブな方向へ導く力を持っています。人との繋がりを何よりも大切にし、コミュニティの調和を守るために自分を犠牲にすることも厭いません。<br /><br />
                            恋愛においても、その「献身性」は最大限に発揮されます。恋人の夢を自分の夢のように応援し、相手が成長していく姿を隣で見守ることに最大の幸福を感じるタイプです。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：共感のプロフェッショナル</h2>
                        <p className="mb-4">ENFJは、人の才能を見抜き、それを引き出すことに長けています。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 高い説得力、誠実さ、そして相手に合わせた柔軟な対応力。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 他人の問題に首を突っ込みすぎて疲れ果てたり、批判に対して非常に敏感だったりします。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るENFJ：王者の包容力と繊細さ</h2>
                        <p className="mb-4">ラブキャラ64のデータによると、ENFJはリーダーシップと繊細さが共存するキャラクターです。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="font-bold text-orange-700 mb-1">キャプテンライオン（LAPE）</h3>
                                <p className="text-sm">どんな困難な状況でも、自分の愛する人を守り抜く強さを持っています。その器の大きさは、全タイプの中でもトップクラスです。</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-lg">
                                <h3 className="font-bold text-emerald-700 mb-1">カリスマバランサー（LARE）</h3>
                                <p className="text-sm">相手のニーズを先読みし、二人の関係が円滑に進むよう常に調整を続けます。しかし、その分、自分の疲れを隠してしまう傾向があります。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ENFJの恋愛攻略法：唯一の「安らぎの場所」になる</h2>
                        <p className="mb-4 leading-relaxed">
                            ENFJを攻略するためには、「彼らの頑張りを認め、心から感謝を伝えること」、そして<span className="font-bold text-teal-600">「彼らが弱音を吐ける環境を作ること」</span>です。<br /><br />
                            表舞台で常にリーダーとして振る舞う彼らは、プライベートでは「何も考えずに甘えられる場所」を求めています。あなたが彼らの「応援団長」ではなく、静かに寄り添う「休息の場」になれたとき、関係はより深いものへと進化するでしょう。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ENFJの恋人とうまくやる秘訣は？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのキャラタイプとの相性マトリクスをチェック。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            相性を診断する
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
