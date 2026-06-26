import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleAffiliateRecommendation from '@/components/ArticleAffiliateRecommendation';

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
            <ArticleJsonLd
                title="MBTI 16タイプ別・推しに惹かれやすい理由を解説 | AI Love Matcher"
                description="自分がどんな芸能人やアイドルに惹かれやすいのかを、MBTIとラブキャラの視点で整理する推し活ガイドです。"
                slug="idol-compatibility"
            />
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Breadcrumb items={[{ label: "記事一覧", href: "/articles" }, { label: "MBTI 16タイプ別・推しに惹かれやすい理由を解説" }]} />

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
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">5. タイプ別・推しとの理想的な距離感</h2>
                        <p className="leading-relaxed mb-4">
                            推し活を長く楽しむうえで、<span className="font-bold text-teal-600">自分にとって心地よい距離感</span>を知っておくことはとても大切です。距離が近すぎると消耗し、遠すぎると物足りなくなる。このバランスは人によって異なります。MBTIのグループごとに、陥りやすいパターンと健やかな距離の取り方を整理しました。
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">SJタイプ（ISTJ・ISFJ・ESTJ・ESFJ）: 献身しすぎない距離</h3>
                                <p className="text-sm mb-2">
                                    責任感が強いSJタイプは、推しの活動を「支えなければ」という義務感に変わりやすい傾向があります。毎回イベントに参加しなければ、グッズをすべて揃えなければ、と自分にルールを課してしまうことも。
                                </p>
                                <p className="text-sm mb-0">
                                    <span className="font-bold text-teal-600">理想の距離感:</span> 「応援は義務ではなく選択」と意識し、参加できないときも自分を責めないこと。月ごとに使う金額や時間の上限をゆるく決めておくと、安心感を保ちやすくなります。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">SPタイプ（ISTP・ISFP・ESTP・ESFP）: 衝動買い・衝動遠征に注意</h3>
                                <p className="text-sm mb-2">
                                    「今この瞬間」を大切にするSPタイプは、急に発表されたイベントやコラボグッズに即反応しやすいところがあります。その場の熱量で動けるのは強みですが、後から金銭面や体力面で後悔するケースも。
                                </p>
                                <p className="text-sm mb-0">
                                    <span className="font-bold text-teal-600">理想の距離感:</span> 衝動的に動く前に「24時間ルール」を試してみましょう。一晩寝ても行きたい・欲しいと思えるなら、それは本心からの判断である可能性が高いです。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">NFタイプ（INFJ・INFP・ENFJ・ENFP）: 感情移入しすぎない境界線</h3>
                                <p className="text-sm mb-2">
                                    共感力の高いNFタイプは、推しの喜びや苦しみを自分のことのように感じやすい傾向があります。推しが批判されると自分が傷ついたように感じたり、推しの幸せを自分の幸せと同一視したりすることも。
                                </p>
                                <p className="text-sm mb-0">
                                    <span className="font-bold text-teal-600">理想の距離感:</span> 「推しの人生と自分の人生は別のもの」と定期的に確認することが助けになります。推しの活動から離れる日を意識的に作り、自分自身の感情や生活にも目を向ける習慣が大切です。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">NTタイプ（INTJ・INTP・ENTJ・ENTP）: 分析モードから抜け出す時間も</h3>
                                <p className="text-sm mb-2">
                                    知的好奇心の強いNTタイプは、推しの戦略や業界構造の分析にのめり込みやすいことがあります。楽しむためだった推し活が、いつの間にか「研究」になり、純粋に楽しめなくなるパターンも見られます。
                                </p>
                                <p className="text-sm mb-0">
                                    <span className="font-bold text-teal-600">理想の距離感:</span> たまには分析を手放して、パフォーマンスを「ただ感じる」時間を作ってみましょう。考えることと感じることのバランスが、推し活の満足度を高めてくれる傾向があります。
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">6. 推し疲れを防ぐためのセルフチェック</h2>
                        <p className="leading-relaxed mb-4">
                            推し活は本来、日常にエネルギーをくれるものです。しかし、気づかないうちに負担になっていることもあります。以下のチェックリストで、今の自分の状態を確認してみてください。
                        </p>
                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                            <h3 className="font-bold text-teal-800 mb-4">推し活セルフチェックリスト</h3>
                            <p className="text-sm text-teal-700 mb-4">当てはまる項目が多いほど、少し休憩を取ることを検討してみてください。</p>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="inline-block w-5 h-5 mt-0.5 border-2 border-teal-400 rounded flex-shrink-0" />
                                    <span>推しのSNSを確認しないと不安になる、または確認した後にどっと疲れることがある</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="inline-block w-5 h-5 mt-0.5 border-2 border-teal-400 rounded flex-shrink-0" />
                                    <span>推しに関する出費が、生活に影響を与えている（食費を削る、貯金ができないなど）</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="inline-block w-5 h-5 mt-0.5 border-2 border-teal-400 rounded flex-shrink-0" />
                                    <span>他のファンの推し方と自分を比較して、劣等感や焦りを感じることが増えた</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="inline-block w-5 h-5 mt-0.5 border-2 border-teal-400 rounded flex-shrink-0" />
                                    <span>推しの活動がない日に、何をしていいかわからなくなることがある</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="inline-block w-5 h-5 mt-0.5 border-2 border-teal-400 rounded flex-shrink-0" />
                                    <span>推しに関するネガティブなニュースを見ると、数日間気分が落ち込む</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="inline-block w-5 h-5 mt-0.5 border-2 border-teal-400 rounded flex-shrink-0" />
                                    <span>睡眠時間を削って推し活をすることが日常的になっている</span>
                                </li>
                            </ul>
                        </div>
                        <p className="leading-relaxed mt-4 mb-2">
                            1〜2個当てはまっても、すぐに問題というわけではありません。ただ、3個以上当てはまる場合は、推し活の頻度や関わり方を少し調整してみると、結果的に推し活そのものをもっと楽しめるようになる傾向があります。
                        </p>
                        <p className="leading-relaxed mb-0">
                            セルフチェックは一度きりではなく、推しの活動が活発な時期やイベント前後など、感情が大きく動くタイミングで定期的に振り返ることをおすすめします。自分の状態を客観視する習慣が、推し活を長く健やかに続ける土台になります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-teal-500 pl-4 mb-4">7. よくある質問</h2>
                        <p className="leading-relaxed mb-4">
                            MBTIと推し活を組み合わせて考えるとき、よく寄せられる疑問をまとめました。正解がひとつではないテーマだからこそ、さまざまな視点を持っておくと気持ちが楽になりやすいです。
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">Q. 推しのMBTIが公表値と違う気がするのですが？</h3>
                                <p className="text-sm mb-0">
                                    芸能人が公表するMBTIは、テストを受けたタイミングや体調、仕事モードかプライベートかによって変わることがあります。また、ステージ上のキャラクターと素の性格は異なる場合も少なくありません。公表値はあくまで参考程度に捉え、「この人のどんな部分に自分は惹かれているのか」に焦点を当てるほうが、推し活の解像度は上がりやすいです。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">Q. 推しが自分と同じMBTIタイプだと相性がいいの？</h3>
                                <p className="text-sm mb-0">
                                    同じタイプだと「分かる！」という共感が生まれやすい一方で、ファンとしての推し活では、むしろ自分にない要素を持つ人に惹かれるケースも多く見られます。相性に正解はなく、同じタイプでも違うタイプでも、自分が心地よいと感じる推し方ができていれば、それが一番の相性の良さと言えるでしょう。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">Q. 推しが同じタイプの人と付き合っていると聞いてショックを受けたとき、どうすればいい？</h3>
                                <p className="text-sm mb-0">
                                    まず、そのショックを感じること自体は自然な反応です。推しに対する感情には、憧れ・投影・疑似恋愛など、さまざまな要素が含まれている場合があります。大切なのは、その感情を否定せず「自分は推しにどんな感情を持っていたのか」を振り返ることです。MBTIの視点で整理すると、「自分が求めていた理想像」が見えてきて、気持ちが落ち着きやすくなる傾向があります。
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-bold text-teal-700 mb-2">Q. 推しが複数いるのは浮気っぽい？</h3>
                                <p className="text-sm mb-0">
                                    MBTIの観点から見ると、複数の推しがいる人は、それぞれの推しから異なる心理的ニーズを満たしている可能性があります。たとえば、一人からは安心感を、もう一人からは刺激を受けているというケースです。推しが複数いることに罪悪感を覚える必要はなく、むしろ自分の中にある多面的な欲求に気づくきっかけとして前向きに捉えられます。
                                </p>
                            </div>
                        </div>
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
            <ArticleAffiliateRecommendation />
        </main>
    );
}
