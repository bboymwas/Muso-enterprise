import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import logo from '../assets/muso.png.png'
import './navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/training', label: 'Training' },
  { to: '/contact', label: 'Contact' },
]

const contactItems = [
  {
    href: 'tel:0724465988',
    label: 'Phone: 0724465988',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.4 3.2 9.5 7.8c.3.7.1 1.5-.5 1.9l-1.2.9c1 2.1 2.6 3.7 4.7 4.7l.9-1.2c.5-.6 1.3-.8 1.9-.5l4.6 2.1c.7.3 1.1 1 .9 1.8l-.5 2.3c-.2.7-.8 1.2-1.6 1.2C10 21 3 14 3 5.3c0-.8.5-1.4 1.2-1.6l2.3-.5c.3-.1.6-.1.9 0Z" />
      </svg>
    ),
  },
  {
    href: 'mailto:info@musoenterprise.com',
    label: 'Email: info@musoenterprise.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.8 6h14.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8V7.8C3 6.8 3.8 6 4.8 6Zm.4 2.1 6.1 4.6c.4.3.9.3 1.3 0l6.1-4.6H5.2Zm13.8 2-5.4 4c-1 .7-2.3.7-3.3 0L5 10.1v6.1h14v-6.1Z" />
      </svg>
    ),
  },
  {
    label: 'Location: Utawala,Nairobi',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.8c-3.6 0-6.5 2.8-6.5 6.3 0 4.5 5.3 10.7 5.9 11.4.3.4.9.4 1.2 0 .6-.7 5.9-6.9 5.9-11.4 0-3.5-2.9-6.3-6.5-6.3Zm0 8.9c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.7 12 6.7s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5Z" />
      </svg>
    ),
  },
]

function Navbar({ showCartButton = false, cartCount = 0, onOpenCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactHidden, setIsContactHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCompactEmail, setIsCompactEmail] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsContactHidden(window.scrollY > 60)
      setIsScrolled(window.scrollY > 8)
    }

    function handleResize() {
      setIsCompactEmail(window.innerWidth <= 390)
    }

    handleScroll()
    handleResize()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header ${isContactHidden ? 'contact-collapsed' : ''} ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* The top bar gives visitors quick contact details without competing with the main nav. */}
      <div className="top-contact-bar">
        {contactItems.map((item) => {
          const ContactTag = item.href ? 'a' : 'span'
          const label = item.href?.startsWith('mailto:') && isCompactEmail ? 'Email Us' : item.label
          const itemClassName = item.label.includes('Location') ? 'top-contact-item contact-location' : 'top-contact-item'

          return (
            <ContactTag href={item.href} className={itemClassName} key={item.label}>
              <span className="top-contact-icon">{item.icon}</span>
              <span className="top-contact-text">{label}</span>
            </ContactTag>
          )
        })}
      </div>

      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" className="navbar-brand" end onClick={closeMenu}>
          <img src={logo} alt="Muso Enterprise logo" className="navbar-logo" />
        </NavLink>

        {/* The button controls the mobile menu while CSS handles the slide-down panel and X animation. */}
        <button
          className={`navbar-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-list ${isMenuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to} className="navbar-list-item">
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`.trim()}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {showCartButton && (
            <li className="navbar-list-item navbar-cart-item">
              <button type="button" className="navbar-cart-button" onClick={onOpenCart}>
                <FiShoppingBag size={16} />
                <span>{cartCount}</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
