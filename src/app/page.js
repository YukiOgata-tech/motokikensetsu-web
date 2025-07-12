import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: '株式会社本木建設 | 山形県南陽市の建設会社',
  description:
    '山形県南陽市宮内に拠点を置く建設会社。新築、増改築、リフォームを中心に地域密着で施工します。',
  keywords:
    '山形県南陽市, 宮内, 建設会社, 株式会社本木建設, 新築, 増改築, リフォーム',
};

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />

      <AnimatedSection className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">当社の強み</h2>
        <p>
          新築からリフォームまで幅広く対応し、地域に根ざした丁寧な施工を行っています。
        </p>
        <Link href="/services" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Read more
        </Link>
      </AnimatedSection>

      <AnimatedSection className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div className="relative h-56">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
            alt="message"
            fill
            className="object-cover rounded"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">社長メッセージ</h2>
          <p>
            地域の皆さまに信頼される建設会社を目指し、確かな技術と真心でお応えします。
          </p>
          <Link href="/about" className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Read more
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">施工実績</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {['wood','building','house'].map((img) => (
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
        <div className="text-center mt-4">
          <Link href="/works" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Read more
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">会社概要</h2>
        <p>山形県南陽市に本社を構え、地域密着で40年以上の実績を誇ります。</p>
        <Link href="/about" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Read more
        </Link>
      </AnimatedSection>
    </div>
  );
}
