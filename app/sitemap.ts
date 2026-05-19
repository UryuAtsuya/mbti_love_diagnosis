import type { MetadataRoute } from 'next';
import { articles } from '@/lib/articleRegistry';
import { foundingDate, siteUrl } from '@/lib/siteMetadata';

export default function sitemap(): MetadataRoute.Sitemap {
    const latestArticleModified = articles.reduce(
        (latest, article) => article.dateModified > latest ? article.dateModified : latest,
        foundingDate,
    );

    const articleEntries: MetadataRoute.Sitemap = articles.map(({ slug, dateModified }) => ({
        url: `${siteUrl}/articles/${slug}`,
        lastModified: dateModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [
        {
            url: `${siteUrl}/`,
            lastModified: latestArticleModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteUrl}/diagnosis`,
            lastModified: foundingDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: foundingDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${siteUrl}/contact`,
            lastModified: foundingDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${siteUrl}/policy`,
            lastModified: foundingDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${siteUrl}/terms`,
            lastModified: foundingDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${siteUrl}/articles`,
            lastModified: latestArticleModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...articleEntries,
    ];
}
