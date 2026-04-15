import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://mbti-lovetype.com',
            },
            ...items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: item.label,
                ...(item.href
                    ? { item: `https://mbti-lovetype.com${item.href}` }
                    : {}),
            })),
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav aria-label="パンくずリスト" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
                    <li className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center gap-1 hover:text-teal-600 transition-colors"
                        >
                            <Home className="w-3.5 h-3.5" />
                            <span>ホーム</span>
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <ChevronRight className="w-3.5 h-3.5 mx-1 text-gray-300" />
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-teal-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-gray-700 font-medium">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
