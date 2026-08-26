'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, BookOpen, Clock3, List, X } from 'lucide-react';
import { articles, getArticleBySlug } from '@/lib/articleRegistry';

type Heading = {
    id: string;
    label: string;
};

export default function ArticleExperience({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isIndex = pathname === '/articles';
    const slug = pathname.split('/').filter(Boolean).at(-1) ?? '';
    const currentArticle = getArticleBySlug(slug);
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [progress, setProgress] = useState(0);

    const relatedArticles = useMemo(() => {
        if (!currentArticle) return [];
        const sameCategory = articles.filter((article) => article.slug !== slug && article.tag === currentArticle.tag);
        const fallback = articles.filter((article) => article.slug !== slug && article.tag !== currentArticle.tag);
        return [...sameCategory, ...fallback].slice(0, 3);
    }, [currentArticle, slug]);

    useEffect(() => {
        setMenuOpen(false);
        if (isIndex) {
            setHeadings([]);
            setProgress(0);
            return;
        }

        const main = document.querySelector('main');
        if (!main) return;

        const articleHeadings = Array.from(main.querySelectorAll<HTMLHeadingElement>('h2'))
            .filter((heading) => heading.textContent?.trim())
            .map((heading, index) => {
                const id = heading.id || `article-section-${index + 1}`;
                heading.id = id;
                heading.classList.add('scroll-mt-28');
                return { id, label: heading.textContent?.trim() ?? `セクション${index + 1}` };
            });
        setHeadings(articleHeadings);

        const updateProgress = () => {
            const start = main.offsetTop;
            const distance = Math.max(main.scrollHeight - window.innerHeight, 1);
            const nextProgress = Math.min(100, Math.max(0, ((window.scrollY - start) / distance) * 100));
            setProgress(nextProgress);
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);
        return () => {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, [isIndex, pathname]);

    if (isIndex) return children;

    return (
        <>
            <div className="fixed inset-x-0 top-16 z-40 h-1 bg-[#e9e3e7]" aria-hidden="true">
                <div className="h-full bg-[#0f9f8f] transition-[width] duration-150" style={{ width: `${progress}%` }} />
            </div>
            {children}

            {relatedArticles.length > 0 && (
                <section className="border-t border-[#e8e2e7] bg-[#faf7f8] px-4 py-14 sm:px-6 sm:py-16" aria-labelledby="next-read-title">
                    <div className="mx-auto max-w-6xl">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-xs font-bold tracking-[.16em] text-[#0f766e]">KEEP READING</p>
                                <h2 id="next-read-title" className="mt-2 text-2xl font-bold text-[#252342]">次に読むなら</h2>
                            </div>
                            <Link href="/articles" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#0f766e]">記事をすべて見る <ArrowRight className="h-4 w-4" /></Link>
                        </div>
                        <div className="mt-7 grid gap-4 md:grid-cols-3">
                            {relatedArticles.map((article) => (
                                <Link key={article.slug} href={`/articles/${article.slug}`} className="group flex min-h-56 flex-col rounded-3xl border border-[#e8e2e7] bg-white p-6 transition hover:-translate-y-1 hover:border-[#bddfd7] hover:shadow-[0_16px_36px_rgba(37,35,66,.08)]">
                                    <div className="flex items-center justify-between gap-3 text-xs">
                                        <span className="rounded-full bg-[#edf8f5] px-3 py-1 font-bold text-[#0f766e]">{article.tag}</span>
                                        <span className="inline-flex items-center gap-1 text-[#837d8b]"><Clock3 className="h-3.5 w-3.5" />約6分</span>
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold leading-7 text-[#252342] transition-colors group-hover:text-[#0f766e]">{article.title}</h3>
                                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#0f766e]">続きを読む <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {headings.length > 1 && (
                <>
                    <button
                        type="button"
                        className="fixed bottom-5 right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#d9d1d7] bg-white px-5 text-sm font-bold text-[#252342] shadow-[0_12px_30px_rgba(37,35,66,.16)] transition hover:-translate-y-0.5 hover:border-[#8ccfc2] sm:right-6"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-expanded={menuOpen}
                        aria-controls="article-table-of-contents"
                    >
                        {menuOpen ? <X className="h-4 w-4" /> : <List className="h-4 w-4 text-[#0f766e]" />}
                        {menuOpen ? '閉じる' : '目次'}
                    </button>
                    {menuOpen && (
                        <nav id="article-table-of-contents" className="fixed inset-x-4 bottom-20 z-40 max-h-[min(65vh,34rem)] overflow-y-auto rounded-3xl border border-[#e1dbe0] bg-white p-5 shadow-[0_22px_60px_rgba(37,35,66,.2)] sm:left-auto sm:right-6 sm:w-[24rem]" aria-label="この記事の目次">
                            <div className="mb-4 flex items-start gap-3 border-b border-[#eee9ed] pb-4">
                                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-[#0f766e]" />
                                <div>
                                    <p className="text-xs font-bold tracking-[.12em] text-[#0f766e]">この記事の目次</p>
                                    {currentArticle && <p className="mt-1 line-clamp-2 text-sm font-bold leading-6 text-[#252342]">{currentArticle.title}</p>}
                                </div>
                            </div>
                            <ol className="space-y-1">
                                {headings.map((heading, index) => (
                                    <li key={heading.id}>
                                        <a href={`#${heading.id}`} onClick={() => setMenuOpen(false)} className="flex min-h-11 gap-3 rounded-xl px-3 py-2 text-sm leading-6 text-[#5f5967] transition hover:bg-[#edf8f5] hover:text-[#0f766e]">
                                            <span className="font-bold text-[#0f766e]">{String(index + 1).padStart(2, '0')}</span>
                                            <span>{heading.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    )}
                </>
            )}
        </>
    );
}
