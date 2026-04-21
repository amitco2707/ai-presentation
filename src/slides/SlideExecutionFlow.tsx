import { motion } from "framer-motion";
import { CheckCircle2, ListTree, ShieldQuestion } from "lucide-react";
import SlideShell from "../components/SlideShell";
import SimulatedTerminal, { TerminalLine } from "../components/SimulatedTerminal";

interface Props {
  active: boolean;
}

// Three-phase simulation: analyze -> plan -> ask permission -> execute.
const SCRIPT: TerminalLine[] = [
  { type: "comment", text: "task: build a custom research agent", delay: 300 },
  {
    type: "input",
    text: 'claude code "create a specialized research agent for medical device documentation"',
    delay: 500,
  },
  { type: "blank" },

  // Phase 1 — Tool logic: analyze
  { type: "comment", text: "phase 1 · analyze", delay: 500 },
  { type: "output", text: "● scanning codebase structure", delay: 400 },
  { type: "output", text: "  ↳ src/agents/ (3 existing agents)", delay: 250 },
  { type: "output", text: "  ↳ package.json · tsconfig.json · .eslintrc", delay: 250 },
  { type: "output", text: "● identifying dependencies", delay: 400 },
  { type: "output", text: "  ↳ @anthropic-ai/sdk@0.40.1", delay: 250 },
  { type: "output", text: "  ↳ zod@3.23 · vitest@1.6 · tsx@4.15", delay: 250 },
  { type: "blank" },

  // Phase 2 — Plan
  { type: "comment", text: "phase 2 · generate execution plan", delay: 500 },
  { type: "output", text: "proposed changes:", delay: 400 },
  { type: "output", text: "  + src/agents/medical-research.ts   (new · 142 lines)", delay: 280 },
  { type: "output", text: "  + src/agents/prompts/medical.md    (new · 48 lines)", delay: 280 },
  { type: "output", text: "  + tests/medical-research.test.ts   (new · 8 tests)", delay: 280 },
  { type: "output", text: "  ~ src/agents/index.ts              (1 export added)", delay: 280 },
  { type: "blank" },

  // Phase 3 — Permission loop
  {
    type: "prompt",
    text: "I will create 3 files and modify 1 export. Do you want to proceed? [y/N]",
    delay: 500,
  },
  { type: "input", text: "y", delay: 1400 },
  { type: "blank" },

  // Phase 4 — Execute
  { type: "success", text: "writing src/agents/medical-research.ts", delay: 400 },
  { type: "success", text: "writing src/agents/prompts/medical.md", delay: 280 },
  { type: "success", text: "writing tests/medical-research.test.ts", delay: 280 },
  { type: "success", text: "patching src/agents/index.ts", delay: 280 },
  { type: "success", text: "vitest: 8/8 passing in 0.42s", delay: 400 },
  { type: "blank" },
  { type: "comment", text: "ready. invoke with:  claude --agent=medical-research", delay: 300 },
];

const PHASES = [
  {
    n: "01",
    icon: ListTree,
    label: "Analyze",
    body: "Reads the tree. Identifies dependencies. Builds a mental model.",
  },
  {
    n: "02",
    icon: ListTree,
    label: "Plan",
    body: "Lays out proposed file changes — additions, edits, deletions — before touching anything.",
  },
  {
    n: "03",
    icon: ShieldQuestion,
    label: "Ask",
    body: "Stops and asks for confirmation. No action without explicit user approval.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    label: "Execute",
    body: "Writes files, runs tests, verifies. Reports exactly what it did.",
  },
];

export default function SlideExecutionFlow({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 15 — Execution Flow"
      title={
        <>
          Claude Code: <span className="gradient-text">Real-World Execution Flow</span>
        </>
      }
      subtitle="Analyze → plan → ask → execute. The permission loop is the whole point — no surprise changes."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-8 items-start">
        {/* Left: phase breakdown */}
        <div className="space-y-4">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.n}
              initial={{ opacity: 0, x: -20 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.35 + i * 0.1, type: "spring", damping: 22, stiffness: 100 }}
              className="flex gap-4 p-4 rounded-xl border border-line/60 bg-elevated/40 hover:border-brand-orange/40 hover:bg-elevated/70 transition-all"
            >
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-amber">
                  <phase.icon size={18} strokeWidth={1.75} />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-muted">
                  {phase.n}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-cream mb-1 tracking-tight">
                  {phase.label}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{phase.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: the terminal */}
        <div className="relative">
          {/* Corner label */}
          <div className="absolute -top-6 right-0 font-mono text-[10px] uppercase tracking-widest text-muted">
            live · permission loop
          </div>
          <SimulatedTerminal
            script={SCRIPT}
            active={active}
            charSpeed={22}
            className="[&>div:last-child]:!max-h-[520px] [&>div:last-child]:!min-h-[480px]"
          />
        </div>
      </div>
    </SlideShell>
  );
}
