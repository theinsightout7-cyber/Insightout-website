// ProjectModal.tsx
import { useState, useEffect, useRef } from 'react'

export interface Project {
  id: number
  title: string
  sector: string
  image: string
  problem: string
  solution: string
  impact?: string
  images: string[]
}

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const totalSlides = project ? Math.max(2, project.images.length) : 0

  const storySlides = project
    ? [
        {
          label: 'The Challenge',
          icon: '⚡',
          color: '#f16a30',
          content: project.problem,
        },
        {
          label: 'Our Solution',
          icon: '💡',
          color: '#1c98d3',
          content: project.solution,
        },
      ]
    : []

  useEffect(() => {
    if (!project) return
    setSlideIndex(0)
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [project])

  const handleDot = (i: number) => {
    setSlideIndex(i)
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)
  }

  const handlePrev = () =>
    handleDot((slideIndex - 1 + totalSlides) % totalSlides)
  const handleNext = () => handleDot((slideIndex + 1) % totalSlides)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [slideIndex, totalSlides])

  if (!project) return null

  const currentImage = project.images[slideIndex % project.images.length]
  const currentStory = storySlides[slideIndex % storySlides.length]

  return (
    <div
      className='fixed inset-0 z-50 flex flex-col'
      style={{ background: '#fff' }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: 4,
          background: 'linear-gradient(90deg, #1c98d3, #f16a30)',
          flexShrink: 0,
        }}
      />

      {/* Header */}
      <div
        className='flex items-start justify-between px-8 py-5 flex-shrink-0'
        style={{ borderBottom: '1px solid rgba(28,152,211,0.1)' }}
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#f16a30',
              background: 'rgba(241,106,48,0.1)',
              borderRadius: 99,
              padding: '3px 10px',
              marginBottom: 6,
            }}
          >
            {project.sector}
          </span>
          <h3
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
              lineHeight: 1.15,
              color: '#082e3f',
              margin: 0,
            }}
          >
            {project.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'rgba(8,46,63,0.07)',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: 20,
            color: '#082e3f',
            flexShrink: 0,
            marginLeft: 16,
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background =
              'rgba(241,106,48,0.15)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background =
              'rgba(8,46,63,0.07)')
          }
        >
          ×
        </button>
      </div>

      {/* 2-column carousel body — fills remaining height */}
      <div
        className='flex flex-col md:flex-row flex-1 overflow-hidden'
        style={{ minHeight: 0 }}
      >
        {/* LEFT — Problem / Solution */}
        <div
          className='flex flex-col justify-center px-10 py-8 md:w-1/2 flex-shrink-0'
          style={{
            background: '#f5f3ff',
            borderRight: '1px solid rgba(28,152,211,0.1)',
            overflowY: 'auto',
          }}
        >
          {/* Slide label */}
          <div className='flex items-center gap-3 mb-6'>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: currentStory.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                flexShrink: 0,
              }}
            >
              {currentStory.icon}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#b0c4cf',
                  margin: 0,
                }}
              >
                {String((slideIndex % storySlides.length) + 1).padStart(2, '0')}{' '}
                / {String(storySlides.length).padStart(2, '0')}
              </p>
              <h5
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  color: currentStory.color,
                  margin: 0,
                }}
              >
                {currentStory.label}
              </h5>
            </div>
          </div>

          {/* Split divider */}
          <div
            className='flex rounded-full overflow-hidden mb-6'
            style={{ width: 44, height: 6 }}
          >
            <div style={{ flex: 1, background: '#1c98d3' }} />
            <div style={{ flex: 1, background: '#f16a30' }} />
          </div>

          {/* Content */}
          <p
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.9,
              color: '#5a7282',
              margin: 0,
            }}
          >
            {currentStory.content}
          </p>
        </div>

        {/* RIGHT — Project images */}
        <div
          className='relative md:w-1/2 flex-shrink-0 overflow-hidden'
          style={{ minHeight: 320 }}
        >
          <img
            key={currentImage}
            src={currentImage}
            alt={project.title}
            className='w-full h-full object-cover'
            style={{
              transition: 'opacity 0.4s ease',
              animation: 'imgFade 0.4s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(8,46,63,0.4) 0%, transparent 50%)',
              pointerEvents: 'none',
            }}
          />

          {/* Image counter */}
          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 99,
              padding: '4px 14px',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: '11px',
              color: '#fff',
            }}
          >
            {(slideIndex % project.images.length) + 1} / {project.images.length}
          </div>
        </div>
      </div>

      {/* Footer — nav controls + dots */}
      <div
        className='flex items-center justify-between px-8 py-4 flex-shrink-0'
        style={{ borderTop: '1px solid rgba(28,152,211,0.1)' }}
      >
        {/* Prev / Next */}
        <div className='flex gap-2'>
          <button
            onClick={handlePrev}
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: '#fff',
              border: '1.5px solid rgba(28,152,211,0.2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1c98d3',
              fontSize: '1rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = '#1c98d3'
              ;(e.currentTarget as HTMLElement).style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = '#fff'
              ;(e.currentTarget as HTMLElement).style.color = '#1c98d3'
            }}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: '#1c98d3',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = '#f16a30')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = '#1c98d3')
            }
          >
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div className='flex gap-2 items-center'>
          {Array.from({ length: totalSlides - 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              style={{
                width: slideIndex === i ? 24 : 8,
                height: 8,
                borderRadius: 99,
                border: 'none',
                background:
                  slideIndex === i ? '#f16a30' : 'rgba(28,152,211,0.2)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
          ))}
        </div>

        {/* Keyboard hint */}
        <p
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: '10px',
            color: '#b0c4cf',
            margin: 0,
          }}
        >
          ← → keys to navigate
        </p>
      </div>
    </div>
  )
}

export default ProjectModal
