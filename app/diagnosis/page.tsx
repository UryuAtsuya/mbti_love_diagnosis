import type { Metadata } from 'next';
import ChatApp from '@/components/ChatApp';

export const metadata: Metadata = {
    title: '無料相性診断 | AI Love Matcher',
    description: 'MBTIとラブタイプをもとに、二人の相性やコミュニケーションのヒントを無料で診断できます。',
    alternates: {
        canonical: '/diagnosis',
    },
};

export default function DiagnosisPage() {
    return (
        <main className="min-h-screen">
            <ChatApp />
        </main>
    );
}
