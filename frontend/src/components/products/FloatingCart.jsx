import { motion } from 'framer-motion'
import { FiShoppingBag } from 'react-icons/fi'

function FloatingCart({ count, onOpen }) {
  return (
    <motion.button
      className="floating-cart cart-button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileTap={{ scale: 0.96 }}
      onClick={onOpen}
      type="button"
    >
      <FiShoppingBag size={18} />
      <span>{count}</span>
    </motion.button>
  )
}

export default FloatingCart
