import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/resume';

const EASE = [0.16, 1, 0.3, 1];

function OrbAbstract() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', right: '-8%', top: '5%',
        width: 'clamp(200px, 32vw, 480px)', height: 'clamp(200px, 32vw, 480px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
        filter: 'blur(60px)',
        willChange: 'transform',
        animation: 'blob-a 20s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', left: '-6%', bottom: '8%',
        width: 'clamp(150px, 22vw, 340px)', height: 'clamp(150px, 22vw, 340px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.055) 0%, transparent 70%)',
        filter: 'blur(48px)',
        willChange: 'transform',
        animation: 'blob-c 24s ease-in-out infinite',
        animationDelay: '9s',
      }} />
    </div>
  );
}

function TiltCard({ children, style }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: dy * -3, y: dx * 3 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="glass-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, y: tilt.x !== 0 || tilt.y !== 0 ? -3 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 0.7 }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d', ...style }}
    >
      {children}
    </motion.div>
  );
}

function BulletList({ bullets }) {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
      {bullets.map((b, i) => (
        <li key={i} style={{
          fontSize: 'clamp(0.78rem, 1.1vw, 0.84rem)', fontWeight: 300,
          color: 'var(--text-muted)', lineHeight: 1.72, listStyle: 'none',
          display: 'flex', gap: '0.5rem', alignItems: 'flex-start',
          transition: 'color 500ms',
        }}>
          <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.08em', transition: 'color 500ms' }}>·</span>
          {b}
        </li>
      ))}
    </ul>
  );
}

function GitHubButton({ href }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.a
      href={href} target="_blank" rel="noopener noreferrer"
      data-cursor-hover
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.22, ease: EASE }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.65rem 1.3rem', minHeight: 44,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 'clamp(0.58rem, 0.9vw, 0.65rem)',
        letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
        border: '1px solid var(--accent)', color: 'var(--accent)',
        borderRadius: 3, background: hov ? 'var(--accent-dim)' : 'transparent',
        transition: 'background 300ms', whiteSpace: 'nowrap',
      }}
    >
      View on GitHub
      <motion.span animate={{ x: hov ? 4 : 0 }} transition={{ duration: 0.25, ease: EASE }}>
        →
      </motion.span>
    </motion.a>
  );
}

function HighlightsPanel({ items }) {
  return (
    <div style={{
      padding: '1.1rem 1.2rem', borderRadius: 4,
      border: '1px solid var(--border)', background: 'var(--pill-bg)',
      transition: 'border-color 500ms, background 500ms',
    }}>
      <p style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 'clamp(0.44rem, 0.7vw, 0.5rem)',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--text-subtle)', marginBottom: '0.9rem',
        transition: 'color 500ms',
      }}>
        Highlights
      </p>
      {items.map(([val, lbl]) => (
        <div key={lbl} style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'baseline', marginBottom: '0.55rem', gap: '0.5rem',
        }}>
          <span style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 700,
            fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)', color: 'var(--accent)',
            transition: 'color 500ms', flexShrink: 0,
          }}>
            {val}
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.5rem, 0.8vw, 0.58rem)',
            color: 'var(--text-muted)', transition: 'color 500ms',
            textAlign: 'right',
          }}>
            {lbl}
          </span>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, inView, delay, highlights }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 1.0, ease: EASE }}
    >
      <TiltCard style={{ padding: 'clamp(1.5rem, 3vw, 2.8rem)', borderRadius: 6 }}>
        <div
          className="projects-featured-inner"
          style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(1.5rem, 3.5vw, 3rem)' }}
        >
          <div>
            {project.featured && (
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'clamp(0.44rem, 0.75vw, 0.52rem)',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--accent)', display: 'block', marginBottom: '0.5rem',
                transition: 'color 500ms',
              }}>
                Featured Project
              </span>
            )}
            <h3 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 700,
              fontSize: 'clamp(1.3rem, 2.8vw, 2.2rem)', color: 'var(--text)',
              lineHeight: 1.1, marginBottom: '0.3rem', transition: 'color 500ms',
              wordBreak: 'break-word',
            }}>
              {project.title}
            </h3>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'clamp(0.58rem, 0.9vw, 0.65rem)',
              color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '1rem',
              transition: 'color 500ms',
            }}>
              {project.subtitle}
            </p>
            <p style={{
              fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)', fontWeight: 300,
              color: 'var(--text-muted)', lineHeight: 1.82, marginBottom: '1.2rem',
              transition: 'color 500ms',
            }}>
              {project.description}
            </p>
            <BulletList bullets={project.bullets} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
            <div>
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'clamp(0.44rem, 0.75vw, 0.52rem)',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--text-subtle)', marginBottom: '0.7rem',
                transition: 'color 500ms',
              }}>
                Tech Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem' }}>
                {project.tech.map(t => (
                  <span key={t} className="skill-pill" style={{ fontSize: 'clamp(0.5rem, 0.8vw, 0.58rem)' }}>{t}</span>
                ))}
              </div>
            </div>

            <HighlightsPanel items={highlights} />
            {project.github && <GitHubButton href={project.github} />}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <OrbAbstract />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            04 · Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.95, ease: EASE }}
            style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 700,
              fontSize: 'clamp(1.6rem, 3.8vw, 2.8rem)', lineHeight: 1.15,
              color: 'var(--text)', transition: 'color 500ms',
            }}
          >
            Things I've built.
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <ProjectCard
            project={projects[0]} inView={inView} delay={0.1}
            highlights={[
              ['Full Stack',  'Java + React'],
              ['Webhook',     'GitHub Integration'],
              ['AI-Powered',  'Claude Integration'],
            ]}
          />
          <ProjectCard
            project={projects[1]} inView={inView} delay={0.2}
            highlights={[
              ['3 Services', 'Auth + Employee + Payroll'],
              ['JWT + RBAC', 'Role-Based Access'],
              ['Full Stack', 'Java 21 + MongoDB'],
            ]}
          />
        </div>
      </div>
    </section>
  );
}
