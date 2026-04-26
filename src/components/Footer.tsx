import logo from '../assets/insight-out-logo.png'
import { Link } from 'react-router-dom'
import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { useState } from 'react'
import { links } from '../data/data'

const Footer = () => {
  const [email, setEmail] = useState('')

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .footer-link {
          position: relative;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 0; height: 1.5px;
          background: #f16a30;
          transition: width 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .footer-link:hover { color: #f16a30 !important; }
        .footer-link:hover::after { width: 100%; }

        .social-icon {
          transition: color 0.2s, transform 0.2s;
        }
        .social-icon:hover {
          color: #f16a30 !important;
          transform: translateY(-3px);
        }

        .footer-input:focus {
          outline: none;
          border-color: #1c98d3;
        }
      `}</style>

      <footer
        className='flex flex-col w-full relative overflow-hidden'
        style={{ background: '#082e3f' }}
      >
        {/* Top orange accent bar */}
        <div
          style={{
            height: 4,
            background: 'linear-gradient(90deg, #1c98d3, #f16a30)',
            width: '100%',
          }}
        />

        {/* Subtle BG arc — top right */}
        <svg
          className='absolute top-0 right-0 pointer-events-none select-none'
          width='300'
          height='300'
          viewBox='0 0 300 300'
          fill='none'
          style={{ opacity: 0.04 }}
        >
          <circle cx='300' cy='0' r='200' stroke='#1c98d3' strokeWidth='40' />
        </svg>

        {/* Subtle BG arc — bottom left */}
        <svg
          className='absolute bottom-0 left-0 pointer-events-none select-none'
          width='200'
          height='200'
          viewBox='0 0 200 200'
          fill='none'
          style={{ opacity: 0.05 }}
        >
          <circle cx='0' cy='200' r='150' stroke='#f16a30' strokeWidth='36' />
        </svg>

        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-12 px-4 md:px-12 py-16 relative z-10'>
          {/* ── Logo & Description ── */}
          <div className='flex flex-col items-start gap-4 max-w-xs'>
            <Link to='/' className='w-[120px] mb-1'>
              <img src={logo} alt='Insight Out Logo' className='w-full' />
            </Link>

            {/* Split divider */}
            <div
              className='flex rounded-full overflow-hidden'
              style={{ width: 40, height: 3 }}
            >
              <div style={{ flex: 1, background: '#1c98d3' }} />
              <div style={{ flex: 1, background: '#f16a30' }} />
            </div>

            <p
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 400,
                fontSize: '0.875rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.65)',
                margin: 0,
              }}
            >
              Your trusted partner in innovative consulting solutions — helping
              organisations dream, do, and deliver impact.
            </p>

            {/* Social icons */}
            <div className='flex gap-4 mt-2'>
              <a
                href='https://x.com/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='X'
              >
                <FaXTwitter className='social-icon text-white text-xl' />
              </a>
              <a
                href='https://www.instagram.com/insightoutng?igsh=YzJhM2c1dWJpN3pk'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FaInstagram className='social-icon text-white text-xl' />
              </a>
              <a
                href='https://www.linkedin.com/company/insightout-ng/posts/?feedView=all'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedin className='social-icon text-white text-xl' />
              </a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <nav className='flex flex-col gap-3'>
            <div className='flex items-center gap-2 mb-3'>
              <span
                style={{
                  display: 'inline-block',
                  width: 18,
                  height: 2,
                  borderRadius: 99,
                  background: '#f16a30',
                }}
              />
              <span
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#f16a30',
                }}
              >
                Navigation
              </span>
            </div>
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className='footer-link capitalize'
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ── Newsletter ── */}
          <div className='flex flex-col gap-4 max-w-sm w-full'>
            <div className='flex items-center gap-2 mb-1'>
              <span
                style={{
                  display: 'inline-block',
                  width: 18,
                  height: 2,
                  borderRadius: 99,
                  background: '#f16a30',
                }}
              />
              <span
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#f16a30',
                }}
              >
                Newsletter
              </span>
            </div>

            <p
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: '#fff',
                margin: 0,
              }}
            >
              Stay in the loop
            </p>

            <p
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 400,
                fontSize: '0.8rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.55)',
                margin: 0,
              }}
            >
              Get the latest insights, updates and news delivered straight to
              your inbox.
            </p>

            <form
              className='flex gap-0'
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
            >
              <input
                type='email'
                required
                placeholder='Enter your email'
                className='footer-input flex-1 px-4 py-2.5 text-sm outline-none'
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  borderRight: 'none',
                  borderRadius: '8px 0 0 8px',
                  color: '#fff',
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  transition: 'border-color 0.2s',
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type='submit'
                style={{
                  background: '#f16a30',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0 8px 8px 0',
                  padding: '0 20px',
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                  transition: 'background 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    '#1c98d3')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    '#f16a30')
                }
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div
          className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-2 px-4 md:px-12 py-5 mx-4 md:mx-12'
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 400,
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.4)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} InsightOut. All rights reserved.
          </p>
          <div className='flex items-center gap-1.5'>
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#1c98d3',
              }}
            />
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#f16a30',
              }}
            />
            <span
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                marginLeft: 4,
              }}
            >
              Dream. Do.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
