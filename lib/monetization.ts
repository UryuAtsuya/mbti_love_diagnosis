export const adsensePublisherId = 'ca-pub-8206190214868370';

export const adsenseSlots = {
    article: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ARTICLE_SLOT,
    diagnosisResult: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_RESULT_SLOT,
} as const;
