'use client';

import { motion } from 'framer-motion';
import { MessageCircleHeart, Share2 } from 'lucide-react';
import AffiliateRecommendation from './AffiliateRecommendation';

type DiagnosisResult = {
    score: number;
    title: string;
    message: string;
};

type ResultViewProps = {
    result: DiagnosisResult;
    onConsult: (initialMessage?: string) => void;
};

export default function ResultView({ result, onConsult }: ResultViewProps) {
    return (
        <div className="w-full max-w-2xl mx-auto pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-teal-100"
            >
                {/* Header Section */}
                <div className="bg-gradient-to-b from-teal-500 to-emerald-400 p-8 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-teal-100 font-bold tracking-widest mb-4 relative z-10"
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
                                className="text-teal-300/30"
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
                    <div className="prose prose-teal prose-base md:prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
                        {result.message}
                    </div>

                    {/* Affiliate Recommendation */}
                    <div className="px-6 pb-6 md:px-8 md:pb-8 bg-white">
                        <AffiliateRecommendation />
                    </div>
                </div>
            </motion.div>

            {/* Floating Action Button */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="fixed bottom-8 left-0 right-0 px-4 flex justify-center z-50"
            >
                <button
                    onClick={() => onConsult()}
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-full shadow-xl shadow-teal-300/50 font-bold text-lg flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform"
                >
                    <MessageCircleHeart className="w-6 h-6" />
                    AIアドバイザーに相談する
                </button>
            </motion.div>

            {/* Quick Action Buttons (Bottom Sheet style) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="mt-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <button
                    onClick={() => onConsult("この人とのデートで気をつけるべきことや、おすすめのデートプランを教えて！")}
                    className="bg-white border border-teal-100 p-4 rounded-2xl shadow-sm hover:shadow-md hover:bg-teal-50 transition-all text-left group"
                >
                    <span className="block text-2xl mb-2 group-hover:scale-110 transition-transform origin-left">💘</span>
                    <span className="font-bold text-gray-700 text-sm">デート術</span>
                    <span className="block text-xs text-teal-500 mt-1">成功の秘訣は？</span>
                </button>
                <button
                    onClick={() => onConsult("この人に対して「やってはいけないこと」や「地雷」を教えて！")}
                    className="bg-white border border-teal-100 p-4 rounded-2xl shadow-sm hover:shadow-md hover:bg-teal-50 transition-all text-left group"
                >
                    <span className="block text-2xl mb-2 group-hover:scale-110 transition-transform origin-left">🙅‍♀️</span>
                    <span className="font-bold text-gray-700 text-sm">NG行動</span>
                    <span className="block text-xs text-teal-500 mt-1">地雷を踏まないために</span>
                </button>
            </motion.div>
        </div>
    );
}
