import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionDivider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div
      ref={ref}
      style={{
        padding: '0 2.5rem',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ position: 'relative', height: 1, background: 'var(--border)', overflow: 'hidden', transition: 'background 500ms' }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)',
            transformOrigin: 'left',
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
}
