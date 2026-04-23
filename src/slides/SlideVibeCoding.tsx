import { motion } from "framer-motion";
import { ArrowRight, Bot, Lightbulb, TrendingUp, UserCheck } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const POINTS = [
  {
    icon: Lightbulb,
    tag: "definition",
    title: "What is Vibe Coding?",
    body: "You describe the outcome in plain language. Claude Code plans, writes, runs tests, and ships — while you stay focused on the product, not the syntax.",
    color: "#F0B27A",
  },
  {
    icon: TrendingUp,
    tag: "the shift",
    title: "Non-technical builders",
    body: "People with zero coding background are shipping real software. The skill floor for building a product is dropping — fast.",
    color: "#D97757",
  },
  {
    icon: Bot,
    tag: "coming bottleneck",
    title: "Code faster than you can read",
    body: "Within 1–2 years, AI models will generate more code per day than any engineer can review line by line. 'Read every diff' is already becoming a bottleneck.",
    color: "#E89464",
  },
  {
    icon: UserCheck,
    tag: "your new role",
    title: "Developer → Product Manager",
    body: "The job shifts from writing code to writing context. Clear requirements, preventing hallucinations, steering the agent's direction — that's the new craft.",
    color: "#FAD7A0",
  },
];

export default function SlideVibeCoding({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 16 — Vibe Coding"
      title={<>You set the direction. <span className="gradient-text">The agent does the rest.</span></>}
      subtitle="Vibe Coding is the emerging practice of building software through intent, not implementation — and it's changing who gets to build."
    >
      {/* Link back to execution flow */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ delay: 0.25 }}
        className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-brand-amber/80"
      >
        <ArrowRight size={11} />
        <span>built on the Analyze → Plan → Ask → Execute loop from the previous slide</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {POINTS.map((p, i) => (
          <motion.div
            key={p.tag}
            initial={{ opacity: 0, y: 18 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ delay: 0.35 + i * 0.12, type: "spring", damping: 22, stiffness: 110 }}
            whileHover={{ y: -3 }}
            className="group relative p-4 md:p-5 rounded-xl border border-line bg-elevated overflow-hidden hover:border-brand-orange/50 hover:shadow-glow-sm transition-all flex gap-4"
          >
            {/* Ambient glow */}
            <div
              className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{ backgroundColor: p.color }}
            />

            {/* Icon */}
            <div
              className="relative shrink-0 h-10 w-10 rounded-lg border flex items-center justify-center mt-0.5"
              style={{
                backgroundColor: `${p.color}1a`,
                borderColor: `${p.color}55`,
                color: p.color,
              }}
            >
              <p.icon size={18} strokeWidth={1.75} />
            </div>

            {/* Text */}
            <div className="relative flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="font-mono text-[9px] uppercase tracking-widest font-semibold"
                  style={{ color: p.color }}
                >
                  {p.tag}
                </span>
              </div>
              <h4 className="text-base md:text-lg font-bold text-white tracking-tight leading-tight mb-1">
                {p.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#F4E4D0" }}>{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom callout */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ delay: 1.0 }}
        className="mt-4 p-4 rounded-xl border border-brand-orange/40 bg-gradient-to-r from-brand-orange/10 to-transparent"
      >
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#F4E4D0" }}>
          <span style={{ color: "#F0B27A", fontWeight: 600 }}>The new skill — </span>
          not writing perfect code, but writing perfect <em>context</em>: requirements, constraints, and clear signals of what "done" looks like.
        </p>
      </motion.div>
    </SlideShell>
  );
}
