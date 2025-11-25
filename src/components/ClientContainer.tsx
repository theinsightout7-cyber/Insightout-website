
import ClientsCard from './ClientsCard'
import { entities } from '../data/data'
import { useState } from 'react'

const ClientContainer = () => {
  
  const [activeIndex, setActiveIndex] = useState(0)
  const handleChange = (index: number) => {
    setActiveIndex(index)
  }
  
  return (
    <div className='flex flex-col  container'>
      
      <h2 className='text-2xl font-bold mb-4 poppins-extrabold '>Who We Serve</h2>
      <div className='flex mt-4 justify-center items-center flex-col '>
        <div className='md:grid justify-center mx-auto sm:grid-cols-2  lg:grid-cols-3 hidden gap-4  overflow-x-auto flex-nowrap w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
          {entities.map((blog) => (
            <ClientsCard key={blog.sector} description={blog.description} sector={blog.sector} bg={`url('${blog.image}')`}/>
          ))}
        </div>
        <div className='grid grid-cols-1  md:hidden w-full'>
        <ClientsCard key={entities[activeIndex].sector} description={entities[activeIndex].description} sector={entities[activeIndex].sector} bg={`url('${entities[activeIndex].image}')`}/>
        <div className='flex md:hidden gap-4 mt-8 '>
                  {entities.map((event,index)=>{
                    return <div key={event.sector} className={`h-[20px] p-1 w-[20px]  flex justify-center items-center rounded-full ${activeIndex === index? 'bg-[var(--primary-blue)]':"bg-[var(--background-light)]"} cursor-pointer`} onClick={()=>handleChange(index)}></div>
                  })}
                </div>
        </div>

      </div>
      
    </div>
  )
}
export default ClientContainer
