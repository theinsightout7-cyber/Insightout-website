import { FaQuoteLeft } from 'react-icons/fa'
// import React from 'react'

const TestimonialCard = ({name,text,img,position}:{name:string,text:string,img:string,position:string,id:number | string}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-sm bg-white max-w-[300px] p-4   transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col gap-2">
        <FaQuoteLeft className="text-3xl text-[var(--primary-orange)] mb-2"/>
        <article className="">
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus repellat quo quis labore perspiciatis ullam laudantium qui quam, velit saepe modi, explicabo expedita architecto necessitatibus, impedit minus consequatur sapiente.{text}</p>
        </article>
        <div className='flex items-center gap-4'>
          <img src={` ${img || "/assets/image-1.jpg"}`} alt="Testimonial" className="w-12 h-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-sm text-gray-500 ">{position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TestimonialCard