import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Nur Firmansyah Zamani',
  description: 'Personal portfolio showcasing web development and AI/ML projects',
  keywords: ['web development', 'AI/ML', 'portfolio', 'next.js', 'react', 'laravel'],
  authors: [{ name: 'Nur Firmansyah Zamani' }],
  creator: 'Nur Firmansyah Zamani',
  publisher: 'Nur Firmansyah Zamani',
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neu-white`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
