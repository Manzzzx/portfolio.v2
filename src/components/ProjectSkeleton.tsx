'use client';

import { motion } from 'framer-motion';

export default function ProjectSkeleton() {
  return (
    <div className="bg-neu-white border-3 border-neu-black shadow-neu">
      <div className="h-48 bg-light border-b-3 border-neu-black relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-light to-neu-white"
          animate={{
            x: ['0%', '100%', '0%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'linear',
          }}
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <motion.div
            className="h-6 bg-light rounded w-2/3"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="h-6 bg-light rounded w-1/4"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          />
        </div>

        <motion.div
          className="h-20 bg-light rounded mb-4"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.4,
          }}
        />

        <div className="flex flex-wrap gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-6 w-20 bg-light rounded"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
                delay: 0.1 * i,
              }}
            />
          ))}
        </div>

        <motion.div
          className="h-12 bg-light rounded w-full"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.6,
          }}
        />
      </div>
    </div>
  );
} 