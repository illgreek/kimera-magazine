'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function FashionTitle() {
  return (
    <div className="relative">
      {/* Основний заголовок */}
      <motion.h1 
        className="text-8xl md:text-9xl font-black tracking-tight mb-8 glitch" 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        KIMERA MAGAZINE
      </motion.h1>
      

    </div>
  )
} 