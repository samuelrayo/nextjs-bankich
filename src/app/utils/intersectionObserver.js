const StartObserver = () => {
  const navBlur = document.querySelector('.barBlur')
  const navLanding = document.querySelector('.barLanding')

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry
      if (!isIntersecting) {
        navLanding.classList.add('opacity-0')
        navBlur.classList.remove('opacity-0')
      } else {
        navLanding.classList.remove('opacity-0')
        navBlur.classList.add('opacity-0')
      }
    })
  }, observerOptions)

  observer.observe(navLanding)
  // Limpiar el observador cuando el componente se desmonte
  /*     return () => {
      observer.disconnect()
    } */
}

export default StartObserver
