import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import QuantitySelector from './QuantitySelector'

function ProductModal({ product, onClose, onAddToOrder }) {
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal-card" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.25 }} onClick={(event) => event.stopPropagation()}>
        <div className="modal-grid">
          <div>
            <div className="modal-media">
              <img src={product.images[activeImage]} alt={product.name} loading="lazy" />
            </div>
            <div className="modal-thumbs">
              {product.images.map((image, index) => (
                <button key={`${image}-${index}`} type="button" onClick={() => setActiveImage(index)}>
                  <img src={image} alt={`${product.name} ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="modal-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="section-tag">{product.category}</span>
              <button type="button" onClick={onClose} className="modal-close-button" aria-label="Close product details">
                <FiX size={18} />
              </button>
            </div>

            <h2>{product.name}</h2>
            <p>{product.longDescription}</p>
            <p className="modal-price">Ksh {product.price}</p>
            <div>
              <h4>Available sizes</h4>
              <ul className="modal-details-list">
                {product.sizes.map((size) => <li key={size}>{size}</li>)}
              </ul>
            </div>
            <div>
              <h4>Features</h4>
              <ul className="modal-feature-list">
                {product.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
            <div>
              <h4>Benefits</h4>
              <ul className="modal-feature-list">
                {product.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
              </ul>
            </div>

            <div style={{ marginTop: '12px' }}>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity((current) => current + 1)}
                onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
              />
            </div>

            <div className="modal-actions">
              <button type="button" className="modal-action-button" onClick={() => onAddToOrder(product, quantity)}>
                Add to Order
              </button>
              <button type="button" className="modal-close-button" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProductModal
