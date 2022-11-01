import React from 'react'
import { Circles } from 'react-loader-spinner'

const Spinner = ({message}) => {
  return (
    <div className='mt-20 flex flex-col justify-center items-center w-full h-full'>
        <Circles 
            color='#034671'
            height={50}
            width={200}
            className='m-5'
        />
        <p className='text-lg text-center px-2 pt-2 tracking-widest'>{message}</p>
    </div>
  )
}

export default Spinner