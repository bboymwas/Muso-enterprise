import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

function ProductCard({ product, onAddToOrder, onOpenModal }) {
  return (
    <motion.article
      className="product-card"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <ImageCarousel images={product.images} alt={product.name} onOpenModal={() => onOpenModal(product)} />

      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.category}</span>
          <span>{product.sizes[0]}</span>
        </div>

        <h3>{product.name}</h3>
        <p className="product-card-description">{product.description}</p>
        <div className="product-price">Ksh {product.price}</div>

        <button type="button" className="add-order-button" onClick={() => onAddToOrder(product, 1)}>
          Add to Order
        </button>
      </div>
    </motion.article>
  )
}

export default ProductCard
