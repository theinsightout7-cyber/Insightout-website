import { useState, useEffect } from 'react'
import { approach } from '../data/data'

const ApproachContainer = () => {
  const [productIndex, setProductIndex] = useState(0)

  const handleSlider = (index: number) => setProductIndex(index)

  useEffect(() => {
    const lastIndex = approach.length - 1
    const slider = setInterval(() => {
      setProductIndex((prev) => (prev === lastIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(slider)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .approach-section { animation: secFade 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes secFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .approach-img {
          transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .approach-item {
          transition: background 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
          border-left: 3px solid transparent;
        }
        .approach-item:hover {
          background: rgba(28,152,211,0.05);
        }
        .approach-item.active {
          border-left: 3px solid #f16a30;
          background: rgba(28,152,211,0.07);
        }
        .approach-item.active h5 {
          color: #082e3f !important;
        }
      `}</style>

      <section
        className='approach-section w-full py-8  relative overflow-hidden'
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
          <div className='flex flex-col items-center text-center mb-14'>
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
                How We Work
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
              Our Unique <span style={{ color: '#1c98d3' }}>Approach</span>
            </h2>

            <div
              className='flex rounded-full overflow-hidden'
              style={{ width: 48, height: 4 }}
            >
              <div style={{ flex: 1, background: '#1c98d3' }} />
              <div style={{ flex: 1, background: '#f16a30' }} />
            </div>
          </div>

          {/* ── Main content ── */}
          <div className='flex flex-col md:flex-row gap-8 w-full md:h-[460px]'>
            {/* ── Desktop: bar + list paired together ── */}
            <div className='hidden md:flex flex-col w-1/2 gap-2'>
              {approach.slice(0, 5).map((item, index) => {
                const { name, description } = item
                return (
                  <div
                    key={name}
                    className='flex flex-row flex-1 items-stretch gap-0'
                    onClick={() => handleSlider(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Bar segment — exact same height as its card */}
                    <div
                      style={{
                        width: 5,
                        borderRadius: 99,
                        flexShrink: 0,
                        background:
                          productIndex === index
                            ? '#f16a30'
                            : 'rgba(28,152,211,0.15)',
                        transition: 'background 0.3s ease',
                        marginRight: 0,
                      }}
                    />

                    {/* Card */}
                    <div
                      className={`approach-item ${productIndex === index ? 'active' : ''} rounded-r-xl p-4 flex-1`}
                    >
                      <h5
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 800,
                          fontSize: '0.95rem',
                          lineHeight: 1.2,
                          color: productIndex === index ? '#082e3f' : '#1c98d3',
                          marginBottom: 4,
                          transition: 'color 0.25s',
                        }}
                      >
                        {name}
                      </h5>
                      <p
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 400,
                          fontSize: '0.8rem',
                          lineHeight: 1.7,
                          color: '#5a7282',
                          margin: 0,
                        }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* ── Mobile: active item text ── */}
            <div className='flex md:hidden w-full'>
              <div
                className='w-full p-5 rounded-2xl'
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(28,152,211,0.1)',
                  borderLeft: '3px solid #f16a30',
                  boxShadow: '0 2px 20px rgba(8,46,63,0.07)',
                }}
              >
                <h6
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: '#082e3f',
                    marginBottom: 8,
                  }}
                >
                  {approach[productIndex].name}
                </h6>
                <p
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 400,
                    fontSize: '0.85rem',
                    lineHeight: 1.75,
                    color: '#5a7282',
                    margin: 0,
                  }}
                >
                  {approach[productIndex].description}
                </p>
              </div>
            </div>

            {/* ── Image ── */}
            <div className='w-full md:w-1/2 h-64 md:h-full relative flex-shrink-0'>
              {/* Offset border frame */}
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  right: -8,
                  bottom: -8,
                  left: 8,
                  border: '2px solid #1c98d3',
                  borderRadius: 16,
                  opacity: 0.15,
                  pointerEvents: 'none',
                  zIndex: 0,
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
                  borderWidth: '0 52px 52px 0',
                  borderColor: 'transparent #f16a30 transparent transparent',
                  opacity: 0.85,
                  zIndex: 10,
                }}
              />

              <div
                className='relative overflow-hidden rounded-2xl w-full h-full z-10'
                style={{ boxShadow: '0 12px 48px rgba(8,46,63,0.13)' }}
              >
                <img
                  src={approach[productIndex].image}
                  alt={approach[productIndex].name}
                  className='approach-img w-full h-full object-cover object-center'
                />
                {/* Subtle bottom fade */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(8,46,63,0.2) 0%, transparent 45%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Orange accent block — bottom left */}
              <div
                style={{
                  position: 'absolute',
                  bottom: -12,
                  left: -12,
                  width: 48,
                  height: 48,
                  background: '#f16a30',
                  borderRadius: 10,
                  opacity: 0.2,
                  zIndex: 0,
                }}
              />
            </div>
          </div>

          {/* ── Mobile dot indicators ── */}
          <div className='flex md:hidden gap-3 mt-8 justify-center'>
            {approach.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleSlider(index)}
                style={{
                  width: productIndex === index ? 28 : 10,
                  height: 10,
                  borderRadius: 99,
                  background:
                    productIndex === index ? '#1c98d3' : 'rgba(28,152,211,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ApproachContainer
