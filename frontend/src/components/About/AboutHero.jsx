import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAward, FaGraduationCap, FaShieldVirus, FaChartLine } from 'react-icons/fa';
import './AboutHero.css';

const AboutHero = () => {
  // Framer motion animation configurations
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonsContainerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 },
    },
  };

  const rightSideVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  const infoCardsData = [
    {
      id: 1,
      icon: <FaAward aria-hidden="true" />,
      title: 'Quality Products',
      desc: 'Formulated to the highest standards, offering exceptional eco-friendly cleaning power.',
    },
    {
      id: 2,
      icon: <FaGraduationCap aria-hidden="true" />,
      title: 'Practical Training',
      desc: 'Hands-on training programs and recipes to start your manufacturing journey.',
    },
    {
      id: 3,
      icon: <FaShieldVirus aria-hidden="true" />,
      title: 'Professional Fumigation',
      desc: 'Safe, reliable, and expert pest control services for residential and commercial premises.',
    },
    {
      id: 4,
      icon: <FaChartLine aria-hidden="true" />,
      title: 'Business Empowerment',
      desc: 'Equipping aspiring individuals and businesses to successfully scale and grow.',
    },
  ];

  return (
    <section className="about-hero-section" aria-label="About Hero Section">
      <div className="about-hero-container">
        {/* LEFT SIDE: Content and Actions */}
        <motion.header
          className="about-hero-content"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="about-hero-badge"
            variants={badgeVariants}
          >
            About Muso Enterprise
          </motion.span>
          
          <motion.h1
            className="about-hero-heading"
            variants={headingVariants}
          >
            Empowering Communities Through Quality Cleaning Products & Practical Skills
          </motion.h1>
          
          <motion.p
            className="about-hero-paragraph"
            variants={paragraphVariants}
          >
            Muso Enterprise manufactures affordable, premium-grade cleaning products, provides professional, eco-safe fumigation services, and equips people with essential, practical training to confidently start and grow successful businesses.
          </motion.p>
          
          <motion.div
            className="about-hero-actions"
            variants={buttonsContainerVariants}
          >
            <Link to="/products" className="btn-primary" aria-label="View our cleaning products">
              Our Products
            </Link>
            <Link to="/contact" className="btn-secondary" aria-label="Get in touch with us">
              Contact Us
            </Link>
          </motion.div>
        </motion.header>

        {/* RIGHT SIDE: Visual Canvas with 4 Information Cards */}
        <div className="about-hero-visual">
          <div className="visual-card-canvas">
            <div className="visual-card-glow" />
            <div className="visual-card-glow-2" />
            
            <motion.div
              className="info-cards-grid"
              variants={rightSideVariants}
              initial="hidden"
              animate="visible"
            >
              {infoCardsData.map((card) => (
                <motion.article
                  key={card.id}
                  className="info-card"
                  variants={cardVariants}
                >
                  <div className="info-card-icon-wrapper">
                    {card.icon}
                  </div>
                  <h3 className="info-card-title">{card.title}</h3>
                  <p className="info-card-desc">{card.desc}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
