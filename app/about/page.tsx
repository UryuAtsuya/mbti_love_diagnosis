import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: '運営者情報 | AI Love Matcher',
    description: 'AI Love Matcher の運営者情報、サイトの目的、運営方針についてご案内します。',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Breadcrumb items={[{ label: '運営者情報' }]} />

                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-teal-500 pb-4">運営者情報</h1>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">運営者</h2>
                        <p>AI Love Matcher 運営事務局</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">所在地</h2>
                        <p>日本国内</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">サイトの目的</h2>
                        <p>
                            AI Love Matcher は、MBTI と恋愛傾向（Love Type）をもとに、相性の見方やコミュニケーションのヒントを分かりやすく整理して届けるための情報サイトです。診断結果を表示するだけでなく、結果の読み方や恋愛場面ごとの考え方まで含めて、自サイト内で価値提供を完結させることを目指しています。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">運営方針</h2>
                        <p>
                            当サイトでは、誇張や断定的な表現を避け、傾向や参考情報として理解しやすいコンテンツ作りを重視しています。広告や外部リンクの掲載がある場合も、ユーザーにとって役立つ説明や比較情報を先に提示し、広告のみを目的としたページは作成しません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">コンテンツ制作体制</h2>
                        <p>
                            記事や診断文の企画・構成・編集補助には AI ツールを活用する場合がありますが、公開前に人の目で読み直し、表現調整や内容確認を行っています。MBTI や恋愛傾向に関する情報は、一般的に知られている考え方や当サイト独自の整理軸をもとに、読み物として分かりやすく再編集しています。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">記事づくりで大切にしていること</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>読者が自分や相手を理解するヒントになること</li>
                            <li>断定ではなく、傾向や考え方として伝えること</li>
                            <li>短い結論だけでなく、背景や注意点まで補足すること</li>
                            <li>過度に刺激的な表現や誤解を招く煽りを避けること</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">情報の位置づけ</h2>
                        <p>
                            当サイトの診断結果や記事は、医療・心理療法・法的助言を提供するものではなく、性格傾向やコミュニケーションを考えるための参考情報です。相性や恋愛の結果を保証するものではないため、最終的な判断はご自身の状況に照らしてご検討ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">お問い合わせ</h2>
                        <p>
                            ご質問やご要望は、<Link href="/contact" className="text-teal-600 hover:underline">お問い合わせページ</Link>よりお願いいたします。
                        </p>
                    </section>

                    <div className="pt-8 border-t border-gray-100 text-sm text-gray-500">
                        2026年3月8日 更新
                    </div>
                </div>
            </div>
        </main>
    );
}
