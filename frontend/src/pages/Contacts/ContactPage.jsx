import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import CallToAction from '../../components/callToAction'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaChevronDown } from 'react-icons/fa'
import './contact.css'

const quickContacts = [
  {
    title: 'Phone',
    value: '+254 724 465 988',
    icon: <FaPhoneAlt />,
    href: 'tel:+254724465988',
  },
  {
    title: 'WhatsApp',
    value: 'Chat with us',
    icon: <FaWhatsapp />,
    href: 'https://wa.me/254724465988',
  },
  {
    title: 'Email',
    value: 'info@musoenterprise.co.ke',
    icon: <FaEnvelope />,
    href: 'mailto:info@musoenterprise.co.ke',
  },
  {
    title: 'Location',
    value: 'Nairobi, Kenya',
    icon: <FaMapMarkerAlt />,
    href: 'https://maps.google.com/?q=Nairobi+Kenya',
  },
]

const faqItems = [
  {
    question: 'Do you deliver products?',
    answer: 'Yes. We can assist with delivery arrangements for product orders and coordinate availability based on your location.',
  },
  {
    question: 'Can I order through WhatsApp?',
    answer: 'Absolutely. Many customers prefer to place orders through WhatsApp and we are happy to assist with product selection and availability.',
  },
  {
    question: 'Do you provide training?',
    answer: 'Yes, Muso Enterprise offers professional training sessions tailored to businesses and teams looking to improve operational standards.',
  },
  {
    question: 'Do you handle bulk orders?',
    answer: 'Yes. We support both small and larger orders for homes, facilities, businesses and commercial operations.',
  },
]

const services = ['Cleaning Products', 'Professional Fumigation', 'Business Training']

function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <div className="contact-page">
      <Navbar />

      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="contact-hero-content">
          <span className="section-tag">Muso Enterprise</span>
          <h1>Let&apos;s get in touch.</h1>
          <p>
            Whether you are looking for premium products, fumigation services, or practical training, our team is ready to assist with a prompt and professional response.
          </p>

          <div className="contact-hero-actions">
            <motion.a
              className="contact-primary-button"
              href="https://wa.me/254724465988"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              WhatsApp Us
            </motion.a>
            <motion.a
              className="contact-secondary-button"
              href="tel:+254724465988"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              Call Now
            </motion.a>
          </div>
        </div>
      </motion.section>

      <motion.div
        className="contact-cards"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.45 }}
      >
        {quickContacts.map((item, index) => (
          <motion.a
            key={item.title}
            className="contact-card"
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + index * 0.05, duration: 0.35 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="contact-card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </motion.a>
        ))}
      </motion.div>

      <div className="contact-main">
        <motion.div
          className="contact-form-panel"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2>Send us a message</h2>
          <p>Share your enquiry and our team will get back to you shortly.</p>

          <form>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Your name" />
              </div>
              <div className="contact-field">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="contact-field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="0712 345 678" />
              </div>
              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option>General enquiry</option>
                  <option>Product order</option>
                  <option>Fumigation service</option>
                  <option>Training</option>
                </select>
              </div>
              <div className="contact-field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us how we can help you today..." />
              </div>
            </div>
            <button type="submit" className="contact-form-submit contact-primary-button">Send Message</button>
          </form>
        </motion.div>

        <motion.div
          className="contact-info-panel"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2>Business information</h2>
          <p>We are happy to help with product selection, service scheduling and training requests.</p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <FaClock className="contact-card-icon" />
              <div>
                <strong>Business hours</strong>
                <span>Monday – Friday, 8:00 AM – 5:00 PM</span>
              </div>
            </div>
            <div className="contact-info-item">
              <FaPhoneAlt className="contact-card-icon" />
              <div>
                <strong>Response time</strong>
                <span>We aim to reply same day for most enquiries.</span>
              </div>
            </div>
            <div className="contact-info-item">
              <FaCheckCircle className="contact-card-icon" />
              <div>
                <strong>Available services</strong>
                <div className="contact-services">
                  {services.map((service) => (
                    <span className="contact-service-chip" key={service}>{service}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p>We welcome enquiries from homes, businesses and organisations across Nairobi and beyond.</p>
        </motion.div>
      </div>

      <motion.div
        className="contact-map-card"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.42 }}
      >
        <iframe
          title="Muso Enterprise location"
          src="https://www.google.com/maps?q=Nairobi%20Kenya&z=12&output=embed"
          loading="lazy"
          allowFullScreen
        />
      </motion.div>

      <motion.div
        className="contact-faq-card"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.42 }}
      >
        <h2>Frequently asked questions</h2>
        <p>Here are some of the most common questions we receive from customers.</p>

        {faqItems.map((item, index) => {
          const isOpen = activeFaq === index

          return (
            <div className="contact-faq-item" key={item.question}>
              <button type="button" className="contact-faq-trigger" onClick={() => setActiveFaq(isOpen ? -1 : index)}>
                <span>{item.question}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <FaChevronDown />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="contact-faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </motion.div>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default ContactPage
