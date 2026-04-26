// EventCardContainer.tsx
import { useState, useEffect, useRef } from 'react'
import { events } from '../data/data'
import EventCard from './EventCard'

const EventCardContainer = () => {
  const [active, setActive] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const handleChange = (event: number) => {
    setActive(event)
    // Reset interval on manual change so it doesn't jump early
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % events.length)
    }, 5000)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % events.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .events-section { animation: secFade 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes secFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        className='events-section w-full py-20 md:py-28 relative overflow-hidden'
        style={{ background: '#f5f3ff' }}
      >
        {/* BG arc — blue top right */}
        <svg
          className='absolute top-0 right-0 pointer-events-none select-none'
          width='220'
          height='220'
          viewBox='0 0 220 220'
          fill='none'
          style={{ opacity: 0.05 }}
        >
          <circle cx='220' cy='0' r='160' stroke='#1c98d3' strokeWidth='32' />
        </svg>

        {/* BG arc — orange bottom left */}
        <svg
          className='absolute bottom-0 left-0 pointer-events-none select-none'
          width='160'
          height='160'
          viewBox='0 0 160 160'
          fill='none'
          style={{ opacity: 0.07 }}
        >
          <circle cx='0' cy='160' r='120' stroke='#f16a30' strokeWidth='28' />
        </svg>

        <div className='container mx-auto px-4 md:px-12'>
          {/* ── Section header ── */}
          <div className='flex flex-col items-center text-center mb-12'>
            <div className='flex items-center gap-3 mb-4'>
              <span
                style={{
                  display: 'inline-block',
                  width: 28,
                  height: 2.5,
                  borderRadius: 99,
                  background: '#f16a30',
                }}
              />
              <span
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#f16a30',
                }}
              >
                Events & Activities
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: 28,
                  height: 2.5,
                  borderRadius: 99,
                  background: '#f16a30',
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#082e3f',
                marginBottom: '0.75rem',
              }}
            >
              Impact in <span style={{ color: '#1c98d3' }}>Action</span>
            </h2>

            {/* Split divider */}
            <div
              className='flex rounded-full overflow-hidden'
              style={{ width: 48, height: 4 }}
            >
              <div style={{ flex: 1, background: '#1c98d3' }} />
              <div style={{ flex: 1, background: '#f16a30' }} />
            </div>
          </div>

          {/* ── Event card ── */}
          <EventCard
            img={events[active].image}
            description={events[active].description}
            name={events[active].name}
            events={events}
            active={active}
            handleChange={handleChange}
          />
        </div>
      </section>
    </>
  )
}

export default EventCardContainer
