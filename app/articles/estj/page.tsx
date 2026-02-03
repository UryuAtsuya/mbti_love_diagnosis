import Link from 'next/link';
import { ArrowLeft, Sparkles, Gavel, Heart, MessageCircle, TrendingUp } from 'lucide-react';

export default function ESTJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-blue-500 h-32 flex items-center justify-center">
                    <Gavel className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】ESTJ（幹部）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-indigo-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、正義と秩序の「勝利の愛」～</span>
                    </h1>

                    <div className="prose prose-indigo max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-indigo-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 社会の規律を守る、頼れるオーガナイザー。効率と伝統を重んじ、目標達成に邁進する。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 嘘や曖昧さを嫌い、互いに成長し合える「盤石な基盤」をパートナーに求める。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 包容力と指導力の「憧れの先輩（LARO）」や、誠実な「忠犬ハチ公（FCPE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 感情的な甘えよりも「誠実な努力」を見せること。未来に向けた建設的な計画を共有する。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">1. ESTJ（幹部）という「正義の執行者」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ESTJ（幹部）は、混沌とした世界に秩序をもたらす、生粋の「実務家」です。彼らの辞書に「曖昧」という言葉はありません。正しいか正しくないか、効率的なかそうでないか。非常に明確な基準を持って行動し、周囲を高いレベルへと導きます。<br /><br />
                            彼らにとって何よりも重要なのは、社会的な信用と誠実さです。「口先だけの人」を最も嫌い、自らも一度口にした言葉は必ず守り抜きます。そのストイックな姿勢は、パートナーにとって最強の「盾」となります。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ESTJを動かす3つの行動指針</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                                <div className="p-3 bg-white rounded-lg border border-indigo-100 text-center shadow-sm">
                                    <span className="font-bold text-indigo-600 block mb-1">効率こそ最大の誠実</span>
                                    <p>ダラダラ過ごすよりも、やるべきことを完璧に終わらせることに愛を感じます。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-indigo-100 text-center shadow-sm">
                                    <span className="font-bold text-indigo-600 block mb-1">伝統の継承</span>
                                    <p>家族の行事や社会のルールを大切にし、それを守ることに誇りを持っています。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-indigo-100 text-center shadow-sm">
                                    <span className="font-bold text-indigo-600 block mb-1">即断即決のリーダーシップ</span>
                                    <p>迷っている時間は損失。自信を持って道を示し、パートナーを不安にさせません。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">2. 恋愛傾向：100%の「約束」と、不器用な情熱</h2>
                        <p className="mb-6 leading-relaxed">
                            ESTJの恋愛は、非常にストレートで嘘がありません。駆け引きや思わせぶりな態度は無駄と考え、自分の気持ちと相手への期待を明確に伝えます。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ESTJが「真剣交際」を決める相手</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-indigo-200">自立しており、尊敬できる人：</span>
                                    <p className="text-sm mt-1">「支えてほしい」だけの人ではなく、切磋琢磨して共に成長できる「パートナー」を求めます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-indigo-200">時間と約束を厳守する人：</span>
                                    <p className="text-sm mt-1">1分の遅刻でも「信頼に欠ける」と判断することがあります。小さな約束の積み重ねが彼らの愛情を育てます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-indigo-200">建設的な批判を受け入れられる人：</span>
                                    <p className="text-sm mt-1">ESTJのアドバイスは、相手を想うがゆえの言葉です。それを「人格攻撃」ではなく「ギフト」と受け取れるかどうかが鍵になります。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">3. ラブキャラ診断で見るESTJ：圧倒的な包容力</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ESTJの「リードする愛」の正体が明らかになります。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                <h3 className="text-lg font-bold text-indigo-800 mb-2 flex items-center text-sm">
                                    <TrendingUp className="w-4 h-4 mr-2" />
                                    憧れの先輩（LARO）
                                    <span className="text-xs ml-3 text-white bg-indigo-500 px-2 py-0.5 rounded-full">最強リーダー</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-indigo-900">
                                    自分のペース（RO）で人生を切り拓き、パートナーに対しても的なアドバイス（LA）を与えるESTJ。その頼もしさは、多くの人に「ついて行きたい」と思わせるカリスマ性を生み出します。
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    忠犬ハチ公（FCPE）
                                    <span className="text-xs ml-3 text-white bg-blue-500 px-2 py-0.5 rounded-full">献身の裏側</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-blue-900">
                                    意外にも「相手の役に立ちたい」という欲求（FA）と「期待に応えたい」という責任感（CE）が強いのもESTJの特徴。表向きは厳しいリーダーでも、愛する人の前では献身的で一途な一面を見せます。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-indigo-500 pl-4 mb-6">4. 実習：ESTJと「歴史」を刻むための最強戦略</h2>
                        <p className="mb-6 leading-relaxed">
                            ESTJは「察する」ことが非常に苦手です。彼らに「私の気持ち、分かってる？」と聞くのは、彼らを無力感に陥れ、反発を招くだけです。<br /><br />
                            彼らとの絆を深める最強の方法は、<span className="font-bold text-indigo-600">「共通の目標」を持ち、それを数値化すること</span>です。例えば、「来年の夏までに30万貯めて北海道に行こう」といった具体的なプラン。彼らは目標があると驚異的なパフォーマンスを発揮し、その過程であなたへの愛を深めていきます。彼らの「言葉より成果」という愛し方を、全力で肯定してあげてください。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">有言実行なあなたのための、高精度診断</h2>
                            <p className="mb-8 font-medium">
                                ESTJのあなたの効率性と正義感を理解し、<br />
                                理想の未来を共に築ける「最高ランク」の相手は？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-indigo-800 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                合理的相性診断を開始
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-indigo-300" />
                        <span>「厳しい人だと思ってた彼が、実は不器用なだけだと気づけました。」（20代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
