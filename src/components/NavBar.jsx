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
    <nav className="relative text-white p-4 flex gap-4 justify-center wood-texture">
      <div className="absolute inset-0 bg-black/80" />
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`relative z-10 hover:text-red-500 ${pathname === href ? 'text-red-500' : ''}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
