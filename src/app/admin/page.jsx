'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'sonner';
import Button from '@/components/ui/button';
import { db, auth } from '@/lib/firebase';


export default function Admin() {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [works, setWorks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });

  useEffect(() => {
    if (!user) return;
    const unsub = onSnapshot(collection(db, 'works'), (snap) => {
      setWorks(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, [user]);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('ログインしました');
    } catch (err) {
      toast.error('ログインに失敗しました');
    }
  };
  const logout = async () => {
    await signOut(auth);
    toast.success('ログアウトしました');
  };

  const addWork = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'works'), form);
      toast.success('追加しました');
      setForm({ title: '', description: '' });
    } catch {
      toast.error('追加に失敗しました');
    }
  };

  const removeWork = async (id) => {
    await deleteDoc(doc(db, 'works', id));
    toast.success('削除しました');
  };

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center p-4 space-y-4">
        <h1 className="text-2xl font-serif text-primary">Admin Login</h1>
        <div className="space-y-2 w-full max-w-xs">
          <input
            className="border p-2 w-full"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border p-2 w-full"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full" onClick={login}>Login</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-serif text-primary">Works Admin</h1>
        <Button onClick={logout}>Logout</Button>
      </div>
      <form onSubmit={addWork} className="space-y-2">
        <input
          className="border p-2 w-full"
          placeholder="タイトル"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className="border p-2 w-full"
          placeholder="説明"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <Button type="submit" className="w-full sm:w-auto">追加</Button>
      </form>
      <ul className="space-y-2">
        {works.map((w) => (
          <li key={w.id} className="border p-2 flex justify-between items-start">
            <div>
              <p className="font-semibold">{w.title}</p>
              <p className="text-sm text-gray-600">{w.description}</p>
            </div>
            <Button className="ml-2" onClick={() => removeWork(w.id)}>
              削除
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
}
