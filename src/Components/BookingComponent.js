import React from 'react'
import { GoLocation } from 'react-icons/go';
import { BsCalendarEvent } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';

const BookingComponent = ({ userInfo }) => {

  return (
    <div className='w-full flex flex-col gap-5 md:flex-row md:justify-evenly lg:gap-6'>
        <div className='flex flex-col gap-4 md:w-full'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-1 items-center'>
                    <button className='text-blue-200 text-lg'>
                        <GoLocation color='#0A20E6' /> 
                    </button>
                    <p className='font-extrabold'>Pick-up</p>
                </div>
                <div className='bg-gray-200 pl-4 rounded-lg py-2'>
                    <p className='font-semibold'>{userInfo?.pickUp}</p>
                </div>
            </div>

            <div className='flex flex-row gap-3 w-full justify-evenly'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <BsCalendarEvent color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Pick-up Date</p>
                    </div>
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold lg:pl-2 xl:pl-4'>{userInfo?.pickDate}</p>
                    </div>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                    <BsCalendarEvent color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Drop-off Date</p>
                    </div>
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold lg:pl-2 xl:pl-4'>{userInfo?.dropDate}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* SECOND */}

        <div className='flex flex-col gap-5 md:w-full'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-1 items-center'>
                    <button className='text-blue-200 text-lg'>
                        <GoLocation color='#0A20E6' /> 
                    </button>
                    <p className='font-extrabold'>Drop off</p>
                </div>
                <div className='bg-gray-200 pl-4 rounded-lg py-2'>
                    <p className='font-semibold'>{userInfo?.dropOff}</p>
                </div>
            </div>

            <div className='flex flex-row gap-3 w-full justify-evenly'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <FiClock color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Pick-up Time</p>
                    </div>
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold'>{userInfo?.pickTime}</p>
                    </div>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                    <FiClock color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Drop-off Time</p>
                    </div>
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold'>{userInfo?.dropTime}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingComponent