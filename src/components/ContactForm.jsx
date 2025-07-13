'use client';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus('送信しました。ありがとうございました。');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('送信に失敗しました。');
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto px-2 py-6 sm:px-8 sm:py-10 rounded-2xl shadow-lg bg-white/90">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">
              お名前
            </label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="山田 太郎"
              className="text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="email">
              メールアドレス
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="message">
              お問い合わせ内容
            </label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="お問い合わせ内容を入力してください。"
              className="text-base"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white font-bold rounded-xl"
            size="lg"
          >
            送信
          </Button>
          {status && (
            <div className="text-center mt-2 text-sm text-green-700 font-semibold">
              {status}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
