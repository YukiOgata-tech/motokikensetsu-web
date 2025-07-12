'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'ホーム' },
  { href: '/about', label: '会社概要' },
  { href: '/services', label: '主な対応工事' },
  { href: '/works', label: '施工実績' },
  { href: '/contact', label: 'お問い合わせ' },
  { href: '/access', label: 'アクセス' },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white text-black wood-texture p-4 flex gap-6 justify-center sticky top-0 z-50 shadow">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`hover:text-red-600 transition-colors ${pathname === href ? 'text-red-600' : ''}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
