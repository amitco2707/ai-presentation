import { motion } from "framer-motion";
import { Terminal, Monitor, Eye, Copy, Wrench, Users } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const COLUMNS = [
  {
    icon: Terminal,
    role: "The Mechanic",
    name: "Claude Code",
    tagline: "Engine room. Hands deep in the machine.",
    accent: "#c9c3ba",
    accentBg: "#2a2825",
    dimmed: true,
    points: [
      { icon: Wrench, text: "Lives in your terminal — reads files, runs commands, writes code" },
      { icon: Copy, text: "You provide context; it operates headlessly on your codebase" },
      { icon: Terminal, text: "Best for: developers building, refactoring, and shipping code" },
    ],
    footer: "Power tool — precision work, your environment, your rules",
  },
  {
    icon: Monitor,
    role: "The Co-Pilot",
    name: "Claude Desktop",
    tagline: "Sitting next to you. Watching. Ready.",
    accent: "#F0B27A",
    accentBg: "rgba(217,119,87,0.12)",
    dimmed: false,
    points: [
      { icon: Eye, text: "Sees your entire screen — Chrome tabs, emails, CRM, spreadsheets" },
      { icon: Users, text: "Works in real-time alongside you — no copy-paste, no switching tabs" },
      { icon: Monitor, text: "Best for: anyone automating daily tasks without touching code" },
    ],
    footer: "The co-pilot for everyone — not just developers",
  },
];

export default function SlideClaudeDesktopVsCode({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 18 — Two Ways to Use Claude"
      title={<>Same intelligence. <span className="gradient-text">Different cockpit.</span></>}
      subtitle="Claude Code and Claude Desktop solve different problems — pick the one that fits your workflow, or use both."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {COLUMNS.map((col, i) => (
          <motion.div
            key={col.name}
            initial={{ opacity: 0, y: 18 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ delay: 0.3 + i * 0.18, type: "spring", damping: 22 }}
            className="relative p-5 md:p-6 rounded-2xl border overflow-hidden flex flex-col gap-4"
            style={{
              borderColor: col.dimmed ? "#2a2825" : "rgba(217,119,87,0.5)",
              backgroundColor: "#141414",
              boxShadow: col.dimmed ? "none" : "0 0 30px -10px rgba(217,119,87,0.3)",
            }}
          >
            {!col.dimmed && (
              <div className="absolute -top-14 -right-14 h-36 w-36 rounded-full bg-brand-orange/20 blur-3xl" />
            )}

            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className="h-11 w-11 rounded-xl border flex items-center justify-center shrink-0"
                  style={{
                    borderColor: col.dimmed ? "#2a2825" : "rgba(217,119,87,0.4)",
                    backgroundColor: col.dimmed ? "#1c1c1c" : "rgba(217,119,87,0.1)",
                  }}
                >
                  <col.icon size={20} strokeWidth={1.75} style={{ color: col.accent }} />
                </div>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full border"
                  style={{
                    color: col.accent,
                    borderColor: col.dimmed ? "#2a2825" : "rgba(217,119,87,0.4)",
                    backgroundColor: col.accentBg,
                  }}
                >
                  {col.role}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "#ffffff" }}>
                {col.name}
              </h3>
              <p className="text-xs font-mono mb-4" style={{ color: col.accent }}>
                {col.tagline}
              </p>

              {/* Feature points */}
              <ul className="space-y-3">
                {col.points.map((pt, j) => (
                  <motion.li
                    key={pt.text}
                    initial={{ opacity: 0, x: col.dimmed ? -8 : 8 }}
                    animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: col.dimmed ? -8 : 8 }}
                    transition={{ delay: 0.5 + i * 0.18 + j * 0.1 }}
                    className="flex items-start gap-2.5"
                  >
                    <pt.icon
                      size={14}
                      strokeWidth={1.75}
                      className="shrink-0 mt-0.5"
                      style={{ color: col.accent }}
                    />
                    <span className="text-sm leading-snug" style={{ color: "#F4E4D0" }}>
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
              className="mt-auto pt-4 border-t font-mono text-[10px] leading-snug"
              style={{ borderColor: col.dimmed ? "#2a2825" : "rgba(217,119,87,0.2)", color: col.accent }}
            >
              {col.footer}
            </motion.div>
          </motion.div>
        ))}
      </div>

    </SlideShell>
  );
}
