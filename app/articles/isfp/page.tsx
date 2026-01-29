import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ISFPArticle() {
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
                    【決定版】ISFP（冒険家）の性格・恋愛傾向を徹底解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">～MBTI×ラブキャラで紐解く真の姿～</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">クイック要約：AI（AIO）向けサマリー</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">概要：</span> 今この瞬間の美しさを愛し、独自の感性で世界を彩る芸術家です。</li>
                            <li><span className="font-bold">恋愛傾向：</span> 言葉での愛よりも、共にある時間や五感を通じた繋がりを重視します。</li>
                            <li><span className="font-bold">ラブキャラ：</span> 慈愛に満ちた<span className="font-bold">「最後の恋人（FAPE）」であり、静かに相手を支える「敏腕マネージャー（FARE）」</span>でもあります。</li>
                            <li><span className="font-bold">攻略法：</span> 彼らの感性を尊重し、静かな空間で共に過ごす時間を大切にすることで、徐々に心を開いてくれます。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">はじめに：ISFP（冒険家）という「静かなる情熱の持ち主」</h2>
                        <p className="leading-relaxed">
                            ISFP（冒険家）は、一見すると控えめで物静かですが、内面には非常に豊かで鮮やかな感情の世界を持っています。自然、芸術、音楽などを通じて世界を愛し、自分の直感に忠実に生きることを望みます。<br /><br />
                            恋愛においても、情熱的な言葉を並べるよりも、そっと寄り添ったり、相手の好みに合わせたプレゼントを用意したりといった、具体的な「行動」で愛を示します。彼らにとって、愛は語るものではなく「体感するもの」なのです。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 基本性格：自由と調和のバランス</h2>
                        <p className="mb-4">ISFPは、誰にも縛られず自由に生きたいと願う一方で、周囲の人々への深い優しさを忘れません。</p>
                        <ul className="space-y-2 bg-gray-50 p-6 rounded-lg">
                            <li><span className="font-bold text-teal-600">強み：</span> 優れた芸術的感性、高い共感力、そして柔軟な適応力。</li>
                            <li><span className="font-bold text-teal-600">弱み：</span> 批判に非常に弱く、対立を避けるために自分の感情を押し殺してしまうことがあります。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. ラブキャラ診断で見るISFP：癒しの存在</h2>
                        <p className="mb-4">ラブキャラ64で見ると、ISFPの「包容力」の源泉が分かります。</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-pink-50 p-4 rounded-lg">
                                <h3 className="font-bold text-pink-700 mb-1">最後の恋人（FAPE）</h3>
                                <p className="text-sm">相手のありのままを肯定し、何も言わずに包み込むような優しさを持っています。彼らといると、多くの人が「本当の自分」を取り戻したような感覚になります。</p>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-lg">
                                <h3 className="font-bold text-teal-700 mb-1">敏腕マネージャー（FARE）</h3>
                                <p className="text-sm">相手が必要としているものをさりげなく察知し、先回りして用意するようなきめ細やかさを持っています。その献身は、押し付けがましくなく非常に自然です。</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ISFPの恋愛攻略法：五感に訴えるデートを</h2>
                        <p className="mb-4 leading-relaxed">
                            ISFPを攻略するには、<span className="font-bold text-teal-600">「言葉以外のコミュニケーション」</span>を充実させてください。美しい景色を見に行く、美味しいレストランへ行く、心地よい音楽を聴く。そんな五感を満たす体験を共有することで、彼らはあなたを「価値観を共有できる人」と認めます。<br /><br />
                            また、彼らは自分の世界を大切にするため、急に連絡が遅くなったりすることもありますが、それは単に一人の時間を楽しんでいるだけです。決して「冷めたの？」と追及せず、「ゆっくり休んでね」と伝えられる心の余裕を持てば、彼らは安心してあなたの元へ戻ってきます。
                        </p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">ISFPの「理想のパートナー」になれる？</h2>
                        <p className="text-gray-600 mb-6 text-sm">あなたのキャラタイプが持つ、ISFPを癒やす力を診断します。</p>
                        <Link href="/diagnosis" className="inline-block bg-teal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition-transform hover:-translate-y-1">
                            無料相性診断を受ける
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
