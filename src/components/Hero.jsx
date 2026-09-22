import { motion } from 'framer-motion';
import { personal } from '../data/resume';

const EASE = [0.16, 1, 0.3, 1];

function SplitName({ name }) {
  return (
    <span
      aria-label={name}
      style={{
        display: 'block', whiteSpace: 'nowrap',
        background: 'linear-gradient(135deg, var(--text) 50%, var(--accent) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {name.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 + i * 0.03, duration: 0.9, ease: EASE }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

function ProfileCircle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 1.1, ease: EASE }}
      style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1' }}
    >
      <div style={{
        position: 'absolute', inset: '10%', borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        filter: 'blur(32px)', zIndex: 0, transition: 'background 500ms',
      }} />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', inset: -16, borderRadius: '50%',
          border: '1px dashed var(--accent)', opacity: 0.18, zIndex: 1,
          transition: 'border-color 500ms',
        }}
      />

      {/* Gradient conic rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', inset: -4, borderRadius: '50%', zIndex: 2 }}
      >
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: 'conic-gradient(from 0deg, var(--accent), var(--accent-bright), transparent 55%, var(--accent))',
          opacity: 0.75,
        }} />
        <div style={{
          position: 'absolute', inset: '1.5px', borderRadius: '50%',
          background: 'var(--bg)',
          transition: 'background 500ms',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: -3,
          transform: 'translateY(-50%)',
          width: 7, height: 7, borderRadius: '50%', zIndex: 1,
          background: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent), 0 0 16px var(--accent-glow)',
          transition: 'background 500ms, box-shadow 500ms',
        }} />
      </motion.div>

      <div style={{
        position: 'relative', zIndex: 3,
        width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden',
        border: '2px solid var(--accent)',
        boxShadow: '0 0 0 5px var(--accent-dim), 0 20px 56px rgba(0,0,0,0.4)',
        transition: 'border-color 500ms, box-shadow 500ms',
      }}>
        <img
          src="https://drive.google.com/thumbnail?id=1imQTVeCinEGvvoJAfX3qhd71VXFog_aD&sz=w800"
          alt="Ishan Bhoir"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            display: 'block',
          }}
        />
      </div>
    </motion.div>
  );
}

function CTAButton({ children, href, primary, onClick }) {
  return (
    <motion.a
      href={href} onClick={onClick} data-cursor-hover
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: EASE }}
      style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '0.75rem 1.8rem', minHeight: 44,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 'clamp(0.6rem, 1vw, 0.68rem)', letterSpacing: '0.12em',
        textTransform: 'uppercase', textDecoration: 'none', border: '1px solid',
        borderColor: primary ? 'transparent' : 'var(--border)',
        color: primary ? '#fff' : 'var(--text)',
        background: primary
          ? 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)'
          : 'transparent',
        borderRadius: 3,
        transition: 'background 500ms, border-color 500ms, color 500ms',
        cursor: 'pointer', whiteSpace: 'nowrap',
      }}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100dvh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(5rem, 8vw, 8rem) clamp(1.5rem, 5vw, 3rem) clamp(2rem, 4vw, 3rem)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div
        className="hero-inner"
        style={{ maxWidth: 1400, width: '100%', margin: '0 auto' }}
      >
        {/* LEFT — text */}
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.02, duration: 0.7, ease: EASE }}
            style={{ marginBottom: '1.2rem' }}
          >
            <span className="otw-badge">
              <span className="otw-dot-wrap">
                <span className="otw-ring" />
                <span className="otw-dot" />
              </span>
              Open to Work
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.8, ease: EASE }}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'clamp(0.52rem, 0.9vw, 0.68rem)',
              letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '0.8rem',
              transition: 'color 500ms',
            }}
          >
            Hello, I'm
          </motion.p>

          <h1
            style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: 'clamp(3.2rem, 9vw, 9.5rem)',
              lineHeight: 0.9, letterSpacing: '-0.03em',
              marginBottom: '2.5rem',
              overflow: 'hidden',
            }}
          >
            <SplitName name="Ishan" />
            <SplitName name="Bhoir" />
          </h1>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.85, ease: EASE }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <CTAButton
              href="#projects" primary
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              View Work
            </CTAButton>
            <CTAButton
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Contact
            </CTAButton>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1ddgOZbNRdbQeeEzPubdiGH6fZPhL4jHd"
              download="Ishan_Bhoir_Resume.pdf"
              data-cursor-hover
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="resume-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.75rem 1.4rem', minHeight: 44,
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'clamp(0.6rem, 1vw, 0.68rem)',
                letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid var(--border)', color: 'var(--text-muted)',
                background: 'transparent', borderRadius: 3, whiteSpace: 'nowrap',
                transition: 'border-color 500ms, color 500ms',
              }}
            >
              Resume <span style={{ fontSize: '0.85em' }}>↓</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.8, ease: EASE }}
            style={{
              marginTop: '2.5rem', paddingTop: '1.2rem',
              borderTop: '1px solid var(--border)',
              transition: 'border-color 500ms',
              overflow: 'hidden',
            }}
          >
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'clamp(0.44rem, 0.8vw, 0.54rem)',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--text-subtle)', transition: 'color 500ms',
              display: 'block', whiteSpace: 'nowrap', overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              SOFTWARE ENGINEER · 2 YRS @ FORTUNE 500 · MS CS SDSU '26 · SAN FRANCISCO, CA · OPEN TO WORK ✦
            </span>
          </motion.div>
        </div>

        {/* RIGHT — photo */}
        <div className="hero-right">
          <div className="hero-image-wrap">
            <ProfileCircle />
          </div>
        </div>
      </div>

      {/* Bouncing scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.svg
          width="16" height="16" viewBox="0 0 14 14"
          fill="none" stroke="var(--accent)"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <polyline points="2 4 7 10 12 4" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
