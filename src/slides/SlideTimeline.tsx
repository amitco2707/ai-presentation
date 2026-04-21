import { motion } from "framer-motion";
import { Brain, Cpu, Rocket, Sparkles } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const MILESTONES = [
  {
    era: "1950s",
    icon: Brain,
    title: "The Turing Test",
    accent: false,
  },
  {
    era: "1990s",
    icon: Cpu,
    title: "Deep Blue beats Kasparov",
    accent: false,
  },
  {
    era: "2010s",
    icon: Sparkles,
    title: "Deep-learning explosion",
    accent: false,
  },
  {
    era: "2020 — 2026",
    icon: Rocket,
    title: "Generative AI everywhere",
    accent: true,
  },
];

export default function SlideTimeline({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 02 — How we got here"
      title={<>70 years. <span className="gradient-text">Then 4 years that changed everything.</span></>}
      subtitle="Most of AI history was slow. The curve didn't go vertical until the last decade — and it hasn't stopped since."
    >
      <div className="relative w-full">
        <div className="relative mt-10 md:mt-12 px-4 md:px-8">
          {/* Horizontal axis line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={active ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
            style={{ transformOrigin: "left" }}
            className="absolute top-[22px] md:top-[26px] left-4 right-4 md:left-8 md:right-8 h-[2px] bg-gradient-to-r from-brand-amber/30 via-brand-orange/70 to-brand-rust"
          />

          <div className="relative grid grid-cols-4 gap-3 md:gap-5">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.era}
                initial={{ opacity: 0, y: 20 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + i * 0.15, type: "spring", damping: 22, stiffness: 110 }}
                className="flex flex-col items-center text-center"
              >
                {/* Node */}
                <div
                  className={`relative h-11 w-11 md:h-[52px] md:w-[52px] rounded-full border-2 flex items-center justify-center z-10 shrink-0 ${
                    m.accent
                      ? "border-brand-orange bg-brand-orange/25 shadow-glow-sm"
                      : "border-brand-orange/60 bg-[#0a0a0a]"
                  }`}
                >
                  <m.icon
                    size={20}
                    strokeWidth={1.75}
                    className={m.accent ? "text-brand-amber" : "text-brand-orange"}
                  />
                </div>

                {/* Year label */}
                <span
                  className={`mt-3 font-mono text-xs md:text-sm tracking-widest uppercase ${
                    m.accent ? "text-brand-amber" : "text-slate-200"
                  }`}
                >
                  {m.era}
                </span>

                {/* Title card */}
                <div
                  className={`mt-3 w-full px-3 md:px-4 py-3 md:py-4 rounded-xl border ${
                    m.accent
                      ? "border-brand-orange/60 bg-[#141414] shadow-glow-sm"
                      : "border-[#2a2825] bg-[#141414]"
                  }`}
                >
                  <h3
                    className="text-sm md:text-base lg:text-lg font-bold leading-snug tracking-tight"
                    style={{ color: "#ffffff" }}
                  >
                    {m.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex items-center justify-end gap-3 font-mono text-xs"
          style={{ color: "#c9c3ba" }}
        >
          <span className="h-[1px] w-12 bg-[#2a2825]" />
          <span>
            <span style={{ color: "#F0B27A" }}>acceleration</span>
            {" "}·{" "}the curve keeps bending
          </span>
        </motion.div>
      </div>
    </SlideShell>
  );
}
