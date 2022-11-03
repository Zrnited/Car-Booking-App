import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { BiChevronRight } from 'react-icons/bi'
import { animate, motion } from 'framer-motion';
import Spinner from '../Components/Spinner.js';
import{ BsFillCheckCircleFill} from 'react-icons/bs'

let count = 0;

const SelectedModal = ({ current, setModal }) => {

  // console.log(count)

  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [booked, setBooked] = React.useState(false);
  const [success, setSuccess] = React.useState(false);


  const featuredCarousel = [
    {
      first: 'Car Description',
      second: {
        text: 'Lorem ipsum dolor magneto ggdtetdd shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega shhdttega',
        className: 'text-center tracking-wide text-sm'
      }
    },
    {
      first: 'Car Specifications',
      second: {
        className: 'text-center tracking-wide font-poppins font-bold'
      }, 
      third: `Car make: ${current.type}`,
      fourth: `Capacity: ${current.capacity}`,
      fifth: current.amount
    },
    {
      first: 'Recommendations',
      second: {
        text: current.customerRecommendation ? '5-star rating and loved by many' : 'Not selected by many',
        className: 'text-center tracking-wide'
      }
    }
  ]

  const handleNext=()=>{
    count = (count + 1) % featuredCarousel.length;
    setIndex(count);
  }
  const handlePrev=()=>{
    const carouselLength = featuredCarousel.length;
    count = (index + carouselLength - 1) % carouselLength;
    setIndex(count);
  }

  const handleBook =()=>{
    setBooked(true);
    setLoading(true);
    setInterval(() => {
      setLoading(false)
      setSuccess(true);
    }, 2000);
  }

  return (
    <div className='w-full h-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20'>
        <div className='w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-overlay' onClick={()=>setModal(false)}></div>
        <div className='absolute p-5 z-30 top-1/2 transform -translate-y-1/2 rounded-lg bg-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2'>
          {/* IMAGR WHERE EVERYTHING ELSE IS */}
          <motion.div 
            className='flex flex-col'
            initial={{scale: 0}}
            animate ={{scale: 1}}
          >
            {!booked && <h1 className='text-2xl text-center font-poppins font-bold'>{current.name}</h1>}
            {!booked && <div className='w-full flex justify-center mt-3'>
              <motion.img 
                src={current.image}
                alt='car-pic'
                className='w-3/4'
              />
            </div>}
            {!booked && <div className='relative flex flex-col items-center px-7 gap-2'>
              <div className='w-full absolute top-1/2 transform -translate-y-1/2 flex flex-row justify-between'>
                <button 
                  className='cursor-pointer text-xl hover:bg-green-300 hover:rounded-full transition ease-in-out delay-100'
                  onClick={handlePrev}
                >
                  <BiChevronLeft/>
                </button>
                <button 
                  className='cursor-pointer text-xl hover:bg-green-300 hover:rounded-full transition  ease-in-out delay-100'
                  onClick={handleNext}
                >
                  <BiChevronRight />
                </button>
              </div>
              {featuredCarousel[index].first && <h1 className='underline font-extrabold font-poppins text-lg mt-3 uppercase tracking-wide sm:text-xl'>{featuredCarousel[index].first}</h1>}

              {featuredCarousel[index].second && <p className={featuredCarousel[index].second.className}>{featuredCarousel[index].second.text}</p>}

              {featuredCarousel[index].third && <p className='font-poppins uppercase font-bold text-base tracking-wide'>{featuredCarousel[index].third}</p>}

              {featuredCarousel[index].fourth && featuredCarousel[index].fifth && <div className='w-full flex flex-row gap-5 justify-center font-poppins uppercase'>
                <p><strong>{featuredCarousel[index].fourth}</strong></p>
                <p className='font-bold'>Price: $<strong>{featuredCarousel[index].fifth}</strong>/d</p>
              </div>}
            </div>}

            {loading && <div className='flex items-center justify-center'>
              <Spinner message={'loading...'}/>
            </div>}

            {success && <div className='w-full flex items-center justify-center gap-2'>
              <h1 className='font-extrabold text-lg'>Car successfully booked!</h1>
              <BsFillCheckCircleFill color='green' height={'40px'} />
            </div>}

            {!booked && <button 
              className='bg-green-500 p-3 w-full place-self-center font-bold mt-3 opacity-95 hover:opacity-100 hover:text-white hover:bg-green-600 transition ease-in-out delay-100 sm:w-1/2'
              onClick={handleBook}
            >
              Book Now!
            </button>}
            {success && <button 
              className='bg-green-500 p-3 w-full place-self-center font-bold mt-3 opacity-95 hover:opacity-100 hover:text-white hover:bg-green-600 transition ease-in-out delay-100 sm:w-1/2'
              onClick={()=>{ window.location = '/details' }}
            >
              Proceed to view your details
            </button>}
          </motion.div>
        </div>
    </div>
  )
}

export default SelectedModal