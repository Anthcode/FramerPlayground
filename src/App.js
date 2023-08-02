import React from 'react';
import { motion, useAnimate } from 'framer-motion';

import './style.css';

export default function App() {
  const txt = 'RANDOM TEXT';

  const tabTxt = txt.split('');
  console.log(tabTxt);

  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 260,
  };
  return (
    <div className="app">
      <div className="text-fly">
        {tabTxt.map((letter, idx) => {
          return (
            <motion.p
              key={idx}
              initial={{ x: '100vw', opacity: 0, scale: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: idx * 0.2 }}
            >
              {letter}
            </motion.p>
          );
        })}
      </div>
      <motion.div initial={{ y: -450 }} transition={spring} animate={{ y: 0 }}>
        WELCOME !!!
      </motion.div>
      <motion.button
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={(spring, { duration: 1 })}
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
        transition={(spring, { duration: 1 })}
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
