import React from 'react'
import bookOne from '../assets/bookone.jpg';
import starRating from '../assets/star-rating.png';
import reviews from '../assets/reviews.png';

const Header = () => {
  return (
    <div className='hidden mt-20 md:flex flex-col-reverse lg:flex-row justify-center items-center'>
        <div className='flex flex-col gap-2 lg:w-2/3 lg:pl-20'>
          <h1 className='font-poppins text-customblue text-center text-lg font-extrabold tracking-wide md:text-2xl lg:text-left lg:text-2xl xl:text-4xl'> Book car in easy steps! </h1>
          <p className='text-sm text-center text-gray-500 md:text-lg md:px-28 lg:px-0 lg:text-left lg:text-lg'> Renting a car brings  you freedom, we’ll help you find the best car for you at a great price. </p>
          
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

        <div className='md:w-full lg:1/2'>
            <img 
                src={bookOne}
                alt='welcome-img'
                className='w-full'
            />
        </div>

    </div>
  )
}

export default Header