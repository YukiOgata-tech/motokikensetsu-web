'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/button';

export default function Works() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="p-8 space-y-4">
      <h1 className="text-4xl font-serif text-primary mb-4">施工事例</h1>
      <p>過去の施工事例を掲載しています。</p>
      <Link href="/" className="block mt-8"><Button>ホームへ戻る</Button></Link>
    </motion.main>
  );
}
