import './Footer.css'
import { motion } from 'framer-motion'
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaLaptopCode,
} from 'react-icons/fa'

const companyLinks = [
  { label: 'Home', href: ' /' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Trainings', href: ' /training' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  'Cleaning Products',
  'Chemical Solutions',
  'Professional Training',
  'Industrial Supplies',
  'Consultation',
]

const socials = [
  { label: 'Facebook', icon: <FaFacebookF />, href: 'https://facebook.com' },
  { label: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
  { label: 'TikTok', icon: <FaTiktok />, href: 'https://www.tiktok.com' },
  { label: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/254783616764' },
]

function Footer() {
  return (
    <footer className="site-footer" aria-label="Muso Enterprise footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="footer-grid">
          <motion.div
            className="footer-column brand-column"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          >
            <h3 className="footer-brand">Muso Enterprise</h3>
            <p className="footer-description">
              Providing quality cleaning products, chemical solutions, and professional training that help businesses maintain cleaner, safer, and more efficient environments.
            </p>

            <div className="footer-socials" aria-label="Social media links">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="footer-social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <h4>Company</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="/services">{service}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <h4>Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-icon" aria-hidden="true">
                  <FaMapMarkerAlt />
                </span>
                Nairobi, Kenya
              </li>
              <li>
                <span className="footer-icon" aria-hidden="true">
                  <FaPhoneAlt />
                </span>
                +254 783 616 764
              </li>
              <li>
                <span className="footer-icon" aria-hidden="true">
                  <FaEnvelope />
                </span>
                info@musoenterprise.co.ke
              </li>
              <li>
                <span className="footer-icon" aria-hidden="true">
                  <FaClock />
                </span>
                Monday – Friday<br />
                8:00 AM – 5:00 PM
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Muso Enterprise. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a >Privacy Policy</a>
            <a >Terms of Service</a>
          </div>
        </div>

        <motion.div
          className="footer-credit"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.24 }}
        >
          <FaLaptopCode />
          <span>
            Crafted by <a href="https://www.instagram.com/just.mw3s?stkn=cTd5MG6eGR2Zmg0" target="_blank" rel="noopener noreferrer">
              <span className="footer-credit-name">George Mwangi</span>
            </a>
          </span>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
