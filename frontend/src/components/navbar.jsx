import logo from '../assets/muso.png.png'

const navLinks = ['Home', 'About', 'Services', 'Products', 'Trainings', 'Contact']

function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <a href="tel:0703767584" style={styles.topLink}>
          Phone: 0703767584
        </a>
        <a href="mailto:musoenterprise.com" style={styles.topLink}>
          Email: muso enterprise.com
        </a>
        <span style={styles.topText}>Location: Utawala, Nairobi</span>
      </div>

      <nav style={styles.navbar} aria-label="Main navigation">
        <a href="/" style={styles.brand}>
          <img src={logo} alt="Muso Enterprise logo" style={styles.logo} />
        </a>

        <ul style={styles.navList}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={styles.navLink}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '8px 24px',
    backgroundColor: '#0f5132',
    color: '#ffffff',
    fontSize: '14px',
  },
  topLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 500,
  },
  topText: {
    fontWeight: 500,
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
    padding: '14px 40px',
  },
  brand: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    width: '120px',
    height: 'auto',
    display: 'block',
  },
  navList: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#111827',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 600,
  },
}

export default Navbar
