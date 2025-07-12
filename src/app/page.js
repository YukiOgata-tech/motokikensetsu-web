import Image from 'next/image';
import Hero from '@/components/Hero';
import FadeInSection from '@/components/FadeInSection';

export const metadata = {
  title: '株式会社本木建設 | 山形県南陽市の建設会社',
  description:
    '山形県南陽市宮内に拠点を置く建設会社。新築、増改築、リフォームを中心に地域密着で施工します。',
  keywords:
    '山形県南陽市, 宮内, 建設会社, 株式会社本木建設, 新築, 増改築, リフォーム',
};

export default function Home() {
  return (
    <div className="text-center">
      <Hero />
      <FadeInSection className="my-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">社長の一言</h2>
        <p>
          地域に根ざした建設会社として、信頼と実績を積み重ねてまいりました。
          新築・増改築・リフォームなどお気軽にご相談ください。
        </p>
      </FadeInSection>
    </div>
  );
}
