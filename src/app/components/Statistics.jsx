import React from 'react'
import StaticsCounter from './StaticsCounter'
function Statistics() {
  return (
    <section className='w-full h-full bg-white/5 '>
      <article className='counter '>
        <div className='textSection py-5   w-full '>
          <h4 className='text-indigo-300 brightness-200 font-extrabold  w-fit text-3xl lg:text-5xl px-5 border-l-[12px]  border-red-600  '>
            Get to know more about BankRich!
          </h4>
        </div>
        <div className='flex flex-col lg:flex-row justify-evenly items-center text-xl py-2  '>
          <h5 className='text-white  bg-indigo-600  p-3 rounded-lg lg:text-3xl py-4 font-semibold transition-all duration-300 lg:hover:ring-8  '>
            why choose us?{' '}
          </h5>
          <p className='text-lime-100/90 lg:text-2xl py-4 '>
            We are customer - focused digital bank that provides <br /> complete
            financial solutions to meet your entire financial needs{' '}
          </p>
        </div>
        <StaticsCounter />
      </article>
    </section>
  )
}

export default Statistics
