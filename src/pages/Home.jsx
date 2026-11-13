
import { useState } from 'react'
import { Search, CalendarDays, Sparkles } from 'lucide-react'
import EventCard from '../components/EventCard'
import events from '../data/events'


function Home({ onViewDetails }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = [
    'All',
    'Technology',
    'Entertainment',
    'Business',
    'Workshop',
    'Sports'
  ]

  const filteredEvents = events.filter(event => {
   
const matchesSearch =
  event.title.toLowerCase().includes(search.toLowerCase()) ||
  event.venue.toLowerCase().includes(search.toLowerCase()) ||
  event.location.toLowerCase().includes(search.toLowerCase()) ||
  event.category.toLowerCase().includes(search.toLowerCase())


    const matchesCategory =
      category === 'All' || event.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">
            <Sparkles size={15} /> Discover Amazing Experiences
          </span>

          <h1>Find Events That <span>Inspire You</span></h1>

          <p>
            Discover exciting events, connect with people
            and create unforgettable memories.
          </p>

          <button
            className="hero-btn"
            onClick={() => document.getElementById('events-section')
              ?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Events <CalendarDays size={18} />
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section" id="events-section">

        <div className="home-section-heading">
          <div>
            <span className="section-tag">DISCOVER</span>
            <h2>Upcoming Events</h2>
            <p>Find the perfect event for your interests.</p>
          </div>

          <span className="event-count">
            {filteredEvents.length} Events Found
          </span>
        </div>

        {/* Search */}
        <div className="event-search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search events, venues or locations..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(item => (
            <button
              key={item}
              className={category === item ? 'category-active' : ''}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="no-events">
            <Search size={35} />
            <h3>No events found</h3>
            <p>Try searching with another keyword or category.</p>
            <button onClick={() => {
              setSearch('')
              setCategory('All')
            }}>
              Clear Filters
            </button>
          </div>
        )}

      </section>
    </div>
  )
}

export default Home
