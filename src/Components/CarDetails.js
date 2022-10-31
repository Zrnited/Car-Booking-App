import React from 'react'
import { BiCollapse } from 'react-icons/bi'

const CarDetails = () => {
  return (
    <div className='flex flex-col bg-white shadow-lg  p-6'>
        {/* FILTER DIV */}
        <div className='flex flex-col bg-red-200 w-full p-2 gap-2'>
            {/* FILTER BY && HR */}
            <div className='flex flex-col gap-2 bg-yellow-200'>
                <h1 className='font-bold text-xl'>Filter By</h1>
                <div className='bg-gray-200 h-2 w-full'></div>
            </div>

            {/* CAR TYPE */}
            <div className='w-full bg-green-200 flex flex-col gap-2'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h2 className='font-bold font-sm'>Car Type</h2>
                    <i> <BiCollapse /> </i>
                </div>
                
                <div className='flex flex-row flex-wrap gap-2'>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>Coupe (24) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>Hatchback (12) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>Sedan (16) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>MPV (28) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>SUV (20) </p>
                    </div>
                </div>
            </div>


            {/* CAPACITY */}
            <div className='w-full bg-blue-200 flex flex-col gap-2'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h2 className='font-bold font-sm'>Capacity</h2>
                    <i> <BiCollapse /> </i>
                </div>
                
                <div className='flex flex-row flex-wrap gap-2'>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>2 - 5(100) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>6 or more (4) </p>
                    </div>
                </div>
            </div>


            {/* CUSTOMER RECOMMENDATION */}
            <div className='w-full bg-blue-400 flex flex-col gap-2'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h2 className='font-bold font-sm'>Customer Recommendation</h2>
                    <i> <BiCollapse /> </i>
                </div>
                
                <div className='flex flex-row flex-wrap gap-2'>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>70 - 100% (72) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>40 - 69% (41) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                        />
                        <p className='text-sm'>0 - 39% (28)</p>
                    </div>
                </div>
            </div>
        </div>

        {/* CAR DISPLAY DIV */}
        <div>
            <h1>CARS</h1>
        </div>
    </div>
  )
}

export default CarDetails