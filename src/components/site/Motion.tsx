import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

/* ── Shared easing ── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ── Slide (left/right alternating, existing) ── */
export function Slide({
  children, className = '', index = 0,
}: { children: ReactNode; className?: string; index?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x: index % 2 ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay: (index % 6) * 0.07, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ── FadeUp — fade + rise from below ── */
export function FadeUp({
  children, className = '', delay = 0, amount = 0.12,
}: { children: ReactNode; className?: string; delay?: number; amount?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ── ScaleIn — pop-in scale effect ── */
export function ScaleIn({
  children, className = '', delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerList — cascades children with delay ── */
export function StaggerList({
  children, className = '', stagger = 0.09, baseDelay = 0,
}: { children: ReactNode; className?: string; stagger?: number; baseDelay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: baseDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerItem — child of StaggerList ── */
export function StaggerItem({
  children, className = '', style,
}: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      variants={reduce ? {} : {
        hidden: { opacity: 0, y: 32, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Helpers (unchanged) ── */
export function Squares() { return <span aria-hidden className="square-motif" />; }
export function Photo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <div className={`photo-mask ${className}`}><img src={src} alt={alt} loading="lazy" className="clean-photo" /></div>;
}
export function Waterline() {
  return (
    <div className="waterline" aria-hidden>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0 30 Q75 10 150 30 T300 30 T450 30 T600 30 T750 30 T900 30 T1050 30 T1200 30 V60 H0Z" /></svg>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0 30 Q75 10 150 30 T300 30 T450 30 T600 30 T750 30 T900 30 T1050 30 T1200 30 V60 H0Z" /></svg>
    </div>
  );
}

