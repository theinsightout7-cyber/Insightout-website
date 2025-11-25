'use client'
import { useState, useEffect } from 'react'

// import Logo from '@/assets/insight-out-logo.png'
import { links } from '../../data/data'
import { GrMenu } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import logo from '../../assets/full_logo-removebg-edited-removebg-preview.png'
import Sidebar from '../Sidebar'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div
      className={`flex flex-col shadow-sm fixed h-[80px] z-40 top-0 left-0 w-full bg-white transition-shadow ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className='flex flex-col'>
        <ul className='flex flex-row justify-between items-center py-4 mx-4 md:mx-12'>
          <Link to={'/'}>
          <img src={logo} alt='logo' className='w-[150px]' />
          </Link>
          <div className='sm:flex flex-row items-center justify-center hidden'>
            {links.map((link) => (
              <li key={link.id} className='mr-4'>
                <Link
                  to={link.url}
                  className='text-gray-800 hover:text-[var(--primary-blue)] capitalize'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
          <button
            className='flex sm:hidden'
            onClick={() => setIsSidebarOpen(true)}
          >
            <GrMenu className='text-2xl' />
          </button>
        </ul>
      </nav>
      <Sidebar openSidebar={isSidebarOpen} handleOpenSidebar={handleSidebarClose} />
    </div>
  )
}

export default Navbar
