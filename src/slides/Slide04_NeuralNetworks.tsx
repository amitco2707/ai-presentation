import { motion } from "framer-motion";
import SlideShell from "../components/SlideShell";
import NeuralNetGraph from "../components/NeuralNetGraph";

interface Props {
  active: boolean;
}

const POINTS = [
  {
    title: "Inspired by the brain",
    body: "Nodes act like neurons. Connections carry signals between them.",
  },
  {
    title: "Layers pass information forward",
    body: "Raw input enters, gets transformed layer by layer, and an answer comes out.",
  },
  {
    title: "Built for messy patterns",
    body: "Great at images, speech, and text — things that don't follow simple rules.",
  },
];

export default function Slide04_NeuralNetworks({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 05 — Under the hood"
      title={<>How does it <span className="gradient-text">actually think?</span></>}
      subtitle="The engine behind modern AI is the Neural Network. Here's what it looks like."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
        <div className="space-y-5">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -30 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.5 + i * 0.15, type: "spring", damping: 22 }}
              className="flex gap-4"
            >
              <div className="shrink-0 h-10 w-10 rounded-full border border-brand-orange/40 bg-brand-orange/10 flex items-center justify-center font-mono text-sm text-brand-amber">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-cream mb-1 tracking-tight">
                  {p.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative p-6 rounded-2xl border border-line bg-elevated/40 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-radial-fade opacity-60 rounded-2xl pointer-events-none" />
          <NeuralNetGraph active={active} />
        </motion.div>
      </div>
    </SlideShell>
  );
}
