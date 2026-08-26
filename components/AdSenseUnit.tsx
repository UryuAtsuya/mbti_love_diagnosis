'use client';

import { useEffect } from 'react';
import { adsensePublisherId } from '@/lib/monetization';

declare global {
    interface Window {
        adsbygoogle?: Record<string, unknown>[];
    }
}

type Props = {
    slot?: string;
    className?: string;
};

export default function AdSenseUnit({ slot, className = '' }: Props) {
    useEffect(() => {
        if (!slot) return;

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('AdSense unit could not be initialized.', error);
            }
        }
    }, [slot]);

    if (!slot) return null;

    return (
        <aside className={`mx-auto w-full max-w-3xl ${className}`} aria-label="広告">
            <p className="mb-2 text-center text-[11px] font-medium tracking-[.14em] text-[#8c8696]">
                ADVERTISEMENT
            </p>
            <ins
                className="adsbygoogle block min-h-[90px] overflow-hidden rounded-2xl bg-white"
                data-ad-client={adsensePublisherId}
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </aside>
    );
}
