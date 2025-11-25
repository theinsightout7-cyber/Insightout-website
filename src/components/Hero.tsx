 import image from '../assets/image-1.jpg'
import { Link } from 'react-router-dom'
import ButtonComponent from "./ButtonComponent"

const Hero = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#fff] md:px-12 px-4'>
      <div
        className={`flex gap-4 mt-4  justify-between items-center w-full px-4 md:px-12  py-6 md:py-12 mx-4 md:mx-12 rounded-xl flex-col sm:flex-row `}
         style={{ backgroundColor: "#f5f3ff" }}
      >
        <article className='flex flex-col w-full md:w-1/2 md:order-1 order-2'>
          <div className='flex flex-col w-full items-center justify-center sm:items-start mt-4'>
            <h1 className='text-center poppins-extrabold sm:text-left text-6xl w-full md:w-[70%]  text-[var(--primary-blue)]'>
              Insight<span className="text-[var(--primary-orange)]">O</span>ut
            </h1>
            <h3 className='text-md md:text-xl  sm:text-left text-center poppins-black text-[var(--primary-blue)]'>
              Dream. Do.
            </h3>
            <div>
              <p className='text-sm text-gray-600 max-w-[500px] w-full mt-2 text-center sm:text-left poppins-regular'>
                At InsightOut, we believe every bold dream deserves a pathway to reality. We transform visionary ideas into actionable strategies through innovation, collaboration, and purpose-driven individuals and organisations to achieve impact that truly matters.
              </p>
              
<Link to={"/contact"}>
<div className="w-[150px] flex items-center sm:items-start mx-auto sm:mx-0">
<ButtonComponent label="Get Started" className="mt-4"/>
              </div>
</Link>
              
            </div>
          </div>
        </article>
        <div className='w-full flex md:w-1/2 sm:order-2 order-1 relative aspect-w-1 aspect-h-1'>
          <img
            src={image}
            width={500}
            height={500}
            alt='The image'
            className='object-cover rounded-md w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
