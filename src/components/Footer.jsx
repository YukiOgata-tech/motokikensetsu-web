import Link from "next/link";

const links = [
  { href: '/', label: 'ホーム' },
  { href: '/about', label: '会社概要' },
  { href: '/services', label: '主な対応工事' },
  { href: '/works', label: '施工実績' },
  { href: '/contact', label: 'お問い合わせ' },
  { href: '/access', label: 'アクセス' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <div className="mb-2 md:mb-0 text-center md:text-left flex-shrink-0">
          <span className="text-lg font-bold text-red-500">株式会社本木建設</span>
          <div className="text-xs mt-1 text-neutral-400">
            〒992-0472 山形県南陽市宮内2438-37 / TEL: 0238-47-5824
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm hover:text-red-400 transition whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="text-center text-xs text-neutral-500 mt-4">
        &copy; {new Date().getFullYear()} 株式会社本木建設. All Rights Reserved.
      </div>
    </footer>
  );
}
