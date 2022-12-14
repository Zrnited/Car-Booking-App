import React from 'react'
import { GoLocation } from 'react-icons/go';
import { BsCalendarEvent } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';

const BookCar = ({ bookingForm, handleChange, booked }) => {

  return (
    <div className='w-full flex flex-col gap-4 md:flex-row md:justify-evenly lg:gap-6'>
        <div className='flex flex-col gap-2 md:w-full'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-1 items-center'>
                    <button className='text-blue-200 text-lg'>
                        <GoLocation color='#034671' /> 
                    </button>
                    <p className='font-extrabold'>Pick-up</p>
                </div>
                {!booked ? <div className='rounded-lg py-1 h-50'>
                    <form className='h-full w-full bg-green-200 '>
                        <input 
                            type={'text'}
                            className='w-full h-full rounded-sm px-5 text-base border-gray-400 border-2 border-solid shadow focus:outline-none focus:border-gray-500 focus:shadow-lg'
                            placeholder='Enter pick up destination...'
                            onChange={handleChange}
                            value={bookingForm.pickUp}
                            name = 'pickUp'
                        />
                    </form>
                </div> 
                : 
                <div className='bg-gray-200 pl-4 rounded-lg py-2'>
                    <p className='font-semibold'>{bookingForm.pickUp}</p>
                </div>
                }
            </div>

            <div className='flex flex-row gap-3 w-full justify-evenly'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <BsCalendarEvent color='#034671' />
                        <p className='font-bold lg:text-sm xl:text-base'>Pick-up Date</p>
                    </div>
                    {!booked ? <div className='bg-gray-200 px-2 py-1 rounded-lg sm:px-4'>
                        <form className='bg-gray-200 w-full flex flex-col justify-center py-1 text-sm sm:text-base'>
                            <input 
                                type={'date'}
                                className='bg-gray-200 focus:outline-none'
                                onChange={handleChange}
                                value={bookingForm.pickDate}
                                name = 'pickDate'
                            />
                        </form>
                    </div> : 
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold lg:pl-2 xl:pl-4'>{bookingForm.pickDate}</p>
                    </div>
                    }
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                    <BsCalendarEvent color='#034671' />
                        <p className='font-bold lg:text-sm xl:text-base'>Drop-off Date</p>
                    </div>
                    {!booked ? <div className='bg-gray-200 px-2 py-1 rounded-lg sm:px-4'>
                        <form className='bg-gray-200 w-full flex flex-col justify-center py-1 text-sm sm:text-base'>
                            <input 
                                type={'date'}
                                className='bg-gray-200 focus:outline-none'
                                onChange={handleChange}
                                value={bookingForm.dropDate}
                                name = 'dropDate'
                            />
                        </form>
                    </div> :
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full   font-semibold lg:pl-2 xl:pl-4'>{bookingForm.dropDate}</p>
                    </div>
                    }
                </div>
            </div>
        </div>

        {/* SECOND */}

        <div className='flex flex-col gap-2 md:w-full'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-1 items-center'>
                    <button className='text-blue-200 text-lg'>
                        <GoLocation color='#034671' /> 
                    </button>
                    <p className='font-extrabold'>Drop off</p>
                </div>
                {!booked ? <div className='rounded-lg py-1 h-50'>
                    <form className='h-full w-full bg-green-200'>
                        <input 
                            type={'text'}
                            className='w-full h-full rounded-sm px-5 text-base border-gray-400 border-2 border-solid shadow focus:outline-none focus:border-gray-500 focus:shadow-lg'
                            placeholder='Enter drop off destination...'
                            onChange={handleChange}
                            value={bookingForm.dropOff}
                            name = 'dropOff'
                        />
                    </form>
                </div> : 
                <div className='bg-gray-200 pl-4 rounded-lg py-2'>
                    <p className='font-semibold'>{bookingForm.dropOff}</p>
                </div>
                }
            </div>

            <div className='flex flex-row gap-3 w-full justify-evenly'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <FiClock color='#034671' />
                        <p className='font-bold lg:text-sm xl:text-base'>Pick-up Time</p>
                    </div>
                    {!booked ? <div>
                        <form className='bg-gray-200 rounded-lg flex justify-center py-2.5 w-full text-sm sm:text-base font-semibold lg:pl-2 lg:pr-2 xl:pl-4'>
                            <select 
                                className='bg-gray-200 cursor-pointer focus:outline-none md:text-sm xl:text-base'
                                onChange={handleChange}
                                value={bookingForm.pickTime}
                                name = 'pickTime'
   
                            >
                                <option value={''} className='bg-white'>--- Select time ---</option>
                                <option value={'08:00a.m'} className='bg-white'>08:00a.m</option>
                                <option value={'9:00a.m'} className='bg-white'>09:00a.m</option>
                                <option value={'10:00a.m'} className='bg-white'>10:00a.m</option>
                                <option value={'11:00a.m'} className='bg-white'>11:00a.m</option>
                                <option value={'12:00p.m'} className='bg-white'>12:00p.m</option>
                                <option value={'1:00p.m'} className='bg-white'>01:00p.m</option>
                                <option value={'2:00p.m'} className='bg-white'>02:00p.m</option>
                                <option value={'3:00p.m'} className='bg-white'>03:00p.m</option>
                                <option value={'4:00p.m'} className='bg-white'>04:00p.m</option>
                                <option value={'5:00p.m'} className='bg-white'>05:00p.m</option>
                            </select>
                        </form>
                    </div> : 
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold'>{bookingForm.pickTime}</p>
                    </div>
                    }
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                    <FiClock color='#034671' />
                        <p className='font-bold lg:text-sm xl:text-base'>Drop-off Time</p>
                    </div>
                    {!booked ? <div>
                        <form className='bg-gray-200 rounded-lg flex justify-center py-2.5 w-full font-semibold text-sm sm:text-base lg:pl-1 lg:pr-2 xl:pl-4 '>
                            <select 
                                className='bg-gray-200 cursor-pointer md:text-sm xl:text-base focus:outline-none'
                                onChange={handleChange}
                                value={bookingForm.dropTime}
                                name = 'dropTime'
                            >
                                <option value={''} className='bg-white'>--- Select time ---</option>
                                <option value={'08:00a.m'} className='bg-white'>08:00a.m</option>
                                <option value={'9:00a.m'} className='bg-white'>09:00a.m</option>
                                <option value={'10:00a.m'} className='bg-white'>10:00a.m</option>
                                <option value={'11:00a.m'} className='bg-white'>11:00a.m</option>
                                <option value={'12:00p.m'} className='bg-white'>12:00p.m</option>
                                <option value={'1:00p.m'} className='bg-white'>01:00p.m</option>
                                <option value={'2:00p.m'} className='bg-white'>02:00p.m</option>
                                <option value={'3:00p.m'} className='bg-white'>03:00p.m</option>
                                <option value={'4:00p.m'} className='bg-white'>04:00p.m</option>
                                <option value={'5:00p.m'} className='bg-white'>05:00p.m</option>
                            </select>
                        </form>
                    </div> : 
                    <div>
                        <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold'>{bookingForm.dropTime}</p>
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookCar