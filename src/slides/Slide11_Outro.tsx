import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import ClaudeRobot from "../components/ClaudeRobot";

interface Props {
  active: boolean;
}

export default function Slide11_Outro({ active }: Props) {
  return (
    <div className="slide-inner flex flex-col items-center justify-center text-center gap-10 relative">
      {/* Confetti-ish dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: i % 2 ? "#F0B27A" : "#D97757",
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={
              active
                ? {
                    opacity: [0, 1, 0],
                    y: [20, -40],
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
        transition={{ type: "spring", damping: 14, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-brand-orange/25 blur-3xl rounded-full scale-125" />
        <ClaudeRobot variant="thumbs-up" size={260} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6 }}
      >
        <div className="chip mb-5 mx-auto">
          <span className="h-1 w-1 rounded-full bg-brand-orange animate-pulse" />
          You made it
        </div>
        <h1 className="text-display font-black tracking-tighter leading-none text-cream">
          Welcome to the era
          <br />
          of <span className="gradient-text">AI</span>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
          You don't need to write code to understand what's happening.
          You just need the right map — and now you have one.
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2 }}
        onClick={() => {
          const el = document.querySelector<HTMLElement>('[data-slide-index="0"]');
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="btn-ghost"
      >
        <RotateCcw size={14} />
        Start over
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5 }}
        className="font-mono text-xs text-muted tracking-widest uppercase"
      >
        AI for Beginners · Zero → Hero
      </motion.div>
    </div>
  );
}
