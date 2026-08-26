import AdSenseUnit from './AdSenseUnit';
import AffiliateCard from './AffiliateCard';
import { adsenseSlots } from '@/lib/monetization';

export default function ArticleAffiliateRecommendation() {
    return (
        <>
            <AdSenseUnit slot={adsenseSlots.article} className="mt-10" />
            <AffiliateCard
                description="恋愛タイプや相性を整えるだけでなく、第一印象づくりも大切です。自分磨きの選択肢として、スキンケア関連サービスもチェックできます。"
                href="https://px.a8.net/svt/ejp?a8mat=4B63GM+59BVX6+5TX8+5YZ75"
                ariaLabel="スキンケアサービスの詳細を見る"
                imageSrc="https://www23.a8.net/svt/bgt?aid=260624902318&wid=002&eno=01&mid=s00000027206001003000&mc=1"
                imageAlt="スキンケアサービスの詳細を見る"
                imageWidth={300}
                imageHeight={250}
                trackingPixelSrc="https://www10.a8.net/0.gif?a8mat=4B63GM+59BVX6+5TX8+5YZ75"
            />
        </>
    );
}
