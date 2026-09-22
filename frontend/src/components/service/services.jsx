import { motion } from 'framer-motion'
import heroPhoto from '../../assets/hero.png'
import './services.css'

const servicesData = [
  {
    label: 'Fumigation & Pest Control',
    title: 'Fumigation & Pest Control',
    description:
      'Protect your home, business or institution with professional fumigation and pest-control solutions. We focus on effective treatment, safety and long-lasting protection against unwanted pests.',
    points: ['Residential & commercial fumigation', 'Pest prevention & control', 'Professional and reliable service'],
    cta: 'Book Fumigation',
    href: '/contact',
    img:'https://res.cloudinary.com/e3ar2duf/image/upload/v1790086759/copy_of_copy_of_say_goodbye_to_pests_f.jpg',
    imageAlt: 'Professional fumigation and pest control service',
  },
  {
    label: 'Cleaning & Hygiene',
    title: 'Cleaning & Hygiene Solutions',
    description:
      'Keep your environment clean, hygienic and welcoming with practical cleaning solutions for homes, businesses and institutions.',
    points: ['Cleaning & hygiene solutions', 'Quality cleaning products', 'Solutions for homes & businesses'],
    cta: 'Get a Cleaning Solution',
    href: '/products',
    img:'https://res.cloudinary.com/e3ar2duf/image/upload/v1790076990/ChatGPT_Image_Sep_22_2026_02_36_11_PM.png',
    imageAlt: 'Professional cleaning and hygiene service',
  },
  {
    label: 'Training & Business Skills',
    title: 'Training & Business Skills',
    description:
      'Learn practical skills that can become a source of income. Our hands-on training covers cleaning-product production and the business skills needed to turn your knowledge into an opportunity.',
    points: ['Soap & liquid soap making', 'Detergent & sanitizer production', 'Business & marketing skills'],
    cta: 'Join Training',
    href: '/training',
    img:"https://res.cloudinary.com/e3ar2duf/image/upload/v1790076370/Jovens_transformam_toneladas_de_%C3%B3leo_alimentar_usado_em_sab%C3%A3o_e_detergente.jpg",
    imageAlt: 'Hands-on training for cleaning and product production',
  },
]

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
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
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

function Services() {
  const shouldReduceMotion = prefersReducedMotion()

  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <motion.div
        className="services-intro"
        variants={itemVariants}
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="services-label">Our Services</p>
        <h2 id="services-heading" className="services-heading">
          Practical solutions for cleaner spaces, healthier environments and stronger businesses.
        </h2>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial={shouldReduceMotion ? undefined : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.25 }}
      >
        {servicesData.map((service) => (
          <motion.article
            key={service.title}
            className="service-card"
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          >
            <div className="service-card-media">
              <motion.img
                src={service.img}
                alt={service.imageAlt}
                className="service-card-image"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
              <span className="service-card-chip">{service.label}</span>
            </div>
            <div className="service-card-body">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <ul className="service-card-list">
                {service.points.map((point) => (
                  <li key={point} className="service-card-point">
                    <span className="service-card-point-dot" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <a className="service-card-cta" href={service.href}>
                {service.cta}
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
