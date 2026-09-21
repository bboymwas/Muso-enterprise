import { useEffect, useState } from 'react'

function CountUp({ value, suffix = '', className = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let animationFrame
    const duration = 900
    let start = null

    function animate(timestamp) {
      if (!start) start = timestamp

      const progress = Math.min((timestamp - start) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [value])

  return (
    <span className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default CountUp