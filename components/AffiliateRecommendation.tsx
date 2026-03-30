import React from 'react';

type Props = {
    userMBTI?: string;
    partnerMBTI?: string;
    partnerLoveType?: string;
};

export default function AffiliateRecommendation({ userMBTI, partnerMBTI, partnerLoveType }: Props) {
    const userText = userMBTI ? `${userMBTI}の` : '';
    const partnerText = partnerMBTI
        ? `「${partnerMBTI}」`
        : partnerLoveType
            ? `「${partnerLoveType}」`
            : '相性の良い';

    return (
        <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl mt-8">
            <p className="text-xs text-gray-400 mb-3">PR</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {userText}あなたの恋愛タイプに合った出会いを探してみませんか？
                友だちから始まる恋愛マッチングアプリ「Wippy」では、{partnerText}タイプの方も多く利用されています。
            </p>

            <a
                href="https://px.a8.net/svt/ejp?a8mat=45K6H6+9OALO2+5PVE+5YJRM"
                target="_blank"
                rel="nofollow noopener"
                className="inline-block bg-teal-600 text-white py-3 px-6 no-underline font-bold rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm"
            >
                Wippyの詳細を見る
            </a>
            {/* A8 tracking pixel */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=45K6H6+9OALO2+5PVE+5YJRM" alt="" />
        </div>
    );
}
