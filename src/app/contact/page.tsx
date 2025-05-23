'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/Manzzzx',
      username: '@yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      url: 'https://linkedin.com/in/yourusername',
      username: '@yourusername',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-2xl" />,
      url: 'https://instagram.com/yourusername',
      username: '@yourusername',
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
                    your.email@example.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-bold">Lokasi:</span>
                  <span>Kota Anda, Indonesia</span>
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
              <label htmlFor="name" className="block font-bold mb-2">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-3 border-neu-black shadow-neu 
                         focus:shadow-neu-lg transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-3 border-neu-black shadow-neu 
                         focus:shadow-neu-lg transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-bold mb-2">
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-3 border-neu-black shadow-neu 
                         focus:shadow-neu-lg transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-bold mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border-3 border-neu-black shadow-neu 
                         focus:shadow-neu-lg transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-secondary text-neu-black font-bold 
                       border-3 border-neu-black shadow-neu hover:shadow-neu-lg 
                       transition-all duration-200"
            >
              Kirim Pesan
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  )
} 