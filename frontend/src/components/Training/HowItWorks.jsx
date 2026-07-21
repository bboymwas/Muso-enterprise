import React from 'eact';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const steps = [
  {
    title: 'Register',
    description: 'Book your training through the website or WhatsApp.',
    icon: '1',
  },
  {
    title: 'Attend Training',
    description: 'Learn directly from experienced instructors through practical sessions.',
    icon: '2',
  },
  {
    title: 'Practice & Create',
    description: 'Make soaps and cleaning products yourself using professional techniques.',
    icon: '3',
  },
  {
    title: 'Business Guidance',
    description: 'Learn branding, pricing, packaging, and marketing strategies.',
    icon: '4',
  },
  {
    title: 'Launch Your Business',
    description: 'Apply your new skills and confidently start or grow your business.',
    icon: '5',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="how-it-works-container">
        {/* Section Badge */}
        <motion.span 
          className="how-it-works-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          HOW TRAINING WORKS
        </motion.span>

        {/* Heading & Description */}
        <motion.h2 
          className="how-it-works-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          A Simple Journey From Learning to Launching Your Business
        </motion.h2>
        <motion.p 
          className="how-it-works-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our hands-on training is designed to equip you with practical skills and business knowledge, 
          guiding you from registration to confidently starting your own cleaning products business.
        </motion.p>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          {/* The connecting line */}
          <div className="timeline-line" />

          <div className="timeline-steps">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="timeline-step"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="step-card">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
