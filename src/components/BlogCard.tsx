import { Link } from 'react-router-dom'

const BlogCard = ({
  id,
  image,
  description,
  name,
  variant,
  index = 0,
}: {
  id: number | string
  image: string
  description: string
  name: string
  variant: string
  index?: number
}) => {
  const isOrange = index % 2 !== 0

  const truncatedDescription =
    description.split(' ').slice(0, 20).join(' ') +
    (description.split(' ').length > 20 ? '...' : '')

  const truncatedTitle =
    name.split(' ').slice(0, 10).join(' ') +
    (name.split(' ').length > 10 ? '...' : '')

  return (
    <Link
      to={`/insight/${id}`}
      className='flex flex-col flex-shrink-0'
      style={{
        width: variant === 'container' ? '100%' : '280px',
        maxWidth: variant === 'container' ? '100%' : '280px',
        height: 420,
        background: '#fff',
        borderRadius: 16,
        border: '1.5px solid rgba(28,152,211,0.09)',
        boxShadow: '0 2px 20px rgba(8,46,63,0.07)',
        overflow: 'hidden',
        textDecoration: 'none',
        transition:
          'transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease, border-color 0.2s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-6px)'
        el.style.boxShadow = '0 16px 48px rgba(8,46,63,0.13)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = '0 2px 20px rgba(8,46,63,0.07)'
        el.style.borderColor = 'rgba(28,152,211,0.09)'
      }}
    >
      {/* Top accent bar */}

      {/* Image */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: 180,
          flexShrink: 0,
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLImageElement).style.transform = 'scale(1.06)')
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLImageElement).style.transform = 'scale(1)')
          }
        />

        {/* Orange corner triangle */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '0 44px 44px 0',
            borderColor: `transparent ${isOrange ? '#1c98d3' : '#f16a30'} transparent transparent`,
            opacity: 0.9,
          }}
        />
      </div>

      {/* Content */}
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '20px 20px 16px',
        }}
      >
        {/* Split accent bar */}
        <div
          style={{
            display: 'flex',
            borderRadius: 99,
            overflow: 'hidden',
            width: 36,
            height: 3,
            marginBottom: 12,
            flexShrink: 0,
          }}
        >
          <div style={{ flex: 1, background: '#1c98d3' }} />
          <div style={{ flex: 1, background: '#f16a30' }} />
        </div>

        {/* Title */}
        <h6
          className='capitalize'
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: '0.95rem',
            lineHeight: 1.3,
            color: '#082e3f',
            marginBottom: 8,
          }}
        >
          {truncatedTitle}
        </h6>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 400,
            fontSize: '0.8rem',
            lineHeight: 1.75,
            color: '#5a7282',
            flex: 1,
          }}
        >
          {truncatedDescription}
        </p>

        {/* Read more */}
        <p
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: '0.8rem',
            color: isOrange ? '#f16a30' : '#1c98d3',
            marginTop: 12,
            letterSpacing: '0.02em',
          }}
        >
          Read More →
        </p>
      </article>
    </Link>
  )
}

export default BlogCard
