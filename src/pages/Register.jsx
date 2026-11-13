
import { useState } from 'react'
import { User, Mail, Phone, Ticket, ArrowLeft } from 'lucide-react'

function Register({ event, onBack, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const registration = {
      id: Date.now(),
      event,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      registeredAt: new Date().toISOString()
    }

    const existingEvents =
      JSON.parse(localStorage.getItem('myEvents')) || []

    existingEvents.push(registration)

    localStorage.setItem(
      'myEvents',
      JSON.stringify(existingEvents)
    )

    onSuccess()
  }

  if (!event) {
    return <p>Event information not available.</p>
  }

  return (
    <div className="register-page">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={18} /> Back to Event
      </button>

      <div className="register-card">
        <div className="register-heading">
          <div className="register-icon">
            <Ticket size={28} />
          </div>
          <h1>Event Registration</h1>
          <p>Complete your details to reserve your spot.</p>
        </div>

        <div className="register-event-info">
          <h3>{event.title}</h3>
          <p>{event.date} | {event.time}</p>
          <strong>Ticket Price: ₹{event.price}</strong>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <div className="register-input">
            <User size={18} />
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <label>Email Address</label>
          <div className="register-input">
            <Mail size={18} />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <label>Phone Number</label>
          <div className="register-input">
            <Phone size={18} />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </div>

          <button type="submit" className="register-submit-btn">
            Confirm Registration
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
