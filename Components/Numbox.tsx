import React from 'react'
import Image from 'next/image'
import Chefhat from '@/public/Chef hat Icon.svg'
import { motion } from "framer-motion"; 
import { NumBoxesTypes } from '@/types';



function Numbox({Num , Dis , Src }: NumBoxesTypes){
  return (
    <motion.div className='md:w-56 w-8/10  m-5 md:m-12'
                            initial={{scale: 0 , rotate: 100}}
                            whileInView={{scale: 1 , rotate: 0}}
        
                            >
    <div className="flex flex-col md:flex-row w-full h-56 p-4 rounded-2xl justify-center items-center border-1 border-black  border-solid">
      <div className="flex w-full h-full border-2 border-black  border-solid rounded-xl justify-center items-center flex-col">
        
        <div className="flex w-20 h-20 rounded-full  m-2 
         border-solid justify-center items-center ">
          <Image src={Src} alt={'idonr'} width={65} height={35} />
        </div>
        
        <h1 className='text-5xl font-bold '>
        {Num}
        </h1>
        <h1 className='text-2xl '>
        {Dis}
        </h1>
      </div>
    </div></motion.div>
  )
}

export default Numbox