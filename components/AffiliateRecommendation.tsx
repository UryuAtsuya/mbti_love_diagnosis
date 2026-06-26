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
                    {userText}あなたと{partnerText}相手の相性を、もう少し具体的に知りたい方へ。気になる本音や今後の流れは、電話占いで詳しく相談できます。
                </p>
                <a
                    href="https://px.a8.net/svt/ejp?a8mat=4B650G+EUNA0I+2PEO+C3YG1"
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="block w-fit max-w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    aria-label="電話占いの詳細を見る"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        width={468}
                        height={60}
                        alt="電話占いの詳細を見る"
                        src="https://www25.a8.net/svt/bgt?aid=260626912898&wid=001&eno=01&mid=s00000012624002034000&mc=1"
                        className="block h-auto max-w-full"
                    />
                </a>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img width={1} height={1} src="https://www15.a8.net/0.gif?a8mat=4B650G+EUNA0I+2PEO+C3YG1" alt="" />
            </div>
        </div>
    );
}
