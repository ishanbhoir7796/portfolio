import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal } from '../data/resume';
import Toast from './Toast';

const EASE = [0.16, 1, 0.3, 1];

const PLATFORMS = [
  {
    id: 'github',
    label: 'GitHub',
    display: 'ishanbhoir7796',
    hint: 'Open →',
    action: 'open',
    href: personal.github,
    Icon: GitHubIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    display: 'ishanbhoir',
    hint: 'Open →',
    action: 'open',
    href: personal.linkedin,
    Icon: LinkedInIcon,
  },
  {
    id: 'email',
    label: 'Email',
    display: personal.email,
    hint: 'Click to copy',
    action: 'copy',
    href: null,
    Icon: EmailIcon,
  },
  {
    id: 'location',
    label: 'Location',
    display: personal.location,
    hint: null,
    action: 'none',
    href: null,
    Icon: LocationIcon,
  },
];

function GeoAbstract() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
        animation: 'abstract-pulse 12s ease-in-out infinite',
      }}
    >
      <svg width="100%" height="100%" style={{ opacity: 0.038 }}>
        <defs>
          <pattern
            id="contact-geo"
            x="0" y="0" width="72" height="72"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="72" height="72" fill="none" stroke="var(--accent)" strokeWidth="0.35" />
            <circle cx="36" cy="36" r="2.5" fill="var(--accent)" opacity="0.6" />
            <circle cx="0" cy="0" r="1.2" fill="var(--accent)" opacity="0.35" />
            <circle cx="72" cy="0" r="1.2" fill="var(--accent)" opacity="0.35" />
            <circle cx="0" cy="72" r="1.2" fill="var(--accent)" opacity="0.35" />
            <circle cx="72" cy="72" r="1.2" fill="var(--accent)" opacity="0.35" />
            <line x1="36" y1="0" x2="36" y2="72" stroke="var(--accent)" strokeWidth="0.2" opacity="0.4" />
            <line x1="0" y1="36" x2="72" y2="36" stroke="var(--accent)" strokeWidth="0.2" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-geo)" />
      </svg>
    </div>
  );
}

function PlatformCard({ platform, index, inView, onCopy }) {
  const [hov, setHov] = useState(false);
  const clickable = platform.action !== 'none';

  const handleClick = () => {
    if (platform.action === 'copy') navigator.clipboard.writeText(platform.display).then(onCopy);
    else if (platform.action === 'open') window.open(platform.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.14 + index * 0.08, duration: 0.85, ease: EASE }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={clickable ? handleClick : undefined}
      data-cursor-hover={clickable || undefined}
      style={{
        padding: 'clamp(1rem, 2vw, 1.6rem)',
        border: '1px solid',
        borderColor: hov && clickable ? 'var(--accent)' : 'var(--border)',
        borderRadius: 6,
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        cursor: clickable ? 'pointer' : 'default',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        transform: hov && clickable ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hov && clickable
          ? '0 0 0 1px var(--accent-glow), 0 14px 40px rgba(0,0,0,0.3)'
          : 'none',
        display: 'flex', flexDirection: 'column', gap: '0.85rem',
        minHeight: 44,
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 4,
        border: '1px solid',
        borderColor: hov && clickable ? 'var(--accent)' : 'var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hov && clickable ? 'var(--accent)' : 'var(--text-muted)',
        transition: 'border-color 280ms, color 280ms', flexShrink: 0,
      }}>
        <platform.Icon />
      </div>

      <div style={{ minWidth: 0 }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 'clamp(0.44rem, 0.72vw, 0.5rem)',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: hov && clickable ? 'var(--accent)' : 'var(--text-subtle)',
          marginBottom: '0.3rem', transition: 'color 280ms',
        }}>
          {platform.label}
        </p>
        <p style={{
          fontFamily: platform.id === 'location' ? 'Inter, sans-serif' : 'JetBrains Mono, monospace',
          fontSize: 'clamp(0.6rem, 1vw, 0.76rem)',
          color: 'var(--text)', fontWeight: 500,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          transition: 'color 280ms',
        }}>
          {platform.display}
        </p>
        {platform.hint && (
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.46rem, 0.75vw, 0.52rem)',
            color: hov && clickable ? 'var(--accent)' : 'var(--text-subtle)',
            marginTop: '0.25rem', letterSpacing: '0.06em',
            transition: 'color 280ms',
          }}>
            {platform.hint}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2400);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 3rem)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <GeoAbstract />

      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          06 · Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 1.0, ease: EASE }}
          style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: 'clamp(2.5rem, 8vw, 7rem)', lineHeight: 0.95,
            marginBottom: '1.4rem', letterSpacing: '-0.03em',
            color: 'var(--text)', transition: 'color 500ms',
          }}
        >
          LET'S TALK.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.16, duration: 0.9, ease: EASE }}
          style={{
            fontWeight: 300, fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
            color: 'var(--text-muted)', lineHeight: 1.8,
            maxWidth: 480, margin: '0 auto 3rem',
            transition: 'color 500ms',
          }}
        >
          Open to full-time roles, collaborations, and interesting problems.
        </motion.p>

        <div
          className="contact-cards-row"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(0.75rem, 1.5vw, 1rem)',
            textAlign: 'left',
          }}
        >
          {PLATFORMS.map((platform, i) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              index={i}
              inView={inView}
              onCopy={handleCopy}
            />
          ))}
        </div>
      </div>

      <Toast visible={toastVisible} message="Email copied to clipboard" />
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
