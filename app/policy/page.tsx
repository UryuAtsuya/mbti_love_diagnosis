import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PolicyPage() {
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

                <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-teal-500 pb-4">プライバシーポリシー</h1>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">1. 個人情報の利用目的</h2>
                        <p>
                            当サイト（mbti-lovetype.com）では、お問い合わせや診断サービスの利用時に、お名前やメールアドレス等の個人情報を登録いただく場合がございます。これらの個人情報は、質問に対する回答や必要な情報を電子メール等でご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">2. 個人情報の第三者への開示</h2>
                        <p>
                            当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>本人のご了解がある場合</li>
                            <li>法令等への協力のため、開示が必要となる場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">3. 広告の配信について</h2>
                        <p>
                            当サイトは、第三者配信の広告サービス「Googleアドセンス」を利用しています。<br />
                            広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報「Cookie（クッキー）」を使用することがあります（氏名、住所、メールアドレス、電話番号は含まれません）。<br />
                            Cookieを無効にする設定およびGoogleアドセンスに関する詳細は、<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Google 広告規約</a>をご覧ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">4. アクセス解析ツールについて</h2>
                        <p>
                            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。<br />
                            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">5. 免責事項</h2>
                        <p>
                            当サイトで提供する「MBTI×ラブキャラ診断」の結果、および掲載されている情報の正確性については万全を期しておりますが、診断結果は心理学的統計に基づく傾向を示すものであり、特定の事実を保証するものではありません。<br />
                            当サイトの利用により生じた損害やトラブル等について、当サイト運営者は一切の責任を負いかねます。また、当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">6. 著作権・肖像権について</h2>
                        <p>
                            当サイトに掲載されている文章・画像・キャラクター設定（Love Character 64を含む）の著作権・肖像権等は、当サイト運営者または各権利所有者に帰属します。無断での転載・使用を固く禁じます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-teal-700 mb-4">7. お問い合わせ</h2>
                        <p>
                            当サイトの個人情報の取扱に関するお問い合せは、<Link href="/contact" className="text-teal-600 hover:underline">お問い合わせフォーム</Link>よりご連絡ください。
                        </p>
                    </section>

                    <div className="pt-8 border-t border-gray-100 text-sm text-gray-500">
                        2026年1月28日 策定
                    </div>
                </div>
            </div>
        </main>
    );
}

