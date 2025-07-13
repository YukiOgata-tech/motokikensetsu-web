import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "@fontsource/noto-serif-jp/400.css";
import "@fontsource/noto-serif-jp/700.css";

import Background3DLayout from "./Background3DLayout";




export const metadata = {
  title: "株式会社本木建設 | 山形県南陽市の建設会社",
  description:
    "山形県南陽市に拠点を置く株式会社本木建設の公式サイト。Yamagata・Nanyo エリアで新築、増改築、リフォーム工事を行っています。",
  keywords: "山形, 有名, 建築, 本木建設, 株式会社, 株式会社本木建設, 南陽市, 南陽",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Background3DLayout>
          {children}
        </Background3DLayout>
      </body>
    </html>
  );
}
