'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
  {
    title: "ВІЗУАЛЬНЕ МИСТЕЦТВО",
    description: "Ексклюзивні фотосесії від найкращих фотографів світу. Кожен кадр - це історія, кожен образ - це заява."
  },
  {
    title: "ФОТОГРАФІЯ",
    description: "Досліджуємо межі сучасної фотографії. Від документального стилю до авангардних експериментів."
  },
  {
    title: "ЕМОЦІЇ",
    description: "Кожна сторінка викликає емоції. Ми не просто показуємо моду - ми розповідаємо історії."
  },
  {
    title: "ПЕРСПЕКТИВА",
    description: "Новий погляд на старе. Ми змінюємо перспективу і відкриваємо нові горизонти."
  },
  {
    title: "ІННОВАЦІЇ",
    description: "Експериментуємо з форматами, матеріалами та технологіями. Майбутнє моди створюється сьогодні."
  },
  {
    title: "ФІЛОСОФІЯ",
    description: "Мода - це не просто одяг. Це спосіб життя, філософія, яка відображає дух часу."
  }
]

export default function IssueDescription() {
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
      className="relative min-h-screen bg-white text-avant-black py-20 overflow-hidden"
    >
      {/* Хаотична сітка фону */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-avant-black"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-32"
          style={{ y, opacity }}
        >
          <motion.h2 
            className="text-8xl md:text-9xl font-black tracking-tight mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(0,0,0,0.3)"
            }}
          >
            ЩО ВИ ЗНАЙДЕТЕ
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: index % 2 === 0 ? 5 : -5
              }}
              style={{
                gridRow: `span ${index % 3 === 0 ? 2 : 1}`,
                marginTop: index % 2 === 1 ? '4rem' : '0'
              }}
            >
              {/* Анімований фоновий елемент */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-avant-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  transform: `skew(${index % 2 === 0 ? 15 : -15}deg)`,
                }}
              />

              {/* Заголовок */}
              <motion.h3 
                className="text-4xl md:text-5xl font-black tracking-tight mb-6 relative z-10"
                whileHover={{ 
                  x: 20,
                  textShadow: "0 0 20px rgba(0,0,0,0.2)"
                }}
                animate={{
                  textShadow: [
                    "0 0 0px rgba(0,0,0,0)",
                    "0 0 20px rgba(0,0,0,0.1)",
                    "0 0 0px rgba(0,0,0,0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                {feature.title}
              </motion.h3>

              {/* Опис */}
              <motion.p 
                className="text-lg md:text-xl text-avant-black/60 leading-relaxed relative z-10"
                whileHover={{ 
                  x: 20,
                  color: "rgba(0,0,0,0.8)"
                }}
                transition={{ duration: 0.3 }}
              >
                {feature.description}
              </motion.p>

              {/* Анімований розділювач */}
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-avant-black/40 to-transparent mt-8"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.1 + 0.5,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  height: "2px",
                  background: "linear-gradient(to right, transparent, rgba(0,0,0,0.8), transparent)"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Додаткова секція */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-5xl md:text-6xl font-black tracking-tight mb-8"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(0,0,0,0.3)"
            }}
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ПРИЄДНУЙТЕСЬ ДО ПОДОРОЖІ
          </motion.h3>
          <motion.p 
            className="text-xl text-avant-black/60 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ 
              scale: 1.02,
              color: "rgba(0,0,0,0.8)"
            }}
            transition={{ duration: 0.3 }}
          >
            Кожен випуск - це унікальна подорож у світ моди та мистецтва. 
            Відкрийте для себе нові горизонти разом з KIMERA MAGAZINE.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 