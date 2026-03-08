import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mbti-lovetype.com';
    const articleSlugs = [
        'mbti-compatibility-ranking',
        'love-character-theory',
        'truth-of-compatibility',
        'idol-compatibility',
        'romance-strategy',
        'infj',
        'enfp',
        'enfj',
        'infp',
        'intj',
        'entj',
        'intp',
        'entp',
        'isfp',
        'esfp',
        'istp',
        'istj',
        'isfj',
        'estj',
        'esfj',
        'estp',
    ];

    const articleEntries: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
        url: `${baseUrl}/articles/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/diagnosis`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/policy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/articles`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...articleEntries,
    ];
}
