import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'プライバシーポリシー・免責事項 | AI Love Matcher',
    description: 'AI Love Matcher の個人情報保護方針、広告掲載方針、免責事項についてご案内します。',
    alternates: {
        canonical: '/policy',
    },
};

export default function PolicyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Breadcrumb items={[{ label: 'プライバシーポリシー' }]} />

                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-teal-500 pb-4">プライバシーポリシー・免責事項</h1>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">1. 取得する情報と利用目的</h2>
                        <p>
                            当サイト（AI Love Matcher）では、お問い合わせフォームの送信時に入力いただく情報や、サイトの利用状況を把握するためのアクセス情報を取得する場合があります。取得した情報は、お問い合わせへの対応、サービス改善、不正利用の防止、広告配信およびアクセス解析のために利用します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">2. 個人情報の第三者提供</h2>
                        <p>
                            当サイトでは、法令に基づく場合を除き、本人の同意なく個人情報を第三者へ提供しません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">3. 広告の配信について</h2>
                        <p>
                            当サイトは、第三者配信の広告サービス（Google AdSense 等）を利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するため、Cookie を使用することがあります。Cookie により取得される情報には、氏名、住所、メールアドレス、電話番号などの個人を直接特定する情報は含まれません。詳細は
                            <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline"> Google の広告に関するポリシー</a>
                            をご確認ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">4. アクセス解析ツールについて</h2>
                        <p>
                            当サイトでは、Google によるアクセス解析ツール「Google アナリティクス」を利用しています。Google アナリティクスはトラフィックデータの収集のために Cookie を使用します。これらのデータは匿名で収集されており、個人を特定するものではありません。Cookie を無効にすることで収集を拒否できます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">5. 免責事項</h2>
                        <p>
                            当サイトで提供する診断結果、記事、解説は、一般的な傾向や参考情報、エンターテインメントとして提供するものです。内容の正確性・完全性・有用性については可能な限り配慮していますが、その内容を保証するものではありません。当サイトの情報を利用したことによって生じた損害やトラブルについて、当サイト運営者は責任を負いかねます。外部サイトに移動した先で提供される情報やサービスについても責任を負いません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">6. PR表記・広告掲載について</h2>
                        <p>
                            当サイトでは、Google AdSense 等の広告配信サービスやアフィリエイトプログラムを利用し、商品・サービスを紹介する場合があります。広告や商品リンクは、当サイトの運営維持およびコンテンツ改善のために利用されることがあります。紹介する商品・サービスの詳細や条件については、必ずリンク先の公式情報をご確認ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">7. 著作権について</h2>
                        <p>
                            当サイトに掲載されている文章・画像・デザイン等の著作権は、当サイト運営者または各権利所有者に帰属します。引用の範囲を超える無断転載・無断使用を禁じます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">8. お問い合わせ</h2>
                        <p>
                            当サイトの個人情報の取扱に関するお問い合せは、<Link href="/contact" className="text-teal-600 hover:underline">お問い合わせフォーム</Link>よりご連絡ください。
                        </p>
                    </section>

                    <div className="pt-8 border-t border-gray-100 text-sm text-gray-500">
                        2026年3月1日 改定
                    </div>
                </div>
            </div>
        </main>
    );
}
