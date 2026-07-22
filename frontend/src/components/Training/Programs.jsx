import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaSoap,
  FaFlask,
  FaBoxOpen,
  FaChartLine,
  FaLeaf,
} from 'react-icons/fa';
import './Programs.css';


const programs = [
  {
    id: 1,
    title: "Beginner Soap Making",
    description: "Master the fundamentals of soap making with our comprehensive introductory course.",
    icon: <FaSoap className="program-icon" />,
    learn: [
      "Basic soap making principles",
      "Essential safety protocols",
      "Understanding ingredients",
      "Simple recipe variations"
    ]
  },
  {
    id: 2,
    title: "Liquid Soap & Hand Wash Formulation",
    description: "Learn to create high-quality liquid soaps for various household and personal uses.",
    icon: <FaFlask className="program-icon" />,
    learn: [
      "Liquid soap chemistry",
      "Surfactant usage guide",
      "pH balancing techniques",
      "Viscosity control methods"
    ]
  },
  {
    id: 3,
    title: "Laundry & Kitchen Detergents",
    description: "Formulate powerful cleaning solutions for laundry and kitchen applications.",
    icon: <FaFlask className="program-icon" />,
    learn: [
      "Detergent formulation basics",
      "Stain removal science",
      "Cleaning agent selection",
      "Industrial vs home use"
    ]
  },
  {
    id: 4,
    title: "Business & Marketing",
    description: "Turn your skills into a profitable business with our marketing strategies.",
    icon: <FaChartLine className="program-icon" />,
    learn: [
      "Market research basics",
      "Pricing your products",
      "Digital marketing tools",
      "Customer relationship management"
    ]
  },
  {
    id: 5,
    title: "Natural Ingredient Sourcing & Blending",
    description: "Discover how to source and blend natural ingredients for premium products.",
    icon: <FaLeaf className="program-icon" />,
    learn: [
      "Sourcing natural oils",
      "Essential oil blending",
      "Ingredient quality testing",
      "Sustainable sourcing practices"
    ]
  },
  {
    id: 6,
    title: "Product Packaging & Branding",
    description: "Create a memorable brand identity and professional product packaging.",
    icon: <FaBoxOpen className="program-icon" />,
    learn: [
      "Brand identity design",
      "Packaging material selection",
      "Labeling requirements",
      "Visual storytelling"
    ]
  }
];

const Programs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="programs-section">
      <div className="programs-container">
        <motion.div 
          className="programs-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">OUR TRAINING PROGRAMS</span>
          <h2 className="section-heading">Learn Practical Manufacturing Skills. Build a Profitable Cleaning Products Business.</h2>
          <p className="section-description">
           Gain hands-on experience in soap making, liquid detergents, sanitizers, packaging, branding, and business development. Our practical training equips you with the skills and confidence to manufacture quality products and turn them into a sustainable source of income.</p>
        </motion.div>

        <motion.div 
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {programs.map((program) => (
            <motion.div 
              key={program.id}
              className="program-card"
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="card-icon-wrapper">
                {program.icon}
              </div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              
              <div className="learn-section">
                <h4 className="learn-heading">You'll Learn</h4>
                <ul className="learn-list">
                  {program.learn.map((item, index) => (
                    <li key={index} className="learn-item">
                      <FaCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
