import React from 'react';

export default function AffiliateRecommendation() {
    return (
        <div className="bg-[#f0f8ff] p-5 rounded-xl mt-8 text-center">
            <h3 className="text-[#ff4081] mb-2.5 font-bold text-lg">
                ⚠️ INFPのあなたと相性最高なのは...
            </h3>

            <p className="font-bold mb-5 text-gray-800 leading-relaxed">
                直感型で優しい「ENFJ」タイプの人です。<br />
                実は、このタイプが最も多く登録しているのが<br />
                <span className="bg-gradient-to-t from-[#ffff00] to-transparent bg-[length:100%_40%] bg-bottom bg-no-repeat">
                    心理テストでマッチングできる「With」
                </span>
                です。
            </p>

            <a
                href="https://with.is/welcome"
                target="_blank"
                rel="nofollow noopener"
                className="block bg-[#ff4081] text-white py-4 px-0 no-underline font-bold rounded-full shadow-[0_4px_0_#c6285e] hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
                今すぐ無料で相性の良い相手を探す ➤
            </a>

            <p className="text-xs text-[#666] mt-2.5">
                ※女性は完全無料・男性も登録無料
            </p>
        </div>
    );
}
