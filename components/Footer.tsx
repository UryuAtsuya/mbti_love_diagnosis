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
                    ※当サイトのコンテンツはAIを活用して生成され、情報の正確性に配慮して監修されています。診断結果は統計的な傾向を示すものであり、特定の事実を保証するものではありません。
                </p>
            </div>
        </footer>
    );
}
