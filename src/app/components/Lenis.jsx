import Lenis from '@studio-freight/lenis' // Asegúrate de proporcionar la ruta correcta a tu script Lenis

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  /*   console.log(e) */
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
