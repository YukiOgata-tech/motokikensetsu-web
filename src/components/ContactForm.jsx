'use client';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus('送信しました。ありがとうございました。');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('送信に失敗しました');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">お名前</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block mb-1">メールアドレス</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block mb-1">お問い合わせ内容</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="border p-2 w-full h-32"
        />
      </div>
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        送信
      </button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
