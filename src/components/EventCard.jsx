
import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react'

function EventCard({ event, onViewDetails }) {
  const formattedDate = new Date(event.date + 'T00:00:00').toLocaleDateString(
    'en-IN',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  )

  return (
    <div className="event-card">
      <div className="event-card-image">
        <img src={event.image} alt={event.title} />
        <span className="event-category">{event.category}</span>
      </div>

      <div className="event-card-content">
        <h3>{event.title}</h3>

        <div className="event-card-info">
          <p><CalendarDays size={16} /> {formattedDate}</p>
          <p><Clock size={16} /> {event.time}</p>
          <p><MapPin size={16} /> {event.venue}</p>
        </div>

        <div className="event-card-footer">
          <div className="event-price">
            <span>Starting from</span>
            <strong>₹{event.price}</strong>
          </div>

          <button onClick={() => onViewDetails(event)}>
            View Details <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventCard
