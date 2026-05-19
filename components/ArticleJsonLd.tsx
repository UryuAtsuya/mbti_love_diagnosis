import { getArticleBySlug } from '@/lib/articleRegistry';
import { organizationName, siteName, siteUrl } from '@/lib/siteMetadata';

type ArticleJsonLdProps = {
    title: string;
    description: string;
    slug: string;
    datePublished?: string;
    dateModified?: string;
};

export default function ArticleJsonLd({
    title,
    description,
    slug,
    datePublished,
    dateModified,
}: ArticleJsonLdProps) {
    const registeredArticle = getArticleBySlug(slug);
    const publishedAt = datePublished ?? registeredArticle?.datePublished ?? '2026-03-01';
    const modifiedAt = dateModified ?? registeredArticle?.dateModified ?? '2026-03-29';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        url: `${siteUrl}/articles/${slug}`,
        datePublished: publishedAt,
        dateModified: modifiedAt,
        image: `${siteUrl}/icon.png`,
        author: {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: organizationName,
            url: `${siteUrl}/about`,
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: organizationName,
            url: siteUrl,
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/icon.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/articles/${slug}`,
        },
        isPartOf: {
            '@id': `${siteUrl}/#website`,
            name: siteName,
        },
        about: ['MBTI', 'ラブタイプ', '恋愛相性', '恋愛コミュニケーション'],
        inLanguage: 'ja',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
