import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata = {
  title: '株式会社本木建設 | 山形県南陽市の建設会社',
  description:
    '山形県南陽市宮内に拠点を置く建設会社。新築、増改築、リフォームを中心に地域密着で施工します。',
  keywords:
    '山形県南陽市, 宮内, 建設会社, 株式会社本木建設, 新築, 増改築, リフォーム',
}

export default function Home() {
  return (
    <div className="relative z-10 space-y-16 px-2 sm:px-0">
      <Hero />

      <AnimatedSection className="max-w-3xl mx-auto">
        <div className="bg-white/40 dark:bg-black/80 backdrop-blur rounded-2xl shadow-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">当社の強み</h2>
          <p>
            新築からリフォームまで幅広く対応し、地域に根ざした丁寧な施工を行っています。プロとして細部までこだわり抜く姿勢が信頼につながっています。
          </p>
          <div className="text-right">
            <Link
              href="/services"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              詳細を見る
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-5xl mx-auto">
        <div className="bg-white/50 dark:bg-black/80 backdrop-blur rounded-2xl shadow-xl grid md:grid-cols-2 gap-8 items-center p-6">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
              alt="message"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">社長メッセージ</h2>
            <p>
              地域の皆さまに信頼される建設会社を目指し、確かな技術と真心でお応えします。山形県南陽市宮内で40年以上、住まいの安心を支え続けてきました。
            </p>
            <div className="mt-4">
              <Link
                href="/about"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                会社概要
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-6xl mx-auto">
        <div className="bg-white/90 dark:bg-black/80 backdrop-blur rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">施工実績</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
                alt: "木造住宅"
              },
              {
                src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
                alt: "ビル工事"
              },
              {
                src: "https://images.unsplash.com/photo-1449247613801-ab06418e2861?auto=format&fit=crop&w=600&q=80",
                alt: "リフォーム"
              }
            ].map((item, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/works"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              もっと見る
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-3xl mx-auto">
        <div className="bg-white/90 dark:bg-black/80 backdrop-blur rounded-2xl shadow-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">会社概要</h2>
          <p>
            山形県南陽市に本社を構え、地域密着で40年以上の実績を誇ります。お客様一人ひとりの暮らしを大切にし、最適なご提案を行います。
          </p>
          <div className="text-right">
            <Link
              href="/about"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              詳細を見る
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
