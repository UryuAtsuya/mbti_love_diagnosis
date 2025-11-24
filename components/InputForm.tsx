'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Sparkles, Loader2 } from 'lucide-react';
import { LOVE_TYPES, MBTI_TYPES } from '@/app/constants';

type FormData = {
    user_name: string;
    user_gender: string;
    user_mbti: string;
    user_love_type: string;
    partner_name: string;
    partner_gender: string;
    partner_mbti: string;
    partner_love_type: string;
};

type InputFormProps = {
    onStartDiagnosis: (data: FormData) => void;
    loading: boolean;
    onMBTIChange: (userColor: string, partnerColor: string) => void;
};

export default function InputForm({ onStartDiagnosis, loading, onMBTIChange }: InputFormProps) {
    const [step, setStep] = useState(0); // 0: User, 1: Partner
    const [direction, setDirection] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        user_name: '',
        user_gender: '',
        user_mbti: '',
        user_love_type: '',
        partner_name: '',
        partner_gender: '',
        partner_mbti: '',
        partner_love_type: '',
    });

    const handleNext = () => {
        setDirection(1);
        setStep(1);
    };

    const handleBack = () => {
        setDirection(-1);
        setStep(0);
    };

    const handleSubmit = () => {
        const isUserValid = formData.user_mbti || formData.user_love_type;
        const isPartnerValid = formData.partner_mbti || formData.partner_love_type;

        if (!isUserValid || !isPartnerValid) {
            alert('あなたとお相手、それぞれMBTIまたはLove Typeのどちらかは入力してください！');
            return;
        }
        onStartDiagnosis(formData);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Progress Bar (Segmented) */}
            <div className="mb-8">
                <div className="flex justify-between text-xs font-bold text-teal-600 mb-2">
                    <button onClick={() => { setDirection(-1); setStep(0); }} className="focus:outline-none hover:text-teal-800 transition-colors">あなた</button>
                    <button onClick={() => { setDirection(1); setStep(1); }} className="focus:outline-none hover:text-teal-800 transition-colors">お相手</button>
                </div>
                <div className="h-2 rounded-full overflow-hidden flex cursor-pointer" onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const isLeft = x < rect.width / 2;
                    if (isLeft && step === 1) {
                        setDirection(-1);
                        setStep(0);
                    } else if (!isLeft && step === 0) {
                        setDirection(1);
                        setStep(1);
                    }
                }}>
                    {/* Left Segment */}
                    <div className={`flex-1 transition-colors duration-300 ${step === 0 ? 'bg-teal-400' : 'bg-gray-200'}`} />
                    {/* Right Segment */}
                    <div className={`flex-1 transition-colors duration-300 ${step === 1 ? 'bg-teal-400' : 'bg-gray-200'}`} />
                </div>
            </div>

            {/* Form Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-teal-100 p-6 relative overflow-hidden min-h-[420px]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="space-y-4"
                    >
                        <div className="text-center mb-4">
                            <h2 className="text-xl font-bold text-gray-700 flex items-center justify-center gap-2">
                                {step === 0 ? <User className="text-teal-500" /> : <Heart className="text-teal-500" />}
                                {step === 0 ? "あなたのこと" : "お相手のこと"}
                            </h2>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 ml-1">お名前 (ニックネーム)</label>
                            <input
                                type="text"
                                value={step === 0 ? formData.user_name : formData.partner_name}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    [step === 0 ? 'user_name' : 'partner_name']: e.target.value
                                })}
                                placeholder={step === 0 ? "例: みく" : "例: たくみ"}
                                className="w-full p-3 bg-teal-50/50 border border-teal-100 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none text-gray-700"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 ml-1">性別</label>
                            <select
                                value={step === 0 ? formData.user_gender : formData.partner_gender}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    [step === 0 ? 'user_gender' : 'partner_gender']: e.target.value
                                })}
                                className="w-full p-3 bg-teal-50/50 border border-teal-100 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none text-gray-700"
                            >
                                <option value="">選択してください</option>
                                <option value="男性">男性</option>
                                <option value="女性">女性</option>
                                <option value="その他">その他</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 ml-1">MBTI</label>
                            <select
                                value={step === 0 ? formData.user_mbti : formData.partner_mbti}
                                onChange={(e) => {
                                    const newVal = e.target.value;
                                    const newFormData = {
                                        ...formData,
                                        [step === 0 ? 'user_mbti' : 'partner_mbti']: newVal
                                    };
                                    setFormData(newFormData);

                                    // Update colors
                                    const userType = MBTI_TYPES.find(t => t.value === newFormData.user_mbti);
                                    const partnerType = MBTI_TYPES.find(t => t.value === newFormData.partner_mbti);
                                    onMBTIChange(
                                        userType ? userType.color : '#f0fdfa', // default teal-50
                                        partnerType ? partnerType.color : '#ecfdf5' // default emerald-50
                                    );
                                }}
                                className="w-full p-3 bg-teal-50/50 border border-teal-100 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none text-gray-700"
                            >
                                <option value="">選択してください</option>
                                {MBTI_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 ml-1">Love Type</label>
                            <select
                                value={step === 0 ? formData.user_love_type : formData.partner_love_type}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    [step === 0 ? 'user_love_type' : 'partner_love_type']: e.target.value
                                })}
                                className="w-full p-3 bg-teal-50/50 border border-teal-100 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none text-gray-700 text-sm"
                            >
                                <option value="">選択してください</option>
                                {LOVE_TYPES.map((t, i) => (
                                    <option key={i} value={t.value} disabled={t.disabled}>
                                        {t.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
                {step === 1 && (
                    <button
                        onClick={handleBack}
                        disabled={loading}
                        className="flex-1 py-4 bg-white text-teal-600 font-bold rounded-full shadow-lg shadow-gray-100 hover:bg-gray-50 transition-all"
                    >
                        戻る
                    </button>
                )}

                {step === 0 ? (
                    <button
                        onClick={handleNext}
                        className="w-full py-4 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-full shadow-lg shadow-teal-200 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        次へ進む
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex-1 py-4 bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-bold rounded-full shadow-lg shadow-teal-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : (
                            <>
                                <Sparkles className="w-5 h-5" />
                                診断する
                            </>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}
