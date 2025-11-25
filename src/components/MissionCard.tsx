
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
const MissionCard = ({description,name}:{description:string,name:string}) => {
  return (
    <div className='flex flex-col  md:w-1/2 '>
      <div className='flex justify-between gap-8'>
        <article className='w-full shadow-lg hover:shadow-lg  transition-transform duration-3000 ease-in-out rounded-md bg-[var(--background-light)] flex-col p-4 flex justify-center relative h-[350px]'> 
        <div>
          <FaQuoteLeft className='absolute top-2 left-2 text-[var(--primary-orange)] text-3xl ' />
          <FaQuoteRight className='absolute bottom-2 right-2 text-[var(--primary-orange)] text-3xl ' />
        </div>
          <div className='w-full '>
            <h4 className='capitalize font-bold text-2xl poppins-black mt-2 text-[var(--primary-blue)]'>{name}</h4>
          </div>
          <div className='w-full flex  flex-col items-center justify-center '>
            <p className='poppins-regular'>
              {description}
            </p>
          </div>
        </article>
        
{/* <div className='w-full md:w-1/2'>
          <img src={mission} alt='mission' className='rounded-md' />
        </div> */}
      </div>
    </div>
  )
}
export default MissionCard
