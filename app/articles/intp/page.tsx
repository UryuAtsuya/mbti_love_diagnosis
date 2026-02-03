import Link from 'next/link';
import { ArrowLeft, Sparkles, Lightbulb, Coffee, MessageCircle, Search } from 'lucide-react';

export default function INTPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-32 flex items-center justify-center">
                    <Lightbulb className="text-white w-12 h-12 animate-pulse" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】INTP（論理学者）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-purple-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、知的好奇心の「深淵」～</span>
                    </h1>

                    <div className="prose prose-purple max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-purple-50 p-6 rounded-2xl border border-purple-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-purple-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 常識を疑い、真理を追求する天才肌。マイペースで独自の世界観を持つ。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 束縛を極端に嫌い、知的な刺激と「放っておいてくれる優しさ」を求める。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 世渡り上手な「恋愛マジシャン（FCRO）」や、一風変わった「謎の生命体（FARO）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 面倒な駆け引きは避け、直球の誠実さと「一人の時間」の完全保障を提示する。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-purple-500 pl-4 mb-6">1. INTP（論理学者）という「孤独な真理探究者」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            INTP（論理学者）を一言で表すなら「歩くデータベース」あるいは「概念の破壊者」です。彼らは世の中の当たり前をそのまま受け入れることはありません。常に「その根拠は？」「もっと効率的な方法はないか？」と自問自答し、頭の中で複雑なパズルを解き続けています。<br /><br />
                            周囲からは「何を考えているか分からない」「冷淡」と思われることもありますが、一度興味を持った分野に対しては、寝食を忘れるほどの凄まじい集中力（Ti：内向的思考）を発揮します。この純粋すぎる好奇心こそが、彼らの最大の魅力なのです。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">INTPが大切にする3つの聖域</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                                <div className="p-3 bg-white rounded-lg border border-purple-100 text-center">
                                    <span className="font-bold text-purple-600 block mb-1">思考の自由</span>
                                    <p>誰にも定義されない、独自の思考プロセスを邪魔されることを最も嫌います。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-purple-100 text-center">
                                    <span className="font-bold text-purple-600 block mb-1">物理的な孤独</span>
                                    <p>人間関係に疲弊しやすいため、充電のための一人の時間は生活必需品です。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-purple-100 text-center">
                                    <span className="font-bold text-purple-600 block mb-1">無意味の排除</span>
                                    <p>形式的な挨拶や、結論のない世間話（スモールトーク）に苦痛を感じやすいです。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-purple-500 pl-4 mb-6">2. 恋愛傾向：最も「攻略難易度が高い」と言われる理由</h2>
                        <p className="mb-6 leading-relaxed">
                            INTPの恋愛は、非常にマイペースです。感情の起伏をあまり表に出さないため、相手は「好かれているのか不安」になりがちですが、彼らにとって「一緒にいて疲れない＝最高の求愛」だったりします。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">INTPが心を許す相手の条件</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-purple-200">知的好奇心が高い：</span>
                                    <p className="text-sm mt-1">自分のマニアックな話を「面白そう！」と面白がってくれる相手を、無意識に探しています。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-purple-200">束縛を一切しない：</span>
                                    <p className="text-sm mt-1">「週末は必ず会う」「LINEは即レス」といったルールを押し付けない、自立した人を好みます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-purple-200">感情的に爆発しない：</span>
                                    <p className="text-sm mt-1">論理的な話し合いができる相手なら信頼しますが、泣いたり怒鳴ったりする感情的なアプローチにはフリーズしてしまいます。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-purple-500 pl-4 mb-6">3. ラブキャラ診断で見るINTP：器用と不器用の同居</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、INTPのミステリアスな魅力が増幅されます。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                                <h3 className="text-lg font-bold text-purple-800 mb-2 flex items-center">
                                    <Coffee className="w-4 h-4 mr-2" />
                                    恋愛マジシャン（FCRO）
                                    <span className="text-xs ml-3 text-white bg-purple-400 px-2 py-0.5 rounded-full">意外な一面</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-purple-900">
                                    実は人間観察が趣味であるINTP。相手のニーズを先回りして（FA）計算づくで動く「ずる賢い（RO）」な側面が恋愛で発揮されることがあります。さらっと相手の喜ぶことを言い、気づけば自分の世界に引き込んでしまう、文字通りマジシャンのような魅力です。
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
                                    <Search className="w-4 h-4 mr-2" />
                                    謎の生命体（FARO）
                                    <span className="text-xs ml-3 text-white bg-blue-500 px-2 py-0.5 rounded-full">本来の姿</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-blue-900">
                                    自分の研究（趣味）に没頭している時のINTP。周囲を気にせず自分の世界を突き進む姿は、一部の人にとって強烈なフェチズムを刺激します。理解しようとするのではなく「放っておいてくれる」ことが最高の愛情表現となります。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-purple-500 pl-4 mb-6">4. 実習：INTPと「知的な幸福」を末永く享受するコツ</h2>
                        <p className="mb-6 leading-relaxed">
                            INTPは、言葉による愛情表現が極端に少ないタイプです。しかし、彼らがあなたに「面白い動画のURL」を送ってきたり、一緒に無言で過ごすことを許容し始めたら、それは彼らなりの最大級の「愛してる」のサインです。<br /><br />
                            正論で追い詰めず、彼らの突飛な発想を一緒に楽しむこと。そして何より、彼らを<span className="font-bold text-purple-600">「変人として放置する」</span>寛容さがあれば、INTPにとってあなたは唯一無二の、一生手放したくないパートナーになるでしょう。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-purple-600 to-blue-600 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">複雑なあなたを解き明かすデータ診断</h2>
                            <p className="mb-8 font-medium">
                                INTPのあなたの脳内を刺激し、<br />
                                互いの自由を尊重できる「共鳴相手」は誰？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-purple-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                科学的な相性診断を試みる
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-purple-300" />
                        <span>「彼がLINEを返さない理由がようやく理解できました…（笑）」</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
