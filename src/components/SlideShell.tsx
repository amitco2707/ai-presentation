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
          className="mb-5 md:mb-6 shrink-0"
        >
          {eyebrow && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="chip mb-3"
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
              className="mt-3 text-base md:text-lg text-cream/80 max-w-3xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.header>
      )}
      <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}
