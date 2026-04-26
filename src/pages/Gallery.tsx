// GalleryDisplay.tsx — replaces old Gallery.tsx
import { useState } from 'react'
import GalleryItem from '../components/GalleryComponent'
import ProjectModal from '../components/GalleryContainer'
import type { Project } from '../components/GalleryContainer'
import { PROJECTS } from '../data/data'

const GalleryDisplay = ({ projects }: { projects: Project[] }) => {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full  gap-4'>
        {projects.map((project, index) => (
          <GalleryItem
            key={project.id}
            image={project.image}
            title={project.title}
            sector={project.sector}
            index={index}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

// // export default GalleryDisplay

// ─────────────────────────────────────────────────────────────
// GalleryContainer.tsx
// ─────────────────────────────────────────────────────────────
// import type { Project as Proj } from '../components/GalleryContainer'

export const GalleryContainer = ({ projects }: { projects: any }) => {
  return (
    <section className='mx-auto  px-4 container'>
      <GalleryDisplay projects={projects} />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// Gallery page (GalleryPage.tsx) — with dummy data
// ─────────────────────────────────────────────────────────────
// import type { Project as P } from '../components/GalleryContainer'

// ── Dummy project data ──────────────────────────────────────
// Replace image URLs with your real imports when ready

const GalleryPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap');

        .gallery-page { animation: secFade 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes secFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes imgFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className='gallery-page flex flex-col container mt-24 my-12 px-4 md:px-0'>
        {/* ── Page header ── */}
        <div className='flex flex-col items-center text-center mb-12'>
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
              Our Work in the Field
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
            Project <span style={{ color: '#1c98d3' }}>Gallery</span>
          </h1>

          <div
            className='flex rounded-full overflow-hidden mb-5'
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
              maxWidth: 520,
            }}
          >
            Explore our portfolio of work across health, education, agriculture,
            governance and more. Click any project to see the challenge, our
            approach, and the impact we delivered.
          </p>
        </div>

        {/* ── Gallery ── */}
        <GalleryContainer projects={PROJECTS} />
      </div>
    </>
  )
}

export default GalleryPage
