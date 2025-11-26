'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight, Brain } from 'lucide-react';

export default function DiagnosisHero() {
    return (
        <section className="w-full bg-white pb-12">
            {/* Hero Image Container */}
            <div className="w-full max-w-5xl mx-auto">
                <Image
                    src="/images/hero_bg.png"
                    alt="MBTI × Love Type 相関性まとめ"
                    width={1024}
                    height={572}
                    className="w-full h-auto"
                    priority
                />
            </div>

            {/* CTA Buttons Container */}
            <div className="max-w-4xl mx-auto px-4 mt-8 text-center">
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    あなたの性格タイプと恋愛傾向を掛け合わせて徹底分析。<br className="hidden md:block" />
                    本当の自分と、運命の相手を見つけるためのヒントがここに。
                </p>

                <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
                    {/* Main CTA: Start Diagnosis */}
                    <Link
                        href="/diagnosis"
                        className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-5 rounded-full font-bold text-xl shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 hover:-translate-y-1 transition-all duration-200 animate-pulse-slow"
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
                            className="group w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-white text-gray-600 border border-gray-200 px-6 py-3 rounded-xl font-medium text-sm shadow-sm hover:bg-gray-50 hover:text-teal-600 hover:border-teal-200 transition-all duration-200"
                        >
                            <Brain className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>MBTI診断を受ける</span>
                            <span className="text-xs text-gray-400 ml-1">(外部)</span>
                        </a>

                        {/* Button B: Love Type (External) */}
                        <a
                            href="https://lovetype16.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-white text-gray-600 border border-gray-200 px-6 py-3 rounded-xl font-medium text-sm shadow-sm hover:bg-gray-50 hover:text-pink-500 hover:border-pink-200 transition-all duration-200"
                        >
                            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>ラブタイプ診断を受ける</span>
                            <span className="text-xs text-gray-400 ml-1">(外部)</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
