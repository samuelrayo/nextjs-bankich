'use client'

import Digitize from './Digitize'
import Statistics from './Statistics'
import Partners from './Partners'
import Phrases from './Phrases'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Payment from '../components/Payment'

function Home() {
  const lenis = useLenis(({ scroll }) => {
    /* console.log(scroll) */
    // called every scroll
  })

  return (
    <ReactLenis root>
      <main className='w-full h-full  '>
        <div className='w-full max-w-[1200px] mx-auto  '>
          <Digitize />
          <Phrases />
          <Statistics />
          <Partners />
          <Payment />
        </div>
      </main>
    </ReactLenis>
  )
}

export default Home
