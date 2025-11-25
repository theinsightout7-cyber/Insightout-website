
import Hero from './Hero'


const HeroContainer = () => {


  // Next slide handler
  // const nextSlide = () => {
  //   if (currentSlide === slideCount - 1) {
  //     setIsTransitioning(false)
  //     setCurrentSlide(0)
  //     // Re-enable transition after jump
  //     if (timeoutRef.current) clearTimeout(timeoutRef.current)
  //     timeoutRef.current = setTimeout(() => setIsTransitioning(true), 50)
  //   } else {
  //     setIsTransitioning(true)
  //     setCurrentSlide((prev) => prev + 1)
  //   }
  // }

  // // Previous slide handler
  // const prevSlide = () => {
  //   if (currentSlide === 0) {
  //     setIsTransitioning(false)
  //     setCurrentSlide(slideCount - 1)
  //     // Re-enable transition after jump
  //     if (timeoutRef.current) clearTimeout(timeoutRef.current)
  //     timeoutRef.current = setTimeout(() => setIsTransitioning(true), 50)
  //   } else {
  //     setIsTransitioning(true)
  //     setCurrentSlide((prev) => prev - 1)
  //   }
  // }

  // Auto slide effect
  // useEffect(() => {
  //   const slider = setInterval(() => {
  //     if (currentSlide === slideCount - 1) {
  //       setIsTransitioning(false)
  //       setCurrentSlide(0)
  //       if (timeoutRef.current) clearTimeout(timeoutRef.current)
  //       timeoutRef.current = setTimeout(() => setIsTransitioning(true), 50)
  //     } else {
  //       setIsTransitioning(true)
  //       setCurrentSlide((prev) => prev + 1)
  //     }
  //   }, 3000)
  //   return () => clearInterval(slider)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentSlide, slideCount])

  // // Cleanup timeout on unmount
  // useEffect(() => {
  //   return () => {
  //     if (timeoutRef.current) clearTimeout(timeoutRef.current)
  //   }
  // }, [])

  return (
    <div className='relative mt-20 w-full overflow-hidden'>
      <Hero/>
    </div>
  )
}

export default HeroContainer
