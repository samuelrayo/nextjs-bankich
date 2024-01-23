import IconsSection from '../components/IconsSection'

function Partners() {
  return (
    <section className='h-full md:h-screen w-full  flex items-center justify-center flex-col '>
      <div className=' textblack  rounded-tl-xl text-center '>
        <h4 className='text-4xl text-center bg-black p-4 text-slate-100 rounded-b-xl font-semibold w-52 shadow-lg ring-2  border-[5px]'>
          Trusted partners
        </h4>
      </div>

      <IconsSection />
    </section>
  )
}

export default Partners
