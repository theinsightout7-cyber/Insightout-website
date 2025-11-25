// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Outlet } from 'react-router'
import Navbar from './components/ReusableComponents/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=''>
      <ScrollToTop/>
      <Navbar />

      <Outlet />
      <div className='mt-24'>

      <Footer/>
      </div>
    </div>
  )
}

export default App
