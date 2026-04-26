import { Link } from 'react-router-dom'
import image from '../assets/IMG-gallery-14.jpg'
import ButtonComponent from './ButtonComponent'

const AboutHero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .about-hero-eyebrow { animation: fadeUp 0.6s 0.05s cubic-bezier(0.22,1,0.36,1) both; }
        .about-hero-h1      { animation: fadeUp 0.6s 0.15s cubic-bezier(0.22,1,0.36,1) both; }
        .about-hero-sub     { animation: fadeUp 0.6s 0.25s cubic-bezier(0.22,1,0.36,1) both; }
        .about-hero-body    { animation: fadeUp 0.6s 0.35s cubic-bezier(0.22,1,0.36,1) both; }
        .about-hero-cta     { animation: fadeUp 0.6s 0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .about-hero-img     { animation: fadeUp 0.8s 0.2s  cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-img-wrap img {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
        }
        .about-img-wrap:hover img {
          transform: scale(1.025);
          box-shadow: 0 24px 64px rgba(8,46,63,0.18) !important;
        }
        .about-link {
          position: relative;
          text-decoration: none;
          transition: color 0.2s;
        }
        .about-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 0; height: 1.5px;
          background: #f16a30;
          transition: width 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .about-link:hover::after { width: 100%; }
        .about-link .arrow {
          display: inline-block;
          transition: transform 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        .about-link:hover .arrow { transform: translateX(4px); }
      `}</style>

      <div className='flex flex-col w-full justify-center items-center bg-white md:px-12 px-4'>
        {/* ── Breadcrumb ── */}
        {/* <div
          className='w-full px-6 md:px-14 pt-5 pb-1 flex items-center gap-2'
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 500,
          }}
        >
          <Link
            to='/'
            style={{
              color: '#1c98d3',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = '#f16a30')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = '#1c98d3')
            }
          >
            Home
          </Link>
          <span style={{ color: '#b0c4cf' }}>/</span>
          <span style={{ color: '#f16a30', fontWeight: 700 }}>About Us</span>
        </div> */}

        <div
          className='relative flex gap-4 mt-4 justify-between items-center w-full px-6 md:px-14 py-10 md:py-16 rounded-2xl flex-col sm:flex-row overflow-hidden'
          style={{ backgroundColor: '#e8f5fb' }}
        >
          {/* BG geometry — top right */}
          <svg
            className='absolute top-0 right-0 pointer-events-none select-none'
            width='280'
            height='280'
            viewBox='0 0 280 280'
            fill='none'
            style={{ opacity: 0.05 }}
          >
            <circle cx='280' cy='0' r='190' stroke='#1c98d3' strokeWidth='36' />
            <circle cx='280' cy='0' r='110' stroke='#f16a30' strokeWidth='18' />
          </svg>

          {/* BG geometry — bottom left */}
          <svg
            className='absolute bottom-0 left-0 pointer-events-none select-none'
            width='140'
            height='140'
            viewBox='0 0 140 140'
            fill='none'
            style={{ opacity: 0.04 }}
          >
            <circle cx='0' cy='140' r='110' stroke='#1c98d3' strokeWidth='28' />
          </svg>

          {/* ── LEFT: Text ── */}
          <article className='flex flex-col w-full md:w-1/2 md:order-1 order-2 relative z-10'>
            <div className='flex flex-col w-full items-center justify-center sm:items-start mt-4'>
              {/* Eyebrow */}
              <div className='about-hero-eyebrow flex items-center gap-2 mb-5 mx-auto sm:mx-0'>
                <span
                  style={{
                    display: 'inline-block',
                    width: 24,
                    height: 2.5,
                    borderRadius: 99,
                    background: '#f16a30',
                    flexShrink: 0,
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
                  Our Story
                </span>
              </div>

              {/* Brand name */}
              <h1
                className='about-hero-h1 text-center sm:text-left w-full md:w-[75%]'
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: '#1c98d3',
                }}
              >
                Insight<span style={{ color: '#f16a30' }}>O</span>ut
              </h1>

              {/* Page title */}
              <h3
                className='about-hero-sub text-center sm:text-left mt-2'
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                  color: '#082e3f',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                About Us
              </h3>

              {/* Divider */}
              <div
                className='mt-5 mb-5 mx-auto sm:mx-0 flex rounded-full overflow-hidden'
                style={{ width: 44, height: 3 }}
              >
                <div style={{ flex: 1, background: '#1c98d3' }} />
                <div style={{ flex: 1, background: '#f16a30' }} />
              </div>

              {/* Body */}
              <p
                className='about-hero-body text-center sm:text-left max-w-[440px] w-full'
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  lineHeight: 1.85,
                  color: '#5a7282',
                }}
              >
                At InsightOut, we believe every bold dream deserves a pathway to
                reality. We transform visionary ideas into actionable strategies
                through innovation, collaboration, and purpose — helping
                individuals and organisations achieve impact that truly matters.
              </p>

              {/* CTAs */}
              <div className='about-hero-cta flex items-center gap-6 mt-7 flex-wrap justify-center sm:justify-start'>
                <Link to='/contact'>
                  <ButtonComponent label='Get Started' className='mt-0' />
                </Link>
                <Link
                  to='/services'
                  className='about-link'
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: '#082e3f',
                  }}
                >
                  Our Services <span className='arrow'>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* ── RIGHT: Image ── */}
          <div className='about-hero-img about-img-wrap w-full flex md:w-1/2 sm:order-2 order-1 relative'>
            {/* Offset border frame */}
            <div
              className='absolute pointer-events-none z-0 rounded-xl'
              style={{
                top: 10,
                right: -8,
                bottom: -8,
                left: 8,
                border: '2px solid #1c98d3',
                borderRadius: 14,
                opacity: 0.15,
              }}
            />

            <img
              src={image}
              width={500}
              height={500}
              alt='InsightOut team'
              className='object-cover rounded-xl w-full relative z-10'
              style={{
                maxHeight: 420,
                boxShadow: '0 12px 48px rgba(8,46,63,0.13)',
              }}
            />

            {/* Orange corner triangle on image */}
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
                zIndex: 11,
              }}
            />

            {/* Bottom-left orange accent */}
            <div
              className='absolute -bottom-3 -left-3 rounded-xl pointer-events-none z-0'
              style={{
                width: 52,
                height: 52,
                background: '#f16a30',
                opacity: 0.2,
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutHero
