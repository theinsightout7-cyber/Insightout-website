const GalleryItem = ({
  image,
  title,
  sector,
  onClick,
  index = 0,
}: {
  image: string
  title: string
  sector: string
  onClick: () => void
  index?: number
}) => {
  const isOrange = index % 2 !== 0

  return (
    <div
      onClick={onClick}
      className='w-full mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden'
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
        loading='lazy'
      />

      {/* Overlay */}
      <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <div className='p-4'>
          <span
            className='text-[10px] uppercase tracking-widest px-2 py-1 rounded-full font-semibold text-white'
            style={{
              background: isOrange ? '#f16a30' : '#1c98d3',
            }}
          >
            {sector}
          </span>

          <h6 className='text-white font-extrabold text-sm mt-2'>{title}</h6>

          <p
            className='text-xs mt-1'
            style={{ color: isOrange ? '#f16a30' : '#1c98d3' }}
          >
            View Project →
          </p>
        </div>
      </div>
    </div>
  )
}

export default GalleryItem
