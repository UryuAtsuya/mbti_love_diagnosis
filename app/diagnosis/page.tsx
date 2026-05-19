import type { Metadata } from 'next';
import ChatApp from '@/components/ChatApp';
import Breadcrumb from '@/components/Breadcrumb';
import { organizationName, siteUrl } from '@/lib/siteMetadata';

export const metadata: Metadata = {
    title: '無料相性診断 | AI Love Matcher',
    description: 'MBTIとラブタイプをもとに、二人の相性やコミュニケーションのヒントを無料で診断できます。',
    alternates: {
        canonical: '/diagnosis',
    },
};

export default function DiagnosisPage() {
    const diagnosisJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        '@id': `${siteUrl}/diagnosis#webapp`,
        name: 'MBTI×ラブタイプ無料相性診断',
        url: `${siteUrl}/diagnosis`,
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Web',
        isAccessibleForFree: true,
        inLanguage: 'ja',
        description: 'MBTIとラブタイプをもとに、二人の相性、すれ違いやすい場面、コミュニケーションのヒントを無料で診断します。',
        provider: {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: organizationName,
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'JPY',
        },
    };

    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosisJsonLd) }}
            />
            <div className="max-w-4xl mx-auto px-4 pt-6">
                <Breadcrumb items={[{ label: '相性診断' }]} />
            </div>
            <ChatApp />
            <section className="bg-white px-4 py-12 sm:py-16">
                <div className="mx-auto max-w-4xl space-y-10 text-gray-700 leading-relaxed">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">診断結果で分かること</h2>
                        <p className="mb-4">
                            AI Love Matcherの相性診断は、MBTIだけで相性を決めるものではありません。性格タイプに加えて、恋愛で安心しやすい距離感、好意の伝え方、連絡頻度の受け止め方をラブタイプとして整理し、二人の間で起こりやすいズレを言語化します。
                        </p>
                        <p>
                            結果では、相性の高さだけでなく、会話が噛み合いやすい場面、誤解が生まれやすい場面、関係を安定させるための具体的な接し方を確認できます。診断結果は相手を決めつけるためではなく、話し合いのきっかけとして使うことを前提にしています。
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-xl border border-teal-100 bg-teal-50 p-5">
                            <h3 className="mb-2 font-bold text-teal-800">MBTI</h3>
                            <p className="text-sm">
                                考え方、判断の癖、エネルギーの向きなど、性格面の傾向を整理します。
                            </p>
                        </div>
                        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                            <h3 className="mb-2 font-bold text-emerald-800">ラブタイプ</h3>
                            <p className="text-sm">
                                恋愛で安心する距離感、好意表現、関係への向き合い方を見ます。
                            </p>
                        </div>
                        <div className="rounded-xl border border-sky-100 bg-sky-50 p-5">
                            <h3 className="mb-2 font-bold text-sky-800">相性の読み解き</h3>
                            <p className="text-sm">
                                似ている点と違う点を分け、すれ違いを減らす会話のヒントに変えます。
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">結果を読むときの注意点</h2>
                        <p className="mb-4">
                            診断結果は、二人の未来を保証するものではありません。同じタイプ同士でも、生活環境、過去の経験、話し合いの習慣によって関係の作られ方は変わります。良い結果が出た場合も、悪い結果が出た場合も、まずは「どの部分が当てはまるか」を自分たちの状況に照らして確認してください。
                        </p>
                        <p>
                            特に大切なのは、苦手な部分を相手の欠点として扱わないことです。返信が遅い、感情表現が少ない、一人時間を大切にする、といった違いは、愛情の有無ではなく安心の作り方の違いである場合があります。
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                        <h2 className="mb-4 text-xl font-bold text-gray-900">診断後に話し合うとよい質問</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>連絡が少ないと不安になりやすいのは、どんなタイミングか</li>
                            <li>一人時間と二人の時間は、どのくらいのバランスが楽か</li>
                            <li>ケンカや違和感があったとき、すぐ話したいか、少し置きたいか</li>
                            <li>好意を言葉で受け取りたいか、行動で受け取りたいか</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
