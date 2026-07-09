import './services.css'

// This section uses two arrays so the JSX stays clean and simple.
// Arrays are useful when many similar items need to be rendered.
// Each item is an object because each card needs several properties.
// The .map() method loops through the array and creates one block of JSX per item.
// Later, these values can come from a MySQL database through an Express API,
// while the React component structure stays the same.
const trustFeatures = [
  {
    icon: '✓',
    title: 'Safe & Effective',
    description: 'Approved chemicals and safe treatment methods for peace of mind.',
  },
  {
    icon: '👨‍🔧',
    title: 'Trained Professionals',
    description: 'Experienced technicians delivering reliable service with care.',
  },
  {
    icon: '🕒',
    title: 'Reliable & On-Time',
    description: 'Fast response and dependable scheduling for every client.',
  },
  {
    icon: '🛡',
    title: 'Long-lasting Protection',
    description: 'Prevent pests from returning with proven treatment methods.',
  },
]

const serviceCards = [
  {
    badge: 'Home Protection',
    title: 'Residential Fumigation',
    description: 'Discreet and effective pest control for homes, apartments, and family spaces.',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
    icon: '🏡',
  },
  {
    badge: 'Business Care',
    title: 'Commercial Fumigation',
    description: 'Professional treatment plans for offices, shops, hotels, and workspaces.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    icon: '🏢',
  },
  {
    badge: 'Large Scale',
    title: 'Industrial Pest Management',
    description: 'Reliable solutions for warehouses, factories, and larger facilities.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    icon: '🏭',
  },
  {
    badge: 'Expert Review',
    title: 'Inspection & Consultation',
    description: 'Clear assessments and practical recommendations for long-term protection.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    icon: '🔎',
  },
]

// This is a React component.
// Components help us split the page into smaller, reusable sections.
function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-container">
        {/* The left column uses Flexbox to stack text, trust points, and the CTA. */}
        <div className="services-copy">
          <p className="services-kicker">PROFESSIONAL SERVICES</p>
          <div className="services-divider" aria-hidden="true" />
          <h2 id="services-title">Professional Pest Control Solutions</h2>
          <p className="services-highlight">
            Homes <span>Businesses</span> Institutions
          </p>
          <p className="services-description">
            Muso Enterprise delivers dependable fumigation and pest management
            services for homes, offices, warehouses, and public institutions with
            careful planning and proven treatment methods.
          </p>

          <div className="services-features" role="list">
            {trustFeatures.map((feature) => (
              <div className="service-feature" key={feature.title} role="listitem">
                <div className="service-feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="services-actions">
            <a className="services-button" href="#contact">
              Explore Services →
            </a>
            <p className="services-note">Discover how we can help you today!</p>
          </div>
        </div>

        {/* The right column uses CSS Grid to create the 2x2 service card layout. */}
        <div className="services-cards-grid" aria-label="Muso Enterprise service offerings">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-image-wrap">
                <img className="service-card-image" src={service.image} alt={service.title} />
                <div className="service-card-icon" aria-hidden="true">
                  {service.icon}
                </div>
              </div>

              <div className="service-card-body">
                <span className="service-card-badge">{service.badge}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="service-card-button" href="#contact">
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
