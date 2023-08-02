import React from 'react';
import { motion, useAnimate } from 'framer-motion';

import './style.css';

export default function App() {
  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 260,
  };
  return (
    <div>
      <motion.div initial={{ y: -450 }} transition={spring} animate={{ y: 0 }}>
        WELCOME !!!
      </motion.div>

      <motion.button
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={(spring, { delay: 0.4 })}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        button1
      </motion.button>
      <div></div>
      <motion.button
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={(spring, { delay: 0.6 })}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        button2
      </motion.button>
    </div>
  );
}
