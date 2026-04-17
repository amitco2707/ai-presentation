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
    <div className={`slide-inner ${className}`}>
      {!bare && (
        <motion.header
          initial={false}
          animate={active ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mb-10"
        >
          {eyebrow && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="chip mb-5"
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
              className="text-display font-bold tracking-tight"
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
              className="mt-4 text-lg md:text-xl text-muted max-w-3xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.header>
      )}
      {children}
    </div>
  );
}
