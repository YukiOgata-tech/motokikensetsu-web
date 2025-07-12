'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/button';

export default function Access() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="p-8 space-y-4">
      <h1 className="text-4xl font-serif text-primary mb-4">アクセス</h1>
      <p>所在地: 山形県南陽市</p>
      <div className="w-full h-64 bg-gray-200" aria-label="map placeholder" />
      <Link href="/" className="block mt-8"><Button>ホームへ戻る</Button></Link>
    </motion.main>
  );
}
