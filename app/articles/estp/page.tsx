import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ESTPArticle() {
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
                    【決定版】ESTP（起業家）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 恐れを知らぬ行動力と鋭い観察眼を持ち、今この瞬間を最大限に楽しむタイプです。</li>
                            <li><span className="font-bold">恋愛傾向：</span> スリルと刺激に満ちた駆け引きを好み、言葉よりも行動や体験で愛を確かめ合います。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 相手を魅了する<span className="font-bold">「ロマンスマジシャン（FCRO）」であり、情に厚い「ツンデレヤンキー（LCPE）」</span>の顔も持ちます。</li>
                            <li><span className="font-bold">攻略法：</span> 重い束縛は厳禁。共に笑い、共に挑戦できる「最高の遊び相手」であることが絶対条件です。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ESTP（起業家）という「瞬間の支配者」</h2>
                        <p className="leading-relaxed">
                            ESTP（起業家）は、常に新しい刺激と可能性を求めて動き回っています。退屈な説明書を読むよりも、まずはやってみる。そんなエネルギッシュな姿は、異性の目に非常に魅力的に映ります。<br /><br />
                            恋愛においても、情熱的でスピーディーな展開を好みます。しかし、その奔放さの裏には、意外と仲間を大切にする熱い情も隠されています。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：実践的知性と圧倒的行動力</h2>
                        <p className="mb-4">ESTPは、理屈よりも五感（S）で感じる現実を信じます。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 高い適応力、説得力、そしてどんなピンチも楽しむポジティブなメンタル。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 計画性に欠け、その場のノリで相手を傷つけてしまったり、長期的な約束を忘れてしまったりすることがあります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るESTP：魅惑のトリックスター</h2>
                        <p className="mb-4">ラブキャラ64によると、ESTPは相手を魅了する天才的な手腕を持っています。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="font-bold text-orange-700 mb-1">ロマンスマジシャン（FCRO）</h3>
                                <p className="text-sm">魔法使いのように相手との距離感を掴むのが上手く、人間観察能力に優れています。いつの間にか相手を自分のペースに引き込む天才です。</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-bold text-purple-700 mb-1">ツンデレヤンキー（LCPE）</h3>
                                <p className="text-sm">子どもっぽい一面もありますが、実は情に厚く仲間思い。愛を与え、そして同じくらい愛されたいという、可愛らしい二面性を持っています。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ESTPの恋愛攻略法：退屈をさせない「戦友」に</h2>
                        <p className="mb-4 leading-relaxed">
                            ESTPを落とすには、<span className="font-bold text-teal-600">「彼らの自由を愛し、共に冒険に出る姿勢」</span>が不可欠です。細かいルールで縛るのではなく、彼らの挑戦を面白がり、「次はこれをやろう！」と一緒に盛り上がれる関係を目指しましょう。<br /><br />
                            彼らがふと見せる「不器用な情」を茶化さず、優しく受け止めることができれば、関係は一気に深まります。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ESTPを「沼らせる」アプローチを知りたい？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのキャラが、ESTPの「遊び相手」から「一生のパートナー」になれるか教えます。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            無料相性診断を受ける
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
