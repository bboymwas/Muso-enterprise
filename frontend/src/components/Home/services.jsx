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
      'https://res.cloudinary.com/e3ar2duf/image/upload/v1790089327/unsplash1.avif',
    icon: '🏡',
  },
  {
    badge: 'Business Care',
    title: 'Commercial Fumigation',
    description: 'Professional treatment plans for offices, shops, hotels, and workspaces.',
    image:
      'https://res.cloudinary.com/e3ar2duf/image/upload/v1790089327/unsplash2.avif',
    icon: '🏢',
  },
  {
    badge: 'Large Scale',
    title: 'Industrial Pest Management',
    description: 'Reliable solutions for warehouses, factories, and larger facilities.',
    image:
      'https://res.cloudinary.com/e3ar2duf/image/upload/v1790089327/unsplash3.avif',
    icon: '🏭',
  },
  {
    badge: 'Expert Review',
    title: 'Inspection & Consultation',
    description: 'Clear assessments and practical recommendations for long-term protection.',
    image:
      'https://res.cloudinary.com/e3ar2duf/image/upload/c_crop,g_north_west,h_835,w_1436/copy_of_chatgpt_image_sep_22_2026_06_15_08_pm.png',
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
            Sonnitech Enterprise delivers dependable fumigation and pest management
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
            <a className="services-button" href="\services">
              Explore Services →
            </a>
            <p className="services-note">Discover how we can help you today!</p>
          </div>
        </div>

        {/* The right column uses CSS Grid to create the 2x2 service card layout. */}
        <div className="services-cards-grid" aria-label="Sonnitech Enterprise service offerings">
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
               
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
