
import { motion } from 'framer-motion';
import {
  FaUserPlus,
  FaTools,
  FaFlask,
  FaChartBar,
  FaRocket,
} from 'react-icons/fa';
import './HowTrainingWorks.css';

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Choose your preferred training program and reserve your spot.",
    icon: <FaUserPlus className="how-training-icon-svg" />,
  },
  {
    number: "02",
    title: "Hands-on Training",
    description: "Learn through practical demonstrations and guided manufacturing sessions.",
    icon: <FaTools className="how-training-icon-svg" />,
  },
  {
    number: "03",
    title: "Practice & Create",
    description: "Make real cleaning products while gaining confidence with each process.",
    icon: <FaFlask className="how-training-icon-svg" />,
  },
  {
    number: "04",
    title: "Business & Marketing",
    description: "Learn pricing, branding, packaging, and how to sell your products.",
    icon: <FaChartBar className="how-training-icon-svg" />,
  },
  {
    number: "05",
    title: "Launch Your Business",
    description: "Leave with practical skills and the confidence to start or grow your own business.",
    icon: <FaRocket className="how-training-icon-svg" />,
  },
];

const HowTrainingWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="how-training-journey">
      <div className="how-training-container">
        <motion.div
          className="how-training-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="how-training-title">Your Journey Starts Here</h2>
          <p className="how-training-description">
            From your first training session to launching your own cleaning products business, we guide you every step of the way.
          </p>
        </motion.div>

        <motion.div
          className="how-training-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="how-training-card"
              variants={itemVariants}
            >
              <div className="how-training-step">{step.number}</div>

              <div className="how-training-icon">
                {step.icon}
              </div>

              <h3 className="how-training-card-title">{step.title}</h3>
              <p className="how-training-card-description">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowTrainingWorks;