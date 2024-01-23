import React from 'react'

function Phrases() {
  return (
    <div className='md:text-2xl lg:text-3xl font-extrabold text-white text-end lg:leading-loose h-full w-full'>
      <img src='arrowDown.svg' alt='arrowDown' className='mx-auto' />
      <h3 className='  font-extrabold  '>It&rsquo;s not just another bank</h3>
      <h3>
        it&rsquo;s a financial{' '}
        <span className='text-orange-300  font-extrabold'>business</span> of{' '}
        <span className='font-extrabold brightness-150 text-cyan-600 '>
          possibilities{' '}
        </span>
      </h3>
      <h3>
        Designed to{' '}
        <span className='font-extrabold  brightness-200 '>creating</span> a
        seamless and{' '}
        <span className='font-bold brightness-150 text-green-500'>secure</span>{' '}
        space for everyone.
      </h3>
    </div>
  )
}

export default Phrases
