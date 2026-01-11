const GalleryItem = ({
  image,
  onClick,
}: {
  image: string
  onClick: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className='cursor-pointer overflow-hidden rounded-xl bg-gray-200'
    >
      <img
        src={image}
        alt=''
        className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
      />
    </div>
  )
}

export default GalleryItem
