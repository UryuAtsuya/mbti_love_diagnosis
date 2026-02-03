import Link from 'next/link';
import { ArrowLeft, Sparkles, Zap, Heart, MessageCircle, Rocket } from 'lucide-react';

export default function ESTPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-32 flex items-center justify-center">
                    <Rocket className="text-white w-12 h-12" />
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
                        【決定版】ESTP（起業家）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-orange-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、最速で直感的な「情熱の嵐」～</span>
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
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 行動力の塊。考えるよりも先に体が動く、スリルと実利を愛するリアリスト。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 駆け引きなしのド直球。ドラマチックな展開を好み、常に新鮮な刺激をパートナーと共有しようとする。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 圧倒的リーダーシップの「暴君（LCAD）」や、意外と律儀な「カリスマバランサー（LARE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 重い話は後回し。まずは一緒に遊び、彼らの判断力とセンスを全力で称賛すること。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">1. ESTP（起業家）という「都会の狩猟民族」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ESTP（起業家）は、16タイプの中で最も「今」という瞬間を濃密に生きる人々です。過去の後悔や未来の不安に時間を割くくらいなら、目の前のチャンスを掴み取り、全力で楽しむことを選びます。その圧倒的なエネルギーとカリスマ性は、自然と周囲に人を惹きつけます。<br /><br />
                            彼らにとって世界は、解決すべきパズルであり、楽しむべき競技場です。高い観察眼（Se）と論理的な判断力（Ti）で、どんな修羅場も笑顔で切り抜ける度胸を持っています。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ESTPが発揮する「勝負強さ」の秘密</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-white rounded-lg border border-orange-100 shadow-sm">
                                    <span className="font-bold text-orange-600 block mb-1">超・実践的リアリズム</span>
                                    <p>抽象的な議論には興味がありません。「で、どうすれば勝てるの？」という具体的な解決策にのみ心血を注ぎます。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-orange-100 shadow-sm">
                                    <span className="font-bold text-orange-600 block mb-1">非言語的な共感</span>
                                    <p>言葉での共感は苦手でも、相手の表情や仕草から瞬時にニーズを読み取り、スマートに対応する才能があります。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">2. 恋愛傾向：100回のLINEより、1回の「本気デート」</h2>
                        <p className="mb-6 leading-relaxed">
                            ESTPの恋愛は、非常にエネルギッシュで、かつダイレクトです. 好きになったら脇目も振らずにアプローチし、相手を自分の刺激的な世界へと誘い込みます。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ESTPがパートナーに求める「3つの興奮」</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">共に汗を流せるか：</span>
                                    <p className="text-sm mt-1">スポーツ、旅行、パーティー。静かに見守る人よりも、同じフィールドで戦える「相棒」を強く求めます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">「重さ」のない関係性：</span>
                                    <p className="text-sm mt-1">依存や過度な精神的束縛を最も嫌います。「あなたがいなくても楽しいけど、一緒にいるともっと楽しい」というスタンスがベストです。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-orange-200">高いレスポンスとノリの良さ：</span>
                                    <p className="text-sm mt-1">思い立ったが吉日。急な誘いに「面白そう！」と二つ返事で乗ってくれる相手に、最高の連帯感を感じます。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">3. ラブキャラ診断で見るESTP：俺様な愛と、計算された優しさ</h2>
                        <p className="mb-6">「ラブキャラ64」で分析すると、ESTPの「リーダーシップ」の深層が見えてきます。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center text-sm">
                                    <Zap className="w-4 h-4 mr-2" />
                                    暴君（LCAD）
                                    <span className="text-xs ml-3 text-white bg-orange-500 px-2 py-0.5 rounded-full">圧倒的主導権</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-orange-900">
                                    自分がリードし、相手を満足させることに喜びを感じる（LC, AD）気質. このタイプが出るESTPは、強引に見えて実は最高のホスピタリティを持っています。
                                </p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <h3 className="text-lg font-bold text-amber-800 mb-2 flex items-center text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    カリスマバランサー（LARE）
                                    <span className="text-xs ml-3 text-white bg-amber-500 px-2 py-0.5 rounded-full">器用な守護者</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-amber-900">
                                    周囲の空気を瞬時に読み、最適なポジションを取る（LA, RE）力。パートナーに対しても、何が必要かを冷静に判断して提供する「頼れる保護者」の一面です。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-orange-500 pl-4 mb-6">4. 実習：ESTPという「野生の馬」を乗りこなす秘訣</h2>
                        <p className="mb-6 leading-relaxed">
                            ESTPと永遠の絆を結ぶには、<span className="font-bold text-orange-600">「彼らを退屈させないこと」</span>、そして<span className="font-bold text-orange-600">「彼らの自尊心を常に満たすこと」</span>です。<br /><br />
                            彼らが何かを成し遂げた時、あるいは難しい状況を切り抜けた時、「やっぱりあなたしかいないね」という一言は、どんなプレゼントよりも効きます。彼らをコントロールしようとするのではなく、彼らが作り出す大きな波に一緒に乗って楽しむ。その寛容さと明るさがあれば、ESTPはあなたを世界で一番エキサイティングな場所へ連れて行ってくれるでしょう。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-orange-600 to-amber-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">スリル満点の恋、その「最短ルート」を見つける</h2>
                            <p className="mb-8 font-medium">
                                ESTPのあなたのスピード感についていける、<br />
                                唯一無二の「ベストパートナー」を割り出します。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-orange-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                直感相性診断を受ける
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-orange-300" />
                        <span>「悩んでいた私を、彼は一言も聞かずに外へ連れ出し、最高の景色を見せてくれた。言葉なんていらなかった。」（30代女性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
