import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: '施工実績 | 株式会社本木建設',
  description: 'これまでに手掛けた施工実績を写真付きでご紹介します。',
  keywords: '施工実績, 建設工事, 山形県南陽市, 株式会社本木建設',
};

const images = [
  'photo-1503387762-592deb58ef4e',
  'photo-1523413651479-597eb2da0ad6',
  'photo-1501594907352-04cda38ebc29',
  'photo-1458682625221-3a45f8a4b236',
];

export default function Works() {
  return (
    <AnimatedSection className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">施工実績</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img} className="relative h-40">
            <Image
              src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=600&q=80`}
              alt="work"
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
