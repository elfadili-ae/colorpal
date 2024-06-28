import React from 'react'

type Props = {
  prev:() => void,
  next: () => void
};

const Controls: React.FC<Props> = ({prev, next}) => {
  return (
    <div className='w-full h-16 sm:h-20 flex gap-1 bg-white p-1'>
      <div onClick={() => prev()} className='cursor-pointer w-full h-full bg-black flex-1 flex justify-center items-center'>
        <svg className='w-10 h-10' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path className='stroke-white' d="M4 12H20M4 12L8 8M4 12L8 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div onClick={() => next()} className='cursor-pointer w-full h-full bg-black flex-1 flex justify-center items-center'>
        <svg className='w-10 h-10' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path className='stroke-white' d="M6 12H18M18 12L13 7M18 12L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default Controls