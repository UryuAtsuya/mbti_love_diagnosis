import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Props = {
    description: ReactNode;
    href: string;
    ariaLabel: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    trackingPixelSrc: string;
};

export default function AffiliateCard({
    description,
    href,
    ariaLabel,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    trackingPixelSrc,
}: Props) {
    return (
        <aside className="mx-auto mt-8 w-full max-w-3xl rounded-3xl border border-[#e7e0e6] bg-white p-5 shadow-[0_10px_30px_rgba(37,35,66,.05)] sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
                <p className="rounded-full bg-[#eef8f5] px-3 py-1 text-[11px] font-bold tracking-[.12em] text-[#0f766e]">
                    PR
                </p>
                <p className="text-xs text-[#8c8696]">外部サービスのご案内</p>
            </div>
            <p className="text-sm leading-7 text-[#625d70]">{description}</p>
            <a
                href={href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="group mt-5 flex max-w-full flex-col items-center gap-3 overflow-hidden rounded-2xl border border-[#e7e0e6] bg-[#faf7f8] p-3 transition hover:-translate-y-0.5 hover:border-[#99d8ce] hover:shadow-md sm:w-fit"
                aria-label={ariaLabel}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    width={imageWidth}
                    height={imageHeight}
                    alt={imageAlt}
                    src={imageSrc}
                    className="block h-auto max-w-full rounded-lg"
                />
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0f766e]">
                    詳細を確認する
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img width={1} height={1} src={trackingPixelSrc} alt="" aria-hidden="true" />
        </aside>
    );
}
