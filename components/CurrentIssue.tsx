'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Calendar, Users, Eye } from 'lucide-react'

export default function CurrentIssue() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-avant-black text-avant-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{ y, opacity }}
        >
          {/* Ліва частина - Зображення */}
          <motion.div
            className="relative aspect-[3/4] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="https://beautypapers.com/wp-content/uploads/2024/10/website-thumbnails-11-768x768.jpg"
              alt="Актуальний номер KIMERA MAGAZINE"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Бейдж "НОВИЙ" */}
            <motion.div
              className="absolute top-6 left-6 bg-avant-white text-avant-black px-4 py-2 text-sm font-bold tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              НОВИЙ
            </motion.div>
          </motion.div>

          {/* Права частина - Контент */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Заголовок */}
            <div>
              <motion.h2 
                className="text-6xl md:text-7xl font-black tracking-tight mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                АКТУАЛЬНИЙ
              </motion.h2>
              <motion.h3 
                className="text-4xl md:text-5xl font-bold tracking-tight text-avant-white/80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                НОМЕР
              </motion.h3>
            </div>

            {/* Опис */}
            <motion.p 
              className="text-xl md:text-2xl leading-relaxed text-avant-white/70 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Досліджуємо межі моди, мистецтва та культури. У цьому випуску ми звертаємося до тем ідентичності, свободи та бунту.
            </motion.p>

            {/* Статистика */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-avant-white/60" />
                <div className="text-2xl font-bold">2024</div>
                <div className="text-sm text-avant-white/60">РІК</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-avant-white/60" />
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-avant-white/60">АВТОРІВ</div>
              </div>
              <div className="text-center">
                <Eye className="w-8 h-8 mx-auto mb-2 text-avant-white/60" />
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-avant-white/60">СТОРІНОК</div>
              </div>
            </motion.div>

            {/* Кнопка */}
            <motion.button
              className="group flex items-center space-x-4 bg-avant-white text-avant-black px-8 py-4 font-bold tracking-wider hover:bg-avant-white/90 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>ЧИТАТИ ЗАРАЗ</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 