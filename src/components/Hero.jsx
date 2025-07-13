'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  "https://tekisei-research.com/images/contents/tcblog_27.jpg",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // 4秒ごとに画像切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt={`ヒーロー画像${index + 1}`}
            fill
            className="object-cover opacity-80 transition duration-700"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-xl tracking-wide"
        >
          株式会社本木建設
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-base xs:text-lg sm:text-2xl font-medium text-white/90 drop-shadow-md leading-relaxed"
        >
          地域とともに、未来を築く。<br className="hidden sm:inline" />
          新築・リフォーム・増改築―<span className="font-semibold">南陽市で40年の信頼</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <Link
            href="/works"
            className="px-6 py-3 rounded-xl bg-white/90 text-red-700 font-bold shadow-lg transition hover:bg-red-600 hover:text-white text-base sm:text-lg tracking-wider w-full sm:w-auto"
          >
            施工実績を見る
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-red-700 text-white font-bold shadow-lg transition hover:bg-white/90 hover:text-red-700 text-base sm:text-lg tracking-wider w-full sm:w-auto"
          >
            お問い合わせ
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
