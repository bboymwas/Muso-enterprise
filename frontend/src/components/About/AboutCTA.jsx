import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AboutCTA.css';

const AboutCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, delay: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

 

  return (
    <section className="cta-section" aria-label="Call to Action">
      <motion.div
        className="cta-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="section-labelll" variants={itemVariants}>
          Ready to Get Started?
        </motion.span>
        <motion.h2 className="section-heading" variants={itemVariants}>
          Let&apos;s Build Cleaner Spaces and Stronger Communities Together
        </motion.h2>
        <motion.p className="section-paragraph" variants={itemVariants}>
          Whether you&apos;re looking for high‑quality cleaning products, professional fumigation services, or practical business training, Sonnitech Enterprise is here to help you create healthier environments and unlock new opportunities. Let&apos;s take the next step together.
        </motion.p>
        <motion.div className="buttons-wrapper" variants={itemVariants}>
          
            <Link to="/products" className="btn-primary" aria-label="View our products">
              View Products
            </Link>
          

            <Link to="/contact" className="btn-secondary" aria-label="Contact us">
              Contact Us
            </Link>
         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
