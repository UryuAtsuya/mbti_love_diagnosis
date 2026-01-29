import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ESFPArticle() {
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
                    【決定版】ESFP（エンターテイナー）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 今この瞬間を全力で楽しみ、周囲を明るく照らす天性のパフォーマーです。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 刺激的で情熱的な恋を好み、恋人と楽しい思い出を共有することに最大の価値を置きます。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 常に注目の的となる<span className="font-bold">「主役体質（LCPO）」であり、愛を求める「恋愛モンスター（FCPO）」</span>の顔も持ちます。</li>
                            <li><span className="font-bold">攻略法：</span> 変化に富んだデートと、彼らの存在を全肯定する「最高の観客」になることが近道です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ESFP（エンターテイナー）という「人生の主役」</h2>
                        <p className="leading-relaxed">
                            ESFP（エンターテイナー）は、そこにいるだけで場が華やぐ圧倒的な陽のエネルギーの持ち主です。退屈を何よりも嫌い、五感で感じる喜びを追求する彼らは、恋愛においてもドラマチックな展開を好みます。<br /><br />
                            しかし、その明るさの裏には「孤独への不安」や「人知れぬ悩み」を隠していることもあります。本記事では、彼らの華やかな外見と、ラブキャラから紐解く繊細な内面の両面から解説します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：瞬間の美しさを切り取る天才</h2>
                        <p className="mb-4">ESFPは観察力が非常に鋭く、周囲の人の感情の変化にも敏感です。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 高い適応力、人を惹きつけるカリスマ性、そして惜しみないサービス精神。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 長期的な計画を立てるのが苦手で、衝動的な行動で周囲を驚かせることがあります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るESFP：愛されキャラの真髄</h2>
                        <p className="mb-4">ラブキャラ64のデータによると、ESFPはその社交性が恋愛スタイルに直結しています。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h3 className="font-bold text-yellow-700 mb-1">主役体質（LCPO）</h3>
                                <p className="text-sm">自然と目立ち、周囲に影響を与える存在です。しかし、実は悩みを誰にも見せずに生き抜く強がりな一面も持っています。</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h3 className="font-bold text-red-700 mb-1">恋愛モンスター（FCPO）</h3>
                                <p className="text-sm">お調子者の愛されキャラであり、人を愛し、人に愛されることで自分の存在価値を確認します。常に恋の熱量を必要とするタイプです。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ESFPの恋愛攻略法：飽きさせない「祭りの相棒」に</h2>
                        <p className="mb-4 leading-relaxed">
                            ESFPを「沼らせる」ためには、<span className="font-bold text-teal-600">「彼らの自由を楽しみ、共に新しい体験を面白がること」</span>が重要です。マンネリは彼らにとって毒。常に新しいスポットやアクティビティを提案し、彼らの興奮をさらに盛り上げられるパートナーになりましょう。<br /><br />
                            また、彼らがふと見せる「主役ではない自分」の弱音を優しく受け止めることができれば、代わりのきかない特別な存在になれるはずです。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ESFPの熱量を誰よりも理解したい？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのキャラがESFPにとって「最高の観客」になれるか教えます。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            相性を詳しく見る
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
