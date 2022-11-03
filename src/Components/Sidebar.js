import React from 'react'
import { motion } from 'framer-motion'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiAlarmExclamation} from 'react-icons/bi'
import {BiNotification} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import userPic from '../assets/user.png'
import { Link } from 'react-router-dom'

function getGoogleUser(){
    const googleuser = JSON.parse(window.localStorage.getItem('googleuser'));
    if(googleuser){
        return googleuser
    } else {
        return null
    }
}

function getUser(){
    const bookDetails = JSON.parse(window.localStorage.getItem('book'));
    return bookDetails
}

const Sidebar = ({ sideBar, toggleHeart, setToggleHeart }) => {

    const googleuser = getGoogleUser();
    const userBookDetails = getUser();

    const navigate =()=>{
        if(userBookDetails){
            window.location = '/book'
        } else {
            return alert('Fill up the information below to get started')
        }
    }

  return (
    <nav className={!sideBar ? 'fixed top-0 bottom-0 left-0 bg-white w-2/3 p-4 shadow-lg z-20 slide-out' : 'fixed top-0 bottom-0 bg-white w-2/3 p-4 shadow-lg z-20 slide-in'}>
        <div className='w-full flex flex-col justify-between gap-5 h-full'>
            <div className='flex flex-col gap-2'>
                {/* LOGO */}
                <div>
                    <h1 className='uppercase tracking-widest font-extrabold text-customblue weight-500 text-lg text-center font-poppins'>optimum</h1>    
                </div>

                <div className='w-full h-2 bg-gray-200'></div>

                <ul className='flex flex-col gap-3 mt-4'>
                    <li className='flex flex-row gap-2 items-center p-2 hover:bg-gray-200 hover:rounded-lg'>
                        <BiBook fontSize={'18px'} />
                        <Link to={'/'} className='text-base font-bold'>
                            Home
                        </Link>
                    </li>
                    <li className='flex flex-row gap-2 items-center p-2 hover:bg-gray-200 hover:rounded-lg'>
                        <BiAlarmExclamation fontSize={'18px'} />
                        <Link to={'/book'} onClick={navigate} className='text-base font-bold'>
                            Booking
                        </Link>
                    </li>
                    {/* <li className='flex flex-row gap-2 items-center p-2 hover:bg-gray-200 hover:rounded-lg'>
                        <AiTwotoneCustomerService fontSize={'18px'} />
                        <Link to={'/'} className='text-base font-bold'>
                            Support
                        </Link>
                    </li>
                    <li className='flex flex-row gap-2 items-center p-2 hover:bg-gray-200 hover:rounded-lg'>
                        <BiComment fontSize={'18px'} />
                        <Link to={'/'} className='text-base font-bold'>
                            Terms & Conditions
                        </Link>
                    </li> */}
                </ul>
            </div>

            <div className='flex flex-col-reverse gap-4'>
                {/* PROFILE LINKS */}
                <div className='flex flex-row items-center justify-center gap-2'>
                    <img 
                        src={googleuser === null ? userPic : googleuser.photoURL}
                        alt='user-pic'
                        width={'30px'}
                        height={'40px'}
                        className={'rounded-full'}
                    />
                    <h1 className='font-poppins font-bold text-center tracking-wide text-sm'>
                        {googleuser === null ? 'Adrian Davies' : `${googleuser.displayName}`}
                    </h1>
                </div>

                <div className='w-full h-2 bg-gray-200'></div>

                {/* SHORT LINKS */}
                <div className='flex flex-row gap-3 mr-3 items-center justify-center'>
                    <motion.button 
                        className='text-xl'
                        onClick={()=>setToggleHeart(!toggleHeart)}
                        whileTap={{scale: 1.3}}
                        animate={{scale:1}}
                        initial={{scale: 0}}
                    >
                        { toggleHeart ? <AiOutlineHeart /> : <AiFillHeart color='#FF5A5C'/>}
                    </motion.button>
                    <button className='text-xl'>
                        <BiNotification />
                    </button>
                    <button className='text-xl'>
                        <FiSettings />
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Sidebar