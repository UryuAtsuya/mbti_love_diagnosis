import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

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
                    <div className="flex items-center gap-4 ml-0 md:ml-4 border-l-0 md:border-l md:pl-4 border-gray-200">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
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
