import { systemPrompt } from "@/data/prompt";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
    });

    const { message, history } = await req.json();

    const chatHistory = history?.map((msg: any) =>({
        role: msg.role == "user" ? "user" : "model",
        parts: [{ text : msg.content}]
    })) || [];

    const chat = model.startChat(
        {
            history: [
                {
                    role: "user",
                    parts: [{text: systemPrompt}],
                },
                {
                    role: "model",
                    parts: [{ text: "I understand. I'm ready to help users with the art portfolio platform."}],
                },
                ...chatHistory,
            ],
        }
    );

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({response});
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "Failed to get response" },
      { status: 500 }
    );
  }
}
