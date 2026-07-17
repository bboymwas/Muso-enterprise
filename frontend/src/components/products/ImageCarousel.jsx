import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function ImageCarousel({ images, alt, onOpenModal }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [images])

  function nextImage() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
  }

  function previousImage() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="product-card-media" onClick={onOpenModal} role="button" tabIndex={0} onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onOpenModal()
      }
    }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={alt}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <div className="image-carousel-controls">
            <button type="button" onClick={(event) => { event.stopPropagation(); previousImage() }} aria-label="Previous image">
              <FiChevronLeft size={18} />
            </button>
            <button type="button" onClick={(event) => { event.stopPropagation(); nextImage() }} aria-label="Next image">
              <FiChevronRight size={18} />
            </button>
          </div>
          <div className="carousel-dots" aria-label="Image pagination">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveIndex(index)
                }}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ImageCarousel
