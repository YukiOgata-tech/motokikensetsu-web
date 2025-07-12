export const metadata = {
  title: 'アクセス | 株式会社本木建設',
  description: '株式会社本木建設へのアクセス方法を地図付きでご案内します。',
  keywords: 'アクセス, 地図, 山形県南陽市, 株式会社本木建設',
};

import AnimatedSection from '@/components/AnimatedSection';

export default function Access() {
  return (
    <AnimatedSection className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">アクセス</h1>
      <div className="w-full h-60">
        <iframe
          src="https://maps.google.com/maps?q=%E5%B1%B1%E5%BD%A2%E7%9C%8C%E5%8D%97%E9%99%BD%E5%B8%82&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </AnimatedSection>
  );
}
