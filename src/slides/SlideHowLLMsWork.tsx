import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const PROMPT = ["The", "quick", "brown", "fox", "jumps", "over", "the"];

const PREDICTIONS = [
  { word: "lazy",     pct: 92, color: "#F0B27A" },
  { word: "sleeping", pct: 5,  color: "#D97757" },
  { word: "red",      pct: 3,  color: "#8a8580" },
];

export default function SlideHowLLMsWork({ active }: Props) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!active) { setRevealed(false); return; }
    const t = setTimeout(() => setRevealed(true), 2400);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 08 — How LLMs Work"
      title={<>Not thinking. <span className="gradient-text">Predicting.</span></>}
      subtitle="An LLM is a probabilistic model — it doesn't reason like a person. It calculates which word is most likely to come next, over and over again."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">

        {/* Left: Next Token Prediction visual */}
        <div>
          <p
            className="font-mono text-[10px] uppercase tracking-widest mb-4"
            style={{ color: "#F0B27A" }}
          >
            Next Token Prediction
          </p>

          {/* Sentence tokens */}
          <div className="flex flex-wrap gap-2 mb-6">
            {PROMPT.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 10 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.4 + i * 0.12, type: "spring", damping: 20 }}
                className="px-3 py-1.5 rounded-lg border font-mono text-sm font-semibold"
                style={{
                  borderColor: "#2a2825",
                  backgroundColor: "#141414",
                  color: "#ffffff",
                }}
              >
                {word}
              </motion.span>
            ))}

            {/* Blinking cursor / blank token */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.35 }}
              className="px-3 py-1.5 rounded-lg border font-mono text-sm font-semibold"
              style={{
                borderColor: "#D97757",
                backgroundColor: "rgba(217,119,87,0.1)",
                color: "#D97757",
                minWidth: "3.5rem",
                textAlign: "center",
              }}
            >
              <AnimatePresence mode="wait">
                {revealed ? (
                  <motion.span
                    key="word"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: "#F0B27A" }}
                  >
                    lazy
                  </motion.span>
                ) : (
                  <motion.span
                    key="cursor"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                    style={{ color: "#D97757" }}
                  >
                    _
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.span>
          </div>

          {/* Probability bars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5 }}
            className="rounded-xl border p-4 md:p-5 space-y-3"
            style={{ borderColor: "#2a2825", backgroundColor: "#141414" }}
          >
            <p
              className="font-mono text-[10px] uppercase tracking-widest mb-3"
              style={{ color: "#c9c3ba" }}
            >
              Model output — probability distribution
            </p>
            {PREDICTIONS.map((p, i) => (
              <div key={p.word} className="flex items-center gap-3">
                <span
                  className="font-mono text-sm w-20 text-right shrink-0"
                  style={{ color: "#f1f5f9" }}
                >
                  {p.word}
                </span>
                <div
                  className="flex-1 h-5 rounded-full overflow-hidden"
                  style={{ backgroundColor: "#1c1c1c" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                    initial={{ width: 0 }}
                    animate={active ? { width: `${p.pct}%` } : { width: 0 }}
                    transition={{ delay: 1.7 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                  />
                </div>
                <span
                  className="font-mono text-sm w-12 shrink-0 font-bold"
                  style={{ color: p.color }}
                >
                  {p.pct}%
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: key concepts */}
        <div className="space-y-4">
          {[
            {
              n: "01",
              title: "Statistical patterns",
              body: "During training, the model reads trillions of words and learns which words tend to follow which. It encodes those patterns as billions of weights.",
            },
            {
              n: "02",
              title: "Not understanding",
              body: "There is no comprehension happening. The model never 'reads' a sentence the way you do — it calculates the most probable continuation.",
            },
            {
              n: "03",
              title: "Stacked predictions",
              body: "A full response is thousands of these predictions chained together. The output feels fluent because the patterns are so dense — not because the model is conscious.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, x: 24 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
              transition={{ delay: 0.5 + i * 0.15, type: "spring", damping: 22 }}
              className="flex gap-4 p-4 rounded-xl border"
              style={{ borderColor: "#2a2825", backgroundColor: "#141414" }}
            >
              <span
                className="font-mono text-[11px] tracking-widest shrink-0 pt-0.5"
                style={{ color: "#F0B27A" }}
              >
                {item.n}
              </span>
              <div>
                <h4
                  className="font-bold text-base tracking-tight mb-1"
                  style={{ color: "#ffffff" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#f1f5f9" }}
                >
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.3 }}
            className="p-4 rounded-xl border"
            style={{
              borderColor: "rgba(217,119,87,0.4)",
              backgroundColor: "rgba(217,119,87,0.07)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#f1f5f9" }}>
              <span style={{ color: "#F0B27A", fontWeight: 600 }}>
                The implication —{" "}
              </span>
              LLMs can be confidently wrong. They don't know what they don't know.
              That's why human direction and context always matter.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
