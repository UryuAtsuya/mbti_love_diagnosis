'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import InputForm from './InputForm';
import ResultView from './ResultView';
import ChatInterface from './ChatInterface';

// 型定義
type Message = {
    role: 'user' | 'assistant';
    content: string;
    type?: 'diagnosis' | 'chat';
};

type DiagnosisResult = {
    score: number;
    title: string;
    message: string;
};

export default function ChatApp() {
    // --- State管理 ---
    const [step, setStep] = useState<'input' | 'diagnosing' | 'result' | 'chat'>('input');
    const [loading, setLoading] = useState(false);
    const [conversationId, setConversationId] = useState<string>('');
    const [bgColors, setBgColors] = useState({ user: '#f0fdfa', partner: '#ecfdf5' }); // default teal/emerald lights

    // 診断結果データ
    const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null);

    // チャット履歴
    const [messages, setMessages] = useState<Message[]>([]);

    // --- API通信処理 ---
    const callDify = async (queryText: string, inputs: any = {}) => {
        setLoading(true);
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    inputs,
                    query: queryText,
                    conversation_id: conversationId || undefined,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.details || data.error || 'API Error');

            if (data.conversation_id) {
                setConversationId(data.conversation_id);
            }

            return data.answer;

        } catch (error) {
            console.error(error);
            alert('エラーが発生しました。もう一度お試しください🙇‍♂️');
            return null;
        } finally {
            setLoading(false);
        }
    };

    // --- Phase 1 -> 2: 診断実行 ---
    const handleStartDiagnosis = async (formData: any) => {
        // 固定プロンプトで診断リクエスト
        const query = `二人の相性を診断してください。
ユーザー: ${formData.user_name} (${formData.user_gender}, ${formData.user_mbti}, ${formData.user_love_type})
お相手: ${formData.partner_name} (${formData.partner_gender}, ${formData.partner_mbti}, ${formData.partner_love_type})
結果は必ずJSON形式で出力してください。`;

        const answer = await callDify(query, formData);
        if (!answer) {
            setStep('input');
            return;
        }

        // 診断中演出のために少し待つ（APIが速すぎても味気ないので）
        await new Promise(resolve => setTimeout(resolve, 2000));

        // JSONパース処理
        try {
            const cleanJson = answer.replace(/```json\n|\n```/g, '').trim();
            const parsed = JSON.parse(cleanJson);

            setDiagnosisResult({
                score: parsed.score || 0,
                title: parsed.title || '診断結果',
                message: parsed.message || answer
            });

            // チャット履歴の初期化（診断結果を含める）
            setMessages([
                { role: 'user', content: '相性を診断して' },
                { role: 'assistant', content: parsed.message, type: 'diagnosis' }
            ]);

            setStep('result');
        } catch (e) {
            console.error("JSON Parse Error", e);
            // パース失敗時はテキストとして表示
            setDiagnosisResult({
                score: 0,
                title: '診断結果',
                message: answer
            });
            setStep('result');
        }
    };

    // --- Phase 1 -> 2: 診断実行 (ラッパー) ---
    const handleStartDiagnosisWrapper = async (formData: any) => {
        setStep('diagnosing');
        await handleStartDiagnosis(formData);
    };

    // --- Phase 2 -> 3: 相談チャットへ ---
    const handleConsult = (initialMessage?: string) => {
        setStep('chat');
        if (initialMessage) {
            handleSendMessage(initialMessage);
        }
    };

    // --- Phase 3: チャット送信 ---
    const handleSendMessage = async (text: string) => {
        setMessages(prev => [...prev, { role: 'user', content: text }]);

        const answer = await callDify(text);
        if (answer) {
            // JSON形式で返ってくる可能性があるため、パースを試みる
            let displayContent = answer;
            try {
                const cleanJson = answer.replace(/```json\n|\n```/g, '').trim();
                // JSONっぽい文字列が含まれているかチェック
                if (cleanJson.startsWith('{') && cleanJson.endsWith('}')) {
                    const parsed = JSON.parse(cleanJson);
                    // messageプロパティがあればそれを使う、なければそのまま
                    if (parsed.message) {
                        displayContent = parsed.message;
                    }
                }
            } catch (e) {
                // パースエラーならそのまま表示
                console.log("Not a JSON response or parse error", e);
            }
            setMessages(prev => [...prev, { role: 'assistant', content: displayContent }]);
        }
    };

    // --- リセット処理 ---
    const handleReset = () => {
        setStep('input');
        setConversationId('');
        setMessages([]);
        setDiagnosisResult(null);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 transition-colors duration-700"
            style={{
                background: `linear-gradient(135deg, ${bgColors.user} 0%, ${bgColors.partner} 100%)`
            }}
        >
            <AnimatePresence mode="wait">
                {step === 'input' && (
                    <motion.div
                        key="input"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Love Matcher</h1>
                            <p className="text-teal-500 font-medium">二人の相性をAIが徹底分析♡</p>
                        </div>
                        <InputForm
                            onStartDiagnosis={handleStartDiagnosisWrapper}
                            loading={loading}
                            onMBTIChange={(user, partner) => setBgColors({ user, partner })}
                        />
                    </motion.div>
                )}

                {step === 'diagnosing' && (
                    <motion.div
                        key="diagnosing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center h-[600px]"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal-200 rounded-full animate-ping opacity-20"></div>
                            <div className="bg-white p-6 rounded-full shadow-xl relative z-10">
                                <Heart className="w-16 h-16 text-teal-500 animate-pulse" />
                            </div>
                        </div>
                        <h2 className="mt-8 text-2xl font-bold text-gray-700">診断中...</h2>
                        <p className="text-teal-500 mt-2">二人の相性を分析しています</p>
                    </motion.div>
                )}

                {step === 'result' && diagnosisResult && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ResultView result={diagnosisResult} onConsult={handleConsult} />
                    </motion.div>
                )}

                {step === 'chat' && (
                    <motion.div
                        key="chat"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ChatInterface
                            initialMessages={messages}
                            onSendMessage={handleSendMessage}
                            loading={loading}
                            onReset={handleReset}
                            onBack={() => setStep('result')}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}