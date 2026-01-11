// import React from 'react'
import image from '../assets/IMG-gallery-1.jpg'
const AboutCard = () => {
  return (
    <div className='flex flex-col md:h-[300px]  container '>
      <h2 className='text-2xl font-bold text-center capitalize poppins-extrabold text-gray-800'>
        who we are
      </h2>
      <div className='flex-col md:flex-row flex justify-between gap-8 mt-8'>
        <div className='flex w-full md:w-1/2 '>
          <img
            src={image}
            alt=''
            className='h-[400px] w-full object-cover object-center'
          />
        </div>
        <article className='flex gap-y-12 flex-col w-full md:w-1/2  h-full  justify-center pr-8'>
          <p>
            InsightOut was founded on the belief that practical solutions create
            real change. We began by supporting small organisations to structure
            their ideas and secure funding. Over time, our work expanded to
            include governments, development partners, and private organisations
            across sectors. Today, InsightOut is a strategy and development
            consulting firm dedicated to helping organisations deliver solutions
            that advance social impact and strengthen institutions. We remain
            committed to helping institutions build stronger programmes,
            stronger systems, and stronger impact by working at the intersection
            of policy, innovation, and practical execution, enabling clients to
            create valuable impact.
          </p>
        </article>
      </div>
    </div>
  )
}

export default AboutCard
