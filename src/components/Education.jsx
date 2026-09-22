import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data/resume';

const EASE = [0.16, 1, 0.3, 1];

const INSTITUTION_LINKS = {
  'San Diego State University': 'https://www.sdsu.edu',
  'Pimpri Chinchwad College of Engineering (SPPU)': 'https://www.pccoepune.com',
};

function EduCard({ edu, index, inView }) {
  const [gpaValue] = edu.gpa.split(' /');
  const link = INSTITUTION_LINKS[edu.institution];

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -3, transition: { duration: 0.3, ease: 'easeOut' } }}
      transition={{ delay: 0.16 + index * 0.14, duration: 0.95, ease: EASE }}
      className="glass-card"
      style={{ borderRadius: 12, padding: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
    >
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'flex-start',
        gap: '1rem', marginBottom: '1.4rem',
        flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <h3 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 700,
              fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', color: 'var(--text)',
              lineHeight: 1.2, transition: 'color 500ms',
            }}>
              {edu.degree}
            </h3>
            {edu.note && (
              <span style={{
                padding: '0.12rem 0.5rem', border: '1px solid var(--accent)',
                color: 'var(--accent)', borderRadius: 2,
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'clamp(0.46rem, 0.72vw, 0.52rem)',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                flexShrink: 0,
                transition: 'border-color 500ms, color 500ms',
              }}>
                {edu.note}
              </span>
            )}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'clamp(0.6rem, 1vw, 0.7rem)',
              color: 'var(--accent)', letterSpacing: '0.06em',
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              transition: 'border-color 200ms, color 500ms',
              display: 'inline-block', marginBottom: '0.25rem',
            }}
            onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
          >
            {edu.institution}
          </a>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.54rem, 0.85vw, 0.6rem)',
            color: 'var(--text-subtle)', letterSpacing: '0.1em', textTransform: 'uppercase',
            transition: 'color 500ms',
          }}>
            {edu.location} · {edu.period}
          </p>
        </div>

        {/* GPA — large & prominent */}
        <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 'auto' }}>
          <p style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)',
            lineHeight: 1, transition: 'color 500ms',
          }}>
            {gpaValue}
          </p>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.46rem, 0.72vw, 0.52rem)',
            color: 'var(--text-subtle)', letterSpacing: '0.14em',
            textTransform: 'uppercase', marginTop: '0.25rem',
            transition: 'color 500ms',
          }}>
            / 4.0 GPA
          </p>
        </div>
      </div>

      <div style={{ height: 1, background: 'var(--border)', marginBottom: '1.2rem', transition: 'background 500ms' }} />

      {/* Coursework */}
      {edu.coursework && (
        <div>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.46rem, 0.72vw, 0.5rem)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--text-subtle)', marginBottom: '0.65rem',
            transition: 'color 500ms',
          }}>
            Coursework
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {edu.coursework.map(c => (
              <span key={c} className="skill-pill">
                {c}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function RingsAbstract() {
  const radii = [50, 90, 130, 170, 210, 255, 300];
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', right: '-80px', bottom: '-80px',
        width: 'clamp(280px, 38vw, 540px)', height: 'clamp(280px, 38vw, 540px)',
        pointerEvents: 'none', zIndex: 0, overflow: 'visible',
        animation: 'ring-breathe 9s ease-in-out infinite',
        willChange: 'transform',
      }}
    >
      <svg
        viewBox="0 0 600 600" fill="none"
        width="100%" height="100%"
        style={{ overflow: 'visible', color: 'var(--accent)' }}
      >
        {radii.map((r, i) => (
          <circle
            key={r} cx="600" cy="600" r={r}
            stroke="currentColor"
            strokeWidth={0.9 - i * 0.06}
            opacity={0.55 - i * 0.06}
            fill="none"
          />
        ))}
        <line x1="600" y1="290" x2="600" y2="310" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="290" y1="600" x2="310" y2="600" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="education"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <RingsAbstract />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          05 · Education
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.95, ease: EASE }}
          style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 700,
            fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', lineHeight: 1.2,
            marginBottom: '3rem', color: 'var(--text)', transition: 'color 500ms',
          }}
        >
          Where I studied.
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {education.map((edu, i) => (
            <EduCard key={edu.degree} edu={edu} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
