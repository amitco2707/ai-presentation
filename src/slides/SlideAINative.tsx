import { motion } from "framer-motion";
import { Command, Orbit, Plug, PlugZap } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const PRODUCTS = [
  {
    name: "Cursor",
    category: "IDE",
    oneLiner: "VS Code, rebuilt around the model.",
    features: [
      "Tab-complete entire multi-file refactors",
      "Composer agent edits the codebase autonomously",
      "Indexes the repo so the model has full context",
      "Chat, edits, and terminal — all model-aware",
    ],
    color: "#F0B27A",
  },
  {
    name: "Google Antigravity",
    category: "Agent workspace",
    oneLiner: "An environment where the agent is the main actor, not the plugin.",
    features: [
      "Agents run across apps, not inside one",
      "Shared memory and artifacts between tools",
      "The human supervises; the agent executes",
      "Browser, docs, code — one cohesive surface",
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
      subtitle="The old model — open an app, click the AI button. The new model — the whole workspace assumes an agent is present, reading everything you touch."
    >
      {/* Contrast banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.3 }}
        className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs"
      >
        <div className="flex items-center gap-3 p-3 rounded-lg border border-line bg-panel/30 text-muted">
          <Plug size={14} className="text-muted shrink-0" />
          <span>
            <span className="text-cream/80">Old:</span> AI bolted on as a plugin
          </span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg border border-brand-orange/40 bg-brand-orange/5 text-brand-amber">
          <PlugZap size={14} className="shrink-0" />
          <span>
            <span className="font-semibold">New:</span> AI woven into the workflow itself
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.45 + i * 0.15, type: "spring", damping: 22, stiffness: 100 }}
            whileHover={{ y: -4 }}
            className="group relative p-6 md:p-7 rounded-2xl border border-line bg-elevated overflow-hidden hover:border-brand-orange/50 hover:shadow-glow-sm transition-all"
          >
            <div
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity"
              style={{ backgroundColor: p.color }}
            />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="h-11 w-11 rounded-xl border flex items-center justify-center"
                  style={{
                    backgroundColor: `${p.color}1a`,
                    borderColor: `${p.color}4d`,
                    color: p.color,
                  }}
                >
                  {i === 0 ? (
                    <Command size={20} strokeWidth={1.75} />
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

              <h3 className="text-2xl md:text-3xl font-bold text-cream mb-2 tracking-tight">
                {p.name}
              </h3>
              <p className="text-base text-cream/80 leading-relaxed mb-5">
                {p.oneLiner}
              </p>

              <ul className="space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-cream/75">
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
        className="mt-6 flex items-center justify-center gap-3 font-mono text-xs text-muted"
      >
        <span className="h-[1px] w-12 bg-line" />
        <span>
          stop asking <span className="text-cream/80">"where's the AI button?"</span> — start asking <span className="text-brand-amber">"what isn't the AI touching?"</span>
        </span>
        <span className="h-[1px] w-12 bg-line" />
      </motion.div>
    </SlideShell>
  );
}
