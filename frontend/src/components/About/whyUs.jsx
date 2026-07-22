import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldVirus, FaGraduationCap, FaDollarSign, FaHandsHelping, FaUsers } from 'react-icons/fa';
import './WhyUs.css';

const WhyUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const cards = [
    {
      id: 1,
      icon: <FaLeaf aria-hidden="true" />, // Premium Quality Products
      title: 'Premium Quality Products',
      desc: 'Carefully formulated cleaning products that deliver reliable performance while remaining affordable for homes and businesses.',
    },
    {
      id: 2,
      icon: <FaShieldVirus aria-hidden="true" />, // Professional Fumigation
      title: 'Professional Fumigation',
      desc: 'Safe, effective pest control solutions delivered by trained professionals using modern techniques.',
    },
    {
      id: 3,
      icon: <FaGraduationCap aria-hidden="true" />, // Hands-on Training
      title: 'Hands‑on Training',
      desc: 'Practical training that equips individuals with the skills to start and grow successful cleaning product businesses.',
    },
    {
      id: 4,
      icon: <FaDollarSign aria-hidden="true" />, // Affordable Pricing
      title: 'Affordable Pricing',
      desc: 'High‑quality products and services offered at prices accessible to Kenyan households and businesses.',
    },
    {
      id: 5,
      icon: <FaHandsHelping aria-hidden="true" />, // Customer-Centered Service
      title: 'Customer‑Centered Service',
      desc: 'We build lasting relationships through dependable support, honesty, and exceptional customer care.',
    },
    {
      id: 6,
      icon: <FaUsers aria-hidden="true" />, // Community Empowerment
      title: 'Community Empowerment',
      desc: 'Every product and training program contributes to healthier communities and greater economic opportunity.',
    },
  ];

  return (
    <section className="why-us-section" aria-label="Why Choose Us Section">
      <div className="why-us-container">
        <span className="section-label">Why Choose Us</span>
        <h2 className="section-heading">Why Muso Enterprise is the trusted partner for your cleaning and business needs</h2>
        <p className="section-paragraph">Customers trust us because we combine premium products, expert services, and practical training to empower individuals and businesses alike.</p>
        <motion.div className="cards-grid" initial="hidden" animate="visible">
          {cards.map((card) => (
            <motion.article
              key={card.id}
              className="card"
              custom={card.id - 1}
              variants={cardVariants}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
