// EventCard.tsx
import { useRef } from 'react'

interface EventProps {
  id: string | number
  name: string
  description: string
  image: string
}

const EventCard = ({
  name,
  description,
  img,
  events,
  active,
  handleChange,
}: {
  name: string
  description: string
  img: string
  events: EventProps[]
  active: number
  handleChange: (index: number) => void
}) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const articleRef = useRef<HTMLElement>(null)

  return (
    <div className='flex flex-col h-[650px] md:h-[520px]'>
      <div
        className='flex flex-col md:flex-row w-full justify-center items-center h-full rounded-2xl overflow-hidden'
        style={{
          boxShadow: '0 4px 32px rgba(8,46,63,0.10)',
          border: '1.5px solid rgba(28,152,211,0.09)',
          background: '#fff',
        }}
      >
        {/* ── Text side ── */}
        <article
          ref={articleRef}
          className='w-full flex flex-col items-center order-2 md:order-1 md:w-1/2 md:px-12 px-6 h-full justify-center relative'
        >
          {/* Top-left orange accent bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 4,
              height: '100%',
              background: '#f16a30',
            }}
          />

          {/* Eyebrow */}
          <div className='flex items-center gap-2 mb-4 self-start ml-2'>
            <span
              style={{
                display: 'inline-block',
                width: 20,
                height: 2.5,
                borderRadius: 99,
                background: '#f16a30',
              }}
            />
            <span
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: '10.5px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#f16a30',
              }}
            >
              Past Activities
            </span>
          </div>

          {/* Event name */}
          <h4
            className='w-full text-left ml-2 mb-3'
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: '#082e3f',
            }}
          >
            {name}
          </h4>

          {/* Divider */}
          <div
            className='flex rounded-full overflow-hidden mb-4 self-start ml-2'
            style={{ width: 40, height: 3.5 }}
          >
            <div style={{ flex: 1, background: '#1c98d3' }} />
            <div style={{ flex: 1, background: '#f16a30' }} />
          </div>

          {/* Description */}
          <p
            className='w-full text-left ml-2'
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 400,
              fontSize: '0.875rem',
              lineHeight: 1.85,
              color: '#5a7282',
            }}
          >
            {description}
          </p>

          {/* Dot indicators */}
          <div className='flex gap-3 mt-8 self-start ml-2'>
            {events.map((event, index) => (
              <button
                key={event.id}
                onClick={() => handleChange(index)}
                style={{
                  width: active === index ? 28 : 10,
                  height: 10,
                  borderRadius: 99,
                  background:
                    active === index ? '#1c98d3' : 'rgba(28,152,211,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </article>

        {/* ── Image side ── */}
        <div className='flex order-1 md:order-2 w-full md:w-1/2 h-full relative overflow-hidden'>
          <img
            ref={imgRef}
            src={img}
            alt={name}
            className='object-cover w-full h-full object-center'
            style={{ transition: 'opacity 0.4s ease' }}
          />

          {/* Subtle bottom fade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(8,46,63,0.35) 0%, transparent 40%)',
              pointerEvents: 'none',
            }}
          />

          {/* Event counter badge */}
          <div
            className='absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl'
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.28)',
            }}
          >
            <span
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                color: '#fff',
                letterSpacing: '0.04em',
              }}
            >
              {String(active + 1).padStart(2, '0')} /{' '}
              {String(events.length).padStart(2, '0')}
            </span>
          </div>

          {/* Orange corner triangle */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 0,
              height: 0,
              borderStyle: 'solid',
              borderWidth: '0 0 52px 52px',
              borderColor: 'transparent transparent #f16a30 transparent',
              opacity: 0.85,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default EventCard
