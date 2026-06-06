import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal } from '../data/resume';

const EASE = [0.16, 1, 0.3, 1];

const STATUS_CARDS = [
  { label: 'Currently',    value: 'Open to Opportunities', accent: true  },
  { label: 'Based in',     value: 'San Diego, CA'                         },
  { label: 'Focus',        value: 'Backend & Distributed Systems'         },
  { label: 'Latest Build', value: 'PRISM'                                  },
];

function DiamondAbstract() {
  const items = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 5; col++) {
      items.push({
        x: col * 70 + (row % 2) * 35,
        y: row * 54,
        size: 12 + (col % 3) * 3,
        op: 0.3 + (col + row) % 3 * 0.12,
      });
    }
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', right: 0, top: '50%',
        transform: 'translateY(-50%)',
        width: '42%', height: '90%',
        pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
        animation: 'abstract-pulse 8s ease-in-out infinite',
      }}
    >
      <svg
        width="100%" height="100%" viewBox="0 0 350 432"
        fill="none" preserveAspectRatio="xMidYMid slice"
        style={{ color: 'var(--accent)', opacity: 0.045 }}
      >
        {items.map((d, i) => (
          <rect
            key={i}
            x={d.x} y={d.y}
            width={d.size} height={d.size}
            transform={`rotate(45 ${d.x + d.size / 2} ${d.y + d.size / 2})`}
            stroke="currentColor" strokeWidth="0.7"
            fill="none" opacity={d.op}
          />
        ))}
        {/* Connecting lines for some diamonds */}
        {items.slice(0, 15).map((d, i) =>
          i < 14 && i % 3 !== 2 ? (
            <line
              key={`l${i}`}
              x1={d.x + d.size / 2} y1={d.y + d.size / 2}
              x2={items[i + 1].x + items[i + 1].size / 2} y2={items[i + 1].y + items[i + 1].size / 2}
              stroke="currentColor" strokeWidth="0.3" opacity={0.25}
            />
          ) : null
        )}
      </svg>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <DiamondAbstract />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          01 · About
        </motion.p>

        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
            gap: 'clamp(2.5rem, 6vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* LEFT column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.95, ease: EASE }}
              style={{
                fontFamily: 'Playfair Display, serif', fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)', lineHeight: 1.15,
                color: 'var(--text)', marginBottom: '1.4rem',
                transition: 'color 500ms',
              }}
            >
              I build systems that scale,<br />
              and software that matters.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.9, ease: EASE }}
              style={{
                fontWeight: 300, fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
                lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2.5rem',
                transition: 'color 500ms',
              }}
            >
              {personal.bio}
            </motion.p>

            {/* 2x2 status card grid */}
            <div
              className="about-status-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}
            >
              {STATUS_CARDS.map((card, i) => (
                <motion.div
                  key={card.label}
                  className="glass-card"
                  initial={{ opacity: 0, y: 22 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -3, transition: { duration: 0.3, ease: 'easeOut' } }}
                  transition={{ delay: 0.26 + i * 0.09, duration: 0.75, ease: EASE }}
                  style={{
                    padding: 'clamp(1rem, 2vw, 1.4rem) clamp(0.9rem, 1.8vw, 1.3rem)',
                    borderRadius: 6,
                    minHeight: 44,
                  }}
                >
                  <p style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 'clamp(0.44rem, 0.7vw, 0.5rem)',
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: 'var(--text-subtle)', marginBottom: '0.55rem',
                    transition: 'color 500ms',
                  }}>
                    {card.label}
                  </p>
                  <p style={{
                    fontSize: 'clamp(0.78rem, 1.2vw, 0.9rem)',
                    fontWeight: 600,
                    color: card.accent ? 'var(--accent)' : 'var(--text)',
                    lineHeight: 1.3, transition: 'color 500ms',
                  }}>
                    {card.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT column — photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 1.0, ease: EASE }}
            style={{ position: 'sticky', top: '6rem' }}
          >
            <div className="about-photo-wrap">
              <img src="/rectangle.jpg" alt="Ishan Bhoir" />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
                background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)',
                opacity: 0.3, transition: 'background 500ms',
              }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
