import { useRef } from 'react'
import BlogCard from './BlogCard'
import { blogs } from '../data/data'

export const BlogSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 300 // Adjust this value to match your item width

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // const handlePrev = () => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  //   }
  // }

  return (
    <div className='flex flex-col '>
      <div className='flex flex-col md:flex-row mx-4 md:mx-12 items-center justify-between'>
        <h2 className='text-2xl font-bold capitalize poppins-extrabold'>Explore our latest insight</h2>
        <div className='flex gap-2 ml-auto'>
          
          <button
            onClick={handleNext}
            className='px-3 py-1 bg-[var(--primary-blue)] text-[#fff] rounded hover:bg-gray-300'
          >
            See more
          </button>
        </div>
      </div>
      <div className='flex mt-4'>
        <div
          ref={scrollRef}
          className='overflow-x-auto overflow-y-hidden no-scrollbar'
        >
          <div className='flex gap-4 py-2 md:py-6'>
            {blogs.map((blog, index) => (
              <BlogCard 
                key={index}
                id={blog.id}
                image={blog.image}
                description={blog.description}
                name={blog.name}
                variant='slider'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
