import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  //for animation stuffs

const Stops = ({ addStop, road }) => {

  // just dummy datas
  
  let stops = [
    'Washington St opp Euston Rd',
    '1248 Randolph Ave', 'Nahant St @ W Baltimore St',
    'Terminal B Stop 2 - Arrivals Level',
    'Union St @ Union Ct',
    'McClellan Highway @ Addison St'
  ];

  return (
    <motion.div className="container"
    initial = {{ x: '100vw' }}
    animate = {{ x: 0 }}
    transition={{ type: 'spring', delay: 0.5 }}
    >
      
      <h3>Step 2: Select Your Stop</h3>
      <ul>
        {stops.map(stop => {
          let spanClass = road.stops.includes(stop) ? 'active' : '';
          return (
            <motion.li key={stop} onClick={() => addStop(stop)}
              whileHover = {{ scale: 1.3, color: '#f8e112', originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ stop }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/direction">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Next
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Stops;