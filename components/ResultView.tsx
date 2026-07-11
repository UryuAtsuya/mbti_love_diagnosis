'use client';

import { motion } from 'framer-motion';
import { MessageCircleHeart } from 'lucide-react';
import AffiliateRecommendation from './AffiliateRecommendation';
import type { DiagnosisFormData } from './InputForm';

type DiagnosisResult = {
    score: number;
    title: string;
    message: string;
};

type ResultViewProps = {
    result: DiagnosisResult;
    onConsult: (initialMessage?: string) => void;
    formData?: DiagnosisFormData | null;
};

export default function ResultView({ result, onConsult, formData }: ResultViewProps) {
    return (
        <div className="w-full max-w-2xl mx-auto pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-3xl border border-[#e7e0e6] bg-white shadow-[0_24px_70px_rgba(37,35,66,.14)]"
            >
                {/* Header Section */}
                <div className="relative overflow-hidden bg-[#252342] p-8 text-center text-white">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="relative z-10 mb-4 font-bold tracking-widest text-[#c8bdf0]"
                    >
                        COMPATIBILITY SCORE
                    </motion.p>

                    {/* Score Circle */}
                    <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="transparent"
                                className="text-white/15"
                            />
                            <motion.circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="white"
                                strokeWidth="12"
                                fill="transparent"
                                strokeDasharray={2 * Math.PI * 45} // approx radius percentage
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: result.score / 100 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                strokeLinecap="round"
                                style={{ pathLength: 0 }} // Reset for animation
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.5 }}
                                className="text-5xl md:text-6xl font-black drop-shadow-md flex items-baseline justify-center"
                            >
                                {result.score}
                                <span className="text-xl md:text-2xl ml-1">%</span>
                            </motion.span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 max-w-full"
                    >
                        <h2 className="text-lg md:text-xl font-bold break-words">{result.title}</h2>
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 bg-white">
                    {formData?.user_mbti && formData?.partner_mbti && (
                        <p className="mb-5 text-center text-sm font-bold tracking-[.12em] text-[#7969bb]">
                            {formData.user_mbti} × {formData.partner_mbti} の相性
                        </p>
                    )}
                    <div className="prose prose-base max-w-none whitespace-pre-wrap break-words leading-relaxed text-gray-700 md:prose-lg overflow-wrap-anywhere">
                        {result.message}
                    </div>

                </div>
            </motion.div>

            {/* Affiliate - clearly separated from diagnosis result */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="mt-6 px-4"
            >
                <AffiliateRecommendation
                    userMBTI={formData?.user_mbti}
                    partnerMBTI={formData?.partner_mbti}
                    partnerLoveType={formData?.partner_love_type}
                />
            </motion.div>

            {/* Quick Action Buttons (Bottom Sheet style) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mt-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <button
                    onClick={() => onConsult("この人とのデートで気をつけるべきことや、おすすめのデートプランを教えて！")}
                    className="group rounded-2xl border border-[#e7e0e6] bg-white p-4 text-left shadow-sm transition-all hover:bg-[#faf7f8] hover:shadow-md"
                >
                    <span className="block text-2xl mb-2 group-hover:scale-110 transition-transform origin-left">💘</span>
                    <span className="font-bold text-gray-700 text-sm">デート術</span>
                    <span className="mt-1 block text-xs text-[#b64f61]">成功の秘訣は？</span>
                </button>
                <button
                    onClick={() => onConsult("この人に対して「やってはいけないこと」や「地雷」を教えて！")}
                    className="group rounded-2xl border border-[#e7e0e6] bg-white p-4 text-left shadow-sm transition-all hover:bg-[#faf7f8] hover:shadow-md"
                >
                    <span className="block text-2xl mb-2 group-hover:scale-110 transition-transform origin-left">🙅‍♀️</span>
                    <span className="font-bold text-gray-700 text-sm">NG行動</span>
                    <span className="mt-1 block text-xs text-[#b64f61]">地雷を踏まないために</span>
                </button>
            </motion.div>

            {/* Main Consultation Button (Repositioned) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="mt-8 px-4 pb-8 flex justify-center"
            >
                <button
                    onClick={() => onConsult()}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#f27d8d] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#f27d8d]/30 transition-transform hover:scale-105 active:scale-95 md:w-auto"
                >
                    <MessageCircleHeart className="w-6 h-6" />
                    AIアドバイザーに相談する
                </button>
            </motion.div>
        </div>
    );
}
