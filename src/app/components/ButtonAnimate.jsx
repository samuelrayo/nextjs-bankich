'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const ButtonAnimation = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showP = () => {
    setIsVisible(true)
  }

  const hiddeP = () => {
    setIsVisible(false)
  }
  return (
    <div className='w-fit h-full'>
      <motion.button
        onMouseEnter={showP}
        onMouseLeave={hiddeP}
        className=' exampleClass cursor-pointer  lg:hover:ring-8  text-xl font-bold text-black  rounded-full'
      >
        <span>Try Now!</span>
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <div className='absolute right-0  top-52 max-w-max hidden lg:block'>
            <motion.p
              initial={{ backgroundColor: 'black', color: 'white' }}
              animate={{ opacity: 1, y: 28 }}
              exit={{ opacity: 0, y: 0, backgroundColor: 'white' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='p-2 mr-4 text-2xl rounded-s-sm rounded-e-sm hidden xl:block'
            >
              &quot; psss.... Your <span className='text-green-500'>money</span>
              , your <span className='text-indigo-400'>control </span>&quot;
            </motion.p>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ButtonAnimation
