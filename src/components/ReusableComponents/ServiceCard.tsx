import type { IconType } from 'react-icons'

const ServiceCard = ({
  service,
  description,
  icon: Icon,
  color,
  background,
}: {
  service: string
  description: string
  icon: IconType
  color?: string
  background?: string
}) => {
  {
    console.log(color)
  }
  return (
    <div className='flex bg-[#fff] shadow-xl hover:shadow-2xl flex-col p-4  w-full  md:w-[270px] h-[280px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg'>
      <div className='flex flex-col gap-0'>
        <div className='flex flex-col  rounded-full  mx-auto items-center h-12 w-12 justify-center' style={{background: background }}>
          <Icon
            className={`text-2xl text-[${color}]`}
            style={{ color: color }}
          />
        </div>
        <h6 className='text-center text-sm mt-4 font-bold text-[#4b5563] poppins-bold '>
          {service}
        </h6>
        <p className='mt-0 tracking-wide text-center text-sm text-[#6b7280] poppins-medium'>
          {description}
        </p>
      </div>
    </div>
  )
}
export default ServiceCard
