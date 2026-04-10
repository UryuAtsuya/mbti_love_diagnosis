'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, BookOpen, Menu, X } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/articles', label: '記事一覧', icon: <BookOpen className="w-4 h-4" /> },
    ];

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
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                                pathname.startsWith(link.href)
                                    ? 'text-teal-600'
                                    : 'text-gray-600 hover:text-teal-600'
                            }`}
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
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
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 text-gray-600 hover:text-teal-600 text-sm font-medium py-1 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
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
