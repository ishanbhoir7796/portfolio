import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function PageLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 700);
    }, 1400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {/* IB initials */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.08em', overflow: 'hidden' }}>
            {['I', 'B'].map((char, i) => (
              <motion.span
                key={char}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.12, duration: 0.75, ease: EASE }}
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 900,
                  fontSize: 'clamp(5rem, 14vw, 9rem)',
                  lineHeight: 1,
                  color: 'var(--text)',
                  letterSpacing: '-0.04em',
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
            style={{
              width: '3rem',
              height: 1,
              background: 'var(--accent)',
              transformOrigin: 'left',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
