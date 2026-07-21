import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { OWNER_PHONE } from '../../data/products'

function CartDrawer({ cart, totalItems, totalPrice, onClose, onIncrease, onDecrease, onRemove, compact = false, showOverlay = true }) {
  function sendToWhatsApp() {
    const messageLines = [
      'Hello Muso Enterprise,',
      '',
      'I would like to order:',
      '',
      ...cart.map((item) => `${item.quantity} × ${item.name} (${item.sizes[0] || 'Standard'})`),
      '',
      `Estimated Total: Ksh ${totalPrice.toLocaleString()}`,
      '',
      'Please assist me with availability.',
      '',
      'Thank you.',
    ]

    const message = encodeURIComponent(messageLines.join('\n'))
    window.open(`https://wa.me/${OWNER_PHONE}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {showOverlay && <motion.div className="cart-drawer-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />}
      <motion.aside className={`cart-drawer ${compact ? 'mobile-drawer' : ''}`} initial={compact ? { y: '100%' } : { x: '100%' }} animate={compact ? { y: 0 } : { x: 0 }} exit={compact ? { y: '100%' } : { x: '100%' }} transition={{ type: 'spring', damping: 26, stiffness: 240 }}>
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, color: '#14213d' }}>Your Order</h3>
              <p style={{ margin: '6px 0 0', color: '#64748b' }}>{totalItems} item{totalItems === 1 ? '' : 's'} selected</p>
            </div>
            <button type="button" onClick={onClose} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#14213d' }} aria-label="Close order panel">
              <FiX size={20} />
            </button>
          </div>
        </div>

        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <p style={{ color: '#64748b' }}>Your cart is empty. Add a few products to get started.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.name} loading="lazy" />
                <div style={{ flex: 1 }}>
                  <h4>{item.name}</h4>
                  <p>{item.sizes[0] || 'Standard'}</p>
                  <p>Ksh {item.price}</p>
                  <div className="cart-item-actions">
                    <button type="button" onClick={() => onDecrease(item.id)} aria-label={`Decrease ${item.name}`}>−</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => onIncrease(item.id)} aria-label={`Increase ${item.name}`}>+</button>
                  </div>
                </div>
                <button type="button" onClick={() => onRemove(item.id)} style={{ border: 'none', background: 'transparent', color: '#ef4444', cursor: 'pointer' }} aria-label={`Remove ${item.name}`}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-drawer-footer">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#64748b' }}>Estimated Total</span>
            <strong style={{ color: '#14213d' }}>Ksh {totalPrice.toLocaleString()}</strong>
          </div>
          <div className="cart-footer-actions">
            <button type="button" className="modal-close-button" onClick={onClose}>Continue Shopping</button>
            <button type="button" className="whatsapp-button" onClick={sendToWhatsApp}>Send Order via WhatsApp</button>
          </div>
        </div>
      </motion.aside>
    </>
  )
}

export default CartDrawer
