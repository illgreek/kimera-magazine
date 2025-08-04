'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import FashionTitle from '../components/FashionTitle'
import Navigation from '../components/Navigation'
import ScrollProgress from '../components/ScrollProgress'
import TextReveal from '../components/TextReveal'
import ManifestSlider from '../components/ManifestSlider'
import CurrentIssue from '../components/CurrentIssue'
import IssueDescription from '../components/IssueDescription'
import ShopSection from '../components/ShopSection'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div ref={containerRef} className="min-h-screen bg-avant-black text-avant-white">
      <ScrollProgress />

      <Navigation />
      {/* Video/Photo Manifesto Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://beautypapers.com/wp-content/uploads/2022/06/Frame-30TrunkCarousel-scaled.jpg?id=51215"
            alt="Kimera Magazine Hero"
            fill
            className="object-cover opacity-80"
            priority
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative z-10 text-center"
        >
          <FashionTitle />
          <TextReveal className="text-xl md:text-2xl font-light tracking-wider max-w-2xl mx-auto" delay={1}>
            Серед мрій, кошмарів, політики та всього, що між ними, знаходиться краса.
          </TextReveal>
        </motion.div>
      </section>

      {/* Manifest Slider */}
      <ManifestSlider />

      {/* Current Issue */}
      <CurrentIssue />

      {/* Issue Description */}
      <IssueDescription />

      {/* Shop Section */}
      <ShopSection />

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <Footer />
    </div>
  )
} 