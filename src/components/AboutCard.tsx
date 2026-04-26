import image from '../assets/IMG-gallery-1.jpg'

const AboutCard = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .about-card-section { animation: secFade 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes secFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .about-card-img {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .about-card-img-wrap:hover .about-card-img {
          transform: scale(1.03);
        }
      `}</style>

      <section
        className='about-card-section w-full  relative overflow-hidden'
        style={{ background: '#fff' }}
      >
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
                Our Background
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
              Who We <span style={{ color: '#1c98d3' }}>Are</span>
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

          {/* ── Content ── */}
          <div className='flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16'>
            {/* Image */}
            <div className='about-card-img-wrap relative w-full md:w-1/2 flex-shrink-0'>
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
                  borderColor: 'transparent #f16a30 transparent transparent',
                  opacity: 0.85,
                  zIndex: 10,
                }}
              />

              <div
                className='relative overflow-hidden rounded-2xl z-10'
                style={{ boxShadow: '0 12px 48px rgba(8,46,63,0.13)' }}
              >
                <img
                  src={image}
                  alt='InsightOut team'
                  className='about-card-img w-full object-cover object-center'
                  style={{ height: 420 }}
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
                  width: 52,
                  height: 52,
                  background: '#f16a30',
                  borderRadius: 12,
                  opacity: 0.2,
                  zIndex: 0,
                }}
              />
            </div>

            {/* Text */}
            <article className='flex flex-col w-full md:w-1/2 gap-6'>
              {/* Orange left border accent */}
              <div
                style={{
                  borderLeft: '3px solid #f16a30',
                  paddingLeft: 16,
                  marginBottom: 4,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 600,
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#082e3f',
                    fontStyle: 'italic',
                  }}
                >
                  "Practical solutions create real change."
                </p>
              </div>

              <p
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  lineHeight: 1.9,
                  color: '#5a7282',
                }}
              >
                InsightOut was founded on the belief that practical solutions
                create real change. We began by supporting small organisations
                to structure their ideas and secure funding. Over time, our work
                expanded to include governments, development partners, and
                private organisations across sectors. Today, InsightOut is a
                strategy and development consulting firm dedicated to helping
                organisations deliver solutions that advance social impact and
                strengthen institutions. We remain committed to helping
                institutions build stronger programmes, stronger systems, and
                stronger impact by working at the intersection of policy,
                innovation, and practical execution, enabling clients to create
                valuable impact.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
