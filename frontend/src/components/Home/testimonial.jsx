import './testimonial.css'
import { motion } from 'framer-motion'

// This data array holds testimonial content in a simple structure.
// Later, this can be replaced by data fetched from an Express API and MySQL database.
const testimonials = [
  {
    name: 'Grace Wanjiku',
    role: 'Property Manager',
    service: 'Fumigation',
    quote:
      'The team was punctual, professional and very thorough. Our offices feel safer and cleaner after the treatment.',
  },
  {
    name: 'Daniel Otieno',
    role: 'Restaurant Owner',
    service: 'Cleaning Products',
    quote:
      'Their products are dependable and easy to use. We have seen better results and less downtime in our operations.',
  },
  {
    name: 'Mary Njeri',
    role: 'Small Business Founder',
    service: 'Chemical Training',
    quote:
      'The training was practical and clear. It gave me the confidence to start producing and selling quality chemicals.',
  },
  {
    name: 'James Kariuki',
    role: 'Warehouse Supervisor',
    service: 'Industrial Treatment',
    quote:
      'The service was organized from start to finish. They understood our needs and delivered exactly what we needed.',
  },
]

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '150+', label: 'Businesses Served' },
  { value: '98%', label: 'Satisfaction' },
]

function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonials" aria-labelledby="testimonials-title">
      <motion.div
        className="testimonial-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* The left column uses Flexbox to stack the message, statistics and CTA clearly. */}
        <motion.div
          className="testimonial-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
        >
          <p className="testimonial-kicker">TESTIMONIALS</p>
          <div className="testimonial-divider" aria-hidden="true" />
          <h2 id="testimonials-title">Trusted by Clients Who Value Quality, Reliability and Results</h2>
          <p className="testimonial-description">
            Our clients choose Muso Enterprise because they want dependable support, professional service and products they can trust every single time.
          </p>

          <div className="testimonial-stats" role="list" aria-label="Customer satisfaction statistics">
            {stats.map((stat) => (
              <div className="testimonial-stat" key={stat.label} role="listitem">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="testimonial-rating" aria-label="Average customer rating 5 out of 5 stars">
            <span className="testimonial-stars">★★★★★</span>
            <span className="testimonial-rating-text">Rated 5.0 by our customers</span>
          </div>

          <a className="testimonial-button" href="#contact">
            Become Our Next Success Story <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        {/* The right column uses CSS Grid so the testimonial cards stay elegant on desktop and mobile. */}
        <div className="testimonial-cards-grid" aria-label="Customer testimonials">
          {testimonials.map((item, index) => (
            <motion.article
              className="testimonial-card"
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(17,24,39,0.12)' }}
            >
              <div className="testimonial-card-top">
                <div className="testimonial-avatar" aria-hidden="true">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>

              <div className="testimonial-stars testimonial-card-stars" aria-hidden="true">
                ★★★★★
              </div>

              <p className="testimonial-card-quote">“{item.quote}”</p>

              <span className="testimonial-tag">{item.service}</span>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonial
