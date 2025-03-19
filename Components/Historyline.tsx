"use client"

import React from 'react'
import HistoryBox from './HistoryBox';
import HistoryImgBox from './HistoryImgBox';

const Historyline = () => {
  return (
    <>
    <div className="flex w-full h-full justify-center ">
        <div className="flex w-1 h-full my-20 bg-neutral-700 flex-col justify-between items-center  ">
            
            <HistoryImgBox />
            <HistoryBox />
            

            <HistoryBox />

            <h1 className='text-xl mb-20'>
                wdwdwdawdawdwdawdawd
            </h1>
            <HistoryImgBox />
            <HistoryBox />

            <h1 className='text-xl mb-20'>
                wdwdwdawdawdwdawdawd
            </h1> <HistoryBox />

            <h1 className='text-xl mb-20'>
                wdwdwdawdawdwdawdawd
            </h1>
            <HistoryImgBox />
            
            <HistoryBox />

            <h1 className='text-xl mb-20'>
                wdwdwdawdawdwdawdawd
            </h1>
            <HistoryBox />
            <div className="flex bg-black w-3 h-3 rounded-full">

            </div>

        
        </div>
    </div>
    </>
    
  )
}

export default Historyline ;