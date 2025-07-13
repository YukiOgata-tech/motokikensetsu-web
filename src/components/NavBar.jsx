'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';



// ナビゲーションリンクリスト
const links = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社概要" },
  { href: "/services", label: "サービス" },
  { href: "/works", label: "施工実績" },
  { href: "/access", label: "アクセス" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  // ESCで閉じる
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // メニューを開いたときスクロール禁止
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // オーバーレイorドロワークリック外で閉じる
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 shadow"
      style={{
        backgroundImage: "url('/images/wood-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)"
      }}
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <span className="font-bold text-base sm:text-xl md:text-2xl text-red-700 whitespace-nowrap truncate">
            株式会社本木建設
          </span>
        </Link>
        {/* PC用メニュー */}
        <nav className="hidden lg:flex gap-2 sm:gap-6 items-center flex-wrap">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium hover:text-red-700 px-2 transition-colors break-keep ${pathname === href ? 'text-red-700 underline underline-offset-4' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        {/* モバイルメニュー */}
        <div className="lg:hidden">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="メニューを開く"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* --- モバイルDrawer本体 --- */}
{open && (
  <div
    className="fixed inset-0 z-[100] flex"
    aria-modal="true"
    role="dialog"
  >
    {/* オーバーレイ */}
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in"
      onClick={() => setOpen(false)}
      aria-hidden="true"
    />
    {/* ドロワー（背景画像＋白の半透明レイヤー） */}
    <aside
  ref={drawerRef}
  tabIndex={-1}
  className={`
    relative flex flex-col items-center
    w-[90vw] max-w-xs h-full shadow-2xl
    bg-cover bg-center px-0 pt-0 pb-6 animate-slide-in-left
  `}
  style={{
    backgroundImage: `url('/images/wood-bg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* 半透明ホワイトレイヤー（全体） */}
  <div className="absolute inset-0 bg-red-400/100 backdrop-blur-lg pointer-events-none" />
  
  {/* ヘッダー：メニュータイトル＆閉じる */}
  <div className="relative z-20 w-full flex items-center justify-between px-4 py-3 bg-white/95 shadow rounded-t-lg border-b border-b-gray-200">
    <span className="font-semibold text-base text-gray-800 tracking-wide">メニュー</span>
    <button
      className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
      onClick={() => setOpen(false)}
      aria-label="メニューを閉じる"
    >
      <X className="h-6 w-6 text-gray-700" />
    </button>
  </div>

  {/* メニュー項目リスト */}
  <nav className="relative z-10 flex flex-col gap-6 w-full items-center mt-6 top-6">
    {links.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={`
          font-semibold text-lg px-2 py-2 rounded-lg transition
          w-[90%] text-center shadow
          ${pathname === href
            ? 'text-white bg-red-700'
            : 'text-gray-900 bg-white/80 hover:text-red-700 hover:bg-red-100'
          }
        `}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    ))}
  </nav>
</aside>

  </div>
)}


      {/* --- アニメーション --- */}
      <style jsx global>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.22s cubic-bezier(.24,.67,.5,1.01);
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.15s cubic-bezier(.24,.67,.5,1.01);
        }
      `}</style>
    </header>
  );
}
