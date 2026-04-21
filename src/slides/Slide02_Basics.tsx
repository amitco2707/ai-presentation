import { motion } from "framer-motion";
import { Cpu, Eye, MessageSquare, Sparkles } from "lucide-react";
import SlideShell from "../components/SlideShell";
import ClaudeRobot from "../components/ClaudeRobot";

interface Props {
  active: boolean;
}

const ABILITIES = [
  { icon: MessageSquare, label: "Understands language" },
  { icon: Eye, label: "Recognizes images" },
  { icon: Sparkles, label: "Makes decisions" },
  { icon: Cpu, label: "Generates new ideas" },
];

export default function Slide02_Basics({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 01 — The Basics"
      title={<>Start here. <span className="gradient-text">One simple idea.</span></>}
      subtitle="Before we get into layers and loops — the whole thing rests on a single concept. Let's make it stick."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch relative">
        {/* Big AI card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, type: "spring", damping: 20 }}
          className="relative p-8 md:p-10 rounded-2xl border border-line bg-elevated shadow-card overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 bg-brand-orange/15 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-brand-amber/10 blur-3xl rounded-full" />

          <div className="flex items-center justify-between mb-6 relative">
            <div className="h-14 w-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center">
              <Cpu className="text-brand-amber" size={26} strokeWidth={1.75} />
            </div>
            <span className="font-mono text-7xl md:text-8xl font-black text-line tracking-tighter">
              AI
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-cream">
            Artificial Intelligence
          </h3>
          <p className="text-lg md:text-xl text-cream/80 leading-relaxed mb-8">
            Computers doing things that normally require human thinking —
            understanding, deciding, creating.
          </p>

          <div className="grid grid-cols-2 gap-3 relative">
            {ABILITIES.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, x: -12 }}
                animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="flex items-center gap-3 p-3 rounded-lg border border-line/60 bg-panel/40"
              >
                <a.icon size={16} className="text-brand-amber shrink-0" strokeWidth={1.75} />
                <span className="text-sm text-cream font-medium">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: robot + callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.55, type: "spring", damping: 20 }}
          className="flex flex-col justify-between gap-6"
        >
          <div className="relative p-6 md:p-8 rounded-2xl border border-brand-orange/30 bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-rust/5">
            <div className="font-mono text-[10px] tracking-widest text-brand-amber uppercase mb-3">
              the one-liner
            </div>
            <p className="text-xl md:text-2xl text-cream font-semibold leading-snug tracking-tight">
              AI is software that{" "}
              <span className="gradient-text">mimics human cognition</span> —
              then does it faster, at scale, without tiring.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-brand-orange/10 blur-3xl rounded-full scale-75" />
            <div className="relative">
              <ClaudeRobot variant="point" size={200} />
            </div>
          </div>

          <div className="font-mono text-xs text-muted flex items-center gap-3">
            <span className="h-[1px] flex-1 bg-line" />
            <span>ML, neural nets, deep learning — all of it sits inside this box</span>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
