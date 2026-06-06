import { AnimatePresence, motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function Toast({ visible, message }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="toast"
          initial={{ y: 20, opacity: 0, scale: 0.94 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 10, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.32, ease: EASE }}
        >
          {message || '✓ Copied to clipboard'}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
