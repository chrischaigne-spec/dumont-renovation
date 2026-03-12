'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function BeforeAfterSlider({
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  beforeImage,
  afterImage,
  height = 400,
}: {
  beforeLabel?: string
  afterLabel?: string
  beforeImage?: string
  afterImage?: string
  height?: number
}) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updatePosition(e.clientX)
  }, [updatePosition])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    updatePosition(e.touches[0].clientX)
  }, [updatePosition])

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => updatePosition(e.clientX)
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      updatePosition(e.touches[0].clientX)
    }
    const handleEnd = () => setIsDragging(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleEnd)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleEnd)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging, updatePosition])

  const placeholder = (label: string, dark?: boolean) => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className={`w-16 h-16 ${dark ? 'bg-white/20' : 'bg-primary/10'} rounded-2xl mx-auto mb-3 flex items-center justify-center`}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={dark ? '#6B7280' : '#F97316'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span className={`${dark ? 'text-gray-600' : 'text-gray-400'} text-sm font-medium`}>{label}</span>
      </div>
    </div>
  )

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-xl select-none group"
      style={{ height, cursor: isDragging ? 'grabbing' : 'grab' }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After (background - full) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
        {afterImage ? (
          <img src={afterImage} alt="Après rénovation" className="absolute inset-0 w-full h-full object-cover" />
        ) : placeholder('Photo après rénovation')}
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {beforeImage ? (
          <img src={beforeImage} alt="Avant rénovation" className="absolute inset-0 w-full h-full object-cover" />
        ) : placeholder('Photo avant rénovation', true)}
      </div>

      {/* Slider line + handle */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] left-1/2 -translate-x-1/2" />

        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className={`w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform ${isDragging ? 'scale-110' : 'group-hover:scale-105'}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 10L3 10M3 10L5 8M3 10L5 12" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 10L17 10M17 10L15 8M17 10L15 12" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-dark/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {afterLabel}
        </span>
      </div>
    </motion.div>
  )
}
