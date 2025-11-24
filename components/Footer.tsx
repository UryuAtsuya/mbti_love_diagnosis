import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} AI Love Matcher. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/" className="text-gray-600 hover:text-teal-500 text-sm transition-colors">
                        ホーム
                    </Link>
                    <Link href="/policy" className="text-gray-600 hover:text-teal-500 text-sm transition-colors">
                        プライバシーポリシー
                    </Link>
                    <div className="flex items-center gap-4 ml-4 border-l pl-4 border-gray-200">
                        <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
