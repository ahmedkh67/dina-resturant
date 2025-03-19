import React from 'react'
import Link from 'next/link'
import { GalleryButtontypes } from '@/types';

function GalleryButton({title , link, bio }: GalleryButtontypes ){
  return (
    <div className="flex flex-col md:flex-row w-full md:p-6 p-2 pb-6 justify-center overflow-hidden items-center">
      <Link href={link} className='w-full'>
        <button className='bg-black  text-white w-full py-2 pointer rounded-xl'>
          <p className='text-center md:text-6xl text-3xl font-bold pointer '>
            {title}        
          </p>
        
        </button>
      </Link>
      <h1 className='w-full text-2xl font-bold md:pl-6 mt-3 md:mt-0'>
        {bio}
      </h1>
      </div>
  )
}

export default GalleryButton ;