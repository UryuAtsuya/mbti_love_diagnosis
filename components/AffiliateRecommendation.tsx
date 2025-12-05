import React from 'react';

type Props = {
    userMBTI?: string;
    partnerMBTI?: string;
    partnerLoveType?: string;
};

export default function AffiliateRecommendation({ userMBTI, partnerMBTI, partnerLoveType }: Props) {
    const userText = userMBTI ? `${userMBTI}の` : '';
    const partnerText = partnerMBTI ? `「${partnerMBTI}」` : '相性の良い';

    return (
        <div className="bg-[#f0f8ff] p-5 rounded-xl mt-8 text-center">
            <h3 className="text-[#ff4081] mb-2.5 font-bold text-lg">
                ⚠️ {userText}あなたと相性最高なのは...
            </h3>

            <p className="font-bold mb-5 text-gray-800 leading-relaxed">
                直感型で優しい{partnerText}タイプの人です。<br />
                実は、このタイプが最も多く登録しているのが<br />
                <span className="bg-gradient-to-t from-[#ffff00] to-transparent bg-[length:100%_40%] bg-bottom bg-no-repeat">
                    友だちから始まる恋愛「Wippy」
                </span>
                です。
            </p>

            <a
                href="https://px.a8.net/svt/ejp?a8mat=45K6H6+9OALO2+5PVE+5YJRM"
                target="_blank"
                rel="nofollow noopener"
                className="block bg-[#ff4081] text-white py-4 px-0 no-underline font-bold rounded-full shadow-[0_4px_0_#c6285e] hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
                今すぐ相性の良い相手を探す ➤
            </a>
            <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=45K6H6+9OALO2+5PVE+5YJRM" alt="" />
        </div>
    );
}
