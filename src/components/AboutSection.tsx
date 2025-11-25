import { Link } from 'react-router-dom'
// import image from '../../src/assets/event-1.jpg'

import image from '../assets/vision.jpg'
const AboutSection = () => {
  return (
    <div className='flex flex-col container w-full'>
      <div className='flex flex-col md:flex-row justify-center items-center mb-4'>
        <h2 className='poppins-extrabold'>About Us</h2>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center  gap-8'>
        <div className='flex w-full md:w-1/2'>
          <img src={image} alt='' />
        </div>
        <article className='flex w-full md:w-1/2 '>
          <div className='flex flex-col md:gap-8 gap-4'>
            <p className='text-sm text-gray-600'>
             InsightOut is a knowledge-driven development consulting partner dedicated to turning ideas into impactful realities. We guide organisations, governments, and enterprises through complex projects by integrating economic, social, and technical sciences to deliver holistic and sustainable solutions. With expertise spanning policy guidance, results-based management, fundraising, programme design, monitoring and evaluation, and regulatory support, we ensure every initiative achieves measurable outcomes and lasting value. 
            </p>
            <p className='text-sm text-gray-600'>
             Backed by a collaborative network of passionate specialists, our mission is to empower the realisation of development aspirations through innovative strategies, sound policies, and strong stakeholder engagement. Our vision is to emerge as a global leader in sustainable development consulting, where every organisation, regardless of scale or sector, is equipped with the resources and expertise to achieve its goals while contributing to a more prosperous and inclusive future for all.
            </p>
          <Link className='w-[100px] bg-[var(--primary-blue)] rounded-md text-white p-2 text-center' to={'/about'}>Read more</Link>
          </div>
        </article>
      </div>
    </div>
  )
}
export default AboutSection
