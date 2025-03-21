import { Menusecsbuttonstitle } from '@/Constants';
import React from 'react'
import Link from 'next/link';

const MenusecsButtons = () => {
  return (
    <div className="flex w-full justify-around items-center pt-10 md:flex-row flex-col px-2">
      <Link href={'#lunchmenu'} className='w-full flex justify-center items-center mx-2'>
        <div className="flex w-full md:h-40 h-23  m-1 rounded-2xl bg-red-300 p-3 pointer">
          <div className="flex w-full h-full rounded-2xl border-white border-2 border-solid px-6
            justify-center items-center text-2xl font-bold text-white ">
            {Menusecsbuttonstitle[0].title}
          </div>
        </div>
      </Link>
      
      <Link href={'#dinnermenu'} className='w-full flex justify-center items-center mx-2'>
        <div className="flex w-full md:h-40 h-23  m-1 rounded-2xl bg-red-300 p-3 pointer">
          <div className="flex w-full h-full rounded-2xl border-white border-2 border-solid px-6
            justify-center items-center text-2xl font-bold text-white ">
            {Menusecsbuttonstitle[1].title}
          </div>
        </div>
      </Link>

      <Link href={'#sweetsmenu'} className='w-full flex justify-center items-center mx-2'>
        <div className="flex w-full md:h-40 h-23 m-1 rounded-2xl bg-red-300 p-3 pointer">
          <div className="flex w-full h-full rounded-2xl border-white border-2 border-solid px-6
            justify-center items-center text-2xl font-bold text-white ">
            {Menusecsbuttonstitle[2].title}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenusecsButtons ;