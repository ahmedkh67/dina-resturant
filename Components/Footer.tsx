import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/Constants'

const Footer = () => {
  return (
    <footer className='flex flex-col 
     border-t border-gray-100'>
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5
        sm:px-16 px-6 pt-10">
            <div className="flex flex-col justify-start items-start
            gap-6">
                <h1 className='text-4xl font-bold  text-black '>
                  Dina
                </h1>
                

            </div>

            <div className="footer__links flex-1 w-full flex md:justify-between flex-wrap max-md:mt-10 gap-4">

                {footerLinks.map((Linkk) => (
                    <div key={Linkk.title}
                    className='footer__link flex flex-col gap-2 text-base min-w-[170px] text-black  '
                    >
                        <h3 className='font-bold
                        '>{Linkk.title}</h3>
                        {Linkk.links.map((item) => (
                            <Link key={item.title}
                            href={item.url}
                            className="text-gray-500">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

        </div>
        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
            <p>@2025 Dina. All rights reserved</p>

            <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                <Link href="/" className="text-gray-500">
                    Privacy & Policy
                </Link>
                <Link href="/" className="text-gray-500">
                    Terms & Condition
                </Link>
            </div>
        </div>

    </footer>
  )
}

export default Footer ;