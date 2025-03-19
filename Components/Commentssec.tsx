"use client"

import React from 'react'
import { CommentBox } from '.'

import {Autoplay ,Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Commentsecc } from '@/Constants';
import Image from 'next/image';
import WriteIcon from '@/public/Writeicon.svg'

const Commentssec = () => {
  return (
    <>
      <div className="flex w-full justify-start flex-col items-start bg-gray-200  md:pl-25 pl-6">
      
          <h1 className='md:text-4xl text-2xl text-start font-bold mt-12'>
              Get to know our History
          </h1>
          <h1 className='md:text-3xl text-xl text-start w-3/4 md:w-1/2'>
          a honored resturant that bulit on passion , love , and consisty , 
          </h1>
        </div>
    <div className="flex w-full py-20 justify-center items-center Comments_Backgroundd bg-gray-200   md:px-30 px-6 ">
        

        <Swiper
        modules={[Autoplay, Pagination , Scrollbar]}
        pagination={true}
        slidesPerView={1}
        breakpoints={
            {
              800: {
                slidesPerView: 3
              }
            }
          }
          
        scrollbar
        loop={true}
        autoplay={{delay: 2500 ,
            disableOnInteraction: false
        }}
        spaceBetween={100}
         className='flex justify-center items-center ' >

          {Commentsecc.map((item) => (
            <SwiperSlide className='flex justify-center items-center'>
            <CommentBox name={item.name} comment={item.comment}
             src={item.src} rate={item.rate} />
            </SwiperSlide>
          ))}
            

            


        </Swiper>

        
        
    </div>
    {/*          writebutton vvvv 
    <div className="flex w-30 h-30 bg-black rounded-lg justify-center items-center">
          <Image src={WriteIcon} alt={'writeicon'} width={30} height={30} />
        </div>
    */}
    
    </>
  )
}

export default Commentssec