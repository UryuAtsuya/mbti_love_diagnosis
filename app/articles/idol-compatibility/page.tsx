import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function IdolCompatibility() {
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
                    【保存版】MBTI 16タイプ別・相性の良い芸能人とアイドル徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～推しとの「ラブキャラ」的な親和性は？～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 16タイプ（MBTI）別に相性の良い人気アイドルをリストアップし、当サイト独自の「ラブキャラ診断」で分析。</li>
                            <li><span className="font-bold">独自の視点：</span> 「ボス猫」「忠犬ハチ公」といった具体的な恋愛キャラクターを掛け合わせ、推しへの「ハマり方」や「理想の関係性」を深掘り。</li>
                            <li><span className="font-bold">結論：</span> 性格の不一致（MBTI）があっても、ラブキャラの補完関係を知ることで、メンタルを安定させた「一生推せる推し活」が可能になります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：なぜ「推しのMBTI」を知ると、もっと好きになるのか？</h2>
                        <p className="leading-relaxed">
                            今やK-POPアイドルや日本の芸能界でも、自身のMBTIを公表するのは当たり前になりました。推しのMBTIを知ることは、単なるプロフィール確認ではありません。<br />
                            「なぜあの時、あんなリアクションをしたのか？」「なぜあの曲にこだわったのか？」という推しの言動のバックボーンを理解する鍵となります。<br /><br />
                            本記事では、あなたのMBTIと最も引き付け合う「理想の推しタイプ」を、当サイト独自のキャラクター分類「ラブキャラ64」の視点を交えて徹底解説します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 外向型（E）の推し × あなた：エネルギーをもらう関係</h2>
                        <p className="mb-4">エネルギッシュなパフォーマンスで周囲を魅了する「E（外向型）」のアイドル。彼らとの相性を、キャラ特性から読み解きます。</p>

                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-teal-700 mb-2">【ENFP（広報運動家）のアイドル】</h3>
                            <ul className="list-none space-y-2 mb-3 text-sm bg-gray-50 p-4 rounded-md">
                                <li><span className="font-bold">主な有名人：</span> V（BTS）、サナ（TWICE）、ダニエル（NewJeans）</li>
                                <li><span className="font-bold">相性が良いタイプ：</span> ISTP、INTJ</li>
                            </ul>
                            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                                <p className="text-sm"><span className="font-bold">ラブキャラ的分析：</span><br />
                                    ENFPの推しは、自由奔放で愛されキャラの<span className="font-bold text-pink-600">「恋愛モンスター（FCPO）」や、天真爛漫な「デビル天使（FAPO）」</span>の要素を強く持っています。あなたが冷静に周囲を支える<span className="font-bold text-teal-600">「敏腕マネージャー（FARE）」</span>タイプなら、推しの奔放さを楽しみつつ、最適な距離で見守る「盤石の推し活」ができるでしょう。</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-teal-700 mb-2">【ENTJ（指揮官）の芸能人】</h3>
                            <ul className="list-none space-y-2 mb-3 text-sm bg-gray-50 p-4 rounded-md">
                                <li><span className="font-bold">主な有名人：</span> キー（SHINee）、カズハ（LE SSERAFIM）</li>
                                <li><span className="font-bold">相性が良いタイプ：</span> ISFP、INTP</li>
                            </ul>
                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                <p className="text-sm"><span className="font-bold">ラブキャラ的分析：</span><br />
                                    ストイックに目標を追い続けるENTJの推しは、器の大きい<span className="font-bold text-orange-600">「キャプテンライオン（LAPE）」や、圧倒的オーラの「ボス猫（LCRO）」</span>のような存在。彼らを全力で信奉し、支えたい願う<span className="font-bold text-teal-600">「忠犬ハチ公（FCPE）」</span>タイプのファンにとって、彼らは人生の指針となるような最高の推しになります。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. 内向型（I）の推し × あなた：深く静かに共鳴する関係</h2>
                        <p className="mb-4">ミステリアスで、独自の強い世界観を持つ「I（内向型）」のアイドル。彼らとの相性は「精神的な共鳴」がポイントです。</p>

                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-teal-700 mb-2">【INFP（仲介者）のアイドル】</h3>
                            <ul className="list-none space-y-2 mb-3 text-sm bg-gray-50 p-4 rounded-md">
                                <li><span className="font-bold">主な有名人：</span> ジョングク（BTS）、モモ（TWICE）、ハニ（NewJeans）</li>
                                <li><span className="font-bold">相性が良いタイプ：</span> ENFJ、ENTJ</li>
                            </ul>
                            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                <p className="text-sm"><span className="font-bold">ラブキャラ的分析：</span><br />
                                    感受性豊かなINFPの推しは、独特の世界観を持つ<span className="font-bold text-purple-600">「不思議生命体（FARO）」や、深い慈愛に満ちた「最後の恋人（FAPE）」</span>の側面を持っています。あなたが周囲を明るくリードする<span className="font-bold text-teal-600">「主役体質（LCPO）」</span>であれば、推しの持つ内面的な深さに強く惹かれ、共に成長するような深い絆を感じられるはずです。</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-teal-700 mb-2">【INFJ（提唱者）の芸能人】</h3>
                            <ul className="list-none space-y-2 mb-3 text-sm bg-gray-50 p-4 rounded-md">
                                <li><span className="font-bold">主な有名人：</span> ウォヌ（SEVENTEEN）、カイ（EXO）</li>
                                <li><span className="font-bold">相性が良いタイプ：</span> ENFP、ENTP</li>
                            </ul>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                <p className="text-sm"><span className="font-bold">ラブキャラ的分析：</span><br />
                                    理想主義で思慮深いINFJの推しは、大人っぽくクールな<span className="font-bold text-blue-600">「憧れの先輩（LARO）」や、人間関係の機微を読む「カリスマバランサー（LARE）」</span>のような佇まい。あなたが好奇心旺盛で人懐っこい<span className="font-bold text-teal-600">「ちゃっかりうさぎ（FCRE）」</span>なら、推しの持つ深い思考に常に新しい刺激をもらい、飽きることのない推し活を楽しめます。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. 【特別コラム】「推しとの相性」をラブキャラで最大化する方法</h2>
                        <p className="mb-4">MBTIで「性格の相性」が分かったら、次は当サイトの<span className="font-bold">「ラブキャラ診断」</span>の結果を照らし合わせてみてください。</p>
                        <p className="mb-4">例えば、推しとの性格（MBTI）が最高でも、あなたのラブキャラが<span className="font-bold text-red-500">「ツンデレヤンキー（LCPE）」</span>のように素直になれないタイプだと、推しの特定の言動に対して「自分だけ分かってもらえていない」と意地を張ってしまい、心が疲れてしまうかもしれません。</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h4 className="font-bold text-red-600 mb-2">🔥 情熱派のあなたへ</h4>
                                <p className="text-sm">「推しに認知されたい！一番の理解者でいたい」なら、情熱的なアプローチが光る「ロマンスマジシャン（FCRO）」的マインド。</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-lg">
                                <h4 className="font-bold text-emerald-600 mb-2">🕊 慈愛派のあなたへ</h4>
                                <p className="text-sm">「推しが幸せならそれでいい…」なら、究極の慈愛を持つ「最後の恋人（FAPE）」的マインド。</p>
                            </div>
                        </div>
                        <p>自分のラブキャラを知ることで、自分の「推し活における感情の癖」が分かり、メンタルを削らない「持続可能なファン活動」が可能になります。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">おわりに：診断結果を推し活の「お守り」に</h2>
                        <p className="mb-4">MBTIやラブキャラは、誰かを固定観念で縛るためのものではありません。<span className="font-bold text-teal-600">「自分と推しは、どんなふうにエネルギーを交換し合っているのか？」</span>を論理的に知るためのツールです。</p>
                        <p className="mb-6">相性が良いと出れば自信を持って推し、もし「相反する」と出ても、それはあなたが推しの「自分にはない素晴らしい部分」に惹かれているという純粋な証拠です。<br /><br />
                            「もっと詳しく自分のキャラを知りたい！」と思った方は、ぜひ当サイトのMBTI×ラブキャラ相性診断を試してみてください。あなたの推し活ライフが、今日からさらに輝き始めるはずです。</p>

                        <div className="mt-8 text-center">
                            <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                                まずは無料で診断する
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
