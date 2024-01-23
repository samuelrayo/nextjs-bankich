function Digitize() {
  return (
    <section className='w-full  h-full digitizeSection '>
      <div className='flex flex-col   lg:flex-row  justify-around  text-center    p-5 '>
        <div className='mt-10'>
          <h1 className=' font-extrabold text-white text-5xl md:text-6xl lg:text-7xl'>
            Digitize your <br /> financial life,
            <br /> in one <span className='text-green-400'>place</span>
          </h1>
        </div>

        <div className='w-96 h-auto '>
          <img src='/cards.png' alt='cardsBusiness' className='w-full h-full' />
        </div>
      </div>
    </section>
  )
}

export default Digitize
