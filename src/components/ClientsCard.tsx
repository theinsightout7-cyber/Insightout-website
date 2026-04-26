interface ClientsCardProps {
  sector: string
  description: string
  bg: string
  index?: number
}

const ClientsCard = ({
  sector,
  description,
  bg,
  index = 0,
}: ClientsCardProps) => {
  const isOrange = index % 2 !== 0

  return (
    <div
      className='group flex flex-col w-full md:max-w-[400px] h-[400px] md:h-[400px] relative overflow-hidden rounded-2xl'
      style={{
        boxShadow: '0 4px 24px rgba(8,46,63,0.10)',
        border: '1.5px solid rgba(28,152,211,0.09)',
        transition:
          'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-5px)'
        el.style.boxShadow = '0 20px 56px rgba(8,46,63,0.15)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = '0 4px 24px rgba(8,46,63,0.10)'
      }}
    >
      {/* Background image */}
      <div
        className='bg-cover bg-center h-full w-full flex flex-col items-center justify-center'
        style={{ backgroundImage: bg }}
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
          borderWidth: '0 52px 52px 0',
          borderColor: `transparent ${isOrange ? '#f16a30' : '#1c98d3'} transparent transparent`,
          opacity: 0.9,
          zIndex: 10,
        }}
      />

      {/* Hover panel */}
      <div
        className='absolute left-1/2 -translate-x-1/2 bottom-4 w-[90%] backdrop-blur-md rounded-2xl flex items-start justify-center p-5 z-10'
        style={{
          height: '45%',
          background: 'rgba(255,255,255,0.92)',
          border: '1px solid rgba(255,255,255,0.6)',
          transition: 'height 0.45s cubic-bezier(0.22,1,0.36,1)',
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.height = '82%')
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.height = '45%')
        }
      >
        <div className='w-full flex flex-col'>
          {/* Accent bar */}
          <div
            className='flex rounded-full overflow-hidden mb-3'
            style={{ width: 36, height: 3 }}
          >
            <div style={{ flex: 1, background: '#1c98d3' }} />
            <div style={{ flex: 1, background: '#f16a30' }} />
          </div>

          {/* Sector name */}
          <h6
            className='mb-2'
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              lineHeight: 1.2,
              color: '#082e3f',
            }}
          >
            {sector}
          </h6>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 400,
              fontSize: '0.82rem',
              lineHeight: 1.75,
              color: '#5a7282',
              overflow: 'hidden',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ClientsCard
