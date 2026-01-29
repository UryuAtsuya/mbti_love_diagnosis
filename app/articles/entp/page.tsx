import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ENTPArticle() {
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
                    【決定版】ENTP（討論者）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 常識を疑い、新しい可能性を求めて挑戦を続ける冒険家です。</li>
                            <li><span className="font-bold">恋愛傾向：</span> スリルと変化を好み、知的な駆け引きを楽しめる関係を望みます。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 恋愛をゲームのように彩る<span className="font-bold">「ロマンスマジシャン（FCRO）」であり、奔放な「デビル天使（FAPO）」</span>でもあります。</li>
                            <li><span className="font-bold">攻略法：</span> 変化を恐れず、彼らの繰り出す突飛な提案に全力で乗り、時にはカウンターを当てるような活発さが必要です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ENTP（討論者）という「現状の破壊者」</h2>
                        <p className="leading-relaxed">
                            ENTP（討論者）は、議論すること自体に喜びを感じ、既存のルールを壊して新しい仕組みを作ることが大好きです。頭の回転が非常に速く、ユーモアに溢れたその会話術は、どんな社交場でも注目の的になります。<br /><br />
                            恋愛においては、安定や平穏よりも「変化と刺激」を優先します。昨日言っていたことと今日言っていることが違っても、それは彼らが常に進化している証拠。そんな彼らと共に、変化し続ける人生を楽しめるかどうかが相性の分かれ目です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：飽くなき好奇心とアドリブ力</h2>
                        <p className="mb-4">ENTPは、型にはまった生活を何よりも嫌います。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 高い発想力、適応力、そしてどんなピンチもチャンスに変えるポジティブさ。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 興味がすぐに他へ移りやすく、細かい事務作業や長期的な継続が苦手です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るENTP：トリックスターの顔</h2>
                        <p className="mb-4">ラブキャラ64によると、ENTPは相手を魅了する天才的な手腕を持っています。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="font-bold text-orange-700 mb-1">ロマンスマジシャン（FCRO）</h3>
                                <p className="text-sm">相手が何を言えば喜ぶか、どうすれば心拍数が上がるかを熟知しています。彼らとの時間は、まるで魔法にかかったような高揚感に包まれます。</p>
                            </div>
                            <div className="bg-pink-50 p-4 rounded-lg">
                                <h3 className="font-bold text-pink-700 mb-1">デビル天使（FAPO）</h3>
                                <p className="text-sm">驚くほど優しい顔を見せたかと思えば、急に音信不通になったり自由奔放に振る舞ったりします。その「予測不能さ」が、中毒的な依存性を生むことも。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ENTPの恋愛攻略法：彼らを「飽きさせない」こと</h2>
                        <p className="mb-4 leading-relaxed">
                            ENTPを落とすには、<span className="font-bold text-teal-600">「常に新しい顔を見せ続けること」</span>が重要です。昨日とは違うファッション、昨日とは違う話題、そんな小さな変化が彼らの好奇心を刺激し続けます。<br /><br />
                            また、彼らの議論に対して「喧嘩を売られている」と怯えてはいけません。むしろ「その意見、面白いけどこういう視点もあるよね」と、知的に応戦してみてください。彼らは自分を論理的に言い負かせる、あるいは刺激的な視点をくれるパートナーに、生涯の敬意と愛を抱きます。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ENTPとの「恋の駆け引き」に勝ちたい？</h2>
                        <p className="text-gray-600 mb-6 text-sm">相手の脳を刺激する、あなただけの攻略マトリクスを生成します。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            今すぐ診断する
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
