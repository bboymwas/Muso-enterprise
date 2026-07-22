
import { motion } from 'framer-motion';
import {
  FaUserPlus,
  FaTools,
  FaFlask,
  FaChartBar,
  FaRocket,
} from 'react-icons/fa';
const steps = [
  {
    number: "01",
    title: "Register",
    description: "Choose your preferred training program and reserve your spot.",
    icon: <FaUserPlus />,
  },
  {
    number: "02",
    title: "Hands-on Training",
    description: "Learn through practical demonstrations and guided manufacturing sessions.",
    icon: <FaTools />,
  },
  {
    number: "03",
    title: "Practice & Create",
    description: "Make real cleaning products while gaining confidence with each process.",
    icon: <FaFlask />,
  },
  {
    number: "04",
    title: "Business & Marketing",
    description: "Learn pricing, branding, packaging, and how to sell your products.",
    icon: <FaChartBar />,
  },
  {
    number: "05",
    title: "Launch Your Business",
    description: "Leave with practical skills and the confidence to start or grow your own business.",
    icon: <FaRocket />,
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
    <section style={{
      padding: '100px 20px',
      backgroundColor: '#f8f9fa',
      overflow: 'hidden',
      fontFamily: 'inherit'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: '#222222',
            fontWeight: '800',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            Your Journey Starts Here
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            From your first training session to launching your own cleaning products business, we guide you every step of the way.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                flex: '1 1 calc(33.333% - 24px)',
                minWidth: '280px',
                maxWidth: '350px',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.03)',
                position: 'relative',
              }}
            >
              {/* Step Number */}
              <div style={{
                position: 'absolute',
                top: '24px',
                left: '32px',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: '#2e7d32',
                opacity: 0.5,
              }}>
                {step.number}
              </div>

              {/* Icon Container */}
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#2e7d32',
                color: '#ffffff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '24px',
                boxShadow: '0 8px 16px rgba(46, 125, 50, 0.2)',
              }}>
                {step.icon}
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                color: '#1a1a1a',
                fontWeight: '700',
                marginBottom: '16px',
                lineHeight: '1.3',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#6b7280',
                lineHeight: '1.6',
                margin: 0,
              }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowTrainingWorks;