import React from 'react'
import './whyus.css'
import { motion } from 'framer-motion'
import { FaAward, FaTruckFast, FaUserTie, FaLeaf, FaFlask, FaHeadset } from 'react-icons/fa6'

// Feature data array. Later this can be fetched from an API.
// Replace the `features` constant with fetched data without changing the JSX.
const features = [
	{
		id: 1,
		title: 'Premium Quality',
		desc: 'Top-tier materials and rigorous quality checks for dependable cleaning performance.',
		icon: <FaAward className="feature-icon" />,
	},
	{
		id: 2,
		title: 'Reliable Service',
		desc: 'Punctual delivery and dependable support you can count on every time.',
		icon: <FaTruckFast className="feature-icon" />,
	},
	{
		id: 3,
		title: 'Industry Expertise',
		desc: 'Years of experience delivering smart, compliant solutions across the market.',
		icon: <FaUserTie className="feature-icon" />,
	},
	{
		id: 4,
		title: 'Eco-Conscious Solutions',
		desc: 'Sustainable practices and safer product choices for modern operations.',
		icon: <FaLeaf className="feature-icon" />,
	},
	{
		id: 5,
		title: 'Practical Chemical Training',
		desc: 'Hands-on learning that helps teams use products safely and effectively.',
		icon: <FaFlask className="feature-icon" />,
	},
	{
		id: 6,
		title: 'Dedicated Customer Support',
		desc: 'Friendly, knowledgeable guidance whenever you need a helping hand.',
		icon: <FaHeadset className="feature-icon" />,
	},
]

// Animation variants for Framer Motion
const sectionVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.08, duration: 0.6 } },
}

const headingVariants = {
	hidden: { opacity: 0, y: 12 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const cardsContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
}

const cardVariants = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyUs() {
	return (
		<motion.section
			className="why-us-section"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.18 }}
		>
			<div className="why-us-inner">
				<motion.p className="section-label" variants={headingVariants}>
					WHY CHOOSE US
				</motion.p>

				<motion.h2 className="why-us-heading" variants={headingVariants}>
					Why Businesses Across Kenya Choose Sonnitech Enterprise
				</motion.h2>

				<motion.p className="why-us-intro" variants={headingVariants}>
					Sonnitech combines quality products, professional services and practical chemical training to deliver reliable cleaning solutions.
				</motion.p>

				{/* cards container: features are rendered from an array using .map() */}
				<motion.div className="cards-grid" variants={cardsContainer}>
					{/**
					 * features.map(): iterates over the `features` array and returns
					 * a card for each feature. This keeps the JSX DRY and makes it
					 * easy to replace `features` with data from an API later.
					 */}
					{features.map((f) => (
						<motion.article
							className="feature-card"
							key={f.id}
							variants={cardVariants}
							whileHover={{ y: -8, scale: 1.01 }}
							transition={{ type: 'spring', stiffness: 260, damping: 24 }}
						>
							<motion.div className="icon-wrap" whileHover={{ scale: 1.08 }}>
								{f.icon}
							</motion.div>

							<div className="card-content">
								<h3 className="card-title">{f.title}</h3>
								<p className="card-desc">{f.desc}</p>
							</div>
						</motion.article>
					))}
				</motion.div>

				
			</div>
		</motion.section>
	)
}

