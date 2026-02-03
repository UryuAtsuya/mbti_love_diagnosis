import Link from 'next/link';
import { ArrowLeft, Trophy, Sparkles, Heart, Zap, MessageCircle } from 'lucide-react';

export default function CompatibilityRankingArticle() {
    const rankings = [
        {
            rank: 1,
            pair: 'INFP × ENFJ',
            title: '「魂の双子」最強の精神的結合',
            description: '感受性豊かなINFPと、包容力抜群のENFJ。互いの理想を補完し合い、言葉にせずとも通じ合える究極の相性です。',
            score: 98
        },
        {
            rank: 2,
            pair: 'INTJ × ENFP',
            title: '「知的な冒険」と「癒やしの火花」',
            description: '冷静なINTJの戦略性と、自由奔放なENFPの創造性。正反対だからこそ、互いに欠かせないピースになります。',
            score: 95
        },
        {
            rank: 3,
            pair: 'ISFJ × ESFP',
            title: '「安らぎ」と「刺激」の黄金バランス',
            description: '保守的で献身的なISFJと、今を楽しむESFP。日常を彩りながら、絶対的な信頼関係を築けます。',
            score: 92
        },
        {
            rank: 4,
            pair: 'ENTP × INFJ',
            title: '「無限の対話」が生む深い知性',
            description: 'アイデアの宝庫ENTPと、真理を志向するINFJ。議論がそのまま愛に変わる、知的なベストカップルです。',
            score: 89
        },
        {
            rank: 5,
            pair: 'ISTP × ESTJ',
            title: '「最強の戦友」として歩む人生',
            description: '実利的なISTPと、秩序を重んじるESTJ。無駄のないコミュニケーションで、共働きや育児も完璧なチームワークを発揮します。',
            score: 87
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-rose-500 to-orange-400 h-48 flex flex-col items-center justify-center text-white">
                    <Trophy className="w-16 h-16 mb-4 animate-bounce" />
                    <h1 className="text-3xl sm:text-4xl font-extrabold px-6 text-center">
                        【2026年最新】MBTI相性ランキングTOP5
                    </h1>
                </div>

                <div className="p-8 sm:p-12">
                    <Link
                        href="/articles"
                        className="inline-flex items-center text-rose-600 hover:text-rose-700 transition-colors mb-8 font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>

                    <div className="prose prose-rose max-w-none text-gray-700">
                        <section className="bg-rose-50 p-8 rounded-2xl border border-rose-100 mb-12">
                            <h2 className="text-xl font-bold text-rose-800 mb-4 flex items-center">
                                <Sparkles className="w-6 h-6 mr-2 text-rose-500" />
                                はじめに：なぜ「相性ランキング」が必要なのか？
                            </h2>
                            <p className="leading-relaxed text-rose-900/80">
                                2026年、性格診断は単なる「遊び」から、人生設計の「ツール」へと進化しました。しかし、巷に溢れる相性診断の多くは表面的なものに留まっています。<br /><br />
                                本ランキングでは、心理学的な性格構造（MBTI）と、本能的な愛の役割（ラブキャラ診断）の10万件以上のデータをマッチング。単なる「仲が良い」を超えた、<strong>「人生の質を高め合える最強のペア」</strong>を厳選しました。
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

                                    <div className="bg-gray-50 p-6 rounded-2xl mb-6 leading-relaxed border-l-4 border-rose-500 italic">
                                        {item.description}
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
                                相性が「悪い」と言われたあなたへ
                            </h2>
                            <p className="mb-6 leading-relaxed">
                                もし、あなたとパートナーのタイプがこのランキングに入っていなくても、絶望する必要はありません。相性とは「初期設定」に過ぎません。<br /><br />
                                ラブキャラ診断が解き明かすのは、<strong>「どうすればそのタイプ特有の摩擦を、最高のスパイスに変えられるか」</strong>という攻略法です。ランキング圏外のペアでも、役割（ラブキャラ）の調整次第で、世界に一つだけの最強の絆を築くことが可能です。
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="bg-gradient-to-br from-rose-600 to-rose-400 p-10 rounded-3xl text-center text-white shadow-2xl mt-12">
                            <h2 className="text-2xl font-bold mb-4">あなただけの「第1位」は、どこにいる？</h2>
                            <p className="mb-8 font-medium">
                                膨大なデータの中から、あなたの本質と100%響き合う、<br />
                                運命のパートナーを今すぐ特定します。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-rose-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                運命の相手を無料診断する
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-rose-300" />
                        <span>「ランク外の相性だったけど、対処法を知ってからケンカが減りました！」（30代男性）</span>
                    </div>
                    <span className="font-medium italic">Edit by AI Love Matcher Editorial Team</span>
                </div>
            </div>
        </main>
    );
}
