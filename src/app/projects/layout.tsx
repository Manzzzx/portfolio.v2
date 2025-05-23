import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Portfolio',
  description: 'Showcase of my web development and AI/ML projects, featuring work in Laravel, Next.js, React, and Python.',
  keywords: ['web development', 'AI/ML', 'projects', 'portfolio', 'Laravel', 'Next.js', 'React', 'Python'],
  openGraph: {
    title: 'Projects - Portfolio',
    description: 'Showcase of my web development and AI/ML projects.',
    images: [
      {
        url: '/projects-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Portfolio',
    description: 'Showcase of my web development and AI/ML projects.',
    images: ['/projects-og.jpg'],
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 