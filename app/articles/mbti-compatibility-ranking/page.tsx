import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Sparkles, Trophy, Zap } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleAffiliateRecommendation from '@/components/ArticleAffiliateRecommendation';

export const metadata: Metadata = {
    title: 'MBTI相性ランキングTOP5 | AI Love Matcher',
    description: 'MBTIとラブタイプの補完関係をもとに、会話、生活リズム、支え合いの観点から相性の高い組み合わせを整理しました。',
    alternates: {
        canonical: '/articles/mbti-compatibility-ranking',
    },
};

const rankings = [
    {
        rank: 1,
        pair: 'INFP × ENFJ',
        title: '理想を言葉にしやすい組み合わせ',
        description: 'INFPの内面の豊かさを、ENFJが丁寧に引き出しやすいペアです。気持ちの共有が関係の土台になりやすく、会話の満足度が高まりやすい傾向があります。',
        strengths: '感情の共有、励まし合い、将来像のすり合わせがしやすい。',
        caution: 'ENFJが背負いすぎると、INFPが受け身に寄りやすい点には注意が必要です。',
        score: 94,
    },
    {
        rank: 2,
        pair: 'INTJ × ENFP',
        title: '違いが刺激と学びになりやすい組み合わせ',
        description: 'INTJの構造化された視点と、ENFPの発想の広がりが互いの弱点を補いやすいペアです。違いが大きいぶん、尊重ができると伸びやすい関係です。',
        strengths: '視野が広がりやすく、停滞しにくい。',
        caution: '生活リズムや優先順位の共有をしないと、魅力がそのまま摩擦になることがあります。',
        score: 91,
    },
    {
        rank: 3,
        pair: 'ISFJ × ESFP',
        title: '安心と明るさのバランスが取りやすい組み合わせ',
        description: 'ISFJの安定感とESFPの場を明るくする力が噛み合うと、日常を楽しみながら信頼を育てやすいペアです。',
        strengths: '生活感の相性が比較的取りやすく、一緒に過ごす満足感が高まりやすい。',
        caution: 'ISFJが我慢しすぎると、ESFPの自由さが負担に感じられることがあります。',
        score: 89,
    },
    {
        rank: 4,
        pair: 'ENTP × INFJ',
        title: '深い対話が続きやすい組み合わせ',
        description: 'ENTPの拡散的な発想とINFJの洞察が合わさると、話すほど理解が深まる関係になりやすいペアです。',
        strengths: '抽象的な会話や価値観のすり合わせに強い。',
        caution: '議論のテンポが速すぎると、INFJが疲れて本音を引っ込めることがあります。',
        score: 87,
    },
    {
        rank: 5,
        pair: 'ISTP × ESTJ',
        title: '役割分担がはっきりしやすい組み合わせ',
        description: '実務感覚のあるISTPと、全体を整えやすいESTJは、生活や仕事の面でチーム感を作りやすいペアです。',
        strengths: '現実的な判断がしやすく、問題が起きても動きやすい。',
        caution: '感情面の共有が少ないと、効率は良いのに寂しさが残る関係になりやすいです。',
        score: 84,
    },
];

export default function CompatibilityRankingArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="MBTI相性ランキングTOP5 | AI Love Matcher"
                description="MBTIとラブタイプの補完関係をもとに、会話、生活リズム、支え合いの観点から相性の高い組み合わせを整理しました。"
                slug="mbti-compatibility-ranking"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-orange-400 h-48 flex flex-col items-center justify-center text-white">
                    <Trophy className="w-16 h-16 mb-4 animate-bounce" />
                    <h1 className="text-3xl sm:text-4xl font-extrabold px-6 text-center">
                        保存版 MBTI相性ランキング TOP5
                    </h1>
                </div>

                <div className="p-8 sm:p-12">
                    <Breadcrumb items={[{ label: "記事一覧", href: "/articles" }, { label: "MBTI相性ランキングTOP5" }]} />

                    <div className="prose prose-rose max-w-none text-gray-700">
                        <section className="bg-rose-50 p-8 rounded-2xl border border-rose-100 mb-12">
                            <h2 className="text-xl font-bold text-rose-800 mb-4 flex items-center">
                                <Sparkles className="w-6 h-6 mr-2 text-rose-500" />
                                このランキングの見方
                            </h2>
                            <p className="leading-relaxed text-rose-900/80 mb-4">
                                本ランキングは、MBTIの会話傾向と、当サイトで扱うラブタイプの補完関係をもとに、<span className="font-bold">話しやすさ、日常の噛み合いやすさ、支え合いのしやすさ</span>という観点から整理したものです。
                            </p>
                            <p className="leading-relaxed text-rose-900/80 mb-0">
                                つまり「絶対にうまくいく組み合わせ」を断定するものではなく、関係を育てやすい土台が比較的作りやすいペアを紹介しています。
                            </p>
                        </section>

                        <div className="space-y-12">
                            {rankings.map((item) => (
                                <div key={item.rank} className="relative bg-white border-2 border-gray-50 rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-rose-500 text-white font-black text-4xl p-4 rounded-bl-3xl opacity-10 group-hover:opacity-100 transition-opacity">
                                        #{item.rank}
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center text-rose-600 font-black text-2xl flex-shrink-0">
                                            {item.rank}
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <h3 className="text-2xl sm:text-3xl font-black text-gray-800 mb-1">
                                                {item.pair}
                                            </h3>
                                            <p className="text-rose-600 font-bold">{item.title}</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-2xl mb-6 leading-relaxed border-l-4 border-rose-500">
                                        <p className="mb-4">{item.description}</p>
                                        <p className="text-sm mb-2"><span className="font-bold text-rose-700">相性が高く出やすい理由:</span> {item.strengths}</p>
                                        <p className="text-sm mb-0"><span className="font-bold text-rose-700">気をつけたい点:</span> {item.caution}</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex-grow bg-gray-100 h-4 rounded-full overflow-hidden">
                                            <div
                                                className="bg-gradient-to-r from-rose-400 to-rose-600 h-full transition-all duration-1000"
                                                style={{ width: `${item.score}%` }}
                                            ></div>
                                        </div>
                                        <div className="text-rose-600 font-black flex items-center gap-1">
                                            <Zap className="w-4 h-4" />
                                            {item.score}%
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-rose-500 pl-4 mb-8">
                                ランキングは「入口」であって、結論ではない
                            </h2>
                            <p className="mb-6 leading-relaxed">
                                ランクに入っていない組み合わせでも、関係がうまくいく例はいくらでもあります。実際には、相手の疲れ方を理解しているか、ケンカの修復方法を共有できているか、生活の優先順位を話し合えているかの方が長期的には重要です。
                            </p>
                            <p className="mb-0 leading-relaxed">
                                逆に高順位の組み合わせでも、魅力だと思っていた差がストレスに変わることはあります。ランキングは、相性の高さを競うためではなく、<span className="font-bold text-rose-600">どこが噛み合いやすく、どこに注意が必要かを把握するための地図</span>として読むのがおすすめです。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-800 border-l-4 border-rose-500 pl-4 mb-4">よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">Q. ランキング下位の組み合わせでも大丈夫ですか？</h3>
                                    <p className="text-sm mb-0">もちろん大丈夫です。ランキングは「すれ違いが起きやすいポイントの数」を示しているだけで、「うまくいかない」という意味ではありません。すれ違いポイントを知って対処できれば、むしろ深い関係を築けるケースも多くあります。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">Q. 同じMBTI同士の相性は良いのですか？</h3>
                                    <p className="text-sm mb-0">会話のテンポや価値観が近いため、居心地の良さは感じやすいです。ただし「似すぎ」ゆえに関係が停滞したり、同じ弱点を補い合えなかったりするケースもあります。ラブキャラの組み合わせ次第で大きく変わるため、一概には言えません。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">Q. 相性スコアと実際の恋愛は一致しますか？</h3>
                                    <p className="text-sm mb-0">スコアは「自然体でいたとき」の噛み合いやすさを数値化したものです。実際の恋愛ではコミュニケーションの努力や生活環境、タイミングなど多くの要因が加わるため、スコアはあくまで参考の一つとして活用するのが適切です。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-rose-700 mb-2">Q. ランキングに載っていない組み合わせはどうすればいいですか？</h3>
                                    <p className="text-sm mb-0">ランキングはTOP5を紹介していますが、すべての組み合わせに良い面と注意点があります。載っていない組み合わせは、それぞれのタイプ別記事を読み比べるか、実際に診断を受けて個別のアドバイスを確認するのがおすすめです。</p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-rose-600 to-rose-400 p-10 rounded-3xl text-center text-white shadow-2xl mt-12">
                            <h2 className="text-2xl font-bold mb-4">自分に合う相手傾向を知る</h2>
                            <p className="mb-8 font-medium">
                                ランキングを見るだけでなく、<br />
                                あなた自身の会話傾向と恋愛の受け取り方を並べて確認できます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-rose-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                相性の傾向を無料診断する
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-rose-300" />
                        <span>「タイプ差の見方が分かってから、相手への決めつけが減りました」</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
            <ArticleAffiliateRecommendation />
        </main>
    );
}
