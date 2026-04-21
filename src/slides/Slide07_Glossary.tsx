import {
  BookOpen,
  Boxes,
  Brain,
  Cable,
  Code2,
  MessageSquare,
  Plug,
  TerminalSquare,
} from "lucide-react";
import SlideShell from "../components/SlideShell";
import GlossaryCard from "../components/GlossaryCard";

interface Props {
  active: boolean;
}

const TERMS = [
  {
    icon: TerminalSquare,
    term: "Terminal",
    short: "The command center",
    description:
      "A text-based window for telling the computer exactly what to do.",
  },
  {
    icon: Code2,
    term: "IDE",
    short: "The digital workshop",
    description:
      "The program developers use to write, test, and ship software.",
  },
  {
    icon: Cable,
    term: "API",
    short: "The bridge",
    description:
      "A pipe that lets two pieces of software talk to each other.",
  },
  {
    icon: Plug,
    term: "MCP",
    short: "Model Context Protocol",
    description:
      "A standard that lets AI safely plug into local tools and data.",
  },
  {
    icon: Boxes,
    term: "Tokens",
    short: "The currency",
    description:
      "Small chunks of text. AI reads and writes by counting these.",
  },
  {
    icon: BookOpen,
    term: "Context Window",
    short: "Working memory",
    description:
      "How much the AI can hold in its head at one time while it works.",
  },
  {
    icon: MessageSquare,
    term: "Prompting",
    short: "How you ask",
    description:
      "The skill of writing clear instructions. Better prompts, better answers.",
  },
  {
    icon: Brain,
    term: "LLM",
    short: "Large Language Model",
    description:
      "The AI brain trained on oceans of text — it predicts the next word to form coherent answers.",
  },
];

export default function Slide07_Glossary({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 07 — Glossary"
      title={<>The words you'll <span className="gradient-text">keep hearing.</span></>}
      subtitle="Eight terms that unlock every conversation about modern AI. Hover any card."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {TERMS.map((t, i) => (
          <GlossaryCard
            key={t.term}
            icon={t.icon}
            term={t.term}
            short={t.short}
            description={t.description}
            active={active}
            delay={0.3 + i * 0.08}
          />
        ))}
      </div>
    </SlideShell>
  );
}
