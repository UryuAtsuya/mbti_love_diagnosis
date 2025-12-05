export default function PolicyPage() {
    return (
        <main className="min-h-screen bg-white p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">プライバシーポリシー</h1>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-teal-600 mb-4">1. 個人情報の取り扱いについて</h2>
                <p className="text-gray-600 leading-relaxed">
                    当サイト（AI Love Matcher）では、ユーザーの皆様が安心してご利用いただけるよう、
                    入力された情報（お名前、性別、MBTI、Love Typeなど）は診断およびAIアドバイスの生成のみに使用されます。
                    これらの情報が第三者に提供されることはありません。
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-teal-600 mb-4">2. 免責事項</h2>
                <p className="text-gray-600 leading-relaxed">
                    当サイトの診断結果やAIアドバイスは、あくまでエンターテインメントおよび参考情報として提供されるものです。
                    結果の正確性や、それに基づく行動によって生じた損害について、当サイトは一切の責任を負いません。
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-teal-600 mb-4">3. 広告配信について</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しています。
                    このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報「Cookie」（氏名、住所、メール アドレス、電話番号は含まれません）を使用することがあります。
                </p>
                <p className="text-gray-600 leading-relaxed">
                    またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
                    <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Googleのポリシーと規約</a>をご覧ください。
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-teal-600 mb-4">4. お問い合わせ</h2>
                <p className="text-gray-600 leading-relaxed">
                    当サイトに関するお問い合わせは、<a href="/contact" className="text-teal-600 hover:underline">お問い合わせページ</a>よりお願いいたします。
                </p>
            </section>

            <div className="mt-12 text-center">
                <a href="/" className="text-teal-500 hover:underline">ホームに戻る</a>
            </div>
        </main>
    );
}
