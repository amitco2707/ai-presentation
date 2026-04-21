import { motion } from "framer-motion";
import { Code2, Orbit, Plug, PlugZap } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const PRODUCTS = [
  {
    name: "Cursor",
    category: "AI-Native IDE",
    oneLiner: "VS Code, rebuilt so the model lives inside your editor.",
    features: [
      "The agent reads your whole repo, edits multiple files, runs your tests",
      "Tab-complete spans entire refactors — not single lines",
      "Chat, inline edits, and an autonomous Composer — all model-aware",
    ],
    color: "#F0B27A",
  },
  {
    name: "Google Antigravity",
    category: "AI-Native IDE",
    oneLiner: "A development environment built around agents as first-class citizens.",
    features: [
      "Agents plan, write, and review code from inside the IDE itself",
      "Shared memory and artifacts across tools, browser, and terminal",
      "You supervise the agent at the keyboard — not a chat tab next door",
    ],
    color: "#34D399",
  },
];

export default function SlideAINative({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 17 — The surface itself is changing"
      title={<>The AI isn't an add-on. <span className="gradient-text">It's the environment.</span></>}
      subtitle="An AI-Native Workspace is a development environment designed around the agent — the model lives inside the IDE, reading your code, editing files, and running tools alongside you."
    >
      {/* Contrast banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.3 }}
        className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs"
      >
        <div className="flex items-center gap-3 p-3 rounded-lg border border-line bg-panel/30 text-cream/80">
          <Plug size={14} className="text-cream/60 shrink-0" />
          <span>
            <span className="text-white font-semibold">Old:</span> AI bolted on as a chat plugin
          </span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg border border-brand-orange/40 bg-brand-orange/5 text-brand-amber">
          <PlugZap size={14} className="shrink-0" />
          <span>
            <span className="text-white font-semibold">New:</span> AI woven into the IDE itself
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.45 + i * 0.15, type: "spring", damping: 22, stiffness: 110 }}
            whileHover={{ y: -4 }}
            className="group relative p-5 md:p-6 rounded-2xl border border-line bg-elevated overflow-hidden hover:border-brand-orange/50 hover:shadow-glow-sm transition-all flex flex-col"
          >
            <div
              className="absolute -top-20 -right-20 h-52 w-52 rounded-full blur-3xl opacity-25 group-hover:opacity-45 transition-opacity"
              style={{ backgroundColor: p.color }}
            />

            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div
                  className="h-11 w-11 rounded-xl border flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: `${p.color}1a`,
                    borderColor: `${p.color}66`,
                    color: p.color,
                  }}
                >
                  {i === 0 ? (
                    <Code2 size={20} strokeWidth={1.75} />
                  ) : (
                    <Orbit size={20} strokeWidth={1.75} />
                  )}
                </div>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest font-semibold"
                  style={{ color: p.color }}
                >
                  {p.category}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">
                {p.name}
              </h3>
              <p className="text-sm md:text-base text-cream/85 leading-relaxed mb-4">
                {p.oneLiner}
              </p>

              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-cream/85">
                    <span
                      className="h-1.5 w-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.95 }}
        className="mt-5 flex items-center justify-center gap-3 font-mono text-xs text-cream/70"
      >
        <span className="h-[1px] w-12 bg-line" />
        <span>
          stop asking <span className="text-white">"where's the AI button?"</span> — start asking <span className="text-brand-amber">"what isn't the AI touching?"</span>
        </span>
        <span className="h-[1px] w-12 bg-line" />
      </motion.div>
    </SlideShell>
  );
}
