import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHandsHelping, FaUsers } from 'react-icons/fa';
import './OurStory.css';

const OurStory = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, delay: 0.2 },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const highlights = [
    { id: 1, icon: <FaLeaf aria-hidden="true" />, title: 'Quality Products' },
    { id: 2, icon: <FaHandsHelping aria-hidden="true" />, title: 'Trusted Services' },
    { id: 3, icon: <FaUsers aria-hidden="true" />, title: 'Community Empowerment' },
  ];

  return (
    <section className="our-story-section" aria-label="Our Story Section">
      <motion.div
        className="our-story-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <motion.div className="our-story-left" variants={columnVariants}>
          <span className="section-label">Our Story</span>
          <h2 className="section-heading">
            From a Challenge to a Mission: Empowering Every Household and Business
          </h2>
          <p className="section-paragraph">
            Every day, families, small businesses, and aspiring entrepreneurs face
            the same hurdles: unreliable cleaning solutions, unsafe pest control
            methods, and a lack of affordable, practical training. Muso
            Enterprise was born to turn these pain points into opportunities.
          </p>
          <p className="section-paragraph">
            By blending premium, eco‑friendly cleaning products with expert
            fumigation services and hands‑on business training, we give people the
            tools they need to thrive. Our mission is simple: create healthier
            homes, safer workplaces, and stronger communities.
          </p>
          <div className="highlights-row">
            {highlights.map((h) => (
              <motion.div
                key={h.id}
                className="highlight-card"
                variants={highlightVariants}
              >
                <div className="highlight-icon">{h.icon}</div>
                <span className="highlight-title">{h.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Right Column */}
        <motion.div className="our-story-right" variants={columnVariants}>
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1584697964285-5c1b1e5b5e3b?auto=format&fit=crop&w=800&q=80"
              alt="Our Story visual representation"
              className="story-image"
            />
            <div className="decorative-bg" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurStory;
