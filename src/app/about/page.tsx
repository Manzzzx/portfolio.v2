'use client'

import { motion } from 'framer-motion'

export default function About() {
  const activities = [
    {
      year: '2023',
      organization: 'Organisasi Kampus',
      role: 'Web Developer',
      description: 'Mengembangkan website organisasi menggunakan Laravel dan MySQL',
    },
    {
      year: '2022',
      organization: 'Freelance Project',
      role: 'Frontend Developer',
      description: 'Membuat landing page dan company profile menggunakan React dan Tailwind CSS',
    },
    {
      year: '2021',
      organization: 'Kepanitiaan Event Kampus',
      role: 'Web Developer',
      description: 'Membuat website event dan sistem pendaftaran peserta',
    },
  ]

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
            Dengan kombinasi pembelajaran di kampus dan eksplorasi mandiri,
            saya terus mengembangkan kemampuan dalam membuat aplikasi web yang
            modern dan fungsional.
          </p>
          <p className="text-lg">
            Di luar aktivitas coding, saya aktif dalam kegiatan kampus dan
            sering berpartisipasi dalam workshop teknologi. Saya juga senang
            berbagi pengetahuan dengan teman-teman sesama developer.
          </p>
        </div>
      </motion.section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 inline-block bg-secondary px-4 border-3 border-neu-black shadow-neu">
          Aktivitas & Project
        </h2>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neu-white p-6 border-3 border-neu-black shadow-neu 
                       hover:shadow-neu-lg transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{activity.role}</h3>
                  <p className="text-gray-600">{activity.organization}</p>
                </div>
                <span className="bg-accent px-3 py-1 border-3 border-neu-black shadow-neu">
                  {activity.year}
                </span>
              </div>
              <p className="text-gray-700">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

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
          <p className="text-gray-600 mb-4">Universitas Anda • 2021-Sekarang</p>
          <p className="text-gray-700">
            Fokus pada pengembangan web dan mobile, dengan minat khusus dalam
            teknologi frontend modern. Aktif dalam kegiatan kampus dan
            project-project pengembangan website.
          </p>
        </motion.div>
      </section>
    </div>
  )
} 