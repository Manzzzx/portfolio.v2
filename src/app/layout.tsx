import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Nur Firmansyah Zamani',
  description: 'Personal portfolio showcasing web development and AI/ML projects by Nur Firmansyah Zamani',
  keywords: ['web development', 'AI/ML', 'portfolio', 'next.js', 'react', 'laravel'],
  authors: [{ name: 'Nur Firmansyah Zamani' }],
  creator: 'Nur Firmansyah Zamani',
  publisher: 'Nur Firmansyah Zamani',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Portfolio - Nur Firmansyah Zamani',
    description: 'Personal portfolio showcasing web development and AI/ML projects by Nur Firmansyah Zamani',
    siteName: 'Portfolio Nur Firmansyah Zamani',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Nur Firmansyah Zamani',
    description: 'Personal portfolio showcasing web development and AI/ML projects by Nur Firmansyah Zamani',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neu-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        <footer className="py-4 text-center">
          <p className="text-gray-600">Created By 💖</p>
        </footer>
      </body>
    </html>
  )
}
