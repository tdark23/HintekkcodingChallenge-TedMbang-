import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; //for animation stuffs

const Routes = ({ addRoute, road }) => {
  
   // just dummy datas
  const routes = [
    {
        id: 'r1',
        name: 'Riverside Station - Newton Corner ',
        type: 'Light Rail Train',
    },
    {
        id:'r2',
        name:'North Medford - Wellington Station',
        type: 'Heavy Rail Train'
    },
    {
        id: 'r3',
        name:'Elm Street, Medford - Haymarket Station',
        type: 'Heavy Rail Train'
    },
    {
        id: 'r4',
        name:'Point Shirley - Orient Heights Station via Revere Street',
        type: 'Light Rail Train'
    },
    {
        id: 'r5',
        name:'Melrose Highlands - Oak Grove or Malden Center Station',
        type:  'Heavy Rail Train'
    },
    {
        id: 'r6',
        name:'Cleary Square - Forest Hills Station',
        type: 'Light Rail Train'},
    ];

  return (
    <motion.div className="container"
      initial = {{ x: '100vw' }}
      animate = {{ x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}
    >

      <h3>Step 1: Choose Your Route</h3>
      <ul>
        {routes.map(route => {
          let spanClass = road.route.name === route.name ? 'active' : '';
          return (
            <motion.li key={route.id} onClick={() => addRoute(route)}
              whileHover = {{ scale: 1.3, color: '#f8e112', originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ route.name }. ({route.type}) </span>
            </motion.li>
          )
        })}
      </ul>

      {road.route.name && (
        <motion.div className="next"
          initial = {{ x: '100vw'}}
          animate = {{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to="/stops">
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
      )}

    </motion.div>
  )
}

export default Routes;