import { motion } from "framer-motion";
import { Brain, Cpu } from "lucide-react";
import SlideShell from "../components/SlideShell";
import ClaudeRobot from "../components/ClaudeRobot";

interface Props {
  active: boolean;
}

const CARDS = [
  {
    icon: Cpu,
    eyebrow: "AI",
    title: "Artificial Intelligence",
    tagline: "Computers doing things that normally need human thinking.",
    bullets: [
      "Understands language",
      "Recognizes images",
      "Makes decisions",
    ],
  },
  {
    icon: Brain,
    eyebrow: "ML",
    title: "Machine Learning",
    tagline: "Computers learning from experience — they get better the more data they see.",
    bullets: [
      "Learns from examples",
      "Finds patterns on its own",
      "Improves over time",
    ],
  },
];

export default function Slide02_Basics({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 01 — The Basics"
      title={<>Start here. <span className="gradient-text">Two simple ideas.</span></>}
      subtitle="Everything you'll hear about AI builds on these two words. Let's make them stick."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.eyebrow}
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 + i * 0.15, type: "spring", damping: 20 }}
            className="relative p-8 rounded-2xl border border-line bg-elevated/60 backdrop-blur-xl shadow-card overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-40 w-40 bg-brand-orange/10 blur-3xl rounded-full" />

            <div className="flex items-center justify-between mb-6 relative">
              <div className="h-14 w-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center">
                <card.icon className="text-brand-amber" size={26} strokeWidth={1.75} />
              </div>
              <span className="font-mono text-6xl font-black text-line">
                {card.eyebrow}
              </span>
            </div>

            <h3 className="text-3xl font-bold tracking-tight mb-3">{card.title}</h3>
            <p className="text-lg text-cream/75 leading-relaxed mb-6">{card.tagline}</p>

            <ul className="space-y-2.5">
              {card.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-muted">
                  <span className="h-1 w-1 rounded-full bg-brand-orange" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Floating robot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1 }}
          className="absolute -bottom-10 right-0 hidden xl:block pointer-events-none"
        >
          <ClaudeRobot variant="point" size={180} />
        </motion.div>
      </div>
    </SlideShell>
  );
}
