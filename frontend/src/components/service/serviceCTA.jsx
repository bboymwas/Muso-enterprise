import { motion } from 'framer-motion'
import './serviceCTA.css'
import {useState} from 'react'
import ContactModal from '../ContactModal'

function ServiceCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          Whether you need professional fumigation, cleaning and hygiene solutions, or practical business training, Sonnitech Enterprise is ready to help.
        </p>

        <div className="service-cta-actions">
        <motion.button
  type="button"
  className="service-cta-button primary"
  onClick={() => setIsModalOpen(true)}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
  Book a Service
</motion.button>

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

export default ServiceCTA
