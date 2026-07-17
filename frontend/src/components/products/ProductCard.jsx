import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'
import QuantitySelector from './QuantitySelector'

function ProductCard({ product, onAddToOrder, onOpenModal }) {
  const [quantity, setQuantity] = useState(1)

  function increaseQuantity() {
    setQuantity((currentQuantity) => currentQuantity + 1)
  }

  function decreaseQuantity() {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))
  }

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

        <QuantitySelector quantity={quantity} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} />

        <button type="button" className="add-order-button" onClick={() => onAddToOrder(product, quantity)}>
          Add to Order
        </button>
      </div>
    </motion.article>
  )
}

export default ProductCard
