import { Link } from 'react-router-dom'
// import image from '../../src/assets/event-1.jpg'

import image from '../assets/IMG-gallery-14.jpg'
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
              InsightOut is a development consulting firm committed to helping
              organisations navigate complexity with clarity, strategy, and
              precision. We support clients across Africa to secure funding,
              design high-impact programmes, strengthen institutions, and build
              systems that enable sustainable growth. From grant sourcing to
              programme design and implementation, policy development, MEL
              systems, strategic communications, and stakeholder engagement, we
              help you strengthen your ideas, improve execution, and scale
              results.
            </p>

            <Link
              className='w-[100px] bg-[var(--primary-blue)] rounded-md text-white p-2 text-center'
              to={'/about'}
            >
              Read more
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
export default AboutSection
