import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
                    <p>
                        この利用規約（以下，「本規約」といいます。）は，AI Love Matcher（以下，「当サイト」といいます。）が提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。利用者の皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">第1条（適用）</h2>
                        <p>本規約は，ユーザーと当サイトとの間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">第2条（禁止事項）</h2>
                        <p>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>当サイトの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li>
                            <li>当サイトのサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
                            <li>本サービスによって得られた情報を商業的に利用する行為</li>
                            <li>当サイトの運営を妨害するおそれのある行為</li>
                            <li>他人の個人情報等を収集または蓄積する行為</li>
                            <li>他のユーザーに成りすます行為</li>
                            <li>その他，当サイトが不適切と判断する行為</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">第3条（本サービスの提供の停止等）</h2>
                        <p>当サイトは，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                            <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                            <li>その他，当サイトが本サービスの提供が困難と判断した場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">第4条（著作権）</h2>
                        <p>
                            本サービスによって提供される全ての文章、キャラクター（Love Character 64を含む）、画像の著作権、その他の知的財産権は当サイトに帰属します。ユーザーは、これらを権利者の許諾なく無断転載・複製・商業利用することはできません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">第5条（免責事項）</h2>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>当サイトは，本サービスに事実上または法律上の瑕疵がないことを保証するものではありません。</li>
                            <li>当サイトは，本サービスに関してユーザーに生じたあらゆる損害について一切の責任を負いません。</li>
                            <li>診断結果は推論に基づくものであり、特定の事実を保証するものではありません。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">第6条（利用規約の変更）</h2>
                        <p>当サイトは，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。</p>
                    </section>

                    <div className="pt-8 border-t border-gray-100 text-sm text-gray-500">
                        2026年1月28日 施行
                    </div>
                </div>
            </div>
        </main>
    );
}
