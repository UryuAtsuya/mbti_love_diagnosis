import ChatApp from '@/components/ChatApp';

export default async function DiagnosisPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedSearchParams = await searchParams;
    const type = typeof resolvedSearchParams.type === 'string' ? resolvedSearchParams.type : undefined;
    const mode = (type === 'mbti' || type === 'lovetype') ? type : undefined;

    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center p-4">
            <ChatApp mode={mode} />
        </main>
    );
}
