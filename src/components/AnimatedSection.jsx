'use client';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', direction = 'up' }) {
  const variants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  };
  const variant = variants[direction] || variants.up;
  return (
    <motion.section
      className={className}
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
