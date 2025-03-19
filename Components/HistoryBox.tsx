import React from 'react'
import { motion } from "framer-motion"; 


function HistoryBox () {
  return (
    <motion.div className=''
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}

      >
    <div className="flex p-4 bg-black  rounded-xl mb-20">
        <h1 className='text-2xl text-white  font-bold'>
            1998
        </h1>
    </div></motion.div>
  )
}

export default HistoryBox ;