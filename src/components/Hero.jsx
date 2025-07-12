'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-60 sm:h-80 flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200 wood-texture text-black overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl font-bold text-red-700 drop-shadow"
      >
        株式会社本木建設
      </motion.h1>
      <Image src="/next.svg" alt="placeholder" width={0} height={0} className="hidden" />
    </section>
  );
}
