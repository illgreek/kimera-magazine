'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    id: 1,
    name: "АННА КОВАЛЕНКО",
    role: "Головний редактор",
    description: "Досвід роботи в модній індустрії понад 10 років. Створила KIMERA MAGAZINE як платформу для експериментальної моди та мистецтва.",
    image: "https://beautypapers.com/wp-content/uploads/2024/04/maggizine-profile.jpg"
  },
  {
    id: 2,
    name: "МАКСИМ ПЕТРЕНКО",
    role: "Креативний директор",
    description: "Фотограф та візуальний художник. Досліджує межі сучасної фотографії та створює унікальні візуальні концепції.",
    image: "https://beautypapers.com/wp-content/uploads/2024/04/maggizine-profile.jpg"
  },
  {
    id: 3,
    name: "ОЛЕНА МЕЛЬНИК",
    role: "Арт-директор",
    description: "Спеціаліст з графічного дизайну та типографіки. Відповідає за візуальну ідентичність журналу.",
    image: "https://beautypapers.com/wp-content/uploads/2024/04/maggizine-profile.jpg"
  },
  {
    id: 4,
    name: "ВІКТОР ШЕВЧЕНКО",
    role: "Фотограф",
    description: "Експериментальний фотограф, який працює на межі моди та мистецтва. Створює унікальні образи для кожного випуску.",
    image: "https://beautypapers.com/wp-content/uploads/2024/04/maggizine-profile.jpg"
  },
  {
    id: 5,
    name: "ІРИНА БОНДАР",
    role: "Стиліст",
    description: "Креативний стиліст з досвідом роботи з провідними брендами. Створює концептуальні образи для фотосесій.",
    image: "https://beautypapers.com/wp-content/uploads/2024/04/maggizine-profile.jpg"
  },
  {
    id: 6,
    name: "ДМИТРО ЛУКАШ",
    role: "Дизайнер",
    description: "Веб-дизайнер та розробник. Створює цифрові платформи та інтерактивні досвіди для KIMERA MAGAZINE.",
    image: "https://beautypapers.com/wp-content/uploads/2024/04/maggizine-profile.jpg"
  }
]

export default function TeamSection() {
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
        {/* Заголовок */}
        <motion.div 
          className="text-center mb-20"
          style={{ y, opacity }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-mono tracking-wider mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            КОМАНДА
          </motion.h2>
          <motion.p 
            className="text-xl text-avant-white/60 max-w-3xl mx-auto leading-relaxed font-mono"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Зустрічайте людей, які створюють KIMERA MAGAZINE. 
            Наша команда об'єднує таланти з різних галузей мистецтва та моди.
          </motion.p>
        </motion.div>

        {/* Команда */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Зображення */}
              <motion.div
                className="relative aspect-square overflow-hidden mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Роль */}
                <div className="absolute bottom-4 left-4 bg-white text-avant-black px-3 py-1 text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.role}
                </div>
              </motion.div>

              {/* Інформація */}
              <div className="space-y-4">
                <motion.h3 
                  className="text-2xl font-mono tracking-wider"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-sm text-avant-white/70 leading-relaxed font-mono">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Додаткова інформація */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block p-8 border border-avant-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-mono tracking-wider mb-4">ПРИЄДНУЙТЕСЬ ДО НАС</h3>
            <p className="text-lg text-avant-white/60 max-w-2xl mx-auto leading-relaxed font-mono mb-8">
              Шукаємо талановитих людей для співпраці. 
              Якщо ви розділяєте нашу філософію - зв'яжіться з нами.
            </p>

            {/* Форма зв'язку */}
            <motion.form 
              className="max-w-md mx-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <div>
                <input
                  type="text"
                  placeholder="ВАШЕ ІМ'Я"
                  className="w-full bg-transparent border border-avant-white/30 px-4 py-3 text-avant-white font-mono tracking-wider placeholder-avant-white/50 focus:outline-none focus:border-avant-white transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border border-avant-white/30 px-4 py-3 text-avant-white font-mono tracking-wider placeholder-avant-white/50 focus:outline-none focus:border-avant-white transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="ПОВІДОМЛЕННЯ"
                  rows={4}
                  className="w-full bg-transparent border border-avant-white/30 px-4 py-3 text-avant-white font-mono tracking-wider placeholder-avant-white/50 focus:outline-none focus:border-avant-white transition-colors duration-300 resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-avant-white text-avant-black px-8 py-4 font-mono tracking-wider hover:bg-avant-white/90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                НАДІСЛАТИ
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 