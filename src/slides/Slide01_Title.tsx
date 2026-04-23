import { motion } from "framer-motion";
import ClaudeRobot from "../components/ClaudeRobot";

interface Props {
  active: boolean;
}

export default function Slide01_Title({ active }: Props) {
  return (
    <div className="slide-inner flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
      {/* Particle field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-orange/40"
            initial={{
              x: Math.random() * 1400,
              y: Math.random() * 900,
              opacity: 0,
            }}
            animate={
              active
                ? {
                    y: [null, Math.random() * -300 - 100],
                    opacity: [0, 0.8, 0],
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="flex-1 relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="chip mb-6"
        >
          <span className="h-1 w-1 rounded-full bg-brand-orange animate-pulse" />
          A beginner's briefing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.4, type: "spring", damping: 20, stiffness: 90 }}
          className="text-display-xl font-black tracking-tight leading-none pr-12"
        >
          AI for
          <br />
          <span className="gradient-text">Beginners</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-2xl md:text-3xl font-light text-cream/70 tracking-tight"
        >
          From <span className="text-brand-amber font-medium">Zero</span> to{" "}
          <span className="text-brand-amber font-medium">Hero</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 1.3 }}
          className="mt-10 flex items-center gap-5 text-sm text-cream/75"
        >
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-amber to-brand-rust flex items-center justify-center font-mono text-xs text-base font-bold">
              22
            </span>
            <span>slides</span>
          </div>
          <span className="text-line">·</span>
          <span>No technical background required</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
        transition={{ delay: 0.6, type: "spring", damping: 14 }}
        className="relative z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-brand-orange/20 blur-3xl rounded-full scale-125" />
          <ClaudeRobot variant="wave" size={320} />
        </div>
      </motion.div>
    </div>
  );
}
