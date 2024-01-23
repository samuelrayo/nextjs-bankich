'use client'

import { useState } from 'react'
import AccordionItem from './AccordionItem'
import { accordionInformation } from '../const/index'
function Accordion() {
  const [open, setOpen] = useState(false)

  const handleToggle = (index) => {
    if (index === open) {
      return setOpen(null)
    }
    setOpen(index)
  }
  return (
    <ul className='flex flex-col   items-center justify-center   gap-5 '>
      {accordionInformation.map((data, index) => {
        return (
          <>
            <AccordionItem
              title={data.title}
              description={data.description}
              open={index === open}
              key={index}
              toggle={() => handleToggle(index)}
            />
          </>
        )
      })}
    </ul>
  )
}

export default Accordion
