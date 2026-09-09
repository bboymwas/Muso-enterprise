import { motion } from 'framer-motion'
import heroPhoto from '../../assets/hero.png'
import './serviceHero.css'

const serviceLabels = [
  { label: 'Fumigation', className: 'label-top-left' },
  { label: 'Cleaning', className: 'label-top-right' },
  { label: 'Training', className: 'label-bottom-left' },
]

const trustStats = [
  { value: '24 Hr', label: 'Reliable Response' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '10+', label: 'Years Delivered' },
]

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function ServiceHero() {
  const shouldReduceMotion = prefersReducedMotion()

  const fadeIn = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  })

  return (
    <section className="service-hero" aria-labelledby="service-hero-title">
      <div className="service-hero-inner">
        <div className="service-hero-copy">
          <motion.span className="service-hero-badge" {...fadeIn(0)}>
            MUSO ENTERPRISE
          </motion.span>

          <motion.h1 id="service-hero-title" className="service-hero-heading" {...fadeIn(0.1)}>
            Cleaner Spaces. <span>Safer Environments.</span> <span>Better Opportunities.</span>
          </motion.h1>

          <motion.p className="service-hero-text" {...fadeIn(0.2)}>
            Muso Enterprise delivers trusted fumigation, professional cleaning and hygiene services, together with practical training that helps homes, businesses and entrepreneurs stay healthy, compliant and productive.
          </motion.p>

          <motion.div className="service-hero-actions" {...fadeIn(0.25)}>
            <a className="service-hero-btn service-hero-btn-primary" href="/contact">
              Book a Service
            </a>
            <a className="service-hero-btn service-hero-btn-secondary" href="#services-overview">
              Explore Our Services
            </a>
          </motion.div>

          <motion.div className="service-hero-trust-grid" {...fadeIn(0.3)}>
            {trustStats.map((stat) => (
              <div className="service-hero-trust-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="service-hero-visual" {...fadeIn(0.3)}>
          <div className="service-hero-card">
            <div className="service-hero-image-frame">
              <img
                src={heroPhoto}
                alt="Professional cleaning and hygiene service team"
                className="service-hero-image"
              />
            </div>

            <div className="service-hero-labels">
              {serviceLabels.map((item) => (
                <motion.div
                  key={item.label}
                  className={`service-hero-label ${item.className}`}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <span className="service-hero-label-dot" aria-hidden="true" />
                  {item.label}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceHero
