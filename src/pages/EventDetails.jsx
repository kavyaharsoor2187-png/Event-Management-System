
import {
  CalendarDays,
  Clock,
  MapPin,
  User,
  ArrowLeft,
  Ticket,
  CheckCircle
} from 'lucide-react'

function EventDetails({ event, onRegister, onBack }) {
  if (!event) {
    return <p>Event details not available.</p>
  }

  const formattedDate = new Date(event.date + 'T00:00:00').toLocaleDateString(
    'en-IN',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  )

  return (
    <div className="event-details-page">

      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={18} /> Back to Events
      </button>

      <div className="details-banner">
        <img src={event.image} alt={event.title} />
        <span>{event.category}</span>
      </div>

      <div className="details-layout">

        <div className="details-main">
          <h1>{event.title}</h1>
          <p className="details-description">{event.description}</p>

          <div className="details-information">
            <div className="details-info-item">
              <CalendarDays size={22} />
              <div>
                <span>Date</span>
                <strong>{formattedDate}</strong>
              </div>
            </div>

            <div className="details-info-item">
              <Clock size={22} />
              <div>
                <span>Time</span>
                <strong>{event.time}</strong>
              </div>
            </div>

            <div className="details-info-item">
              <MapPin size={22} />
              <div>
                <span>Venue</span>
                <strong>{event.venue}</strong>
              </div>
            </div>

            <div className="details-info-item">
              <User size={22} />
              <div>
                <span>Organizer</span>
                <strong>{event.organizer}</strong>
              </div>
            </div>
          </div>

          <div className="details-about">
            <h2>About This Event</h2>
            <p>{event.description}</p>
            <p>
              Join us for an exciting experience and connect with
              people who share your interests.
            </p>
          </div>
        </div>

        <div className="booking-card">
          <div className="booking-price">
            <span>Ticket Price</span>
            <h2>₹{event.price}</h2>
          </div>

          <div className="booking-benefit">
            <CheckCircle size={17} />
            Event registration available
          </div>

          <button
            className="booking-btn"
            onClick={() => onRegister(event)}
          >
            <Ticket size={18} /> Register Now
          </button>

          <p>Secure your spot today!</p>
        </div>

      </div>
    </div>
  )
}

export default EventDetails
