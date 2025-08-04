import React from 'react'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'KIMERA MAGAZINE - Avant-Garde Fashion Magazine',
  description: 'Біануальний делюкс арт-журнал. Серед мрій, кошмарів, політики та всього, що між ними, знаходиться краса.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={`${jetbrainsMono.variable} font-mono`}>
        {children}
      </body>
    </html>
  )
} 