import type { ReactNode } from 'react';
import ArticleExperience from '@/components/ArticleExperience';

export default function ArticlesLayout({ children }: { children: ReactNode }) {
    return <ArticleExperience>{children}</ArticleExperience>;
}
