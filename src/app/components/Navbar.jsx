'use client'
import Link from 'next/link'
import { NavLinks } from '../const/index'
import { useState, useEffect } from 'react'
import { Iceland } from 'next/font/google'
import { MenuToggle } from '../icons/icons'
import StartObserver from '../utils/intersectionObserver'

const iceland = Iceland({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-iceland'
})

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    StartObserver()
  }, [])
  return (
    <>
      <nav
        className={`${iceland.variable}  w-full   text-lg h-full font-iceland  `}
      >
        <section className='  w-full h-fit uppercase'>
          <div className='flex menu__hamburguer items-center justify-evenly mt-2 lg:hidden'>
            <Link href='/'>
              <img
                src='/bankich-logo.png'
                alt='bankinch-logo'
                width={200}
                height={200}
                className='object-cover  '
              />
            </Link>

            <MenuToggle
              isOpen={isOpen}
              toggle={toggleMenu}
              onClick={handleToggle}
            />
          </div>
          <div className='fixed  z-10 top-3    w-full  '>
            <ul className='items-center hidden  lg:flex justify-evenly opacity-0 transition-all duration-300 barBlur  gap-10 text-xl text-white  '>
              <li className='gap-20 flex items-center barB px-5 py-2   rounded-3xl justify-center '>
                {NavLinks.map((link) => (
                  <Link href={link.path} key={link.path}>
                    {link.label}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          <ul className='items-center justify-evenly  transition-all ease-linear lg:flex duration-300 hidden  w-full barLanding   gap-10 text-2xl text-white  '>
            <li className='cursor-pointer  '>
              <Link href='/'>
                <img
                  src='/bankich-logo.png'
                  alt='bankinch-logo'
                  width={200}
                  height={200}
                  className='object-cover  '
                />
              </Link>
            </li>
            <li className='gap-20 flex  m-2 items-center justify-center '>
              {NavLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.path}
                  className='animatedLine '
                >
                  {link.label}
                </Link>
              ))}
            </li>
            <li className='startContainer  hidden   w-fit lg:flex'>
              <button className='w-fit h-16 px-6 py-4 text-base font-semibold cursor-pointer text-white uppercase rounded-full buttonGradient'>
                Get Started
              </button>
            </li>
          </ul>
        </section>
      </nav>
    </>
  )
}
