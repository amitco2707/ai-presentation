import { motion } from "framer-motion";
import { Check, MessageCircle, Terminal } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

export default function Slide06_LLMvsAgentic({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 09 — LLM vs Agentic"
      title={<>From <span className="gradient-text">talker</span> to <span className="gradient-text">doer</span>.</>}
      subtitle="The chat box was just the start. Modern AI doesn't only talk — it takes action."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Divider VS */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-16 w-16 rounded-full bg-base border-2 border-brand-orange/40 items-center justify-center font-mono text-xs tracking-widest text-brand-amber shadow-glow-sm">
          VS
        </div>

        {/* LLM side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.4, type: "spring", damping: 22 }}
          className="p-8 rounded-2xl border border-line bg-elevated/50 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-lg bg-cream/10 border border-cream/20 flex items-center justify-center">
              <MessageCircle size={18} className="text-cream/80" />
            </div>
            <span className="chip !bg-cream/5 !text-cream/70 !border-cream/20">LLM</span>
          </div>

          <h3 className="text-3xl font-bold tracking-tight mb-2">The Talker</h3>
          <p className="text-muted mb-6">Answers questions. Writes text. Stops there.</p>

          {/* Mock chat */}
          <div className="space-y-3 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tl-sm bg-panel text-cream/85 border border-line/70"
            >
              How do I fix the broken login page?
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.3 }}
              className="max-w-[90%] ml-auto px-4 py-2.5 rounded-2xl rounded-tr-sm bg-brand-orange/10 text-cream border border-brand-orange/30"
            >
              Here are 5 possible causes and example code you could try…
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.8 }}
              className="text-xs text-muted italic text-center pt-2"
            >
              …but you still have to do it yourself.
            </motion.div>
          </div>
        </motion.div>

        {/* Agentic side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ delay: 0.55, type: "spring", damping: 22 }}
          className="p-8 rounded-2xl border border-brand-orange/40 bg-gradient-to-br from-brand-orange/[0.08] to-elevated/40 backdrop-blur-xl shadow-glow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-lg bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center">
              <Terminal size={18} className="text-brand-amber" />
            </div>
            <span className="chip">Agentic AI</span>
          </div>

          <h3 className="text-3xl font-bold tracking-tight mb-2">The Doer</h3>
          <p className="text-muted mb-6">
            Takes the task end-to-end. Reads files, writes code, runs commands.
          </p>

          {/* Mock task list */}
          <ul className="space-y-2.5 font-mono text-sm">
            {[
              "Read auth/login.tsx",
              "Find broken redirect logic",
              "Write fix + tests",
              "Run npm test — all green",
              "Open pull request",
            ].map((task, i) => (
              <motion.li
                key={task}
                initial={{ opacity: 0, x: 10 }}
                animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                transition={{ delay: 0.9 + i * 0.2 }}
                className="flex items-center gap-3 text-cream/85"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={active ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.0 + i * 0.2, type: "spring" }}
                  className="h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center"
                >
                  <Check size={11} className="text-emerald-400" strokeWidth={3} />
                </motion.span>
                {task}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.3 }}
            className="mt-6 pt-4 border-t border-line text-xs text-brand-amber/80 tracking-widest uppercase font-mono"
          >
            ← Claude Code lives here
          </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
