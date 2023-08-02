import React from 'react';
import { motion, useAnimate } from 'framer-motion';

import './style.css';

export default function App() {
  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 120,
  };
  return (
    <div>
      <motion.div
       initial={{ y: -450 }} 
       transition={spring} 
       animate={{ y: 0 }}>
        WELCOME !!!
      </motion.div>

      <motion.button
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={spring}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        button
      </motion.button>
    </div>
  );
}
