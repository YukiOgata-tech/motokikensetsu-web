'use client';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function AuthButton() {
  const [user] = useAuthState(auth);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (user) {
    return (
      <button onClick={handleSignOut} className="text-sm underline">
        ログアウト
      </button>
    );
  }
  return (
    <button onClick={handleSignIn} className="text-sm underline">
      Googleでログイン
    </button>
  );
}
