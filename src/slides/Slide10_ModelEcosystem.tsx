import { motion } from "framer-motion";
import { BookText, TerminalSquare, Users2 } from "lucide-react";
import SlideShell from "../components/SlideShell";
import ClaudeRobot, { RobotVariant } from "../components/ClaudeRobot";

interface Props {
  active: boolean;
}

const MODELS: {
  icon: typeof BookText;
  eyebrow: string;
  title: string;
  role: string;
  robot: RobotVariant;
  bestFor: string[];
}[] = [
  {
    icon: BookText,
    eyebrow: "LLM",
    title: "The Knowledge Base",
    role: "Knows a lot. Explains well. Answers questions.",
    robot: "think",
    bestFor: [
      "Research & summaries",
      "Writing & rewriting",
      "Brainstorming ideas",
    ],
  },
  {
    icon: TerminalSquare,
    eyebrow: "Claude Code",
    title: "The Technical Executor",
    role: "Works in your code. Ships real changes.",
    robot: "code",
    bestFor: [
      "Writing & refactoring code",
      "Running tests & commands",
      "Automating dev tasks",
    ],
  },
  {
    icon: Users2,
    eyebrow: "Cowork",
    title: "The Collaborative Partner",
    role: "Works alongside you — not just for you.",
    robot: "point",
    bestFor: [
      "Working through problems together",
      "Long-running projects",
      "Teams and shared tasks",
    ],
  },
];

export default function Slide10_ModelEcosystem({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 14 — The ecosystem"
      title={<>Three models. <span className="gradient-text">Three jobs.</span></>}
      subtitle="Each one is built for a different kind of work. Pick the right one for the task."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {MODELS.map((m, i) => (
          <motion.div
            key={m.eyebrow}
            initial={{ opacity: 0, y: 40 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.35 + i * 0.13, type: "spring", damping: 20 }}
            className="relative p-7 rounded-2xl border border-line bg-gradient-to-b from-elevated/70 to-elevated/30 backdrop-blur-xl overflow-hidden group hover:border-brand-orange/40 transition-all duration-500"
          >
            {/* Robot avatar */}
            <div className="flex justify-center mb-4 -mt-2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-orange/15 blur-2xl rounded-full scale-90" />
                <ClaudeRobot variant={m.robot} size={130} still />
              </div>
            </div>

            <div className="text-center mb-5">
              <div className="chip mx-auto mb-3">
                <m.icon size={10} />
                {m.eyebrow}
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">{m.title}</h3>
              <p className="text-sm text-muted italic leading-snug">{m.role}</p>
            </div>

            <div className="pt-4 border-t border-line">
              <div className="text-[10px] font-mono uppercase tracking-widest text-brand-amber/80 mb-3">
                Best for
              </div>
              <ul className="space-y-2">
                {m.bestFor.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -5 }}
                    animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                    transition={{ delay: 0.8 + i * 0.13 + j * 0.07 }}
                    className="flex items-start gap-2 text-sm text-cream/80"
                  >
                    <span className="shrink-0 mt-1.5 h-1 w-1 rounded-full bg-brand-orange" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
