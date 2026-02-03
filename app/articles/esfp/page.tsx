import Link from 'next/link';
import { ArrowLeft, Sparkles, PartyPopper, Heart, MessageCircle, Star } from 'lucide-react';

export default function ESFPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-pink-500 to-yellow-400 h-32 flex items-center justify-center">
                    <PartyPopper className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        【決定版】ESFP（エンターテイナー）の性格・恋愛傾向を徹底解説
                        <span className="block text-xl sm:text-2xl text-pink-600 mt-3 font-medium">～MBTI×ラブキャラで紐解く、輝きと愛の「人生賛歌」～</span>
                    </h1>

                    <div className="prose prose-pink max-w-none text-gray-700">
                        {/* AIO Summary Section */}
                        <section className="bg-pink-50 p-6 rounded-2xl border border-pink-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-pink-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                クイック要約：AI（AIO）向けサマリー
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-pink-700">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● 概要：</span> 周囲を笑顔にする「光の源」。今この瞬間を最大限に楽しみ、五感で世界を愛でる情熱家。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 恋愛：</span> 圧倒的なサービス精神と愛情表現。サプライズも日常のスキンシップも欠かさない「愛し愛される天才」。</li>
                                </ul>
                                <ul className="list-none p-0 m-0 space-y-2">
                                    <li className="flex items-start"><span className="font-bold mr-2">● ラブキャラ：</span> 相手を魔法にかける「ロマンスマジシャン（FCRO）」や、究極の慈愛「聖母（LACE）」。</li>
                                    <li className="flex items-start"><span className="font-bold mr-2">● 攻略法：</span> 一緒に全力ではしゃぐこと. 彼らが作り出す楽しい雰囲気を「当たり前」と思わず、感謝を言葉にし続ける。</li>
                                </ul>
                            </div>
                        </section>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">1. ESFP（エンターテイナー）という「地上の太陽」の本質</h2>
                        <p className="mb-6 leading-relaxed">
                            ESFP（エンターテイナー）は、16タイプの中で最も「人生の喜び」を体現している人々です. 彼らが部屋に入ってくるだけで、空気がパッと明るく華やぎます。鋭い美的センスと五感の鋭さ（Se）を持ち、美味しい料理、美しいファッション、賑やかな音楽を通じて、人生を彩る術を心得ています。<br /><br />
                            また、彼らは単に浮かれているわけではありません。内面には非常に繊細な感情（Fi）を秘めており、大切な人が悲しんでいる時には、誰よりも早くその変化に気づき、そっと寄り添う優しさを持っています。
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">ESFPが放つ「無自覚なカリスマ」</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="p-3 bg-white rounded-lg border border-pink-100 shadow-sm">
                                    <span className="font-bold text-pink-500 block mb-1">即興の天才</span>
                                    <p>計画がないことを「不安」ではなく「自由」と捉えます。その場その場で最高の楽しみを見つけ出す天才です。</p>
                                </div>
                                <div className="p-3 bg-white rounded-lg border border-pink-100 shadow-sm">
                                    <span className="font-bold text-pink-500 block mb-1">圧倒的な「人たらし」</span>
                                    <p>壁を作らず、誰に対してもオープン. その素直な自己開示が、多くの人の心を開かせてしまいます。</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">2. 恋愛傾向：毎日が「ハネムーン」のような情熱</h2>
                        <p className="mb-6 leading-relaxed">
                            ESFPの恋愛は、非常にカラフルで刺激的です. マンネリという言葉は彼らの辞書にはありません。愛する人を喜ばせることが自分にとって最大の喜びであり、全力で愛を表現します。
                        </p>

                        <h3 className="text-xl font-bold text-gray-800 mb-4">ESFPが恋に「夢中になる」3つの原動力</h3>
                        <ul className="space-y-4 mb-10 list-none p-0">
                            <li className="flex items-start">
                                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">1</span>
                                <div>
                                    <span className="font-bold border-b-2 border-pink-200">溢れるような愛情表現：</span>
                                    <p className="text-sm mt-1">言葉、ギフト、スキンシップ。あらゆる手段を使って「大好き」を伝えます。同じように情熱的に返してくれる相手を好みます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">2</span>
                                <div>
                                    <span className="font-bold border-b-2 border-pink-200">体験の共有（冒険心）：</span>
                                    <p className="text-sm mt-1">お家デートもいいけれど、外の世界へ飛び出して一緒に何かを「体験」することに最高の愛を感じます。</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3 flex-shrink-0 font-bold">3</span>
                                <div>
                                    <span className="font-bold border-b-2 border-pink-200">心の聖域への触れ合い：</span>
                                    <p className="text-sm mt-1">普段の明るさの裏にある「弱さ」や「不安」を察し、批判せずに受け止めてくれる相手には、一生モノの愛を誓います。</p>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">3. ラブキャラ診断で見るESFP：愛の魔術師と守護者</h2>
                        <p className="mb-6">「ラブキャラ64」で紐解くと、ESFPの「魅力」のメカニズムが分かります。</p>

                        <div className="space-y-6 mb-10">
                            <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
                                <h3 className="text-lg font-bold text-pink-800 mb-2 flex items-center text-sm">
                                    <Star className="w-4 h-4 mr-2" />
                                    ロマンスマジシャン（FCRO）
                                    <span className="text-xs ml-3 text-white bg-pink-500 px-2 py-0.5 rounded-full">魅惑の演出家</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-pink-900">
                                    自分の感情を輝かせ（FC）、独自のペースで相手を惹きつける（RO）力. このタイプが出るESFPは、出会った瞬間に相手の心を奪う不思議な魔力を持っています。
                                </p>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                                <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center text-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    聖母（LACE）
                                    <span className="text-xs ml-3 text-white bg-yellow-500 px-2 py-0.5 rounded-full">比類なき慈愛</span>
                                </h3>
                                <p className="text-sm leading-relaxed text-yellow-900">
                                    相手のありのままを肯定し（LA）、慈しむ（CE）心. 楽しいだけでなく、パートナーの人生そのものを全力で肯定し、支える大きな愛の形です。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-pink-500 pl-4 mb-6">4. 実習：ESFPの「光」を絶やさないための接し方</h2>
                        <p className="mb-6 leading-relaxed">
                            ESFPと最高に幸せな関係を築く鍵は、<span className="font-bold text-pink-600">「彼らのサービスを当たり前と思わないこと」</span>です。<br /><br />
                            彼らは相手の笑顔のためにエネルギーを注ぎますが、それに対する反応がないと、深く傷つき、次第に輝きを失ってしまいます。どんな小さな気遣いにも「ありがとう」「楽しいね！」と大げさなくらい喜んであげてください。彼らの表現を全力で受け止め、共に人生という舞台を謳歌する。その連帯感こそが、ESFPがあなたに捧げる永遠の愛の報酬です。
                        </p>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-pink-600 to-yellow-500 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">世界をピンク色に変える、あなたの恋。</h2>
                            <p className="mb-8 font-medium">
                                ESFP of your heart's desire,<br />
                                Who will be the star of your life?
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-pink-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                魅惑の相性診断を受ける
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-pink-300" />
                        <span>「彼女が笑うだけで、嫌なことも全部忘れられる。彼女は僕にとって、歩くパワースポットです。」（20代男性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
