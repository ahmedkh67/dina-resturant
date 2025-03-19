import React from 'react'
import Chefhat from '@/public/Chef hat Icon.svg'
import Arrow from "@/public/Arrow2Icon.svg"
import Image from 'next/image'
import Emailicon from '@/public/Email Icon.svg'
import Insticon from '@/public/instagram-svgrepo-com (1).svg'
import Whatsicon from '@/public/whatsapp-128-svgrepo-com.svg'
import Linkedicon from '@/public/Linked in Icon.svg'
import { TeamCardTypes } from '@/types'

function TeamCard({Name , Role}: TeamCardTypes ){
  return (
    <div className="flex w-64 h-80 bg-gray-200 rounded-xl flex-col overflow-hidden">
        <div className="flex w-full h-full bg-black Personb">

        </div>
        <div className="flex w-full h-1/2 flex-col justify-evenly items-start p-3 ">
            <div className="flex w-full h-full flex-col justify-center items-start ">
                
                <h1 className='text-2xl text-center font-bold'>
                    {Name}
                </h1>
                
                <p className='text-sm text-center'>
                    {Role}
                </p>
                
            </div>
            <div className="flex w-full h-full">
                <div className="flex w-full h-full justify-start items-center opacity-70">
                    <Image src={Whatsicon} alt={'icon '} width={30} className='mr-2' />
                    <Image src={Insticon} alt={'icon '} width={35} className='mr-1' />
                    
                    <Image src={Linkedicon} alt={'icon '} width={30} className='mx-2 hg'/>
                    
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default TeamCard ;