export const dynamic = 'force-dynamic';
export const metadata = {
  title: '主な対応工事 | 株式会社本木建設',
  description: '株式会社本木建設が提供する新築・増改築・リフォームなどの工事内容を紹介します。',
  keywords: '新築, 増改築, リフォーム, 山形県南陽市, 株式会社本木建設',
};

const services = [
  {
    title: '新築工事',
    desc: '戸建住宅から店舗・倉庫まで、ご要望に合わせたプランをご提案します。',
  },
  {
    title: '増改築',
    desc: 'ライフスタイルの変化に合わせた間取り変更や増築を行います。',
  },
  {
    title: 'リフォーム',
    desc: '水回りや内装、外装など住まいの不便を解消するリフォーム工事。',
  },
];


function ServicesContent() {
  'use client';
  const { motion } = require('framer-motion');
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">主な対応工事</h1>
      <ul className="space-y-4">
        {services.map((s, i) => (
          <motion.li
            key={s.title}
            className="border p-4 bg-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h2 className="text-xl font-bold text-red-700 mb-1">{s.title}</h2>
            <p>{s.desc}</p>
          </motion.li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed">
        お住まいや店舗の工事に関するご要望は、お気軽にご相談ください。現地調査から
        施工、アフターサービスまで一貫してサポートいたします。
      </p>
    </div>
  );
}

export default function Services() {
  return <ServicesContent />;
}
