// Footer.js
function Footer() {
  return (
    <footer className='w-full bg-indigo-800 text-white h-fit max-h-fit absolute bottom-0 z-10  '>
      <section className='max-w-[1200px] mx-auto  flex  flex-col  md:flex-row items-center  justify-around'>
        <div>
          <img src='/bank.png' alt='bankich-logo' width={130} height={130} />
        </div>
        <div className='flex justify-end gap-8 items-center cursor-pointer'>
          <div>
            <h4>Company</h4>
            <h4>For Creators</h4>
            <p>Features</p>
            <p>FAQ</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Contact Us</p>
            <p>Partnership</p>
            <p>Security</p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
