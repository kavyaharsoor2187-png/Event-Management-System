
import { CalendarDays, MapPin, Ticket, ClipboardList } from 'lucide-react'

function MyEvents({ onViewDetails }) {
  const registeredEvents =
    JSON.parse(localStorage.getItem('myEvents')) || []

  return (
    <div className="my-events-page">
      <div className="my-events-heading">
        <span className="section-tag">YOUR BOOKINGS</span>
        <h1>My Events</h1>
        <p>All your registered events in one place.</p>
      </div>

      {registeredEvents.length > 0 ? (
        <div className="my-events-grid">
          {registeredEvents.map(registration => (
            <div className="my-event-card" key={registration.id}>
              <img
                src={registration.event.image}
                alt={registration.event.title}
              />

              <div className="my-event-content">
                <span className="event-category">
                  {registration.event.category}
                </span>

                <h3>{registration.event.title}</h3>

                <p>
                  <CalendarDays size={16} />
                  {registration.event.date}
                </p>

                <p>
                  <MapPin size={16} />
                  {registration.event.venue}
                </p>

                <p>
                  <Ticket size={16} />
                  ₹{registration.event.price}
                </p>

                <button
                  onClick={() => onViewDetails(registration.event)}
                >
                  View Event Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-events">
          <ClipboardList size={55} />
          <h2>No Registered Events Yet</h2>
          <p>You haven't registered for any events. Explore events and book your spot!</p>
        </div>
      )}
    </div>
  )
}

export default MyEvents
