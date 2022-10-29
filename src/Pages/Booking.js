import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import reviews from '../assets/reviews.png';
import starRating from '../assets/star-rating.png';
import BookingComponent from '../Components/BookingComponent';
import Sidebar from '../Components/Sidebar';
import BookCar from '../Components/BookCar';

const Booking = () => {

  const [pickTime, setPickTime] = React.useState(null);
  const [dropTime, setDropTime] = React.useState(null);
  const [bookingForm, setBookingForm] = useState({
    pickUp: '',
    dropOff: '',
    pickDate: '',
    dropDate: '',
    pickTime: '',
    dropTime: ''
  })
  console.log(bookingForm);
  const [toggleHeart, setToggleHeart] = React.useState(false);
  const [dropDown, setDropDown] = React.useState(false);
  const [width, setWidth] = React.useState(null)
  const [sidebar, setSidebar] = React.useState(false);
  const [booked, setBooked] = useState(false)
  // const parent = React.useRef(null);
  // console.log(pickTime);
  // console.log(dropTime);

  window.addEventListener('resize', ()=>{
    setWidth(window.innerWidth);
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


  return (
    <>
      <Navbar setSidebar={setSidebar} sidebar={sidebar} toggleHeart={toggleHeart} setToggleHeart={setToggleHeart} dropDown={dropDown} setDropDown={setDropDown} width={width} />

      {sidebar && <Sidebar toggleHeart={toggleHeart} setToggleHeart={setToggleHeart}/>}
      
      <section id='parent' ref={parent} className='mt-20 px-6 md:shadow-lg md:flex md:flex-col  lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:mt-16'>
        <div className='flex flex-col gap-2 lg:w-375'>
          <h1 className='font-poppins text-center text-lg font-extrabold tracking-wide lg:text-left lg:text-xl'> Book car in easy steps </h1>
          <p className='text-sm text-center text-gray-500 lg:text-left'> Renting a car brings  you freedom, we’ll help you find the best car for you at a great price. </p>
          
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
        <div className='md:w-full lg:flex py-5 lg:justify-center xl:max-w-840'>
            <BookCar bookingForm={bookingForm} setBookingForm={setBookingForm} handleChange={handleChange} />
        </div>

        {booked && <div className='md:w-full lg:flex py-5 lg:justify-center xl:max-w-840'>
          <BookingComponent pickTime={pickTime} dropTime={dropTime} setDropTime={setDropTime} setPickTime={setPickTime} />
        </div>}
      </section>
    </>
  )
}

export default Booking