"use client"

import { Maps } from '@/Constants'
import React from 'react'
import { useState } from 'react'
import { serialize } from 'v8'

const Mapsec = () => {

  const [Address , setAddress] = useState("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14524.673703101556!2d39.6103803!3d24.4796205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf2a3f8fe8a3%3A0xe0cb8d99e746cfca!2sZAHA%20TAIBA%20HOTEL!5e0!3m2!1sar!2ssa!4v1737365957570!5m2!1sar!2ssa") ;
  const handleChange = (e : any) => { setAddress(e.target.value) }

  return (
    <>
    <div className="flex w-full justify-center flex-col items-center mb-12">
      
      <h1 className='md:text-4xl text-2xl text-center font-bold mt-12 '>
        WE'll Be glad to see u
      </h1>
      <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2 '>
        a honored resturant that bulit on passion , love , and consisty , 
      </h1>
    </div>
    <div className="flex w-full justify-between items-center p-6">
      <h1 className='md:text-3xl text-xl text-start font-bold '>
        Find Youre nearest Branch
      </h1>
      <select value={Address} onChange={handleChange} name='Nameeinput' id='Nameeinput' className='flex bg-black text-white pointer transition-[0.3s] hover:scale-[104%]  h-10 border-1 border-black border-solid px-3 rounded-lg' > 
            <option value={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14524.673703101556!2d39.6103803!3d24.4796205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf2a3f8fe8a3%3A0xe0cb8d99e746cfca!2sZAHA%20TAIBA%20HOTEL!5e0!3m2!1sar!2ssa!4v1737365957570!5m2!1sar!2ssa"}
             >Medinah city</option>
            <option value={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7244.186877962948!2d46.629244859713644!3d24.79225377653852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa!4v1741005258320!5m2!1sar!2ssa"}
             >Riyadh city</option>
            <option value={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2746.5262918365215!2d39.15883625296607!3d21.53241690753667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa!4v1741005378673!5m2!1sar!2ssa"}
             >Jeddah city</option>
            <option value={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1901.5953701063404!2d42.507310262229026!3d18.214521753185196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa!4v1741005435971!5m2!1sar!2ssa"}
             >Abha city</option>
            
                
      </select>
    </div>
    
    <div className="flex-col w-full h-64 bg-white justify-center items-end ">
      

    <iframe src={Address}
        width="100%" height="100%" >
        
    </iframe>
    </div>   
    </>
  )
}

export default Mapsec