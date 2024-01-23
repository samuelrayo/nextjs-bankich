import { UpArrow, DownArrow } from '../icons/icons'
import { Collapse } from 'react-collapse'
function AccordionItem({ open, toggle, title, description }) {
  return (
    <>
      <li
        className='w-full max-w-[600px] bg-indigo-500 text-xl text-white   cursor-pointer h-fit p-4 rounded-lg'
        onClick={toggle}
      >
        <div className='flex justify-between items-center'>
          {title}
          {open ? <UpArrow /> : <DownArrow />}
        </div>

        <section className=' p-1'>
          <Collapse isOpened={open}>
            <div>
              <p className='text-lg text-slate-300'>{description}</p>
            </div>
          </Collapse>
        </section>
      </li>
    </>
  )
}

export default AccordionItem
