'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight, Brain } from 'lucide-react';

export default function DiagnosisHero() {
    return (
        <section className="w-full bg-white pb-10 sm:pb-12">
            {/* Hero Image Container */}
            <div className="w-full max-w-5xl mx-auto overflow-hidden bg-teal-50 sm:rounded-none">
                <Image
                    src="/images/hero_bg.webp"
                    alt="MBTI × Love Type 相関性まとめ"
                    width={1024}
                    height={572}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1024px"
                    className="aspect-[1024/572] w-full object-cover"
                    priority
                />
            </div>

            {/* CTA Buttons Container */}
            <div className="max-w-4xl mx-auto px-4 mt-6 text-center sm:mt-8">
                <p className="text-gray-700 text-base mb-6 max-w-2xl mx-auto leading-8 sm:text-lg sm:mb-8">
                    あなたの性格タイプと恋愛傾向を掛け合わせて徹底分析。<br className="hidden md:block" />
                    本当の自分と、運命の相手を見つけるためのヒントがここに。
                </p>

                <div className="flex flex-col items-center gap-4 w-full max-w-lg mx-auto sm:gap-6">
                    {/* Main CTA: Start Diagnosis */}
                    <Link
                        href="/diagnosis"
                        className="w-full min-h-14 sm:w-auto sm:min-w-[280px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 hover:-translate-y-1 transition-all duration-200 sm:px-8 sm:py-5 sm:text-xl"
                    >
                        <Heart className="w-6 h-6 fill-white" />
                        <span>相性診断を始める</span>
                        <ArrowRight className="w-6 h-6" />
                    </Link>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        {/* Button A: MBTI (External) */}
                        <a
                            href="https://www.16personalities.com/ja"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group min-h-12 w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 px-5 py-3 rounded-xl font-medium text-sm shadow-sm hover:bg-gray-50 hover:text-teal-700 hover:border-teal-300 transition-all duration-200"
                        >
                            <Brain className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>MBTI診断を受ける</span>
                            <span className="text-xs text-gray-600 ml-1">(外部)</span>
                        </a>

                        {/* Button B: Love Type (External) */}
                        <a
                            href="https://lovetype16.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group min-h-12 w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 px-5 py-3 rounded-xl font-medium text-sm shadow-sm hover:bg-gray-50 hover:text-pink-700 hover:border-pink-300 transition-all duration-200"
                        >
                            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>ラブタイプ診断を受ける</span>
                            <span className="text-xs text-gray-600 ml-1">(外部)</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
