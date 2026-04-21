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
    body: "Instead of armies of human raters, the model learns from a written set of principles. Self-critique, self-revision — values baked into training, not bolted on after.",
    example: "The model asks itself: 'Does this response align with my constitution?' — and rewrites if not.",
  },
  {
    icon: Shield,
    tag: "posture",
    title: "Safety-first by design",
    body: "Interpretability, red-teaming, and responsible scaling policies — treated as core research, not PR. Hard problems tackled in public papers, not in press releases.",
    example: "Research on mechanistic interpretability — literally tracing individual neurons inside the model.",
  },
  {
    icon: Telescope,
    tag: "capability",
    title: "Long context windows",
    body: "From 100K tokens to a million. Drop an entire codebase, a book, a quarter of legal discovery into a single prompt — and the model actually uses all of it.",
    example: "A 200K-token document isn't summarized — it's reasoned over, end to end, in one pass.",
  },
];

export default function SlideAnthropic({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 10 — A different bet"
      title={<>Anthropic bent the curve on <span className="gradient-text">how you build AI.</span></>}
      subtitle="Same race as everyone else — different rules. Safety as a first-class product feature, not a marketing slide."
    >
      <div className="space-y-5">
        {/* Three pillars, wide rows */}
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.35 + i * 0.12, type: "spring", damping: 22, stiffness: 100 }}
            className="group relative p-6 md:p-7 rounded-2xl border border-line bg-elevated hover:border-brand-orange/50 hover:shadow-glow-sm transition-all overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-brand-orange/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-5 md:gap-7 items-start">
              {/* Icon */}
              <div className="h-14 w-14 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-amber">
                <p.icon size={24} strokeWidth={1.75} />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {p.tag}
                  </span>
                  <span className="h-[1px] flex-1 bg-line" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-cream tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base text-cream/75 leading-relaxed mb-3">
                  {p.body}
                </p>
                <p className="font-mono text-xs md:text-[13px] text-brand-amber/80 leading-relaxed border-l-2 border-brand-orange/50 pl-3">
                  {p.example}
                </p>
              </div>

              {/* Index */}
              <div className="hidden md:block font-mono text-6xl font-black text-line/60 leading-none tracking-tighter">
                0{i + 1}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Footer takeaway */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9 }}
          className="pt-2 flex items-center justify-center gap-3 font-mono text-xs text-muted"
        >
          <span className="h-[1px] w-14 bg-line" />
          <span>
            the result: an LLM you can <span className="text-brand-amber">actually trust in the loop</span>
          </span>
          <span className="h-[1px] w-14 bg-line" />
        </motion.div>
      </div>
    </SlideShell>
  );
}
