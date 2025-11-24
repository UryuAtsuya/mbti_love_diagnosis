'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOVE_TYPES, MBTI_TYPES } from '@/app/constants';

export default function CharacterSection() {
    const [activeTab, setActiveTab] = useState<'mbti' | 'love_type'>('mbti');

    return (
        <div className="max-w-5xl mx-auto px-4 pb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-100">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
                    <span className="border-b-4 border-teal-200 inline-block pb-1">診断キャラクター</span>
                </h2>

                {/* Slider Toggle */}
                <div className="max-w-xs mx-auto mb-8">
                    <div className="flex justify-between text-xs font-bold text-teal-600 mb-2 px-2">
                        <button onClick={() => setActiveTab('mbti')} className="focus:outline-none hover:text-teal-800 transition-colors">MBTI</button>
                        <button onClick={() => setActiveTab('love_type')} className="focus:outline-none hover:text-teal-800 transition-colors">Love Type</button>
                    </div>
                    <div className="h-10 bg-gray-100 rounded-full p-1 relative cursor-pointer flex" onClick={() => setActiveTab(activeTab === 'mbti' ? 'love_type' : 'mbti')}>
                        <motion.div
                            className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm z-10"
                            initial={false}
                            animate={{
                                left: activeTab === 'mbti' ? '4px' : 'calc(50%)',
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <div className={`flex-1 flex items-center justify-center text-sm font-bold z-20 transition-colors duration-200 ${activeTab === 'mbti' ? 'text-teal-600' : 'text-gray-400'}`}>
                            MBTI
                        </div>
                        <div className={`flex-1 flex items-center justify-center text-sm font-bold z-20 transition-colors duration-200 ${activeTab === 'love_type' ? 'text-teal-600' : 'text-gray-400'}`}>
                            Love Type
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'mbti' ? (
                            <motion.div
                                key="mbti"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            >
                                {MBTI_TYPES.map((type) => (
                                    <div
                                        key={type.value}
                                        className="bg-white border-2 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group"
                                        style={{ borderColor: type.color }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-gray-800 text-lg">{type.value}</h3>
                                            <span className="text-xs font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                                {type.label.split('(')[1]?.replace(')', '')}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {/* @ts-ignore: desc property added dynamically */}
                                            {type.desc}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="love_type"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            >
                                {LOVE_TYPES.filter(t => !t.disabled).map((type) => (
                                    <div key={type.value} className="bg-white border border-teal-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow hover:border-teal-200 group">
                                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform origin-left">
                                            {/* Icon placeholder based on type value prefix? Or just generic hearts for now */}
                                            {type.value.startsWith('L') ? '🦁' : '🐰'}
                                        </div>
                                        <h3 className="font-bold text-gray-700 text-sm mb-1">{type.label.split('(')[0]}</h3>
                                        <p className="text-xs text-teal-600 font-bold mb-2">{type.label.split('(')[1]?.replace(')', '')}</p>
                                        <p className="text-xs text-gray-500">{type.desc}</p>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <p className="text-center text-gray-500 mt-8 text-sm">
                    個性豊かなキャラクターたちがあなたの恋愛をサポート！
                </p>
            </div>
        </div>
    );
}
