import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiMinus } from 'react-icons/bi'
import { BiPlus } from 'react-icons/bi'
import { BsFillGearFill, BsFillPersonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const CarDetails = ({ filter, handleFilter, data, collapse, setCollapse, handleTarget }) => {

  return (
    <div className='flex flex-col py-2 gap-7 sm:px-4 sm:items-center md:items-start md:justify-center md:flex-row md:px-2 md:gap-5 lg:justify-center xl:gap-2'>
        {/* FILTER DIV */}
        <div className='flex flex-col w-full p-4 gap-2 shadow-lg md:w-270'>
            {/* FILTER BY && HR */}
            <div className='flex flex-col gap-2 md:pl-3'>
                <h1 className='font-bold text-xl'>Filter By</h1>
                <div className='bg-gray-200 h-2 w-full'></div>
            </div>

            {/* CAR TYPE */}
            <div className='w-full flex flex-col gap-2 md:pl-3'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h2 className='font-bold font-sm'>Car Type</h2>
                    <i 
                        className='cursor-pointer' 
                        onClick={()=>{
                            setCollapse((prevState)=>{
                                return {
                                    ...prevState,
                                    carType: !prevState.carType   
                                }
                            })
                        }}> 
                        {collapse.carType ? <BiMinus /> : <BiPlus />} 
                    </i>
                </div>
                
                {collapse.carType && <div className='flex flex-row flex-wrap gap-2 md:flex-col'>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                            name='coupe'
                            value={filter.coupe}
                            checked={filter.coupe}
                            onChange={handleFilter}
                        />
                        <p className='text-sm'>Coupe (24) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                            name='hatchback'
                            value={filter.hatchback}
                            checked={filter.hatchback}
                            onChange={handleFilter}
                        />
                        <p className='text-sm'>Hatchback (12) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                            name='hatchback'
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
                </div>}
            </div>


            {/* CAPACITY */}
            <div className='w-full flex flex-col gap-2 md:pl-3'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h2 className='font-bold font-sm'>Capacity</h2>
                    <i 
                        className='cursor-pointer' 
                        onClick={()=>{
                            setCollapse((prevState)=>{
                                return {
                                    ...prevState,
                                    capacity: !prevState.capacity   
                                }
                            })
                        }}> 
                        {collapse.capacity ? <BiMinus /> : <BiPlus />} 
                    </i>
                </div>
                
                {collapse.capacity && <div className='flex flex-row flex-wrap gap-2 md:flex-col'>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                            name='capacityTwo'
                            value={filter.capacityTwo}
                            checked={filter.capacityTwo}
                            onChange={handleFilter}
                        />
                        <p className='text-sm'>2 - 5(100) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                            name='capacityFour'
                            value={filter.capacityFour}
                            checked={filter.capacityFour}
                            onChange={handleFilter}
                        />
                        <p className='text-sm'>6 or more (4) </p>
                    </div>
                </div>}
            </div>


            {/* CUSTOMER RECOMMENDATION */}
            <div className='w-full flex flex-col gap-2 md:pl-3'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h2 className='font-bold font-sm'>Customer Recommendation</h2>
                    <i 
                        className='cursor-pointer' 
                        onClick={()=>{
                            setCollapse((prevState)=>{
                                return {
                                    ...prevState,
                                    customerRec: !prevState.customerRec   
                                }
                            })
                        }}> 
                        {collapse.customerRec ? <BiMinus /> : <BiPlus />} 
                    </i>
                </div>
                
                {collapse.customerRec && <div className='flex flex-row flex-wrap gap-2 md:flex-col'>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                            name='seventy'
                            value={filter.seventy}
                            checked={filter.seventy}
                            onChange={handleFilter}
                        />
                        <p className='text-sm'>70 - 100% (72) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                            name='forty'
                            value={filter.forty}
                            checked={filter.forty}
                            onChange={handleFilter}
                        />
                        <p className='text-sm'>40 - 69% (41) </p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            type={'checkbox'}
                            name='zero'
                            value={filter.zero}
                            checked={filter.zero}
                            onChange={handleFilter}
                        />
                        <p className='text-sm'>0 - 39% (28)</p>
                    </div>
                </div>}
            </div>
        </div>

        {/* CAR DISPLAY DIV */}
        <div className='flex flex-col justify-center items-center gap-5 sm:w-400 sm:justify-center md:w-full md:justify-evenly md:flex-row md:flex-wrap md:gap-2 lg:gap-4'>
            {data?.map((caritem, index)=>{
                return (
                    <motion.div 
                        key={index} className='bg-white shadow-lg p-5 rounded-lg flex flex-col justify-center cursor-pointer w-80 sm:w-full md:h-190 md:w-250'
                        whileHover={{scale: 1.2}}
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{type: 'tween', duration: 0.2}}
                        onClick={()=>handleTarget(caritem)}
                    >
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className='font-extrabold font-poppins md:text-sm'>{caritem.name}</h1>
                            <i 
                                className='cursor-pointer'
                            > 
                                {caritem.customerRecommendation ? <AiFillHeart color='#FF5A5C' /> : <AiOutlineHeart/>} 
                            </i>
                            {/* Add a classname to this and use a data-test-id to find which heart to toggle */}
                        </div>

                        <div>
                            <p className='text-sm'> {caritem.type} </p>
                        </div>

                        <div className='w-full flex flex-row justify-center mt-2 md:mt-2'>
                            <img 
                                alt='car-img'
                                src={caritem.image}
                                className='w-85'
                            />
                        </div>

                        <div className='flex flex-row gap-3 justify-between mt-2 md:mt-2'>
                            <div className='flex flex-row items-center gap-2'>
                                <BsFillPersonFill color='#034671' />
                                <p className='text-sm'>{caritem.capacity}</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <BsFillGearFill color='#034671' />
                                <p className='text-sm'>{caritem.engine}</p>
                            </div>
                            <div>
                                <h1 className='font-poppins font-extrabold'>${caritem.amount}<span className='font-nunito font-normal text-gray-400'>/d</span></h1>
                            </div>
                        </div>
                    </motion.div>
                )
            })}
    
        </div>
    </div>
  )
}

export default CarDetails