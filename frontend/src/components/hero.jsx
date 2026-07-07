import './Hero.css'

// Small data arrays keep the JSX clean and reusable.
// Later, if you add more badges or cards, you can update the data instead of
// rewriting the layout markup.
const heroBadges = [
  {
    icon: '\u2713',
    text: 'Affordable Cleaning Products',
  },
  {
    icon: '\u{1F6E1}',
    text: 'Professional Fumigation',
  },
  {
    icon: '\u{1F393}',
    text: 'Hands-on Business Training',
  },
]

const heroCards = [
  {
    title: 'Cleaning Products',
    description: 'Quality soaps, detergents, sanitizers and disinfectants.',
    label: 'Products',
  },
  {
    title: 'Training',
    description: 'Learn practical chemical production from industry professionals.',
    label: 'Skills',
  },
  {
    title: 'Fumigation',
    description: 'Protect homes and businesses with reliable pest control.',
    label: 'Care',
  },
]

// The trust stats sit directly under the CTAs so proof follows the primary actions.
const trustStats = [
  {
    value: '1500+',
    label: 'Products Sold',
  },
  {
    value: '300+',
    label: 'People Trained',
  },
  {
    value: '98%',
    label: 'Customer Satisfaction',
  },
  {
    value: '5+',
    label: 'Years of Experience',
  },
]

function Hero() {
  return (
    // className is React's version of HTML's class attribute.
    // We use CSS classes so the design stays in Hero.css instead of inline styles.
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          {/* Badges quickly communicate trust signals before the main headline. */}
          <div className="hero-badges" aria-label="Muso Enterprise highlights">
            {heroBadges.map((badge) => (
              <span className="hero-badge" key={badge.text}>
                <span className="hero-badge-icon" aria-hidden="true">
                  {badge.icon}
                </span>
                {badge.text}
              </span>
            ))}
          </div>

          {/* The h1 is written for people first, while still including SEO keywords. */}
          <h1 id="hero-title">
            Cleaning Products, Fumigation Services & Chemical Training in Kenya
          </h1>

          <p className="hero-description">
            Muso Enterprise manufactures quality cleaning products, provides
            professional fumigation services, and empowers Kenyans through
            practical chemical production training for soaps, detergents,
            disinfectants and other cleaning solutions for home or business use.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#products">
              View Products
            </a>
            <a className="hero-button hero-button-secondary" href="#services">
              Explore Services
            </a>
          </div>

          {/* Measurable proof appears immediately after the CTAs so the Hero feels complete. */}
          <div className="hero-trust-strip" aria-label="Muso Enterprise trust points">
            <p className="hero-trust-kicker">⭐ Trusted Across Kenya</p>
            {trustStats.map((item) => (
              <div className="hero-trust-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* These are styled image placeholders.
            When you have real photos, store them in src/assets/images/ and
            replace these placeholder divs with imported img elements. */}
        <div className="hero-card-grid" aria-label="Featured Muso Enterprise services">
          {heroCards.map((card, index) => (
            <article className="hero-card" key={card.title}>
              <div className={`hero-card-image hero-card-image-${index + 1}`}>
                <span>{card.label}</span>
              </div>
              <div className="hero-card-body">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* The mission spans both grid columns to visually close the Hero before the next section begins. */}
        <div className="hero-mission">
          <p>
            Our mission is to make quality cleaning products affordable while
            empowering individuals and businesses across Kenya through practical
            chemical production training and professional hygiene solutions.
          </p>
          <a className="hero-training-link" href="#trainings">
            Join Our Next Training {'\u2192'}
          </a>
        </div>
      </div>
    </section>
  )
}

// export default makes this component available to import in Home.jsx.
export default Hero
