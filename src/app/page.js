import Image from 'next/image';

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
      <section className="relative h-60 sm:h-80 flex items-center justify-center wood-texture text-black">
        <h1 className="text-3xl sm:text-5xl font-bold text-red-700 drop-shadow">
          株式会社本木建設
        </h1>
        <Image
          src="/next.svg"
          alt="placeholder"
          width={0}
          height={0}
          className="hidden"
        />
      </section>
      <section className="my-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">社長の一言</h2>
        <p>
          地域に根ざした建設会社として、信頼と実績を積み重ねてまいりました。
          新築・増改築・リフォームなどお気軽にご相談ください。
        </p>
      </section>
    </div>
  );
}
