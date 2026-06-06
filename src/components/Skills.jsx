import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/resume';

const EASE = [0.16, 1, 0.3, 1];

function CircuitAbstract() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }}
    >
      <svg width="100%" height="100%" style={{ opacity: 0.048 }}>
        <defs>
          <pattern
            id="skills-circuit"
            x="0" y="0" width="55" height="55"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="27.5" cy="27.5" r="1.8" fill="var(--accent)" />
            <line x1="27.5" y1="27.5" x2="55" y2="27.5" stroke="var(--accent)" strokeWidth="0.45" />
            <line x1="27.5" y1="27.5" x2="27.5" y2="55" stroke="var(--accent)" strokeWidth="0.45" />
            <circle cx="0" cy="0" r="1" fill="var(--accent)" opacity="0.5" />
            <circle cx="55" cy="0" r="1" fill="var(--accent)" opacity="0.5" />
            <circle cx="0" cy="55" r="1" fill="var(--accent)" opacity="0.5" />
            <circle cx="55" cy="55" r="1" fill="var(--accent)" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skills-circuit)" />
      </svg>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <CircuitAbstract />

      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          02 · Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.95, ease: EASE }}
          style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 700,
            fontSize: 'clamp(1.6rem, 3.8vw, 2.8rem)', lineHeight: 1.15,
            marginBottom: '0.8rem', color: 'var(--text)',
            transition: 'color 500ms',
          }}
        >
          Tools I reach for.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.16, duration: 0.85, ease: EASE }}
          style={{
            fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)', fontWeight: 300,
            color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '3rem',
            transition: 'color 500ms',
          }}
        >
          The stack I know, the tools I trust.
        </motion.p>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3.5vw, 3.5rem)',
            textAlign: 'left',
          }}
        >
          {skills.map((group, gi) => (
            <SkillGroup key={group.category} group={group} gi={gi} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ group, gi, inView }) {
  const [hovered, setHovered] = useState(false);
  const isWide = group.category === 'Backend';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + gi * 0.07, duration: 0.85, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ gridColumn: isWide ? 'span 2' : 'span 1' }}
    >
      <p style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 'clamp(0.5rem, 0.85vw, 0.58rem)',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: hovered ? 'var(--accent)' : 'var(--text-subtle)',
        marginBottom: '0.9rem', fontWeight: 500,
        transition: 'color 300ms cubic-bezier(0.16,1,0.3,1)',
      }}>
        {group.category}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {group.items.map((skill, si) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.24 + gi * 0.07 + si * 0.035, duration: 0.55, ease: EASE }}
          >
            <SkillPill label={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SkillPill({ label }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.span
      className="skill-pill"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      animate={hov ? { scale: 1.06, y: -2 } : { scale: 1, y: 0 }}
      transition={{ duration: 0.22, ease: EASE }}
    >
      {label}
    </motion.span>
  );
}
