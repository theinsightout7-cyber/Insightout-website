import { useState } from 'react'
import GalleryItem from './GalleryComponent'
import ImageModal from './GalleryModal'

const Gallery = ({ images }: { images: { id: number; image: string }[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className='columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4'>
        {images.map((item) => (
          <GalleryItem
            key={item.id}
            image={item.image}
            onClick={() => setSelectedImage(item.image)}
          />
        ))}
      </div>

      <ImageModal
        image={selectedImage || ''}
        onClose={() => setSelectedImage(null)}
      />
    </>
  )
}

export default Gallery
