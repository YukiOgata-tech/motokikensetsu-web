export const metadata = {
  title: '会社概要 | 株式会社本木建設',
  description: '株式会社本木建設の会社概要。所在地や許可番号などの基本情報を掲載しています。',
  keywords: '会社概要, 許可番号, 山形県南陽市, 株式会社本木建設',
};

const companyInfo = [
  { label: '会社名', value: '株式会社本木建設' },
  { label: '所在地', value: '山形県南陽市宮内' },
  { label: '許可番号', value: '山形県知事許可(般-00)第00000号' },
  { label: '資本金', value: '5,000万円' },
  { label: '従業員数', value: '20名' },
  {
    label: '業務内容',
    value: '建築工事業、土木工事業、リフォーム工事ほか',
  },
];

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">会社概要</h1>
      <table className="w-full border border-gray-300 text-left">
        <tbody>
          {companyInfo.map((item) => (
            <tr key={item.label} className="border-b border-gray-300">
              <th className="p-2 w-32 bg-gray-50">{item.label}</th>
              <td className="p-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
