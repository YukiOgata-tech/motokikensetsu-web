export const metadata = {
  title: '主な対応工事・会社案内 | 株式会社本木建設',
  description: '山形県南陽市宮内の建設会社。本木建設が提供する主な工事内容と会社情報をご案内します。',
  keywords: '新築, 増築, 改築, リフォーム, 耐震補強, 大工工事, 山形県南陽市, 株式会社本木建設',
};

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { Phone, MapPin, Train } from 'lucide-react';

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 px-2 sm:px-4">
      {/* 会社案内 */}
      <AnimatedSection className="bg-white/80 rounded-2xl shadow-lg p-6 sm:p-10 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-red-700">株式会社本木建設について</h1>
        <p className="text-base sm:text-lg mb-4 text-center">
          本木建設は山形県南陽市宮内に拠点を置く建設会社で、<br className="hidden sm:inline" />
          住宅建設から耐震補強、大工工事まで幅広く対応しています。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mt-6 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <MapPin className="text-red-700" size={20} />
            <span>〒992-0472 山形県南陽市宮内2438-37</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-red-700" size={20} />
            <span>0238-47-5824</span>
          </div>
          <div className="flex items-center gap-2">
            <Train className="text-red-700" size={20} />
            <span>最寄り駅：宮内駅（徒歩約796メートル）</span>
          </div>
        </div>
      </AnimatedSection>

      {/* 事業内容・対応工事 */}
      <AnimatedSection className="bg-white/70 rounded-2xl shadow p-6 sm:p-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-red-700 text-center">事業内容と対応工事</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-4">
              <li>
                <span className="font-bold text-base sm:text-lg text-red-700">新築工事</span>
                <div className="text-sm sm:text-base">
                  一戸建て住宅の新築。居住性・デザイン性・耐震性に配慮した丁寧な施工。
                </div>
              </li>
              <li>
                <span className="font-bold text-base sm:text-lg text-red-700">増築工事</span>
                <div className="text-sm sm:text-base">
                  建物を壊さずに床面積を増やすコスト効率の高い工事。
                </div>
              </li>
              <li>
                <span className="font-bold text-base sm:text-lg text-red-700">改築工事</span>
                <div className="text-sm sm:text-base">
                  間取り変更や火災滅失時の再建など、建物全体の改修に対応。
                </div>
              </li>
              <li>
                <span className="font-bold text-base sm:text-lg text-red-700">減築工事</span>
                <div className="text-sm sm:text-base">
                  生活スタイルに合わせて床面積を縮小するリフォーム。
                </div>
              </li>
              <li>
                <span className="font-bold text-base sm:text-lg text-red-700">耐震補強工事</span>
                <div className="text-sm sm:text-base">
                  国・自治体の補助金対象。住宅の耐震性能を向上させる重要な工事。
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 text-red-700 text-base sm:text-lg">その他専門工事・特徴</div>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>大工工事、造作工事全般</li>
              <li>木造建築物の柱・梁の補強工事</li>
              <li>コンクリート基礎・躯体の型枠工事</li>
              <li>木造軸組工法、ツーバイフォー工法での住宅施工</li>
              <li>木造住宅のリフォーム・耐久性メンテナンス</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
