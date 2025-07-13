import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: '施工実績 | 株式会社本木建設',
  description: 'これまでに手掛けた施工実績を写真付きでご紹介します。',
  keywords: '施工実績, 建設工事, 山形県南陽市, 株式会社本木建設',
};

// 画像ID＋施工名サンプル
const works = [
  {
    src: 'photo-1503387762-592deb58ef4e',
    title: '住宅新築工事（南陽市）',
    desc: 'デザイン性と断熱性を両立した木造住宅。'
  },
  {
    src: 'photo-1523413651479-597eb2da0ad6',
    title: '店舗リノベーション',
    desc: '既存建物の空間を活かしたリニューアル事例。'
  },
  {
    src: 'photo-1501594907352-04cda38ebc29',
    title: '耐震補強工事',
    desc: '地域の安心を支える耐震リフォーム。'
  },
  {
    src: 'photo-1458682625221-3a45f8a4b236',
    title: '増築工事（住宅）',
    desc: '家族の成長に合わせた快適な増築。'
  },
];

// Tailwindで完全レスポンシブ&美しいホバー演出
export default function Works() {
  return (
    <AnimatedSection className="max-w-6xl mx-auto px-2 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center text-red-700 tracking-wide">施工実績</h1>
      <p className="text-center text-gray-700 mb-10 text-base sm:text-lg">
        これまでに手掛けた施工事例の一部をご紹介します。<br className="hidden sm:inline" />
        お客様のご要望・敷地条件・時代の変化に合わせた柔軟な提案・丁寧な施工を心がけています。
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {works.map((work, i) => (
          <div
            key={work.src}
            className="group relative rounded-xl overflow-hidden shadow hover:shadow-xl transition-all bg-white/80"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={`https://images.unsplash.com/${work.src}?auto=format&fit=crop&w=600&q=80`}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={i === 0}
              />
              {/* 半透明ホバーオーバーレイ */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            </div>
            <div className="p-4 text-center flex flex-col gap-2">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{work.title}</h2>
              <p className="text-xs sm:text-sm text-gray-600">{work.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
