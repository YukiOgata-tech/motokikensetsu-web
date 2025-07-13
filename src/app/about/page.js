export const metadata = {
  title: '会社概要 | 株式会社本木建設',
  description: '株式会社本木建設の会社概要。所在地や許可番号などの基本情報を掲載しています。',
  keywords: '会社概要, 許可番号, 山形県南陽市, 株式会社本木建設',
};

import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Image from "next/image";

const ceoMessage = `
　南陽市宮内という地で、地域の皆様と共に歩んで四十年余り。株式会社本木建設は「家族の安心と、次世代へ繋ぐ街づくり」を理念に掲げ、一つひとつの現場に心を込めて取り組んで参りました。<br/>
　新築やリフォーム、大工工事まで幅広い施工を手がけておりますが、全ての出発点は「お客様の笑顔」と「地元宮内への感謝の気持ち」です。私たちがつくるのは単なる建物ではありません。ご家族の大切な人生の舞台であり、地域の未来を支える基盤です。
<br/><br/>
　時代の変化や技術革新が進む中でも、「誠実なものづくり」と「信頼される人づくり」を何より大切に。現場で培った経験、確かな技術、そしてスタッフ一人ひとりの思いやりが、必ずやお客様の満足につながると信じています。
<br/><br/>
　これからも南陽市宮内の街とともに、お客様の想いに応える建設会社であり続けます。今後ともご指導ご鞭撻のほど、よろしくお願い申し上げます。
`;

const members = [
  {
    name: "本木 太郎",
    role: "代表取締役",
    img: "/staff1.jpg",
    desc: "創業者として誠実・安心の施工をお約束します。"
  },
  {
    name: "佐藤 花子",
    role: "工事部長",
    img: "/staff2.jpg",
    desc: "現場を熟知し、高品質な工事管理を徹底します。"
  },
  {
    name: "鈴木 次郎",
    role: "大工主任",
    img: "/staff3.jpg",
    desc: "木の温もりと耐震性にこだわった職人技が持ち味です。"
  },
  {
    name: "山田 美咲",
    role: "事務・広報",
    img: "/staff4.jpg",
    desc: "お客様の声を大切に、笑顔でお迎えします。"
  }
];

const companyInfo = [
  { label: '会社名', value: '株式会社本木建設' },
  { label: '所在地', value: '山形県南陽市宮内2438-37' },
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
    <div className="max-w-3xl mx-auto px-2 sm:px-4 space-y-12 py-10">
      {/* 社長メッセージ */}
      <AnimatedSection>
  <Card className="relative overflow-hidden border-l-8 border-yellow-400 shadow-lg">
    {/* 背景画像＋モザイク処理 */}
    <div className="absolute inset-0 z-2">
      <div className="absolute inset-0">
  <Image
    src="/images/profile-bg.png"
    alt=""
    fill
    className="object-cover object-center scale-110 blur-sm brightness-55"
    sizes="100vw"
    priority
    draggable={false}
  />
  <div className="absolute inset-0 bg-yellow-50/5 backdrop-blur-xs" />
</div>
      <div className="absolute inset-0 bg-yellow-50/10 backdrop-blur-sm" />
    </div>
    <CardContent className="relative py-8 px-5 sm:px-10 flex flex-col items-center z-10">
      <div className="flex items-center gap-2 mb-4">
        <Quote className="text-yellow-500 w-8 h-8" />
        <span className="text-xl sm:text-2xl font-bold text-yellow-800">社長メッセージ</span>
      </div>
      <div className="text-gray-900 text-base sm:text-lg leading-relaxed text-justify max-w-2xl z-10">
        <span dangerouslySetInnerHTML={{ __html: ceoMessage }} />
      </div>
      <div className="flex items-center gap-3 mt-8">
        <Avatar className="w-14 h-14">
          <AvatarImage src="/staff1.jpg" alt="本木 太郎" />
          <AvatarFallback className="text-xl bg-yellow-200">本</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-bold text-gray-900">本木 太郎</div>
          <div className="text-sm text-yellow-800 font-semibold">代表取締役</div>
        </div>
      </div>
    </CardContent>
  </Card>
</AnimatedSection>
      {/* 会社概要 */}
      <AnimatedSection>
  <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-red-700">会社概要</h2>
  <Card className="relative shadow-lg overflow-hidden">
    <div className="absolute inset-0">
      <Image
  src="/images/about-bg.jpg"
  alt=""
  fill
  className="object-cover object-center blur-sm brightness-80 scale-105"
  sizes="100vw"
  priority
  draggable={false}
/>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
    </div>
    <CardContent className="relative z-10">
      <table className="w-full text-left">
        <tbody>
          {companyInfo.map((item) => (
            <tr key={item.label} className="border-b last:border-0 border-gray-200">
              <th className="p-2 w-36 sm:w-40 bg-gray-50/70 font-semibold text-gray-600">{item.label}</th>
              <td className="p-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardContent>
  </Card>
</AnimatedSection>

      {/* 従業員紹介エリア */}
      <AnimatedSection>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-red-700 mb-6">従業員紹介</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {members.map((m) => (
            <Card key={m.name} className="flex flex-col items-center p-6 shadow-md bg-white/80">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={m.img} alt={m.name} />
                <AvatarFallback className="text-2xl bg-neutral-200">{m.name[0]}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-900">{m.name}</div>
                <div className="text-red-700 font-semibold mb-2">{m.role}</div>
                <div className="text-sm text-gray-700">{m.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
