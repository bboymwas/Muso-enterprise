import './training.css'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const checklistItems = [
  'Safe Chemical Handling',
  'Product Formulation Techniques',
  'Hands-on Practical Sessions',
  'Certificate of Completion',
  'Training for Individuals & Organizations',
]

function Training() {
  return (
    <section className="training-section" id="training" aria-labelledby="training-title">
      <div className="training-container">
        <motion.div
          className="training-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="training-kicker">PROFESSIONAL TRAINING</p>
          <div className="training-divider" aria-hidden="true" />
          <h2 id="training-title">Master Safe & Effective Chemical Solutions</h2>
          <p className="training-description">
            Our practical training programs equip individuals, businesses, and institutions with the knowledge and confidence to safely formulate, handle, and use professional cleaning chemicals. Learn through expert-led sessions that emphasize safety, quality, and real-world application.
          </p>

          <div className="training-checklist" role="list" aria-label="Training program highlights">
            {checklistItems.map((item, index) => (
              <motion.div
                className="training-item"
                key={item}
                role="listitem"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 + index * 0.06 }}
              >
                <span className="training-item-icon" aria-hidden="true">
                  <FaCheckCircle />
                </span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            className="training-button"
            href="#contact"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            Book a Training
          </motion.a>
        </motion.div>

        <motion.div
          className="training-media"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
        >
          <motion.div
            className="training-image-card"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <img
              src="https://images.unsplash.com/photo-1581092335399-e034e35e2c26?auto=format&fit=crop&w=1200&q=80"
              alt="Professional chemical training session with instructor and trainees"
            />
            <div className="training-image-caption">
              <h3>Practical Chemical Training</h3>
              <p>Industry-led hands-on learning experiences designed for real-world applications.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Training
