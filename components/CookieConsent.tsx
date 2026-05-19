'use client';

import { useState, useEffect } from 'react';

const CONSENT_KEY = 'cookie_consent';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(CONSENT_KEY);
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(CONSENT_KEY, 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 sm:p-6">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-sm text-gray-700 leading-relaxed flex-1">
                    当サイトでは、サービス向上やアクセス解析のためにCookieを使用しています。
                    詳しくは<a href="/policy" className="text-teal-700 underline hover:text-teal-800">プライバシーポリシー</a>をご確認ください。
                </p>
                <div className="flex w-full gap-3 shrink-0 sm:w-auto">
                    <button
                        onClick={handleDecline}
                        className="min-h-11 flex-1 px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors sm:flex-none"
                    >
                        拒否
                    </button>
                    <button
                        onClick={handleAccept}
                        className="min-h-11 flex-1 px-4 py-2 text-sm text-white bg-teal-700 rounded-lg hover:bg-teal-800 transition-colors font-bold sm:flex-none"
                    >
                        同意する
                    </button>
                </div>
            </div>
        </div>
    );
}
