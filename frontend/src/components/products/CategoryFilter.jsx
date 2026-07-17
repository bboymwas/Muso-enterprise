import { motion } from 'framer-motion'

function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="category-filter" aria-label="Product categories">
      {categories.map((category) => (
        <motion.button
          key={category}
          type="button"
          className={`category-pill ${activeCategory === category ? 'active' : ''}`}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(category)}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}

export default CategoryFilter
