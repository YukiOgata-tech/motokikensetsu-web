'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
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

  const login = () => signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  const addWork = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'works'), form);
    setForm({ title: '', description: '' });
  };

  const removeWork = async (id) => {
    await deleteDoc(doc(db, 'works', id));
  };

  if (!user) {
    return (
      <main className="p-8 space-y-4">
        <h1 className="text-2xl">Admin Login</h1>
        <input
          className="border p-2"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={login}>Login</Button>
      </main>
    );
  }

  return (
    <main className="p-8 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Works Admin</h1>
        <Button onClick={logout}>Logout</Button>
      </div>
      <form onSubmit={addWork} className="space-y-2 max-w-md">
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
        <Button type="submit">追加</Button>
      </form>
      <ul className="space-y-2">
        {works.map((w) => (
          <li key={w.id} className="border p-2 flex justify-between">
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
