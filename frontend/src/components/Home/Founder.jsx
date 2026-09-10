import './Founder.css'

// This is a React component for the founder trust section.
// Components keep the homepage easier to read by splitting it into focused blocks.
const founderValues = [
  {
    icon: '⏳',
    title: 'Years of Practical Experience',
    description: 'Industry knowledge built through real work and continuous learning.',
  },
  {
    icon: '✅',
    title: 'Quality Commitment',
    description: 'Delivering reliable products and professional services customers can trust.',
  },
  {
    icon: '🌱',
    title: 'Empowering Entrepreneurs',
    description: 'Helping individuals build businesses through practical chemical production training.',
  },
]

function Founder() {
  return (
    <section className="founder-section" id="founder" aria-labelledby="founder-title">
      <div className="founder-container">
        {/* The left column uses Flexbox to stack the heading, description, values, and CTA. */}
        <div className="founder-copy">
          <p className="founder-kicker">MEET THE FOUNDER</p>
          <div className="founder-divider" aria-hidden="true" />
          <h2 id="founder-title">
            Building Trust Through
            <span> Quality Products,</span> Professional Service &
            <span> Practical Training</span>
          </h2>
          <p className="founder-description">
            At Muso Enterprise, we believe trust is earned through consistency,
            honesty and delivering quality every day. Every cleaning product we
            manufacture, every fumigation service we provide and every entrepreneur
            we train reflects our commitment to improving homes, businesses and
            communities across Kenya.
          </p>

          <div className="founder-values" role="list">
            {founderValues.map((value) => (
              <div className="founder-value" key={value.title} role="listitem">
                <div className="founder-value-icon" aria-hidden="true">
                  {value.icon}
                </div>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="founder-actions">
            <a className="founder-button" href="\contact">
              Talk To Our Team →
            </a>
          </div>
        </div>

        {/* The right column uses CSS Grid and a card layout to create a premium video preview. */}
        <div className="founder-media">
          <div className="founder-video-card" role="group" aria-label="Founder introduction preview">
            {/* Later, this placeholder thumbnail can become an owner-recorded video preview. */}
            {/* The thumbnail will be updated after the video is uploaded to YouTube. */}
            <div className="founder-video-thumb">
              <div className="founder-video-overlay" aria-hidden="true" />
              <div className="founder-play" aria-hidden="true">
                <span>▶</span>
              </div>
              <span className="founder-badge">What we do</span>
              <span className="founder-duration">Sonnitech</span>
            </div>

            <div className="founder-video-body">
              <h3>Meet us</h3>
              <p>
                Learn the story behind Muso Enterprise and discover our mission of
                delivering quality products, trusted services and practical training
                across Kenya.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
