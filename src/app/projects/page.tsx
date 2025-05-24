"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaTools } from "react-icons/fa";

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold inline-block bg-primary px-4 border-3 border-neu-black shadow-neu mb-12"
        >
          Project Saya
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-neu-white border-3 border-neu-black shadow-neu p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <FaTools className="text-6xl mx-auto mb-6 text-gray-600" />
            <h2 className="text-3xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-700 mb-8">
              Saat ini project-project saya sedang dalam tahap pengembangan.
            </p>
            <Link
              href="https://github.com/Manzzzx"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 
                       bg-secondary text-neu-black font-bold border-3 border-neu-black 
                       shadow-neu hover:shadow-neu-lg transition-all duration-200"
            >
              <FaGithub className="text-xl" />
              Kunjungi GitHub
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
