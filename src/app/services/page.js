export const metadata = {
  title: '主な対応工事 | 株式会社本木建設',
  description: '株式会社本木建設が提供する新築・増改築・リフォームなどの工事内容を紹介します。',
  keywords: '新築, 増改築, リフォーム, 山形県南陽市, 株式会社本木建設',
};

const services = [
  { title: '新築工事', desc: '住宅・店舗・倉庫などの新築工事' },
  { title: '増改築', desc: 'ライフスタイルに合わせた増改築工事' },
  { title: 'リフォーム', desc: '水回りや内装、外装のリフォーム工事' },
];

export default function Services() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">主な対応工事</h1>
      <ul className="space-y-4">
        {services.map((s) => (
          <li key={s.title} className="border p-4">
            <h2 className="text-xl font-bold">{s.title}</h2>
            <p>{s.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
