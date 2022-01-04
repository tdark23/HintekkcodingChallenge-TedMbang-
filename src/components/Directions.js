import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';   //for animation stuffs

const Directions = ({ addDirection, road }) => {

   // just dummy datas
  let directions = [
        'Newburyport or Rockport, North Station',
        'Charlestown, Long Wharf',
        'Nubian Station, South Station',
        'Needham Heights,South Station',
        'Boston College, Government Center',
        'Arlmont Village, Harvard Station',
        'Beth Israel Deaconess Hospital","Andrew Station',
  ];

  return (
    <motion.div className="container"
      initial = {{ x: '100vw' }}
      animate = {{ x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}
    >
      
      <h3>Step 3: Select A Direction </h3>
      <ul>
        {directions.map(direction => {
          let spanClass = road.directions.includes(direction) ? 'active' : '';
          return (
            <motion.li key={direction} onClick={() => addDirection(direction)}
              whileHover = {{ scale: 1.3, color: '#f8e112', originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ direction }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/depart">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
            Next Departure Time
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Directions;