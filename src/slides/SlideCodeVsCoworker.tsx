import { motion } from "framer-motion";
import { TerminalSquare, Users2 } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const ROWS: { dim: string; code: string; coworker: string }[] = [
  { dim: "Interface", code: "CLI · terminal-native", coworker: "apps · Slack, Docs, browser" },
  { dim: "User", code: "engineers", coworker: "cross-functional teams" },
  { dim: "Scope", code: "codebase & shell", coworker: "documents, meetings, tasks" },
  { dim: "Superpower", code: "ships features end-to-end", coworker: "keeps workstreams moving" },
  { dim: "Output", code: "commits · PRs · test runs", coworker: "drafts · decisions · follow-ups" },
  { dim: "Best for", code: "autonomous debug & build", coworker: "collaborative planning & writing" },
];

const CODE_COLOR = "#F0B27A";
const COWORKER_COLOR = "#34D399";

export default function SlideCodeVsCoworker({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 12 — Same ancestry, different rooms"
      title={
        <>
          Claude Code <span className="text-muted font-light px-2">·</span>{" "}
          <span className="gradient-text">Claude Coworker</span>
        </>
      }
      subtitle="CLI-driven technical power vs UI-driven collaborative task management. Same brain, different surface."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="rounded-2xl border border-line bg-elevated/50 backdrop-blur-xl overflow-hidden"
      >
        {/* Table header */}
        <div className="grid grid-cols-[140px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] border-b border-line">
          <div className="px-5 py-4 font-mono text-[10px] uppercase tracking-widest text-muted">
            Dimension
          </div>
          <div className="px-5 py-4 flex items-center gap-2 border-l border-line">
            <TerminalSquare size={14} style={{ color: CODE_COLOR }} />
            <span
              className="font-mono text-[11px] uppercase tracking-widest font-semibold"
              style={{ color: CODE_COLOR }}
            >
              Claude Code
            </span>
          </div>
          <div className="px-5 py-4 flex items-center gap-2 border-l border-line">
            <Users2 size={14} style={{ color: COWORKER_COLOR }} />
            <span
              className="font-mono text-[11px] uppercase tracking-widest font-semibold"
              style={{ color: COWORKER_COLOR }}
            >
              Claude Coworker
            </span>
          </div>
        </div>

        {/* Rows */}
        {ROWS.map((row, i) => (
          <motion.div
            key={row.dim}
            initial={{ opacity: 0, x: -20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.45 + i * 0.08, type: "spring", damping: 22, stiffness: 100 }}
            className={`grid grid-cols-[140px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] ${
              i < ROWS.length - 1 ? "border-b border-line/60" : ""
            } hover:bg-brand-orange/[0.02] transition-colors`}
          >
            <div className="px-5 py-4 md:py-5 font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted flex items-center">
              {row.dim}
            </div>
            <div className="px-5 py-4 md:py-5 border-l border-line text-sm md:text-base text-cream font-medium">
              {row.code}
            </div>
            <div className="px-5 py-4 md:py-5 border-l border-line text-sm md:text-base text-cream font-medium">
              {row.coworker}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-6 flex items-center justify-center gap-3 font-mono text-xs text-muted"
      >
        <span className="h-[1px] w-10 bg-line" />
        <span>pick the surface that matches the job</span>
        <span className="h-[1px] w-10 bg-line" />
      </motion.div>
    </SlideShell>
  );
}
