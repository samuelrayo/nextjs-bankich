import CountersAnimate from '../utils/countersAnimate'

function StaticsCounter() {
  return (
    <section className='counter flex   flex-wrap lg:flex-nowrap items-center justify-center  gap-8 lg:gap-16   w-full h-auto py-5'>
      <div className='card bg-sky-400  w-auto h-48  flex justify-center flex-col items-center  rounded-xl shadow-2xl px-5 '>
        <h5 className='text-4xl lg:text-5xl font-semibold'>
          <CountersAnimate value={262} />K
        </h5>
        <p className='text-xl text-neutral-300 font-semibold'>
          Users from all over the global
        </p>
      </div>

      <div className='card bg-indigo-400 w-auto  h-48  flex justify-center flex-col items-center rounded-xl shadow-2xl px-5 '>
        <h5 className='text-4xl lg:text-5xl font-semibold'>
          <CountersAnimate value={140} />%
        </h5>
        <p className='text-xl text-neutral-300 font-semibold'>
          Investment growth in 2022
        </p>
      </div>

      <div className='card bg-rose-400 w-auto  h-48  flex justify-center flex-col items-center  rounded-xl shadow-2xl px-5  '>
        <h5 className='text-4xl lg:text-5xl font-semibold'>
          <CountersAnimate value={2} />K
        </h5>
        <p className='text-center text-xl py-2  text-neutral-300 font-semibold'>
          <span className=' text-white font-extrabold '>Employed Staff </span>{' '}
          <br /> Our priority to make everything work
        </p>
      </div>
    </section>
  )
}

export default StaticsCounter
