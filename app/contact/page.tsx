import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'お問い合わせ | AI Love Matcher',
    description: 'AI Love Matcher へのご質問、ご要望、不具合報告はこちらからお問い合わせください。',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">お問い合わせ</h1>

            <section className="mb-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                    当サイト（AI Love Matcher）に関するご質問、ご要望、不具合のご報告は、
                    以下のお問い合わせフォームよりお願いいたします。
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h2 className="text-xl font-bold text-teal-600 mb-4">お問い合わせフォーム</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        通常、内容を確認のうえ3〜5営業日以内を目安にご連絡します。
                        内容によっては、返信までお時間をいただく場合や、返信できない場合があります。
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc--6IRclml4DsYVFUFhDS7r-hde1VeV1seX0CiGhtOqImvEg/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-3 font-bold text-white shadow-lg shadow-teal-100 transition-transform hover:scale-[1.02]"
                    >
                        Googleフォームはこちら
                    </a>
                    <p className="mt-4 text-sm text-gray-500">
                        現在、お問い合わせはフォームにて受け付けています。
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-teal-600 mb-4">お問い合わせいただける内容</h2>
                <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
                    <li>サイトの不具合に関するご報告</li>
                    <li>記事や診断内容に関するご意見・ご指摘</li>
                    <li>広告掲載に関するお問い合わせ</li>
                    <li>その他、当サイトに関するご連絡</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-teal-600 mb-4">よくあるご質問</h2>
                <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                        <h3 className="font-bold text-gray-800 mb-2">Q. 診断は無料ですか？</h3>
                        <p className="text-gray-600">A. はい、すべての機能を無料でご利用いただけます。</p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                        <h3 className="font-bold text-gray-800 mb-2">Q. 個人情報は保存されますか？</h3>
                        <p className="text-gray-600">
                            A. 入力された情報は診断結果の生成のみに使用され、サーバーに永続的に保存されることはありません。
                            詳しくは<Link href="/policy" className="text-teal-500 hover:underline">プライバシーポリシー</Link>をご覧ください。
                        </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                        <h3 className="font-bold text-gray-800 mb-2">Q. どのくらいで返信されますか？</h3>
                        <p className="text-gray-600">A. 通常は3〜5営業日以内を目安に確認・返信しています。</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-teal-600 mb-4">関連ページ</h2>
                <div className="flex flex-col gap-2 text-gray-600">
                    <Link href="/about" className="text-teal-500 hover:underline">
                        運営者情報
                    </Link>
                    <Link href="/terms" className="text-teal-500 hover:underline">
                        利用規約
                    </Link>
                    <Link href="/policy" className="text-teal-500 hover:underline">
                        プライバシーポリシー
                    </Link>
                    <Link href="/" className="text-teal-500 hover:underline">
                        ホーム
                    </Link>
                </div>
            </section>

            <div className="mt-12 text-center">
                <Link href="/" className="text-teal-500 hover:underline">ホームに戻る</Link>
            </div>
        </main>
    );
}
