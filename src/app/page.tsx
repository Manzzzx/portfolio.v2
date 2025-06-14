'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaReact, FaLaravel, FaGithub, FaLinkedin, FaDocker, FaNode, FaVuejs, FaGitAlt } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandVite, } from 'react-icons/tb'
import { BiLogoTailwindCss, BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi'
import { SiMysql, SiPhp, SiExpress, SiVercel, SiPostman } from 'react-icons/si'
import { HiDownload } from 'react-icons/hi'

export default function Home() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: 'Next.js', icon: <TbBrandNextjs className="text-4xl mb-2 text-black" /> },
        { name: 'React', icon: <FaReact className="text-4xl mb-2 text-[#61DAFB]" /> },
        { name: 'Vue.js', icon: <FaVuejs className="text-4xl mb-2 text-[#4FC08D]" /> },
        { name: 'TypeScript', icon: <BiLogoTypescript className="text-4xl mb-2 text-[#3178C6]" /> },
        { name: 'Tailwind', icon: <BiLogoTailwindCss className="text-4xl mb-2 text-[#06B6D4]" /> },
        { name: 'Vite', icon: <TbBrandVite className="text-4xl mb-2 text-[#646CFF]" /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: 'Laravel', icon: <FaLaravel className="text-4xl mb-2 text-[#FF2D20]" /> },
        { name: 'Node.js', icon: <FaNode className="text-4xl mb-2 text-[#339933]" /> },
        { name: 'Express', icon: <SiExpress className="text-4xl mb-2 text-black" /> },
        { name: 'PHP', icon: <SiPhp className="text-4xl mb-2 text-[#777BB4]" /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-4xl mb-2 text-[#4479A1]" /> },
        { name: 'PostgreSQL', icon: <BiLogoPostgresql className="text-4xl mb-2 text-[#4169E1]" /> },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: 'Docker', icon: <FaDocker className="text-4xl mb-2 text-[#2496ED]" /> },
        { name: 'Vercel', icon: <SiVercel className="text-4xl mb-2 text-black" /> },
        { name: 'Git', icon: <FaGitAlt className="text-4xl mb-2 text-[#F05032]" /> },
      ]
    },
    {
      title: "Testing",
      skills: [
        { name: 'Postman', icon: <SiPostman className="text-4xl mb-2 text-[#FF6C37]" /> },
      ]
    },
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
                  Mie Ayam Enthusiast
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 max-w-2xl"
            >
              Saya seorang mahasiswa yang passionate dalam pengembangan web.
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
                href="https://linkedin.com/"
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
                <Image
                  src={`https://ghchart.rshah.org/Manzzzx`}
                  alt="GitHub Contributions Graph"
                  className="w-full"
                  width={800}
                  height={128}
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h2 className={`text-3xl font-bold mb-12 inline-block px-4 border-3 border-neu-black shadow-neu
                           ${categoryIndex % 2 === 0 ? 'bg-light' : 'bg-accent'}`}>
                {category.title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-neu-white border-3 border-neu-black shadow-neu 
                             hover:shadow-neu-lg transition-all duration-200 text-center
                             flex flex-col items-center justify-center group"
                  >
                    <div className="transform group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
