"use client "

import { Commentssec, Distance2, Distancesec, GalleryButton , Menulist, Menusec, MenuSlider, Navbar, OfferCard, Offers, Teamsec, MenusecsButtons } from "@/Components";
import Moresec from "@/Components/Moresec";
import {Gallerybuttontitle, Herosec } from "@/Constants";
import Link from "next/link";
import Historysec from "@/Components/Historysec"; 
import { offerCard } from "@/Constants";

export default function Home() {
   
    return (
        <>
    <div className="flex w-full h-full justify-center items-center md:pt-10">

        
        <div className="Hero_Background flex md:w-[92%] w-full md:rounded-lg bg-black md:h-screen h-full flex-col justify-between items-center overflow-hidden pb-20">
            
            <Navbar /> 
            <div className="flex w-full h-full md:flex-row flex-col-reverse justify-evenly items-start md:px-[10%] px-[4%]">
                 <div className="flex flex-col w-full">
                 <h1 className="md:text-[100px] text-[60px] font-bold text-white upanimate">
                        {Herosec.Hero_title}
                    </h1>
            
                <h1 className="text-start text-2xl text-gray-300 md:w-[70%] w-[80%] my-2 pb-6 upanimate2">
                    {Herosec.Hero_Dis}
                </h1> 
                <h1 className="text-start text-2xl text-gray-300 md:w-[70%] hidden md:flex w-[80%] my-2 pb-6 upanimate2">
                    {Herosec.Hero_Dis}
                </h1>
                
                <Link href={"#moresec"}>
                <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] upanimate3">
                    {Herosec.Hero_Button}
                </button>
                </Link>
                
                 </div>
                 <div className="flex items-end justify-center">

                    <OfferCard title={offerCard.title} bio={offerCard.bio}
                     btntitle={offerCard.btntitle} />
                 </div>
                
                 
            </div>
        </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center w-full md:px-[4%] md:gap-1">
        <Offers linkk={"/Menu"} />
        <Offers linkk={"/Gallery"} />
    </div>
            
        
        <MenuSlider />
        
        <GalleryButton title={Gallerybuttontitle} link={'/Gallery'} bio={"Check our photos taken from the kitchen !"} />
        <div className="flex w-full pb-8 ">
            <MenusecsButtons />
        </div>
        <Moresec />
        <div className="flex w-full justify-start flex-col items-start bg-gray-200 dark:bg-[#161616fb] md:pl-25 pl-6">
      
            <h1 className='md:text-4xl text-2xl text-start font-bold mt-12'>
                Get to know our History
            </h1>
            <h1 className='md:text-3xl text-xl text-start w-3/4 md:w-1/2'>
            a honored resturant that bulit on passion , love , and consisty , 
            </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly py-8 bg-gray-200 dark:bg-[#161616fb] items-start pl-6 md:pl-0">
            
            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />

            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />

            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />
        </div>

        <Historysec />
       
        <Distancesec />
        <Menusec />
        <Distance2 />
        <MenuSlider />
        <Menulist />
        
        <GalleryButton title={"View Menu"} link={'/Menu'} bio={'Our best and tasty deshes waiting for u !'} />
        
        <div className="flex w-full justify-start flex-col items-start bg-gray-200 dark:bg-[#161616fb] md:pl-25 pl-6">
      
            <h1 className='md:text-4xl text-2xl text-start font-bold mt-12'>
                Get to know our History
            </h1>
            <h1 className='md:text-3xl text-xl text-start w-3/4 md:w-1/2'>
            a honored resturant that bulit on passion , love , and consisty , 
            </h1>
        </div>
        
        <div className="flex flex-col md:flex-row justify-evenly py-8 bg-gray-200 dark:bg-[#161616fb] items-start pl-6 md:pl-0">
            
            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />

            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />

            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />
        </div>

        <Commentssec />
        <Teamsec />
        
        </>
    )
}
