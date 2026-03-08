import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'MBTI 16タイプ別・推しに惹かれやすい理由を解説 | AI Love Matcher',
    description: '自分がどんな芸能人やアイドルに惹かれやすいのかを、MBTIとラブキャラの視点で整理する推し活ガイドです。',
    alternates: {
        canonical: '/articles/idol-compatibility',
    },
};

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
                    MBTI 16タイプ別・推しに惹かれやすい理由を解説
                    <span className="block text-lg sm:text-xl text-teal-600 mt-2">〜「なぜその人に惹かれるのか」を、MBTIとラブキャラから整理する〜</span>
                </h1>

                <div className="prose prose-teal max-w-none text-gray-700 space-y-8">
                    <section className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                        <h2 className="text-lg font-bold text-teal-800 mb-3">この記事の読み方</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                            <li><span className="font-bold">前提：</span> 芸能人やアイドルのMBTIは公表値や推測に基づくことが多く、本人のすべてを表すものではありません。</li>
                            <li><span className="font-bold">目的：</span> 推しを診断し切ることではなく、自分がどんな魅力に反応しやすいかを理解することです。</li>
                            <li><span className="font-bold">使い道：</span> 推し活の満足度を上げたり、距離感の取り方を見直したりするヒントとして読んでください。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">1. 推し活にMBTIを使うと何が見えるのか</h2>
                        <p className="leading-relaxed mb-4">
                            人は、単に顔や実績だけで誰かを好きになるわけではありません。話し方、場の空気の作り方、努力の見え方、ミステリアスさなど、さまざまな要素に反応しています。MBTIはその中でも、<span className="font-bold text-teal-600">自分がどのタイプの振る舞いに惹かれやすいか</span>を整理するのに向いています。
                        </p>
                        <p className="leading-relaxed mb-0">
                            ただし、表舞台で見えるキャラクターは仕事上の見せ方も含みます。大切なのは、「この人は本当は何タイプか」を断定することではなく、自分がどの表現に心を動かされるのかを言葉にすることです。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">2. MBTIグループ別に見やすい「惹かれポイント」</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">SJタイプ: 努力や誠実さに惹かれやすい</h3>
                                <p className="text-sm mb-0">
                                    ISTJ、ISFJ、ESTJ、ESFJは、積み重ねや安定感が見える人に惹かれやすい傾向があります。派手さよりも、礼儀や継続、信頼できる雰囲気に安心しやすいタイプです。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">SPタイプ: 今この瞬間の魅力に反応しやすい</h3>
                                <p className="text-sm mb-0">
                                    ISTP、ISFP、ESTP、ESFPは、身体感覚の強さやステージ上の熱量に惹かれやすいことがあります。パフォーマンスの鮮度や自然体の魅力が大きなフックになります。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">NFタイプ: 世界観や物語に惹かれやすい</h3>
                                <p className="text-sm mb-0">
                                    INFJ、INFP、ENFJ、ENFPは、歌詞の意味、発言の背景、内面のストーリーに強く反応しやすいです。「この人の見ている世界をもっと知りたい」と感じる推し方になりやすいでしょう。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">NTタイプ: 才能や構造の美しさに惹かれやすい</h3>
                                <p className="text-sm mb-0">
                                    INTJ、INTP、ENTJ、ENTPは、発想力、知性、戦略性など「どう組み立てているか」に興味を持ちやすい傾向があります。パフォーマンスそのものより、設計思想や視点に惹かれることもあります。
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">3. ラブキャラで見ると、推し方のクセも分かりやすい</h2>
                        <p className="leading-relaxed mb-4">
                            ラブキャラの視点を足すと、「どんな人を好きになるか」だけでなく、<span className="font-bold text-teal-600">自分がどう推しに関わりたくなるか</span>も見えてきます。
                        </p>
                        <div className="bg-gray-800 text-white p-6 rounded-lg my-6 shadow-inner">
                            <h4 className="font-bold mb-4">推し方の例</h4>
                            <ul className="space-y-3 text-sm mb-0">
                                <li><span className="font-bold text-teal-300">憧れの先輩（LARO）</span> が強い人は、少し距離を置いて尊敬しながら応援する形が心地よくなりやすい。</li>
                                <li><span className="font-bold text-blue-300">忠犬ハチ公（FCPE）</span> が強い人は、守りたい、支えたいという気持ちが前に出やすい。</li>
                                <li><span className="font-bold text-yellow-300">デビルエンジェル（FAPO）</span> が強い人は、振れ幅やギャップのある推しに惹かれやすい。</li>
                                <li><span className="font-bold text-pink-300">謎の生命体（FARO）</span> が強い人は、万人受けよりも独自の空気を持つ推しに心を掴まれやすい。</li>
                            </ul>
                        </div>
                        <p className="leading-relaxed mb-0">
                            ここを理解しておくと、「なぜ毎回似たタイプを推してしまうのか」「なぜこの推しだけは距離感が難しいのか」が整理しやすくなります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">4. 健やかな推し活につなげるための見直しポイント</h2>
                        <ul className="space-y-3 list-disc pl-5">
                            <li>自分は「近く感じたい派」なのか、「尊敬の距離を保ちたい派」なのかを知る</li>
                            <li>推しの情報を追うほど疲れるなら、刺激の取り過ぎになっていないか見直す</li>
                            <li>他人の推し方と比べすぎず、自分が心地よい応援スタイルを決める</li>
                            <li>理想像を重ねすぎていると感じたら、現実の生活とのバランスを取り直す</li>
                        </ul>
                        <p className="leading-relaxed mt-4 mb-0">
                            推し活は、自分の感情の扱い方を学べる場でもあります。MBTIやラブキャラを使う意味は、推しをラベリングすることではなく、<span className="font-bold text-teal-600">自分の好きのクセを丁寧に理解すること</span>にあります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">まとめ: 推しを通して、自分の心の動きが見えてくる</h2>
                        <p className="mb-8 leading-relaxed">
                            なぜその人に惹かれるのかを考えることは、実は自分自身の価値観や不足感、安心ポイントを知ることでもあります。MBTIとラブキャラを組み合わせて見ると、推し活が単なる消費ではなく、自己理解のヒントに変わっていきます。
                        </p>
                        <div className="text-center">
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
