import type { Metadata } from 'next';
import Link from 'next/link';
import { Info, Sparkles, Wrench } from 'lucide-react';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'ISTP（巨匠）の性格・恋愛傾向を解説 | AI Love Matcher',
    description: 'ISTPの恋愛傾向を、自由を重視する理由、行動で愛情が出る場面、すれ違いの原因、関係を続けるコツまで整理します。',
    alternates: {
        canonical: '/articles/istp',
    },
};

export default function ISTPArticle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-4 sm:px-6">
            <ArticleJsonLd
                title="ISTP（巨匠）の性格・恋愛傾向を解説 | AI Love Matcher"
                description="ISTPの恋愛傾向を、自由を重視する理由、行動で愛情が出る場面、すれ違いの原因、関係を続けるコツまで整理します。"
                slug="istp"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-slate-600 to-emerald-500 h-32 flex items-center justify-center">
                    <Wrench className="text-white w-12 h-12" />
                </div>

                <div className="p-8 sm:p-12">
                    <Breadcrumb items={[{ label: "記事一覧", href: "/articles" }, { label: "ISTP（巨匠）の性格・恋愛傾向を解説" }]} />

                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        ISTP（巨匠）の性格・恋愛傾向を解説
                        <span className="block text-xl sm:text-2xl text-emerald-600 mt-3 font-medium">自由を大切にする人が、恋愛で行動で見せている誠実さ</span>
                    </h1>

                    <div className="prose prose-emerald max-w-none text-gray-700">
                        <section className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-10 shadow-sm">
                            <h2 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 mr-2" />
                                先に要点
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 text-sm text-emerald-700">
                                <li>ISTPは、言葉より実際の行動や手触りのある結果を重視しやすいタイプです。</li>
                                <li>恋愛では、自由を尊重されること、無理に感情をこじ開けられないこと、気楽さを大切にします。</li>
                                <li>愛情表現は控えめでも、困ったときに動く、調べる、助けるといった形で誠実さが出やすいです。</li>
                                <li>束縛や察してほしい圧が強い関係では離れやすく、具体的に話せる相手だと安定しやすいです。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">1. ISTPの基本性格: 余計なことを削ぎ落として考える</h2>
                            <p className="mb-6 leading-relaxed">
                                ISTPは、複雑に見えることでも仕組みを見て整理し、必要なことだけを選びやすいタイプです。頭で考えるだけでなく、実際に触って試しながら理解することに強く、問題が起きたときほど落ち着いて見えることがあります。
                            </p>
                            <p className="mb-6 leading-relaxed">
                                一方で、自分の裁量が少ない環境や、感情に振り回される関係には疲れやすい傾向があります。静かでマイペースに見えても、距離を置きたいのは冷たさではなく、余計な圧から離れて整えたい気持ちであることが多いです。
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">ISTPが誤解されやすいポイント</h3>
                                <ul className="space-y-2 text-sm mb-0">
                                    <li>無口でも、相手への評価や状況はかなり見ている</li>
                                    <li>ベタベタしなくても、大切な相手は助けようとする</li>
                                    <li>距離を取りたがる時期があっても、すぐ気持ちが離れたとは限らない</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">2. ISTPが恋愛で大切にしやすいこと</h2>
                            <p className="mb-6 leading-relaxed">
                                ISTPは、恋愛でも気楽さと自律性をかなり重視します。ずっと一緒にいることより、互いの生活や趣味を持ちながら、必要なときに自然に助け合える関係の方が合いやすい傾向があります。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                <div className="border border-emerald-100 rounded-xl p-4">
                                    <h3 className="font-bold text-emerald-700 mb-2">自由な裁量</h3>
                                    <p className="text-sm mb-0">行動や時間を細かく管理されないことは、ISTPにとってかなり重要です。</p>
                                </div>
                                <div className="border border-emerald-100 rounded-xl p-4">
                                    <h3 className="font-bold text-emerald-700 mb-2">具体的な会話</h3>
                                    <p className="text-sm mb-0">何が嫌だったのか、何を望んでいるのかが明確だと向き合いやすくなります。</p>
                                </div>
                                <div className="border border-emerald-100 rounded-xl p-4">
                                    <h3 className="font-bold text-emerald-700 mb-2">実用的な信頼</h3>
                                    <p className="text-sm mb-0">口約束より、助ける・守る・動くといった現実の行動に価値を感じやすいです。</p>
                                </div>
                            </div>
                            <p className="mb-0 leading-relaxed">
                                ISTPが本気になりやすいのは、感情を押しつけず、でも距離が必要なときには放置ではなく信頼で待てる相手です。気楽さと誠実さの両立があると関係が安定しやすくなります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">3. すれ違いやすい場面</h2>
                            <div className="space-y-4 mb-10">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">気持ちを言葉で示すのが遅い</h3>
                                    <p className="text-sm mb-0">
                                        ISTPは好意があっても行動で示しがちで、言葉は少なくなりやすいです。相手からすると何を考えているか分からず、不安につながることがあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">管理されると急に離れたくなる</h3>
                                    <p className="text-sm mb-0">
                                        細かな確認や頻繁な連絡義務が続くと、関係そのものより圧に意識が向きやすくなります。気持ちが冷める前に距離を取りたくなるケースがあります。
                                    </p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">察してほしいやり取りが苦手</h3>
                                    <p className="text-sm mb-0">
                                        曖昧な不満や遠回しな要求は、ISTPには読み取りづらいことがあります。何が問題なのか分からないまま責められると閉じやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">4. ラブキャラ診断で見るISTP</h2>
                            <p className="mb-6 leading-relaxed">
                                ISTPは、当サイトのラブキャラでは「ボス猫（LCRO）」や「忠犬ハチ公（FCPE）」として説明しやすい場面があります。前者は自分のペースを守る独立性、後者は信頼した相手への不器用な一途さを表すイメージです。
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                    <h3 className="text-lg font-bold text-emerald-800 mb-2">ボス猫（LCRO）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        距離感を自分で決めたい気持ちが強く出るパターンです。媚びずに自然体でいる姿が魅力になりやすい一方、相手には読みづらく映ることもあります。
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">忠犬ハチ公（FCPE）として見える場面</h3>
                                    <p className="text-sm leading-relaxed mb-0">
                                        信頼した相手に対しては、実務面でかなり頼れる存在になるイメージです。派手ではなくても、必要な場面で動くことが愛情として表れやすくなります。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">5. ISTPと関係を深めるコツ</h2>
                            <ol className="space-y-4 mb-10">
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-emerald-700">1. 要望は具体的に伝える</span>
                                    <p className="text-sm mt-2 mb-0">「分かってほしい」より「これをしてほしい」の方が、ISTPには伝わりやすく動きやすいです。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-emerald-700">2. 自由時間を奪わない</span>
                                    <p className="text-sm mt-2 mb-0">趣味やひとり時間が確保されている方が、関係の中でも余裕を保ちやすくなります。</p>
                                </li>
                                <li className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <span className="font-bold text-emerald-700">3. 行動の中の好意を見逃さない</span>
                                    <p className="text-sm mt-2 mb-0">調べる、直す、迎えに行くなどの行動は、ISTPにとって分かりやすい愛情表現であることがあります。</p>
                                </li>
                            </ol>

                            <div className="bg-teal-50 p-6 rounded-xl border border-teal-200 mb-10">
                                <h3 className="text-lg font-bold text-teal-800 mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    ISTPに対して避けたい接し方
                                </h3>
                                <ul className="text-sm space-y-2 text-teal-900 list-disc list-inside mb-0">
                                    <li>頻繁な確認で行動を管理しようとすること</li>
                                    <li>感情だけで結論を迫ること</li>
                                    <li>ひとり時間や趣味を軽く扱うこと</li>
                                    <li>不器用さを愛情のなさと決めつけること</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">6. よくある質問</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">Q. ISTPは恋愛に興味がないのですか？</h3>
                                    <p className="text-sm mb-0">興味がないのではなく、表現方法が独特なだけです。ISTPは言葉よりも行動で愛情を示しやすく、さりげない手助けや問題解決が好意のサインであることが多いです。気持ちを言語化するのが苦手なだけで、内面には深い感情を持っています。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">Q. ISTPと相性が良いのはどのタイプですか？</h3>
                                    <p className="text-sm mb-0">ESFJやENFJなど、ISTPの寡黙さを理解しつつ関係に温かみを加えるタイプが挙げられます。ただし、ラブキャラで「距離感の好み」が一致しているかを確認することで、MBTI単体よりも正確な相性が見えてきます。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">Q. ISTPが急に冷たくなるのはなぜですか？</h3>
                                    <p className="text-sm mb-0">ISTPは感情的な場面で処理が追いつかないとき、一時的に距離を置く傾向があります。冷めたのではなく、自分の中で整理する時間が必要なだけのケースがほとんどです。追い詰めずに待つことで、自然に戻ってくることが多いです。</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                    <h3 className="font-bold text-emerald-700 mb-2">Q. ISTPとの会話を深めるにはどうすればいいですか？</h3>
                                    <p className="text-sm mb-0">ISTPは抽象的な話題よりも、具体的な体験や趣味に関する話題で盛り上がりやすいです。一緒に何かを作る、体験する、問題を解くなど「並走型」の会話スタイルだと、ISTPは自然と心を開きやすくなります。</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-l-8 border-emerald-500 pl-4 mb-6">ISTPと相性が取りやすいタイプ</h2>
                            <p className="mb-6 leading-relaxed">
                                ISTPは、実用的な判断力と独立心を大切にするタイプです。自由を尊重してくれながら、具体的な話ができる相手との組み合わせが安定しやすい傾向があります。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <Link href="/articles/esfj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                                    <h3 className="font-bold text-emerald-700 mb-2 group-hover:text-emerald-800">ESFJ</h3>
                                    <p className="text-sm text-gray-600">ISTPの実用的な行動力とESFJの温かさが組み合わさると、生活の中で自然に役割が補い合う関係になりやすいです。ESFJがISTPに感情面での安心感をもたらすことがあります。</p>
                                    <span className="text-xs text-emerald-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/estj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                                    <h3 className="font-bold text-emerald-700 mb-2 group-hover:text-emerald-800">ESTJ</h3>
                                    <p className="text-sm text-gray-600">実務感覚を共有するESTJとは、具体的な課題の解決や日常の安定を一緒に作りやすいです。感情の共有を意識的に増やすことで関係がより安定しやすくなります。</p>
                                    <span className="text-xs text-emerald-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                                <Link href="/articles/entj" className="group block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                                    <h3 className="font-bold text-emerald-700 mb-2 group-hover:text-emerald-800">ENTJ</h3>
                                    <p className="text-sm text-gray-600">ISTPの専門的な技術力とENTJのビジョンが組み合わさると、互いの強みを発揮しやすい関係です。短い言葉でも通じ合いやすいシンプルさが魅力の組み合わせです。</p>
                                    <span className="text-xs text-emerald-500 font-bold mt-3 inline-block">詳しく読む →</span>
                                </Link>
                            </div>
                            <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                相性はMBTIだけで決まるわけではありません。ラブタイプや価値観の共有度によっても大きく変わります。気になる相手がいれば、<Link href="/diagnosis" className="text-teal-600 hover:underline font-medium">相性診断</Link>で組み合わせを確認してみてください。
                            </p>
                        </section>

                        <section className="bg-gradient-to-br from-slate-700 to-emerald-600 p-10 rounded-3xl text-center text-white shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4">不器用な愛情表現を整理する</h2>
                            <p className="mb-8 font-medium">
                                ISTPらしい距離感や、<br />
                                行動に出やすい好意を診断で確かめられます。
                            </p>
                            <Link href="/diagnosis" className="inline-block bg-white text-emerald-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg">
                                無料診断をスタートする
                            </Link>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-500">
                    この記事は一般的な傾向をもとに編集しています。2026年3月更新。
                </div>
            </div>
        </main>
    );
}
