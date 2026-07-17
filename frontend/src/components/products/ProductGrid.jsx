import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

function ProductGrid({ products, onAddToOrder, onOpenModal }) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <h3>No products match your search yet.</h3>
        <p>Try a different keyword or switch to another category.</p>
      </div>
    )
  }

  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: index * 0.05 }}
        >
          <ProductCard product={product} onAddToOrder={onAddToOrder} onOpenModal={onOpenModal} />
        </motion.div>
      ))}
    </div>
  )
}

export default ProductGrid
