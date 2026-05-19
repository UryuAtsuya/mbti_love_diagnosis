import type { Metadata } from 'next';
import ChatApp from '@/components/ChatApp';
import Breadcrumb from '@/components/Breadcrumb';
import { organizationName, siteUrl } from '@/lib/siteMetadata';

export const metadata: Metadata = {
    title: '無料相性診断 | AI Love Matcher',
    description: 'MBTIとラブタイプをもとに、二人の相性やコミュニケーションのヒントを無料で診断できます。',
    alternates: {
        canonical: '/diagnosis',
    },
};

export default function DiagnosisPage() {
    const diagnosisJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        '@id': `${siteUrl}/diagnosis#webapp`,
        name: 'MBTI×ラブタイプ無料相性診断',
        url: `${siteUrl}/diagnosis`,
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Web',
        isAccessibleForFree: true,
        inLanguage: 'ja',
        description: 'MBTIとラブタイプをもとに、二人の相性、すれ違いやすい場面、コミュニケーションのヒントを無料で診断します。',
        provider: {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: organizationName,
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'JPY',
        },
    };

    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosisJsonLd) }}
            />
            <div className="max-w-4xl mx-auto px-4 pt-6">
                <Breadcrumb items={[{ label: '相性診断' }]} />
            </div>
            <ChatApp />
        </main>
    );
}
