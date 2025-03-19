import React from 'react'
import Image from 'next/image';
import Img1 from '@/public/Foodimg.jpg'

type Mslidertype = {
  Src : string | any
}

function MSliderComponent({ Src }: Mslidertype){

  return (
    <div className="FoodImg ">
    <Image src={Src} alt={'iuy'} width={190} height={190} className='border-2 border-red-500 border-dashed rounded-full ' >
      

    </Image>
    
   {/*  <div className="Titlesquare ">
      <h1 className='Titletext'>
        Peppotine chese
      </h1>
    </div> */} 
  
  </div>
  )
}

export default MSliderComponent ;