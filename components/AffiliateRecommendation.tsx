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
        <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl mt-8 space-y-5">
            <p className="text-xs text-gray-400">PR</p>

            <div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {userText}あなたの恋愛タイプと{partnerText}相手との関係づくりに役立つサービスをチェックしてみませんか？
                </p>
                <a
                    href="https://px.a8.net/svt/ejp?a8mat=4B63GM+59BVX6+5TX8+5YZ75"
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="block w-fit max-w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    aria-label="PRサービスの詳細を見る"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        width={300}
                        height={250}
                        alt="PRサービスの詳細を見る"
                        src="https://www23.a8.net/svt/bgt?aid=260624902318&wid=002&eno=01&mid=s00000027206001003000&mc=1"
                        className="block h-auto max-w-full"
                    />
                </a>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img width={1} height={1} src="https://www10.a8.net/0.gif?a8mat=4B63GM+59BVX6+5TX8+5YZ75" alt="" />
            </div>
        </div>
    );
}
