import { infoArray } from '../data/data'
import image from '../../src/assets/front-mission.jpg'
import image2 from '../../src/assets/front-vission.jpg'
import image3 from '../../src/assets/people-office-work-day.jpg'

const CARD_CONFIG = [
  {
    label: 'Our Mission',
    image: image,
    accentColor: '#1c98d3',
    cornerColor: '#f16a30',
    icon: (
      <svg width='22' height='22' fill='none' viewBox='0 0 24 24'>
        <path
          d='M12 2L2 7l10 5 10-5-10-5z'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinejoin='round'
        />
        <path
          d='M2 17l10 5 10-5M2 12l10 5 10-5'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    label: 'Our Vision',
    image: image2,
    accentColor: '#f16a30',
    cornerColor: '#1c98d3',
    icon: (
      <svg width='22' height='22' fill='none' viewBox='0 0 24 24'>
        <circle cx='12' cy='12' r='3' stroke='currentColor' strokeWidth='1.8' />
        <path
          d='M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
  {
    label: 'Our Values',
    image: image3,
    accentColor: '#1c98d3',
    cornerColor: '#f16a30',
    icon: (
      <svg width='22' height='22' fill='none' viewBox='0 0 24 24'>
        <path
          d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
]

const MissionCard = ({
  description,
  name,
  index,
}: {
  description: string
  name: string
  index: number
}) => {
  const cfg = CARD_CONFIG[index % CARD_CONFIG.length]

  return (
    <article
      className='mission-card flex flex-col rounded-2xl mb-12 overflow-hidden w-full'
      style={{
        animationDelay: `${index * 0.12}s`,
        background: '#fff',
        boxShadow: '0 2px 24px rgba(8,46,63,0.08)',
        border: `1.5px solid rgba(28,152,211,0.1)`,
        transition:
          'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
        flex: 1,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-7px)'
        el.style.boxShadow = `0 20px 60px rgba(8,46,63,0.14)`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = '0 2px 24px rgba(8,46,63,0.08)'
      }}
    >
      {/* ── Image ── */}
      <div className='relative overflow-hidden' style={{ height: 215 }}>
        <img
          src={cfg.image}
          alt={cfg.label}
          className='w-full h-full object-cover'
          style={{ transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)' }}
          onMouseEnter={(e) =>
            ((e.target as HTMLImageElement).style.transform = 'scale(1.06)')
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLImageElement).style.transform = 'scale(1)')
          }
        />

        {/* Subtle bottom fade only — keeps image clear */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(to top, rgba(8,46,63,0.52) 0%, transparent 42%)',
          }}
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
            borderWidth: '0 56px 56px 0',
            borderColor: `transparent ${cfg.cornerColor} transparent transparent`,
          }}
        />

        {/* Icon in corner */}
        <div style={{ position: 'absolute', top: 7, right: 7, color: '#fff' }}>
          {cfg.icon}
        </div>

        {/* Label pill */}
        <div
          className='absolute bottom-4 left-4 flex items-center gap-2'
          style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.28)',
            borderRadius: 99,
            padding: '5px 13px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: cfg.cornerColor,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '10.5px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            {cfg.label}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className='flex flex-col flex-1 p-6'>
        {/* Two-block accent bar — blue | orange, solid, no gradient */}
        <div
          className='flex mb-5 rounded-full overflow-hidden'
          style={{ width: 44, height: 3.5 }}
        >
          <div style={{ flex: 1, background: '#1c98d3' }} />
          <div style={{ flex: 1, background: '#f16a30' }} />
        </div>

        {/* Title */}
        <h4
          className='capitalize mb-3'
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            color: '#082e3f',
          }}
        >
          {name}
        </h4>

        {/* Body */}
        <p
          className='flex-1'
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

        {/* Footer */}
        <div
          className='mt-6 pt-4 flex items-center justify-between'
          style={{ borderTop: `1.5px solid ${cfg.accentColor}22` }}
        >
          <div className='flex items-center gap-2'>
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#f16a30',
              }}
            />
            <span
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '10.5px',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#b0c4cf',
              }}
            >
              InsightOut
            </span>
          </div>
          <span style={{ color: cfg.accentColor, opacity: 0.5 }}>
            {cfg.icon}
          </span>
        </div>
      </div>
    </article>
  )
}

// ── Container ───────────────────────────────────────────
const MissionCardContainer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .mission-section { animation: secFade 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes secFade {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mission-card { animation: cardUp 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes cardUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        className='mission-section w-full  overflow-hidden'
        style={{ background: '#fff' }}
      >
        {/* BG arc — blue top right */}
        <svg
          className='absolute top-0 right-0 pointer-events-none select-none'
          width='240'
          height='240'
          viewBox='0 0 240 240'
          fill='none'
          style={{ opacity: 0.05 }}
        >
          <circle cx='240' cy='0' r='170' stroke='#1c98d3' strokeWidth='34' />
        </svg>

        {/* BG arc — orange bottom left */}
        <svg
          className='absolute bottom-0 left-0 pointer-events-none select-none'
          width='180'
          height='180'
          viewBox='0 0 180 180'
          fill='none'
          style={{ opacity: 0.06 }}
        >
          <circle cx='0' cy='180' r='130' stroke='#f16a30' strokeWidth='32' />
        </svg>

        <div className='container mx-auto px-4 md:px-12'>
          {/* Section header */}
          <div className='flex flex-col items-center text-center mb-14'>
            {/* Eyebrow — solid orange dashes */}
            <div className='flex items-center gap-3 mb-5'>
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
                Our Core Principles
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

            {/* Headline — blue + orange, solid, no gradient */}
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#082e3f',
                marginBottom: '1rem',
              }}
            >
              Driven by Purpose,{' '}
              <span style={{ color: '#1c98d3' }}>Guided</span> by{' '}
              <span style={{ color: '#f16a30' }}>Vision</span>
            </h2>

            <p
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: '#5a7282',
                maxWidth: 480,
              }}
            >
              Everything we do at InsightOut is anchored in a clear mission, an
              unwavering vision, and values that guide every decision.
            </p>
          </div>

          {/* Cards */}
          <div className='flex flex-col md:flex-row gap-6'>
            {infoArray.map((attr, i) => (
              <MissionCard
                key={attr.id}
                name={attr.name}
                description={attr.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MissionCardContainer
