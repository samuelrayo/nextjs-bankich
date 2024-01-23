'use client'

import { useEffect, useState, useRef } from 'react'

import CountUp from 'react-countup'

function CountersAnimate({ value }) {
  const countRef = useRef()
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const elemento = countRef.current
    if (elemento) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsIntersecting(true)
            } else {
              setIsIntersecting(false)
            }
          })
        },
        {
          threshold: 0.8
        }
      )

      observer.observe(elemento)

      /*       return () => {
          observer.unobserve(elemento)
        } */
    }
  }, [countRef])

  return (
    <span ref={countRef}>
      {isIntersecting ? (
        <CountUp start={0} end={value} delay={0} duration={4} />
      ) : (
        '0'
      )}
    </span>
  )
}

export default CountersAnimate
