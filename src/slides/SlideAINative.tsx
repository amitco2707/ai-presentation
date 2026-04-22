import { motion } from "framer-motion";
import { Code2, Orbit, Terminal } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const COMPARISON = [
  {
    icon: Terminal,
    label: "External agent (CLI)",
    example: "Claude Code",
    points: [
      "Lives in the terminal — outside the editor",
      "You paste context, copy results manually",
      "Powerful, but the AI is a guest in your workflow",
    ],
    dimmed: true,
  },
  {
    icon: Code2,
    label: "AI-Native IDE",
    example: "Cursor · Google Antigravity",
    points: [
      "The AI lives inside the editor itself",
      "Sees the entire codebase natively — indexed in real-time",
      "Edits files, runs tests, reviews diffs without leaving the IDE",
    ],
    dimmed: false,
  },
];


export default function SlideAINative({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 17 — AI-Native"
      title={<>The AI doesn't live next door. <span className="gradient-text">It lives inside.</span></>}
      subtitle="AI-Native Workspaces move beyond external tools and plugins. The entire IDE is built from the ground up around the agent's ability to see, index, and edit your codebase in real-time."
    >
      {/* CLI vs AI-Native comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5">
        {COMPARISON.map((col, i) => (
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 16 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.3 + i * 0.15, type: "spring", damping: 22 }}
            className={`relative p-4 md:p-5 rounded-xl border overflow-hidden ${
              col.dimmed
                ? "border-[#2a2825] bg-[#141414]"
                : "border-brand-orange/50 bg-[#141414] shadow-glow-sm"
            }`}
          >
            {!col.dimmed && (
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-orange/20 blur-2xl" />
            )}
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest"
                  style={{ color: col.dimmed ? "#c9c3ba" : "#F0B27A" }}
                >
                  <col.icon size={14} strokeWidth={1.75} />
                  {col.label}
                </div>
                <span
                  className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                  style={
                    col.dimmed
                      ? { color: "#c9c3ba", borderColor: "#2a2825" }
                      : { color: "#F0B27A", borderColor: "#D97757", backgroundColor: "rgba(217,119,87,0.1)" }
                  }
                >
                  {col.example}
                </span>
              </div>
              <ul className="space-y-2">
                {col.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm" style={{ color: "#f1f5f9" }}>
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: col.dimmed ? "#c9c3ba" : "#F0B27A" }}
                    />
                    {pt}
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
        transition={{ delay: 1.1 }}
        className="mt-4 flex items-center justify-center gap-3 font-mono text-xs"
        style={{ color: "#c9c3ba" }}
      >
        <span className="h-[1px] w-12 bg-[#2a2825]" />
        <span>
          stop asking{" "}
          <span style={{ color: "#ffffff" }}>"where's the AI button?"</span>
          {" "}— start asking{" "}
          <span style={{ color: "#F0B27A" }}>"what isn't the AI touching?"</span>
        </span>
        <span className="h-[1px] w-12 bg-[#2a2825]" />
      </motion.div>
    </SlideShell>
  );
}
