'use client'

import { useState, useEffect } from 'react'

const experiences = [
  { text: 'meaningful human experiences', size: 'text-3xl md:text-4xl', color: 'text-foreground-primary' },
  { text: 'delightful digital experiences', size: 'text-3xl md:text-4xl', color: 'text-foreground-secondary' },
  { text: 'engaging developer experiences', size: 'text-3xl md:text-4xl', color: 'text-foreground-muted' },
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
      <div className="h-[2.5rem] md:h-[3rem] overflow-hidden perspective-500">
        <p
          className={`${current.size} font-semibold ${current.color} transition-all duration-300 ease-out ${
            isFlipping 
              ? 'opacity-0 -translate-y-full rotateX-90' 
              : 'opacity-100 translate-y-0 rotateX-0'
          }`}
          style={{
            transform: isFlipping ? 'translateY(-100%) rotateX(90deg)' : 'translateY(0) rotateX(0deg)',
            transformOrigin: 'bottom center',
          }}
        >
          {current.text}
        </p>
      </div>
    </div>
  )
}

