import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../hooks/useScrollDirection';

const EASE = [0.16, 1, 0.3, 1];

const NAV_LINKS = [
  { num: '01', label: 'About',      id: 'about'      },
  { num: '02', label: 'Skills',     id: 'skills'     },
  { num: '03', label: 'Experience', id: 'experience' },
  { num: '04', label: 'Projects',   id: 'projects'   },
  { num: '05', label: 'Education',  id: 'education'  },
  { num: '06', label: 'Contact',    id: 'contact'    },
];


function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.id);
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0, rootMargin: '-35% 0px -35% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return active;
}

function ThemeToggle({ isDark, toggle }) {
  const handleToggle = () => {
    toggle();
  };

  return (
    <motion.button
      onClick={handleToggle}
      data-cursor-hover
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.88 }}
      transition={{ duration: 0.18, ease: EASE }}
      className="theme-toggle-btn"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </motion.button>
  );
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar({ isDark, toggle }) {
  const direction = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleLink = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: direction === 'down' && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.42, ease: EASE }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 clamp(1.5rem, 5vw, 3rem)', height: 72,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg)',
          transition: 'background 500ms, border-color 500ms',
        }}
      >
        {/* Logo mark */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          data-cursor-hover
          className="logo-mark"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.18, ease: EASE }}
        >
          IB
        </motion.a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ num, label, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link${isActive ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLink(id); }}
              >
                <span className="nav-num">{num}</span>
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: -2, left: 0, right: 0,
                      height: 1,
                      background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))',
                      borderRadius: 1,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <motion.a
            href="https://drive.google.com/uc?export=download&id=11f1Jnu_bl45oyFZPO0WtgQ9_arbtw8x8"
            download="Ishan_Bhoir_Resume.pdf"
            data-cursor-hover
            className="hidden md:inline-flex resume-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.22, ease: EASE }}
            style={{
              alignItems: 'center', gap: '0.35rem',
              padding: '0.42rem 1rem',
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid var(--border)', color: 'var(--text-muted)',
              borderRadius: 3,
              transition: 'border-color 500ms, color 500ms',
            }}
          >
            <span>Resume</span>
            <span>↓</span>
          </motion.a>

          <motion.button
            data-cursor-hover
            className="hidden md:flex hire-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.22, ease: EASE }}
            style={{
              alignItems: 'center',
              padding: '0.44rem 1.1rem',
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)',
              color: '#fff',
              border: 'none', borderRadius: 3, cursor: 'pointer',
              transition: 'background 500ms',
            }}
          >
            Let's Connect
          </motion.button>

          <ThemeToggle isDark={isDark} toggle={toggle} />

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col justify-center gap-[5px] w-7 h-7"
            onClick={() => setMobileOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                style={{ display: 'block', height: 1, background: 'var(--text)', borderRadius: 1, transformOrigin: 'center' }}
                animate={
                  mobileOpen
                    ? i === 0 ? { rotate: 45, y: 6 }
                    : i === 1 ? { opacity: 0 }
                    : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.25, ease: EASE }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: EASE }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, zIndex: 99,
              background: 'var(--bg)', borderBottom: '1px solid var(--border)',
              padding: '1.5rem clamp(1.5rem, 5vw, 3rem)',
              display: 'flex', flexDirection: 'column', gap: '1.2rem',
              transition: 'background 500ms, border-color 500ms',
            }}
          >
            {NAV_LINKS.map(({ num, label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link${activeSection === id ? ' active' : ''}`}
                style={{ fontSize: '0.85rem' }}
                onClick={(e) => { e.preventDefault(); handleLink(id); }}
              >
                <span className="nav-num">{num}</span>
                {label}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem', flexWrap: 'wrap' }}>
              <a
                href="https://drive.google.com/uc?export=download&id=11f1Jnu_bl45oyFZPO0WtgQ9_arbtw8x8" download="Ishan_Bhoir_Resume.pdf"
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.5rem 1rem', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', textDecoration: 'none', borderRadius: 3,
                }}
                onClick={() => setMobileOpen(false)}
              >
                Resume ↓
              </a>
              <button
                onClick={() => { setMobileOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.5rem 1rem',
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)',
                  color: '#fff', border: 'none', borderRadius: 3, cursor: 'pointer',
                }}
              >
                Let's Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
