'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X } from 'lucide-react';

const navigation = [
  { href: '/diagnosis', label: '診断する' },
  { href: '/articles#types', label: 'タイプを知る' },
  { href: '/articles', label: '恋愛コラム' },
  { href: '/about', label: 'このサイトについて' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#ebe5ea] bg-white/95 shadow-[0_4px_18px_rgba(37,35,66,.04)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-bold text-[#252342]">
          <span className="relative flex h-8 w-9 items-center justify-center" aria-hidden="true"><span className="absolute left-1 h-6 w-6 rounded-full border-2 border-[#99d8ce]" /><span className="absolute right-1 h-6 w-6 rounded-full border-2 border-[#0f9f8f]" /></span>
          <span className="truncate">AI Love Matcher</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="メインナビゲーション">
          {navigation.map((item) => <Link key={item.href} href={item.href} className={`text-sm font-medium transition-colors hover:text-[#0f766e] ${pathname === item.href ? 'text-[#0f766e]' : 'text-[#565164]'}`}>{item.label}</Link>)}
          <Link href="/diagnosis" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0f9f8f] px-5 text-sm font-bold text-white transition hover:bg-[#0d8b7e]"><Heart className="h-4 w-4 fill-white" />無料で相性診断</Link>
        </nav>

        <Link href="/diagnosis" className="ml-auto mr-1 inline-flex min-h-11 items-center rounded-full bg-[#0f9f8f] px-4 text-xs font-bold text-white md:hidden">無料で診断</Link>
        <button type="button" className="flex min-h-11 min-w-11 items-center justify-center text-[#252342] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="space-y-1 border-t border-[#ebe5ea] bg-white px-4 py-4 md:hidden" aria-label="モバイルナビゲーション">{navigation.map((item) => <Link key={item.href} href={item.href} className="flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-[#565164] hover:bg-[#faf7f8]" onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</nav>}
    </header>
  );
}
