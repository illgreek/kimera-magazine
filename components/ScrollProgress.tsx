'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-avant-white z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
} 