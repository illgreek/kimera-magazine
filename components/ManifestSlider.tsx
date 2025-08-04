'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const images = [
  {
    src: "https://beautypapers.com/wp-content/uploads/2025/07/bailey_hiresFPO-241-copy.jpg",
    title: "КРАСА",
    text: "Краса - це не просто естетика, а спосіб пізнання світу. Через мистецтво ми знаходимо істину."
  },
  {
    src: "https://beautypapers.com/wp-content/uploads/2025/06/ROOMS_G.I_21_LAURA.BAILEY_RGB.jpg",
    title: "МОДА", 
    text: "Мода - це мова, якою ми говоримо про себе. Кожен вибір - це заява про нашу ідентичність."
  },
  {
    src: "https://beautypapers.com/wp-content/uploads/2025/04/DOMINICK-SHELDON_TOKYOGIRLS2_ELANA_3_0054-819x1024.jpg",
    title: "КУЛЬТУРА",
    text: "Культура - це дзеркало суспільства. Через мистецтво ми бачимо себе та інших."
  },
  {
    src: "https://beautypapers.com/wp-content/uploads/2024/11/Oud_Nebula_2-734x1024.jpg",
    title: "ЕКСПЕРИМЕНТ",
    text: "Експеримент - це шлях до відкриття. Не бійся виходити за межі звичайного."
  },
  {
    src: "https://beautypapers.com/wp-content/uploads/2024/08/1-10-4-5--1024x717.jpg",
    title: "ДЕТАЛІ",
    text: "Краса знаходиться в деталях. Уважність до дрібниць створює великі речі."
  }
]

export default function ManifestSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Додаємо offset для заповільнення скролу
  const slowedScrollProgress = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, 1]
  )

  // Блок з'являється одразу, коли попадає в екран, і зникає після останнього слайду
  const blockOpacity = useTransform(slowedScrollProgress, [0, 0.01, 0.7, 0.9], [0, 1, 1, 0])

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh]"
    >
      {/* Fixed контейнер який зафіксований на весь екран */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-screen w-full overflow-hidden bg-avant-black" 
        style={{ zIndex: 30, opacity: blockOpacity }}
      >
        {images.map((image, index) => {
          // Кожен слайд має свою зону скролу з заповільненим прогресом
          const slideProgress = useTransform(
            slowedScrollProgress,
            [index * 0.15, (index + 1) * 0.15],
            [0, 1]
          )
          
          // Перший слайд з'являється одразу, коли блок попадає в екран
          const slideOpacity = useTransform(
            slideProgress,
            index === 0 ? [0, 0.01, 0.99, 1] : 
            index === images.length - 1 ? [0, 0.2, 0.8, 1] : 
            [0, 0.2, 0.8, 1],
            [0, 1, 1, 0]
          )
          
          // Текст з'являється одразу після слайда
          const textOpacity = useTransform(
            slideProgress,
            index === 0 ? [0.1, 0.3, 0.7, 1] : 
            index === images.length - 1 ? [0.1, 0.4, 0.8, 1] : 
            [0.1, 0.4, 0.6, 1],
            [0, 1, 1, 0]
          )
          
          return (
            <motion.div
              key={index}
              className="absolute inset-0"
              style={{ opacity: slideOpacity }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Фонова картинка */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />
              
              {/* Текст маніфесту */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/50 text-white p-8"
                style={{ opacity: textOpacity }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="text-center max-w-2xl">
                  <h2 className="text-7xl md:text-8xl font-black mb-8 tracking-tighter uppercase">
                    {image.title}
                  </h2>
                  <p className="text-2xl md:text-3xl leading-relaxed font-light">
                    {image.text}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
      
      {/* Іконка скролу вниз - зафіксована внизу екрану */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/80"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
} 