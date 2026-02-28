import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone } = await req.json();

  try {
    const zapierWebhook = "#";

    await fetch(zapierWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}