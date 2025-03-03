import React from 'react'

import {Commentssec, Distance2, Distancesec, Historyline, Menusec, Navbar, Teamsec,MenuSlider } from "@/Components";
import Link from "next/link";
import Image from 'next/image';
import ArrowIcon from '@/public/Arrow2Icon.svg'
import Moresec from '@/Components/Moresec';
import HomeIcon from '@/public/homeIcon.svg'
import AboutIcon from '@/public/aboutIcon.svg'
import MenuIconn from '@/public/menu3Icon.svg'
import ReserveIcon from '@/public/write-svgrepo-com (3).svg'




const page = () => {
  return (
    <>
    <div className="History_Background flex w-full bg-black md:h-screen flex-col justify-between items-center overflow-hidden pb-20">
    <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start px-[10%]">
      
        <h1 className="md:text-[170px] text-[60px] font-bold text-white">
            About us
        </h1>
        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 text-3xl">
                    About us / History
        </h1>
        
        
        
      </div>
      <Link href={"#historymoresec"}>
        <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] rounded-xl">
          <Image src={ArrowIcon} alt={'down arrow icon'} width={45} className='rotate-90 pointer ' />
        </button>
        </Link>
    </div>

    <Moresec />
    
    <div className="flex w-full justify-center flex-col items-center">
      
      <h1 className='md:text-4xl text-2xl text-center font-bold mt-12'>
        Get to know our History
      </h1>
      <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2'>
        a honored resturant that bulit on passion , love , and consisty , 
      </h1>
    </div>
      <section id='historymoresec'>

      </section>
      <Historyline />
      <Teamsec />
      <Distancesec />
      <MenuSlider />
      <Menusec />
      <Distance2 />
      <Commentssec />
      <div className="flex md:hidden bg-white w-full py-6 px-6 absolute left-0 bottom-0 z-10 justify-evenly items-center fixed ">
            <Link href={'././'}>
                <Image src={HomeIcon} alt={"home icon "} width={30} height={30} />
            </Link>
            <Link href={'/History'}>
                <Image src={AboutIcon} alt={"home icon "} width={35} height={30} />
            </Link>
            <Link href={'/Menu'}>
               <Image src={MenuIconn} alt={"home icon "} width={35} height={30} />
            </Link>
            <Link href={'/Reservation'}>
               <Image src={ReserveIcon} alt={"home icon "} width={35} height={30} />
            </Link>

            
            
           
            
        </div>
  
    
    
    </>
  )
}

export default page ;