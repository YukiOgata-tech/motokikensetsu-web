'use client';
import Link from 'next/link';
import Button from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-4 py-3">
      <Link href="/" className="text-lg font-semibold text-primary">Motoki Kensetsu</Link>
      <Link href="/admin">
        <Button className="h-8 px-3 text-sm">管理画面</Button>
      </Link>
    </header>
  );
}
