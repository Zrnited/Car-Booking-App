import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiChevronUp} from 'react-icons/bi'
import {BiChevronDown} from 'react-icons/bi'
import {BiNotification} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineLogout} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import userPic from '../assets/user-pic.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function getUser(){
    const user = JSON.parse(window.localStorage.getItem('book'));
    return user
}

const Navbar = ({ toggleHeart, setToggleHeart, dropDown, setDropDown, width, setSidebar, sidebar, homeComponent, bookingComponent }) => {

    const userInfo = getUser();

    const links = document.getElementsByClassName('link');
    // console.log(links);
    const [hoverLine, setHoverLine] = React.useState(null);


    const underScore =(e)=>{
        // console.log(e.target);
        const eventAttribute = e.target.getAttribute('data-test-id');
        const innerText = e.target.innerHTML;
        // console.log(eventAttribute)
        // console.log(innerText)
        for(let i=0;i<links.length;i++){
            if(eventAttribute === innerText){
                setHoverLine(innerText);
            } else {
                setHoverLine(null);
            }
        }
    }

    const removeScore =()=>{
        setHoverLine(null);
    }

    React.useEffect(()=>{
        Aos.init({ duration: 1000 });
    }, [])

    const cancelSession =()=>{
        if(userInfo){
            if(window.confirm('Do you wish to end your session?')){
                setDropDown(false);
                window.localStorage.clear();
                window.sessionStorage.clear();
                window.location = '/';
            } else {
                return
            }
        } else {
            alert('Session not yet registered')
        }
    }

    const navigate =()=>{
        if(userInfo){
            window.location = '/book'
        } else {
            return alert('Fill up the information below to get started')
        }
    }


  return (
    <nav className='p-3 bg-white shadow-lg flex flex-row w-full justify-between items-center fixed top-0 left-0 right-0 z-10 sm:shadow-none lg:justify-evenly'>
        <div>
            <h1 className='uppercase tracking-widest font-extrabold text-customblue weight-500 text-lg font-poppins lg:text-xl xl:text-2xl'>optimum</h1>    
        </div>
        <motion.button 
            className='block text-lg text-black sm:hidden'
            onClick={()=>setSidebar(!sidebar)}
            animate={{rotate: sidebar ? 90 : 0}}
            whileHover={{scale: 1.2}}

        >
            <GiHamburgerMenu />
        </motion.button>
        <div className='hidden sm:flex flex-row gap-5'>
            <div>
                <Link 
                    className='link hover:text-customblue transition ease-in-out delay-100' 
                    to='/' 
                    data-test-id='Home' 
                    onMouseOver={underScore}
                    onMouseLeave={removeScore}
                >
                    Home
                </Link>
                <hr className={hoverLine === 'Home' || homeComponent ? 'absolute bottom-0 bg-customblue border-none h-2 w-12 z-10 transition ease-in-out delay-100' : 'absolute bottom-0 bg-gray-200 border-none h-2 w-12 z-10 transition ease-in-out delay-100'}/>
            </div>

            <div>
                <Link 
                    className='link hover:text-customblue transition ease-in-out delay-100' 
                    to='/' 
                    data-test-id='Booking'
                    onMouseOver={underScore}
                    onMouseLeave={removeScore}
                    onClick={navigate}
                >
                    Booking
                </Link>
                <hr className={hoverLine === 'Booking' || bookingComponent ? 'absolute bottom-0 bg-customblue border-none h-2 w-16 z-10 transition ease-in-out delay-100' : 'absolute bottom-0 bg-gray-200 border-none h-2 w-16 z-10 transition ease-in-out delay-100'}/>
            </div>

            {/* <div>
                <Link 
                    className='link hover:text-customblue transition ease-in-out delay-100' 
                    to='/' 
                    data-test-id='Support'
                    onMouseOver={underScore}
                    onMouseLeave={removeScore}

                >
                    Support
                </Link>
                <hr className={hoverLine === 'Support' ? 'absolute bottom-0 bg-customblue border-none h-2 w-16 z-10 transition ease-in-out delay-100' : 'absolute bottom-0 bg-gray-200 border-none h-2 w-16 z-10 transition ease-in-out delay-100'}/>
            </div>
            
            <div>
                <Link 
                    className='link hover:text-customblue transition ease-in-out delay-100' 
                    to='/' 
                    data-test-id={`Terms &amp; Condition`}
                    onMouseOver={underScore}
                    onMouseLeave={removeScore}
                >
                    Terms & Condition
                </Link>
                <hr className={hoverLine === 'Terms &amp; Condition' ? 'absolute bottom-0 bg-customblue border-none h-2 w-36 z-10 transition ease-in-out delay-100' : 'absolute bottom-0 bg-gray-200 border-none h-2 w-36 z-10 transition ease-in-out delay-100'}/>
            </div> */}
        </div>

        <div className='hidden sm:relative sm:flex sm:flex-row sm:gap-1 sm:text-gray-500'>
            <div className='hidden md:flex md:flex-row md:gap-3 md:mr-3'>
                <motion.button 
                    className='text-lg'
                    onClick={()=>setToggleHeart(!toggleHeart)}
                    whileTap={{scale: 1.3}}
                >
                    { toggleHeart ? <AiOutlineHeart /> : <AiFillHeart color='#FF5A5C'/>}
                </motion.button>
                <button className='text-lg'>
                    <BiNotification />
                </button>
                <button className='text-lg'>
                    <FiSettings />
                </button>
            </div>
            <img 
                src={userPic}
                alt='user-pic'
            />
            <motion.button 
                className='text-lg'
                whileHover={{scale: 1.2}}
                onClick={()=>{
                   setDropDown(!dropDown);
                }} 
            >
                {!dropDown ? <BiChevronDown /> : <BiChevronUp/> }
            </motion.button>

            {/* EXTRA OPTIONS */}
            {dropDown && <div className='flex flex-col gap-2 absolute bg-white shadow-lg top-12 right-2 z-20 p-4 w-44 rounded-lg'>
                <h1 className='font-poppins font-bold text-center tracking-wide'>
                    Adrian Davies
                </h1>

                {width < 768 && <div className='flex flex-col gap-2'>
                    <div 
                        className='flex flex-row gap-2 items-center hover:text-customblue cursor-pointer transition ease-in-out delay-100'
                        onClick={()=>setToggleHeart(!toggleHeart)}
                    >
                        <motion.i
                            whileTap={{scale: 1.3}}
                        >
                            {toggleHeart ? <AiOutlineHeart /> : <AiFillHeart color='#FF5A5C' />}
                        </motion.i>
                        <p>{toggleHeart ? 'Like this app!' : 'Thank you!'}</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center hover:text-customblue cursor-pointer transition ease-in-out delay-100'>
                        <BiNotification />
                        <p className=''>Notification</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center hover:text-customblue cursor-pointer transition ease-in-out delay-100'>
                        <FiSettings />
                        <p>Settings</p>
                    </div>
                </div>}
            
                <div className='flex flex-row gap-2 items-center hover:text-customblue cursor-pointer transition ease-in-out delay-100'>
                    <AiOutlineLogout />
                    <p onClick={cancelSession}>Cancel Session</p>
                </div>
            </div>}
        </div>
        <div className='hidden sm:block sm:absolute bottom-0 bg-gray-200 h-2 w-95 sm:flex-row sm:items-center justify-center gap-9'></div>
    </nav>
  )
}

export default Navbar