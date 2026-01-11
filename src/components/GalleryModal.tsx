const ImageModal = ({
  image,
  onClose,
}: {
  image: string
  onClose: () => void
}) => {
  if (!image) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'>
      <button
        onClick={onClose}
        className='absolute top-6 right-6 text-white text-3xl font-light'
      >
        ×
      </button>

      <img
        src={image}
        alt=''
        className='max-h-full max-w-full rounded-lg shadow-2xl'
      />
    </div>
  )
}

export default ImageModal
