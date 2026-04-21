import { motion } from "framer-motion";
import { BookOpen, Shield, Telescope } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const PILLARS = [
  {
    icon: BookOpen,
    tag: "method",
    title: "Constitutional AI",
    body: "The model learns from a written set of principles — self-critiques, self-revises. Values baked into training, not bolted on after.",
  },
  {
    icon: Shield,
    tag: "posture",
    title: "Safety by design",
    body: "Interpretability and responsible scaling treated as core research — not a PR line. Hard problems tackled in public.",
  },
  {
    icon: Telescope,
    tag: "capability",
    title: "Long context",
    body: "From 100K to a million tokens. Drop a whole codebase or book in one prompt — the model uses all of it.",
  },
];

export default function SlideAnthropic({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 11 — Anthropic"
      title={<>Anthropic bent the curve on <span className="gradient-text">how you build AI.</span></>}
      subtitle="Same race as everyone else — different rules. Safety as a first-class product feature."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.35 + i * 0.12, type: "spring", damping: 22, stiffness: 110 }}
            className="group relative p-5 md:p-6 rounded-2xl border border-[#2a2825] bg-[#141414] hover:border-brand-orange/50 hover:shadow-glow-sm transition-all overflow-hidden flex flex-col"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-xl bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-amber shrink-0">
                <p.icon size={22} strokeWidth={1.75} />
              </div>
              <span
                className="font-mono text-[10px] uppercase tracking-widest"
                style={{ color: "#F0B27A" }}
              >
                0{i + 1} · {p.tag}
              </span>
            </div>

            <h3
              className="relative text-xl md:text-2xl font-bold tracking-tight mb-2"
              style={{ color: "#ffffff" }}
            >
              {p.title}
            </h3>
            <p
              className="relative text-sm md:text-base leading-relaxed"
              style={{ color: "#f1f5f9" }}
            >
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-6 flex items-center justify-center gap-3 font-mono text-xs"
        style={{ color: "#c9c3ba" }}
      >
        <span className="h-[1px] w-14 bg-[#2a2825]" />
        <span>
          the result: an LLM you can{" "}
          <span style={{ color: "#F0B27A" }}>actually trust in the loop</span>
        </span>
        <span className="h-[1px] w-14 bg-[#2a2825]" />
      </motion.div>
    </SlideShell>
  );
}
