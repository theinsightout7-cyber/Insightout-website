import { useState, useRef, useEffect } from 'react'
import BlogContainer from '../components/BlogContainer'

// ── Custom Dropdown ──────────────────────────────────────
const SortDropdown = ({
  value,
  onChange,
}: {
  value: 'newest' | 'oldest'
  onChange: (val: 'newest' | 'oldest') => void
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const options: { value: 'newest' | 'oldest'; label: string }[] = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
  ]

  const selected = options.find((o) => o.value === value)!

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative', flexShrink: 0 }}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 14px',
          borderRadius: 10,
          border: `1.5px solid ${open ? '#1c98d3' : 'rgba(28,152,211,0.2)'}`,
          background: '#fff',
          cursor: 'pointer',
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 600,
          fontSize: '13px',
          color: '#082e3f',
          minWidth: 160,
          transition: 'border-color 0.2s',
          userSelect: 'none',
        }}
      >
        {/* Calendar icon */}
        <svg width='15' height='15' viewBox='0 0 24 24' fill='none'>
          <rect
            x='3'
            y='4'
            width='18'
            height='18'
            rx='2'
            stroke='#1c98d3'
            strokeWidth='1.8'
          />
          <path
            d='M16 2v4M8 2v4M3 10h18'
            stroke='#1c98d3'
            strokeWidth='1.8'
            strokeLinecap='round'
          />
        </svg>

        <span style={{ flex: 1, textAlign: 'left' }}>{selected.label}</span>

        {/* Chevron */}
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          style={{
            transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
          }}
        >
          <path
            d='M2 4l4 4 4-4'
            stroke='#1c98d3'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            background: '#fff',
            borderRadius: 12,
            border: '1.5px solid rgba(28,152,211,0.15)',
            boxShadow: '0 8px 32px rgba(8,46,63,0.12)',
            overflow: 'hidden',
            zIndex: 50,
            animation: 'dropDown 0.2s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {options.map((opt, i) => {
            const isActive = opt.value === value
            return (
              <button
                key={opt.value}
                onClick={() => {
                  onChange(opt.value)
                  setOpen(false)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '11px 14px',
                  background: isActive ? 'rgba(28,152,211,0.07)' : '#fff',
                  border: 'none',
                  borderBottom:
                    i < options.length - 1
                      ? '1px solid rgba(28,152,211,0.08)'
                      : 'none',
                  cursor: 'pointer',
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '13px',
                  color: isActive ? '#1c98d3' : '#5a7282',
                  textAlign: 'left',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.background =
                      'rgba(28,152,211,0.04)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.background = '#fff'
                }}
              >
                {/* Active dot */}
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: isActive ? '#f16a30' : 'transparent',
                    border: isActive
                      ? 'none'
                      : '1.5px solid rgba(28,152,211,0.2)',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}
                />
                {opt.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

const Blogs = () => {
  const [search, setSearch] = useState('')
  const [sortDate, setSortDate] = useState<'newest' | 'oldest'>('newest')

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .blogs-page { animation: secFade 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes secFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .search-input {
          font-family: 'Bricolage Grotesque', sans-serif;
          border: 1.5px solid rgba(28,152,211,0.2);
          color: #082e3f;
          background: #fff;
          transition: border-color 0.2s;
        }
        .search-input:focus { outline: none; border-color: #1c98d3; }
        .search-input::placeholder { color: #b0c4cf; }

        .clear-btn {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: #f16a30;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
        }
        @keyframes dropDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className='blogs-page flex flex-col container mt-24 my-12 px-4 md:px-0'>
        {/* ── Page header ── */}
        <div className='flex flex-col items-center text-center mb-10'>
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
              Insights & Ideas
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

          <h1
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
            Our Latest <span style={{ color: '#1c98d3' }}>Insights</span>
          </h1>

          <div
            className='flex rounded-full overflow-hidden'
            style={{ width: 48, height: 4 }}
          >
            <div style={{ flex: 1, background: '#1c98d3' }} />
            <div style={{ flex: 1, background: '#f16a30' }} />
          </div>
        </div>

        {/* ── Search + Sort ── */}
        <div className='flex flex-col sm:flex-row gap-3 mb-4 items-stretch sm:items-center'>
          {/* Search */}
          <div className='relative flex-1'>
            <svg
              className='absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
            >
              <circle cx='11' cy='11' r='8' stroke='#b0c4cf' strokeWidth='2' />
              <path
                d='M21 21l-4.35-4.35'
                stroke='#b0c4cf'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
            <input
              type='text'
              placeholder='Search insights...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='search-input w-full pl-9 pr-9 py-2.5 rounded-lg text-sm'
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#b0c4cf',
                  fontSize: 18,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            )}
          </div>

          {/* Sort */}
          <SortDropdown value={sortDate} onChange={setSortDate} />
        </div>

        {/* ── Clear filters ── */}
        {(search || sortDate !== 'newest') && (
          <div className='flex justify-end mb-4'>
            <button
              className='clear-btn'
              onClick={() => {
                setSearch('')
                setSortDate('newest')
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* ── Blog container ── */}
        <div className='flex flex-col mt-8'>
          <BlogContainer variant='container' />
        </div>
      </div>
    </>
  )
}

export default Blogs
