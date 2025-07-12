import Image from 'next/image';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: '株式会社本木建設 | 山形県南陽市の建設会社',
  description:
    '山形県南陽市宮内に拠点を置く建設会社。新築、増改築、リフォームを中心に地域密着で施工します。',
  keywords:
    '山形県南陽市, 宮内, 建設会社, 株式会社本木建設, 新築, 増改築, リフォーム',
};

function HomeContent() {
  'use client';
  const { motion } = require('framer-motion');
  return (
    <div className="text-center">
      <section className="relative h-72 sm:h-96 flex items-center justify-center wood-texture text-white">
        <div className="absolute inset-0 bg-black/40" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-4xl sm:text-6xl font-bold text-red-200 drop-shadow"
        >
          株式会社本木建設
        </motion.h1>
        <Image src="/next.svg" alt="placeholder" width={0} height={0} className="hidden" />
      </section>
      <section className="my-8 max-w-2xl mx-auto px-4 text-left">
        <h2 className="text-2xl font-semibold mb-4 text-red-700">社長の一言</h2>
        <p className="mb-4">
          当社は昭和45年の創業以来、南陽市宮内を拠点に地域密着の建築サービスを提供してまいりました。
          お客様一人ひとりの暮らしに寄り添い、安心して任せていただける品質を追求しております。
        </p>
        <p>
          新築はもちろん、増改築やリフォームなど建物に関することなら何でもご相談ください。
          これからも地元の皆さまと共に歩み続けてまいります。
        </p>
      </section>
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
