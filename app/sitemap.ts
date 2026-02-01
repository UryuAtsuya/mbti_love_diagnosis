import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mbti-lovetype.com'

    const staticPages = [
        '',
        '/about',
        '/contact',
        '/policy',
        '/terms',
        '/articles',
        '/diagnosis',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const articleSlugs = [
        'truth-of-compatibility',
        'idol-compatibility',
        'romance-strategy',
        'infj',
        'enfp',
        'enfj',
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
        'estp'
    ]

    const articlePages = articleSlugs.map(slug => ({
        url: `${baseUrl}/articles/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...articlePages]
}
