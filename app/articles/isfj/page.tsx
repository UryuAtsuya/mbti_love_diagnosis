import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ISFJArticle() {
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
                    【決定版】ISFJ（擁護者）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 控えめながら、大切な人のためなら自分を顧みず尽くす「縁の下の力持ち」です。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 家庭的で献身的。相手の些細な好みや思い出を大切にする温かな愛を持ちます。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 究極の性格の良さを誇る<span className="font-bold">「最後の恋人（FAPE）」であり、一途な「忠犬ハチ公（FCPE）」</span>でもあります。</li>
                            <li><span className="font-bold">攻略法：</span> 彼らの献身を当たり前と思わず、最大限の感謝を「言葉と形」で示すことが鍵となります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ISFJ（擁護者）という「静かなる献身」</h2>
                        <p className="leading-relaxed">
                            ISFJ（擁護者）は、16タイプの中で最も「優しさ」を体現しているタイプです。自分のことよりも他人の幸せを優先し、細かい配慮を欠かさない彼らは、パートナーにとって理想的な「安らぎの港」となります。<br /><br />
                            しかし、その優しさゆえに自分の不満を溜め込み、いつの間にかパンクしてしまう危うさも持っています。本記事では、彼らの守るべき純粋さと、その裏にある欲求を解説します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：調和と記憶の守護者</h2>
                        <p className="mb-4">ISFJは、過去の経験から学び、周囲の和を乱さないよう細心の注意を払います。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 優れた実務能力、強い責任感、そして相手への深い慈しみ。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 謙虚すぎて自分を過小評価し、ノーと言えないことでストレスを溜めがちです。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るISFJ：聖母のような包容力</h2>
                        <p className="mb-4">ラブキャラ64によると、ISFJはまさに「愛の化身」のような存在です。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-pink-50 p-4 rounded-lg">
                                <h3 className="font-bold text-pink-700 mb-1">最後の恋人（FAPE）</h3>
                                <p className="text-sm">相手のありのままを肯定し、何も言わずに包み込むような優しさを持っています。彼らといると、多くの人が「本当の自分」を取り戻したような感覚になります。</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h3 className="font-bold text-yellow-700 mb-1">忠犬ハチ公（FCPE）</h3>
                                <p className="text-sm">素直で人懐っこく、人を愛する力が非常に強いです。一方で、仕事や家事は真面目で、誰からも頼られるしっかり者の一面もあります。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ISFJの恋愛攻略法：「感謝」という報酬を与える</h2>
                        <p className="mb-4 leading-relaxed">
                            ISFJを攻略する上で最も重要なのは、<span className="font-bold text-teal-600">「彼らの沈黙の努力に光を当てること」</span>です。「いつも美味しいご飯をありがとう」「掃除してくれたんだね、助かるよ」といった具体的な感謝が、彼らにとっての最大の愛情栄養素となります。<br /><br />
                            彼らが自分の希望を言わない時は、「今日はあなたがやりたいことを教えて」と優しくエスコートし、彼ら自身が「大切にされている」と実感できる時間を意図的に作ってあげましょう。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ISFJの優しさに甘えすぎていませんか？</h2>
                        <p className="text-gray-600 mb-6 text-sm">二人の関係をより長く、深く続けるためのヒントをAIがアドバイス。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            相性を詳しくみる
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
