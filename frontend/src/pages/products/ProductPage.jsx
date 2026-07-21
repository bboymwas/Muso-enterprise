import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import SearchBar from '../../components/products/SearchBar'
import ProductGrid from '../../components/products/ProductGrid'
import CartDrawer from '../../components/products/CartDrawer'
import ProductModal from '../../components/products/ProductModal'
import products from '../../data/products'
import '../../components/products/productStyles.css'

function ProductPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isMobileView, setIsMobileView] = useState(false)

  const filteredProducts = useMemo(() => {
    const searchText = searchQuery.trim().toLowerCase()

    return products.filter((product) => {
      if (!searchText) {
        return true
      }

      return (
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
      )
    })
  }, [searchQuery])

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  function addToOrder(product, quantity = 1) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id)

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [...currentCart, { ...product, quantity }]
    })

    setIsCartOpen(true)
  }

  function updateCartQuantity(productId, delta) {
    setCart((currentCart) => {
      const nextCart = currentCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0)

      if (nextCart.length === 0) {
        setIsCartOpen(false)
      }

      return nextCart
    })
  }

  function removeFromCart(productId) {
    setCart((currentCart) => {
      const nextCart = currentCart.filter((item) => item.id !== productId)

      if (nextCart.length === 0) {
        setIsCartOpen(false)
      }

      return nextCart
    })
  }

  return (
    <>
      <Navbar
        showCartButton={cartCount > 0}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <motion.main
        className="product-page-shell"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <section className="product-hero">
          <motion.div
            className="product-hero-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            <span className="section-tag">Muso Enterprise</span>
            <h1>Premium cleaning essentials, presented with care.</h1>
            <p>
              Browse a curated showroom of trusted products and build your order effortlessly for a quick WhatsApp
              follow-up.
            </p>
          </motion.div>

          <div className="product-toolbar">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </section>

        <div className={`product-content-layout ${cartCount > 0 ? 'has-order-summary' : ''}`}>
          <div className="product-main-column">
            <ProductGrid
              products={filteredProducts}
              onAddToOrder={addToOrder}
              onOpenModal={setSelectedProduct}
            />
          </div>

          <AnimatePresence>
            {!isMobileView && cartCount > 0 && (
              <motion.aside
                className="product-order-panel"
                initial={{ opacity: 0, x: 26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 26 }}
                transition={{ duration: 0.28 }}
              >
                <CartDrawer
                  cart={cart}
                  totalItems={cartCount}
                  totalPrice={totalPrice}
                  onClose={() => setIsCartOpen(false)}
                  onIncrease={(productId) => updateCartQuantity(productId, 1)}
                  onDecrease={(productId) => updateCartQuantity(productId, -1)}
                  onRemove={removeFromCart}
                  compact={false}
                  showOverlay={false}
                />
              </motion.aside>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onAddToOrder={addToOrder}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMobileView && isCartOpen && cartCount > 0 && (
            <CartDrawer
              cart={cart}
              totalItems={cartCount}
              totalPrice={totalPrice}
              onClose={() => setIsCartOpen(false)}
              onIncrease={(productId) => updateCartQuantity(productId, 1)}
              onDecrease={(productId) => updateCartQuantity(productId, -1)}
              onRemove={removeFromCart}
              compact={true}
              showOverlay={true}
            />
          )}
        </AnimatePresence>
      </motion.main>
      <Footer />
    </>
  )
}

export default ProductPage
