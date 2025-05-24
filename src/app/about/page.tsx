'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h1 className="text-4xl font-bold mb-8 inline-block bg-primary px-4 border-3 border-neu-black shadow-neu">
          Tentang Saya
        </h1>
        <div className="bg-neu-white p-8 border-3 border-neu-black shadow-neu-lg">
          <p className="text-lg mb-6">
            Saya adalah mahasiswa yang memiliki passion dalam pengembangan web.
            Dengan kombinasi pembelajaran di kampus dan eksplorasi mandiri.
          </p>
            <p className="text-lg">
            Saya percaya bahwa pembelajaran tidak pernah berhenti dan selalu 
            berusaha memperluas wawasan di bidang teknologi.
            </p>
        </div>
      </motion.section>

      {/* Education Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 inline-block bg-accent px-4 border-3 border-neu-black shadow-neu">
          Pendidikan
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-neu-white p-8 border-3 border-neu-black shadow-neu-lg"
        >
          <h3 className="text-xl font-bold mb-2">Teknik Informatika</h3>
          <p className="text-gray-600 mb-4">Universitas Muhadi Setiabudi • 2023 - Sekarang</p>
          <p className="text-gray-700">
            Fokus pada pengembangan web dan mobile, dengan minat khusus dalam
            teknologi frontend modern.
          </p>
        </motion.div>
      </section>
    </div>
  )
} 