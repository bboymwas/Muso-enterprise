import { motion } from 'framer-motion'
import './whyUs.css'

const features = [
  {
    title: 'Professional & Reliable',
    description:
      'We approach every service with professionalism, clear communication and dependable results.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l6 4v6.5c0 3.1-1.8 6-4.5 7.2l-1.5.8-1.5-.8C7.8 18.5 6 15.6 6 12.5V6l6-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Affordable Solutions',
    description:
      'We provide practical services and products designed to deliver value without unnecessary costs.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4v16M8 6h8M8 18h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Quality You Can Trust',
    description:
      'From cleaning products to fumigation and training, we focus on quality, safety and useful results.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12l5 6 11-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Customer-Centered',
    description:
      'We listen to each customer’s needs and provide solutions suited to their home, business or institution.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 20c0-3.6 2.9-6.5 7-6.5s7 2.9 7 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function WhyUs() {
  const shouldReduceMotion = prefersReducedMotion()

  return (
    <motion.section
      className="whyus-section"
      aria-labelledby="whyus-heading"
      initial={shouldReduceMotion ? undefined : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'show'}
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="whyus-intro" variants={itemVariants}>
        <p className="whyus-label">Why Choose Muso Enterprise?</p>
        <h2 id="whyus-heading" className="whyus-heading">
          Professional service, practical solutions and a commitment to helping our customers achieve better results.
        </h2>
      </motion.div>

      <div className="whyus-grid">
        {features.map((feature) => (
          <motion.article
            key={feature.title}
            className="whyus-card"
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          >
            <div className="whyus-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <h3 className="whyus-card-title">{feature.title}</h3>
            <p className="whyus-card-text">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default WhyUs
