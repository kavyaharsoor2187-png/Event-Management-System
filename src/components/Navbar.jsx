
import { useState } from 'react'
import {
  CalendarDays,
  Home,
  Ticket,
  Menu,
  X
} from 'lucide-react'

function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigation = (page) => {
    setActivePage(page)
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo" onClick={() => handleNavigation('Home')}>
          <div className="logo-icon">
            <CalendarDays size={25} />
          </div>
          <h2>Event<span>Hub</span></h2>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <button
            className={activePage === 'Home' ? 'active-link' : ''}
            onClick={() => handleNavigation('Home')}
          >
            <Home size={18} /> Home
          </button>

          <button
            className={activePage === 'MyEvents' ? 'active-link' : ''}
            onClick={() => handleNavigation('MyEvents')}
          >
            <Ticket size={18} /> My Events
          </button>

          <button
  className="navbar-register-btn"
  onClick={() => {
    handleNavigation('Home')

    setTimeout(() => {
      document.getElementById('events-section')
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }}
>
  Explore Events
</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
