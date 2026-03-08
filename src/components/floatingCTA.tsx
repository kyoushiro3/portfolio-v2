import { CircleChevronRight } from "lucide-react";

export default function FloatingCTA() {
  return (
    <a
      href="https://calendly.com/kimdarrenperalta/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition cursor-pointer"
    >
      Book a Call
      <CircleChevronRight size={18} />
    </a>
  );
}