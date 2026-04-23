import { motion } from "framer-motion";
import { FileText, BarChart3, Layers, Globe, Mail, Repeat2 } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const INTEGRATIONS = [
  { icon: FileText, label: "Word", sub: "Draft, rewrite & summarise documents" },
  { icon: BarChart3, label: "Excel", sub: "Analyse data, write formulas, spot trends" },
  { icon: Layers, label: "PowerPoint", sub: "Generate decks from a single prompt" },
  { icon: Globe, label: "Chrome", sub: "Read pages, fill forms, research in-tab" },
  { icon: Mail, label: "Email", sub: "Triage, reply and summarise threads" },
  { icon: Repeat2, label: "Workflows", sub: "Chain tasks end-to-end, no code needed" },
];

export default function SlideClaudeEverywhere({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 17 — Claude is Everywhere"
      title={<>No longer <span className="gradient-text">trapped in a tab.</span></>}
      subtitle="Claude now lives inside the tools you already use every day — no developer required. Repetitive work that used to take an hour can be automated in seconds."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-5 items-start">

        {/* Left: integration grid */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "#F0B27A" }}>
            Native integrations — no-code
          </p>
          <div className="grid grid-cols-2 gap-3">
            {INTEGRATIONS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", damping: 22 }}
                className="flex items-start gap-3 p-3.5 rounded-xl border border-[#2a2825] bg-[#141414]"
              >
                <div className="shrink-0 h-9 w-9 rounded-lg bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center">
                  <item.icon size={16} className="text-brand-amber" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream leading-tight">{item.label}</p>
                  <p className="text-xs text-muted mt-0.5 leading-snug">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: key message cards */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, type: "spring", damping: 22 }}
            className="relative p-5 rounded-xl border overflow-hidden"
            style={{ borderColor: "rgba(217,119,87,0.45)", backgroundColor: "rgba(217,119,87,0.07)" }}
          >
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-orange/20 blur-3xl" />
            <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "#F0B27A" }}>
              the no-code shift
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#f1f5f9" }}>
              You don't need to write a single line of code. Open Claude inside Excel, describe what you need in plain English, and it analyses your data, writes the formula, and explains the result — right there.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.55, type: "spring", damping: 22 }}
            className="p-5 rounded-xl border border-[#2a2825] bg-[#141414]"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "#c9c3ba" }}>
              example — morning routine
            </p>
            <ol className="space-y-2">
              {[
                "Claude reads your inbox and flags what needs a reply",
                "It drafts responses in your tone — you approve in one click",
                "Exports a summary into your weekly report in Word",
              ].map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0 }}
                  animate={active ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.75 + i * 0.12 }}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: "#f1f5f9" }}
                >
                  <span
                    className="shrink-0 mt-0.5 h-5 w-5 rounded-full border flex items-center justify-center font-mono text-[10px] font-bold"
                    style={{ borderColor: "#D97757", color: "#F0B27A", backgroundColor: "rgba(217,119,87,0.1)" }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </motion.li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
            className="flex items-center gap-3 font-mono text-[10px]"
            style={{ color: "#c9c3ba" }}
          >
            <span className="h-[1px] w-6 bg-[#2a2825] shrink-0" />
            <span>
              the bottleneck is no longer{" "}
              <span style={{ color: "#ffffff" }}>skill</span>
              {" "}— it's{" "}
              <span style={{ color: "#F0B27A" }}>knowing what to ask</span>
            </span>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
