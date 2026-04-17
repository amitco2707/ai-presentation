import { motion } from "framer-motion";
import { Blocks, Sparkles, Users } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const CAPS = [
  {
    icon: Sparkles,
    eyebrow: "Skills",
    title: "Pre-defined actions",
    body: "Packaged know-how the agent can call on. Like ready-made playbooks for specific jobs.",
    examples: ["Code review", "PDF editing", "Data analysis"],
    color: "#D97757",
  },
  {
    icon: Users,
    eyebrow: "Multi-agent",
    title: "Workflows together",
    body: "Several agents split a job. One plans, another writes, another reviews — then they hand off.",
    examples: ["Planner", "Writer", "Reviewer"],
    color: "#E89464",
  },
  {
    icon: Blocks,
    eyebrow: "Plugins",
    title: "Extends the agent",
    body: "Connect new tools, services, and data sources. The agent grows with your stack.",
    examples: ["GitHub", "Slack", "Your APIs"],
    color: "#F0B27A",
  },
];

export default function Slide09_Capabilities({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 08 — What it can do"
      title={<>Three ways it <span className="gradient-text">scales up.</span></>}
      subtitle="Skills, multi-agent workflows, and plugins turn one assistant into a whole team."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CAPS.map((cap, i) => (
          <motion.div
            key={cap.eyebrow}
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.35 + i * 0.12, type: "spring", damping: 22 }}
            whileHover={{ y: -6 }}
            className="group relative p-7 rounded-2xl border border-line bg-elevated/50 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-brand-orange/50 hover:shadow-glow-sm"
          >
            {/* Edge glow */}
            <div
              className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundColor: cap.color }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  className="h-12 w-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${cap.color}15`,
                    border: `1px solid ${cap.color}40`,
                  }}
                >
                  <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.75} />
                </motion.div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  0{i + 1}
                </span>
              </div>

              <div className="chip mb-3" style={{ color: cap.color, borderColor: `${cap.color}40`, backgroundColor: `${cap.color}10` }}>
                {cap.eyebrow}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">{cap.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{cap.body}</p>

              <div className="pt-5 border-t border-line space-y-2">
                {cap.examples.map((ex, j) => (
                  <motion.div
                    key={ex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.8 + i * 0.12 + j * 0.08 }}
                    className="flex items-center gap-2 text-xs font-mono text-cream/70"
                  >
                    <span className="h-1 w-3" style={{ backgroundColor: cap.color }} />
                    {ex}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
