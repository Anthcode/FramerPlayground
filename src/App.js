import React from "react";
import {motion, useAnimate} from 'framer-motion'

import "./style.css";

export default function App() {

  const spring = {
    type: "spring",
    mass: 2.5,
    damping: 18,
    stiffness: 100
  }
  return (
    <>
      <motion.div 
      transition={spring}
      animate={{
      scale: 1.1,
      x:[300], y:[0,200] }} 
      >
     WELCOME !!!
      </motion.div>
      <motion.button
      
        animate={{ x: 200 ,y:250 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: .1 },
        }}
        whileTap={{ 
       
          x:[120,150,200],
          transition: spring } }
      
      
      >button</motion.button>
      </>
  );
}
