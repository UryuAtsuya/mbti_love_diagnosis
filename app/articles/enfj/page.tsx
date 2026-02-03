import Link from 'next/link';
import { ArrowLeft, Sparkles, Heart, Sun, MessageCircle, Star } from 'lucide-react';

export default function ENFJArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-orange-400 to-yellow-400 h-32 flex items-center justify-center">
                    <Sun className="text-white w-12 h-12 animate-spin-slow" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】ENFJ（主人公）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-orange-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、愛と正義の「理想郷」～</span>
                    </h1>

                    <div className="prose prose-teal max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-orange-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 生まれながらのリーダー。他者の成長を心から喜び、導く情熱家。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 相手を全肯定し、共に高みを目指す「利他的な愛」が基本スタイル。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 期待に応える勇者「忠犬ハチ公（FCPE）」や、無敵の「キャプテンライオン（LAPE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 感謝を言葉で伝え、彼らが「弱音を吐ける唯一の場所」になる。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">1. ENFJ（主人公）という「光の導き手」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ENFJ（主人公）は、その名の通り物語の中心で周囲を鼓舞し、団結させる力を持っています。彼らの原動力は「自分一人の幸せ」ではなく「関わるすべての人々の向上」にあります。<br /><br />
                            相手が何を求めているかを直感的に察知し、それを実現するための最適なルートを提示する能力は随一です。しかし、その輝きの裏には「誰からも嫌われたくない」という強い承認欲求や、他者の感情を吸い込みすぎてしまう繊細さも隠されています。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ENFJの隠れた苦悩</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-white rounded-lg border border-gray-100">
                                    <span className="font-bold text-orange-600 block mb-1">過剰な自己犠牲</span>
                                    <p>相手を優先しすぎるあまり、自分のニーズが分からなくなる「エモーショナル・バーンアウト（感情的燃え尽き）」を起こしやすいです。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-gray-100">
                                    <span className="font-bold text-orange-600 block mb-1">「完璧な自分」の呪縛</span>
                                    <p>理想的な人間であろうとするプレッシャーから、失敗や弱みを見せることに強い恐怖を感じることがあります。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">2. 恋愛傾向：100%の愛を注ぎ、100%の愛を望む</h2>
                        <p className="mb-6 leading-relaxed">
                            ENFJの恋愛は、非常に献身的かつ情熱的です。「好きな人のためなら何でもできる」という精神で、相手の夢を自分の夢のようにサポートします。しかし、それは裏を返せば、相手にも同等の熱量や感謝を求めているというサインでもあります。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ENFJが「離れたくない」と思う相手の特徴</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">リアクションが豊富で誠実な人：</span>
                                    <p className="text-sm mt-1">彼らの献身に対して「ありがとう」「嬉しい」という言葉を惜しみなく使える相手に、深い信頼を寄せます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">共に理想を語り合える人：</span>
                                    <p className="text-sm mt-1">未来の話や、お互いの価値観について語り合う時間を何よりも大切にします。知的な刺激を求める側面も強いです。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">「素の自分」を受け入れてくれる人：</span>
                                    <p className="text-sm mt-1">頑張りすぎて疲れた時、ダメな自分を「それでいいよ」と包み込んでくれる包容力に、何よりも救われます。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">3. ラブキャラ診断で見るENFJ：包容力と決断の支配者</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ENFJの「愛の質」がより浮き彫りになります。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center">
                                    <Star className="w-4 h-4 mr-2" />
                                    忠犬ハチ公（FCPE）
                                    <span className="text-xs ml-3 text-white bg-orange-400 px-2 py-0.5 rounded-full">献身タイプ</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-orange-900">
                                    相手に合わせて（FA）全力で尽くす一方で、自分も全力で甘えたい（CE）という可愛らしい一面を持つENFJ。このキャラが強く出ると、相手の期待に応えようと猛烈に努力しますが、その分「捨てられる不安」にも敏感になります。
                                </p>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                                <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center">
                                    <Heart className="w-4 h-4 mr-2" />
                                    キャプテンライオン（LAPE）
                                    <span className="text-xs ml-3 text-white bg-yellow-500 px-2 py-0.5 rounded-full">最強タイプ</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-yellow-900">
                                    自分から積極的にリードし（LA）、相手のすべてを優しく受け止める（PE）。ENFJの真骨頂であるリーダーシップと包容力が融合した理想的なキャラクターです。どんな困難も二人で乗り越えようとする、頼もしすぎる相棒となります。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">4. ENFJを「一生離したくない」と思わせる極意</h2>
                        <p className="mb-6 leading-relaxed">
                            ENFJと長く幸せに過ごすためのキーワードは<span className="font-bold text-orange-600">「心のデトックス」</span>です。<br /><br />
                            彼らは外では常に「完璧な主人公」を演じています。家の中、あるいは二人きりの空間だけは、彼らが鎧を脱ぎ捨てて「ただの自分」に戻れるように配慮してください。彼らの愚痴や弱音を否定せず最後まで聞き、「いつも頑張ってくれてありがとう」とハグするだけで、彼らの愛のバッテリーはフルチャージされます。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-orange-500 to-yellow-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">あなたの愛の物語、続きを診断しよう</h2>
                            <p className="mb-8 font-medium">
                                ENFJのあなたを心から癒やし、<br />
                                共に成長できる最高のパートナーはどのタイプ？
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-orange-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                二人の相性を詳しく見る（無料）
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-orange-300" />
                        <span>「夫がまさにこのタイプ。接し方のヒントが見つかりました！」（40代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
