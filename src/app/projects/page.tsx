"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI/ML" },
  ];

  const projects = [
    {
      title: "Website Event Kampus",
      description: "Website event kampus dengan sistem pendaftaran dan manajemen peserta. Dilengkapi dengan dashboard admin dan integrasi pembayaran.",
      image: "/project1.jpg",
      tags: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
      category: "web",
      link: "https://github.com/Manzzzx/event-kampus",
      demo: "https://event-demo.com",
      featured: true
    },
    {
      title: "AI Image Generator",
      description: "Implementasi AI untuk menghasilkan gambar dari deskripsi teks menggunakan TensorFlow dan Python.",
      image: "/project2.jpg",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "ai",
      link: "https://github.com/Manzzzx/ai-image-gen",
    },
    {
      title: "Personal Blog",
      description: "Blog pribadi untuk sharing artikel tentang teknologi dan pengalaman coding. Dibuat dengan Next.js dan MDX.",
      image: "/project3.jpg",
      tags: ["Next.js", "React", "MDX", "Tailwind CSS"],
      category: "web",
      link: "https://github.com/Manzzzx/blog",
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold inline-block bg-primary px-4 border-3 border-neu-black shadow-neu"
        >
          Project Saya
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 border-3 border-neu-black font-bold transition-all duration-200
                        ${activeCategory === category.id 
                          ? 'bg-accent shadow-neu-lg' 
                          : 'bg-neu-white shadow-neu hover:shadow-neu-lg'}`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-neu-white border-3 border-neu-black shadow-neu 
                     hover:shadow-neu-lg transition-all duration-200
                     ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="h-48 bg-[#FFF8E7] border-b-3 border-neu-black relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/20 to-transparent">
                <span className="text-4xl">💻</span>
              </div>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-accent border-2 border-neu-black
                           opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.featured && (
                  <span className="px-2 py-1 bg-accent text-sm border-2 border-neu-black">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-light px-3 py-1 text-sm border-2 border-neu-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-secondary 
                         text-neu-black font-bold border-3 border-neu-black shadow-neu 
                         hover:shadow-neu-lg transition-all duration-200"
              >
                <FaGithub className="text-xl" />
                Lihat Project
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <Link
          href="https://github.com/Manzzzx"
          target="_blank"
          className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-neu-black font-bold 
                   border-3 border-neu-black shadow-neu hover:shadow-neu-lg 
                   transition-all duration-200 mx-auto w-fit"
        >
          <FaGithub className="text-xl" />
          Lihat Project Lainnya di GitHub
        </Link>
      </motion.div>
    </div>
  );
}
