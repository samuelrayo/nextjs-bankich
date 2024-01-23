import { EmailIcon, SquareArrow } from '../icons/icons'
import ButtonAnimation from './ButtonAnimate'
function Payment() {
  return (
    <article className='flex flex-col items-center text-center mt-10 relative justify-center'>
      <h3 className='text-3xl md:text-5xl  text-amber-400 font-bold'>
        The Future of Payments
      </h3>

      <p className='text-xl text-white  font-semibold  py-6'>
        Speed meets security. With our credit card, you enjoy fast transactions
        and total protection.
      </p>

      <section className=' flex flex-wrap  items-center justify-around gap-5 '>
        <div className='w-[350px] p-4 flex items-center gap-5  justify-center bg-neutral-900 rounded-lg'>
          <EmailIcon />
          <input
            type='email'
            className='bg-transparent text-lg text-white w-full outline-none'
            placeholder='Your Email Address'
          />
          <SquareArrow />
        </div>
        <ButtonAnimation />
      </section>

      <div className=' w-80'>
        <div className='flex justify-around gap-4'>
          <img
            src='/DoodleL.svg'
            alt='line'
            className='imageLine hidden md:block'
          />
          <img src='/security.png' alt='mockup-security' />
          <img
            src='/DoodleR.svg'
            alt='line'
            className='imageLine hidden md:block'
          />
        </div>
      </div>
    </article>
  )
}

export default Payment
