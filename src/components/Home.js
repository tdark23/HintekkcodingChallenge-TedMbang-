import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  //for animation stuffs
import Loader from './Loader';

const Home = () => {
  return (
    <motion.div className="home container"
      animate = {{ opacity: 1 }}
      initial = {{ opacity: 0 }}
      transition = {{ delay: 1.5, duration: 1.5 }}
    >

      <h2>
        Welcome to MBTA APP
      </h2>

      <Link to="/routes">

        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Choose Your Road
        </motion.button>
      </Link>

      <Loader/>
    </motion.div>
  )
}

export default Home;