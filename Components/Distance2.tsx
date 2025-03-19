"use client "

import React from 'react'
import { motion } from "framer-motion"; 
import { Resarvesec } from '@/Constants';
import Link from 'next/link';

const Distance2 = () => {
  return (
    <div className="flex w-full md:py-10 py-5 justify-between items-center Hero_Background1 bg-black  md:px-60 px-5 flex-col md:flex-row">
        <div className="flex flex-col justify-evenly items-start">
            
            <h1 className='md:text-5xl text-4xl text-white  font-bold '>
                {Resarvesec.Title}
            </h1>
            <p className='text-xl text-gray-300 '>
                {Resarvesec.Dis}
            </p>
        </div>
        <div className="flex justify-start items-center w-full md:w-1/2">
        {/* <motion.div
                           initial={{ scale: 0}}
                          whileInView={{ scale: 1}}
                          
                          ></motion.div> */}
            <Link href={'/Reservation'} className='w-full' ><button className=' text-2xl py-5 my-2 font-bold bg-white border-white border-[2px] border-solid w-full rounded-2xl'>
                {Resarvesec.Buttontitle}
            </button>
            </Link>
        
        </div>
    </div>
  )
}

export default Distance2 ;