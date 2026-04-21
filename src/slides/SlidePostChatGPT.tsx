import { motion } from "framer-motion";
import { Image, MessageCircle, Brain, Wrench, Bot, Infinity as InfinityIcon } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

// Compact cascade of releases since Nov 2022
const RELEASES = [
  { date: "Nov 2022", label: "ChatGPT", note: "1M users in 5 days. The world notices." },
  { date: "Mar 2023", label: "GPT-4", note: "Reasoning + code at professional level." },
  { date: "Jul 2023", label: "Claude 2", note: "100K context. Long docs in one prompt." },
  { date: "Mar 2024", label: "Claude 3", note: "Opus beats GPT-4 on most benchmarks." },
  { date: "May 2024", label: "GPT-4o", note: "Voice + vision + text, real-time." },
  { date: "Sep 2024", label: "o1", note: "Models that stop and think before answering." },
  { date: "Jun 2025", label: "Claude 4", note: "Agents that plan, run tools, verify." },
  { date: "2026", label: "and counting", note: "Release cadence measured in weeks, not years." },
];

const CAPABILITIES = [
  { icon: Image, label: "Multimodal", body: "See, hear, speak. Images, audio, video — all in one model." },
  { icon: Brain, label: "Reasoning", body: "Chain-of-thought. The model deliberates before it speaks." },
  { icon: Wrench, label: "Tool use", body: "Calls APIs, runs code, queries databases on its own." },
  { icon: Bot, label: "Agents", body: "Long-horizon tasks. Plan, act, recover, finish." },
];

export default function SlidePostChatGPT({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 03 — After ChatGPT"
      title={<>Three years. <span className="gradient-text">A new industry.</span></>}
      subtitle="November 2022 split AI into before and after. What followed wasn't iteration — it was a cambrian explosion of capability."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
        {/* Left: release cascade */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-5 font-mono text-[10px] uppercase tracking-widest text-muted">
            <MessageCircle size={12} className="text-brand-amber" />
            <span>release cadence</span>
            <span className="h-[1px] flex-1 bg-line" />
            <span className="text-brand-amber">accelerating</span>
          </div>

          <div className="rounded-xl border border-line bg-elevated overflow-hidden">
            {RELEASES.map((r, i) => (
              <motion.div
                key={r.date}
                initial={{ opacity: 0, x: -20 }}
                animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.35 + i * 0.06, type: "spring", damping: 24, stiffness: 120 }}
                className={`grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] px-4 md:px-5 py-3 ${
                  i < RELEASES.length - 1 ? "border-b border-line/60" : ""
                } ${i === RELEASES.length - 1 ? "bg-brand-orange/5" : ""} hover:bg-brand-orange/[0.04] transition-colors`}
              >
                <div className="font-mono text-xs tracking-wider text-brand-amber/90 flex items-center">
                  {r.date}
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                  <span
                    className="text-sm md:text-base font-semibold tracking-tight"
                    style={{ color: "#F4E4D0" }}
                  >
                    {r.label}
                  </span>
                  <span className="text-xs md:text-sm text-muted leading-relaxed">
                    {r.note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-4 flex items-center gap-2 font-mono text-[10px] text-muted"
          >
            <InfinityIcon size={12} className="text-brand-orange" />
            <span>the gaps between releases keep shrinking</span>
          </motion.div>
        </div>

        {/* Right: capability pillars */}
        <div>
          <div className="flex items-center gap-3 mb-5 font-mono text-[10px] uppercase tracking-widest text-muted">
            <span className="h-[1px] flex-1 bg-line" />
            <span>what got unlocked</span>
            <Brain size={12} className="text-brand-amber" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.75 + i * 0.1, type: "spring", damping: 22 }}
                whileHover={{ y: -4 }}
                className="group p-5 rounded-xl border border-line bg-elevated hover:border-brand-orange/50 hover:shadow-glow-sm transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-amber mb-3">
                  <c.icon size={18} strokeWidth={1.75} />
                </div>
                <h4 className="text-lg font-bold text-cream mb-1 tracking-tight">
                  {c.label}
                </h4>
                <p className="text-sm text-muted leading-relaxed group-hover:text-cream/80 transition-colors">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 1.25 }}
            className="mt-5 p-4 rounded-xl border border-brand-orange/30 bg-gradient-to-br from-brand-orange/10 to-transparent"
          >
            <p className="text-sm md:text-base text-cream/90 leading-relaxed">
              <span className="font-semibold text-cream">Each capability compounds.</span>{" "}
              Multimodal + reasoning + tools + long-horizon planning = agents that do real work on their own.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
