export const metadata = {
  title: 'アクセス | 株式会社本木建設',
  description: '株式会社本木建設へのアクセス方法を地図付きでご案内します。',
  keywords: 'アクセス, 地図, 山形県南陽市, 株式会社本木建設',
};

import AnimatedSection from '@/components/AnimatedSection';
import { MapPin, Phone, Train } from 'lucide-react';
import Link from 'next/link';

export default function Access() {
  return (
    <AnimatedSection className="max-w-2xl mx-auto px-2 sm:px-4 py-8 space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-red-700">アクセス</h1>
      <p className="text-center text-gray-700 text-base sm:text-lg mb-2">
        株式会社本木建設へのアクセス方法・所在地をご案内します。
      </p>
      {/* 情報カード */}
      <div className="rounded-2xl shadow bg-white/80 p-5 sm:p-7 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-gray-800 text-base">
          <MapPin className="text-red-700" size={20} />
          <span>
            〒992-0472　山形県南陽市宮内2438-37
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-800 text-base">
          <Phone className="text-red-700" size={20} />
          <span>
            0238-47-5824
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-800 text-base">
          <Train className="text-red-700" size={20} />
          <span>
            最寄り駅：宮内駅（徒歩約796メートル）
          </span>
        </div>
      </div>
      {/* Googleマップ（ピンポイント設定） */}
      <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.7867742175823!2d140.1409147!3d38.073694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a5518f6c6a583:0xc1e35be66c5e3192!2z44CSOTkyLTA0NzIg5bGx5Y-j55yM5bGx5Y-j5biC5riv5a-M6LC35YyX77yR5LiB55uu77yS4oiS77yT!5e0!3m2!1sja!2sjp!4v1720812345678!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="株式会社本木建設 アクセスマップ"
        ></iframe>
      </div>
      {/* お問い合わせ遷移ボタン */}
      <div className="text-center mt-4">
        <Link
          href="/contact"
          className="inline-block px-7 py-3 rounded-xl bg-red-700 text-white font-bold shadow-lg transition hover:bg-white hover:text-red-700 border-2 border-red-700 text-base sm:text-lg"
        >
          お問い合わせはこちら
        </Link>
      </div>
    </AnimatedSection>
  );
}

