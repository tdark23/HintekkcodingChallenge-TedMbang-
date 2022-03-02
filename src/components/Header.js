import React from 'react';
import { motion } from 'framer-motion'; //for animation stuffs

const Header = () => {
  return (
    <header>
      <motion.div className="title"
        animate = {{ y: -10}}
        initial = {{ y: -250}}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <h1>Hintekk Challenge</h1>
      </motion.div>
    </header>
  )
}

export default Header;
