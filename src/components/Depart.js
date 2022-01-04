import React from 'react';
import { motion } from 'framer-motion';


const Depart = ( { road } ) => {

    const date = new Date().toLocaleTimeString();

    return (
        <motion.div className="container departure"
            initial = {{ x: '100vw' }}
            animate = {{ x: 0 }}
            transition={{ type: 'spring', delay: 0.5 }}
        >
            <h2>Thank you ! 🙂</h2>
            <p>The next departure time for the {road.route.name} route, at {road.stops} stop is : {date} </p>

            <a href="/">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                >
                   Home
                </motion.button>
            </a>
    </motion.div>
    )
}

export default Depart;