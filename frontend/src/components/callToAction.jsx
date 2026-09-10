import './callToAction.css'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const trustItems = ['Trusted by Businesses', 'Professional Support', 'Quality Assured']

function CallToAction() {
  return (
    <section className="final-cta-section" aria-labelledby="final-cta-title">
      <motion.div
        className="final-cta-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.p
          className="final-cta-label"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          READY TO GET STARTED?
        </motion.p>

        <motion.h2
          id="final-cta-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
        >
          Partner with Muso Enterprise Today
        </motion.h2>

        <motion.p
          className="final-cta-description"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
        >
          Whether you're looking for premium cleaning products, professional chemical solutions, or practical training, our experienced team is ready to help you achieve cleaner, safer, and more efficient operations.
        </motion.p>

        <div className="final-cta-actions">
          <motion.a
            className="final-cta-button primary"
            href="\contact"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            Contact Us
          </motion.a>

          <motion.a
            className="final-cta-button secondary"
            href="\products"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            Explore Products
          </motion.a>
        </div>

        <motion.div
          className="final-cta-trust"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
        >
          {trustItems.map((item) => (
            <span className="final-cta-trust-item" key={item}>
              <FaCheckCircle />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CallToAction
