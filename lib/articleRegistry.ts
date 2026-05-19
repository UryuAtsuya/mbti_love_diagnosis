export interface Article {
    slug: string;
    title: string;
    description: string;
    tag: string;
    datePublished: string;
    dateModified: string;
}

const defaultDatePublished = '2026-03-01';
const defaultDateModified = '2026-03-29';

type ArticleSeed = Omit<Article, 'datePublished' | 'dateModified'> &
    Partial<Pick<Article, 'datePublished' | 'dateModified'>>;

const articleSeeds: ArticleSeed[] = [
    {
        slug: 'diagnosis-guide',
        title: '診断結果をそのまま信じないための読み解きガイド',
        description: 'MBTIとラブタイプの結果を、決めつけではなく会話の材料として使うための見方を整理します。',
        tag: '理論・解説',
        datePublished: '2026-04-19',
        dateModified: '2026-04-19',
    },
    {
        slug: 'relationship-checkpoints',
        title: '相性が悪いと感じたときに先に確認したい5つのこと',
        description: '本当に相性が悪いのか、それとも距離感や伝え方のズレなのかを切り分けるための確認ポイントを紹介します。',
        tag: '恋愛攻略・実戦',
        datePublished: '2026-04-19',
        dateModified: '2026-05-19',
    },
    {
        slug: 'message-frequency-gap',
        title: '連絡頻度の違いで苦しくなる前に読む話',
        description: '返信速度や会話量の差が不安に変わる前に、すり合わせるべき論点と伝え方を具体例つきで解説します。',
        tag: '恋愛攻略・実戦',
        datePublished: '2026-04-19',
        dateModified: '2026-05-19',
    },
    {
        slug: 'dating-value-differences',
        title: '価値観が違う相手とうまく付き合うための話し合い方',
        description: 'お金、時間、将来像の違いでぶつかったときに、関係を壊さず整理する対話の進め方をまとめました。',
        tag: '恋愛攻略・実戦',
        datePublished: '2026-04-19',
        dateModified: '2026-05-19',
    },
    {
        slug: 'mbti-compatibility-ranking',
        title: 'MBTI×ラブタイプ相性ランキングTOP5と読み解き方',
        description: '会話の噛み合いやすさ、生活リズム、支え合いの観点から相性の高い組み合わせを整理。ランキングの見方と注意点も解説します。',
        tag: 'ランキング',
    },
    {
        slug: 'love-character-theory',
        title: '【理論編】ラブキャラ64診断とは? MBTIと合わせて読む恋愛ガイド',
        description: 'ラブキャラ64が何を見る整理軸か、MBTIとどう役割分担するのかを、恋愛の実例に沿って解説します。',
        tag: '理論・解説',
    },
    {
        slug: 'truth-of-compatibility',
        title: 'MBTI×ラブキャラで見直す、相性の考え方',
        description: '性格が似ていても恋愛でズレる理由を、会話・距離感・安心ポイントの観点から整理します。',
        tag: '相性の真実',
    },
    {
        slug: 'idol-compatibility',
        title: 'MBTI 16タイプ別・推しに惹かれやすい理由を解説',
        description: '自分がどんな芸能人やアイドルに惹かれやすいのかを、MBTIとラブキャラの視点で読み解きます。',
        tag: '推し活・アイドル',
    },
    {
        slug: 'romance-strategy',
        title: '【実践編】MBTI×ラブキャラで読み解く恋愛コミュニケーション',
        description: '距離の縮め方、会話の合わせ方、すれ違い後の修復まで、タイプ別の実践ポイントを整理します。',
        tag: '恋愛攻略・実戦',
    },
    {
        slug: 'infj',
        title: '【決定版】INFJ（提唱者）の性格・恋愛傾向を徹底解説',
        description: '深い洞察力と強い信念を持つINFJの恋愛スタイルを、ラブキャラ診断でさらに深く掘り下げます。',
        tag: '16タイプ解説',
    },
    {
        slug: 'enfp',
        title: '【決定版】ENFP（広報運動家）の性格・恋愛傾向を徹底解説',
        description: '自由と情熱を愛するENFPの魅力を解剖。彼らが真に求めるパートナーシップとは？',
        tag: '16タイプ解説',
    },
    {
        slug: 'enfj',
        title: '【決定版】ENFJ（主人公）の性格・恋愛傾向を徹底解説',
        description: '天性のリーダーENFJ。周囲を導き、献身的に尽くす彼らの愛し方を詳しく解説します。',
        tag: '16タイプ解説',
    },
    {
        slug: 'infp',
        title: '【決定版】INFP（仲介者）の性格・恋愛傾向を徹底解説',
        description: '感受性豊かな理想主義者、INFP。魂の共鳴を求める彼らの愛の形。',
        tag: '16タイプ解説',
    },
    {
        slug: 'intj',
        title: '【決定版】INTJ（建築家）の性格・恋愛傾向を徹底解説',
        description: '冷静沈着な戦略家、INTJ。知的な共鳴を求める彼らの恋愛観と攻略法を伝授。',
        tag: '16タイプ解説',
    },
    {
        slug: 'entj',
        title: '【決定版】ENTJ（指揮官）の性格・恋愛傾向を徹底解説',
        description: '圧倒的な決断力を持つENTJ。彼らと対等な「戦友」になるための戦略を公開。',
        tag: '16タイプ解説',
    },
    {
        slug: 'intp',
        title: '【決定版】INTP（論理学者）の性格・恋愛傾向を徹底解説',
        description: '独自の論理で生きるINTP。掴みどころのない彼らの心を射止めるためのヒント。',
        tag: '16タイプ解説',
    },
    {
        slug: 'entp',
        title: '【決定版】ENTP（討論者）の性格・恋愛傾向を徹底解説',
        description: '常に変化と刺激を求めるENTP。彼らを飽きさせない、知的な駆け引きの極意。',
        tag: '16タイプ解説',
    },
    {
        slug: 'isfp',
        title: '【決定版】ISFP（冒険家）の性格・恋愛傾向を徹底解説',
        description: '独自の感性で世界を彩るISFP。言葉を超えた深い繋がりを築く方法。',
        tag: '16タイプ解説',
    },
    {
        slug: 'esfp',
        title: '【決定版】ESFP（エンターテイナー）の性格・恋愛傾向を徹底解説',
        description: '今この瞬間を全力で楽しむESFP。彼らの明るさの裏にある繊細な内面を解説。',
        tag: '16タイプ解説',
    },
    {
        slug: 'istp',
        title: '【決定版】ISTP（巨匠）の性格・恋愛傾向を徹底解説',
        description: '冷静で実利的なISTP。不器用な優しさを持つ彼らの「沼る」攻略ポイント。',
        tag: '16タイプ解説',
    },
    {
        slug: 'istj',
        title: '【決定版】ISTJ（管理者）の性格・恋愛傾向を徹底解説',
        description: '誠実で安定感抜群のISTJ。将来を見据えた、堅実な愛を育むためのステップ。',
        tag: '16タイプ解説',
    },
    {
        slug: 'isfj',
        title: '【決定版】ISFJ（擁護者）の性格・恋愛傾向を徹底解説',
        description: '究極の優しさを誇るISFJ。彼らの献身を支え、深い絆を結ぶためのアドバイス。',
        tag: '16タイプ解説',
    },
    {
        slug: 'estj',
        title: '【決定版】ESTJ（幹部）の性格・恋愛傾向を徹底解説',
        description: '頼れるリーダーESTJ。秩序を重んじる彼らの信頼を勝ち取るための具体的戦略。',
        tag: '16タイプ解説',
    },
    {
        slug: 'esfj',
        title: '【決定版】ESFJ（領事）の性格・恋愛傾向を徹底解説',
        description: '社交的で思いやりに満ちたESFJ。彼らの承認欲求を満たし、深い信頼を得る方法。',
        tag: '16タイプ解説',
    },
    {
        slug: 'estp',
        title: '【決定版】ESTP（起業家）の性格・恋愛傾向を徹底解説',
        description: 'スリルを愛する冒険家、ESTP。最高に刺激的で最強の「戦友」になる方法。',
        tag: '16タイプ解説',
    },
];

export const articles: Article[] = articleSeeds.map((article) => ({
    datePublished: defaultDatePublished,
    dateModified: defaultDateModified,
    ...article,
}));

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug);
}

export const featuredArticleSlugs = [
    'diagnosis-guide',
    'truth-of-compatibility',
    'relationship-checkpoints',
];
