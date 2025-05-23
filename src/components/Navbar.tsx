'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-neu-white border-b-3 border-neu-black">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <motion.span
              className="inline-block bg-primary px-4 py-2 border-3 border-neu-black shadow-neu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-bold border-3 border-neu-black transition-all duration-200
                          ${pathname === link.href
                            ? 'bg-accent shadow-neu'
                            : 'bg-neu-white hover:shadow-neu'
                          }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="block md:hidden p-2 border-3 border-neu-black bg-neu-white hover:shadow-neu transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-5 flex flex-col justify-between"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-full h-0.5 bg-neu-black block"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 10 : 0
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-neu-black block"
                animate={{
                  opacity: isOpen ? 0 : 1
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-neu-black block"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -10 : 0
                }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="block md:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-3">
                {links.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 font-bold border-3 border-neu-black transition-all duration-200
                                ${pathname === link.href
                                  ? 'bg-accent shadow-neu'
                                  : 'bg-neu-white hover:shadow-neu'
                                }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
} 