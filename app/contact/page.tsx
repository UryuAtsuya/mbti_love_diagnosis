import Link from 'next/link';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">お問い合わせ</h1>

            <section className="mb-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                    当サイト（AI Love Matcher）に関するご質問、ご要望、不具合のご報告などは、
                    以下の公式SNSのダイレクトメッセージ（DM）よりお願いいたします。
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h2 className="text-xl font-bold text-teal-600 mb-4">公式SNS</h2>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://twitter.com/your_twitter_handle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-700 hover:text-teal-500 transition-colors"
                            >
                                <span className="font-semibold mr-2">Twitter (X):</span>
                                @your_twitter_handle
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/your_instagram_handle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-700 hover:text-pink-500 transition-colors"
                            >
                                <span className="font-semibold mr-2">Instagram:</span>
                                @your_instagram_handle
                            </a>
                        </li>
                    </ul>
                </div>
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
                </div>
            </section>

            <div className="mt-12 text-center">
                <Link href="/" className="text-teal-500 hover:underline">ホームに戻る</Link>
            </div>
        </main>
    );
}
