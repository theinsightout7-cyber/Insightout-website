import GalleryContainer from '../components/GalleryContainer'
import { galleryImages } from '../data/data'

function Gallery() {
  return (
    <section>
      <div className=' mt-24'>
        <h1 className='text-3xl font-bold mt-20 text-center '>Our Gallery </h1>
        <p className='mt-2 text-gray-600 text-center mb-10'></p>
      </div>
      <div className='mt-12'>
        <GalleryContainer images={galleryImages} />
      </div>
    </section>
  )
}
export default Gallery
