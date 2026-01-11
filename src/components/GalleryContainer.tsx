import Gallery from './GalleryDisplay'

const GalleryContainer = ({
  images,
}: {
  images: { id: number; image: string }[]
}) => {
  return (
    <section className='mx-auto max-w-7xl px-4  container'>
      <Gallery images={images} />
    </section>
  )
}

export default GalleryContainer
