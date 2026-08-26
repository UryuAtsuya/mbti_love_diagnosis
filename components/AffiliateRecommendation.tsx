import AffiliateCard from './AffiliateCard';

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
        <AffiliateCard
            description={<>{userText}あなたと{partnerText}相手の相性を、もう少し具体的に知りたい方へ。気になる本音や今後の流れは、電話占いで詳しく相談できます。</>}
            href="https://px.a8.net/svt/ejp?a8mat=4B650G+EUNA0I+2PEO+C3YG1"
            ariaLabel="電話占いの詳細を見る"
            imageSrc="https://www25.a8.net/svt/bgt?aid=260626912898&wid=001&eno=01&mid=s00000012624002034000&mc=1"
            imageAlt="電話占いの詳細を見る"
            imageWidth={468}
            imageHeight={60}
            trackingPixelSrc="https://www15.a8.net/0.gif?a8mat=4B650G+EUNA0I+2PEO+C3YG1"
        />
    );
}
