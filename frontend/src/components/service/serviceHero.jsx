import { motion } from 'framer-motion'
import './serviceHero.css'
import { useState } from 'react'
import ContactModal from '../ContactModal'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
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
            SONNITECH ENTERPRISE
          </motion.span>

          <motion.h1 id="service-hero-title" className="service-hero-heading" {...fadeIn(0.1)}>
            Cleaner Spaces. <span>Safer Environments.</span> <span>Better Opportunities.</span>
          </motion.h1>

          <motion.p className="service-hero-text" {...fadeIn(0.2)}>
            Sonnitech Enterprise delivers trusted fumigation, professional cleaning and hygiene services, together with practical training that helps homes, businesses and entrepreneurs stay healthy, compliant and productive.
          </motion.p>

          <motion.div className="service-hero-actions" {...fadeIn(0.25)}>
                   <motion.button
  type="button"
  className="service-cta-button primary"
  onClick={() => setIsModalOpen(true)}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
  Book a Service
</motion.button>

            <a className="service-hero-btn service-hero-btn-secondary" href="#services">
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
                src='https://res.cloudinary.com/e3ar2duf/image/upload/v1790082419/download_18.jpg'
                alt="Professional cleaning and hygiene service team"
                className="service-hero-image"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <ContactModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Book a Service"
  description="Tell us what service you need and our team will get back to you."
  defaultSubject="Service Request"
/>
    </section>
  )
}

export default ServiceHero
