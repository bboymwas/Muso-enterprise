import { useEffect, useState } from 'react'
import './ContactModal.css'

const WHATSAPP_NUMBER = '254703767584'
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

function ContactModal({
  isOpen,
  onClose,
  title = 'Contact Us',
  description = 'Tell us how we can help.',
  defaultSubject = '',
  defaultContext = '',
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: defaultSubject,
    context: defaultContext,
    message: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (!isOpen) return

    setFormData((prev) => ({
      ...prev,
      subject: prev.subject || defaultSubject,
      context: prev.context || defaultContext,
    }))
    setErrors({})
  }, [isOpen, defaultSubject, defaultContext])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Full name is required.'
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone number is required.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const buildWhatsAppMessage = () => {
    const subjectLine = formData.subject?.trim() || 'General enquiry'
    const contextLine = formData.context?.trim()

    const lines = [
      `*Subject:* ${subjectLine}`,
      `*Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
    ]

    if (contextLine) {
      lines.push(`*Context:* ${contextLine}`)
    }

    lines.push('', '*Message:*')
    lines.push(formData.message.trim())

    return lines.join('\n')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const message = buildWhatsAppMessage()
    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    onClose?.()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="contact-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>

        <div className="contact-modal-header">
          <span className="contact-modal-tag">Muso Enterprise</span>
          <h2 id="contact-modal-title">{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <form className="contact-modal-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-modal-field">
            <label htmlFor="contact-modal-name">
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-modal-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              required
            />
            {errors.name && (
              <span id="contact-name-error" className="contact-modal-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact-modal-field">
            <label htmlFor="contact-modal-phone">
              Phone Number <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-modal-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0712 345 678"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
              required
            />
            {errors.phone && (
              <span id="contact-phone-error" className="contact-modal-error">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="contact-modal-field">
            <label htmlFor="contact-modal-subject">Subject / Context</label>
            <input
              id="contact-modal-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Training, Product enquiry, Fumigation..."
            />
          </div>

          <div className="contact-modal-field">
            <label htmlFor="contact-modal-context">Product / Service Context</label>
            <input
              id="contact-modal-context"
              name="context"
              type="text"
              value={formData.context}
              onChange={handleChange}
              placeholder="e.g. Office cleaning, hotel fumigation, staff training"
            />
          </div>

          <div className="contact-modal-field contact-modal-field-full">
            <label htmlFor="contact-modal-message">
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-modal-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you today..."
              rows="5"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              required
            />
            {errors.message && (
              <span id="contact-message-error" className="contact-modal-error">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className="contact-modal-submit">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
