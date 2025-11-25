import type { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  openModal: boolean
}
const Modal: React.FC<ModalProps> = ({ openModal, children }) => {
  // Always render the modal, but only show the background when openModal is true
  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center`}
      style={{ pointerEvents: openModal ? 'auto' : 'none' }}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${openModal ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default Modal