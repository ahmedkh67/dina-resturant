"use client"

import React from 'react'
import Morebox from './Morebox';
import { Moreboxes } from '@/Constants';
import { motion } from "framer-motion"; 




const Moresec = () => {
  return (
    <div id='moresec' className="flex w-full flex-col md:flex-row bg-gray-200 md:justify-around items-start justify-around">
      
      {Moreboxes.map((item) => (
         <motion.div className=''
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            
            >
        <Morebox title={item.MoreBoxtitle} 
        bio={item.MoreBoxbio} srcs={item.MoreBoxsrc} />
        </motion.div>
      ))}
    
    </div>  
    )
}

export default Moresec ;
