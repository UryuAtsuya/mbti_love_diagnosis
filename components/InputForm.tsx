'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Sparkles, Loader2 } from 'lucide-react';
import { LOVE_TYPES, MBTI_TYPES } from '@/app/constants';

export type DiagnosisFormData = {
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
    onStartDiagnosis: (data: DiagnosisFormData) => void;
    loading: boolean;
    onMBTIChange: (userColor: string, partnerColor: string) => void;
};

export default function InputForm({ onStartDiagnosis, loading, onMBTIChange }: InputFormProps) {
    const [step, setStep] = useState(0); // 0: User, 1: Partner
    const [direction, setDirection] = useState(0);
    const [formData, setFormData] = useState<DiagnosisFormData>({
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
        <div className="w-full max-w-md md:max-w-xl mx-auto">
            {/* Progress Bar (Segmented) */}
            <div className="mb-5 sm:mb-8">
                <div className="flex justify-between text-xs font-bold text-teal-700 mb-2">
                    <button type="button" onClick={() => { setDirection(-1); setStep(0); }} className="min-h-8 rounded-full px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 hover:text-teal-900 transition-colors">あなた</button>
                    <button type="button" onClick={() => { setDirection(1); setStep(1); }} className="min-h-8 rounded-full px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 hover:text-teal-900 transition-colors">お相手</button>
                </div>
                <div className="h-3 rounded-full overflow-hidden flex cursor-pointer" onClick={(e) => {
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
                    <div className={`flex-1 transition-colors duration-300 ${step === 0 ? 'bg-teal-600' : 'bg-gray-200'}`} />
                    {/* Right Segment */}
                    <div className={`flex-1 transition-colors duration-300 ${step === 1 ? 'bg-teal-600' : 'bg-gray-200'}`} />
                </div>
            </div>

            {/* Form Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100 p-4 relative overflow-hidden min-h-[408px] sm:rounded-3xl sm:p-6 sm:min-h-[420px]">
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
                            <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
                                {step === 0 ? <User className="text-teal-700" /> : <Heart className="text-teal-700" />}
                                {step === 0 ? "あなたのこと" : "お相手のこと"}
                            </h2>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor={step === 0 ? 'user_name' : 'partner_name'} className="text-xs font-bold text-gray-700 ml-1">お名前 (ニックネーム)</label>
                            <input
                                id={step === 0 ? 'user_name' : 'partner_name'}
                                type="text"
                                value={step === 0 ? formData.user_name : formData.partner_name}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    [step === 0 ? 'user_name' : 'partner_name']: e.target.value
                                })}
                                placeholder={step === 0 ? "例: みく" : "例: たくみ"}
                                className="min-h-12 w-full p-3 bg-teal-50/50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-gray-800"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor={step === 0 ? 'user_gender' : 'partner_gender'} className="text-xs font-bold text-gray-700 ml-1">性別</label>
                            <select
                                id={step === 0 ? 'user_gender' : 'partner_gender'}
                                name={step === 0 ? 'user_gender' : 'partner_gender'}
                                value={step === 0 ? formData.user_gender : formData.partner_gender}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    [step === 0 ? 'user_gender' : 'partner_gender']: e.target.value
                                })}
                                className="min-h-12 w-full p-3 bg-teal-50/50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-gray-800"
                            >
                                <option value="">選択してください</option>
                                <option value="男性">男性</option>
                                <option value="女性">女性</option>
                                <option value="その他">その他</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor={step === 0 ? 'user_mbti' : 'partner_mbti'} className="text-xs font-bold text-gray-700 ml-1">MBTI</label>
                            <select
                                id={step === 0 ? 'user_mbti' : 'partner_mbti'}
                                name={step === 0 ? 'user_mbti' : 'partner_mbti'}
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
                                className="min-h-12 w-full p-3 bg-teal-50/50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-gray-800"
                            >
                                <option value="">選択してください</option>
                                {MBTI_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor={step === 0 ? 'user_love_type' : 'partner_love_type'} className="text-xs font-bold text-gray-700 ml-1">Love Type</label>
                            <select
                                id={step === 0 ? 'user_love_type' : 'partner_love_type'}
                                name={step === 0 ? 'user_love_type' : 'partner_love_type'}
                                value={step === 0 ? formData.user_love_type : formData.partner_love_type}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    [step === 0 ? 'user_love_type' : 'partner_love_type']: e.target.value
                                })}
                                className="min-h-12 w-full p-3 bg-teal-50/50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-gray-800 text-sm"
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
            <div className="mt-6 flex gap-3 sm:mt-8 sm:gap-4">
                {step === 1 && (
                    <button
                        type="button"
                        onClick={handleBack}
                        disabled={loading}
                        className="min-h-14 flex-1 py-4 bg-white text-teal-700 font-bold rounded-full shadow-lg shadow-gray-100 hover:bg-gray-50 transition-all disabled:opacity-70"
                    >
                        戻る
                    </button>
                )}

                {step === 0 ? (
                    <button
                        type="button"
                        onClick={handleNext}
                        className="min-h-14 w-full py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold rounded-full shadow-lg shadow-teal-200 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        次へ進む
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="min-h-14 flex-1 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold rounded-full shadow-lg shadow-teal-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
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
