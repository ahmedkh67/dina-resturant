import React from 'react'

import {Commentssec, Historysec, MenuSlider, Navbar, TeamCards, Menusec, GalleryButton,Distance2 } from "@/Components";
import Link from "next/link";
import Image from 'next/image';
import ArrowIcon from '@/public/Arrow2Icon.svg'
import Moresec from '@/Components/Moresec';
import { Menusecsbuttonstitle } from '@/Constants';




const page = () => {
  return (
    <>
    <div className="Team_Background flex w-full bg-black md:h-screen flex-col justify-between items-center overflow-hidden pb-20">
    <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start px-[10%]">
        
        <h1 className="md:text-[170px] text-[60px] font-bold text-white">
            About us
            
        </h1>
        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 text-3xl">
                    About us / Our team
        </h1>
        
        
        
      </div>
      <Link href={"#moresec"}>
        <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] rounded-xl">
          <Image src={ArrowIcon} alt={'down arrow icon'} width={45} className='rotate-90 pointer ' />
        </button>
        </Link>
    </div>

    <div className="flex w-full justify-center flex-col items-center">
      
        <h1 className='md:text-4xl text-2xl text-center font-bold mt-6'>
          Get to know our team
        </h1>
        <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2'>
          Best Members to make sure the custmer get the best advice , 
        </h1>
    </div>

    <TeamCards />
    <Moresec />
    <Commentssec />

    <Historysec />
    <MenuSlider />
    <GalleryButton title={'Gallery'} link={'/Gallery'} bio={'Pics of our delecious food !'} />
    <div className="flex w-full ">                
            <div className="flex w-full justify-around items-center pt-10 md:flex-row flex-col px-2">
                <Link href={'/Menu'} className='w-full flex justify-center items-center mx-2'>
                    <div className="flex w-full md:h-40 h-23  m-1 rounded-2xl bg-red-300 p-3 pointer">
                    <div className="flex w-full h-full rounded-2xl border-white border-2 border-solid px-6
                        justify-center items-center text-2xl font-bold text-white ">
                        {Menusecsbuttonstitle[0].title}
                    </div>
                    </div>
                </Link>
                
                <Link href={'/Menu'} className='w-full flex justify-center items-center mx-2'>
                    <div className="flex w-full md:h-40 h-23  m-1 rounded-2xl bg-red-300 p-3 pointer">
                    <div className="flex w-full h-full rounded-2xl border-white border-2 border-solid px-6
                        justify-center items-center text-2xl font-bold text-white ">
                        {Menusecsbuttonstitle[1].title}
                    </div>
                    </div>
                </Link>

                <Link href={'/Menu'} className='w-full flex justify-center items-center mx-2'>
                    <div className="flex w-full md:h-40 h-23 m-1 rounded-2xl bg-red-300 p-3 pointer">
                    <div className="flex w-full h-full rounded-2xl border-white border-2 border-solid px-6
                        justify-center items-center text-2xl font-bold text-white ">
                        {Menusecsbuttonstitle[2].title}
                    </div>
                    </div>
                </Link>
            </div>                
        </div>
    <Menusec />
    <Distance2 />
    
    </>
  )
}

export default page ;