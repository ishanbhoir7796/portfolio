import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow({ isDark }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const glowRef = useRef(null);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 50, mass: 0.25 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 50, mass: 0.25 });

  useEffect(() => {
    if (!isDark) return;

    const glow = glowRef.current;

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
      if (glow) {
        glow.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(34, 211, 238, 0.055), transparent 72%)`;
      }
    };
    const onOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setHovered(true);
    };
    const onOut = () => setHovered(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, [isDark, mouseX, mouseY]);

  if (!isDark) return null;

  return (
    <>
      {/* Spotlight glow — Brittany Chiang style */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0,
          pointerEvents: 'none', zIndex: 1,
          opacity: visible ? 1 : 0,
          transition: 'opacity 400ms',
        }}
      />
      {/* Cursor dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          width: hovered ? 10 : 5,
          height: hovered ? 10 : 5,
          borderRadius: '50%',
          background: 'var(--accent)',
          boxShadow: hovered
            ? '0 0 14px var(--accent), 0 0 28px var(--accent-glow)'
            : '0 0 8px var(--accent)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: 'width 200ms cubic-bezier(0.16,1,0.3,1), height 200ms cubic-bezier(0.16,1,0.3,1), box-shadow 200ms, opacity 300ms',
        }}
      />
    </>
  );
}
