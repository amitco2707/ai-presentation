import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const PROMPT = ["The", "cat", "jumped", "over", "the"];

const PREDICTIONS = [
  { word: "fence", pct: 85, color: "#F0B27A" },
  { word: "wall",  pct: 10, color: "#D97757" },
  { word: "moon",  pct: 5,  color: "#8a8a8a" },
];

const RIGHT_CARDS = [
  {
    n: "01",
    title: "Statistical patterns",
    body: "The model reads trillions of words during training and encodes which words tend to follow which — as billions of numerical weights.",
  },
  {
    n: "02",
    title: "No comprehension",
    body: "There is no reasoning or understanding happening. The model calculates the most probable continuation — it never 'reads' the sentence the way you do.",
  },
];

export default function SlideHowLLMsWork({ active }: Props) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!active) { setRevealed(false); return; }
    const t = setTimeout(() => setRevealed(true), 2000);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 08 — How LLMs Work"
      title={<>Not thinking. <span className="gradient-text">Predicting.</span></>}
      subtitle="An LLM is a probabilistic model — it calculates which word is statistically most likely to come next, over and over, billions of times."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 items-start">

        {/* ── Left column ── */}
        <div className="flex flex-col gap-4">

          {/* Token strip */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "#F0B27A" }}>
              Next Token Prediction
            </p>
            <div className="flex flex-wrap gap-2">
              {PROMPT.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ delay: 0.35 + i * 0.1, type: "spring", damping: 20 }}
                  className="px-3 py-1.5 rounded-lg border font-mono text-sm font-semibold"
                  style={{ borderColor: "#2a2825", backgroundColor: "#141414", color: "#ffffff" }}
                >
                  {word}
                </motion.span>
              ))}

              {/* Predicted token slot */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.1 }}
                className="px-3 py-1.5 rounded-lg border font-mono text-sm font-semibold"
                style={{
                  borderColor: "#D97757",
                  backgroundColor: "rgba(217,119,87,0.1)",
                  minWidth: "3.5rem",
                  textAlign: "center",
                }}
              >
                <AnimatePresence mode="wait">
                  {revealed ? (
                    <motion.span key="word" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} style={{ color: "#F0B27A" }}>
                      fence
                    </motion.span>
                  ) : (
                    <motion.span key="cursor" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity }} style={{ color: "#D97757" }}>
                      _
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.span>
            </div>
          </div>

          {/* Probability bars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2 }}
            className="rounded-xl border p-4 space-y-3"
            style={{ borderColor: "#2a2825", backgroundColor: "#141414" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "#c9c3ba" }}>
              Model output — probability distribution
            </p>
            {PREDICTIONS.map((p, i) => (
              <div key={p.word} className="flex items-center gap-3">
                <span className="font-mono text-sm w-14 text-right shrink-0" style={{ color: "#f1f5f9" }}>
                  {p.word}
                </span>
                <div className="flex-1 h-4 rounded-full overflow-hidden" style={{ backgroundColor: "#1c1c1c" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                    initial={{ width: 0 }}
                    animate={active ? { width: `${p.pct}%` } : { width: 0 }}
                    transition={{ delay: 1.4 + i * 0.15, duration: 0.55, ease: "easeOut" }}
                  />
                </div>
                <span className="font-mono text-sm w-12 shrink-0 font-bold" style={{ color: p.color }}>
                  {p.pct}%
                </span>
              </div>
            ))}
          </motion.div>

          {/* Implication — directly beneath bars */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 2.0 }}
            className="rounded-xl border p-4"
            style={{ borderColor: "rgba(217,119,87,0.45)", backgroundColor: "rgba(217,119,87,0.08)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#f1f5f9" }}>
              <span style={{ color: "#F0B27A", fontWeight: 600 }}>Implication: </span>
              LLMs can be confidently wrong because they don't know what they don't know.
              Human direction, context, and verification are always required.
            </p>
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-4">

          {/* Concept cards */}
          {RIGHT_CARDS.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, x: 20 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.45 + i * 0.14, type: "spring", damping: 22 }}
              className="flex gap-3 p-4 rounded-xl border"
              style={{ borderColor: "#2a2825", backgroundColor: "#141414" }}
            >
              <span className="font-mono text-[11px] tracking-widest shrink-0 pt-0.5" style={{ color: "#F0B27A" }}>
                {item.n}
              </span>
              <div>
                <h4 className="font-bold text-sm tracking-tight mb-1" style={{ color: "#ffffff" }}>
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#f1f5f9" }}>
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Hallucination card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.75, type: "spring", damping: 22 }}
            className="p-4 rounded-xl border"
            style={{ borderColor: "rgba(217,119,87,0.5)", backgroundColor: "#141414" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-widest font-bold"
                style={{ backgroundColor: "rgba(217,119,87,0.15)", color: "#F0B27A" }}
              >
                hallucination
              </span>
            </div>
            <h4 className="font-bold text-sm tracking-tight mb-2" style={{ color: "#ffffff" }}>
              Plausible ≠ Factual
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#f1f5f9" }}>
              Because the model optimises for the <em>most probable</em> next word — not the <em>most true</em> one — it has no internal "fact database" to check against.
              It can generate a fluent, confident answer that is completely wrong.
              That is a hallucination: statistically plausible, factually false.
            </p>
          </motion.div>

          {/* Stacked predictions note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.0 }}
            className="flex items-start gap-2 font-mono text-[10px]"
            style={{ color: "#c9c3ba" }}
          >
            <span className="h-[1px] w-6 bg-[#2a2825] mt-1.5 shrink-0" />
            <span>
              A full response chains thousands of these predictions — fluency comes from dense patterns, not consciousness.
            </span>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
