// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { inputs, query, conversation_id } = body;

        // チャットボット用エンドポイントを使用
        // (ワークフローではないので /workflows/run ではありません)
        const apiUrl = process.env.DIFY_API_URL || 'https://api.dify.ai/v1';
        const apiKey = process.env.DIFY_API_KEY;

        // Dify チャットボットAPIへ送信
        const res = await fetch(`${apiUrl}/chat-messages`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                inputs: inputs, // ここにはMBTIなどの診断データだけが入る
                query: query,   // ユーザーの今の発言だけを送る（履歴は送らない）
                response_mode: 'blocking',
                conversation_id: conversation_id, // これさえあればDifyが記憶を繋げてくれる
                user: 'user-123',
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error('Dify Error:', data);
            return NextResponse.json({ error: data.message }, { status: res.status });
        }

        return NextResponse.json(data);

    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}