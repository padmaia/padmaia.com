'use client'

import { useState, useEffect } from 'react'

const experiences = [
  { text: 'authentic human', color: 'text-foreground-primary' },
  { text: 'delightful digital', color: 'text-foreground-secondary' },
  { text: 'immersive dev', color: 'text-foreground-muted' },
]

export default function ExperienceRolodex() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length)
        setIsFlipping(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const current = experiences[currentIndex]

  return (
    <div className="font-mono mb-10">
      <p className="text-foreground-muted text-sm tracking-wide mb-3">
        seeker of
      </p>
      <div className="h-32 sm:h-32 md:h-32 lg:h-16 overflow-hidden perspective-500">
        <p
          className={`text-3xl md:text-4xl font-semibold transition-all duration-300 ease-out ${
            isFlipping 
              ? 'opacity-0 -translate-y-full' 
              : 'opacity-100 translate-y-0'
          }`}
          style={{
            transform: isFlipping ? 'translateY(-100%) rotateX(90deg)' : 'translateY(0) rotateX(0deg)',
            transformOrigin: 'bottom center',
          }}
        >
          <span className={current.color}>{current.text}</span>{' '}
          <span className="gradient-text">experiences</span>
        </p>
      </div>
    </div>
  )
}

