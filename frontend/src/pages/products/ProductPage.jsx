import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import SearchBar from '../../components/products/SearchBar'
import CategoryFilter from '../../components/products/CategoryFilter'
import ProductGrid from '../../components/products/ProductGrid'
import FloatingCart from '../../components/products/FloatingCart'
import CartDrawer from '../../components/products/CartDrawer'
import ProductModal from '../../components/products/ProductModal'
import products from '../../data/products'
import '../../components/products/productStyles.css'

function ProductPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = ['All Products', ...new Set(products.map((product) => product.category))]

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All Products' || product.category === activeCategory
      const searchText = searchQuery.trim().toLowerCase()
      const matchesSearch =
        searchText.length === 0 ||
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

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
    setIsCartOpen(false)
  }

  function updateCartQuantity(productId, delta) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function removeFromCart(productId) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId))
  }

  return (
    <>
      <Navbar />
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
            <h1>Build your order with premium cleaning essentials.</h1>
            <p>
              Explore a curated catalog of trusted products and send your selected items straight to WhatsApp for a
              quick, convenient order.
            </p>
          </motion.div>

          <div className="product-toolbar">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <CategoryFilter categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />
          </div>
        </section>

        <ProductGrid
          products={filteredProducts}
          onAddToOrder={addToOrder}
          onOpenModal={setSelectedProduct}
        />

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
          {isCartOpen && (
            <CartDrawer
              cart={cart}
              totalItems={cartCount}
              totalPrice={totalPrice}
              onClose={() => setIsCartOpen(false)}
              onIncrease={(productId) => updateCartQuantity(productId, 1)}
              onDecrease={(productId) => updateCartQuantity(productId, -1)}
              onRemove={removeFromCart}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {cartCount > 0 && (
            <FloatingCart count={cartCount} onOpen={() => setIsCartOpen(true)} />
          )}
        </AnimatePresence>
      </motion.main>
      <Footer />
    </>
  )
}

export default ProductPage
