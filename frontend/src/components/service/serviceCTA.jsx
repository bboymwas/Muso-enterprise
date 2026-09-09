import { motion } from 'framer-motion'
import './serviceCTA.css'

function ServiceCTA() {
  return (
    <section className="service-cta-section" aria-labelledby="service-cta-heading">
      <motion.div
        className="service-cta-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="service-cta-eyebrow">Ready to Get Started?</p>
        <h2 id="service-cta-heading" className="service-cta-heading">
          Cleaner Spaces. Better Solutions. Stronger Opportunities.
        </h2>
        <p className="service-cta-description">
          Whether you need professional fumigation, cleaning and hygiene solutions, or practical business training, Muso Enterprise is ready to help.
        </p>

        <div className="service-cta-actions">
          <motion.a
            href="/contact"
            className="service-cta-button primary"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            Book a Service
          </motion.a>

          <motion.a
            href="/training"
            className="service-cta-button secondary"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            Join Training
          </motion.a>
        </div>

        <p className="service-cta-note">
          Prefer to talk to us directly? Get in touch on WhatsApp.
        </p>
      </motion.div>
    </section>
  )
}

export default ServiceCTA
