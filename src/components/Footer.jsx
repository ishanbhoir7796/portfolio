import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderTop: '1px solid var(--border)',
        padding: '1.8rem clamp(1.5rem, 5vw, 3rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'border-color 500ms',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <span style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.6rem',
        letterSpacing: '0.08em',
        color: 'var(--text-subtle)',
        transition: 'color 500ms',
      }}>
        © 2026 Ishan Bhoir · Built with React, Framer Motion, Tailwind CSS &amp; Claude
      </span>
    </motion.footer>
  );
}
