import React from 'react'
import { GoLocation } from 'react-icons/go';
import { BsCalendarEvent } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';

const BookCar = ({ bookingForm, handleChange }) => {

    // const [date, setDate] = React.useState(null);
    // console.log(date);

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
                <div className='rounded-lg py-1 h-50'>
                    <form className='h-full w-full bg-green-200'>
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
            </div>

            <div className='flex flex-row gap-3 w-full justify-evenly'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <BsCalendarEvent color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Pick-up Date</p>
                    </div>
                    <div className='bg-gray-200 px-4 py-1 rounded-lg'>
                        <form className='bg-gray-200 w-full flex flex-col justify-center py-1'>
                            <input 
                                type={'date'}
                                className='bg-gray-200 focus:outline-none'
                                onChange={handleChange}
                                value={bookingForm.pickDate}
                                name = 'pickDate'
                            />
                        </form>
                    </div>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                    <BsCalendarEvent color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Drop-off Date</p>
                    </div>
                    <div className='bg-gray-200 px-4 py-1 rounded-lg'>
                        <form className='bg-gray-200 w-full flex flex-col justify-center py-1'>
                            <input 
                                type={'date'}
                                className='bg-gray-200 focus:outline-none'
                                onChange={handleChange}
                                value={bookingForm.dropDate}
                                name = 'dropDate'
                            />
                        </form>
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
                <div className='rounded-lg py-1 h-50'>
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
                </div>
            </div>

            <div className='flex flex-row gap-3 w-full justify-evenly'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <FiClock color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Pick-up Time</p>
                    </div>
                    <div>
                        {/* <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold'>10:00</p> */}
                        <form className='bg-gray-200 rounded-lg flex justify-center py-2 w-full font-semibold lg:pl-2 lg:pr-2 xl:pl-4'>
                            <select 
                                className='bg-gray-200 cursor-pointer focus:outline-none md:text-sm xl:text-base'
                                onChange={handleChange}
                                value={bookingForm.pickTime}
                                name = 'pickTime'
   
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
                        </form>
                    </div>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                    <FiClock color='#0A20E6' />
                        <p className='font-bold lg:text-sm xl:text-base'>Drop-off Time</p>
                    </div>
                    <div>
                        {/* <p className='bg-gray-200 pl-4 rounded-lg py-2 w-full font-semibold'>{timeForm ? 'Next one hour' : 'Select pick-up time'}</p> */}
                        <form className='bg-gray-200 rounded-lg flex justify-center py-2 w-full font-semibold lg:pl-1 lg:pr-2 xl:pl-4 '>
                            <select 
                                className='bg-gray-200 cursor-pointer md:text-sm xl:text-base focus:outline-none'
                                onChange={handleChange}
                                value={bookingForm.dropTime}
                                name = 'dropTime'
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookCar