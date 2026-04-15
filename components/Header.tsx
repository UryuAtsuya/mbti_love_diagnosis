'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, BookOpen, Lightbulb, Users, Sparkles, Menu, X, ChevronDown } from 'lucide-react';

const categories = [
    { href: '/articles', label: '記事一覧', icon: <BookOpen className="w-4 h-4" /> },
    { href: '/articles#theory', label: '理論・解説', icon: <Lightbulb className="w-4 h-4" /> },
    { href: '/articles#types', label: 'タイプ別解説', icon: <Users className="w-4 h-4" /> },
    { href: '/articles#romance', label: '恋愛コラム', icon: <Sparkles className="w-4 h-4" /> },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-teal-600 text-lg hover:text-teal-700 transition-colors"
                >
                    <Heart className="w-5 h-5 fill-teal-500 text-teal-500" />
                    <span>AI Love Matcher</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {/* Articles dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <Link
                            href="/articles"
                            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                                pathname.startsWith('/articles')
                                    ? 'text-teal-600'
                                    : 'text-gray-600 hover:text-teal-600'
                            }`}
                        >
                            <BookOpen className="w-4 h-4" />
                            記事一覧
                            <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </Link>

                        {dropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[180px]">
                                {categories.slice(1).map((cat) => (
                                    <Link
                                        key={cat.href}
                                        href={cat.href}
                                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                                    >
                                        {cat.icon}
                                        {cat.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href="/about"
                        className={`text-sm font-medium transition-colors ${
                            pathname === '/about'
                                ? 'text-teal-600'
                                : 'text-gray-600 hover:text-teal-600'
                        }`}
                    >
                        運営者情報
                    </Link>

                    <Link
                        href="/diagnosis"
                        className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-5 py-2 rounded-full text-sm font-bold hover:shadow-md hover:-translate-y-px transition-all"
                    >
                        相性診断を始める
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="メニューを開く"
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
                    {categories.map((cat) => (
                        <Link
                            key={cat.href}
                            href={cat.href}
                            className="flex items-center gap-2 text-gray-600 hover:text-teal-600 text-sm font-medium py-1 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {cat.icon}
                            {cat.label}
                        </Link>
                    ))}
                    <Link
                        href="/about"
                        className="flex items-center gap-2 text-gray-600 hover:text-teal-600 text-sm font-medium py-1 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        運営者情報
                    </Link>
                    <Link
                        href="/diagnosis"
                        className="block bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-5 py-3 rounded-full text-sm font-bold text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        相性診断を始める
                    </Link>
                </div>
            )}
        </header>
    );
}
