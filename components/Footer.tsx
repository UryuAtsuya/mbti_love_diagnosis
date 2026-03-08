import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} AI Love Matcher. All rights reserved.
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
                    <Link href="/" className="text-gray-600 hover:text-teal-500 text-sm transition-colors">
                        ホーム
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-teal-500 text-sm transition-colors">
                        運営者情報
                    </Link>
                    <Link href="/terms" className="text-gray-600 hover:text-teal-500 text-sm transition-colors">
                        利用規約
                    </Link>
                    <Link href="/policy" className="text-gray-600 hover:text-teal-500 text-sm transition-colors">
                        プライバシーポリシー
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-teal-500 text-sm transition-colors">
                        お問い合わせ
                    </Link>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 mt-6 text-center">
                <p className="text-[10px] text-gray-400">
                    ※記事の企画・構成・編集補助にAIツールを利用する場合がありますが、公開前に内容確認と表現調整を行っています。診断結果や記事内容は一般的な傾向を紹介するものであり、特定の結果や事実を保証するものではありません。
                </p>
            </div>
        </footer>
    );
}
