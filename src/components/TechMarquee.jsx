import { motion } from 'framer-motion';

const ROW1 = "JAVA · SPRING BOOT · MICROSERVICES · REST APIs · AWS · DOCKER · MONGODB · DISTRIBUTED SYSTEMS · CI/CD · ";
const ROW2 = "KUBERNETES · SPRING SECURITY · JENKINS · OPENSHIFT · POSTGRESQL · PYTHON · JWT · REACT · MAVEN · ";

function Row({ text, direction = 1, duration = 38 }) {
  return (
    <motion.div
      animate={{ x: direction > 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      style={{ display: 'inline-flex' }}
    >
      {[0, 1].map(i => (
        <span
          key={i}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.72rem, 1.4vw, 1rem)',
            letterSpacing: '0.14em',
            color: 'var(--text)',
            opacity: 0.1,
            paddingRight: '4rem',
            transition: 'color 500ms',
          }}
        >
          {text}
        </span>
      ))}
    </motion.div>
  );
}

export default function TechMarquee() {
  return (
    <div
      aria-hidden="true"
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1.4rem 0',
        userSelect: 'none',
        display: 'flex', flexDirection: 'column', gap: '0.8rem',
        transition: 'border-color 500ms',
      }}
    >
      <Row text={ROW1} direction={1} duration={36} />
      <Row text={ROW2} direction={-1} duration={42} />
    </div>
  );
}
