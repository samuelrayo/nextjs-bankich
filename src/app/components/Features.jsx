import React from 'react'

function Features() {
  return (
    <article className='w-full  h-full'>
      <section className='  max-w-[1200px] mx-auto my-20  text-gray-500 font-normal    '>
        <h4 className='text-white text-4xl  text-center md:text-5xl lg:text-7xl font-medium  '>
          Best features soon!
        </h4>
        <div className='container__image w-full h-full my-10    '>
          <img
            src='/piggy-bank.png'
            width={400}
            height={400}
            className='mx-auto'
          />
        </div>
      </section>
    </article>
  )
}

export default Features
