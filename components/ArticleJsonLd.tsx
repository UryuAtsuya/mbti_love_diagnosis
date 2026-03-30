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
    datePublished = '2026-03-01',
    dateModified = '2026-03-29',
}: ArticleJsonLdProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: `https://mbti-lovetype.com/articles/${slug}`,
        datePublished,
        dateModified,
        author: {
            '@type': 'Organization',
            name: 'AI Love Matcher 運営事務局',
            url: 'https://mbti-lovetype.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'AI Love Matcher 運営事務局',
            url: 'https://mbti-lovetype.com',
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://mbti-lovetype.com/articles/${slug}`,
        },
        inLanguage: 'ja',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
