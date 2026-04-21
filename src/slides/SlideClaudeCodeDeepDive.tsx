import { motion } from "framer-motion";
import { Bug, FolderTree, GitBranch, TerminalSquare } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const CAPS = [
  {
    icon: TerminalSquare,
    title: "Terminal-native",
    body: "Runs in your shell. Feels like a coworker who just pulled the repo.",
  },
  {
    icon: FolderTree,
    title: "Filesystem access",
    body: "Reads the whole tree. Edits files surgically. Keeps the mental model.",
  },
  {
    icon: GitBranch,
    title: "Git integration",
    body: "Branches, commits, pull requests — with messages that actually describe the change.",
  },
  {
    icon: Bug,
    title: "Autonomous debug",
    body: "Reproduces the bug, forms a hypothesis, writes a test, fixes it, verifies.",
  },
];

export default function SlideClaudeCodeDeepDive({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 12 — Keys to the machine"
      title={<>A pair-engineer with <span className="gradient-text">keys to the build.</span></>}
      subtitle="Not autocomplete. Not a chatbot in a sidebar. An agent with real access — to your files, your shell, and your pipeline."
    >
      <div className="space-y-6">
        {/* Mono-style callout line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.35 }}
          className="flex items-center gap-3 font-mono text-xs text-muted"
        >
          <span className="text-brand-orange">$</span>
          <span>the agentic CLI — lives in your terminal</span>
          <span className="h-[1px] flex-1 bg-line" />
          <span className="tracking-widest uppercase text-brand-amber/80">Capabilities</span>
        </motion.div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {CAPS.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.45 + i * 0.1, type: "spring", damping: 22, stiffness: 100 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl border border-line bg-elevated/60 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-brand-orange/50 hover:shadow-glow-sm"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  className="h-11 w-11 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-amber mb-4"
                >
                  <cap.icon size={20} strokeWidth={1.75} />
                </motion.div>

                <h3 className="text-xl font-bold text-cream mb-2 tracking-tight leading-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1 group-hover:text-cream/80 transition-colors duration-300">
                  {cap.body}
                </p>

                <div className="pt-4 mt-4 border-t border-line/60 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    cap · 0{i + 1}
                  </span>
                  <motion.span
                    className="h-1 rounded-full bg-brand-orange/60"
                    initial={{ width: 8 }}
                    animate={active ? { width: 24 } : { width: 8 }}
                    transition={{ delay: 0.55 + i * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
