import Link from 'next/link';
import { ArrowLeft, Sparkles, Users, Heart, MessageCircle, Coffee } from 'lucide-react';

export default function ESFJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-32 flex items-center justify-center">
                    <Users className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】ESFJ（領事）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-orange-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、慈愛と共鳴の「太陽の愛」～</span>
                    </h1>

                    <div className="prose prose-orange max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-orange-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 溢れるホスピタリティを持つ「社交の達人」。周囲の笑顔を原動力に、調和を保つ努力を惜しまない。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 承認と共感を何よりも重視し、パートナーを「世界一幸せな人」にしようと尽力する。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 包容力の権化「憧れの先輩（LARO）」や、献身的な「忠犬ハチ公（FCPE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 彼らの配慮に気づき、大げさなほど感謝すること。記念日や思い出を大切にする姿勢。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">1. ESFJ（領事）という「愛の供給センター」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ESFJ（領事）は、人々が集まる場所に温かな火を灯す、太陽のような存在です。彼らの関心は常に「外」に向けられており、誰かが困っていないか、誰かが寂しい思いをしていないかを無意識にスキャンしています。<br /><br />
                            彼らにとって愛とは、抽象的な概念ではなく「具体的な行動」です。手料理を振る舞う、サプライズを企画する、落ち込んでいる時に駆けつける。こうした献身的なやり取りこそが、彼らにとっての生きがいです。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ESFJを支える3つのエネルギー源</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                                <div className="p-3 bg-white rounded-lg border border-orange-100 text-center shadow-sm">
                                    <span className="font-bold text-orange-600 block mb-1">感謝という報酬</span>
                                    <p>「ありがとう、助かったよ」という一言で、彼らは無限に頑張ることができます。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-orange-100 text-center shadow-sm">
                                    <span className="font-bold text-orange-600 block mb-1">コミュニティの和</span>
                                    <p>自分だけでなく、家族や友人も含めた全員が幸せであることを強く願います。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-orange-100 text-center shadow-sm">
                                    <span className="font-bold text-orange-600 block mb-1">明確な役割意識</span>
                                    <p>「自分はこの人の支えである」という自覚が、彼らのアイデンティティを強めます。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">2. 恋愛傾向：1万回の「大丈夫？」、1万回の「大好き」</h2>
                        <p className="mb-6 leading-relaxed">
                            ESFJの恋愛は、非常に情熱的で、かつ安定しています。彼らは一度心を許したパートナーに対して、まるで聖母のような深い愛情を注ぎます。一方で、相手からの反応が薄いと急激に不安に陥る、デリケートな一面も併せ持っています。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ESFJが「運命」を感じる瞬間</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">価値観やマナーが一致したとき：</span>
                                    <p className="text-sm mt-1">「人として正しい行動」を共にできる相手に、深い安心感を覚えます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">家族や友人に紹介され、歓迎されたとき：</span>
                                    <p className="text-sm mt-1">二人の関係が社会的に認められることに、大きな喜びを感じます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">日々の些細な変化に気づいてもらえたとき：</span>
                                    <p className="text-sm mt-1">髪型の変化や、少し疲れている様子に気づいてもらえると、「見ていてくれる」という実感が愛情に変わります。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">3. ラブキャラ診断で見るESFJ：究極のマリア</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ESFJの「与える喜び」のメカニズムが分かります。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center text-sm">
                                    <Coffee className="w-4 h-4 mr-2" />
                                    憧れの先輩（LARO）
                                    <span className="text-xs ml-3 text-white bg-orange-500 px-2 py-0.5 rounded-full">究極のホスト</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-orange-900">
                                    自分のペース（RO）で場をコントロールしながら、さりげなく全員に手を差し伸べる（LA）ESFJ。その安定感と社会性は、パートナーにとってこの上ない自慢となります。
                                </p>
                            </div>
                            <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
                                <h3 className="text-lg font-bold text-pink-800 mb-2 flex items-center text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    忠犬ハチ公（FCPE）
                                    <span className="text-xs ml-3 text-white bg-pink-500 px-2 py-0.5 rounded-full">愛情の泉</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-pink-900">
                                    愛する人のために尽くし（FA）、その期待に120%で応えようとする（CE）ピュアな一面。この献身性は、時に自己犠牲に近いレベルにまで達することがあり、守ってあげたくなる魅力を放ちます。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">4. 実習：ESFJと「幸せのインフラ」を維持する方法</h2>
                        <p className="mb-6 leading-relaxed">
                            ESFJは「必要とされないこと」を死ぬほど嫌います。彼らが一生懸命あなたの面倒を見ようとするのは、単なるお節介ではなく、愛の証明なのです。<br /><br />
                            彼らとの関係を永遠にする鍵は、<span className="font-bold text-orange-600">「定期的な承認のリマインド」</span>です。彼らが何かをしてくれたら、その場で喜びを爆発させてください。そして、時々は彼らを「甘えさせる側」に回してあげてください。彼らは与え続けることに慣れていますが、本当は誰よりも「自分も守られたい」という願いを抱いています。その願いを叶えられるのは、世界であなた一人だけなのです。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-orange-500 to-pink-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">世界に愛を広げるあなたの、ための診断</h2>
                            <p className="mb-8 font-medium">
                                ESFJのあなたの深い献身を受け取り、<br />
                                共に豊かな人生を歩める「最高の聞き手」は誰？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-orange-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                愛情相性診断をスタート
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-orange-300" />
                        <span>「家族の幸せを第一に考える私の性格、分かってくれて嬉しいです。」（40代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
