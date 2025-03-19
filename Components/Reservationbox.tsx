import React from 'react'

const Reservationbox = () => {
  return (
    <div className="flex bg-white  md:w-8/10 w-9/10 h-full rounded-2xl flex-col justify-start items-center py-5 px-10">
        <h1 className='text-center text-3xl font-bold'>
          Reserve a table
        </h1>
        <form action="" className='w-full flex flex-col justify-start my-5'>
          
          <div className="flex w-full justify-between my-b md:flex-row flex-col">
            <label htmlFor="Nameinput" className='' >
              <input type="text" name='Nameinput' id='Nameinput' className='md:w-120 md:my-5 w-full h-10 border-1 border-black border-solid px-5 rounded-lg' placeholder='Name :' />
            </label>

            <label htmlFor="Nameinput" className=' ' >
              <input type="text" name='Nameinput' id='Nameinput' className='my-5 md:w-120 w-full h-10 border-1 border-black border-solid px-5 rounded-lg' placeholder='Email :'  />
            </label>
          </div>

          <div className="flex w-full justify-between  md:flex-row flex-col">
            <label htmlFor="Nameinput" className=' ' >
              <input type="text" name='Numberinput' id='Numberinput' className='md:w-120 md:my-5 w-full h-10 border-1 border-black border-solid rounded-lg px-5' placeholder='Phone Number :' />
            </label>

            <label htmlFor="Nameinput" className=' ' >
              <select name='Nameinput' id='Nameinput' className='my-5 md:w-120 w-full h-10 border-1 border-black border-solid px-5 rounded-lg' > 
                <option value={''}  className='w-full '>Number of Person</option>
                <option value={1}>1 </option>
                <option value={2}>2 </option>
                <option value={3}>3 </option>
                <option value={4}>4 </option>
                <option value={5}>5 </option>
                <option value={6}>6 or more </option>
                
              </select>
            </label>
          </div>
          <div className="flex w-full justify-between mb-5  md:flex-row flex-col">
            <label htmlFor="Nameinput" className='  ' >
              <input type="date" name='Nameinput' id='Nameinput' className='md:w-120 md:my-5 w-full h-10 border-1 border-black border-solid px-5 rounded-lg' placeholder='Date :' />
            </label>

            <select name='Nameeinput' id='Nameeinput' className='my-5 md:w-120 w-full h-10 border-1 border-black border-solid px-5 rounded-lg' > 
                <option value={''}  className=''>Pick time</option>
                <option value={2}> 2AM - 4AM </option>
                <option value={3}> 4AM - 6AM </option>
                <option value={4}> 6AM - 8AM </option>
                <option value={5}> 12PM - 2PM </option>
                <option value={6}> 2PM - 4PM </option>
                <option value={7}> 4PM - 6PM </option>
                <option value={8}> 6PM - 8PM </option>
                <option value={9}> 8PM - 10PM </option>
                <option value={10}> 10PM - 12AM </option>
                
                
                
              </select>
          </div>
          
          <button className='w-full h-20 bg-black  rounded-lg pointer text-xl text-white  text-center' type='submit' onClick={() => {
            alert("Thanks for your resarvation , Barcode has Been sent on your Email ,")
          }} >           
              Book now
          </button>
        </form>

      </div>
  )
}

export default Reservationbox