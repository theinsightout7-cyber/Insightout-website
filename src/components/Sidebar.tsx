// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import Modal from './Modal'
import { links } from '../data/data'


// import React from 'react'
interface SidebarProps {
  openSidebar: boolean
  handleOpenSidebar: () => void
}

const Sidebar = ({ openSidebar, handleOpenSidebar }: SidebarProps) => {
  return (
    <Modal openModal={openSidebar}>
      <aside
        className={`fixed top-0 right-0 z-50 p-4 gap-6 flex flex-col bg-white h-full max-w-[450px] w-[85%] overflow-y-scroll
          transition-transform duration-300 ease-in-out
          ${openSidebar ? 'translate-x-0' : 'translate-x-full pointer-events-none'}
        `}
        style={{ willChange: 'transform' }}
      >
        <button onClick={handleOpenSidebar}>
          <FiX className='text-2xl'/>
        </button>
        <ul className='gap-8 flex flex-col text-gray-800 capitalize'>
          {links.map((link) => (
            <li key={link.id} className='hover:text-[var(--primary-blue)] transition-colors duration-300'>
              <Link onClick={()=>handleOpenSidebar()} to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </Modal>
  )
}

export default Sidebar