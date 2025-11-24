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
                <h2 className="text-xl font-bold text-teal-600 mb-4">3. お問い合わせ</h2>
                <p className="text-gray-600 leading-relaxed">
                    当サイトに関するお問い合わせは、公式SNS（Twitter/Instagram）のDMまでお願いいたします。
                </p>
            </section>

            <div className="mt-12 text-center">
                <a href="/" className="text-teal-500 hover:underline">ホームに戻る</a>
            </div>
        </main>
    );
}
