'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer 
      className="relative bg-white text-avant-black py-20 -mt-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, margin: "-100px" }}
    >
      {/* Верхня частина, що "виходить" з блоку команди */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-avant-black/0 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Логотип та опис */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-mono tracking-wider mb-6">KIMERA MAGAZINE</h3>
            <p className="text-avant-black/60 leading-relaxed font-mono mb-8 max-w-md">
              Біануальний делюкс арт-журнал. Серед мрій, кошмарів, політики та всього, що між ними, знаходиться краса.
            </p>
            
            {/* Соціальні мережі */}
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-avant-black/60 hover:text-avant-black transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-avant-black/60 hover:text-avant-black transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-avant-black/60 hover:text-avant-black transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-avant-black/60 hover:text-avant-black transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Швидкі посилання */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-mono tracking-wider mb-6">ШВИДКІ ПОСИЛАННЯ</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li><a href="#" className="text-avant-black/60 hover:text-avant-black transition-colors duration-300">Головна</a></li>
              <li><a href="#" className="text-avant-black/60 hover:text-avant-black transition-colors duration-300">Випуски</a></li>
              <li><a href="#" className="text-avant-black/60 hover:text-avant-black transition-colors duration-300">Мерч</a></li>
              <li><a href="#" className="text-avant-black/60 hover:text-avant-black transition-colors duration-300">Команда</a></li>
              <li><a href="#" className="text-avant-black/60 hover:text-avant-black transition-colors duration-300">Контакти</a></li>
            </ul>
          </motion.div>

          {/* Контакти */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-mono tracking-wider mb-6">КОНТАКТИ</h4>
            <div className="space-y-3 font-mono text-sm text-avant-black/60">
              <p>Київ, Україна</p>
              <p>hello@kimeramagazine.com</p>
              <p>+380 44 123 45 67</p>
            </div>
          </motion.div>
        </div>

        {/* Розділювач */}
        <motion.div 
          className="h-px bg-avant-black/20 my-12"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Нижня частина */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-avant-black/60 font-mono">
            © 2024 KIMERA MAGAZINE. Всі права захищені.
          </p>
          <div className="flex space-x-6 text-sm font-mono">
            <a href="#" className="text-avant-black/60 hover:text-avant-black transition-colors duration-300">
              Політика конфіденційності
            </a>
            <a href="#" className="text-avant-black/60 hover:text-avant-black transition-colors duration-300">
              Умови використання
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
} 