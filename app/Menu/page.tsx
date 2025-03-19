"use client"

import { Commentssec, MenuSlider, Navbar,Distance2, GalleryButton, MenusecsButtons, Lunchmenu, Dinnermenu, Sweetsmenu, OfferCard, Offers } from '@/Components'
import React from 'react'
import { Gallerybuttontitle, Menuhero, offerCard } from '@/Constants'
import Moresec from '@/Components/Moresec'



const page = () => {
  return (
    <>
    <div className="Hero_Background flex w-full bg-black flex-col justify-between items-center overflow-hidden pb-20">
      <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start md:px-[10%]">
        
        <h1 className="md:text-[170px] text-[60px] font-bold text-white pl-[10%] upanimate">
            {Menuhero} 
            
        </h1>
        <div className="flex w-full ">
          <div className="flex items-end md:justify-between justify-center w-full upanimate2">

              <OfferCard title={offerCard.title} bio={offerCard.bio}
              btntitle={offerCard.btntitle} />

              <div className="md:flex hidden ">
              <OfferCard title={offerCard.title} bio={offerCard.bio}
              btntitle={offerCard.btntitle} />
              </div>
              <div className="md:flex hidden ">
              <OfferCard title={offerCard.title} bio={offerCard.bio}
              btntitle={offerCard.btntitle} />
              </div>
                          
        </div>
      </div>

        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 text-3xl">
            
        </h1>
        
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center w-full md:px-[4%] md:gap-1">
        <Offers linkk={"/Menu"} />
        <Offers linkk={"/Gallery"} />
    </div>


    <section id='menumoresec' className='w-full' >
      <MenuSlider />
      <GalleryButton title={Gallerybuttontitle} link={'/Gallery'} bio={'Check our photos taken from the kitchen !'} />
      
    </section>
    

    <div className="flex w-full justify-center flex-col items-center">
      
      <h1 className='md:text-4xl text-2xl text-center font-bold mt-12'>
        Get to know our History
      </h1>

      <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2'>
        a honored resturant that bulit on passion , love , and consisty , 
      </h1>
    
      <MenusecsButtons />
    </div>

    
      
    
    
    <Lunchmenu />
    <MenuSlider />
    <Distance2 />
    
    <Dinnermenu />

    <Sweetsmenu />
    <Moresec />
    <div className="flex flex-col md:flex-row justify-evenly py-8 bg-gray-200 items-start pl-6 md:pl-0">
            
            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />

            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />

            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />
        </div>
    <Commentssec />
    
  
  </>
  )
}

export default page