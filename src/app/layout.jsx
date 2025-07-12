import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Motoki Kensetsu Co., Ltd. | 建設会社',
  description: '山形県南陽市の建設会社、モトキ建設株式会社の公式サイト。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
