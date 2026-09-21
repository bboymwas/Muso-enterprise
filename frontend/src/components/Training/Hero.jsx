import { motion } from 'framer-motion'
import CountUp from '../Home/CountUp'
import { useState } from 'react'
import ContactModal from '../ContactModal'
import './Hero.css'

const prefersReducedMotion = () => {

  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const trustStats = [
  { value: 300, suffix: '+', label: 'People Trained' },
  { value: 50, suffix: '+', label: 'Workshops Held' },
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 12, suffix: '+', label: 'Training Modules' },
]

function TrainingHero() {
  
const [isModalOpen, setIsModalOpen] = useState(false)
  const shouldReduceMotion = prefersReducedMotion()

  const fadeIn = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  })

  const slideLeft = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  })

  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  })

  return (
    <section className="training-hero" aria-labelledby="training-hero-title">
      <div className="training-hero-container">
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="training-hero-content">
          {/* Badge */}
          <motion.span className="training-hero-badge" {...fadeIn(0)}>
            <span className="training-hero-badge-dot" aria-hidden="true" />
            Empowering Kenyan Entrepreneurs
          </motion.span>

          {/* Heading */}
          <motion.h1 id="training-hero-title" {...slideLeft(0.15)}>
            Learn Practical Skills.<br />
            <span className="training-hero-highlight">Build a Sustainable Business.</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p className="training-hero-description" {...fadeUp(0.3)}>
            Gain hands-on experience in manufacturing quality cleaning products,
            starting and growing your business, and creating new income opportunities
            through practical, instructor-led training.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="training-hero-actions"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          >
            <button
  className="training-hero-btn training-hero-btn-primary"
  onClick={() => setIsModalOpen(true)}
>
  Join Training
</button>
            <a className="training-hero-btn training-hero-btn-secondary" href="#programs">
              Explore Programs
            </a>
          </motion.div>

          {/* Trust Stats — green brand numbers, neutral labels */}
          <motion.div
            className="training-hero-trust-strip"
            aria-label="Training achievements"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <p className="training-hero-trust-kicker">&#11088; Training Impact</p>
            {trustStats.map((item) => (
              <div className="training-hero-trust-item" key={item.label}>
                <strong className="training-hero-trust-value">
                  <CountUp value={item.value} suffix={item.suffix} className="training-hero-trust-number" />
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------- RIGHT COLUMN — Premium Photo Composition ---------- */}
        <motion.div
          className="training-hero-visual"
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Decorative background blob */}
          <div className="training-hero-blob" aria-hidden="true" />

          <div className="training-hero-photos">
            {/* Top — large feature image */}
            <div className="training-hero-photo-top">
              <div className="training-hero-photo-img training-hero-photo-img-1">
                <div className="training-hero-photo-overlay" />
                <div className="training-hero-photo-label">
                  <span className="training-hero-photo-icon" aria-hidden="true">
                    &#x1F393;
                  </span>
                  <span>Hands-on Training Session</span>
                </div>
              </div>
            </div>

            {/* Bottom — two smaller images side by side */}
            <div className="training-hero-photo-bottom">
              <div className="training-hero-photo-bottom-item">
                <div className="training-hero-photo-img training-hero-photo-img-2">
                  <div className="training-hero-photo-overlay" />
                  <div className="training-hero-photo-label">
                    <span className="training-hero-photo-icon" aria-hidden="true">
                      &#x1F9FC;
                    </span>
                    <span>Soap Making</span>
                  </div>
                </div>
              </div>
              <div className="training-hero-photo-bottom-item">
                <div className="training-hero-photo-img training-hero-photo-img-3">
                  <div className="training-hero-photo-overlay" />
                  <div className="training-hero-photo-label">
                    <span className="training-hero-photo-icon" aria-hidden="true">
                      &#x1F9EA;
                    </span>
                    <span>Sanitizer Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ContactModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Join Training"
  description="Tell us about the training you are interested in."
  defaultSubject="Training"
/>
    </section>
  )
}

export default TrainingHero