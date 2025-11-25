import { Link } from "react-router-dom"

const BlogCard = ({
  id,
  image,
  description,
  name,
  variant
}: {
  id: number | string
  image: string
  description: string
  name: string
  variant: string
}) => {
  // Truncate description to 30 words max
  const truncatedDescription = description.split(' ').slice(0, 20).join(' ') + (description.split(' ').length > 20 ? '...' : '');

  const truncatedTitle = name.split(' ').slice(0, 20).join(' ') + (description.split(' ').length > 20 ? '...' : '');

  return (
    <Link to={`/insight/${id}`} className='flex w-full max-w-[300px] h-[430px] flex-col p-4 hover:scale-102  cursor-pointer shadow-lg hover:shadow-3xl rounded-md transform transition-all duration-300 ease-in-out '>
      <div className={`${variant ==='container'? 'w-full':"w-[250px]" }  flex flex-col`}>
        <img src={image} alt='blog image' className='rounded-md mb-4 w-full object-cover h-48' />
      </div>
      <article className='flex w-full flex-col gap-2'>
        <h6 className='capitalize font-bold text-[#4b5563] poppins-semibold'>{truncatedTitle}</h6>
        <p className='text-sm text-[#6b7280] tracking-wide'>{truncatedDescription}</p>
        <p className='text-sm text-[var(--primary-blue)] tracking-wide font-bold hover:underline'>Read More →</p>
      </article>
    </Link>
  )
}
export default BlogCard