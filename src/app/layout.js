import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "@fontsource/noto-serif-jp/400.css";
import "@fontsource/noto-serif-jp/700.css";

export const metadata = {
  title: "株式会社本木建設 | 山形県南陽市の建設会社",
  description:
    "山形県南陽市に拠点を置く株式会社本木建設の公式サイト。Yamagata・Nanyo エリアで新築、増改築、リフォーム工事を行っています。",
  keywords: "Yamagata, Nanyo, Motoki Kensetsu Co., Ltd., 株式会社本木建設",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased wood-texture">
        <NavBar />
        <main className="min-h-screen px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
