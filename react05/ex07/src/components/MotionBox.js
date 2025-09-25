import React from 'react';
import { motion } from 'framer-motion';

export default function MotionBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      style={{
        background: '#007bff',
        padding: '20px',
        color: '#fff',
        borderRadius: '6px',
        marginTop:'10px'
      }}
    >
      Framer Motion Box
    </motion.div>
  );
}
