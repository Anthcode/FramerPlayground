import React from 'react';
import { motion, useAnimate } from 'framer-motion';

import './style.css';

export default function App() {
  const spring = {
    type: 'spring',
    damping: 9,
    stiffness: 150,
  };
  return (
    <>
      <motion.div
        initial={{ y: -250 }}
        transition={spring}
        animate={{
          scale: 1.1,
          x: 0,
          y: 0,
        }}
      >
        WELCOME !!!
      </motion.div>

      <motion.button
        initial={{ x: -300 }}
        animate={{ x: 0, y: 0 }}
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
    </>
  );
}
