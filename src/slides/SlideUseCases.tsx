import { motion } from "framer-motion";
import {
  Code2,
  Grid3x3,
  MessageSquare,
  PenLine,
  Search,
  Zap,
} from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const CASES = [
  {
    icon: Code2,
    role: "ENGINEER",
    title: "Coding",
    body: "Scaffold, refactor, debug, migrate. Ship whole features from a sentence.",
  },
  {
    icon: Search,
    role: "ANALYST",
    title: "Research",
    body: "Distill papers, synthesize sources, spot what matters across hundreds of docs.",
  },
  {
    icon: Grid3x3,
    role: "DATA",
    title: "Data Analysis",
    body: "Query, chart, explain. Turn a messy CSV into a clean answer in seconds.",
  },
  {
    icon: Zap,
    role: "OPS",
    title: "Automation",
    body: "Agents that rebook flights, triage inboxes, open tickets — on their own.",
  },
  {
    icon: PenLine,
    role: "WRITER",
    title: "Content",
    body: "Drafts, edits, translations, voice matching — at whatever volume you need.",
  },
  {
    icon: MessageSquare,
    role: "PRODUCT",
    title: "Conversation",
    body: "Tutoring, support, interviews — stateful and context-aware, not scripted.",
  },
];

export default function SlideUseCases({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 08 — In the wild"
      title={<>Where it <span className="gradient-text">already lives</span>.</>}
      subtitle="Six of thousands. Agents are already doing the job across every function — not as demos, as production tools."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 relative">
        <div className="absolute -top-4 right-0 font-mono text-[10px] tracking-widest text-muted hidden lg:block">
          6 OF THOUSANDS
        </div>

        {CASES.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 + i * 0.08, type: "spring", damping: 22, stiffness: 100 }}
            whileHover={{ y: -6 }}
            className="group relative p-6 rounded-2xl border border-line bg-elevated/60 backdrop-blur-xl overflow-hidden cursor-default transition-all duration-500 hover:border-brand-orange/50 hover:shadow-glow-sm"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-5">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                  className="h-11 w-11 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-amber"
                >
                  <c.icon size={20} strokeWidth={1.75} />
                </motion.div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  {c.role}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-cream mb-2 tracking-tight">
                {c.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1 group-hover:text-cream/80 transition-colors duration-300">
                {c.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
