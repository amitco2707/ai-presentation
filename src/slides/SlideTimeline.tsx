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
    body: "Alan Turing asks: can a machine fool a human into thinking it's human? The question defines the field for the next 70 years.",
    heat: "spark",
  },
  {
    era: "1990s",
    icon: Cpu,
    title: "Deep Blue beats Kasparov",
    body: "Chess — the benchmark of human intellect — falls to a search engine with handcrafted rules. Proof that machines can out-think us in narrow domains.",
    heat: "ember",
  },
  {
    era: "2010s",
    icon: Sparkles,
    title: "The deep-learning explosion",
    body: "GPUs + big data + neural networks. Image recognition, speech, translation — every benchmark falls. AI leaves the lab and ships into products.",
    heat: "fire",
  },
  {
    era: "2020 — 2026",
    icon: Rocket,
    title: "Generative AI everywhere",
    body: "ChatGPT, Claude, Gemini. Multimodal models, reasoning models, agents. In 4 years we went from 'AI sometimes works' to 'AI writes the code that ships to production'.",
    heat: "blaze",
    accent: true,
  },
];

const heatStyles: Record<string, string> = {
  spark: "from-brand-amber/20 to-transparent",
  ember: "from-brand-orange/25 to-transparent",
  fire: "from-brand-orange/40 to-transparent",
  blaze: "from-brand-rust/60 via-brand-orange/40 to-brand-amber/20",
};

export default function SlideTimeline({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 02 — How we got here"
      title={<>70 years. <span className="gradient-text">Then 4 years that changed everything.</span></>}
      subtitle="Most of AI history was slow. The curve didn't go vertical until the last decade — and it hasn't stopped since."
    >
      <div className="relative">
        {/* Vertical timeline rail */}
        <div className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-amber/20 via-brand-orange/60 to-brand-rust" />

        <div className="space-y-6 md:space-y-7">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.era}
              initial={{ opacity: 0, x: -30 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.35 + i * 0.12, type: "spring", damping: 22, stiffness: 100 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Node */}
              <div
                className={`absolute left-0 top-1 h-10 w-10 md:h-11 md:w-11 rounded-full border flex items-center justify-center z-10 ${
                  m.accent
                    ? "border-brand-orange bg-brand-orange/20 shadow-glow-sm"
                    : "border-brand-orange/40 bg-base"
                }`}
              >
                <m.icon
                  size={18}
                  strokeWidth={1.75}
                  className={m.accent ? "text-brand-amber" : "text-brand-orange/80"}
                />
              </div>

              {/* Card */}
              <div
                className={`relative p-5 md:p-6 rounded-xl border overflow-hidden ${
                  m.accent
                    ? "border-brand-orange/50 bg-elevated shadow-glow-sm"
                    : "border-line bg-elevated/80"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r pointer-events-none ${heatStyles[m.heat]}`}
                />
                <div className="relative flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                  <span
                    className={`font-mono text-xs md:text-sm tracking-widest uppercase ${
                      m.accent ? "text-brand-amber" : "text-muted"
                    }`}
                  >
                    {m.era}
                  </span>
                  <h3
                    className={`text-xl md:text-2xl font-bold tracking-tight ${
                      m.accent ? "text-cream" : "text-cream"
                    }`}
                  >
                    {m.title}
                  </h3>
                </div>
                <p className="relative text-sm md:text-base text-cream/75 leading-relaxed">
                  {m.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Acceleration callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex items-center justify-end gap-3 font-mono text-xs text-muted"
        >
          <span className="h-[1px] w-12 bg-line" />
          <span>
            <span className="text-brand-amber">acceleration</span> &nbsp;·&nbsp; the curve keeps bending
          </span>
        </motion.div>
      </div>
    </SlideShell>
  );
}
