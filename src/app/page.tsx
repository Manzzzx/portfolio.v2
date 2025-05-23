'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaReact, FaLaravel, FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { SiMysql, SiPhp, SiPython, SiTensorflow } from 'react-icons/si'
import { HiDownload } from 'react-icons/hi'
import { BsRobot } from 'react-icons/bs'

export default function Home() {
  const skills = [
    { name: 'Laravel', icon: <FaLaravel className="text-4xl mb-2" /> },
    { name: 'Next.js', icon: <TbBrandNextjs className="text-4xl mb-2" /> },
    { name: 'React', icon: <FaReact className="text-4xl mb-2" /> },
    { name: 'TypeScript', icon: <BiLogoTypescript className="text-4xl mb-2" /> },
    { name: 'Tailwind', icon: <BiLogoTailwindCss className="text-4xl mb-2" /> },
    { name: 'PHP', icon: <SiPhp className="text-4xl mb-2" /> },
    { name: 'MySQL', icon: <SiMysql className="text-4xl mb-2" /> },
  ]

  const aiSkills = [
    { name: 'Python', icon: <SiPython className="text-4xl mb-2" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-4xl mb-2" /> },
    { name: 'AI/ML', icon: <BsRobot className="text-4xl mb-2" /> },
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-medium text-gray-600"
              >
              </motion.p>
              <h1 className="text-5xl md:text-6xl font-bold space-y-4">
                Halo! Saya
                <div className="mt-4">
                  <span className="bg-primary px-4 py-2 border-3 border-neu-black shadow-neu inline-block">
                    Nur Firmansyah Zamani
                  </span>
                </div>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 mt-4"
              >
                <span className="text-2xl md:text-3xl font-bold bg-accent px-3 py-1 border-3 border-neu-black shadow-neu">
                  Web Developer
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 max-w-2xl"
            >
              Saya seorang mahasiswa yang passionate dalam pengembangan web dan artificial intelligence.
              Fokus pada teknologi modern seperti Laravel dan Next.js untuk menciptakan solusi digital yang inovatif,
              serta mengeksplorasi penerapan AI dalam pengembangan web.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 px-8 py-4 bg-secondary text-neu-black font-bold 
                         border-3 border-neu-black shadow-neu hover:shadow-neu-lg 
                         transition-all duration-200"
              >
                <span>Lihat Projects</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-accent text-neu-black font-bold 
                         border-3 border-neu-black shadow-neu hover:shadow-neu-lg 
                         transition-all duration-200"
              >
                <span>Hubungi Saya</span>
              </Link>
              <a
                href="/cv.pdf"
                className="flex items-center gap-2 px-6 py-4 bg-neu-white text-neu-black font-bold 
                         border-3 border-neu-black shadow-neu hover:shadow-neu-lg 
                         transition-all duration-200"
              >
                <HiDownload className="text-xl" />
                <span>Download CV</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/Manzzzx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neu-white border-3 border-neu-black shadow-neu 
                         hover:shadow-neu-lg transition-all duration-200 group"
              >
                <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neu-white border-3 border-neu-black shadow-neu 
                         hover:shadow-neu-lg transition-all duration-200 group"
              >
                <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>

            {/* GitHub Contributions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-8"
            >
              <div className="border-3 border-neu-black shadow-neu hover:shadow-neu-lg transition-all duration-200 p-4 bg-neu-white">
                <h3 className="font-bold text-lg mb-4">GitHub Contributions</h3>
                <img
                  src={`https://ghchart.rshah.org/Manzzzx`}
                  alt="GitHub Contributions Graph"
                  className="w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-12 inline-block bg-light px-4 border-3 border-neu-black shadow-neu">
              Web Development
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-neu-white border-3 border-neu-black shadow-neu 
                           hover:shadow-neu-lg transition-all duration-200 text-center
                           flex flex-col items-center justify-center"
                >
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-12 inline-block bg-accent px-4 border-3 border-neu-black shadow-neu">
              AI & Machine Learning
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {aiSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-neu-white border-3 border-neu-black shadow-neu 
                           hover:shadow-neu-lg transition-all duration-200 text-center
                           flex flex-col items-center justify-center"
                >
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
