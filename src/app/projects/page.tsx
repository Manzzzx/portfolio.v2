"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import OptimizedImage from "@/components/OptimizedImage";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const categories = [
    { id: "all", name: "Semua" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI/ML" },
  ];

  const projects = [
    {
      title: "Website Event ",
      description: "Website event dengan sistem pendaftaran dan manajemen peserta. Dilengkapi dengan dashboard admin dan integrasi pembayaran.",
      image: "/project1.jpg",
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
      category: "web",
      link: "#",
      featured: true
    },
    {
      title: "AI Image Generator",
      description: "Implementasi AI untuk menghasilkan gambar dari deskripsi teks menggunakan TensorFlow dan Python.",
      image: "/project2.jpg",
      tags: ["Python", "TensorFlow"],
      category: "ai",
      link: "#",
    },
    {
      title: "Personal Blog",
      description: "Blog pribadi untuk sharing artikel tentang teknologi dan pengalaman coding. Dibuat dengan Next.js dan MDX.",
      image: "/project3.jpg",
      tags: ["Next.js", "React", "Tailwind CSS"],
      category: "web",
      link: "#",
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-neu-white border-3 border-neu-black shadow-neu 
                       hover:shadow-neu-lg transition-all duration-200
                       ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="h-48 relative border-b-3 border-neu-black overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full"
                />
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
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 
                           bg-secondary text-neu-black font-bold border-3 border-neu-black 
                           shadow-neu hover:shadow-neu-lg transition-all duration-200"
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="https://github.com/Manzzzx"
            target="_blank"
            className="flex items-center justify-center gap-2 px-8 py-4 
                     bg-accent text-neu-black font-bold border-3 border-neu-black 
                     shadow-neu hover:shadow-neu-lg transition-all duration-200 mx-auto w-fit"
          >
            <FaGithub className="text-xl" />
            Lihat Project Lainnya di GitHub
          </Link>
        </motion.div>
      </div>
    </>
  );
}
