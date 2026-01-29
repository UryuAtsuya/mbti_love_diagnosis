import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ENTJArticle() {
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
                    【決定版】ENTJ（指揮官）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 圧倒的な決断力とカリスマ性を備えた、生まれながらのリーダーです。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 恋愛も「目標達成」の一つと捉え、主導権を握って相手を力強くリードします。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 支配的な<span className="font-bold">「ボス猫（LCRO）」の気質と、強固な保護欲を持つ「キャプテンライオン（LAPE）」</span>の二面性を持ちます。</li>
                            <li><span className="font-bold">攻略法：</span> 相手の有能さを尊敬しつつ、自分自身の意見もしっかりと持った「戦友」を目指しましょう。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ENTJ（指揮官）という「勝利への案内人」</h2>
                        <p className="leading-relaxed">
                            ENTJ（指揮官）は、常に明確な目標を持ち、それを最短距離で達成するための組織力と決断力を持っています。恋愛においてもその積極性は変わらず、狙った相手には迷いなくアプローチを仕掛けます。<br /><br />
                            しかし、その強すぎるリーダーシップは、時に相手に威圧感を与えてしまうことも。彼らが真に求めているのは、自分の野望を共に追いかけてくれる、強くて賢いパートナーです。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：限界を突破し続ける情熱</h2>
                        <p className="mb-4">ENTJは、現状維持を嫌い、常に自己成長と成功を追い求めます。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> カリスマ性、効率的な実行力、そして困難を跳ね返す強靭なメンタル。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 過程よりも結果を重視しすぎるため、周囲の繊細な感情を置き去りにしてしまうことがあります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るENTJ：支配と献身のバランス</h2>
                        <p className="mb-4">ラブキャラ64でENTJを読み解くと、その「守る力の強さ」が明確になります。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-bold text-purple-700 mb-1">ボス猫（LCRO）</h3>
                                <p className="text-sm">関係性の主導権を常に握っていたいという欲求があります。相手を自分の管理下に置くことで、安心感を得る傾向があります。</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="font-bold text-orange-700 mb-1">キャプテンライオン（LAPE）</h3>
                                <p className="text-sm">一度「自分のもの」と認識した相手に対しては、全身全霊で守り抜き、最高級の愛情と豊かさを提供しようとします。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ENTJの恋愛攻略法：議論を楽しみ、尊敬を勝ち取る</h2>
                        <p className="mb-4 leading-relaxed">
                            ENTJは、自分に従順なだけの相手にはすぐに飽けてしまいます。<span className="font-bold text-teal-600">「自分の意見を論理的にぶつけられる強さ」</span>を持ち、彼らと質の高い議論ができることが、彼らの興味を惹きつけ続けるコツです。<br /><br />
                            デートの際は、彼らが立てた完璧なプランを楽しみつつ、「次は私がここを予約するね」といった具合に、能動的に動ける姿勢を見せると、彼らはあなたを「対等なパートナー」として深く信頼するようになります。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ENTJの心を掴むあなたの「強み」は？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのラブキャラ診断結果から、最適なアプローチを導き出します。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            今すぐ診断する
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
