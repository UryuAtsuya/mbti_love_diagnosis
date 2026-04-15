import type { Metadata } from 'next';
import ChatApp from '@/components/ChatApp';
import Breadcrumb from '@/components/Breadcrumb';

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
            <div className="max-w-4xl mx-auto px-4 pt-6">
                <Breadcrumb items={[{ label: '相性診断' }]} />
            </div>
            <ChatApp />
        </main>
    );
}
