import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import reviews from '../assets/reviews.png';
import starRating from '../assets/star-rating.png';
import BookingComponent from '../Components/BookingComponent';
import Sidebar from '../Components/Sidebar';
import BookCar from '../Components/BookCar';
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import CarDetails from '../Components/CarDetails';
import Header from '../Components/Header';

const Booking = () => {

  const [bookingForm, setBookingForm] = useState({
    pickUp: '',
    dropOff: '',
    pickDate: '',
    dropDate: '',
    pickTime: '',
    dropTime: ''
  })
  // console.log(bookingForm);
  const [toggleHeart, setToggleHeart] = React.useState(true);
  const [dropDown, setDropDown] = React.useState(false);
  const [width, setWidth] = React.useState(null)
  const [sidebar, setSidebar] = React.useState(false);
  const [booked, setBooked] = useState(false)
  // const parent = React.useRef(null);
  // console.log(pickTime);
  // console.log(dropTime);

  window.addEventListener('resize', ()=>{
    setWidth(window.innerWidth);
    if(width > 640){
      setSidebar(false);
    }
  })

  const parent = document.getElementById('parent');
  parent?.addEventListener('click', ()=>{
    if(dropDown === true){
      setDropDown(false)
    } else {
      return
    }
  })

  const handleChange =(event)=>{
    const {value, name} = event.target
    // console.log(event);
    setBookingForm((prevState)=>{
      return {
        ...prevState,
        [name]: value
      }
    })
  }


  const handleSubmit = ()=>{
    let flag = 0
    const letterNumber = /[a-zA-Z]/;

    if(bookingForm.pickUp === '' || bookingForm.dropOff === '' || bookingForm.pickDate === '' || bookingForm.dropDate === '' || bookingForm.pickTime === '' || bookingForm.dropTime === '' ){
      return alert('rejected')
    } else {
      let pickUpStringArray = []
      let dropOffStringArray = []
      pickUpStringArray = bookingForm.pickUp.split(' ');
      dropOffStringArray = bookingForm.dropOff.split(' ');

      if(pickUpStringArray.length > 1 || dropOffStringArray.length > 1){
        flag = 1;
        if(flag === 1 && bookingForm.pickUp !== '' && bookingForm.dropOff !== ''){
          if(bookingForm.pickUp.match(letterNumber) && bookingForm.dropOff.match(letterNumber)){
            setBooked(true);
            return console.log('Accepted');
          } else {
            return alert('U wan collect?')
          }
        } else {
          return alert('No white spaces');
        }
      } else {
        if(bookingForm.pickUp.match(letterNumber) && bookingForm.dropOff.match(letterNumber)){
          setBooked(true);
          return console.log('Accepted');
        } else {
          return alert('Letters alone');
        }
      }
    }
  }


  if(sidebar){
    document.body.classList.add('active')
  } else {
    document.body.classList.remove('active');
  }


  return (
    <>
      <Navbar setSidebar={setSidebar} sidebar={sidebar} toggleHeart={toggleHeart} setToggleHeart={setToggleHeart} dropDown={dropDown} setDropDown={setDropDown} width={width} />

      {<Sidebar sideBar={sidebar} toggleHeart={toggleHeart} setToggleHeart={setToggleHeart}/>}

      <Header/>
      
      {!booked && <div className='bg-customred py-2 text-white md:mt-6'>
        <h1 className='text-center'>
              Please fill the information below to get started.
        </h1>
      </div>}
      {booked && <div className='bg-green-600 py-2 text-white md:mt-6'>
        <h1 className='text-center'>
              Select an available car and enjoy your ride!
        </h1>
      </div>}


      <section id='parent' ref={parent} className='mt-12 sm:mt-8 px-6 md:mt-3 md:gap-4 md:flex md:flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:mt-5'>

        <div className='flex flex-col gap-2 md:hidden'>
          <h1 className='font-poppins text-center text-lg font-extrabold tracking-wide md:text-2xl lg:text-left lg:text-lg xl:text-2xl'> Book car in easy steps </h1>
          <p className='text-sm text-center text-gray-500 md:text-lg lg:text-left lg:text-sm xl:text-base'> Renting a car brings  you freedom, we’ll help you find the best car for you at a great price. </p>
          
          <div className='flex flex-row gap-5 items-center justify-center lg:justify-start'>
            <img 
              src={reviews}
              height={'36px'}
              width={'auto'}
              alt='reviews'
              className='h-36'
            />
            <div className='flex flex-col items-center lg:items-start'>
              <div className='flex flex-row gap-1'>
                <img 
                  src={starRating}
                  alt='star rating'
                />
                <img 
                  src={starRating}
                  alt='star rating'
                />
                <img 
                  src={starRating}
                  alt='star rating'
                />
                <img 
                  src={starRating}
                  alt='star rating'
                />
                <img 
                  src={starRating}
                  alt='star rating'
                />
              </div>
              <p className='text-xs text-gray-400'> Trusted by 10 million customers </p>
            </div>
          </div>
        </div>

        {/* BOOK A CAR */}
        {!booked && <div className='md:w-full lg:flex py-5 lg:justify-center'>
            <BookCar bookingForm={bookingForm} setBookingForm={setBookingForm} handleChange={handleChange} />
        </div>}

        {booked && <div className='md:w-full lg:flex py-5 lg:justify-center'>
          <BookingComponent bookingForm={bookingForm} />
        </div>}
      </section>


      <div className='flex justify-center w-full bg-white md:shadow-lg md:mt-3 md:pb-3 md:shadow-none'>
          {!booked && <button
            className='bg-customblue text-white py-2 px-6 rounded-sm w-1/2 text-base max-w-500 opacity-75 hover:opacity-100 transition ease-in-out delay-100 md:text-lg'
            onClick={handleSubmit}
          >
            Submit
          </button>}
          {booked && <button
            disabled
            className='bg-customblue text-white py-2 px-6 rounded-sm w-1/2 text-base max-w-500 transition ease-in-out delay-100 md:text-lg'
          >
            Submitted!
          </button>}
        </div>

        {booked && <article className='p-5'>
          <CarDetails />
        </article>}

        <footer className='h-8 text-white py-6 mt-3 bg-customblue flex flex-row gap-3 items-center justify-center'>
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
              href='https://www.linkedin.com/mayowa-kolawole-8aa08a1b0/'
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
    </>
  )
}

export default Booking