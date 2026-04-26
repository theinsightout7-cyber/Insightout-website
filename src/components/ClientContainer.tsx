import ClientsCard from './ClientsCard'
import { entities } from '../data/data'
import { useState } from 'react'

const ClientContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleChange = (index: number) => setActiveIndex(index)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .clients-section { animation: secFade 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes secFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        className='clients-section w-full py-12 md:py-12 relative overflow-hidden'
        style={{ background: '#fff' }}
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
            {/* Eyebrow */}
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
                Our Reach
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

            {/* Headline */}
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
              Who We <span style={{ color: '#1c98d3' }}>Serve</span>
            </h2>

            {/* Split divider */}
            <div
              className='flex rounded-full overflow-hidden mb-4'
              style={{ width: 48, height: 4 }}
            >
              <div style={{ flex: 1, background: '#1c98d3' }} />
              <div style={{ flex: 1, background: '#f16a30' }} />
            </div>

            <p
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: '#5a7282',
                maxWidth: 480,
              }}
            >
              From startups to established institutions, InsightOut works across
              sectors to drive meaningful, lasting impact.
            </p>
          </div>

          {/* ── Desktop grid ── */}
          <div className='md:grid justify-center mx-auto sm:grid-cols-2 lg:grid-cols-3 hidden gap-6 w-full'>
            {entities.map((entity, index) => (
              <ClientsCard
                key={entity.sector}
                description={entity.description}
                sector={entity.sector}
                bg={`url('${entity.image}')`}
                index={index}
              />
            ))}
          </div>

          {/* ── Mobile single card + dots ── */}
          <div className='grid grid-cols-1 md:hidden w-full'>
            <ClientsCard
              key={entities[activeIndex].sector}
              description={entities[activeIndex].description}
              sector={entities[activeIndex].sector}
              bg={`url('${entities[activeIndex].image}')`}
              index={activeIndex}
            />

            {/* Pill dot indicators */}
            <div className='flex gap-3 mt-6 justify-center'>
              {entities.map((entity, index) => (
                <button
                  key={entity.sector}
                  onClick={() => handleChange(index)}
                  style={{
                    width: activeIndex === index ? 28 : 10,
                    height: 10,
                    borderRadius: 99,
                    background:
                      activeIndex === index
                        ? '#1c98d3'
                        : 'rgba(28,152,211,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClientContainer
