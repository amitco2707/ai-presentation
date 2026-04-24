import { motion } from "framer-motion";
import { MessageSquare, Bot, Code2, Calendar, Zap, FileText, Users } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const MODES = [
  {
    icon: MessageSquare,
    badge: "01 — Chat",
    name: "Chat",
    tagline: "Ask anything, get an answer.",
    accent: "#c9c3ba",
    accentBg: "#2a2825",
    dimmed: true,
    glowColor: null as string | null,
    points: [
      { icon: MessageSquare, text: "Same as claude.ai, native on your desktop" },
      { icon: FileText, text: "Remembers context across conversations with Projects" },
      { icon: Users, text: "Best for: everyday questions, writing, and research" },
    ],
    footer: "The familiar starting point — conversation-first",
  },
  {
    icon: Bot,
    badge: "02 — Cowork",
    name: "Cowork",
    tagline: "Give it a goal. Get back a finished deliverable.",
    accent: "#F0B27A",
    accentBg: "rgba(217,119,87,0.12)",
    dimmed: false,
    glowColor: "rgba(217,119,87,0.3)" as string | null,
    points: [
      { icon: Bot, text: "Works through your files and apps autonomously, step by step" },
      { icon: Calendar, text: "Schedule tasks to run automatically — morning triage, weekly reports, overnight research" },
      { icon: Zap, text: "Best for: high-effort, repetitive work you want off your plate" },
    ],
    footer: "Outcome-focused — not prompt by prompt, goal by goal",
  },
  {
    icon: Code2,
    badge: "03 — Code",
    name: "Code",
    tagline: "Describe what to build. Claude handles the rest.",
    accent: "#B8623A",
    accentBg: "rgba(184,98,58,0.12)",
    dimmed: false,
    glowColor: "rgba(184,98,58,0.25)" as string | null,
    points: [
      { icon: Code2, text: "Write to Claude like a chat — it writes and runs code in the background" },
      { icon: FileText, text: "No terminal, no IDE — just describe the outcome you want" },
      { icon: Zap, text: "Best for: building and automating without ever opening a terminal" },
    ],
    footer: "Claude Code's power, through a conversation window",
  },
];

export default function SlideClaudeDesktopVsCode({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 18 — The Claude Desktop App"
      title={<>One app. <span className="gradient-text">Three levels of power.</span></>}
      subtitle="The add-ins put Claude inside one app at a time. The desktop app is a full AI workspace — from quick conversations to autonomous scheduled work to code, without ever opening a terminal."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {MODES.map((col, i) => (
          <motion.div
            key={col.name}
            initial={{ opacity: 0, y: 18 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ delay: 0.3 + i * 0.18, type: "spring", damping: 22 }}
            className="relative p-4 md:p-5 rounded-2xl border overflow-hidden flex flex-col gap-3"
            style={{
              borderColor: col.dimmed ? "#2a2825" : `${col.accent}80`,
              backgroundColor: "#141414",
              boxShadow: col.glowColor ? `0 0 30px -10px ${col.glowColor}` : "none",
            }}
          >
            {!col.dimmed && (
              <div
                className="absolute -top-14 -right-14 h-36 w-36 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: col.accent }}
              />
            )}

            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className="h-10 w-10 rounded-xl border flex items-center justify-center shrink-0"
                  style={{
                    borderColor: col.dimmed ? "#2a2825" : `${col.accent}66`,
                    backgroundColor: col.dimmed ? "#1c1c1c" : col.accentBg,
                  }}
                >
                  <col.icon size={18} strokeWidth={1.75} style={{ color: col.accent }} />
                </div>
                <span
                  className="font-mono text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full border"
                  style={{
                    color: col.accent,
                    borderColor: col.dimmed ? "#2a2825" : `${col.accent}66`,
                    backgroundColor: col.accentBg,
                  }}
                >
                  {col.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-1" style={{ color: "#ffffff" }}>
                {col.name}
              </h3>
              <p className="text-xs font-mono mb-3" style={{ color: col.accent }}>
                {col.tagline}
              </p>

              {/* Feature points */}
              <ul className="space-y-2.5">
                {col.points.map((pt, j) => (
                  <motion.li
                    key={pt.text}
                    initial={{ opacity: 0, x: i === 0 ? -8 : i === 2 ? 8 : 0 }}
                    animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: i === 0 ? -8 : i === 2 ? 8 : 0 }}
                    transition={{ delay: 0.5 + i * 0.18 + j * 0.1 }}
                    className="flex items-start gap-2.5"
                  >
                    <pt.icon
                      size={13}
                      strokeWidth={1.75}
                      className="shrink-0 mt-0.5"
                      style={{ color: col.accent }}
                    />
                    <span className="text-xs leading-snug" style={{ color: "#F4E4D0" }}>
                      {pt.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="mt-auto pt-3 border-t font-mono text-[9px] leading-snug"
              style={{ borderColor: col.dimmed ? "#2a2825" : `${col.accent}33`, color: col.accent }}
            >
              {col.footer}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
