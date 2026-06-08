import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE = 'a, button, [role="button"], [data-cursor-hover], input, select, textarea, summary, .skill-pill';

export default function CursorGlow({ isDark }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const glowRef = useRef(null);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 50, mass: 0.25 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 50, mass: 0.25 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
      const isInter = !!(e.target?.closest?.(INTERACTIVE));
      setHovered(prev => prev !== isInter ? isInter : prev);
      if (isDark && glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(34, 211, 238, 0.055), transparent 72%)`;
      }
    };
    const onLeave = () => { setVisible(false); setHovered(false); };
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, [isDark, mouseX, mouseY]);

  // Dot grows slightly on hover; glow blooms visibly
  const br = '50%';
  const w = hovered ? 9 : 6;
  const h = hovered ? 9 : 6;
  let bg, shadow;
  if (isDark) {
    bg = 'rgba(34, 211, 238, 1)';
    shadow = hovered
      ? '0 0 14px 6px rgba(34, 211, 238, 0.7), 0 0 32px 12px rgba(34, 211, 238, 0.25)'
      : '0 0 6px 1px rgba(34, 211, 238, 0.45)';
  } else {
    bg = 'rgba(2, 132, 199, 1)';
    shadow = hovered
      ? '0 0 14px 6px rgba(2, 132, 199, 0.65), 0 0 32px 12px rgba(2, 132, 199, 0.22)'
      : '0 0 5px 1px rgba(2, 132, 199, 0.35)';
  }

  return (
    <>
      {/* Dark mode spotlight glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0,
          pointerEvents: 'none', zIndex: 1,
          opacity: isDark && visible ? 1 : 0,
          transition: 'opacity 400ms',
        }}
      />

      {/* Cursor shape — position via Framer springs, shape via CSS transitions */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
          width: w,
          height: h,
          borderRadius: br,
          backgroundColor: bg,
          boxShadow: shadow,
          opacity: visible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, box-shadow 0.2s ease, opacity 0.3s ease',
        }}
      />
    </>
  );
}
