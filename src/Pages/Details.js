import React from 'react'

const Details = () => {

    const userInfo = JSON.parse(window.localStorage.getItem('book'));
    const carInfo = JSON.parse(window.sessionStorage.getItem('car'));
  return (
    <div className='h-screen w-full bg-gray-50 flex flex-col justify-center items-center'>
        <div className='w-full max-w-800 flex flex-col justify-center items-center'>
            <div className='mb-8 text-lg font-bold tracking-widest'>
                <h1>Thanks for using this app!</h1>
            </div>
            
            <div className='flex flex-col items-center justify-center border-1 border-solid border-gray-300 w-95'>
            <header className='bg-gray-200 py-3 text-center w-full'>
                    <h1 className='font-poppins font-bold tracking-widest'>Booking Details</h1>
            </header>
            <div className='flex flex-row w-full'>
                    <div className='w-full bg-slate-200 text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 font-poppins font-bold text-sm sm:text-base'>
                        <h1>Car name</h1>
                    </div>
                    <div className='w-full bg-white text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 border-r-0 text-sm sm:text-base'>
                        <h1>{carInfo?.name}</h1>
                    </div>
            </div>
            <div className='flex flex-row w-full'>
                    <div className='w-full bg-slate-200 text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 font-poppins font-bold text-sm sm:text-base'>
                        <h1>Car make</h1>
                    </div>
                    <div className='w-full bg-white text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 border-r-0 text-sm sm:text-base'>
                        <h1>{carInfo?.type}</h1>
                    </div>
            </div>
            <div className='flex flex-row w-full'>
                    <div className='w-full bg-slate-200 text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 font-poppins font-bold text-sm sm:text-base'>
                        <h1>Car gear type</h1>
                    </div>
                    <div className='w-full bg-white text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 border-r-0 text-sm capitalize sm:text-base'>
                        <h1>{carInfo?.engine}</h1>
                    </div>
            </div>
            <div className='flex flex-row w-full'>
                    <div className='w-full bg-slate-200 text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 font-poppins font-bold text-sm sm:text-base'>
                        <h1>Pick-Up Destination</h1>
                    </div>
                    <div className='w-full bg-white text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 border-r-0 text-sm sm:text-base'>
                        <h1>{userInfo?.pickUp}</h1>
                    </div>
            </div>
            <div className='flex flex-row w-full'>
                    <div className='w-full bg-slate-200 text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 font-poppins font-bold text-sm sm:text-base'>
                        <h1>Drop-off Location</h1>
                    </div>
                    <div className='w-full bg-white text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 border-r-0 text-sm sm:text-base'>
                        <h1>{userInfo?.dropOff}</h1>
                    </div>
            </div>
            <div className='flex flex-row w-full'>
                    <div className='w-full bg-slate-200 text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 font-poppins font-bold text-sm sm:text-base'>
                        <h1>Pick up time</h1>
                    </div>
                    <div className='w-full bg-white text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 border-r-0 text-sm sm:text-base'>
                        <h1>{userInfo?.pickTime}</h1>
                    </div>
            </div>
            <div className='flex flex-row w-full'>
                    <div className='w-full bg-slate-200 text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 font-poppins font-bold text-sm sm:text-base'>
                        <h1>Drop off time</h1>
                    </div>
                    <div className='w-full bg-white text-center py-2 border-1 border-solid border-gray-300 border-b-0 border-l-0 border-r-0 text-sm sm:text-base'>
                        <h1>{userInfo?.dropTime}</h1>
                    </div>
            </div>
            </div>

            <button 
                className='mt-12 py-2 bg-red-400 w-90 text-white tracking-wide hover:bg-red-600 transition ease-in-out delay-100 border-none sm:mt-20'
                onClick={()=>{
                    window.location = '/'
                }}    
            >
                Back to main page
            </button>
        </div>
    </div>
  )
}

export default Details