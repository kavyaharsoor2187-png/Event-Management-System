
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import Register from './pages/Register'
import MyEvents from './pages/MyEvents'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Home')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleViewDetails = (event) => {
    setSelectedEvent(event)
    setActivePage('EventDetails')
  }

  const handleRegister = (event) => {
    setSelectedEvent(event)
    setActivePage('Register')
  }

  return (
    <div className="app">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-container">
        {activePage === 'Home' && (
          <Home onViewDetails={handleViewDetails} />
        )}

        {activePage === 'EventDetails' && (
          <EventDetails
            event={selectedEvent}
            onRegister={handleRegister}
            onBack={() => setActivePage('Home')}
          />
        )}

        {activePage === 'Register' && (
          <Register
            event={selectedEvent}
            onBack={() => setActivePage('EventDetails')}
            onSuccess={() => setActivePage('MyEvents')}
          />
        )}

        {activePage === 'MyEvents' && (
          <MyEvents onViewDetails={handleViewDetails} />
        )}
      </main>
    </div>
  )
}

export default App
