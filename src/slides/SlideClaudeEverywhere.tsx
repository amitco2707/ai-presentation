import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FileText, BarChart3, Layers, Globe, Mail, Repeat2, Lock } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const INTEGRATIONS = [
  { icon: FileText,  label: "Word",      sub: "Draft & rewrite documents" },
  { icon: BarChart3, label: "Excel",     sub: "Analyse data, write formulas" },
  { icon: Layers,    label: "PowerPoint",sub: "Generate decks from a prompt" },
  { icon: Globe,     label: "Chrome",    sub: "Read pages, research in-tab" },
  { icon: Mail,      label: "Email",     sub: "Triage, reply & summarise" },
  { icon: Repeat2,   label: "Workflows", sub: "Chain tasks end-to-end" },
];

const EMAILS = [
  { from: "John Smith",   subject: "Re: Q2 Report",   time: "3m",  read: false, highlight: false },
  { from: "Sarah Chen",   subject: "Team standup?",   time: "1h",  read: true,  highlight: false },
  { from: "Finance Dept", subject: "Invoice #4821",   time: "2h",  read: true,  highlight: true  },
];

const REPLY_TEXT = "Hi John, I reviewed the Q2 figures — numbers look solid. Happy to jump on a call to walk through the highlights.";

const STEPS = [
  { text: "Read 3 emails · flagged 1 action item", delay: 1.9 },
  { text: "Drafting reply to John Smith →",         delay: 2.6 },
];

function ChromeBrowser({ active }: { active: boolean }) {
  const [typed, setTyped] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  useEffect(() => {
    if (!active) {
      setTyped("");
      setShowReplyBox(false);
      return;
    }

    const showTimer = setTimeout(() => setShowReplyBox(true), 3100);

    const typeTimer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTyped(REPLY_TEXT.slice(0, i));
        if (i >= REPLY_TEXT.length) clearInterval(interval);
      }, 22);
      return () => clearInterval(interval);
    }, 3500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(typeTimer);
    };
  }, [active]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.45, type: "spring", damping: 22 }}
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: "#2a2825", backgroundColor: "#0d0d0d" }}
    >
      {/* ── Chrome title bar ── */}
      <div className="flex items-center gap-2 px-3 py-2.5" style={{ backgroundColor: "#1c1c1c" }}>
        <div className="flex gap-1.5 shrink-0">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
        </div>
        <div className="flex-1 mx-2">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-t-md text-[11px]"
            style={{ backgroundColor: "#141414", color: "#c9c3ba" }}
          >
            <Mail size={10} className="text-brand-amber" />
            Gmail — Inbox
          </div>
        </div>
      </div>

      {/* ── Address bar ── */}
      <div
        className="flex items-center gap-2 px-3 py-1.5"
        style={{ backgroundColor: "#181818", borderBottom: "1px solid #2a2825" }}
      >
        <div
          className="flex-1 flex items-center gap-2 px-3 py-1 rounded-full text-[11px]"
          style={{ backgroundColor: "#0d0d0d", color: "#c9c3ba" }}
        >
          <Lock size={9} style={{ color: "#28c840" }} />
          mail.google.com
        </div>
      </div>

      {/* ── Inbox content ── */}
      <div className="px-3 pt-3 pb-2">
        <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "#6b6b6b" }}>
          Inbox (3)
        </p>
        <div className="space-y-1">
          {EMAILS.map((email, i) => (
            <motion.div
              key={email.from}
              initial={{ opacity: 0, x: -10 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.65 + i * 0.18 }}
              className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg"
              style={{
                backgroundColor: email.highlight ? "rgba(217,119,87,0.08)" : "transparent",
                border: email.highlight ? "1px solid rgba(217,119,87,0.25)" : "1px solid transparent",
              }}
            >
              <div
                className="h-6 w-6 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold"
                style={{ backgroundColor: "#2a2825", color: "#F0B27A" }}
              >
                {email.from[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[11px] font-semibold truncate"
                    style={{ color: email.read ? "#c9c3ba" : "#ffffff" }}
                  >
                    {email.from}
                  </span>
                  <span className="text-[10px] shrink-0" style={{ color: "#484848" }}>
                    {email.time}
                  </span>
                </div>
                <p className="text-[10px] truncate" style={{ color: email.read ? "#484848" : "#c9c3ba" }}>
                  {email.subject}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Claude panel slides up ── */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={active ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{ delay: 1.5, type: "spring", damping: 24, stiffness: 130 }}
        className="mx-3 mb-3 rounded-lg border p-3"
        style={{ borderColor: "rgba(217,119,87,0.3)", backgroundColor: "rgba(217,119,87,0.06)" }}
      >
        {/* Claude header */}
        <div className="flex items-center gap-2 mb-2">
          <motion.div
            animate={active ? { scale: [1, 1.2, 1] } : {}}
            transition={{ delay: 1.7, repeat: Infinity, repeatDelay: 2.5, duration: 0.4 }}
            className="h-3.5 w-3.5 rounded-full border border-brand-orange/50 flex items-center justify-center"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          </motion.div>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#F0B27A" }}>
            Claude — working
          </span>
        </div>

        {/* Steps */}
        {STEPS.map(({ text, delay }) => (
          <motion.p
            key={text}
            initial={{ opacity: 0, x: -6 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
            transition={{ delay }}
            className="font-mono text-[10px] mb-1 flex items-center gap-1.5"
            style={{ color: "#c9c3ba" }}
          >
            <span style={{ color: "#28c840" }}>✓</span>
            {text}
          </motion.p>
        ))}

        {/* Reply draft box */}
        <AnimatePresence>
          {showReplyBox && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-2 rounded-md border px-2.5 py-2 text-[11px] leading-relaxed"
              style={{ borderColor: "#2a2825", backgroundColor: "#141414", color: "#F4E4D0", minHeight: "2.8rem" }}
            >
              {typed || <span style={{ color: "#484848" }}>Generating reply…</span>}
              {typed.length > 0 && typed.length < REPLY_TEXT.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  style={{ color: "#D97757" }}
                >
                  |
                </motion.span>
              )}
              {typed.length === REPLY_TEXT.length && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-2 font-mono text-[9px] px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: "rgba(40,200,64,0.15)", color: "#28c840" }}
                >
                  ready to send
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function SlideClaudeEverywhere({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 17 — Claude is Everywhere"
      title={<>No longer <span className="gradient-text">trapped in a tab.</span></>}
      subtitle="Claude now lives inside the tools you already use — no developer required. Repetitive work that used to take an hour can be automated in seconds."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-5 items-start">

        {/* Left: integration grid */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "#F0B27A" }}>
            Native integrations — no code needed
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {INTEGRATIONS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ delay: 0.3 + i * 0.08, type: "spring", damping: 22 }}
                className="flex items-start gap-2.5 p-3 rounded-xl border border-[#2a2825] bg-[#141414]"
              >
                <div className="shrink-0 h-8 w-8 rounded-lg bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center">
                  <item.icon size={14} className="text-brand-amber" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-cream leading-tight">{item.label}</p>
                  <p className="text-[11px] text-muted mt-0.5 leading-snug">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-3 font-mono text-[10px] leading-snug"
            style={{ color: "#6b6b6b" }}
          >
            the bottleneck is no longer{" "}
            <span style={{ color: "#ffffff" }}>skill</span> — it's{" "}
            <span style={{ color: "#F0B27A" }}>knowing what to ask</span>
          </motion.p>
        </div>

        {/* Right: Chrome browser animation */}
        <ChromeBrowser active={active} />
      </div>
    </SlideShell>
  );
}
