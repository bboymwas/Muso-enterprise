import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './TrainingCTA.css';

const TrainingCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="training-cta-section">
      <motion.div
        className="training-cta-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Badge */}
        <motion.span className="training-cta-badge" variants={itemVariants}>
          START YOUR JOURNEY
        </motion.span>

        {/* Heading */}
        <motion.h2 className="training-cta-heading" variants={itemVariants}>
          Ready to Build Your Own Cleaning Products Business?
        </motion.h2>

        {/* Supporting Paragraph */}
        <motion.p className="training-cta-paragraph" variants={itemVariants}>
          Whether you're looking to learn a new skill, start a profitable business, or expand your existing product line, our practical training gives you the knowledge, confidence, and support to succeed. Join hundreds of learners who have transformed their ideas into real businesses.
        </motion.p>

        {/* Buttons */}
        <motion.div className="training-cta-buttons" variants={itemVariants}>
          <Link to="/contact" className="training-cta-btn-primary">
            Join a Training Program
          </Link>
          <Link to="/contact" className="training-cta-btn-secondary">
            Contact Us
          </Link>
        </motion.div>

        {/* Features Row */}
        <motion.div className="training-cta-features" variants={itemVariants}>
          <div className="training-cta-feature-item">
            <FaCheckCircle className="training-cta-feature-icon" />
            <span className="training-cta-feature-text">Hands-on Practical Training</span>
          </div>
          <div className="training-cta-feature-item">
            <FaCheckCircle className="training-cta-feature-icon" />
            <span className="training-cta-feature-text">Business Mentorship</span>
          </div>
          <div className="training-cta-feature-item">
            <FaCheckCircle className="training-cta-feature-icon" />
            <span className="training-cta-feature-text">Ongoing Support After Training</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TrainingCTA;
