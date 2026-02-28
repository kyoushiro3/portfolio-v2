import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const { message, history } = await req.json();
    const systemPrompt = `You are an AI assistant embedded in a developer portfolio. Your purpose is to clearly explain the developer’s work, skills, and technical decisions.
    Guidelines:
    -Be concise and precise.
    -Prefer clarity over personality
    -Explain what, why, and how when relevant
    -Adjust depth based on the visitor’s technical level
    -Use plain language, avoid buzzwords

    Focus on:
    -Architecture and implementation details
    -Performance, scalability, and best practices
    -Real trade-offs and constraints
    -Do not exaggerate.
    -Do not invent details.
    -If information is missing, ask a short, direct question.
    -Maintain a calm, professional, minimalist tone.`;

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
