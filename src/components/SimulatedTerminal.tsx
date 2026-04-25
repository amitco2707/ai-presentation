import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type TerminalLine =
  | { type: "input"; text: string; delay?: number }
  | { type: "output"; text: string; delay?: number; color?: string }
  | { type: "success"; text: string; delay?: number }
  | { type: "comment"; text: string; delay?: number }
  | { type: "prompt"; text: string; delay?: number }
  | { type: "blank" };

interface Props {
  script: TerminalLine[];
  prompt?: string;
  charSpeed?: number;
  active: boolean;
  loop?: boolean;
  className?: string;
}

/**
 * Simulated terminal with typewriter effect. Steps through `script` line by
 * line; inputs type char-by-char, outputs stream faster. Loops after a pause.
 */
export default function SimulatedTerminal({
  script,
  prompt = "amitc@ai-presentation ~ $",
  charSpeed = 28,
  active,
  loop = true,
  className = "",
}: Props) {
  const [rendered, setRendered] = useState<TerminalLine[]>([]);
  const [typing, setTyping] = useState<{ text: string; type: TerminalLine["type"] } | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef(false);

  useEffect(() => {
    if (!active) return;
    cancelRef.current = false;
    let mounted = true;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms);
        return () => clearTimeout(t);
      });

    const typeLine = async (line: TerminalLine) => {
      if (line.type === "blank") {
        setRendered((r) => [...r, line]);
        return;
      }
      const isInput = line.type === "input";
      const speed = isInput ? charSpeed : Math.max(6, charSpeed / 2.5);
      let current = "";
      for (const ch of line.text) {
        if (cancelRef.current || !mounted) return;
        current += ch;
        setTyping({ text: current, type: line.type });
        await wait(speed);
      }
      setTyping(null);
      setRendered((r) => [...r, line]);
    };

    const run = async () => {
      while (mounted && !cancelRef.current) {
        setRendered([]);
        setTyping(null);
        for (const line of script) {
          if (cancelRef.current || !mounted) return;
          await wait(line.type === "blank" ? 200 : (line.delay ?? 350));
          await typeLine(line);
        }
        if (!loop) return;
        await wait(3500);
      }
    };

    run();
    return () => {
      mounted = false;
      cancelRef.current = true;
    };
  }, [active, script, charSpeed, loop]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [rendered, typing]);

  const renderLine = (line: TerminalLine, idx: number | string, isTyping = false) => {
    if (line.type === "blank") return <div key={idx} className="h-4" />;
    if (line.type === "input") {
      return (
        <div key={idx} className="flex flex-wrap gap-x-2">
          <span className="text-brand-amber/90">{prompt}</span>
          <span className="text-cream">
            {line.text}
            {isTyping && <span className="inline-block w-2 h-4 align-middle bg-brand-orange animate-blink ml-0.5" />}
          </span>
        </div>
      );
    }
    if (line.type === "success") {
      return (
        <div key={idx} className="text-emerald-400">
          <span className="text-emerald-500">✓</span> {line.text}
        </div>
      );
    }
    if (line.type === "comment") {
      return (
        <div key={idx} className="text-muted italic">
          # {line.text}
        </div>
      );
    }
    if (line.type === "prompt") {
      return (
        <div
          key={idx}
          className="my-2 px-3 py-2 rounded-md border border-brand-orange/50 bg-brand-orange/10 text-brand-amber flex items-start gap-2"
        >
          <span className="text-brand-orange font-bold shrink-0">⚠</span>
          <span>
            {line.text}
            {isTyping && (
              <span className="inline-block w-2 h-4 align-middle bg-brand-orange animate-blink ml-1" />
            )}
          </span>
        </div>
      );
    }
    return (
      <div key={idx} className="text-cream/75" style={line.color ? { color: line.color } : undefined}>
        {line.text}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`rounded-xl border border-line bg-[#0c0c0c] overflow-hidden shadow-card ${className}`}
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-[#141414]">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-3 text-xs font-mono text-muted tracking-wider">
          ~ claude-code
        </span>
      </div>

      {/* Body */}
      <div
        ref={scrollerRef}
        className="font-mono text-[12px] md:text-sm leading-relaxed p-4 md:p-6 min-h-[180px] md:min-h-[320px] max-h-[260px] md:max-h-[420px] overflow-y-auto space-y-1"
        style={{ scrollbarWidth: "thin" }}
      >
        {rendered.map((line, idx) => renderLine(line, idx))}
        {typing && renderLine(typing as TerminalLine, "typing", true)}
      </div>
    </motion.div>
  );
}
