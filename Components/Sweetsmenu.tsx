import React from 'react'
import { Menubox1 } from '.'

const Sweetsmenu = () => {
  return (
    <div id='sweetsmenu' className="flex w-full md:p-10 h-full flex-col justify-evenly  md:mt-10">
      <h1 className="Opacity_animate text-4xl md:text-6xl text-center m-8 font-bold ">
        Sweets Menu
      </h1>
      <hr />
      <div className="flex w-full justify-center items-center h-full md:flex-row flex-col">
        <Menubox1 />
        <Menubox1 />
      </div>

    </div>
  )
}

export default Sweetsmenu