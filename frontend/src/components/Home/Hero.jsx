import './Hero.css'
import { motion } from 'framer-motion'
import CountUp from './CountUp'

// Detect if the user prefers reduced motion for accessibility.
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Small data arrays keep the JSX clean and reusable.
// Later, if you add more badges or cards, you can update the data instead of
// rewriting the layout markup.
const heroBadges = [
  {
    icon: '\u2713',
    text: 'Cleaning Services Nairobi',
  },
  {
    icon: '\u{1F6E1}',
    text: 'Fumigation Services Nairobi',
  },
  {
    icon: '\u{1F393}',
    text: 'Soap Making Training Kenya',
  },
]

const heroCards = [
  {
    title: 'Residential & Commercial Cleaning',
    description: 'Trusted cleaning services in Nairobi for homes, offices, retail spaces, and commercial properties.',
    label: 'Cleaning',
  },
  {
    title: 'Office Cleaning & Sanitization',
    description: 'Professional cleaning Kenya solutions for healthier, cleaner, and more productive workplaces.',
    label: 'Office',
  },
  {
    title: 'Fumigation & Pest Control',
    description: 'Reliable pest control Kenya services that protect homes, businesses, and facilities from infestations.',
    label: 'Protection',
  },
]

// The trust stats sit directly under the CTAs so proof follows the primary actions.
// Converted values to numbers for CountUp animation, keeping suffix separate.
const trustStats = [
  {
    value: 1500,
    suffix: '+',
    label: 'Products Sold',
  },
  {
    value: 300,
    suffix: '+',
    label: 'People Trained',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Years of Experience',
  },
]

function Hero() {
  const shouldReduceMotion = prefersReducedMotion()
  return (
    // className is React's version of HTML's class attribute.
    // We use CSS classes so the design stays in Hero.css instead of inline styles.
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          {/* Badges quickly communicate trust signals before the main headline. */}
          <motion.div
            className="hero-badges"
            aria-label="Sonnitech Enterprise highlights"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            {heroBadges.map((badge, index) => (
              <motion.span
                className="hero-badge"
                key={badge.text}
                initial={
                  shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: 'easeOut',
                }}
              >
                <span className="hero-badge-icon" aria-hidden="true">
                  {badge.icon}
                </span>
                {badge.text}
              </motion.span>
            ))}
          </motion.div>

          {/* The h1 is written for people first, while still including SEO keywords. */}
          <motion.h1
            id="hero-title"
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.36,
              ease: 'easeOut',
            }}
          >
            Proffesional Cleaning Products in Nairobi, Fumigation, Pest Control & Soap Making Training in Kenya
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.5,
              ease: 'easeOut',
            }}
          >
            Sonnitech Enterprise provides professional cleaning services in Nairobi,
            Kenya, including residential cleaning, commercial cleaning, office
            cleaning, sanitization services, fumigation services Nairobi, and pest
            control solutions for homes, businesses, and institutions. We also
            supply quality cleaning products and deliver hands-on soap making training
            Kenya clients trust.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.62,
              ease: 'easeOut',
            }}
          >
            <a className="hero-button hero-button-primary" href="/products">
              Get Cleaning Products
            </a>
            <a className="hero-button hero-button-secondary" href="/services">
              Get Pest Control & Fumigation
            </a>
          </motion.div>

          {/* Measurable proof appears immediately after the CTAs so the Hero feels complete. */}
          <motion.div
            className="hero-trust-strip"
            aria-label="Sonnitech Enterprise trust points"
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.72,
              ease: 'easeOut',
            }}
          >
            <p className="hero-trust-kicker"> Trusted Across Kenya</p>
            {trustStats.map((item) => (
              <div className="hero-trust-item" key={item.label}>
                <strong>
                  <CountUp value={item.value} suffix={item.suffix} />
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* These are styled image placeholders.
            When you have real photos, store them in src/assets/images/ and
            replace these placeholder divs with imported img elements. */}
        <div className="hero-card-grid" aria-label="Featured Sonnitech Enterprise services">
          {heroCards.map((card, index) => (
            <motion.article
              className="hero-card"
              key={card.title}
              initial={
                shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 0.84 + index * 0.15,
                ease: 'easeOut',
              }}
            >
              <div className={`hero-card-image hero-card-image-${index + 1}`}>
                <span>{card.label}</span>
              </div>
              <div className="hero-card-body">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* The mission spans both grid columns to visually close the Hero before the next section begins. */}
        <motion.div
          className="hero-mission"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: shouldReduceMotion ? 0 : 1.29,
            ease: 'easeOut',
          }}
        >
          <p>
            Our mission is to provide reliable professional cleaning Kenya services,
            affordable cleaning products, and practical soap making training that help
            homes, offices, and businesses stay clean, safe, and productive.
          </p>
          <a className="hero-training-link" href="\Training">
            Join Our Soap Making Training {'\u2192'}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// export default makes this component available to import in Home.jsx.
export default Hero
