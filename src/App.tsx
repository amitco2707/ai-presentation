import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSnapScroll } from "./hooks/useSnapScroll";
import Slide01_Title from "./slides/Slide01_Title";
import Slide02_Basics from "./slides/Slide02_Basics";
import Slide03_Hierarchy from "./slides/Slide03_Hierarchy";
import Slide04_NeuralNetworks from "./slides/Slide04_NeuralNetworks";
import Slide05_MedicalImaging from "./slides/Slide05_MedicalImaging";
import Slide06_LLMvsAgentic from "./slides/Slide06_LLMvsAgentic";
import Slide07_Glossary from "./slides/Slide07_Glossary";
import Slide08_ClaudeCode from "./slides/Slide08_ClaudeCode";
import Slide09_Capabilities from "./slides/Slide09_Capabilities";
import Slide10_ModelEcosystem from "./slides/Slide10_ModelEcosystem";
import Slide11_Outro from "./slides/Slide11_Outro";

const SLIDES = [
  { id: "title", label: "Title", Component: Slide01_Title },
  { id: "basics", label: "The Basics", Component: Slide02_Basics },
  { id: "hierarchy", label: "Hierarchy", Component: Slide03_Hierarchy },
  { id: "neural", label: "Neural Networks", Component: Slide04_NeuralNetworks },
  { id: "medical", label: "Medical Imaging", Component: Slide05_MedicalImaging },
  { id: "llm-vs-agent", label: "LLM vs Agentic", Component: Slide06_LLMvsAgentic },
  { id: "glossary", label: "Glossary", Component: Slide07_Glossary },
  { id: "claude-code", label: "Claude Code", Component: Slide08_ClaudeCode },
  { id: "capabilities", label: "Capabilities", Component: Slide09_Capabilities },
  { id: "ecosystem", label: "Ecosystem", Component: Slide10_ModelEcosystem },
  { id: "outro", label: "Outro", Component: Slide11_Outro },
] as const;

export default function App() {
  const { containerRef, activeIndex, goTo, next, prev } = useSnapScroll(SLIDES.length);

  return (
    <div className="relative h-screen w-screen bg-base text-cream overflow-hidden">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none fixed inset-0 bg-radial-fade" />

      {/* Scroll container */}
      <div ref={containerRef} className="scroll-container relative">
        {SLIDES.map(({ id, Component }, index) => (
          <section
            key={id}
            data-slide-index={index}
            id={id}
            className="slide"
          >
            <Component active={activeIndex === index} />
          </section>
        ))}
      </div>

      {/* Side dot navigator */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {SLIDES.map(({ id, label }, index) => (
          <button
            key={id}
            onClick={() => goTo(index)}
            aria-label={`Go to ${label}`}
            className="group relative flex items-center justify-end gap-3"
          >
            <span
              className={`text-[10px] uppercase tracking-widest font-medium transition-all duration-300 ${
                activeIndex === index
                  ? "text-brand-amber opacity-100"
                  : "text-muted opacity-0 group-hover:opacity-100"
              }`}
            >
              {label}
            </span>
            <span
              className={`block h-[2px] transition-all duration-500 ${
                activeIndex === index
                  ? "w-8 bg-brand-orange shadow-glow-sm"
                  : "w-4 bg-line group-hover:w-6 group-hover:bg-brand-orange/60"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Progress bar (top) */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-line z-40">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-amber via-brand-orange to-brand-rust"
          animate={{ width: `${((activeIndex + 1) / SLIDES.length) * 100}%` }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
        />
      </div>

      {/* Brand tag */}
      <div className="fixed top-5 left-6 z-40 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
        <span className="font-mono text-xs text-muted tracking-widest uppercase">
          AI · Zero → Hero
        </span>
      </div>

      {/* Slide counter */}
      <div className="fixed top-5 right-6 z-40 font-mono text-xs text-muted tracking-wider">
        <span className="text-brand-amber">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="mx-1.5 text-line">/</span>
        <span>{String(SLIDES.length).padStart(2, "0")}</span>
      </div>

      {/* Bottom nav arrows */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          className="h-10 w-10 flex items-center justify-center rounded-full border border-line hover:border-brand-orange hover:bg-brand-orange/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
        >
          <ChevronUp size={16} />
        </button>
        <button
          onClick={next}
          disabled={activeIndex === SLIDES.length - 1}
          className="h-10 w-10 flex items-center justify-center rounded-full border border-line hover:border-brand-orange hover:bg-brand-orange/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Scroll hint on first slide */}
      <AnimatePresence>
        {activeIndex === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 2.5 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ChevronDown size={14} className="text-brand-orange" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
