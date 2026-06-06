import { useCallback } from 'react';
import { useTheme } from './hooks/useTheme';
import PageLoader from './components/PageLoader';
import BackgroundMesh from './components/BackgroundMesh';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechMarquee from './components/TechMarquee';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import SectionDivider from './components/SectionDivider';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function NoiseOverlay() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0,
        width: '100vw', height: '100vh',
        pointerEvents: 'none', zIndex: 3,
        opacity: 'var(--noise-opacity)',
        transition: 'opacity 500ms',
      }}
    >
      <filter id="grain-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  );
}

function DotGrid({ isDark }) {
  if (isDark) return null;
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(2,132,199,0.18) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        opacity: 0.38,
      }}
    />
  );
}

export default function App() {
  const { isDark, toggle } = useTheme();
  const handleLoaderComplete = useCallback(() => {}, []);

  return (
    <>
      <PageLoader onComplete={handleLoaderComplete} />

      <NoiseOverlay />
      <DotGrid isDark={isDark} />
      <BackgroundMesh isDark={isDark} />
      <CustomCursor isDark={isDark} />
      <Navbar isDark={isDark} toggle={toggle} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <TechMarquee />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
