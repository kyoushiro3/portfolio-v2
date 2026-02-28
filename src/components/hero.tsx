import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default function Hero() {
  return (
   <div className="grid grid-cols-4 divide-y divide-white/15 md:divide-x items-stretch">
  <div className="col-span-4 px-6 pt-24">
    <div className="flex flex-col justify-center items-center px-4 py-12 md:py-20 lg:py-32">
      <h2
        className={`${jakarta.className} slide-up text-center font-bold text-[#d5e1e7] 
        text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-snug md:leading-tight lg:leading-[1.1]`}
      style={{ animationDelay: "0s" }}>
        &lt; KIM DARREN /&gt;
      </h2>

      <p className="slide-up mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#d5e1e7] font-mono">
        Web Dev | Funnels & Automations
      </p>
    </div>
  </div>
</div>
  );
}
