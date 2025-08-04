'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: 1,
    title: "KIMERA MAGAZINE КЕПКА",
    subtitle: "Чорна кепка з логотипом",
    price: "₴800",
    image: "https://beautypapers.com/wp-content/uploads/2024/10/website-thumbnails-7-1536x1536.jpg",
    type: "Кепка"
  },
  {
    id: 2,
    title: "KIMERA MAGAZINE ШОПЕР",
    subtitle: "Екологичний шопер з принтом",
    price: "₴450",
    image: "https://beautypapers.com/wp-content/uploads/2024/10/website-thumbnails-7-1536x1536.jpg",
    type: "Шопер"
  },
  {
    id: 3,
    title: "KIMERA MAGAZINE ФУТБОЛКА",
    subtitle: "Біла футболка з логотипом",
    price: "₴1200",
    image: "https://beautypapers.com/wp-content/uploads/2024/10/website-thumbnails-7-1536x1536.jpg",
    type: "Футболка"
  }
]

const categories = ["Всі", "Кепки", "Шопери", "Футболки", "Аксесуари", "Новинки"]

export default function ShopSection() {
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
      className="relative min-h-screen bg-white text-avant-black py-20"
    >
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <motion.div 
          className="text-center mb-16"
          style={{ y, opacity }}
        >
          <motion.h2 
            className="text-4xl font-mono tracking-wider mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            МЕРЧ
          </motion.h2>
        </motion.div>

        {/* Навігація категорій */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-16 text-sm font-mono tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className="hover:underline transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Товари */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Зображення */}
              <motion.div
                className="relative aspect-[3/4] overflow-hidden mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Бейдж типу */}
                <div className="absolute top-4 right-4 bg-white text-avant-black px-2 py-1 text-xs font-mono tracking-wider">
                  {product.type}
                </div>
              </motion.div>

              {/* Інформація про товар */}
              <div className="space-y-2">
                <motion.h3 
                  className="text-sm font-mono tracking-wider underline"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {product.title}
                </motion.h3>
                <p className="text-sm text-avant-black/70 font-mono">
                  {product.subtitle}
                </p>
                <p className="text-lg font-mono font-bold">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Кнопка "Дивитися всі" */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="border border-avant-black px-8 py-4 font-mono tracking-wider hover:bg-avant-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ДИВИТИСЯ ВСІ
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 