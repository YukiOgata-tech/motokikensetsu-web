'use client';
export const dynamic = 'force-dynamic';
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '@/lib/firebase';
import AuthButton from '@/components/AuthButton';

export default function AdminWorks() {
  const [user] = useAuthState(auth);
  const [works, setWorks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', date: '' });

  useEffect(() => {
    if (!user) return;
    (async () => {
      const snap = await getDocs(collection(db, 'works'));
      setWorks(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    })();
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'works'), form);
    setForm({ title: '', description: '', date: '' });
  };

  if (!user) {
    return (
      <div className="max-w-xl mx-auto text-center wood-texture">
        <p className="mb-4">管理者としてログインしてください。</p>
        <AuthButton />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto wood-texture p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">施工実績管理</h1>
        <AuthButton />
      </div>
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="タイトル"
          className="border p-2 w-full"
          required
        />
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="日付"
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="説明"
          className="border p-2 w-full h-24"
        />
        <button className="bg-black text-white py-1 px-4" type="submit">
          追加
        </button>
      </form>
      <ul className="space-y-2">
        {works.map((w) => (
          <li key={w.id} className="border p-2">
            <p className="font-bold">{w.title}</p>
            <p className="text-sm text-gray-600">{w.date}</p>
            <p>{w.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
