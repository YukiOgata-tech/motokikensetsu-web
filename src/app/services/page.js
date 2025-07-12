export const metadata = {
  title: '主な対応工事 | 株式会社本木建設',
  description: '株式会社本木建設が提供する新築・増改築・リフォームなどの工事内容を紹介します。',
  keywords: '新築, 増改築, リフォーム, 山形県南陽市, 株式会社本木建設',
};

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  { title: '新築工事', desc: '住宅・店舗・倉庫などの新築工事' },
  { title: '増改築', desc: 'ライフスタイルに合わせた増改築工事' },
  { title: 'リフォーム', desc: '水回りや内装、外装のリフォーム工事' },
];

export default function Services() {
  return (
    <AnimatedSection className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">主な対応工事</h1>
      <div className="grid sm:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="border p-4 flex flex-col items-center hover:shadow-lg transition-shadow bg-white/70"
          >
            <div className="relative h-32 w-full mb-3">
              <Image
                src={`https://images.unsplash.com/collection/483251?sig=${i}&auto=format&fit=crop&w=400&q=80`}
                alt={s.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <h2 className="text-lg font-semibold mb-1">{s.title}</h2>
            <p className="text-sm text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
