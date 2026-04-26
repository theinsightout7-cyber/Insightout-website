import { Link } from 'react-router-dom'
import image from '../assets/IMG-gallery-14.jpg'

const AboutSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .about-section { animation: secFade 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes secFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .about-img-wrap img {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .about-img-wrap:hover img {
          transform: scale(1.03);
        }
        .read-more-btn {
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .read-more-btn:hover {
          background: #f16a30 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(241,106,48,0.28);
        }
      `}</style>

      <section className='about-section w-full  bg-white relative overflow-hidden'>
        {/* BG arc — blue top right */}
        <svg
          className='absolute top-0 right-0 pointer-events-none select-none'
          width='220'
          height='220'
          viewBox='0 0 220 220'
          fill='none'
          style={{ opacity: 0.04 }}
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
          style={{ opacity: 0.05 }}
        >
          <circle cx='0' cy='160' r='120' stroke='#f16a30' strokeWidth='28' />
        </svg>

        <div className='container mx-auto px-4 md:px-12'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16'>
            {/* ── Image side ── */}
            <div className='about-img-wrap relative w-full md:w-1/2 flex-shrink-0'>
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
                  opacity: 0.18,
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Orange corner triangle — top right */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: 'solid',
                  borderWidth: '0 56px 56px 0',
                  borderColor: 'transparent #f16a30 transparent transparent',
                  opacity: 0.85,
                  zIndex: 10,
                  borderRadius: '0 16px 0 0',
                }}
              />

              <div
                className='relative overflow-hidden rounded-2xl z-10'
                style={{ boxShadow: '0 12px 48px rgba(8,46,63,0.13)' }}
              >
                <img
                  src={image}
                  alt='InsightOut team'
                  className='w-full object-cover'
                  style={{ maxHeight: 460 }}
                />
                {/* Subtle bottom fade */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(8,46,63,0.25) 0%, transparent 45%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Bottom-left orange accent block */}
              <div
                style={{
                  position: 'absolute',
                  bottom: -12,
                  left: -12,
                  width: 52,
                  height: 52,
                  background: '#f16a30',
                  borderRadius: 12,
                  opacity: 0.2,
                  zIndex: 0,
                }}
              />
            </div>

            {/* ── Text side ── */}
            <article className='flex w-full md:w-1/2'>
              <div className='flex flex-col gap-6'>
                {/* Eyebrow */}
                <div className='flex items-center gap-2'>
                  <span
                    style={{
                      display: 'inline-block',
                      width: 24,
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
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#f16a30',
                    }}
                  >
                    Who We Are
                  </span>
                </div>

                {/* Heading */}
                <h2
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#082e3f',
                    margin: 0,
                  }}
                >
                  About <span style={{ color: '#1c98d3' }}>Insight</span>
                  <span style={{ color: '#f16a30' }}>Out</span>
                </h2>

                {/* Split divider */}
                <div
                  className='flex rounded-full overflow-hidden'
                  style={{ width: 44, height: 3.5 }}
                >
                  <div style={{ flex: 1, background: '#1c98d3' }} />
                  <div style={{ flex: 1, background: '#f16a30' }} />
                </div>

                {/* Body copy */}
                <p
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    lineHeight: 1.9,
                    color: '#5a7282',
                    margin: 0,
                  }}
                >
                  InsightOut is a development consulting firm committed to
                  helping organisations navigate complexity with clarity,
                  strategy, and precision. We support clients across Africa to
                  secure funding, design high-impact programmes, strengthen
                  institutions, and build systems that enable sustainable
                  growth.
                </p>

                <p
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    lineHeight: 1.9,
                    color: '#5a7282',
                    margin: 0,
                  }}
                >
                  From grant sourcing to programme design and implementation,
                  policy development, MEL systems, strategic communications, and
                  stakeholder engagement — we help you strengthen your ideas,
                  improve execution, and scale results.
                </p>

                {/* CTA */}
                <div className='flex items-center gap-5 mt-2 flex-wrap'>
                  <Link to='/about'>
                    <button
                      className='read-more-btn'
                      style={{
                        background: '#1c98d3',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '10px 28px',
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Read More
                    </button>
                  </Link>

                  <Link
                    to='/contact'
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      color: '#082e3f',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                    className='group'
                  >
                    Work with us
                    <span
                      style={{
                        color: '#f16a30',
                        display: 'inline-block',
                        transition: 'transform 0.2s ease',
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.transform =
                          'translateX(4px)')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.transform =
                          'translateX(0)')
                      }
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
