function IconsSection() {
  const imageArray = [
    { src: '/visa.png', alt: 'Empresa 1' },
    { src: '/google-pay.svg', alt: 'Empresa 2' },
    { src: '/payoneer.png', alt: 'Empresa 3' },
    { src: '/paypal.png', alt: 'Empresa 3' },
    { src: '/stripe.png', alt: 'Empresa 3' },
    { src: '/Bancolombia.svg', alt: 'Empresa 4' }
  ]

  const imageElements = imageArray.map((image, index) => (
    <div
      key={index}
      className='image-container cursor-pointer mt-10 mx-10  bg-teal-400/75 shadow-2xl rounded-lg w-64 h-40 flex  justify-center items-center'
    >
      <img
        src={image.src}
        alt={image.alt}
        className='company-image object-contain px-10  h-auto w-56 '
      />
    </div>
  ))
  return (
    <div className='w-full  flex flex-wrap justify-center items-center lg:grid grid-cols-3 grid-rows-1   place-items-center'>
      {imageElements}
    </div>
  )
}

export default IconsSection
