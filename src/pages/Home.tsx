import AboutSection from '../components/AboutSection'
import BlogContainer from '../components/BlogContainer'
// import { BlogSlider } from '../components/BlogSlider'
import ClientContainer from '../components/ClientContainer'
import EventCardContainer from '../components/EventCardContainer'
import HeroContainer from '../components/HeroContainer'
import MissionCardContainer from '../components/MissionCardContainer'
import ServiceCardContainner from '../components/ServiceCardContainer'
import TestimonialContainer from '../components/TestimonialContainer'
import { services } from '../data/data'
TestimonialContainer

const Home = () => {
  return (
    <div>
      <div className='mt-12'>
        <HeroContainer />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <AboutSection />
      </div>
      <div className='flex flex-col md:py-4 py-'>
        <MissionCardContainer />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <ServiceCardContainner heading={'what we do'} data={services} />
      </div>
      <div className='flex flex-col md:py-16 py-12'>
        <ClientContainer />
      </div>
      

      <div className='flex flex-col md:py-16 py-12'>
        <EventCardContainer />
      </div>
      {/* <div className='flex flex-col md:py-16 py-12'>
        <TestimonialContainer/>
      </div> */}
      <div className='flex flex-col md:py-16 py-12 container'>
        <div>
         <h2 className='text-2xl font-bold capitalize poppins-extrabold'>Explore our latest insights</h2>
        </div>
        <BlogContainer variant='' number={4}/>
      </div>
    </div>
  )
}
export default Home
