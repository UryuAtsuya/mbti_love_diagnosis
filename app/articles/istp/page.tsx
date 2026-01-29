import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ISTPArticle() {
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
                    【決定版】ISTP（巨匠）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 冷静沈着で実利的。自分の手で世界を解き明かそうとする一匹狼の職人です。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 言葉による愛情表現は少なめですが、行動で示す誠実さと、適度な距離感を重視します。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 素直になれない<span className="font-bold">「ツンデレヤンキー（LCPE）」や、自らのペースを崩さない「ボス猫（LCRO）」</span>の気質を持ちます。</li>
                            <li><span className="font-bold">攻略法：</span> 干渉せず、彼らの「自由な遊び場」を尊重しつつ、いざという時に頼る姿勢が有効です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ISTP（巨匠）という「冷静なる冒険家」</h2>
                        <p className="leading-relaxed">
                            ISTP（巨匠）は、口数は少ないながらも、非常に高い状況判断能力とトラブル解決能力を持っています。自分の趣味やスキルの探求に没頭することを愛し、他人からの過度な期待や束縛を本能的に避ける傾向があります。<br /><br />
                            恋愛では「わかりにくい」と言われがちですが、その不器用な優しさを理解できたとき、非常に深く安定した関係を築くことができます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：実践的な知性の持ち主</h2>
                        <p className="mb-4">ISTPは、理屈よりも「どう動くか」を重視するリアリストです。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 冷静な分析力、どんなピンチも切り抜ける度胸、そして高い器用さ。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 感情の共有が苦手で、突然一人の世界に閉じこもってしまい相手を不安にさせることがあります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るISTP：ツンデレの奥にある情</h2>
                        <p className="mb-4">ラブキャラ64で見ると、ISTPの「不器用な愛」の正体が分かります。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-bold text-purple-700 mb-1">ツンデレヤンキー（LCPE）</h3>
                                <p className="text-sm">子どもっぽい素直さは出せませんが、仲間思いで情に厚いタイプです。大切な人に愛を与えつつ、実は同じくらい愛されたいという欲求を隠し持っています。</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-700 mb-1">ボス猫（LCRO）</h3>
                                <p className="text-sm">唯一無二の魅力を持ちながら、自分のペースを何よりも大切にします。繊細な一面を隠すために、あえてクールに振る舞っていることも多いです。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ISTPの恋愛攻略法：心地よい「放置」と「信頼」</h2>
                        <p className="mb-4 leading-relaxed">
                            ISTPを攻略するには、<span className="font-bold text-teal-600">「追いかけすぎないこと」</span>が鉄則です。「どこで何してるの？」といった質問は彼らを遠ざけます。むしろ「あなたが集中してる姿が好き」と伝え、彼らの没頭する時間を守ってあげましょう。<br /><br />
                            彼らが何かを直してくれたり、助けてくれたりした時に、その「技術と行動」を真っ直ぐに称賛することで、彼らはあなたに自分の居場所を見出すようになります。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">クールなISTPの「本音のキャラ」を知りたい？</h2>
                        <p className="text-gray-600 mb-6 text-sm">MBTIだけでは見えない、彼らの「愛の求め方」を診断します。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            相性診断を受ける
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
