import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Zap } from "lucide-react";
import SlideShell from "../components/SlideShell";
import SimulatedTerminal, { TerminalLine } from "../components/SimulatedTerminal";
import ClaudeRobot from "../components/ClaudeRobot";

interface Props {
  active: boolean;
}

const SCRIPT: TerminalLine[] = [
  { type: "comment", text: "ask Claude Code to ship a fix", delay: 400 },
  { type: "input", text: 'claude "refactor the auth module to use JWT"', delay: 500 },
  { type: "blank" },
  { type: "output", text: "● Reading src/auth/*.ts (4 files)", delay: 600 },
  { type: "output", text: "● Found legacy session handler in auth/session.ts", delay: 400 },
  { type: "output", text: "● Writing new JWT middleware…", delay: 400 },
  { type: "output", text: "● Updating 7 call sites", delay: 400 },
  { type: "output", text: "● Running test suite", delay: 400 },
  { type: "blank" },
  { type: "success", text: "24 tests passed", delay: 300 },
  { type: "success", text: "Diff: +182 / −96 across 6 files", delay: 300 },
  { type: "success", text: "Branch pushed · PR #482 opened", delay: 300 },
];

const FACTS = [
  {
    icon: TerminalIcon,
    title: "Lives in the terminal",
    body: "Right next to the tools developers already use every day.",
  },
  {
    icon: Zap,
    title: "Reads, writes, runs",
    body: "Opens files, edits code, executes commands — with permission.",
  },
];

export default function Slide08_ClaudeCode({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 07 — Meet Claude Code"
      title={<>The agent that <span className="gradient-text">gets things done.</span></>}
      subtitle="A terminal-based teammate that works inside the developer's own environment."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        {/* Left: copy + robot */}
        <div className="space-y-8">
          <div className="space-y-5">
            {FACTS.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="flex gap-4"
              >
                <div className="shrink-0 h-11 w-11 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center">
                  <f.icon size={18} className="text-brand-amber" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cream mb-1">{f.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="flex items-end gap-4"
          >
            <ClaudeRobot variant="code" size={160} />
            <div className="mb-4 rounded-xl bg-panel border border-line px-4 py-3 text-sm text-cream/85 relative">
              <div className="absolute -left-2 bottom-4 w-3 h-3 bg-panel border-l border-b border-line rotate-45" />
              "On it — reading your files now."
            </div>
          </motion.div>
        </div>

        {/* Right: simulated terminal */}
        <SimulatedTerminal script={SCRIPT} active={active} />
      </div>
    </SlideShell>
  );
}
