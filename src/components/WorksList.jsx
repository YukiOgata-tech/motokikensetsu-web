'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function WorksList() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const snap = await getDocs(collection(db, 'works'));
        setWorks(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (e) {
        console.error(e);
      }
    }
    fetchWorks();
  }, []);

  if (works.length === 0) {
    return <p>施工実績がありません。</p>;
  }

  return (
    <ul className="grid sm:grid-cols-2 gap-4">
      {works.map((work, i) => (
        <motion.li
          key={work.id}
          className="border p-4 wood-texture relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="absolute inset-0 bg-white/60" />
          <img
            src={work.image || 'https://via.placeholder.com/600x400'}
            alt={work.title}
            className="mb-2 w-full h-40 object-cover relative z-10"
          />
          <h3 className="font-bold text-lg relative z-10">{work.title}</h3>
          <p className="text-sm text-gray-600 relative z-10">{work.date}</p>
          <p className="relative z-10">{work.description}</p>
        </motion.li>
      ))}
    </ul>
  );
}
