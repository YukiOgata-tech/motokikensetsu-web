'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          <span className="font-bold text-2xl sm:text-xl md:text-2xl text-red-700 whitespace-nowrap truncate">
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
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* オーバーレイ */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            {/* メニュー本体：いびつ＆波形 */}
            <motion.div
              ref={drawerRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.26, duration: 0.36 }}
              className="
                relative z-20 flex flex-col items-center justify-center
                px-6 py-10 w-[90vw] max-w-xs
                shadow-2xl border-2 border-red-400
                rounded-[2.7rem_2.4rem_3.1rem_2.2rem/3.0rem_2.0rem_2.7rem_2.5rem]
                bg-gradient-to-br from-white/95 via-white/80 to-red-50/90
                ring-2 ring-red-100 animate-wobble
              "
              style={{
    top: "60%",
    right: "3%",
    transform: "translate(-50%, -50%)",
    position: "fixed",
    padding: "3rem 2.5rem",
    minWidth: 320,
    minHeight: 360,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    boxShadow: '0 6px 36px 0 rgba(80,0,0,0.23), 0 2px 8px 0 rgba(120,0,0,0.15)',
  }}
            >
              {/* 波形/いびつなSVGデコ */}
              <svg
                width="100%"
                height="40"
                viewBox="0 0 280 40"
                fill="none"
                className="absolute left-0 top-0 w-full"
                style={{ zIndex: 10, pointerEvents: "none" }}
              >
                <path
                  d="M0 28 Q70 45 140 10 Q210 -15 280 28 V40 H0 Z"
                  fill="#fca5a5"
                  opacity="0.15"
                />
              </svg>

              {/* ヘッダー：メニュータイトル＆閉じる */}
              <div className="w-full flex items-center justify-between mb-4">
                <span className="font-semibold text-lg text-gray-800 tracking-wide pl-2">
                  メニュー
                </span>
                <button
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                  onClick={() => setOpen(false)}
                  aria-label="メニューを閉じる"
                >
                  <X className="h-7 w-7 text-red-700" />
                </button>
              </div>

              {/* メニュー項目リスト */}
              <nav className="flex flex-col items-center gap-6 mt-2 w-full">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      font-bold text-xl py-3 px-8 rounded-2xl shadow-sm
                      transition w-full text-center
                      ${pathname === href
                        ? 'bg-red-600 text-white'
                        : 'bg-white/70 text-red-800 hover:bg-red-100 hover:text-red-600'
                      }
                    `}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.div>
            {/* いびつアニメーション */}
            <style jsx>{`
              .animate-wobble {
                animation: wobble-menu 1.2s cubic-bezier(.65,-0.12,.25,1.08) 1;
              }
              @keyframes wobble-menu {
                0%   { transform: scale(0.75) rotate(-3deg);}
                16%  { transform: scale(1.04) rotate(2.5deg);}
                32%  { transform: scale(0.96) rotate(-2deg);}
                50%  { transform: scale(1.02) rotate(1.2deg);}
                65%  { transform: scale(0.99) rotate(-1deg);}
                80%  { transform: scale(1.01) rotate(0.3deg);}
                100% { transform: scale(1) rotate(0);}
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
