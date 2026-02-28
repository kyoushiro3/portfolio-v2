"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";

const words = [
  "Welcome",
  "ようこそ",
  "مرحبا",
  "Bienvenido",
  "환영합니다",
  "欢迎",
  "Bienvenue",
  "Willkommen",
];

export default function ScreenRevealComponent() {
  const progress = useMotionValue(0);
  const y = useTransform(progress, [0, 1], ["0%", "-100%"]);
  const scaleX = useTransform(progress, [0, 1], [0, 1]);
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 4.2,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setAnimKey((prev) => prev + 1);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[index];
  const isRTL = currentWord === "مرحبا";

  return (
    <motion.div style={{ y }} className="fixed inset-0 z-50 overflow-hidden">
      <style>{`
        @keyframes wordIn {
          0%   { opacity: 0; transform: translateY(16px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0px);  filter: blur(0px); }
        }
        .word-animate {
          animation: wordIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, background: "#0a0a0a" }}>
        <div
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600, height: 600,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 380, height: 380,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        />
      </div>

      {/* Center word */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <span
          key={animKey}
          dir={isRTL ? "rtl" : "ltr"}
          className="word-animate"
          style={{
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            letterSpacing: "0.08em",
            color: "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          {currentWord}
        </span>
      </div>

      {/* Bottom loading bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 2,
          background: "rgba(255,255,255,0.08)",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #c8a96e, #f5e6c8, #c8a96e)",
            transformOrigin: "left center",
            scaleX,
          }}
        />
      </div>

      {/* Corner: top right */}
      <div
        style={{
          position: "absolute",
          top: "2rem", right: "2rem",
          fontFamily: "monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.25)",
          textTransform: "uppercase",
        }}
      >
        Loading
      </div>

      {/* Corner: bottom left — animated dots */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem", left: "2rem",
          fontFamily: "monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        {["·", "·", "·"].map((dot, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          >
            {dot}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}