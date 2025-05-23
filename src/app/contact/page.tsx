'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub,  FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate sending message
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/Manzzzx',
      username: '@manzzzx',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-2xl" />,
      url: 'https://instagram.com/',
      username: '@manzzzx',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 inline-block bg-primary px-4 border-3 border-neu-black shadow-neu">
          Hubungi Saya
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-neu-white p-6 border-3 border-neu-black shadow-neu">
              <h2 className="text-2xl font-bold mb-4">Kontak</h2>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="font-bold">Email:</span>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-primary hover:underline"
                  >
                    manzzzx@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-neu-white p-6 border-3 border-neu-black shadow-neu">
              <h2 className="text-2xl font-bold mb-4">Media Sosial</h2>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors group"
                  >
                    <span className="bg-accent p-2 border-2 border-neu-black group-hover:shadow-neu transition-all">
                      {social.icon}
                    </span>
                    <div>
                      <p className="font-bold">{social.name}</p>
                      <p className="text-sm text-gray-600">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-neu-white p-8 border-3 border-neu-black shadow-neu-lg space-y-6"
          >
            <div>
              <label className="block font-bold mb-2" htmlFor="name">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border-3 border-neu-black bg-neu-white focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border-3 border-neu-black bg-neu-white focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border-3 border-neu-black bg-neu-white focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block font-bold mb-2" htmlFor="message">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border-3 border-neu-black bg-neu-white focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isSubmitting}
              />
            </div>

            <motion.button
              type="submit"
              className={`w-full px-8 py-4 font-bold border-3 border-neu-black 
                       ${isSubmitting ? 'bg-gray-200' : 'bg-accent'} 
                       shadow-neu hover:shadow-neu-lg transition-all duration-200`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    className="w-5 h-5 border-3 border-neu-black border-t-transparent rounded-full inline-block"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  />
                  <span className="ml-2">Mengirim...</span>
                </span>
              ) : (
                'Kirim Pesan'
              )}
            </motion.button>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-green-100 border-3 border-green-500 text-green-700"
              >
                Pesan berhasil dikirim!.
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </div>
  )
} 