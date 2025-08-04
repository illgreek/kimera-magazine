'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const words = children.split(' ')

  return (
    <motion.div className={`text-reveal ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: delay + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
} 