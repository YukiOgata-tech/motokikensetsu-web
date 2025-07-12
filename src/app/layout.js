import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "株式会社本木建設 | 山形県南陽市の建設会社",
  description:
    "山形県南陽市宮内にある株式会社本木建設の公式サイト。新築・増改築・リフォームを中心に地域密着で対応します。",
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
