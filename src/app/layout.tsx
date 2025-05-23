import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nur Firmansyah Zamani | Web Developer & AI Enthusiast',
  description: 'Portfolio profesional Nur Firmansyah Zamani, seorang web developer dan AI enthusiast. Menampilkan project-project terbaik dalam pengembangan web dan machine learning.',
  keywords: 'web developer, AI, machine learning, portfolio, next.js, react, laravel, python',
  authors: [{ name: 'Nur Firmansyah Zamani' }],
  creator: 'Nur Firmansyah Zamani',
  publisher: 'Nur Firmansyah Zamani',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://your-portfolio-url.com',
    title: 'Nur Firmansyah Zamani | Web Developer & AI Enthusiast',
    description: 'Portfolio profesional Nur Firmansyah Zamani, seorang web developer dan AI enthusiast.',
    siteName: 'Nur Firmansyah Zamani Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nur Firmansyah Zamani Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nur Firmansyah Zamani | Web Developer & AI Enthusiast',
    description: 'Portfolio profesional Nur Firmansyah Zamani, seorang web developer dan AI enthusiast.',
    creator: '@yourtwitterhandle',
    images: ['/og-image.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-light min-h-screen`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
