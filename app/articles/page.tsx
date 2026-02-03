import Link from 'next/link';
import { BookOpen, Heart, Activity, ShieldCheck } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

export default function ArticlesIndex() {
    const articles = [
        {
            title: '【完全網羅】MBTI×ラブキャラ診断・全16タイプの「相性ランキング」決定版',
            description: 'どのタイプとどのタイプが最強？MBTIの基本相性に、ラブキャラの補完性を加味した独自の相性ランキングを公開。',
            slug: 'mbti-compatibility-ranking',
            icon: <Activity className="w-6 h-6 text-rose-500" />,
            tag: 'ランキング'
        },
        {
            title: '【理論編】ラブキャラ64診断とは？MBTIを超える「愛の解析学」',
            description: '「性格が良いのにうまくいかない」のはなぜ？恋愛特化型の診断理論「ラブキャラ64」の核心に迫ります。',
            slug: 'love-character-theory',
            icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
            tag: '理論・解説'
        },
        {
            title: 'MBTI×ラブキャラ診断で解き明かす「運命の相性」の真実',
            description: 'なぜ性格診断だけでは恋愛がうまくいかないのか？MBTIとラブキャラの複合診断で、あなたの恋愛が劇的に変わる理由を徹底解説。',
            slug: 'truth-of-compatibility',
            icon: <BrainIcon className="w-6 h-6 text-purple-500" />,
            tag: '相性の真実'
        },
        {
            title: 'MBTI 16タイプ別・相性の良い芸能人とアイドル徹底解説',
            description: '推しとの「ラブキャラ」的な親和性は？性格の不一致があっても、ラブキャラの補完関係を知れば「一生推せる推し活」が可能に！',
            slug: 'idol-compatibility',
            icon: <Heart className="w-6 h-6 text-pink-500" />,
            tag: '推し活・アイドル'
        },
        {
            title: '【実戦編】MBTI×ラブキャラで落とす！意中の相手を「沼らせる」最強の恋愛攻略マトリクス',
            description: 'MBTIによる「心の開き方」と、ラブキャラ64による「愛の受け取り方」を掛け合わせた、ターゲット別の最強攻略戦略。',
            slug: 'romance-strategy',
            icon: <Activity className="w-6 h-6 text-orange-500" />,
            tag: '恋愛攻略・実戦'
        },
        {
            title: '【決定版】INFJ（提唱者）の性格・恋愛傾向を徹底解説',
            description: '深い洞察力と強い信念を持つINFJの恋愛スタイルを、ラブキャラ診断でさらに深く掘り下げます。',
            slug: 'infj',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ENFP（広報運動家）の性格・恋愛傾向を徹底解説',
            description: '自由と情熱を愛するENFPの魅力を解剖。彼らが真に求めるパートナーシップとは？',
            slug: 'enfp',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ENFJ（主人公）の性格・恋愛傾向を徹底解説',
            description: '天性のリーダーENFJ。周囲を導き、献身的に尽くす彼らの愛し方を詳しく解説します。',
            slug: 'enfj',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】INFP（仲介者）の性格・恋愛傾向を徹底解説',
            description: '感受性豊かな理想主義者、INFP。魂の共鳴を求める彼らの愛の形。',
            slug: 'infp',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】INTJ（建築家）の性格・恋愛傾向を徹底解説',
            description: '冷静沈着な戦略家、INTJ。知的な共鳴を求める彼らの恋愛観と攻略法を伝授。',
            slug: 'intj',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ENTJ（指揮官）の性格・恋愛傾向を徹底解説',
            description: '圧倒的な決断力を持つENTJ。彼らと対等な「戦友」になるための戦略を公開。',
            slug: 'entj',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】INTP（論理学者）の性格・恋愛傾向を徹底解説',
            description: '独自の論理で生きるINTP。掴みどころのない彼らの心を射止めるためのヒント。',
            slug: 'intp',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ENTP（討論者）の性格・恋愛傾向を徹底解説',
            description: '常に変化と刺激を求めるENTP。彼らを飽きさせない、知的な駆け引きの極意。',
            slug: 'entp',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ISFP（冒険家）の性格・恋愛傾向を徹底解説',
            description: '独自の感性で世界を彩るISFP。言葉を超えた深い繋がりを築く方法。',
            slug: 'isfp',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ESFP（エンターテイナー）の性格・恋愛傾向を徹底解説',
            description: '今この瞬間を全力で楽しむESFP。彼らの明るさの裏にある繊細な内面を解説。',
            slug: 'esfp',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ISTP（巨匠）の性格・恋愛傾向を徹底解説',
            description: '冷静で実利的なISTP。不器用な優しさを持つ彼らの「沼る」攻略ポイント。',
            slug: 'istp',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ISTJ（管理者）の性格・恋愛傾向を徹底解説',
            description: '誠実で安定感抜群のISTJ。将来を見据えた、堅実な愛を育むためのステップ。',
            slug: 'istj',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ISFJ（擁護者）の性格・恋愛傾向を徹底解説',
            description: '究極の優しさを誇るISFJ。彼らの献身を支え、深い絆を結ぶためのアドバイス。',
            slug: 'isfj',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ESTJ（幹部）の性格・恋愛傾向を徹底解説',
            description: '頼れるリーダーESTJ。秩序を重んじる彼らの信頼を勝ち取るための具体的戦略。',
            slug: 'estj',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ESFJ（領事）の性格・恋愛傾向を徹底解説',
            description: '社交的で思いやりに満ちたESFJ。彼らの承認欲求を満たし、深い信頼を得る方法。',
            slug: 'esfj',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        },
        {
            title: '【決定版】ESTP（起業家）の性格・恋愛傾向を徹底解説',
            description: 'スリルを愛する冒険家、ESTP。最高に刺激的で最強の「戦友」になる方法。',
            slug: 'estp',
            icon: <BookOpen className="w-6 h-6 text-teal-500" />,
            tag: '16タイプ解説'
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">

            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    トップページに戻る
                </Link>
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        恋愛・相性コラム
                    </h1>
                    <p className="text-gray-600 text-lg">
                        MBTIとラブキャラ診断を活用した、恋愛や推し活に役立つ情報をお届けします。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={`/articles/${article.slug}`}
                            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 hover:border-teal-200 hover:-translate-y-1"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-2 py-1 rounded-md border border-teal-100">
                                        {article.tag}
                                    </span>
                                    <div className="bg-gray-50 p-2 rounded-full group-hover:bg-teal-50 transition-colors">
                                        {article.icon}
                                    </div>
                                </div>

                                <h2 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-3">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-gray-500 line-clamp-4 flex-grow">
                                    {article.description}
                                </p>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-teal-500 font-bold text-sm">
                                    続きを読む
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
    )
}
