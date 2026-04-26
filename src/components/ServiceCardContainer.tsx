import ServiceCard from './ReusableComponents/ServiceCard'
import type { IconType } from 'react-icons'

interface DataProps {
  id?: number | string
  service?: string
  description: string
  icon: IconType
  color?: string
  title?: string
  name?: string
  background?: string
}

const ServiceCardContainer = ({
  heading,
  data,
}: {
  heading: string
  data: DataProps[]
}) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');
      `}</style>

      <article className='py-16 gap-4 bg-[#f5f3ff] w-full flex flex-col justify-center items-center relative overflow-hidden'>
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

        {/* ── Header ── */}
        <div className='flex flex-col items-center text-center px-4'>
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
              What We Do
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
            className='font-bold capitalize text-center poppins-extrabold mb-3'
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.7rem, 3vw, 2.6rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#082e3f',
            }}
          >
            {heading}
          </h2>

          {/* Blue | orange split divider */}
          <div
            className='flex rounded-full overflow-hidden mb-4'
            style={{ width: 48, height: 4 }}
          >
            <div style={{ flex: 1, background: '#1c98d3' }} />
            <div style={{ flex: 1, background: '#f16a30' }} />
          </div>
        </div>

        {/* ── Original grid ── */}
        <div className='md:mx-0 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((service, index) => (
            <div
              key={service.id}
              className={
                index === data.length - 1 && data.length % 3 === 1
                  ? 'lg:col-start-2'
                  : ''
              }
            >
              <ServiceCard
                service={service.service || service.title || service.name || ''}
                description={service.description}
                icon={service.icon}
                color={service.color}
                background={service.background}
              />
            </div>
          ))}
        </div>
      </article>
    </>
  )
}

export default ServiceCardContainer
