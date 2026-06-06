import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { experience } from '../data/resume';

const EASE = [0.16, 1, 0.3, 1];

function TimelineEntry({ job, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, ease: EASE }}
      style={{ display: 'flex', gap: 'clamp(1.8rem, 4vw, 3.5rem)', position: 'relative' }}
    >
      {/* Node */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        flexShrink: 0, width: 20, position: 'relative', zIndex: 2,
      }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.25, duration: 0.45, ease: EASE }}
          style={{
            width: 12, height: 12, borderRadius: '50%',
            background: 'var(--accent)',
            outline: '2px solid var(--accent)',
            outlineOffset: '2px',
            flexShrink: 0, marginTop: 5,
            boxShadow: '0 0 6px var(--accent-glow)',
            transition: 'background 500ms, outline-color 500ms',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0, paddingBottom: isLast ? 0 : 'clamp(2.5rem, 5vw, 4.5rem)' }}>
        <div style={{ marginBottom: '0.55rem' }}>
          <h3 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 700,
            fontSize: 'clamp(1.1rem, 2.4vw, 1.6rem)', color: 'var(--text)',
            lineHeight: 1.2, transition: 'color 500ms',
          }}>
            {job.title}
            <span style={{ color: 'var(--accent)', transition: 'color 500ms' }}>
              {' '}@{' '}
              <a
                href="https://www.tiaa.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'inherit', textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 200ms',
                }}
                onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
              >
                {job.company.split(' ')[0]}
              </a>
            </span>
          </h3>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.58rem, 0.9vw, 0.65rem)',
            color: 'var(--text-subtle)', letterSpacing: '0.08em',
            marginTop: '0.25rem', transition: 'color 500ms',
          }}>
            {job.period} · {job.location}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.2rem' }}>
          {job.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'clamp(0.5rem, 0.85vw, 0.58rem)',
              letterSpacing: '0.05em', padding: '0.2rem 0.65rem',
              border: '1px solid var(--border)', borderRadius: 4,
              color: 'var(--text-subtle)', background: 'var(--pill-bg)',
              transition: 'border-color 500ms, color 500ms, background 500ms',
            }}>
              {t}
            </span>
          ))}
        </div>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {job.bullets.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: EASE }}
              style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 0.92rem)', fontWeight: 300,
                color: 'var(--text-muted)', lineHeight: 1.78, listStyle: 'none',
                display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
                transition: 'color 500ms',
              }}
            >
              <span style={{
                color: 'var(--accent)', flexShrink: 0, marginTop: '0.1em',
                fontSize: '0.8rem', transition: 'color 500ms',
              }}>
                ▹
              </span>
              {b}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 72%', 'end 48%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            03 · Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.95, ease: EASE }}
            style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 700,
              fontSize: 'clamp(1.6rem, 3.8vw, 2.8rem)', lineHeight: 1.15,
              color: 'var(--text)', transition: 'color 500ms',
            }}
          >
            Where I've worked.
          </motion.h2>
        </div>

        {/* Timeline list */}
        <div ref={listRef} style={{ position: 'relative' }}>
          {/* Background track */}
          <div style={{
            position: 'absolute',
            left: 9, top: 5, bottom: 0,
            width: 2,
            background: 'var(--border)',
            borderRadius: 2,
            transition: 'background 500ms',
            zIndex: 0,
          }} />

          {/* Scroll-driven glowing fill */}
          <motion.div
            style={{
              position: 'absolute',
              left: 8, top: 5,
              width: 4,
              height: lineHeight,
              background: 'linear-gradient(180deg, var(--accent) 0%, var(--accent-bright) 100%)',
              boxShadow: '0 0 4px var(--accent-glow)',
              borderRadius: 2,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          {experience.map((job, i) => (
            <TimelineEntry key={i} job={job} index={i} total={experience.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
