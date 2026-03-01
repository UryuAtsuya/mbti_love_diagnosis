import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: '利用規約 | AI Love Matcher',
    description: 'AI Love Matcher の利用条件、禁止事項、免責事項について定めた利用規約です。',
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                <Link
                    href="/"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    ホームに戻る
                </Link>

                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-teal-500 pb-4">利用規約</h1>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">1. 適用</h2>
                        <p>
                            本規約は、AI Love Matcher（以下「当サイト」）の利用条件を定めるものです。ユーザーは、本規約に同意のうえ当サイトを利用するものとします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">2. 提供内容</h2>
                        <p>
                            当サイトは、MBTI や恋愛傾向に関する診断、解説、参考情報を提供します。掲載内容は、予告なく追加、変更、停止する場合があります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">3. 禁止事項</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>法令または公序良俗に反する行為</li>
                            <li>当サイトの運営を妨害する行為</li>
                            <li>不正アクセスまたはこれを試みる行為</li>
                            <li>虚偽の情報を送信する行為</li>
                            <li>当サイトまたは第三者の権利・利益を侵害する行為</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">4. 知的財産権</h2>
                        <p>
                            当サイトに掲載される文章、画像、デザイン等に関する著作権その他の権利は、当サイト運営者または正当な権利者に帰属します。無断転載・無断使用を禁じます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">5. 免責</h2>
                        <p>
                            当サイトは、掲載情報の正確性、完全性、有用性を保証するものではありません。ユーザーが当サイトを利用したことによって生じた損害について、当サイト運営者は責任を負いません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">6. 規約の変更</h2>
                        <p>
                            本規約は、必要に応じて事前の告知なく変更する場合があります。変更後の規約は、当サイト上に掲載した時点で効力を生じます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">7. お問い合わせ</h2>
                        <p>
                            本規約に関するお問い合わせは、<Link href="/contact" className="text-teal-600 hover:underline">お問い合わせページ</Link>よりお願いいたします。
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
