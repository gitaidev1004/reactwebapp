import { motion } from 'framer-motion';

export default function AnimatedAccordion({ isOpen, children }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      style={{ overflow: 'hidden', background: '#fff', borderRadius: 4 }}
    >
      {children}
    </motion.div>
  );
}
