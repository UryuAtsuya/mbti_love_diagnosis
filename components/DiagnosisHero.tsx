'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight, Brain } from 'lucide-react';

export default function DiagnosisHero() {
    return (
        <section className="w-full bg-white pb-12">
            {/* Hero Image Container */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[600px]">
                <Image
                    src="/images/hero_bg.png"
                    alt="MBTI × Love Type 相関性まとめ"
                    fill
                    className="object-contain md:object-cover"
                    priority
                />
            </div>

            {/* CTA Buttons Container */}
            <div className="max-w-4xl mx-auto px-4 mt-8 text-center">
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    あなたの性格タイプと恋愛傾向を掛け合わせて徹底分析。<br className="hidden md:block" />
                    本当の自分と、運命の相手を見つけるためのヒントがここに。
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
                    {/* Button A: MBTI */}
                    <Link
                        href="/diagnosis?type=mbti"
                        className="group w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 bg-white text-teal-600 border-2 border-teal-100 px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-md hover:border-teal-200 hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <Brain className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>MBTI診断を受ける</span>
                    </Link>

                    {/* Button B: Love Type */}
                    <Link
                        href="/diagnosis?type=lovetype"
                        className="group w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <Heart className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                        <span>ラブタイプ診断を受ける</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
