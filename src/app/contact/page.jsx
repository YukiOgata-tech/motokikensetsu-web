'use client';
export const dynamic = 'force-dynamic';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { db } from '@/lib/firebase';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'contacts'), {
      name,
      message,
      created: Date.now(),
    });
    setName('');
    setMessage('');
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="p-8 space-y-4">
      <h1 className="text-4xl font-serif text-primary mb-4">お問い合わせ</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="お名前" className="w-full p-2 border" required />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="お問い合わせ内容" className="w-full p-2 border" required />
        <Button type="submit">送信</Button>
      </form>
      <Link href="/" className="block mt-8"><Button>ホームへ戻る</Button></Link>
    </motion.main>
  );
}
