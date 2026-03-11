"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import { useRef, useState } from "react";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default function ChatWidget() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // toggle chat window
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: messages }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.response }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Error sending message." },
      ]);
    }

    setLoading(false);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`group relative w-full h-full flex items-center gap-3
    rounded-xl px-4 py-3
    bg-white
    border border-[#e6e3dc]
    shadow-lg
    hover:shadow-xl
    hover:border-[#fe9042]
    transition-all duration-300
    ${jakarta.className}`}
        >
          <div className="w-10 h-10 rounded-full bg-[#fe9042] flex items-center justify-center text-white font-bold text-sm shrink-0">
            K
          </div>

          <div className="flex flex-col text-left leading-tight">
            <span className="text-[#2a2820] font-semibold text-sm">
              Talk to Kim
            </span>

            <span className="text-xs text-[#8c887f]">AI assistant</span>
          </div>

          <span className="ml-auto relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe9042] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe9042]"></span>
          </span>
        </button>
      )}

      {open && (
        <div className="w-[340px] bg-white border border-[#e6e3dc] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#f1eee8]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#fe9042] flex items-center justify-center text-white font-bold text-sm">
                K
              </div>

              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-[#2a2820] text-sm">
                  Talk to Kim
                </span>
                <span className="text-[11px] text-[#8c887f]">AI Assistant</span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-[#8c887f] hover:text-black transition"
            >
              ✕
            </button>
          </div>

          <div className="h-[320px] overflow-y-auto px-4 py-3 flex flex-col gap-2 bg-[#faf9f6]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed rounded-lg
          ${
            msg.role === "user"
              ? "bg-[#fe9042] text-white self-end rounded-br-[4px]"
              : "bg-white border border-[#ece8e1] text-[#2a2820] self-start rounded-bl-[4px]"
          }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="text-xs text-[#8c887f] italic">
                Kim is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-[#f1eee8] flex gap-2">
            <input
              className="flex-1 bg-[#f5f3ee] border border-[#e6e3dc] px-3 py-2 text-sm rounded-lg outline-none focus:border-[#fe9042]"
              placeholder="Ask about my portfolio..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-[#fe9042] text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
