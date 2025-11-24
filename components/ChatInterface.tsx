'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles, RefreshCw, ChevronLeft } from 'lucide-react';

type Message = {
    role: 'user' | 'assistant';
    content: string;
    type?: 'diagnosis' | 'chat';
};

type ChatInterfaceProps = {
    initialMessages: Message[];
    onSendMessage: (text: string) => Promise<void>;
    loading: boolean;
    onReset: () => void;
    onBack?: () => void;
};

export default function ChatInterface({ initialMessages, onSendMessage, loading, onReset, onBack }: ChatInterfaceProps) {
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [initialMessages, loading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const text = input;
        setInput('');
        await onSendMessage(text);
    };

    return (
        <div className="max-w-lg mx-auto h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 relative my-4">
            {/* Header */}
            <div className="bg-white/90 backdrop-blur border-b p-4 flex items-center justify-between absolute top-0 w-full z-10">
                <div className="flex items-center gap-2">
                    {onBack && (
                        <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                            <ChevronLeft className="w-5 h-5 text-gray-500" />
                        </button>
                    )}
                    <span className="font-bold text-gray-700 flex items-center gap-2">
                        <Sparkles className="text-teal-500" /> AI 恋愛アドバイザー
                    </span>
                </div>
                <button
                    onClick={() => {
                        if (confirm('診断をやり直しますか？')) {
                            onReset();
                        }
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full"
                >
                    <RefreshCw className="w-4 h-4 text-gray-500" />
                </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 pt-20 pb-4 space-y-6 bg-teal-50/30 scroll-smooth">
                {initialMessages.filter(msg => msg.type !== 'diagnosis').map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div
                            className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${msg.role === 'user'
                                ? 'bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-br-none'
                                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                }`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start animate-pulse">
                        <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm text-gray-400 text-sm flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-teal-400" />
                            AIが考え中...
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="相談したいことを入力..."
                        disabled={loading}
                        className="flex-1 bg-gray-100 text-gray-800 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                    <button
                        type="submit"
                        disabled={loading || !input.trim()}
                        className="bg-teal-500 text-white p-3 rounded-full hover:bg-teal-600 disabled:opacity-50 transition-colors"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}
