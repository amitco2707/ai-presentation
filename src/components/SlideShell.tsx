import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  active: boolean;
  children?: ReactNode;
  className?: string;
  /** Hide default header; render entirely custom */
  bare?: boolean;
  /** Chapter part label, e.g. "Part 1: The Foundations" */
  part?: string;
}

/**
 * Common slide layout. Header (eyebrow + title + subtitle) animates in when
 * the slide becomes active. Children render below.
 */
export default function SlideShell({
  eyebrow,
  title,
  subtitle,
  active,
  children,
  className = "",
  bare = false,
  part,
}: Props) {
  return (
    <div className={`slide-inner flex flex-col ${className}`}>
      {!bare && (
        <motion.header
          initial={false}
          animate={active ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mb-2 md:mb-6 shrink-0"
        >
          {part && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-3 mb-1.5 md:mb-3"
            >
              <span className="h-[1px] w-4 bg-brand-orange/50" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-orange/80">
                {part}
              </span>
              <span className="h-[1px] flex-1 bg-brand-orange/20" />
            </motion.div>
          )}
          {eyebrow && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="chip mb-1.5 md:mb-3"
            >
              <span className="h-1 w-1 rounded-full bg-brand-orange animate-pulse" />
              {eyebrow}
            </motion.div>
          )}
          {title && (
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", damping: 22, stiffness: 110 },
                },
              }}
              className="text-display font-bold tracking-tight text-cream"
            >
              {title}
            </motion.h1>
          )}
          {subtitle && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-1.5 md:mt-3 text-sm md:text-base lg:text-lg text-cream/80 max-w-3xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.header>
      )}
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}
