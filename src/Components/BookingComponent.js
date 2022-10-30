import React from 'react'
import { GoLocation } from 'react-icons/go';
import { BsCalendarEvent } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';

const BookingComponent = ({ bookingForm }) => {

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
                <p className='font-semibold'>{bookingForm.pickUp}</p>
                </div>
            </div>

            <div className='flex flex-row gap-3 w-full justify-evenly'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <BsCalendarEvent color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Pick-up Date</p>
                    </div>
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold lg:pl-2 xl:pl-4'>{bookingForm.pickDate}</p>
                    </div>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                    <BsCalendarEvent color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Drop-off Date</p>
                    </div>
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold lg:pl-2 xl:pl-4'>{bookingForm.dropDate}</p>
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
                    <p className='font-semibold'>{bookingForm.dropOff}</p>
                </div>
            </div>

            <div className='flex flex-row gap-3 w-full justify-evenly'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <FiClock color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Pick-up Time</p>
                    </div>
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold'>{bookingForm.pickTime}</p>
                        {/* <form className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold lg:pl-2 lg:pr-2 xl:pl-4'>
                            <select 
                                className='bg-gray-200 cursor-pointer md:text-sm xl:text-base'
                                onChange={(e)=>{
                                    setPickTime(e.target.value);
                                    // console.log(timeForm);
                                }}
                            >
                                <option value={''} className='bg-white'>--- Choose time ---</option>
                                <option value={'8am'} className='bg-white'>08:00a.m</option>
                                <option value={'9am'} className='bg-white'>09:00a.m</option>
                                <option value={'10am'} className='bg-white'>10:00a.m</option>
                                <option value={'11am'} className='bg-white'>11:00a.m</option>
                                <option value={'12pm'} className='bg-white'>12:00p.m</option>
                                <option value={'1pm'} className='bg-white'>01:00p.m</option>
                                <option value={'2pm'} className='bg-white'>02:00p.m</option>
                                <option value={'3px'} className='bg-white'>03:00p.m</option>
                                <option value={'4pm'} className='bg-white'>04:00p.m</option>
                                <option value={'5pm'} className='bg-white'>05:00p.m</option>
                            </select>
                        </form> */}
                    </div>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                    <FiClock color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Drop-off Time</p>
                    </div>
                    <div>
                    <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold'>{bookingForm.dropTime}</p>
                        {/* <form className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold lg:pl-1 lg:pr-2 xl:pl-4'>
                            <select 
                                className='bg-gray-200 cursor-pointer md:text-sm xl:text-base'
                                onChange={(e)=>{
                                    setDropTime(e.target.value);
                                    // console.log(timeForm);
                                }}
                            >
                                <option value={''} className='bg-white'>--- Choose time ---</option>
                                <option value={'8am'} className='bg-white'>08:00a.m</option>
                                <option value={'9am'} className='bg-white'>09:00a.m</option>
                                <option value={'10am'} className='bg-white'>10:00a.m</option>
                                <option value={'11am'} className='bg-white'>11:00a.m</option>
                                <option value={'12pm'} className='bg-white'>12:00p.m</option>
                                <option value={'1pm'} className='bg-white'>01:00p.m</option>
                                <option value={'2pm'} className='bg-white'>02:00p.m</option>
                                <option value={'3px'} className='bg-white'>03:00p.m</option>
                                <option value={'4pm'} className='bg-white'>04:00p.m</option>
                                <option value={'5pm'} className='bg-white'>05:00p.m</option>
                            </select>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingComponent