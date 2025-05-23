'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function OptimizedImage({ src, alt, className = '' }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 bg-light"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
    </div>
  );
} 