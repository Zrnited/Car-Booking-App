import React, { useState } from 'react'
import BookingComponent from '../Components/BookingComponent'
import Navbar from '../Components/Navbar'
import CarDetails from '../Components/CarDetails';
import { cardata } from '../Components/CarData';
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import Sidebar from '../Components/Sidebar';
import Spinner from '../Components/Spinner';


function getUser(){
    const user = JSON.parse(window.localStorage.getItem('book'));
    return user
}

const Book = () => {

    const userInfo = getUser();
    console.log(userInfo);
    const [data, setData] = React.useState(cardata);
    const [filter, setFilter] = useState({
        coupe: false,
        hatchback: false,
        sedan: false,
        MPV: false,
        SUV: false,
        capacityTwo: false,
        capacityFour: false,
        seventy: false,
        forty: false,
        zero: false
    })
    const [toggleHeart, setToggleHeart] = React.useState(true);
    const [dropDown, setDropDown] = React.useState(false);
    const [width, setWidth] = React.useState(null)
    const [sidebar, setSidebar] = React.useState(false);
    // const [loading, setLoading] = React.useState(true);


    // if(loading){
    //     setInterval(() => {
    //         setLoading(false);
    //     }, 1,500);
    // }
    
    const handleFilter=(event)=>{
    const {name, checked} = event.target
    setFilter((prevState)=>{
            return {
            ...prevState,
            [name]: checked
            }
        }) 
    }
    
    const coupe = cardata.filter((items)=>{
    return items.type === 'Coupe'
    })
    const hatchback = cardata.filter((items)=>{
    return items.type === 'Hatchback'
    })  
    const capacityTwo = cardata.filter((items)=>{
    return items.capacity === 2
    })  
    const capacityFour = cardata.filter((items)=>{
    return items.capacity === 4
    })  
    const Recommendation = cardata.filter((items)=>{
    return items.customerRecommendation === true
    }) 

    window.addEventListener('resize', ()=>{
        setWidth(window.innerWidth);
        if(width > 640){
          setSidebar(false);
        }
      })

    React.useEffect(()=>{
        if(filter.coupe){
          setData(coupe)
        } else if(filter.hatchback && filter.coupe){
          const coupeHatchBack = coupe.concat(hatchback)
          setData(coupeHatchBack)
        } else if(filter.hatchback){
          setData(hatchback)
        } else if(filter.capacityTwo) {
          setData(capacityTwo)
        } else if (filter.capacityFour){
            setData(capacityFour);
        } else if(filter.seventy || filter.forty){
            setData(Recommendation)
        } else if (filter.zero){
            setData([])
        } else {
            setData(cardata)
        }
    }, [filter])

    if(sidebar){
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active');
    }
    
    React.useEffect(()=>{
        setWidth(window.innerWidth);
    }, [])
      


  return (
    <div className='flex flex-col justify-center w-full'>
        <Navbar setSidebar={setSidebar} sidebar={sidebar} toggleHeart={toggleHeart} setToggleHeart={setToggleHeart} dropDown={dropDown} setDropDown={setDropDown} width={width} />

        {<Sidebar sideBar={sidebar} toggleHeart={toggleHeart} setToggleHeart={setToggleHeart}/>}

        <div className='mt-16 bg-green-200 py-2 text-black'>
            <h1 className='text-center font-bold'>
                Continue your booking!
            </h1>
        </div>

        <div className='w-full px-5 flex flex-row justify-center items-center w-full lg:flex py-5 lg:justify-center'>
            <BookingComponent userInfo={userInfo} />
        </div>

        <article className='p-4 md:px-1 lg:px-6'>
          <CarDetails data={data} handleFilter={handleFilter} filter={filter} />
        </article>

        <footer className='h-8 text-white py-6 mt-3 bg-customblue flex flex-row gap-3 items-center justify-center w-full md:justify-evenly'>
          <div className='flex flex-row gap-2 items-center'>
            <h1 className='font-poppins m-0 text-base'>OPTIMUM -</h1>
            <p className='text-sm'>All rights reserved © 2022.</p>
          </div>
          <div className='flex flex-row gap-2'>
            <a
              href='https://twitter.com/Mayhorz'
              target={'_blank'}
              rel="noreferrer"
            >
              <AiFillTwitterSquare />
            </a>
            <a
              href='https://www.linkedin.com/in/mayowa-kolawole-8aa08a1b0/'
              target={'_blank'}
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href='https://github.com/Zrnited'
              target={'_blank'}
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </footer>
        
    </div>
  )
}

export default Book